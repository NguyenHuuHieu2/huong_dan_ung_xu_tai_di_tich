import React from 'react';
import { Home, BookOpen, Mic, FileText, Info } from 'lucide-react';

export type ScreenNumber = 1 | 2 | 3 | 4 | 5;

interface MobileBottomNavProps {
  activeScreen: ScreenNumber;
  onScreenChange: (screen: ScreenNumber) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeScreen,
  onScreenChange,
}) => {
  const tabs = [
    {
      screen: 1 as ScreenNumber,
      label: 'Trang Chủ',
      icon: Home,
    },
    {
      screen: 2 as ScreenNumber,
      label: 'Hồ Sơ',
      icon: BookOpen,
    },
    {
      screen: 3 as ScreenNumber,
      label: 'Hỏi Đáp Lời',
      icon: Mic,
      highlight: true,
    },
    {
      screen: 4 as ScreenNumber,
      label: 'Tư Liệu',
      icon: FileText,
    },
    {
      screen: 5 as ScreenNumber,
      label: 'Giới Thiệu',
      icon: Info,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center h-16 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeScreen === tab.screen;
          return (
            <button
              key={tab.screen}
              onClick={() => onScreenChange(tab.screen)}
              className="flex flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 transition-all active:scale-95 group"
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive
                    ? 'bg-stone-900 text-amber-300 shadow-xs'
                    : tab.highlight
                    ? 'bg-amber-100/70 text-amber-900'
                    : 'text-stone-500 group-hover:text-stone-800'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`text-[10px] font-medium tracking-tight mt-0.5 truncate max-w-full ${
                  isActive ? 'text-stone-950 font-bold' : 'text-stone-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
