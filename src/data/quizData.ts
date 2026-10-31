import { QuizQuestion, HeritageSiteItem, OutfitOption } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: 'Bạn cùng nhóm bạn đến tham quan Chính điện Tam Bảo tại một ngôi chùa cổ.',
    question: 'Khi bước qua cửa để vào trong điện lễ Phật, hành vi nào sau đây là ĐÚNG CHUẨN MỰC nhất?',
    options: [
      {
        text: 'Đi thẳng qua cửa chính giữa, chân đặt dẫm lên ngạch cửa gỗ cho vững để tránh vấp ngã.',
        isCorrect: false,
        explanation: 'Sai. Cửa chính giữa (Cửa Trung) là lối Thần đạo dành cho đấng tối cao. Giẫm lên ngạch cửa gỗ là hành vi cấm kỵ.',
      },
      {
        text: 'Đi vào bằng cửa bên Phải, nhấc cao chân bước qua ngạch cửa gỗ mà không giẫm lên ngạch.',
        isCorrect: true,
        explanation: 'Chính xác! Đi cửa bên Phải (cửa Tả - Nhập), bước qua ngạch cửa dứt khoát không chạm chân lên ngạch (Nam bước chân trái, Nữ bước chân phải).',
      },
      {
        text: 'Đi vào bằng cửa bên Trái và chạy nhanh vào chiếm vị trí quỳ chính giữa trước ban Phật.',
        isCorrect: false,
        explanation: 'Sai. Cửa bên Trái là cửa để đi ra (Hữu môn - Xuất). Không nên chạy hay tranh giành chỗ quỳ.',
      },
      {
        text: 'Cởi giày dép và để ngổn ngang ngay giữa bậu cửa để tiện lấy khi ra.',
        isCorrect: false,
        explanation: 'Sai. Giày dép phải xếp ngay ngắn vào kệ hoặc bên hông hành lang theo biển chỉ dẫn.',
      },
    ],
  },
  {
    id: 2,
    scenario: 'Tại quầy hương ngoài sân Chùa, bạn chuẩn bị dâng hương lễ Phật.',
    question: 'Theo quy chuẩn văn minh và hướng dẫn của Giáo hội Phật giáo Việt Nam, bạn nên làm gì?',
    options: [
      {
        text: 'Thắp cả bó hương to, khói nghi ngút rồi mang cắm khắp các ban thờ trong điện.',
        isCorrect: false,
        explanation: 'Sai. Thắp cả bó hương gây nguy cơ hỏa hoạn, khói độc hại và làm bong tróc sơn thếp vàng của tượng cổ.',
      },
      {
        text: 'Chỉ thắp duy nhất 01 nén tâm hương tại lư hương lớn ngoài sân chùa, không mang hương cháy vào chính điện.',
        isCorrect: true,
        explanation: 'Hoàn toàn chính xác! "Nhất tâm quy kính" - 1 nén hương thơm đủ biểu thị lòng chí thành, bảo vệ di sản và sức khỏe mọi người.',
      },
      {
        text: 'Dùng miệng thổi phù phù thật mạnh cho ngọn lửa trên nén hương tắt nhanh.',
        isCorrect: false,
        explanation: 'Sai. Người xưa kiêng dùng miệng thổi lửa que hương; hãy dùng tay phẩy nhẹ hoặc vẩy dọc để lửa tắt.',
      },
      {
        text: 'Cắm hương vào các chậu cây cảnh hoặc thân cây cổ thụ ngoài sân.',
        isCorrect: false,
        explanation: 'Sai. Tàn hương nóng làm chết cây và có thể bén lửa vào lá khô gây cháy.',
      },
    ],
  },
  {
    id: 3,
    scenario: 'Bạn mang theo mâm lễ đến dâng tại Chính điện Tam Bảo của một ngôi chùa Phật giáo.',
    question: 'Lễ vật nào sau đây TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP dâng lên bàn thờ Phật?',
    options: [
      {
        text: 'Mâm ngũ quả tươi sạch và đĩa xôi gấc ngọt.',
        isCorrect: false,
        explanation: 'Mâm quả tươi và xôi ngọt là lễ chay hoàn toàn phù hợp để dâng Phật.',
      },
      {
        text: 'Gà luộc nguyên con ngậm hoa hồng, giò chả thịt lợn và chai rượu mạnh.',
        isCorrect: true,
        explanation: 'Chính xác! Chính điện Tam Bảo tuyệt đối cấm lễ mặn (thịt cá, rượu bia). Đạo Phật giữ giới không sát sinh, chỉ dâng lễ chay.',
      },
      {
        text: 'Bình hoa sen thơm ngát và ấm trà sen tinh khiết.',
        isCorrect: false,
        explanation: 'Hoa sen và trà thơm là phẩm vật thanh tịnh rất được khuyến khích khi dâng lễ Phật.',
      },
      {
        text: 'Bánh oản phẩm chay màu đỏ bọc giấy kiếng.',
        isCorrect: false,
        explanation: 'Oản chay phẩm là đồ lễ truyền thống được chấp nhận.',
      },
    ],
  },
  {
    id: 4,
    scenario: 'Bạn muốn cúng dường phát tâm công đức tại đền thờ danh tướng anh hùng dân tộc.',
    question: 'Hành động đặt tiền công đức nào sau đây là văn minh và chuẩn mực?',
    options: [
      {
        text: 'Lấy tờ tiền mệnh giá 10.000đ gài nhét chặt vào ngón tay tượng Thánh để "xin vía may mắn".',
        isCorrect: false,
        explanation: 'Sai. Đây là hành vi phản cảm, làm bong tróc lớp sơn cổ và xâm hại di vật lịch sử.',
      },
      {
        text: 'Bỏ tiền trực tiếp vào Hòm Công Đức có khóa và niêm phong của Ban Quản lý Di tích.',
        isCorrect: true,
        explanation: 'Đúng chuẩn! Toàn bộ tiền phát tâm cần bỏ vào Hòm Công Đức hoặc viết phiếu tại bàn thủ từ để phục vụ tu bổ di tích minh bạch.',
      },
      {
        text: 'Ném tiền xu hoặc rải tiền lẻ xuống giếng cổ, hồ nước phong thủy trong đền.',
        isCorrect: false,
        explanation: 'Sai. Kim loại oxy hóa gây ô nhiễm nguồn nước di tích và rác thải đáy hồ.',
      },
      {
        text: 'Nhét tiền vào kẽ đá bia rùa để cầu điểm cao trong kỳ thi sắp tới.',
        isCorrect: false,
        explanation: 'Sai. Hành vi nhét tiền vào bia đá và sờ đầu rùa bị nghiêm cấm theo Luật Di sản.',
      },
    ],
  },
  {
    id: 5,
    scenario: 'Bạn cùng bạn bè ghé thăm một Nhà thờ Công giáo cổ kính vào chiều Chủ nhật đúng lúc đang có Thánh lễ.',
    question: 'Cách ứng xử phù hợp nhất của người khách tham quan là gì?',
    options: [
      {
        text: 'Bật đèn flash chụp ảnh liên tục từ mọi góc và đi lại giữa lối đi trung tâm để quay clip TikTok.',
        isCorrect: false,
        explanation: 'Sai. Đây là hành vi bất kính, quấy rầy sự tôn nghiêm của buổi lễ phụng vụ.',
      },
      {
        text: 'Lên xếp hàng nhận Bánh Thánh (Mình Thánh Chúa) dù bạn chưa theo đạo Công giáo để xem vị ra sao.',
        isCorrect: false,
        explanation: 'Sai. Bí tích Thánh Thể là thiêng liêng nhất đối với người Công giáo, chỉ tín hữu đã được rửa tội và xưng tội mới được rước lễ.',
      },
      {
        text: 'Chuyển điện thoại sang im lặng, ngồi trật tự ở các hàng ghế phía sau, không làm ồn và không bước lên Cung Thánh.',
        isCorrect: true,
        explanation: 'Rất chuẩn mực! Bạn thể hiện sự tôn trọng tối cao đối với cộng đồng tôn giáo và không gian phụng vụ.',
      },
      {
        text: 'Gác chân mang giày lên bệ quỳ gỗ bọc đệm để duỗi chân cho thoải mái.',
        isCorrect: false,
        explanation: 'Sai. Bệ quỳ là nơi các tín hữu quỳ gối cầu nguyện tôn kính Chúa, không được dẫm chân bẩn lên.',
      },
    ],
  },
  {
    id: 6,
    scenario: 'Tại Khu di tích Văn Miếu - Quốc Tử Giám Hà Nội, một nhóm du khách nhìn thấy hàng bia Tiến sĩ và cụ rùa đá.',
    question: 'Hành vi nào dưới đây được Ban quản lý cho phép và khuyến khích?',
    options: [
      {
        text: 'Xoa đầu rùa đá để lấy may mắn cho con cháu vượt qua kỳ thi đại học.',
        isCorrect: false,
        explanation: 'Sai hoàn toàn. Tập tục sờ đầu rùa làm mòn vẹt cổ vật thế kỷ 15 và đã bị cấm tuyệt đối bằng hàng rào bảo vệ.',
      },
      {
        text: 'Dùng bút chì hoặc chìa khóa khắc tên mình và người yêu lên lưng rùa đá.',
        isCorrect: false,
        explanation: 'Sai nghiêm trọng. Đây là tội hủy hoại di sản quốc gia và bị phạt hành chính rất nặng.',
      },
      {
        text: 'Đứng ngoài hàng rào quy định, chiêm ngưỡng từ tốn, đọc bảng chú thích lịch sử và chụp ảnh không flash.',
        isCorrect: true,
        explanation: 'Chính xác! Giữ gìn nguyên vẹn giá trị di sản cho các thế hệ mai sau bằng thái độ tôn trọng và văn minh.',
      },
      {
        text: 'Trèo qua hàng rào dây thừng để tạo dáng đứng tựa vào bia đá chụp ảnh kỷ niệm.',
        isCorrect: false,
        explanation: 'Sai. Trèo qua hàng rào vi phạm quy chế bảo vệ di tích.',
      },
    ],
  },
];

export const FAMOUS_HERITAGE_SITES: HeritageSiteItem[] = [
  {
    id: 'van-mieu',
    name: 'Văn Miếu - Quốc Tử Giám',
    location: 'Đống Đa, Hà Nội',
    category: 'di_tich_lich_su',
    highlights: 'Trường đại học đầu tiên của Việt Nam, 82 bia Tiến sĩ vinh danh trí thức Đại Việt được UNESCO công nhận là Di sản Tư liệu Thế giới.',
    specialRules: [
      'Tuyệt đối cấm sờ đầu rùa, không trèo qua hàng rào bảo vệ khu nhà bia.',
      'Trang phục lịch sự học đường, không mặc áo sát nách hay váy ngắn.',
      'Không viết, vẽ, khắc tên lên tường gạch cổ và bia đá.',
    ],
    openHours: '08:00 - 17:00 hàng ngày',
  },
  {
    id: 'chua-huong',
    name: 'Quần Thể Di Tích Chùa Hương',
    location: 'Mỹ Đức, Hà Nội',
    category: 'chua',
    highlights: 'Trung tâm hành hương Phật giáo lớn bậc nhất miền Bắc, danh thắng Động Hương Tích được mệnh danh là "Nam thiên đệ nhất động".',
    specialRules: [
      'Chỉ thắp 01 nén hương tại lư hương lớn; cấm đốt vàng mã trong động Hương Tích.',
      'Trang phục kín đáo khi lễ Phật; mang giày bệt chống trơn trượt trên bậc đá ẩm.',
      'Không vứt rác, vỏ chai xuống dòng suối Yến thanh bình.',
    ],
    openHours: 'Mở cửa cả ngày (mùa lễ hội)',
  },
  {
    id: 'den-hung',
    name: 'Khu Di Tích Lịch Sử Đền Hùng',
    location: 'Việt Trì, Phú Thọ',
    category: 'den_mieu',
    highlights: 'Cội nguồn dân tộc Việt Nam, nơi thờ phụng các Vua Hùng có công dựng nước Văn Lang trên núi Nghĩa Lĩnh linh thiêng.',
    specialRules: [
      'Không chen lấn xô đẩy trong ngày Quốc giỗ Mùng 10 tháng Ba âm lịch.',
      'Dâng lễ trang trọng tại Đền Hạ, Đền Trung, Đền Thượng; không cướp lộc hoa quả.',
      'Không vứt rác dọc các bậc đá leo núi Nghĩa Lĩnh.',
    ],
    openHours: '07:00 - 18:00 hàng ngày',
  },
  {
    id: 'co-do-hue',
    name: 'Quần Thể Di Tích Cố Đô Huế',
    location: 'Thành phố Huế',
    category: 'di_tich_lich_su',
    highlights: 'Kinh đô triều Nguyễn (1802-1945), Di sản Văn hóa Thế giới với Đại Nội, Ngọ Môn, Điện Thái Hòa và hệ thống lăng tẩm hoàng gia tráng lệ.',
    specialRules: [
      'Yêu cầu trang phục nghiêm trang, không mặc quần soóc cộc, áo sát nách khi vào Điện Thái Hòa và Thế Miếu.',
      'Không ngồi, nằm lên các cổ vật ngai vàng, trường kỷ, án gian cung đình.',
      'Không chạm tay vào tranh tường, pháp lam và khảm sành sứ.',
    ],
    openHours: '07:30 - 17:30 hàng ngày',
  },
  {
    id: 'nha-tho-lon-ha-noi',
    name: 'Nhà Thờ Lớn Hà Nội (St. Joseph)',
    location: 'Hoàn Kiếm, Hà Nội',
    category: 'nha_tho',
    highlights: 'Công trình kiến trúc Neo-Gothic khánh thành năm 1886, trung tâm sinh hoạt tôn giáo của Tổng Giáo phận Hà Nội.',
    specialRules: [
      'Tắt chuông điện thoại trước khi bước qua cửa thánh đường.',
      'Giữ thinh lặng trong giờ cử hành Thánh lễ; cấm đi lại chụp ảnh gây gián đoạn.',
      'Trang phục lịch sự, áo có tay, quần/váy quá gối; không gác giày dép lên bệ quỳ.',
    ],
    openHours: 'Theo giờ lễ và khung giờ mở cửa cho khách tham quan',
  },
  {
    id: 'hoa-lo',
    name: 'Di Tích Lịch Sử Nhà Tù Hỏa Lò',
    location: 'Hoàn Kiếm, Hà Nội',
    category: 'di_tich_lich_su',
    highlights: 'Nơi minh chứng cho tinh thần bất khuất kiên cường của các chiến sĩ cách mạng Việt Nam trước chế độ lao tù thực dân tàn bạo.',
    specialRules: [
      'Thái độ tôn nghiêm tri ân; cấm cười đùa, đùa cợt, tạo dáng phản cảm trước các buồng giam.',
      'Khuyến khích mặc trang phục tối màu hoặc áo sơ mi trang nhã.',
      'Giữ trật tự tuyệt đối khi nghe thuyết minh qua tai nghe Audio Guide.',
    ],
    openHours: '08:00 - 17:00 hàng ngày',
  },
  {
    id: 'mieu-ba-chua-xu',
    name: 'Miếu Bà Chúa Xứ Núi Sam',
    location: 'Châu Đốc, An Giang',
    category: 'den_mieu',
    highlights: 'Trung tâm tín ngưỡng linh thiêng của đồng bào Nam Bộ, lễ hội Vía Bà Chúa Xứ là Di sản Văn hóa Phi vật thể Quốc gia.',
    specialRules: [
      'Cảnh giác với nạn cò mồi bán chim phóng sinh, mê tín dị đoan, đổi tiền giả ngoài cổng miếu.',
      'Không chen lấn, giật áo bà hay xô đẩy trước điện thờ Bà Chúa Xứ.',
      'Dâng áo phụng bà hoặc hoa tươi qua ban tổ chức theo thứ tự văn minh.',
    ],
    openHours: 'Mở cửa 24/24',
  },
];

export const OUTFIT_OPTIONS: OutfitOption[] = [
  // Top
  {
    id: 'top-shirt',
    label: 'Áo sơ mi / Áo phông có tay kín cổ',
    part: 'top',
    status: 'safe',
    feedback: 'Hoàn hảo! Trang phục kín đáo, lịch thiệp, phù hợp với 100% di tích và nơi thờ tự.',
  },
  {
    id: 'top-aodai',
    label: 'Áo dài truyền thống / Áo lam Phật tử',
    part: 'top',
    status: 'safe',
    feedback: 'Tuyệt vời! Trang phục truyền thống tôn vinh vẻ đẹp văn hóa và trang nghiêm.',
  },
  {
    id: 'top-tank',
    label: 'Áo ba lỗ / Áo hai dây / Áo khoét lưng',
    part: 'top',
    status: 'forbidden',
    feedback: 'Không đạt quy định! Cần khoác thêm áo ngoài hoặc choàng khăn kín vai trước khi vào.',
  },
  {
    id: 'top-crop',
    label: 'Áo hở eo (Croptop) / Áo xuyên thấu',
    part: 'top',
    status: 'forbidden',
    feedback: 'Vi phạm quy tắc trang phục nơi tôn nghiêm. Hãy đổi áo hoặc mượn áo choàng kín người.',
  },

  // Bottom
  {
    id: 'bot-pants',
    label: 'Quần dài âu / jeans không rách',
    part: 'bottom',
    status: 'safe',
    feedback: 'Đạt chuẩn! Quần dài lịch sự, thuận tiện khi di chuyển và quỳ lạy lễ bái.',
  },
  {
    id: 'bot-long-skirt',
    label: 'Váy dài qua đầu gối kín đáo',
    part: 'bottom',
    status: 'safe',
    feedback: 'Đạt chuẩn! Váy dài quá gối thể hiện sự nhã nhặn, tôn trọng chốn linh thiêng.',
  },
  {
    id: 'bot-shorts',
    label: 'Quần đùi / Quần short trên đầu gối',
    part: 'bottom',
    status: 'forbidden',
    feedback: 'Không được phép vào gian thờ chính! Bạn cần quấn khăn choàng phủ kín chân qua đầu gối.',
  },
  {
    id: 'bot-mini-skirt',
    label: 'Chân váy ngắn / Váy xẻ tà cao',
    part: 'bottom',
    status: 'forbidden',
    feedback: 'Không phù hợp! Sẽ bị từ chối vào Chính điện Tam Bảo hoặc Thánh đường Nhà thờ.',
  },

  // Footwear
  {
    id: 'foot-flat',
    label: 'Giày bệt / Giày thể thao / Sneaker',
    part: 'footwear',
    status: 'safe',
    feedback: 'Lý tưởng! Dễ cởi khi vào gian thờ trải chiếu và êm ái khi đi bộ tham quan di tích.',
  },
  {
    id: 'foot-sandal',
    label: 'Dép quai hậu lịch sự',
    part: 'footwear',
    status: 'safe',
    feedback: 'Phù hợp! Gọn gàng và không gây tiếng ồn lớn.',
  },
  {
    id: 'foot-flipflop',
    label: 'Dép xỏ ngón lê lết gây tiếng ồn',
    part: 'footwear',
    status: 'warning',
    feedback: 'Nên hạn chế. Dép lê dễ phát ra tiếng lẹt xẹt mất trật tự và thiếu trang nghiêm.',
  },

  // Accessory
  {
    id: 'acc-hat-glasses',
    label: 'Đang đội mũ / nón lá / đeo kính râm',
    part: 'accessory',
    status: 'warning',
    feedback: 'Lưu ý: Hãy tháo mũ nón và kính râm cầm trên tay trước khi bước vào gian thờ.',
  },
  {
    id: 'acc-scarf',
    label: 'Có mang theo khăn choàng / áo khoác nhẹ dự phòng',
    part: 'accessory',
    status: 'safe',
    feedback: 'Rất chu đáo! Khăn choàng là "vị cứu tinh" giúp che vai hoặc phủ chân khi cần thiết.',
  },
];
