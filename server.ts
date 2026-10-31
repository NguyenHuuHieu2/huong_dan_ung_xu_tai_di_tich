import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Google GenAI if GEMINI_API_KEY is available
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error('Error initializing GoogleGenAI:', err);
  }
}

// Function to read latest disan.json
function loadDisanRecords(): any[] {
  const possiblePaths = [
    path.join(__dirname, 'disan.json'),
    path.join(__dirname, 'src', 'data', 'disan.json'),
    path.join(process.cwd(), 'disan.json'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      try {
        const raw = fs.readFileSync(p, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // Filter out completely blank records where 'tên chính thức' is empty
          return parsed.filter(
            (item) => item && typeof item === 'object' && item['tên chính thức'] && item['tên chính thức'].trim() !== ''
          );
        }
      } catch (err) {
        console.error(`Error reading ${p}:`, err);
      }
    }
  }
  return [];
}

// Local search fallback when Gemini API key is missing or calls fail
function searchDisanFallback(question: string, records: any[]): {
  answer: string;
  recordName?: string;
  sourceMaterial?: string;
} {
  const q = question.toLowerCase().trim();
  if (!q) {
    return { answer: 'Vui lòng nhập câu hỏi để tra cứu.' };
  }

  for (const rec of records) {
    const officialName = (rec['tên chính thức'] || '').toLowerCase();
    const otherNames = Array.isArray(rec['tên gọi khác'])
      ? rec['tên gọi khác'].map((n: string) => n.toLowerCase())
      : [(rec['tên gọi khác'] || '').toLowerCase()];
    const location = (rec['địa phương'] || '').toLowerCase();
    const type = (rec['loại hình'] || '').toLowerCase();
    const desc = (rec['mô tả đặc trưng'] || '').toLowerCase();

    // Strict keyword matching
    const matchesOfficial = officialName && q.includes(officialName);
    const matchesOther = otherNames.some((n: string) => n && q.includes(n));
    const words = officialName.split(/\s+/).filter((w: string) => w.length > 2);
    const matchWordCount = words.filter((w: string) => q.includes(w)).length;
    const isStrongNameMatch = words.length > 0 && matchWordCount >= Math.min(2, words.length);

    if (matchesOfficial || matchesOther || isStrongNameMatch) {
      const recordName = rec['tên chính thức'];
      const sourceMaterial = rec['nguồn tư liệu'] || 'Chưa cập nhật nguồn tư liệu';
      const descText = rec['mô tả đặc trưng'] || 'Chưa có mô tả đặc trưng';
      const statusText = rec['tình trạng ghi danh'] || 'Chưa có thông tin ghi danh';
      const artistText = Array.isArray(rec['nghệ nhân tiêu biểu'])
        ? rec['nghệ nhân tiêu biểu'].join(', ')
        : rec['nghệ nhân tiêu biểu'] || 'Chưa cập nhật nghệ nhân';

      const answer = `**Tên bản ghi**: ${recordName}

- **Loại hình**: ${rec['loại hình'] || 'Chưa phân loại'}
- **Địa phương**: ${rec['địa phương'] || 'Chưa rõ'}
- **Mô tả đặc trưng**: ${descText}
- **Nghệ nhân tiêu biểu**: ${artistText}
- **Tình trạng ghi danh**: ${statusText}

**Nguồn tư liệu**: ${sourceMaterial}`;

      return { answer, recordName, sourceMaterial };
    }
  }

  // Strictly return that no data is found, no generic answers
  return {
    answer: 'Chưa có tư liệu về nội dung này trong cơ sở dữ liệu disan.json.',
  };
}

// API endpoint for Q&A based solely on disan.json
app.post('/api/ask-etiquette', async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Câu hỏi không hợp lệ.' });
    }

    const records = loadDisanRecords();

    if (!records || records.length === 0) {
      return res.json({
        answer: 'Chưa có tư liệu về nội dung này trong cơ sở dữ liệu disan.json.',
        recordName: null,
        sourceMaterial: null,
        source: 'disan_json_empty',
      });
    }

    if (!aiClient) {
      const fallback = searchDisanFallback(question, records);
      return res.json({
        answer: fallback.answer,
        recordName: fallback.recordName || null,
        sourceMaterial: fallback.sourceMaterial || null,
        source: 'disan_json_local',
      });
    }

    // System instruction strictly restricting Gemini to disan.json with ZERO hallucination
    const systemInstruction = `Bạn là Trợ lý Tra cứu Di sản Văn hóa Việt Nam.
Nhiệm vụ của bạn là đọc câu hỏi của người dùng, tìm kiếm trong tệp dữ liệu disan.json dưới đây và trả lời DỰA HOÀN TOÀN TRÊN DỮ LIỆU ĐÓ.

QUY TẮC BẮT BUỘC:
1. TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ SUY ĐOÁN HOẶC BỊA THÔNG TIN VỀ DI SẢN.
2. NẾU KHÔNG TÌM THẤY THÔNG TIN TRONG TỆP DỮ LIỆU disan.json, BẮT BUỘC PHẢI TRẢ LỜI CHÍNH XÁC:
   "Chưa có tư liệu về nội dung này trong cơ sở dữ liệu disan.json."
   TUYỆT ĐỐI KHÔNG ĐƯỢC ĐƯA RA CÂU TRẢ LỜI CHUNG CHUNG HOẶC DÙNG KIẾN THỨC BÊN NGOÀI TỆP.
3. Khi tìm thấy thông tin trong tệp disan.json, câu trả lời BẮT BUỘC PHẢI KÈM THEO:
   - **Tên bản ghi**: [Giá trị chính xác từ trường 'tên chính thức']
   - **Nguồn tư liệu**: [Giá trị chính xác từ trường 'nguồn tư liệu']`;

    const promptText = `DỮ LIỆU TỆP disan.json:
${JSON.stringify(records, null, 2)}

CÂU HỎI CỦA NGƯỜI DÙNG:
"${question}"

Hãy tra cứu và trả lời. Nếu không có trong tệp dữ liệu, chỉ trả lời: "Chưa có tư liệu về nội dung này trong cơ sở dữ liệu disan.json."`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.0, // 0.0 for zero hallucination and strict adherence to text
      },
    });

    const text = response.text?.trim() || 'Chưa có tư liệu về nội dung này trong cơ sở dữ liệu disan.json.';

    // Extract record name and source material if present in output text
    let recordNameMatch = text.match(/\*\*Tên bản ghi\*\*:\s*([^\n]+)/i);
    let sourceMaterialMatch = text.match(/\*\*Nguồn tư liệu\*\*:\s*([^\n]+)/i);

    return res.json({
      answer: text,
      recordName: recordNameMatch ? recordNameMatch[1].trim() : null,
      sourceMaterial: sourceMaterialMatch ? sourceMaterialMatch[1].trim() : null,
      source: 'gemini_disan_json',
    });
  } catch (error: any) {
    console.error('API /api/ask-etiquette error:', error);
    const records = loadDisanRecords();
    const fallback = searchDisanFallback(req.body?.question || '', records);
    return res.json({
      answer: fallback.answer,
      recordName: fallback.recordName || null,
      sourceMaterial: fallback.sourceMaterial || null,
      source: 'disan_json_fallback',
    });
  }
});

// Development vs Production
const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
