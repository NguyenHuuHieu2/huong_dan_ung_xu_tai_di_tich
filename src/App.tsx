import React, { useState } from 'react';
import { MobileTopBar } from './components/MobileTopBar';
import { MobileBottomNav, ScreenNumber } from './components/MobileBottomNav';
import { ScreenHome } from './components/ScreenHome';
import { ScreenDetail } from './components/ScreenDetail';
import { ScreenVoiceQA } from './components/ScreenVoiceQA';
import { ScreenSources } from './components/ScreenSources';
import { ScreenAbout } from './components/ScreenAbout';
import { QuickEmergencyDrawer } from './components/QuickEmergencyDrawer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { SiteCategoryKey } from './types';

export default function App() {
  // Screen state: 1: Home, 2: Detail, 3: Voice QA, 4: Sources, 5: About
  const [activeScreen, setActiveScreen] = useState<ScreenNumber>(1);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<SiteCategoryKey>('chua');
  const [voiceQAInitialQuestion, setVoiceQAInitialQuestion] = useState<string>('');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);

  const navigateToScreen = (screen: ScreenNumber) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromHome = (catKey: SiteCategoryKey) => {
    setSelectedCategoryKey(catKey);
    navigateToScreen(2);
  };

  const handleOpenVoiceQAFromAnywhere = (initialQ?: string) => {
    setVoiceQAInitialQuestion(initialQ ? `Quy tắc ứng xử và phong tục khi đến ${initialQ}?` : '');
    navigateToScreen(3);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-stone-900 pb-20 sm:pb-24 selection:bg-amber-200 selection:text-stone-900">
      {/* Mobile-first Top Bar with screen indicator & 30s Quick Check */}
      <MobileTopBar
        activeScreen={activeScreen}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
        onScreenChange={navigateToScreen}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pt-4">
        {/* MÀN HÌNH 1: Trang chủ có ô tìm kiếm và danh sách loại hình */}
        {activeScreen === 1 && (
          <ScreenHome
            onSelectCategory={handleSelectCategoryFromHome}
            onOpenVoiceQA={handleOpenVoiceQAFromAnywhere}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {/* MÀN HÌNH 2: Trang hồ sơ chi tiết một loại hình */}
        {activeScreen === 2 && (
          <ScreenDetail
            categoryKey={selectedCategoryKey}
            onSelectCategory={(key) => setSelectedCategoryKey(key)}
            onBackToHome={() => navigateToScreen(1)}
            onOpenVoiceQA={handleOpenVoiceQAFromAnywhere}
          />
        )}

        {/* MÀN HÌNH 3: Trang hỏi đáp cho phép người dùng đặt câu hỏi bằng lời */}
        {activeScreen === 3 && (
          <ScreenVoiceQA initialQuestion={voiceQAInitialQuestion} />
        )}

        {/* MÀN HÌNH 4: Trang Nguồn tư liệu */}
        {activeScreen === 4 && <ScreenSources />}

        {/* MÀN HÌNH 5: Trang Giới thiệu */}
        {activeScreen === 5 && <ScreenAbout />}
      </main>

      {/* Mobile Fixed Bottom Navigation Bar (5 Screens) */}
      <MobileBottomNav
        activeScreen={activeScreen}
        onScreenChange={navigateToScreen}
      />

      {/* 30-Second Entrance Emergency Drawer */}
      <QuickEmergencyDrawer
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      {/* 5-Screen Architecture Diagram Modal */}
      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
        onNavigateScreen={navigateToScreen}
      />
    </div>
  );
}
