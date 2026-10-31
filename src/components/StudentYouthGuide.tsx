import React, { useState } from 'react';
import {
  GraduationCap,
  Camera,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  Backpack,
  Award,
} from 'lucide-react';
import { YOUTH_CHECKIN_RULES, FIELD_TRIP_STUDY_GUIDE } from '../data/studentYouthData';

interface StudentYouthGuideProps {
  onStartQuiz: () => void;
}

export const StudentYouthGuide: React.FC<StudentYouthGuideProps> = ({ onStartQuiz }) => {
  const [selectedRuleId, setSelectedRuleId] = useState<string>('youth-1');

  return (
    <section className="py-8 sm:py-12 max-w-5xl mx-auto px-4">
      {/* Editorial Youth Banner */}
      <div className="bg-amber-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Góc Học Sinh &amp; Sinh Viên</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-50 mb-2">
          Sổ Tay Dã Ngoại &amp; Check-in Văn Minh
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed font-light">
          Chụp ảnh kỷ yếu lung linh, tham quan ngoại khóa vui vẻ nhưng vẫn giữ trọn nét thanh lịch, hiểu biết và văn minh của thế hệ trẻ trước di sản cha ông.
        </p>
      </div>

      <div className="space-y-10">
        {/* Module 1: 5 Civilized Check-in Rules */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-5">
            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-700" />
              <span>Quy Tắc "Sống Ảo" Tôn Trọng Không Gian Thiêng</span>
            </h3>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Chụp ảnh kỷ yếu, ảnh dã ngoại đẹp ngút ngàn mà không bị bảo vệ nhắc nhở
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {YOUTH_CHECKIN_RULES.map((rule) => (
              <div
                key={rule.id}
                className="bg-stone-50 rounded-xl p-5 border border-stone-200/80 space-y-3"
              >
                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                  {rule.title}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {rule.summary}
                </p>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-950 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Nên làm:</span>
                      <span className="font-light">{rule.doText}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-950 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Tuyệt đối tránh:</span>
                      <span className="font-light">{rule.dontText}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/60 font-light italic">
                  💡 Vì sao điều này quan trọng: {rule.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module 2: Field Trip Study Guide for School Projects */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-5">
            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-stone-800" />
              <span>Cẩm Nang Đi Thực Tế &amp; Viết Bài Thu Hoạch</span>
            </h3>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Bí quyết đạt điểm cao môn Lịch sử, Giáo dục công dân và Địa phương học
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FIELD_TRIP_STUDY_GUIDE.map((stage, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200 space-y-3"
              >
                <h4 className="font-semibold text-xs sm:text-sm text-stone-900 uppercase tracking-wide border-b border-stone-200 pb-2">
                  {stage.step}
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 leading-relaxed font-light">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Module 3: Backpack Survival Kit */}
        <div className="bg-amber-50/70 rounded-2xl p-5 sm:p-6 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Backpack className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-amber-950">
                Vật Bất Ly Thân Trong Balo Dã Ngoại Của Học Sinh
              </h4>
              <p className="text-xs text-amber-900 font-light leading-relaxed mt-0.5">
                1 chiếc khăn quàng mỏng (che vai/phủ chân khi lỡ mặc đồ cộc) + 1 bình nước cá nhân + 1 đôi tất chân sạch (khi vào gian chùa phải cởi giày).
              </p>
            </div>
          </div>

          <button
            onClick={onStartQuiz}
            className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Thử thách Trắc nghiệm Di tích</span>
          </button>
        </div>
      </div>
    </section>
  );
};
