import React, { useState } from 'react';
import {
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  DoorOpen,
  Flame,
  Camera,
  MapPin,
  Mic,
  Shirt,
  Footprints,
  Info,
} from 'lucide-react';
import { SiteCategoryKey, SiteCategory } from '../types';
import { SITE_CATEGORIES } from '../data/etiquetteData';

interface ScreenDetailProps {
  categoryKey: SiteCategoryKey;
  onSelectCategory: (key: SiteCategoryKey) => void;
  onBackToHome: () => void;
  onOpenVoiceQA: (topic: string) => void;
}

export const ScreenDetail: React.FC<ScreenDetailProps> = ({
  categoryKey,
  onSelectCategory,
  onBackToHome,
  onOpenVoiceQA,
}) => {
  const currentCategory =
    SITE_CATEGORIES.find((c) => c.id === categoryKey) || SITE_CATEGORIES[0];

  const [activeSection, setActiveSection] = useState<'dress' | 'etiquette' | 'prohibitions'>('dress');

  return (
    <div className="space-y-6 pb-6">
      {/* Top Navigation Row: Back button & Category Switcher */}
      <div className="flex items-center gap-2">
        <button
          onClick={onBackToHome}
          className="p-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-900 flex items-center gap-1 text-xs font-medium shadow-xs transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Trang chủ</span>
        </button>

        {/* Category Pills (Horizontal Scroller) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar flex-1">
          {SITE_CATEGORIES.map((cat) => {
            const isActive = cat.id === currentCategory.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
                }`}
              >
                {cat.name.split(' (')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Presentation Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        {/* Banner with Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-stone-900">
          <img
            src={currentCategory.image}
            alt={currentCategory.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
            <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block mb-1">
              Hồ Sơ Chuẩn Mực Văn Hóa
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-50 leading-tight">
              {currentCategory.name}
            </h1>
            <p className="text-xs sm:text-sm text-stone-200 font-light mt-1 max-w-2xl leading-relaxed">
              {currentCategory.tagline}
            </p>
          </div>
        </div>

        {/* Key Quick Facts Strip */}
        <div className="bg-stone-50 border-b border-stone-200 p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
          <div className="flex items-start gap-2">
            <DoorOpen className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Quy tắc cửa vào / ra</span>
              <span className="text-stone-600 font-light">{currentCategory.entranceRule.doorway}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Flame className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Dâng hương &amp; Lễ</span>
              <span className="text-stone-600 font-light">{currentCategory.incenseAndOfferings.note}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Camera className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Quy định chụp ảnh</span>
              <span className="text-stone-600 font-light">{currentCategory.photographyRules}</span>
            </div>
          </div>
        </div>

        {/* Section Segmented Switcher */}
        <div className="p-4 sm:p-6 border-b border-stone-200">
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActiveSection('dress')}
              className={`py-2 px-2 rounded-lg transition-all ${
                activeSection === 'dress'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              1. Trang Phục
            </button>
            <button
              onClick={() => setActiveSection('etiquette')}
              className={`py-2 px-2 rounded-lg transition-all ${
                activeSection === 'etiquette'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              2. Nghi Thức Đúng
            </button>
            <button
              onClick={() => setActiveSection('prohibitions')}
              className={`py-2 px-2 rounded-lg transition-all ${
                activeSection === 'prohibitions'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              3. Điều Tối Kỵ
            </button>
          </div>
        </div>

        {/* Tab 1: Dress Code */}
        {activeSection === 'dress' && (
          <div className="p-5 sm:p-6 space-y-6">
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-3 flex items-center gap-2">
                <Shirt className="w-4 h-4 text-emerald-700" />
                <span>Trang Phục Bắt Buộc &amp; Khuyến Khích</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-light">
                {currentCategory.dressCode.required.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-emerald-50/60 border border-emerald-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-3 flex items-center gap-2">
                <X className="w-4 h-4 text-rose-700" />
                <span>Trang Phục Cấm Kỵ / Bị Nhắc Nhở</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-light">
                {currentCategory.dressCode.prohibited.map((proh, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-rose-50/60 border border-rose-100">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{proh}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Fix */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-700" />
                <span>Mẹo cứu nguy khi lỡ mặc đồ ngắn:</span>
              </span>
              <p className="font-light leading-relaxed">{currentCategory.dressCode.quickFix}</p>
            </div>
          </div>
        )}

        {/* Tab 2: Proper Etiquette (Do's) */}
        {activeSection === 'etiquette' && (
          <div className="p-5 sm:p-6 space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2 flex items-center gap-2">
              <Footprints className="w-4 h-4 text-amber-700" />
              <span>Hành Vi &amp; Nghi Thức Đúng Chuẩn Mực</span>
            </h3>

            <div className="space-y-3">
              {currentCategory.properEtiquette.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed pl-5.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Prohibitions (Don'ts) */}
        {activeSection === 'prohibitions' && (
          <div className="p-5 sm:p-6 space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-700" />
              <span>Những Điều Tối Kỵ &amp; Nghiêm Cấm Tuyệt Đối</span>
            </h3>

            <div className="space-y-3">
              {currentCategory.strictProhibitions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-rose-950 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-stone-700 font-light leading-relaxed pl-5.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Offerings and Famous Sites Footer Strip */}
        <div className="p-5 sm:p-6 bg-stone-50 border-t border-stone-200 space-y-4">
          <div>
            <span className="text-xs font-bold text-stone-900 block mb-1">
              Địa điểm tiêu biểu tại Việt Nam:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentCategory.famousExamples.map((ex, i) => (
                <span
                  key={i}
                  className="bg-white px-2.5 py-1 rounded-md border border-stone-200 text-xs text-stone-700 font-light"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Jump to Voice QA Button */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onOpenVoiceQA(currentCategory.name)}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium flex items-center gap-2 transition-all shadow-xs"
            >
              <Mic className="w-4 h-4 text-amber-300" />
              <span>Hỏi đáp bằng giọng nói về {currentCategory.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
