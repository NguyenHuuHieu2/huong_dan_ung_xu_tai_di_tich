import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Sparkles, Check, Copy } from 'lucide-react';
import { CULTURAL_FAQS } from '../data/etiquetteData';
import { FAQItem, SiteCategoryKey } from '../types';

export const CustomsFaq: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopy = (faq: FAQItem) => {
    const textToCopy = `${faq.question}\n\n${faq.detailedExplanation}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(faq.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFaqs =
    selectedFilter === 'all'
      ? CULTURAL_FAQS
      : CULTURAL_FAQS.filter(
          (f) => f.category === selectedFilter || f.category === 'general'
        );

  return (
    <section id="customs" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
          Tri Thức Văn Hóa Dân Gian
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-2">
          Giải Mã Phong Tục &amp; Tình Huống Tế Nhị
        </h2>
        <p className="text-sm text-stone-600 leading-relaxed font-light">
          Hiểu rõ ý nghĩa triết lý sâu sắc đằng sau các quy ước cổ truyền để mỗi chuyến viếng thăm không chỉ đúng phép tắc mà còn thấu hiểu trọn vẹn hồn cốt dân tộc.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap border ${
            selectedFilter === 'all'
              ? 'bg-stone-900 text-stone-100 border-stone-900'
              : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
          }`}
        >
          Tất Cả Câu Hỏi
        </button>
        <button
          onClick={() => setSelectedFilter('chua')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap border ${
            selectedFilter === 'chua'
              ? 'bg-stone-900 text-stone-100 border-stone-900'
              : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
          }`}
        >
          Chùa Phật Giáo
        </button>
        <button
          onClick={() => setSelectedFilter('den_mieu')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap border ${
            selectedFilter === 'den_mieu'
              ? 'bg-stone-900 text-stone-100 border-stone-900'
              : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
          }`}
        >
          Đền &amp; Miếu
        </button>
        <button
          onClick={() => setSelectedFilter('nha_tho')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap border ${
            selectedFilter === 'nha_tho'
              ? 'bg-stone-900 text-stone-100 border-stone-900'
              : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200'
          }`}
        >
          Nhà Thờ
        </button>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-stone-50/70 transition-colors"
              >
                <div className="space-y-1.5 pr-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                    <span>Giải mã tập tục</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{faq.category}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 font-light">
                    {faq.shortAnswer}
                  </p>
                </div>
                <div className="p-1 rounded-md text-stone-500 shrink-0 mt-1">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 text-stone-800 text-sm leading-relaxed">
                  <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 mb-4 whitespace-pre-line font-light">
                    {faq.detailedExplanation}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-stone-500">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span>Từ khóa:</span>
                      {faq.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleCopy(faq)}
                      className="flex items-center gap-1 text-stone-600 hover:text-stone-900 px-2 py-1 rounded border border-stone-200 hover:bg-stone-100 transition-colors"
                    >
                      {copiedId === faq.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép giải thích</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
