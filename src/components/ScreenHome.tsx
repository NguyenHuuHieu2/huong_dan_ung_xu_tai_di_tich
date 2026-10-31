import React, { useState } from 'react';
import {
  Search,
  Zap,
  Mic,
  ArrowRight,
  Shield,
  GraduationCap,
  Sparkles,
  Footprints,
  Flame,
  Shirt,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { SiteCategoryKey, SiteCategory } from '../types';
import { SITE_CATEGORIES } from '../data/etiquetteData';

interface ScreenHomeProps {
  onSelectCategory: (categoryKey: SiteCategoryKey) => void;
  onOpenVoiceQA: (initialQuestion?: string) => void;
  onOpenEmergency: () => void;
}

export const ScreenHome: React.FC<ScreenHomeProps> = ({
  onSelectCategory,
  onOpenVoiceQA,
  onOpenEmergency,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const quickFilterTags = [
    { label: 'Bậu cửa', query: 'ngạch cửa' },
    { label: 'Thắp hương', query: '1 nén hương' },
    { label: 'Áo hai dây', query: 'áo hai dây' },
    { label: 'Tiền lẻ', query: 'tiền lẻ' },
    { label: 'Rùa đá', query: 'rùa đá' },
    { label: 'Lễ mặn', query: 'lễ mặn' },
  ];

  const filteredCategories = SITE_CATEGORIES.filter((cat) => {
    const term = searchTerm.toLowerCase();
    if (!term) return true;
    return (
      cat.name.toLowerCase().includes(term) ||
      cat.description.toLowerCase().includes(term) ||
      cat.famousExamples.some((ex) => ex.toLowerCase().includes(term)) ||
      cat.properEtiquette.some(
        (e) => e.title.toLowerCase().includes(term) || e.desc.toLowerCase().includes(term)
      ) ||
      cat.strictProhibitions.some(
        (p) => p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)
      )
    );
  });

  return (
    <div className="space-y-6 pb-6">
      {/* Hero Welcome Banner (Mobile Optimized) */}
      <div className="relative overflow-hidden rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/src/assets/images/hero_vietnam_heritage_sanctum_1793405785844.jpg"
            alt="Di tích lịch sử Việt Nam"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        </div>

        <div className="relative z-10 p-5 sm:p-7">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-2">
            <span>Cẩm Nang Bỏ Túi Cơ Sở</span>
            <span aria-hidden="true">·</span>
            <span>Phiên Bản 2026</span>
          </div>
          <h1
            className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-50 leading-snug mb-2"
            style={{ textWrap: 'balance' }}
          >
            Sổ Tay Ứng Xử Di Tích
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-4 max-w-xl">
            Tra cứu nhanh quy định trang phục, hành vi chuẩn mực và những điều cấm tại nơi thờ tự cho học sinh, sinh viên và cán bộ văn hóa cơ sở.
          </p>

          {/* Quick 30s Emergency CTA */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              onClick={onOpenEmergency}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>30 Giây Trước Khi Vào Cửa</span>
            </button>
            <button
              onClick={() => onOpenVoiceQA()}
              className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium text-xs flex items-center gap-1.5 active:scale-95 transition-all"
            >
              <Mic className="w-3.5 h-3.5 text-amber-300" />
              <span>Hỏi Bằng Giọng Nói</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar with Microphone Icon */}
      <div className="space-y-2">
        <div className="relative flex items-center bg-white rounded-xl border border-stone-300 shadow-xs focus-within:border-stone-900 focus-within:ring-1 focus-within:ring-stone-900 transition-all">
          <Search className="absolute left-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm nhanh: bậu cửa, thắp hương, tiền lẻ, váy ngắn..."
            className="w-full pl-10 pr-20 py-3 bg-transparent text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-12 text-xs text-stone-400 hover:text-stone-700 px-1 py-1"
            >
              Xóa
            </button>
          )}
          <button
            onClick={() => onOpenVoiceQA(searchTerm)}
            className="absolute right-2 p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors"
            title="Nói câu hỏi bằng giọng nói"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Filter Tags (Horizontal Scrollable) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-stone-400 shrink-0 text-[11px] font-medium">Gợi ý:</span>
          {quickFilterTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => setSearchTerm(tag.query)}
              className={`px-2.5 py-1 rounded-lg border whitespace-nowrap transition-colors ${
                searchTerm === tag.query
                  ? 'bg-stone-900 text-white border-stone-900 font-medium'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Target Audience Dual Quick Strips */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
            <GraduationCap className="w-4 h-4 text-amber-700" />
            <span>Học sinh, Sinh viên</span>
          </div>
          <p className="text-[11px] text-stone-600 font-light leading-snug">
            Quy tắc chụp ảnh kỷ yếu văn minh, balo cứu nguy &amp; cẩm nang dã ngoại.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
            <Shield className="w-4 h-4 text-emerald-700" />
            <span>Cán bộ văn hóa</span>
          </div>
          <p className="text-[11px] text-stone-600 font-light leading-snug">
            Checklist kiểm tra thực địa di tích, mẫu loa phát thanh &amp; kịch bản nhắc nhở.
          </p>
        </div>
      </div>

      {/* Main List: 5 Sanctum & Heritage Types */}
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-1">
          <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
            <span>Danh Sách 5 Loại Hình Địa Điểm</span>
            <span className="text-xs font-normal text-stone-500 font-sans">
              ({filteredCategories.length})
            </span>
          </h2>
          <span className="text-[11px] text-stone-500">Chạm để xem hồ sơ</span>
        </div>

        <div className="space-y-3.5">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-stone-400 hover:shadow-sm transition-all overflow-hidden cursor-pointer select-none group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Thumbnail Image */}
                <div className="relative h-36 sm:h-auto sm:w-48 shrink-0 overflow-hidden bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 sm:hidden to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] bg-stone-950/80 text-amber-200 px-2 py-0.5 rounded font-medium sm:hidden">
                    {cat.tagline}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="hidden sm:block text-[11px] font-semibold text-amber-800 uppercase tracking-wide mb-1">
                      {cat.tagline}
                    </div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-900 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 font-light mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* 3 Quick Micro-rules */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                    <div className="flex items-center gap-1.5 truncate">
                      <Shirt className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">Áo che vai, qua gối</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Footprints className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">Bước qua bậu cửa</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Flame className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span className="truncate">1 nén hương ngoài</span>
                    </div>
                  </div>

                  {/* Touch Action */}
                  <div className="flex items-center justify-between pt-1 text-xs font-semibold text-stone-900">
                    <span className="text-[11px] text-stone-500 font-normal">
                      Ví dụ: {cat.famousExamples.slice(0, 2).join(' · ')}
                    </span>
                    <span className="flex items-center gap-1 text-amber-900 group-hover:translate-x-0.5 transition-transform">
                      <span>Xem hồ sơ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-xs sm:text-sm">
              Không tìm thấy địa điểm phù hợp với &ldquo;{searchTerm}&rdquo;. Bạn có thể thử tìm từ khóa khác hoặc bấm Hỏi bằng giọng nói.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
