import React, { useState } from 'react';
import {
  Check,
  X,
  AlertTriangle,
  Camera,
  Flame,
  DoorOpen,
  Info,
  MapPin,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { SiteCategory, SiteCategoryKey } from '../types';
import { SITE_CATEGORIES } from '../data/etiquetteData';

interface CategoryDetailProps {
  selectedCategoryKey: SiteCategoryKey;
  onSelectCategory: (key: SiteCategoryKey) => void;
  searchFilter?: string;
  onOpenAiModalWithTopic?: (topic: string) => void;
}

export const CategoryDetail: React.FC<CategoryDetailProps> = ({
  selectedCategoryKey,
  onSelectCategory,
  searchFilter = '',
  onOpenAiModalWithTopic,
}) => {
  const currentCategory =
    SITE_CATEGORIES.find((c) => c.id === selectedCategoryKey) || SITE_CATEGORIES[0];

  const [activeTab, setActiveTab] = useState<'all' | 'dress' | 'etiquette' | 'prohibitions'>('all');

  return (
    <section id="categories" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Section Header */}
      <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
          Hệ Thống 5 Không Gian Văn Hóa &amp; Tâm Linh
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-3">
          Quy Chuẩn Theo Từng Loại Hình Địa Điểm
        </h2>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
          Mỗi không gian tín ngưỡng và di tích mang đặc trưng phong tục, lễ nghi và quy định ứng xử riêng biệt. Chọn địa điểm để tra cứu chi tiết.
        </p>
      </div>

      {/* Category Segmented Control Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        {SITE_CATEGORIES.map((cat) => {
          const isActive = cat.id === selectedCategoryKey;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 border ${
                isActive
                  ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm'
                  : 'bg-white text-stone-700 hover:text-stone-900 border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Main Category Card */}
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden mb-12">
        {/* Banner with Image and Historical Significance */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={currentCategory.image}
            alt={currentCategory.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <div className="text-xs font-medium text-amber-300 mb-1 tracking-wide">
              {currentCategory.tagline}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50 mb-2">
              {currentCategory.name}
            </h3>
            <p className="text-sm text-stone-200 max-w-3xl leading-relaxed font-light">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* Operational Highlights Strip */}
        <div className="bg-stone-50 border-y border-stone-200 px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
          <div className="flex items-start gap-2.5">
            <DoorOpen className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Quy tắc cửa vào / ra</span>
              <span>{currentCategory.entranceRule.doorway}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Flame className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Hương nhang &amp; Dâng lễ</span>
              <span>{currentCategory.incenseAndOfferings.note}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Camera className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">Quy định Chụp ảnh</span>
              <span>{currentCategory.photographyRules}</span>
            </div>
          </div>
        </div>

        {/* 3 Core Rule Columns */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Dress Code */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h4 className="font-serif font-bold text-lg text-stone-900">
                  1. Trang Phục Chuẩn Mực
                </h4>
              </div>

              {/* Required Items */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  Trang phục bắt buộc &amp; Khuyến khích:
                </span>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {currentCategory.dressCode.required.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prohibited Items */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-2">
                  Trang phục cấm kỵ / Từ chối vào:
                </span>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {currentCategory.dressCode.prohibited.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Fix Tip */}
              <div className="bg-amber-50/80 rounded-xl p-3.5 border border-amber-200/70 text-xs text-amber-900">
                <span className="font-semibold block mb-1">Mẹo xử lý nhanh khi lỡ mặc đồ ngắn:</span>
                <p className="leading-relaxed">{currentCategory.dressCode.quickFix}</p>
              </div>
            </div>

            {/* Column 2: Proper Etiquette (Do's) */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <h4 className="font-serif font-bold text-lg text-stone-900">
                  2. Hành Vi &amp; Nghi Thức Đúng
                </h4>
              </div>

              <div className="space-y-4">
                {currentCategory.properEtiquette.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-200/80">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Check className="w-4 h-4 text-amber-700 shrink-0" />
                      <h5 className="font-medium text-sm text-stone-900">{item.title}</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Prohibitions (Don'ts) */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <h4 className="font-serif font-bold text-lg text-stone-900">
                  3. Điều Tối Kỵ &amp; Nghiêm Cấm
                </h4>
              </div>

              <div className="space-y-4">
                {currentCategory.strictProhibitions.map((item, idx) => (
                  <div key={idx} className="bg-rose-50/50 rounded-xl p-4 border border-rose-200/70">
                    <div className="flex items-center gap-2 mb-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      <h5 className="font-medium text-sm text-rose-950">{item.title}</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Offerings Deep-dive & Real-world examples */}
          <div className="mt-10 pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h5 className="font-medium text-sm text-stone-900 mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                <span>Quy chuẩn lễ vật &amp; Hương đăng</span>
              </h5>
              <div className="text-xs text-stone-700 space-y-1.5">
                <p>
                  <span className="font-semibold text-emerald-800">Được dâng:</span>{' '}
                  {currentCategory.incenseAndOfferings.allowed}
                </p>
                <p>
                  <span className="font-semibold text-rose-800">Tuyệt đối tránh:</span>{' '}
                  {currentCategory.incenseAndOfferings.forbidden}
                </p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h5 className="font-medium text-sm text-stone-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-700" />
                <span>Một số địa điểm tiêu biểu tại Việt Nam</span>
              </h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {currentCategory.famousExamples.map((site, idx) => (
                  <span
                    key={idx}
                    className="bg-white px-2.5 py-1 rounded-md border border-stone-200 text-stone-800"
                  >
                    {site}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ask AI Contextual Prompt Button */}
          {onOpenAiModalWithTopic && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => onOpenAiModalWithTopic(currentCategory.name)}
                className="text-xs text-stone-700 hover:text-stone-900 flex items-center gap-1.5 font-medium px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Hỏi chuyên gia về phong tục tại {currentCategory.name}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
