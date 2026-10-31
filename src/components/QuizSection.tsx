import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RefreshCw, ChevronRight, HelpCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizData';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOptionIdx(idx);
    setHasAnswered(true);
    if (currentQ.options[idx].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionIdx(null);
      setHasAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionIdx(null);
    setHasAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Thử Thách Hiểu Biết Văn Hóa
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-2">
            Trắc Nghiệm Tình Huống Ứng Xử
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            Cùng thử tài qua 6 câu hỏi tình huống thực tế khi viếng thăm Chùa, Đền, Đình, Nhà thờ và Di tích lịch sử Việt Nam.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            {/* Progress Bar & Counter */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-3 font-medium">
              <span>
                Câu {currentIdx + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span>Điểm hiện tại: {score} câu đúng</span>
            </div>
            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mb-6">
              <div
                className="bg-stone-900 h-full transition-all duration-300"
                style={{
                  width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>

            {/* Scenario and Question */}
            <div className="mb-6">
              <div className="text-xs text-amber-800 bg-amber-50 rounded-lg p-2.5 border border-amber-200/60 mb-3 font-medium">
                Tình huống: {currentQ.scenario}
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOptionIdx === idx;
                let optionStyle =
                  'border-stone-200 hover:border-stone-300 hover:bg-stone-50/70 text-stone-800';

                if (hasAnswered) {
                  if (opt.isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'border-rose-500 bg-rose-50/70 text-rose-950';
                  } else {
                    optionStyle = 'border-stone-200 opacity-60 text-stone-600';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                  >
                    <span>{opt.text}</span>
                    {hasAnswered && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {hasAnswered && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {hasAnswered && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed mb-6 border ${
                  selectedOptionIdx !== null && currentQ.options[selectedOptionIdx].isCorrect
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div className="font-semibold mb-1">
                  {selectedOptionIdx !== null && currentQ.options[selectedOptionIdx].isCorrect
                    ? '✓ Bạn đã chọn đúng!'
                    : 'Giải thích văn hóa:'}
                </div>
                <div>
                  {selectedOptionIdx !== null &&
                    currentQ.options[selectedOptionIdx].explanation}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex justify-end">
              {hasAnswered && (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>
                    {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Completion Certificate Card */
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                Chứng Nhận Mini Văn Hóa Số
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                {score >= 5
                  ? 'Đại Sứ Văn Hóa Ứng Xử Di Tích'
                  : score >= 3
                  ? 'Người Hiểu Biết Phong Tục Việt'
                  : 'Cần Tìm Hiểu Thêm Về Phong Tục'}
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-light">
                Bạn đã trả lời đúng <span className="font-bold text-stone-900">{score}</span> /{' '}
                {QUIZ_QUESTIONS.length} câu hỏi tình huống thực tế.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs text-stone-700 max-w-md mx-auto text-left space-y-1.5">
              <span className="font-semibold text-stone-900 block">Lời khuyên văn hóa:</span>
              <p>
                Mỗi khi bước chân vào một chốn thờ tự hay di tích lịch sử, xin hãy giữ trọn ba tâm: <strong>Tôn Kính</strong> đối với các bậc tiền nhân, <strong>Thanh Tịnh</strong> trong lời ăn tiếng nói, và <strong>Ý Thức</strong> bảo vệ từng viên đá, khúc gỗ của ngàn xưa.
              </p>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Làm lại trắc nghiệm</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
