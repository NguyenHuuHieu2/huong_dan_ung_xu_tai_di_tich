import React from 'react';
import { Compass, BookOpen, CheckSquare, HelpCircle, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAiModal: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAiModal, activeSection, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap) */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left flex items-center gap-2.5 text-stone-900 group whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-sm shadow-xs">
             quy
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight text-stone-900">
              Quy Chuẩn Di Tích
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 single-line clean text links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('categories')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 ${
              activeSection === 'categories' ? 'text-stone-950 font-semibold' : ''
            }`}
          >
            5 Loại Hình Địa Điểm
          </button>
          <button
            onClick={() => onNavigate('outfit-checker')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 ${
              activeSection === 'outfit-checker' ? 'text-stone-950 font-semibold' : ''
            }`}
          >
            Kiểm Tra Trang Phục
          </button>
          <button
            onClick={() => onNavigate('customs')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 ${
              activeSection === 'customs' ? 'text-stone-950 font-semibold' : ''
            }`}
          >
            Giải Mã Phong Tục
          </button>
          <button
            onClick={() => onNavigate('famous-sites')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 ${
              activeSection === 'famous-sites' ? 'text-stone-950 font-semibold' : ''
            }`}
          >
            Di Tích Tiêu Biểu
          </button>
          <button
            onClick={() => onNavigate('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 ${
              activeSection === 'quiz' ? 'text-stone-950 font-semibold' : ''
            }`}
          >
            Trắc Nghiệm Ứng Xử
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenAiModal}
            className="px-3.5 py-2 text-xs font-medium text-amber-50 bg-stone-900 rounded-md hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Hỏi Đáp Văn Hóa</span>
          </button>
        </div>
      </div>
    </header>
  );
};
