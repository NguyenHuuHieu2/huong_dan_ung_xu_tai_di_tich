import React from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-stone-800">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-stone-100 font-serif font-bold text-base">
              <Landmark className="w-5 h-5 text-amber-400" />
              <span>Quy Chuẩn Di Tích Việt Nam</span>
            </div>
            <p className="text-stone-400 leading-relaxed font-light max-w-lg">
              Cẩm nang số tra cứu nhanh quy định trang phục, hành vi phù hợp và những điều cấm kỵ tại Chùa, Đền, Đình, Nhà thờ và các Di tích lịch sử quốc gia. Hướng tới xây dựng nếp sống văn minh, tôn kính tiền nhân và bảo tồn di sản văn hóa dân tộc.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Căn cứ Luật Di sản Văn hóa Việt Nam &amp; Bộ Quy tắc Ứng xử Văn minh Du lịch</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-stone-100 font-semibold mb-2">Chuyên Mục Tra Cứu</div>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-stone-200 transition-colors"
                >
                  5 Không gian thờ tự &amp; di tích
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('outfit-checker')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Kiểm tra trang phục nhanh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customs')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Giải mã phong tục &amp; bậu cửa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('famous-sites')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Di tích lịch sử tiêu biểu
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-stone-100 font-semibold mb-2">Bộ Quy Tắc Vàng</div>
            <p className="text-stone-400 leading-relaxed">
              • Áo có tay, quần/váy quá gối<br />
              • Bước qua bậu cửa, không giẫm lên ngạch<br />
              • Vào cửa Tả (Phải), ra cửa Hữu (Trái)<br />
              • Thắp 1 nén hương tại lư hương ngoài sân<br />
              • Tiền giọt dầu bỏ vào hòm công đức
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            &copy; 2026 Quy Chuẩn Di Tích Việt Nam. Vì một cộng đồng văn minh nơi chốn linh thiêng.
          </div>
          <div className="flex items-center gap-4">
            <span>Tôn Nghiêm</span>
            <span aria-hidden="true">·</span>
            <span>Thanh Tịnh</span>
            <span aria-hidden="true">·</span>
            <span>Bảo Tồn Di Sản</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
