import React from 'react';
import { Landmark, Zap, Layers, Sparkles } from 'lucide-react';
import { ScreenNumber } from './MobileBottomNav';

interface MobileTopBarProps {
  activeScreen: ScreenNumber;
  onOpenEmergency: () => void;
  onOpenArchitecture: () => void;
  onScreenChange: (screen: ScreenNumber) => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  activeScreen,
  onOpenEmergency,
  onOpenArchitecture,
  onScreenChange,
}) => {
  const screenNames: Record<ScreenNumber, string> = {
    1: 'Trang Chủ',
    2: 'Hồ Sơ Chi Tiết',
    3: 'Hỏi Đáp Bằng Lời',
    4: 'Nguồn Tư Liệu',
    5: 'Giới Thiệu',
  };

  return (
    <header className="sticky top-0 z-30 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200/90 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Brand identity (Tap to return to Screen 1) */}
        <button
          onClick={() => onScreenChange(1)}
          className="flex items-center gap-2.5 text-left shrink-0 active:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-serif font-bold text-sm shadow-xs">
            <Landmark className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base text-stone-900 tracking-tight leading-tight">
              Sổ Tay Di Tích
            </span>
            <span className="text-[10px] text-stone-500 font-medium">
              Màn hình {activeScreen}/5: {screenNames[activeScreen]}
            </span>
          </div>
        </button>

        {/* Right Action buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenArchitecture}
            className="px-2.5 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs flex items-center gap-1 transition-colors"
            title="Xem cấu trúc 5 màn hình"
          >
            <Layers className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">Cấu Trúc</span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs flex items-center gap-1 shadow-xs transition-colors active:scale-95"
            title="Quy tắc 30 giây trước khi bước qua cửa"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>30s Vào Cửa</span>
          </button>
        </div>
      </div>
    </header>
  );
};
