import React from 'react';
import { Search, ShieldAlert, Sparkles, Footprints, CheckCircle2 } from 'lucide-react';
import { SiteCategoryKey } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: SiteCategoryKey) => void;
  onOpenAiModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
  onOpenAiModal,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-stone-200">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_vietnam_heritage_sanctum_1793405785844.jpg"
          alt="Di tích lịch sử và nơi thờ tự Việt Nam"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-stone-100">
        <div className="max-w-3xl">
          {/* Metadata kicker */}
          <div className="flex items-center gap-2 text-xs text-amber-200/90 font-medium tracking-wide mb-3">
            <span>Cẩm Nang Văn Hóa Ứng Xử</span>
            <span aria-hidden="true">·</span>
            <span>Bộ Quy Tắc Nơi Thờ Tự & Di Tích Việt Nam</span>
            <span aria-hidden="true">·</span>
            <span>Cập Nhật Chuẩn Mực 2026</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-50 tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Quy Chuẩn Ứng Xử Nơi Thờ Tự &amp; Di Tích Lịch Sử
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light mb-8 max-w-2xl">
            Sổ tay tra cứu nhanh quy định trang phục, hành vi phù hợp, nghi thức bước qua ngạch cửa và những điều tối kỵ tại <span className="text-amber-200 font-medium">Chùa, Đền, Đình, Nhà thờ</span> và <span className="text-amber-200 font-medium">Khu di tích lịch sử</span> trên khắp Việt Nam.
          </p>

          {/* Search Box */}
          <div className="bg-stone-900/80 backdrop-blur-md p-2 rounded-xl border border-stone-700/80 shadow-xl max-w-2xl mb-8">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tra cứu nhanh: ngạch cửa, thắp hương, tiền lẻ, váy ngắn, rùa đá, lễ mặn..."
                className="w-full pl-11 pr-28 py-3 bg-transparent text-sm text-stone-100 placeholder-stone-400 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-24 text-xs text-stone-400 hover:text-stone-200 px-2 py-1"
                >
                  Xóa
                </button>
              )}
              <button
                onClick={onOpenAiModal}
                className="px-3.5 py-2 text-xs font-medium text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hỏi Chuyên Gia</span>
              </button>
            </div>
          </div>

          {/* Fast Category Filter Chips (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
            <span className="text-stone-400 font-medium">Chuyển nhanh đến:</span>
            <button
              onClick={() => onSelectCategory('chua')}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              Chùa Phật Giáo
            </button>
            <button
              onClick={() => onSelectCategory('den_mieu')}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              Đền, Miếu &amp; Phủ
            </button>
            <button
              onClick={() => onSelectCategory('dinh_lang')}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              Đình Làng
            </button>
            <button
              onClick={() => onSelectCategory('nha_tho')}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              Nhà Thờ Kitô Giáo
            </button>
            <button
              onClick={() => onSelectCategory('di_tich_lich_su')}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              Di Tích Lịch Sử
            </button>
          </div>
        </div>
      </div>

      {/* Full-width 4-Column Cultural Principles Ribbon */}
      <div className="relative z-10 bg-stone-900 border-t border-stone-800 text-stone-300 text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="font-semibold text-stone-100 block">Trang Phục Kín Đáo</span>
              <span className="text-stone-400">Áo có tay, quần/váy quá gối</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Footprints className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="font-semibold text-stone-100 block">Bước Qua Ngạch Cửa</span>
              <span className="text-stone-400">Tuyệt đối không giẫm lên bậu gỗ</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
            <div>
              <span className="font-semibold text-stone-100 block">Nhất Tâm Quy Kính</span>
              <span className="text-stone-400">Chỉ 01 nén hương tại lư ngoài sân</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
            <div>
              <span className="font-semibold text-stone-100 block">Bảo Tồn Hiện Vật</span>
              <span className="text-stone-400">Không nhét tiền, không sờ cổ vật</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
