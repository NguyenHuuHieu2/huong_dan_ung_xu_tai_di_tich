export interface GrassrootsChecklistItem {
  id: string;
  category: 'safety' | 'etiquette_sign' | 'heritage_protection' | 'visitor_service';
  title: string;
  checkDescription: string;
  urgency: 'high' | 'medium' | 'standard';
  actionTip: string;
}

export interface GrassrootsScenario {
  id: string;
  title: string;
  situation: string;
  danger: string; // Tác hại nếu không can thiệp kịp thời
  resolutionSteps: string[];
  suggestedDialogue: string; // Mẫu câu nhắc nhở lịch thiệp
  legalReference: string; // Căn cứ quy định / Nghị định
}

export const GRASSROOTS_CHECKLIST: GrassrootsChecklistItem[] = [
  {
    id: 'check-1',
    category: 'etiquette_sign',
    title: 'Biển chỉ dẫn nội quy & quy định trang phục',
    checkDescription: 'Kiểm tra xem cổng tam quan và lối vào có bảng tóm tắt nội quy (áo có tay, quần/váy quá gối, không giẫm bậu cửa) bằng cả tiếng Việt và hình vẽ trực quan.',
    urgency: 'high',
    actionTip: 'Nên đặt biển ở tầm mắt dễ nhìn, cách lối vào 5-10m để khách kịp điều chỉnh trước khi bước qua cửa.',
  },
  {
    id: 'check-2',
    category: 'visitor_service',
    title: 'Quầy hỗ trợ khăn quấn / áo lam choàng',
    checkDescription: 'Bố trí quầy khăn quấn lam miễn phí hoặc đặt cọc nhỏ để du khách lỡ mặc váy ngắn/áo sát nách mượn dùng che chắn.',
    urgency: 'high',
    actionTip: 'Giúp giải quyết văn minh nhu cầu vào lễ của du khách mà không gây xung đột hay cãi cọ.',
  },
  {
    id: 'check-3',
    category: 'safety',
    title: 'Lư hương ngoài trời & phương án PCCC',
    checkDescription: 'Có lư hương lớn ngoài sân; tuyệt đối không để người dân mang hương đang cháy vào cắm trong gian thờ gỗ cổ; bố trí bình chữa cháy mini và cát dập tàn hương.',
    urgency: 'high',
    actionTip: 'Cử đoàn viên thanh niên trực hướng dẫn tại cây hương: "Mỗi người chỉ thắp 01 nén tâm hương tại lư ngoài sân".',
  },
  {
    id: 'check-4',
    category: 'heritage_protection',
    title: 'Dây mềm rào chắn cổ vật quý & bia rùa đá',
    checkDescription: 'Lắp đặt rào chắn dây nhung mềm hoặc rào ngăn cách các pho tượng cổ, bia đá tiến sĩ, sập gụ, ngai thờ hoàng gia.',
    urgency: 'high',
    actionTip: 'Gắn biển thông điệp: "Xin ngắm nhìn bằng mắt - Cùng gìn giữ cổ vật cho con cháu mai sau".',
  },
  {
    id: 'check-5',
    category: 'etiquette_sign',
    title: 'Hòm công đức niêm phong & bảng hướng dẫn giọt dầu',
    checkDescription: 'Hòm công đức đặt ngay ngắn, có khóa an toàn và niêm phong; treo biển nhắc nhở "Không nhét tiền lẻ vào tay tượng, thân tượng hay kẽ đá".',
    urgency: 'medium',
    actionTip: 'Thu gom tiền lẻ đặt vương vãi trên ban thờ định kỳ 1-2 tiếng/lần vào hòm công đức để giữ cảnh quan tôn nghiêm.',
  },
  {
    id: 'check-6',
    category: 'safety',
    title: 'Thùng rác phân loại & vệ sinh khu vực dâng lễ',
    checkDescription: 'Bố trí thùng rác có nắp đậy tại các góc sân; dọn dẹp thường xuyên cuống hoa héo, vỏ bánh kẹo mâm lễ, tàn nhang.',
    urgency: 'medium',
    actionTip: 'Tránh để khói vàng mã bay ngược vào trong gian thờ hoặc khu dân cư xung quanh.',
  },
];

export const GRASSROOTS_SCENARIOS: GrassrootsScenario[] = [
  {
    id: 'sc-1',
    title: 'Du khách mặc áo hai dây, váy ngắn đòi vào gian thờ chính',
    situation: 'Một số bạn trẻ hoặc du khách mặc đồ đi chơi mùa hè (áo croptop, quần short ngắn) chuẩn bị bước qua cửa Tam Bảo/Chính điện.',
    danger: 'Gây phản cảm, mất mỹ quan chốn linh thiêng, vi phạm quy ước văn hóa của di tích.',
    resolutionSteps: [
      'Bước 1: Tiếp cận với thái độ niềm nở, hòa nhã, giữ khoảng cách tôn trọng.',
      'Bước 2: Mời du khách dừng bước khéo léo trước khi bước qua ngạch cửa.',
      'Bước 3: Chỉ dẫn du khách tới quầy mượn khăn quấn hoặc áo lam choàng miễn phí.',
      'Bước 4: Cảm ơn và hướng dẫn lối đi cửa Tả (bên phải) vào lễ.',
    ],
    suggestedDialogue: '"Dạ chào anh/chị! Không gian Chính điện là nơi tôn nghiêm linh thiêng, ban quản lý có quy định trang phục kín đáo. Mời anh/chị qua quầy phía này mượn chiếc khăn quấn lam choàng che vai/chân một chút là mình vào lễ thoải mái ạ. Em cảm ơn anh/chị đã chung tay giữ gìn nét đẹp văn hóa!"',
    legalReference: 'Quy tắc ứng xử nơi công cộng & Nội quy di tích được UBND cấp tỉnh/huyện phê duyệt.',
  },
  {
    id: 'sc-2',
    title: 'Người dân gài nhét tiền lẻ vào tay tượng, miệng rùa đá',
    situation: 'Người đi lễ cố tình nhét tờ tiền lẻ vào ngón tay tượng Thánh, khe gạch, hoặc rải đầy trên mai rùa đá.',
    danger: 'Làm bong tróc lớp sơn son thếp vàng hàng trăm năm tuổi, ăn mòn chất liệu đá hoa cương cổ, tạo hình ảnh đổi chác nhếch nhác.',
    resolutionSteps: [
      'Bước 1: Nhắc nhở trực tiếp ngay khi thấy hành động chuẩn bị nhét tiền.',
      'Bước 2: Giải thích ý nghĩa tâm linh: Thần Phật coi trọng lòng thành, tiền lẻ nhét vào làm xót tượng cổ.',
      'Bước 3: Hướng dẫn người dân bỏ tiền vào Hòm Công Đức của di tích.',
    ],
    suggestedDialogue: '"Dạ thưa cô/chú, các pho tượng gỗ này có tuổi đời hàng trăm năm rồi, tiền giấy cọ xát sẽ làm bong tróc lớp sơn thếp vàng rất xót xa ạ. Mời cô/chú bỏ tiền giọt dầu vào hòm công đức ngay cạnh đây để ban quản lý tu bổ chùa đền, lòng thành dâng Phật vẫn trọn vẹn ạ!"',
    legalReference: 'Điều 14 Luật Di sản Văn hóa về bảo vệ nguyên trạng di vật, cổ vật quốc gia.',
  },
  {
    id: 'sc-3',
    title: 'Khách thắp cả bó hương to, khói nghi ngút mang vào trong nhà gỗ',
    situation: 'Người dân châm cả nắm hương to, lửa cháy bừng bừng mang thẳng vào gian tiền tế/hậu cung.',
    danger: 'Nguy cơ hỏa hoạn thiêu rụi di tích gỗ cổ; khói độc CO gây ngạt thở cho người già, trẻ nhỏ; muội than làm đen tượng.',
    resolutionSteps: [
      'Bước 1: Ngăn ngay tại bậc thềm cửa trước khi hương vào bên trong gian thờ.',
      'Bước 2: Hướng dẫn khách dùng tay vẩy nhẹ dập ngọn lửa (không thổi bằng miệng).',
      'Bước 3: Đề nghị cắm cả bó vào lư hương lớn ngoài sân, chỉ rút 01 nén mang theo hoặc cắm toàn bộ ngoài trời.',
    ],
    suggestedDialogue: '"Bác ơi, gian đình/chùa toàn cấu kiện gỗ lim cổ dễ bắt lửa lắm ạ. Ban Quản lý xin phép mời bác cắm hương tại lư hương lớn ngoài sân này. Nhà chùa/đền thực hiện nếp sống văn minh: chỉ thắp 01 nén tâm hương để bảo vệ di tích bác nhé!"',
    legalReference: 'Luật Phòng cháy chữa cháy & Công văn khuyến cáo của Trung ương Giáo hội Phật giáo Việt Nam.',
  },
  {
    id: 'sc-4',
    title: 'Học sinh/sinh viên đùa cợt, trèo lên hiện vật chụp ảnh kỷ yếu',
    situation: 'Nhóm học sinh chụp ảnh tạo dáng leo trèo lên rùa đá, ôm cột đình, hoặc ngồi ngả ngớn lên sập tế lễ.',
    danger: 'Gãy vỡ cấu kiện cổ vật, nguy cơ ngã trượt nguy hiểm, thái độ bất kính với tiền nhân.',
    resolutionSteps: [
      'Bước 1: Thổi còi nhẹ hoặc lên tiếng nhắc nhở nghiêm túc nhưng mang tính giáo dục.',
      'Bước 2: Mời các em xuống ngay khu vực an toàn.',
      'Bước 3: Gặp trưởng nhóm hoặc thầy cô giáo phụ trách đoàn để quán triệt.',
      'Bước 4: Gợi ý các góc chụp đẹp, trang nhã ngoài sân vườn di tích.',
    ],
    suggestedDialogue: '"Các em ơi, các cụ rùa đá này đã nằm đây hơn 500 năm rồi, đá giòn rất dễ mòn nứt và trơn trượt. Các em đứng phía ngoài tạo dáng áo dài thanh lịch chụp sẽ vừa đẹp vừa thể hiện sự tôn trọng tri thức tiền nhân. Phía cổng tam quan và rặng cây cổ thụ ngoài kia chụp kỷ yếu lên hình rất thơ mộng đấy!"',
    legalReference: 'Nghị định 38/2021/NĐ-CP (Xử phạt vi phạm hành chính trong lĩnh vực văn hóa và di sản).',
  },
  {
    id: 'sc-5',
    title: 'Hiện tượng chen lấn, tranh cướp lộc hoa quả trên ban thờ',
    situation: 'Khi vừa tàn tuần nhang hoặc kết thúc lễ tế, đám đông ùa vào giật lấy hoa quả, tiền lẻ trên mâm cúng.',
    danger: 'Đổ vỡ bát hương, nến đổ gây cháy, xô đẩy giẫm đạp trẻ em, biến tướng tín ngưỡng.',
    resolutionSteps: [
      'Bước 1: Ban khánh tiết cử người đứng bảo vệ nghiêm ngặt khu vực án gian thờ.',
      'Bước 2: Thu hạ lễ vật đưa vào phòng trong, không để mâm trần ngoài điện.',
      'Bước 3: Phát loa thông báo: Lộc sẽ được chia đều một cách trật tự sau khi nghi lễ hoàn tất.',
    ],
    suggestedDialogue: '"Kính thưa bà con và du khách thập phương! Nghi lễ tạ thần đã hoàn mãn. Ban tổ chức sẽ tự tay hạ lễ và chia lộc may mắn đến từng tay bà con theo thứ tự xếp hàng văn minh. Xin bà con đứng tại chỗ, không chen lấn xô đẩy để giữ trọn phúc lộc đầu xuân!"',
    legalReference: 'Điều 11 Nghị định 38/2021/NĐ-CP về vi phạm quy định trong tổ chức lễ hội.',
  },
];

export const GRASSROOTS_ANNOUNCEMENT_SCRIPTS = [
  {
    title: 'Mẫu thông báo loa phát thanh đầu giờ lễ hội',
    text: 'Kính thưa quý khách thập phương và bà con nhân dân! Để giữ gìn sự tôn nghiêm chốn di tích lịch sử và đảm bảo an toàn phòng chống cháy nổ, Ban Quản lý Di tích trân trọng đề nghị: Quý khách vui lòng mặc trang phục lịch sự, kín đáo; chỉ thắp 01 nén hương tại lư hương lớn ngoài sân; không mang hương cháy vào gian thờ gỗ; không cài nhét tiền lẻ lên tượng và hiện vật cổ. Tiền phát tâm công đức xin vui lòng bỏ trực tiếp vào Hòm Công Đức. Kính chúc quý khách một chuyến hành hương an lạc, cát tường!',
  },
  {
    title: 'Mẫu nhắc nhở giữ trật tự và chống xả rác',
    text: 'Kính thưa du khách! Di tích là tài sản vô giá của tiền nhân để lại. Xin quý khách vui lòng giữ im lặng, không đùa cợt to tiếng, bước qua bậu cửa nhẹ nhàng; bỏ rác đúng nơi quy định và tuyệt đối không sờ tay, viết vẽ lên các bức tường, bia đá cổ. Xin trân trọng cảm ơn!',
  },
];
