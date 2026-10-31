import React, { useState } from 'react';
import { Search, MapPin, Clock, AlertCircle, Sparkles } from 'lucide-react';
import { FAMOUS_HERITAGE_SITES } from '../data/quizData';
import { SiteCategoryKey } from '../types';

interface HeritageSitesDirectoryProps {
  onSelectCategory: (cat: SiteCategoryKey) => void;
}

export const HeritageSitesDirectory: React.FC<HeritageSitesDirectoryProps> = ({
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSites = FAMOUS_HERITAGE_SITES.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.highlights.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="famous-sites" className="py-12 sm:py-16 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Danh Mục Điểm Đến Tiêu Biểu
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-2">
            Quy Định Đặc Thù Tại Từng Di Tích
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            Tra cứu nhanh nội quy và lưu ý đặc thù của các quần thể di tích quốc gia đặc biệt và thánh đường nổi tiếng trên khắp 3 miền Bắc - Trung - Nam.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 w-4 h-4 text-stone-400 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo tên di tích hoặc địa phương (Huế, Hà Nội, Phú Thọ...)"
              className="w-full pl-9 pr-4 py-2 bg-white text-xs sm:text-sm rounded-lg border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-stone-400"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setSelectedCategory('di_tich_lich_su')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors ${
                selectedCategory === 'di_tich_lich_su'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
              }`}
            >
              Di tích lịch sử
            </button>
            <button
              onClick={() => setSelectedCategory('chua')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors ${
                selectedCategory === 'chua'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
              }`}
            >
              Chùa
            </button>
            <button
              onClick={() => setSelectedCategory('den_mieu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors ${
                selectedCategory === 'den_mieu'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
              }`}
            >
              Đền, Miếu
            </button>
            <button
              onClick={() => setSelectedCategory('nha_tho')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-colors ${
                selectedCategory === 'nha_tho'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
              }`}
            >
              Nhà thờ
            </button>
          </div>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{site.location}</span>
                  </div>
                  {site.openHours && (
                    <div className="flex items-center gap-1 text-[11px] text-stone-400">
                      <Clock className="w-3 h-3" />
                      <span>{site.openHours}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                  {site.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                  {site.highlights}
                </p>

                {/* Special Rules */}
                <div className="bg-stone-50 rounded-lg p-3 border border-stone-200/70 text-xs text-stone-700 space-y-1.5 mb-4">
                  <div className="font-semibold text-stone-900 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    <span>Quy định đặc thù tại đây:</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-stone-600">
                    {site.specialRules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectCategory(site.category)}
                  className="text-stone-800 hover:text-stone-950 font-medium underline underline-offset-2 transition-colors"
                >
                  Xem quy chuẩn chung loại hình này →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200 text-stone-500 text-sm">
            Không tìm thấy di tích phù hợp với từ khóa &ldquo;{searchTerm}&rdquo;. Hãy thử tìm kiếm địa phương khác.
          </div>
        )}
      </div>
    </section>
  );
};
