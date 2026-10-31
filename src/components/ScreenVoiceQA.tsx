import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  Sparkles,
  BookOpen,
  Loader2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  FileText,
  Bookmark,
  Database,
} from 'lucide-react';

interface ScreenVoiceQAProps {
  initialQuestion?: string;
}

interface AnswerResult {
  answer: string;
  recordName?: string | null;
  sourceMaterial?: string | null;
  source?: string;
}

export const ScreenVoiceQA: React.FC<ScreenVoiceQAProps> = ({ initialQuestion = '' }) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const recognitionRef = useRef<any>(null);

  // Suggested voice questions based on disan.json
  const quickVoicePrompts = [
    'Nhã nhạc cung đình Huế có đặc trưng gì và biểu diễn trong dịp nào?',
    'Dân ca Quan họ Bắc Ninh có những làn điệu và kỹ thuật hát nào?',
    'Không gian văn hóa Cồng chiêng Tây Nguyên gắn liền với những dân tộc nào?',
    'Hát Xoan Phú Thọ gồm những chặng hát nào và nghệ nhân tiêu biểu là ai?',
    'Nghệ thuật Đờn ca tài tử Nam Bộ sử dụng những nhạc cụ nào?',
    'Quần thể Di tích Cố đô Huế gồm các công trình nổi bật nào?',
  ];

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'vi-VN';

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((res: any) => res[0].transcript)
          .join('');
        setQuestion(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setSpeechError('Trình duyệt chưa được cấp quyền micro. Xin hãy cấp quyền.');
        } else {
          setSpeechError('Không nhận diện được giọng nói. Xin hãy thử lại hoặc nhập câu hỏi.');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (_) {}
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleListen = () => {
    if (!recognitionRef.current) {
      setSpeechError(
        'Trình duyệt này chưa hỗ trợ nhận diện giọng nói trực tiếp. Bạn hãy nhập câu hỏi bằng văn bản.'
      );
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setSpeechError(null);
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error('Failed to start speech recognition:', e);
      }
    }
  };

  const handleAsk = async (queryText?: string) => {
    const q = queryText || question;
    if (!q.trim()) return;

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setLoading(true);
    setResult(null);
    setSpeechError(null);

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    try {
      const res = await fetch('/api/ask-etiquette', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });

      if (!res.ok) {
        throw new Error('Lỗi phản hồi từ máy chủ.');
      }

      const data = await res.json();
      setResult({
        answer: data.answer,
        recordName: data.recordName,
        sourceMaterial: data.sourceMaterial,
        source: data.source,
      });
    } catch (err: any) {
      console.error(err);
      setSpeechError('Không thể kết nối máy chủ cố vấn lúc này. Xin hãy thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSpeakAnswer = () => {
    if (!window.speechSynthesis || !result?.answer) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const cleanText = result.answer.replace(/[#*`_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 sm:p-7 border border-stone-800 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
          <Database className="w-4 h-4" />
          <span>Hỏi Đáp Dựa Hoàn Toàn Trên Dữ Liệu disan.json</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-50 mb-2">
          Hỏi Đáp Di Sản Bằng Lời Nói
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl">
          Gemini sẽ lắng nghe câu hỏi của bạn, tra cứu chính xác trong tệp <strong className="text-amber-200 font-medium">disan.json</strong> và trả lời dựa hoàn toàn trên dữ liệu đó. Mỗi câu trả lời kèm tên bản ghi và nguồn tư liệu đã dùng.
        </p>
      </div>

      {/* Voice Recognition Control Card */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col items-center text-center space-y-4">
        {/* Animated Mic Button */}
        <div className="relative">
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping scale-125" />
          )}
          <button
            onClick={toggleListen}
            className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 ${
              isListening
                ? 'bg-rose-600 text-white ring-4 ring-rose-200'
                : 'bg-stone-900 hover:bg-stone-800 text-amber-300'
            }`}
            title={isListening ? 'Bấm để dừng nói' : 'Bấm để bắt đầu nói câu hỏi'}
          >
            {isListening ? (
              <MicOff className="w-8 h-8 animate-pulse" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </button>
        </div>

        <div>
          <span className="font-serif font-bold text-base text-stone-900 block">
            {isListening ? 'Đang lắng nghe lời nói của bạn...' : 'Bấm vào Micro để đặt câu hỏi bằng lời'}
          </span>
          <span className="text-xs text-stone-500 font-light block mt-0.5">
            {isListening
              ? 'Nói câu hỏi về di sản (ví dụ: "Nhã nhạc cung đình Huế có những nghệ nhân tiêu biểu nào?")'
              : 'Nói trực tiếp hoặc nhập câu hỏi bằng chữ vào ô dưới'}
          </span>
        </div>

        {/* Live Audio Waves Simulation */}
        {isListening && (
          <div className="flex items-center justify-center gap-1 h-6">
            <span className="w-1 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
            <span className="w-1 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s] h-6" />
            <span className="w-1 bg-amber-500 rounded-full animate-bounce h-5" />
            <span className="w-1 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.2s] h-6" />
            <span className="w-1 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.35s] h-3" />
          </div>
        )}

        {speechError && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{speechError}</span>
          </div>
        )}

        {/* Input box with send button */}
        <div className="w-full flex items-center gap-2 pt-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Nội dung câu hỏi của bạn sẽ hiển thị ở đây..."
            className="flex-1 px-4 py-2.5 bg-stone-50 text-xs sm:text-sm rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-stone-900"
          />
          <button
            onClick={() => handleAsk()}
            disabled={loading || !question.trim()}
            className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-medium disabled:opacity-50 transition-colors flex items-center gap-1.5 shrink-0"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Tra cứu</span>
          </button>
        </div>
      </div>

      {/* Answer Display Card */}
      {loading && (
        <div className="p-8 bg-white rounded-2xl border border-stone-200 text-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-amber-700 mx-auto" />
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            Gemini đang đọc câu hỏi và đối chiếu trong tệp disan.json...
          </p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-stone-900">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Kết Quả Tra Cứu Từ disan.json</span>
            </div>

            {/* Read aloud TTS button */}
            <button
              onClick={toggleSpeakAnswer}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
                isSpeaking
                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200'
              }`}
              title="Đọc to câu trả lời bằng giọng nói"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Dừng đọc</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-stone-800" />
                  <span>Nghe đọc lời giải</span>
                </>
              )}
            </button>
          </div>

          {/* Main Answer text */}
          <div className="text-xs sm:text-sm text-stone-800 leading-relaxed font-light whitespace-pre-line bg-stone-50/80 rounded-xl p-4 sm:p-5 border border-stone-200/80">
            {result.answer}
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={() => {
                setResult(null);
                setQuestion('');
              }}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Đặt câu hỏi khác</span>
            </button>
          </div>
        </div>
      )}

      {/* Suggested Questions grounded on disan.json */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-amber-700" />
          <span>Câu Hỏi Mẫu Dựa Trên Cơ Sở Dữ Liệu disan.json (Chạm để hỏi ngay)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {quickVoicePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuestion(prompt);
                handleAsk(prompt);
              }}
              className="text-left p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 text-xs text-stone-700 hover:text-stone-950 transition-colors leading-relaxed"
            >
              • {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
