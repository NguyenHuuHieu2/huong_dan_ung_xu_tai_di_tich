import React from 'react';
import {
  Landmark,
  Heart,
  Users,
  Shield,
  GraduationCap,
  Smartphone,
  CheckCircle2,
  Share2,
  Mail,
  Sparkles,
} from 'lucide-react';

export const ScreenAbout: React.FC = () => {
  return (
    <div className="space-y-6 pb-6">
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-md text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold shadow-sm">
          <Landmark className="w-6 h-6" />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-50">
          Sổ Tay Ứng Xử Di Tích
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          Ứng dụng web Mobile-first hướng dẫn quy tắc trang phục, hành vi phù hợp và xử lý tình huống văn hóa tại các di tích lịch sử và nơi thờ tự ở Việt Nam.
        </p>
        <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs text-amber-200/90 max-w-lg mx-auto font-light leading-relaxed">
          Đây là <strong>sản phẩm thực tập của Nguyễn Hữu Hiếu</strong>, mã sinh viên <strong>PH69928</strong>, <strong>Nhóm 2</strong>, <strong>Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH</strong>, dự án xã hội phi lợi nhuận.
        </div>
      </div>

      {/* 2 Target Audiences Detailed Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs space-y-4">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
            Đối tượng phục vụ trọng tâm
          </span>
          <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900 mt-1">
            Thiết Kế Cho Người Dùng Không Chuyên Sâu Về Di Sản
          </h2>
          <p className="text-xs text-stone-600 font-light mt-1">
            Ứng dụng loại bỏ các thuật ngữ chuyên môn khảo cổ phức tạp, sử dụng ngôn từ bình dân, hình ảnh minh họa thực tế và các giải pháp khắc phục tại chỗ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Audience 1: Students */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <GraduationCap className="w-5 h-5 text-amber-700" />
              <span>Học sinh &amp; Sinh viên</span>
            </div>
            <p className="text-xs text-stone-700 font-light leading-relaxed">
              Các bạn trẻ đi dã ngoại, tham quan ngoại khóa, chụp ảnh kỷ yếu hoặc đi lễ đầu năm. Giúp các bạn biết rõ: mặc gì không bị nhắc nhở, tạo dáng chụp ảnh ở đâu văn minh, bảo vệ rùa đá bia tiến sĩ và cách viết bài thu hoạch môn Lịch sử / GDCD.
            </p>
          </div>

          {/* Audience 2: Grassroots Officers */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <Shield className="w-5 h-5 text-emerald-700" />
              <span>Cán bộ văn hóa cơ sở</span>
            </div>
            <p className="text-xs text-stone-700 font-light leading-relaxed">
              Cán bộ xã, phường, ban khánh tiết thôn làng, bí thư đoàn thanh niên, giáo viên phụ trách đoàn. Cung cấp bảng kiểm tra thực địa di tích, kịch bản nhắc nhở trực tiếp lịch thiệp và mẫu phát thanh loa truyền thanh lễ hội.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Golden Cultural Commitments */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-xs space-y-4">
        <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900">
          4 Cam Kết Văn Hóa Vàng
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Bước qua bậu cửa</span>
              <span className="text-stone-600 font-light">
                Tuyệt đối không giẫm lên ngạch cửa gỗ chốn tôn nghiêm.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Nhất tâm 01 nén hương</span>
              <span className="text-stone-600 font-light">
                Chỉ thắp 01 nén tại lư đồng ngoài sân để bảo vệ di tích khỏi hỏa hoạn.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Tiền giọt dầu vào hòm</span>
              <span className="text-stone-600 font-light">
                Không gài, nhét tiền lẻ vào tay tượng, thân tượng hay rùa đá.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Bảo tồn nguyên trạng</span>
              <span className="text-stone-600 font-light">
                Không sờ đầu rùa, không viết vẽ bậy, giữ gìn cho muôn đời sau.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Install as Mobile App / Offline usage */}
      <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
        <div className="flex items-center gap-2 font-serif font-bold text-base text-stone-900">
          <Smartphone className="w-5 h-5 text-stone-800" />
          <span>Hướng Dẫn Sử Dụng Như Ứng Dụng Trên Điện Thoại</span>
        </div>
        <p className="text-xs text-stone-600 font-light leading-relaxed">
          Ứng dụng được thiết kế theo chuẩn Web App tương thích 100% với màn hình điện thoại:
        </p>
        <ul className="space-y-1.5 text-xs text-stone-700 font-light pl-4 list-disc">
          <li>
            <strong>Trên iPhone (Safari)</strong>: Bấm biểu tượng <strong>Chia sẻ (Share)</strong> ở thanh dưới cùng $\rightarrow$ chọn <strong>&ldquo;Thêm vào Màn hình chính&rdquo; (Add to Home Screen)</strong>.
          </li>
          <li>
            <strong>Trên điện thoại Android (Chrome)</strong>: Bấm biểu tượng <strong>3 chấm</strong> ở góc phải $\rightarrow$ chọn <strong>&ldquo;Cài đặt ứng dụng&rdquo; hoặc &ldquo;Thêm vào màn hình chính&rdquo;</strong>.
          </li>
        </ul>
      </div>

      {/* Footer Info & Attribution */}
      <div className="p-5 rounded-2xl bg-white border border-stone-200 text-center text-xs text-stone-600 font-light space-y-1.5 shadow-xs">
        <p className="font-semibold text-stone-900 text-sm">
          Sản phẩm thực tập của Nguyễn Hữu Hiếu · Mã sinh viên: PH69928
        </p>
        <p className="text-stone-700">
          Nhóm 2 · Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH
        </p>
        <p className="text-amber-900 font-medium pt-1">
          Dự án xã hội phi lợi nhuận vì văn hóa di sản Việt Nam
        </p>
        <p className="text-stone-400 text-[11px] pt-1">
          © 2026 Sổ Tay Ứng Xử Di Tích. Mọi thông tin tra cứu tuân thủ nghiêm ngặt cơ sở dữ liệu di sản văn hóa.
        </p>
      </div>
    </div>
  );
};
