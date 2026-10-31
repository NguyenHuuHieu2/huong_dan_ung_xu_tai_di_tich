import React from 'react';
import { X, CheckCircle2, AlertOctagon, Footprints, Flame, VolumeX, Eye } from 'lucide-react';

interface QuickEmergencyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEmergencyDrawer: React.FC<QuickEmergencyDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl sm:rounded-2xl border border-stone-200 shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden">
        {/* Grab Handle for mobile */}
        <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-amber-500 text-stone-950">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider block opacity-90">
              Tra Cứu Khẩn Cấp Bỏ Túi
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg">
              30 Giây Trước Khi Bước Qua Cửa Di Tích
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-950/10 hover:bg-stone-950/20 text-stone-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Rapid Points */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-stone-800 text-xs sm:text-sm">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200/80">
            <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div>
              <span className="font-bold text-stone-900 block text-sm">
                Liếc nhanh trang phục trên người
              </span>
              <p className="text-stone-600 leading-relaxed font-light mt-0.5">
                Áo đã che kín vai? Quần hoặc váy đã phủ qua đầu gối? Nếu lỡ mặc ngắn, hãy ghé quầy cổng mượn khăn quấn hoặc mặc áo khoác trước khi bước vào.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50 border border-rose-200/80">
            <Footprints className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-rose-950 block text-sm">
                BƯỚC QUA BẬU CỬA - TUYỆT ĐỐI KHÔNG GIẪM
              </span>
              <p className="text-stone-700 leading-relaxed font-light mt-0.5">
                Nhìn xuống chân: Ngạch cửa gỗ là ranh giới thiêng liêng. Hãy nhấc cao chân bước qua (Nam chân trái, Nữ chân phải). Cấm đặt chân giẫm lên bậu cửa.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <Eye className="w-6 h-6 text-stone-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block text-sm">
                Tháo mũ nón &amp; Kính râm cầm tay
              </span>
              <p className="text-stone-600 leading-relaxed font-light mt-0.5">
                Tháo nón lá, mũ lưỡi trai, kính đen trước khi bước vào trước hương án. Giữ gương mặt trang nghiêm, từ tốn.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <div className="w-7 h-7 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </div>
            <div>
              <span className="font-bold text-stone-900 block text-sm">
                Lối vào Cửa Phải (Tả), Lối ra Cửa Trái (Hữu)
              </span>
              <p className="text-stone-600 leading-relaxed font-light mt-0.5">
                Đi vào bằng cửa bên tay phải, đi ra cửa bên tay trái. Tránh đi lại qua cửa chính giữa (Cửa Thần đạo chỉ dành cho đại lễ).
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200/80">
            <Flame className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block text-sm">
                Chỉ thắp 01 nén hương tại lư lớn ngoài sân
              </span>
              <p className="text-stone-600 leading-relaxed font-light mt-0.5">
                Tuyệt đối không mang hương đang cháy vào gian thờ gỗ cổ. Vẩy nhẹ tay để tắt lửa, kiêng dùng miệng thổi phù phù.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <VolumeX className="w-6 h-6 text-stone-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block text-sm">
                Tắt chuông điện thoại &amp; Không nhét tiền lẻ vào tượng
              </span>
              <p className="text-stone-600 leading-relaxed font-light mt-0.5">
                Chuyển điện thoại sang rung. Tiền giọt dầu hãy thả trực tiếp vào Hòm Công Đức, không gài vào tay tượng hay rùa đá.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs sm:text-sm transition-colors"
          >
            Tôi đã ghi nhớ, sẵn sàng vào lễ
          </button>
        </div>
      </div>
    </div>
  );
};
