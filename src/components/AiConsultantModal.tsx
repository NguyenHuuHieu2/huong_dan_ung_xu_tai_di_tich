import React, { useState } from 'react';
import { X, Sparkles, Send, BookOpen, AlertCircle, Loader2 } from 'lucide-react';

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [question, setQuestion] = useState(
    initialTopic ? `Quy tắc ứng xử và trang phục khi đến ${initialTopic}?` : ''
  );
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const sampleQuestions = [
    'Vì sao tuyệt đối không được giẫm lên bậu cửa (ngạch cửa)?',
    'Thắp mấy nén hương khi đi lễ Chùa và Đền?',
    'Phụ nữ trong kỳ kinh nguyệt có được đi chùa không?',
    'Người ngoại đạo khi đến dự lễ ở Nhà thờ cần kiêng kỵ gì?',
    'Có được mang gà luộc, thịt lợn vào cúng ở Chính điện Tam Bảo không?',
    'Nhét tiền vào tay tượng Phật và miệng rùa đá bị ảnh hưởng gì?',
  ];

  const handleAsk = async (qText?: string) => {
    const query = qText || question;
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const res = await fetch('/api/ask-etiquette', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          placeType: initialTopic || 'Chung',
        }),
      });

      if (!res.ok) {
        throw new Error('Lỗi khi gửi yêu cầu tới máy chủ.');
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: any) {
      console.error(err);
      setError('Không thể kết nối máy chủ cố vấn lúc này. Hãy thử lại sau giây lát.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Cố Vấn Văn Hóa &amp; Phong Tục Nơi Thờ Tự
              </h3>
              <p className="text-xs text-stone-500 font-light">
                Giải đáp khúc chiết mọi băn khoăn về trang phục, lễ vật và phép tắc ứng xử
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {/* Quick Preset Questions */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Câu hỏi tình huống thường gặp:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sampleQuestions.map((sq, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuestion(sq);
                    handleAsk(sq);
                  }}
                  className="text-left text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1.5 rounded-lg border border-stone-200/80 transition-colors"
                >
                  {sq}
                </button>
              ))}
            </div>
          </div>

          {/* Answer display */}
          {loading && (
            <div className="py-12 flex flex-col items-center justify-center text-stone-500 gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-stone-800" />
              <p className="text-xs font-medium">Đang tra cứu tư liệu phong tục và quy tắc ứng xử...</p>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {answer && !loading && (
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm leading-relaxed space-y-3 font-light">
              <div className="flex items-center gap-1.5 font-serif font-bold text-stone-900 text-sm pb-2 border-b border-stone-200">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Giải đáp chuẩn mực văn hóa:</span>
              </div>
              <div className="whitespace-pre-line">{answer}</div>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Nhập câu hỏi của bạn (ví dụ: mặc váy qua gối hở vai vào đền được không?)..."
              className="flex-1 px-3.5 py-2.5 bg-white text-xs sm:text-sm rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-stone-900"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-4 py-2.5 bg-stone-900 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-stone-800 disabled:opacity-50 transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Gửi câu hỏi</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
