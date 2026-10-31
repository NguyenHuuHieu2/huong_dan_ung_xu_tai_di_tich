export interface YouthTipItem {
  id: string;
  title: string;
  summary: string;
  doText: string;
  dontText: string;
  whyItMatters: string;
}

export const YOUTH_CHECKIN_RULES: YouthTipItem[] = [
  {
    id: 'youth-1',
    title: 'Góc chụp & Tư thế "Sống ảo" Văn Minh',
    summary: 'Chụp ảnh kỷ yếu, ảnh lưu niệm đẹp nhưng vẫn giữ trọn lòng tôn kính.',
    doText: 'Đứng trang nghiêm, chắp tay búp sen hoặc đứng nghiêng góc 45 độ thanh lịch ở sân vườn, cổng tam quan, rặng hoa.',
    dontText: 'Tuyệt đối không quay lưng vào tượng Phật tạo dáng hài hước, không ngồi xổm hay giơ chân lên án gian thờ.',
    whyItMatters: 'Các pho tượng và ban thờ là đối tượng tâm linh được phụng thờ, không phải phông nền biểu diễn cá nhân.',
  },
  {
    id: 'youth-2',
    title: 'Trang Phục Đi Dã Ngoại & Chụp Kỷ Yếu',
    summary: 'Phối đồ vừa trẻ trung, thoải mái vừa chuẩn mực không gian tâm linh.',
    doText: 'Áo dài trắng truyền thống, áo sơ mi cộc/dài tay, quần âu hoặc jeans dài không rách; mang theo áo khoác cardigan nhẹ.',
    dontText: 'Áo croptop lộ rốn, áo hai dây, váy tennis ngắn cũn cỡn, quần đùi rách xơ mướp, đồ ren xuyên thấu.',
    whyItMatters: 'Trang phục thể hiện trình độ văn hóa và sự tôn trọng của thế hệ trẻ đối với tiền nhân.',
  },
  {
    id: 'youth-3',
    title: 'Bảo Vệ Cổ Vật & Bia Rùa Đá Tiến Sĩ',
    summary: 'Chấm dứt hoàn toàn hủ tục "sờ đầu rùa lấy vía thi cử".',
    doText: 'Đứng ngoài dải rào chắn, chắp tay thành tâm cầu chúc may mắn và tự hứa nỗ lực học tập bằng thực lực.',
    dontText: 'Không sờ đầu rùa, không trèo qua hàng rào, không lấy chìa khóa hay bút viết tên mình lên mai rùa.',
    whyItMatters: 'Đá cổ hoa cương sau hàng thế kỷ đã rất giòn và mòn vẹt. Điểm thi cao đến từ sự cần mẫn ôn luyện của chính bạn.',
  },
  {
    id: 'youth-4',
    title: 'Âm Thanh & Sử Dụng Điện Thoại / TikTok',
    summary: 'Không biến không gian thiêng liêng thành trường quay ồn ào.',
    doText: 'Chuyển điện thoại sang chế độ rung; dùng tai nghe nếu nghe thuyết minh audio guide.',
    dontText: 'Không mở loa ngoài bật nhạc nền giật gân, không vừa đi vừa gọi video réo rắt, không livestream bán hàng.',
    whyItMatters: 'Người dân và phật tử, giáo dân cần không gian thanh tịnh để lắng lòng chiêm bái và cầu nguyện.',
  },
  {
    id: 'youth-5',
    title: 'Văn Hóa Giữ Gìn Môi Trường Di Sản',
    summary: 'Bảo vệ cảnh quan xanh - sạch - đẹp của danh lam thắng cảnh.',
    doText: 'Mang theo bình nước cá nhân; cất rác vào balo nếu chưa thấy thùng rác công cộng.',
    dontText: 'Không vứt vỏ chai trà sữa, túi nilon, tàn kẹo cao su xuống giếng cổ, hồ sen hay bãi cỏ.',
    whyItMatters: 'Rác thải nhựa phá hủy vẻ đẹp rêu phong cổ kính mà tiền nhân đã dày công gìn giữ hàng trăm năm.',
  },
];

export const FIELD_TRIP_STUDY_GUIDE = [
  {
    step: '1. Trước Chuyến Đi',
    items: [
      'Tìm hiểu trước vị thần/thánh/anh hùng dân tộc được phụng thờ tại di tích.',
      'Chuẩn bị trang phục kín đáo (áo có tay, quần dài); mang giày bệt hoặc sneaker êm chân.',
      'Mang theo một cuốn sổ tay nhỏ và bút để ghi chép nhanh thông tin trên bia ký.',
    ],
  },
  {
    step: '2. Khi Đang Ở Di Tích',
    items: [
      'Quan sát nghệ thuật kiến trúc: Mái cong, rồng phượng khảm sành, chạm khắc gỗ dân gian trên xà, bẩy.',
      'Cách chào hỏi lễ phép: Chào hỏi các cụ từ trông đền hoặc bác hướng dẫn viên: "Cháu chào bác/cụ ạ, cháu là học sinh trường... đến tìm hiểu lịch sử di tích".',
      'Đọc kỹ văn bia và các bảng thuyết minh để hiểu mốc thời gian xây dựng và các lần trùng tu.',
    ],
  },
  {
    step: '3. Khi Viết Bài Thu Hoạch',
    items: [
      'Nêu rõ giá trị lịch sử, kiến trúc và giá trị giáo dục truyền thống của di tích.',
      'Đề xuất những giải pháp cụ thể của thế hệ trẻ để lan tỏa nét đẹp văn hóa ứng xử văn minh nơi di tích.',
    ],
  },
];
