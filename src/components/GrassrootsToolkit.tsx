import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  ClipboardList,
  Megaphone,
  Copy,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
} from 'lucide-react';
import {
  GRASSROOTS_CHECKLIST,
  GRASSROOTS_SCENARIOS,
  GRASSROOTS_ANNOUNCEMENT_SCRIPTS,
  GrassrootsScenario,
} from '../data/grassrootsData';

export const GrassrootsToolkit: React.FC = () => {
  // Checklist State
  const [checkedIds, setCheckedIds] = useState<string[]>([
    'check-1',
    'check-3',
    'check-5',
  ]);
  const [activeScenarioId, setActiveScenarioId] = useState<string>('sc-1');
  const [copiedScriptIdx, setCopiedScriptIdx] = useState<number | null>(null);
  const [copiedDialogueId, setCopiedDialogueId] = useState<string | null>(null);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyScript = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptIdx(idx);
    setTimeout(() => setCopiedScriptIdx(null), 2000);
  };

  const handleCopyDialogue = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDialogueId(id);
    setTimeout(() => setCopiedDialogueId(null), 2000);
  };

  const currentScenario =
    GRASSROOTS_SCENARIOS.find((s) => s.id === activeScenarioId) || GRASSROOTS_SCENARIOS[0];

  const checklistProgress = Math.round(
    (checkedIds.length / GRASSROOTS_CHECKLIST.length) * 100
  );

  return (
    <section className="py-8 sm:py-12 max-w-5xl mx-auto px-4">
      {/* Editorial Header */}
      <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Góc Tác Nghiệp Cơ Sở</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-100 mb-2">
          Cẩm Nang Nghiệp Vụ Cán Bộ Văn Hóa
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed font-light">
          Thiết kế dành riêng cho cán bộ văn hóa xã, phường, ban khánh tiết đình chùa thôn làng và ban tổ chức lễ hội – những người trực tiếp gìn giữ nền nếp văn minh nơi thờ tự cơ sở.
        </p>
      </div>

      <div className="space-y-10">
        {/* Module 1: Field Inspection Checklist */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 mb-5">
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-emerald-700" />
                <span>Bảng Kiểm Tra Thực Địa Di Tích (Checklist)</span>
              </h3>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                Kiểm tra các hạng mục chuẩn bị trước giờ đón khách thập phương
              </p>
            </div>
            {/* Progress Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-stone-600">
                Đạt: {checkedIds.length}/{GRASSROOTS_CHECKLIST.length}
              </span>
              <div className="w-24 bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{ width: `${checklistProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {GRASSROOTS_CHECKLIST.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-stone-800'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-stone-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="font-semibold block text-stone-900">
                      {item.title}
                    </span>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">
                      {item.checkDescription}
                    </p>
                    <div className="text-[11px] text-emerald-800 bg-emerald-100/50 rounded px-2 py-0.5 inline-block font-medium mt-1">
                      Mẹo: {item.actionTip}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Module 2: Scenario Resolution Playbook */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-5">
            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Xử Lý 5 Tình Huống Nhạy Cảm Thường Gặp</span>
            </h3>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Phương pháp tiếp cận lịch thiệp, không gây bức xúc, đúng quy định pháp luật
            </p>
          </div>

          {/* Scenario Tabs (Single-line scroller) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {GRASSROOTS_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 border transition-all ${
                  activeScenarioId === sc.id
                    ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                }`}
              >
                Tình huống {idx + 1}
              </button>
            ))}
          </div>

          {/* Active Scenario Card */}
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200 space-y-5">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                Tình huống thực tế:
              </span>
              <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                {currentScenario.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light mt-1">
                {currentScenario.situation}
              </p>
            </div>

            {/* Danger note */}
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-xs text-rose-900">
              <span className="font-semibold block mb-0.5">Tác hại nếu không can thiệp kịp thời:</span>
              <p className="leading-relaxed">{currentScenario.danger}</p>
            </div>

            {/* Resolution Steps */}
            <div>
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                Các bước can thiệp văn minh:
              </span>
              <div className="space-y-1.5">
                {currentScenario.resolutionSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white border border-stone-200/80 text-xs sm:text-sm text-stone-700"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Script for Officer */}
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <Megaphone className="w-4 h-4 text-amber-700" />
                  <span>Mẫu câu nhắc nhở trực tiếp (Không gây cãi cọ):</span>
                </span>
                <button
                  onClick={() =>
                    handleCopyDialogue(currentScenario.suggestedDialogue, currentScenario.id)
                  }
                  className="text-xs text-amber-900 hover:text-stone-950 flex items-center gap-1 px-2 py-0.5 rounded border border-amber-300 bg-white"
                >
                  {copiedDialogueId === currentScenario.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed font-serif">
                {currentScenario.suggestedDialogue}
              </p>
            </div>

            {/* Legal basis */}
            <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
              <FileText className="w-3.5 h-3.5 text-stone-400" />
              <span>Căn cứ quy định: {currentScenario.legalReference}</span>
            </div>
          </div>
        </div>

        {/* Module 3: Audio Announcement Scripts */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-5">
            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-stone-800" />
              <span>Mẫu Lời Phát Thanh Loa Truyền Thanh Di Tích</span>
            </h3>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Dành cho bộ phận phát thanh di tích hoặc trưởng đoàn thông báo trên xe
            </p>
          </div>

          <div className="space-y-4">
            {GRASSROOTS_ANNOUNCEMENT_SCRIPTS.map((script, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-semibold text-stone-900">{script.title}</span>
                  <button
                    onClick={() => handleCopyScript(script.text, idx)}
                    className="flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 px-2 py-1 rounded border border-stone-200 bg-white transition-colors"
                  >
                    {copiedScriptIdx === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép bản đọc</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-stone-700 leading-relaxed font-light">{script.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
