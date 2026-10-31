import React, { useState } from 'react';
import {
  X,
  Layers,
  Smartphone,
  Users,
  Shield,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Home,
  Mic,
  FileText,
  Info,
} from 'lucide-react';
import { ScreenNumber } from './MobileBottomNav';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateScreen: (screen: ScreenNumber) => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  onNavigateScreen,
}) => {
  const [activeTab, setActiveTab] = useState<'screens' | 'users' | 'ux'>('screens');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-amber-50">
                Cấu Trúc Hệ Thống 5 Màn Hình Mobile-First
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Kiến trúc thông tin ứng dụng &lsquo;Sổ Tay Ứng Xử Di Tích&rsquo;
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-stone-200 bg-stone-50 text-xs font-medium px-4">
          <button
            onClick={() => setActiveTab('screens')}
            className={`py-3 px-3 border-b-2 transition-all ${
              activeTab === 'screens'
                ? 'border-stone-900 text-stone-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Sơ Đồ 5 Màn Hình
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`py-3 px-3 border-b-2 transition-all ${
              activeTab === 'users'
                ? 'border-stone-900 text-stone-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Học Sinh &amp; Cán Bộ Cơ Sở
          </button>
          <button
            onClick={() => setActiveTab('ux')}
            className={`py-3 px-3 border-b-2 transition-all ${
              activeTab === 'ux'
                ? 'border-stone-900 text-stone-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Thiết Kế Mobile-First
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-800 font-light">
          {activeTab === 'screens' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Chi tiết 5 Màn hình chức năng:
              </span>

              {/* Screen 1 */}
              <div
                onClick={() => {
                  onNavigateScreen(1);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:border-stone-400 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-stone-900 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-amber-700" />
                    <span>Màn hình 1: Trang Chủ (Ô Tìm Kiếm &amp; Danh Sách Loại Hình)</span>
                  </span>
                  <span className="text-amber-900 text-[11px] font-semibold">Chạm để mở →</span>
                </div>
                <p className="text-stone-600 text-xs">
                  Thanh tìm kiếm nhanh với gợi ý từ khóa (bậu cửa, thắp hương, tiền lẻ) + Danh sách 5 loại hình địa điểm (Chùa, Đền/Miếu, Đình Làng, Nhà Thờ, Di Tích Lịch Sử) kèm tóm tắt 3 quy chuẩn vi mô.
                </p>
              </div>

              {/* Screen 2 */}
              <div
                onClick={() => {
                  onNavigateScreen(2);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:border-stone-400 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-stone-900 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Màn hình 2: Hồ Sơ Chi Tiết Một Loại Hình</span>
                  </span>
                  <span className="text-emerald-900 text-[11px] font-semibold">Chạm để mở →</span>
                </div>
                <p className="text-stone-600 text-xs">
                  Hồ sơ đầy đủ 3 khối chuẩn mực: 1) Trang phục (bắt buộc, cấm kỵ, mẹo quấn khăn); 2) Hành vi đúng (bước bậu cửa, cửa Tả/Hữu, thắp 1 nén hương); 3) Điều tối kỵ &amp; nghiêm cấm + Bộ lọc chuyển nhanh giữa 5 loại hình.
                </p>
              </div>

              {/* Screen 3 */}
              <div
                onClick={() => {
                  onNavigateScreen(3);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:border-stone-400 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-stone-900 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-rose-700" />
                    <span>Màn hình 3: Trang Hỏi Đáp Đặt Câu Hỏi Bằng Lời Nói</span>
                  </span>
                  <span className="text-rose-900 text-[11px] font-semibold">Chạm để mở →</span>
                </div>
                <p className="text-stone-600 text-xs">
                  Nút micro nhận diện giọng nói tiếng Việt thời gian thực (Speech-to-Text) + Nút loa đọc to câu trả lời (Text-to-Speech) + Kết nối trợ lý trí tuệ nhân tạo Gemini 2.5 Flash giải đáp phong tục văn hóa.
                </p>
              </div>

              {/* Screen 4 */}
              <div
                onClick={() => {
                  onNavigateScreen(4);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:border-stone-400 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-stone-900 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-700" />
                    <span>Màn hình 4: Nguồn Tư Liệu &amp; Văn Bản Pháp Quy</span>
                  </span>
                  <span className="text-sky-900 text-[11px] font-semibold">Chạm để mở →</span>
                </div>
                <p className="text-stone-600 text-xs">
                  Bảng tra cứu mức phạt tiền (Nghị định 38/2021/NĐ-CP) + Luật Di sản Văn hóa + Bộ Quy tắc Ứng xử Du lịch + Thông bạch Giáo hội Phật giáo + Nút sao chép trích dẫn điều luật nhanh.
                </p>
              </div>

              {/* Screen 5 */}
              <div
                onClick={() => {
                  onNavigateScreen(5);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:border-stone-400 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-stone-900 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-stone-700" />
                    <span>Màn hình 5: Trang Giới Thiệu &amp; Hướng Dẫn</span>
                  </span>
                  <span className="text-stone-900 text-[11px] font-semibold">Chạm để mở →</span>
                </div>
                <p className="text-stone-600 text-xs">
                  Tôn chỉ sứ mệnh, 4 cam kết văn hóa vàng, đối tượng trọng tâm (học sinh, cán bộ cơ sở) và hướng dẫn cài đặt lối tắt PWA trên điện thoại để tra cứu ngoại tuyến.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Phục vụ đối tượng không chuyên về di sản:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-amber-700" />
                    <span>Học Sinh &amp; Sinh Viên</span>
                  </div>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    • 10 Quy tắc chụp ảnh kỷ yếu, sống ảo thanh lịch, không quay lưng vào tượng Phật.<br />
                    • Bảo vệ rùa đá bia Tiến sĩ: Chấm dứt thói quen sờ đầu rùa lấy vía thi cử.<br />
                    • Cẩm nang đi thực tế &amp; viết bài thu hoạch môn Lịch sử / GDCD.<br />
                    • Balo cứu nguy: Mẹo mang khăn quàng mỏng che vai khi lỡ mặc áo cộc.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-emerald-700" />
                    <span>Cán Bộ Văn Hóa Cơ Sở</span>
                  </div>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    • Bảng kiểm tra thực địa di tích (Checklist 6 tiêu chí PCCC, hòm công đức, biển báo).<br />
                    • Kịch bản xử lý 5 vi phạm thường gặp (váy ngắn, gài tiền tượng, đốt bó hương).<br />
                    • Mẫu phát thanh loa truyền thanh lễ hội văn minh, trang trọng.<br />
                    • Khung xử phạt Nghị định 38/2021/NĐ-CP có thể trích dẫn ngay.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ux' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Đặc trưng giao diện Mobile-First:
              </span>
              <div className="space-y-2 text-xs text-stone-700">
                <p>• <strong>Điều hướng đáy (Bottom Bar)</strong>: 5 tab luôn nằm trong tầm với ngón cái (Thumb-zone), chạm chuyển màn hình mượt mà.</p>
                <p>• <strong>Kích thước chạm từ 44px trở lên</strong>: Tất cả các nút bấm, icon micro, thẻ danh sách đều đáp ứng kích thước chạm chuẩn công thái học.</p>
                <p>• <strong>Hỏi bằng giọng nói</strong>: Tích hợp micro tiếng Việt giúp người dân hoặc cán bộ không cần gõ bàn phím nhỏ khi đang ở ngoài trời.</p>
                <p>• <strong>Drawer 30 giây</strong>: Tra cứu khẩn cấp 6 quy tắc vàng chỉ với 1 chạm trước khi bước qua bậu cửa.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Chạm vào bất kỳ màn hình nào để chuyển đến ngay
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Đóng sơ đồ
          </button>
        </div>
      </div>
    </div>
  );
};
