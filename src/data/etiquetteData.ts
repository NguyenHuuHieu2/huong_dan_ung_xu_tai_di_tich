import { SiteCategory, FAQItem } from '../types';

export const SITE_CATEGORIES: SiteCategory[] = [
  {
    id: 'chua',
    name: 'Chùa (Chùa Phật Giáo)',
    tagline: 'Chốn thanh tịnh tu dưỡng tâm tính, hướng thiện theo giáo lý Phật đà',
    description: 'Chùa là nơi thờ tự của Phật giáo (Phật, Bồ Tát, Thánh Tăng). Đây là không gian thanh tịnh tuyệt đối, nơi người dân tìm về sự an yên, giác ngộ và gieo trồng phước đức.',
    significance: 'Tam Bảo (Phật - Pháp - Tăng). Gian chính điện là nơi tôn nghiêm nhất trong chùa.',
    image: '/src/assets/images/chua_phat_giao_vietnam_1793405786695.jpg',
    dressCode: {
      required: [
        'Áo có tay, cổ áo kín đáo, che kín vai và ngực (áo sơ mi, áo lam, áo phông lịch sự).',
        'Quần dài hoặc váy dài quá đầu gối (tốt nhất là quần ống suông, vải dày dặn).',
        'Màu sắc trang phục nhã nhặn (nâu, lam, xám, trắng, pastel); tránh trang phục quá sặc sỡ.',
        'Tháo giày, dép để đúng kệ ngoài hành lang trước khi bước vào gian Chính điện Tam Bảo.',
      ],
      prohibited: [
        'Áo hai dây, áo ba lỗ, áo cúp ngực, áo hở rốn (croptop), áo khoét lưng.',
        'Quần soóc, váy ngắn trên đầu gối, váy xẻ tà cao, quần rách gối cách điệu.',
        'Trang phục vải ren xuyên thấu, vải mỏng nhìn thấu nội y hoặc đồ tập bó sát (legging).',
        'Đội mũ nón, đeo kính râm khi đứng trước bàn thờ và các pho tượng Phật.',
      ],
      quickFix: 'Nếu lỡ mặc đồ ngắn hoặc áo cộc, hãy đến quầy lễ tân/nhà khách của chùa để mượn khăn quấn hoặc áo lam khoác ngoài trước khi vào lễ.',
    },
    properEtiquette: [
      {
        title: 'Quy tắc bước qua ngạch cửa (bậu cửa)',
        desc: 'Bước qua ngạch gỗ dứt khoát, tuyệt đối không đặt chân giẫm lên bậu cửa. Theo phong tục: Nam bước chân trái qua trước, Nữ bước chân phải qua trước ("Nam tả - Nữ hữu").',
        importance: 'critical',
      },
      {
        title: 'Quy tắc vào và ra cửa',
        desc: 'Vào bằng cửa bên Phải (cửa Giáp/Tả môn), đi ra bằng cửa bên Trái (cửa Ất/Hữu môn). Không đi lại qua cửa chính giữa (Cửa Trung môn) vì đây là lối đi thiêng liêng chỉ dành cho chư Phật, cao tăng hoặc dịp đại lễ.',
        importance: 'critical',
      },
      {
        title: 'Nghi thức dâng hương ("Nhất tâm quy kính")',
        desc: 'Chỉ thắp duy nhất 01 nén hương thơm tại lư hương lớn đặt ngoài sân chùa. Không mang hương cháy vào cắm bừa bãi trong chính điện để phòng hỏa hoạn và bảo vệ tượng Phật cổ.',
        importance: 'critical',
      },
      {
        title: 'Lối di chuyển "Hữu nhiễu"',
        desc: 'Khi tham quan chiêm bái trong điện Phật, nên đi theo chiều kim đồng hồ quanh các tượng Phật và bàn thờ. Đây là nghi thức "Hữu nhiễu" biểu thị lòng tôn kính tột bậc trong Phật giáo.',
        importance: 'standard',
      },
      {
        title: 'Lời chào & cách xưng hô',
        desc: 'Khi gặp quý Thầy (Tăng, Ni), chắp tay hình búp sen trước ngực và niệm: "A Di Đà Phật" hoặc "Kính bạch Thầy", "Bạch Thầy". Xưng là "Con".',
        importance: 'standard',
      },
    ],
    strictProhibitions: [
      {
        title: 'Tuyệt đối không dâng lễ mặn ở chính điện',
        desc: 'Phật giáo tôn trọng giới sát sinh. Tại chính điện Tam Bảo chỉ dâng lễ chay: hoa tươi (hoa sen, hoa cúc, huệ), quả sạch, trà, nước tinh khiết, xôi chè ngọt. Tuyệt đối không mang thịt cá, gà luộc, giò chả, vàng mã hay tiền âm phủ vào chính điện.',
        importance: 'critical',
      },
      {
        title: 'Nghiêm cấm gài, nhét tiền lẻ vào tượng Phật',
        desc: 'Hành vi nhét tiền vào tay Phật, chân Phật, tòa sen là hành vi phản cảm và xâm hại hiện vật. Hãy đặt tiền cúng dường, giọt dầu trực tiếp vào Hòm Công Đức theo đúng quy định.',
        importance: 'critical',
      },
      {
        title: 'Cấm tạo dáng phản cảm & quay lưng vào tượng Phật',
        desc: 'Không đứng quay lưng vào tượng Phật để chụp ảnh selfie; không ngồi dạng chân, ngả ngớn trên chiếu bái đường; không tự ý gõ chuông, đánh khánh của nhà chùa.',
        importance: 'critical',
      },
      {
        title: 'Không đùa cợt, nói to, mở loa ngoài điện thoại',
        desc: 'Chuyển điện thoại sang chế độ rung hoặc im lặng. Giữ thanh tịnh lời nói ("khẩu nghiệp"), không nói tục chửi bậy, không cãi vã.',
        importance: 'standard',
      },
    ],
    entranceRule: {
      doorway: 'Đi vào bằng cửa bên Phải, đi ra bằng cửa bên Trái. Tránh đi cửa Trung tâm.',
      threshold: 'Bậu cửa bằng gỗ là linh hồn ngăn cách giới thiêng - bước qua nhẹ nhàng, cấm giẫm đạp.',
    },
    incenseAndOfferings: {
      allowed: 'Hoa tươi (sen, huệ, cúc), đĩa trái cây tươi, nước suối trong, bánh oản chay, xôi gấc ngọt.',
      forbidden: 'Gà luộc, thủ lợn, tôm cá, rượu bia, vàng mã, tiền âm phủ (chùa không đốt vàng mã).',
      note: 'Chỉ 01 nén hương tại lư đồng ngoài sân. Tượng Phật cổ rất nhạy cảm với khói muội than.',
    },
    photographyRules: 'Được chụp ảnh khuôn viên sân vườn, phong cảnh bên ngoài. Hạn chế tối đa chụp ảnh bên trong Chính điện Tam Bảo; tuyệt đối không dùng đèn flash và không quay phim khi đang tụng kinh.',
    famousExamples: ['Chùa Trấn Quốc (Hà Nội)', 'Chùa Hương (Mỹ Đức)', 'Chùa Bái Đính (Ninh Bình)', 'Chùa Linh Ứng (Đà Nẵng)', 'Chùa Vĩnh Nghiêm (TP.HCM)', 'Thiền viện Trúc Lâm Yên Tử'],
  },
  {
    id: 'den_mieu',
    name: 'Đền, Miếu & Phủ (Thờ Thánh, Mẫu, Thần Linh)',
    tagline: 'Không gian linh thiêng thờ phụng các bậc Tiên Thánh, Danh tướng và Mẫu linh thiêng',
    description: 'Đền, Miếu, Phủ là nơi thờ tự các nhân thần (như Vua Hùng, Trần Hưng Đạo, Hai Bà Trưng), nhiên thần (thần sông, thần núi) và tín ngưỡng thờ Mẫu Tam phủ - Tứ phủ của người Việt.',
    significance: 'Uống nước nhớ nguồn, tôn vinh công đức tiền nhân cứu nước giúp dân và ước vọng mưa thuận gió hòa.',
    image: '/src/assets/images/den_dinh_lang_vietnam_1793405786726.jpg',
    dressCode: {
      required: [
        'Trang phục trang nghiêm, kín cổ, kín tay và dài quá đầu gối.',
        'Khuyến khích mặc áo dài truyền thống, âu phục lịch thiệp hoặc trang phục sẫm màu thanh lịch.',
        'Bỏ giày dép nếu có biển chỉ dẫn trước khi bước vào gian Hậu cung hoặc chiếu lễ.',
      ],
      prohibited: [
        'Váy ngắn, quần soóc lửng, váy xẻ cao, áo hở lưng, áo trễ ngực, áo sát nách.',
        'Quần áo rách gối, quần áo thể thao mỏng tang, bó sát người.',
        'Đội nón lá, mũ bảo hiểm, mang kính đen khi đứng trước án gian thờ.',
      ],
      quickFix: 'Nhiều đền phủ như Phủ Tây Hồ, Đền Hùng đều có quầy hỗ trợ khăn choàng cho du khách chưa chuẩn bị trang phục.',
    },
    properEtiquette: [
      {
        title: 'Nghi thức bước qua ngạch cửa gỗ',
        desc: 'Nhấc chân cao bước qua ngạch cửa gỗ (không chạm chân lên ngạch). Đầu cúi nhẹ tỏ lòng thành kính với Thánh quan.',
        importance: 'critical',
      },
      {
        title: 'Quy tắc sắp lễ & dâng lễ',
        desc: 'Đền, Phủ có thể dâng lễ mặn (gà luộc, xôi thịt) nhưng chỉ được đặt ở ban Công Đồng, ban Tiền Tế ngoài; không tự ý mang lễ mặn đặt lên ban Thờ Mẫu tối cao hoặc cấm địa nếu có biển hướng dẫn.',
        importance: 'critical',
      },
      {
        title: 'Văn hóa xin lộc & lễ bái',
        desc: 'Cầu quốc thái dân an, cầu sức khỏe, trí tuệ và bình an cho gia đình. Tránh tâm lý cầu tài lộc bất chính, cầu mua chuộc thánh thần hay chen lấn xô đẩy.',
        importance: 'standard',
      },
      {
        title: 'Ứng xử khi có nghi lễ Hầu đồng (Giá hầu)',
        desc: 'Nếu gặp buổi lễ Lên đồng (Di sản Phi vật thể UNESCO), hãy ngồi trật tự chiêm ngưỡng, không tự tiện bước lên chiếu sập của Thanh đồng, không xông vào cướp phát lộc gây hỗn loạn.',
        importance: 'standard',
      },
    ],
    strictProhibitions: [
      {
        title: 'Cấm chen lấn, tranh cướp ấn, cướp lộc',
        desc: 'Hành vi chen lấn xô đẩy, trèo lên kiệu thánh, xé lộc hoa quả trên ban thờ là hoàn toàn phi văn hóa và làm mất đi sự tôn nghiêm linh thiêng của lễ hội.',
        importance: 'critical',
      },
      {
        title: 'Tuyệt đối cấm gài tiền lẻ vào tượng Thánh, ngai thờ',
        desc: 'Không cắm tiền lẻ vào tay tượng danh tướng, đao kiếm thờ, sập thờ. Toàn bộ tiền phát tâm công đức hãy bỏ vào Hòm Công Đức của Ban Quản Lý.',
        importance: 'critical',
      },
      {
        title: 'Không đốt quá nhiều vàng mã, hình nhân',
        desc: 'Hạn chế tối đa đốt vàng mã, tuân thủ đúng quy định phòng cháy chữa cháy của Đền. Không đốt vàng mã ngoài khu vực lò hóa sớ quy định.',
        importance: 'standard',
      },
      {
        title: 'Cấm bài bạc trá hình, mê tín dị đoan',
        desc: 'Không tham gia bói toán dạo, rút quẻ đổi tiền, xóc thẻ kiếm tiền bất hợp pháp trong khuôn viên di tích.',
        importance: 'critical',
      },
    ],
    entranceRule: {
      doorway: 'Đi cửa Giáp (phải) vào, đi cửa Ất (trái) ra. Không đi qua cửa Thần đạo chính giữa.',
      threshold: 'Ngạch cửa gỗ là ranh giới thánh vực - nhấc cao chân bước qua, cấm dẫm lên.',
    },
    incenseAndOfferings: {
      allowed: 'Hương thơm, hoa quả tươi, bánh kẹo phẩm oản, cau trầu, xôi thịt đặt ở ban Tiền tế / Công đồng.',
      forbidden: 'Lễ vật ôi thiu, hoa giả đã phai màu, đốt đồ mã cồng kềnh bừa bãi trong điện.',
      note: 'Thắp 01 nén hương tại lư hương ngoài sân. Tránh thắp cả bó hương khói độc hại.',
    },
    photographyRules: 'Được chụp ảnh lưu niệm ở khuôn viên sân ngoài. Nghiêm cấm chụp ảnh có đèn flash vào tượng thần linh cổ và khu vực Hậu cung cấm địa.',
    famousExamples: ['Đền Hùng (Phú Thọ)', 'Đền Kiếp Bạc (Hải Dương)', 'Đền Trần (Nam Định)', 'Phủ Tây Hồ (Hà Nội)', 'Miếu Bà Chúa Xứ Núi Sam (An Giang)', 'Đền Quán Thánh (Hà Nội)'],
  },
  {
    id: 'dinh_lang',
    name: 'Đình Làng (Không Gian Văn Hóa Làng Xã Việt)',
    tagline: 'Cột trụ văn hóa làng quê, nơi thờ Thành Hoàng và bảo lưu thuần phong mỹ tục',
    description: 'Đình làng là công trình kiến trúc cổ truyền tiêu biểu nhất của làng quê Việt Nam, vừa là nơi thờ cúng vị Thành Hoàng bảo trợ cho làng, vừa là nơi hội họp, bàn bạc việc làng của cộng đồng dân cư.',
    significance: 'Biểu tượng tinh thần đoàn kết, hồn quê và lưu giữ nghệ thuật điêu khắc gỗ dân gian đỉnh cao.',
    image: '/src/assets/images/den_dinh_lang_vietnam_1793405786726.jpg',
    dressCode: {
      required: [
        'Trang phục lịch sự, chỉnh tề, quần dài, áo có tay.',
        'Trong các dịp lễ hội làng, khuyến khích mặc áo the khăn xếp, áo dài ngũ thân hoặc âu phục trang trọng.',
        'Không đi chân đất bẩn hoặc dép lầy lội lên các sàn gỗ, chiếu hoa của đình.',
      ],
      prohibited: [
        'Mặc quần đùi cộc, áo may ô, áo ba lỗ, đồ mặc nhà ngủ xộc xệch.',
        'Váy ngắn, đồ xuyên thấu, trang phục kỳ dị không phù hợp văn hóa thôn quê.',
        'Để đầu trần không tề chỉnh khi dự các nghi thức tế lễ của các cụ bồi tế.',
      ],
      quickFix: 'Khi về thăm đình làng thôn quê, hãy chuẩn bị sẵn một bộ trang phục tề chỉnh, kín đáo.',
    },
    properEtiquette: [
      {
        title: 'Tôn trọng các cụ cao niên và Ban Khánh tiết',
        desc: 'Đình làng là nơi các cụ cao niên trong làng gìn giữ hương khói. Khi đến thăm đình, hãy chào hỏi kính cẩn các cụ từ, thủ từ hoặc các cụ bô lão trong ban quản lý.',
        importance: 'standard',
      },
      {
        title: 'Quy tắc bước lên gian giữa và ngạch đình',
        desc: 'Gian giữa (chính điện thờ Thành Hoàng) là nơi linh thiêng nhất. Người ngoài làng hoặc khách vãng lai chỉ vào chiêm bái khi có sự hướng dẫn của Ban khánh tiết, không tự tiện đi lại.',
        importance: 'critical',
      },
      {
        title: 'Chiêm ngưỡng điêu khắc gỗ với tinh thần gìn giữ',
        desc: 'Đình làng Việt Nam nổi tiếng với những bức chạm khắc gỗ thế kỷ 16-18 (cảnh cưỡi rồng, đánh vật, tắm ao). Hãy ngắm nhìn bằng mắt, không sờ tay hay cào xước thớ gỗ.',
        importance: 'standard',
      },
    ],
    strictProhibitions: [
      {
        title: 'Không tự tiện ngồi lên chiếu tế, sập gụ hương án',
        desc: 'Các chiếu hoa trải ở gian đình và sập gụ là vị trí dành cho các bậc bô lão làm lễ tế thần. Tuyệt đối không ngồi bạ chân, nằm ngủ ngả ngớn lên sập đình.',
        importance: 'critical',
      },
      {
        title: 'Cấm nói tục, chửi thề, cãi cọ trong khuôn viên đình',
        desc: 'Đình làng là biểu tượng đạo đức của cả làng. Bất kỳ hành vi khiếm nhã, văng tục chửi bậy đều vi phạm nghiêm trọng hương ước truyền thống.',
        importance: 'critical',
      },
      {
        title: 'Cấm xả rác, hút thuốc lá gần cấu kiện gỗ cổ',
        desc: 'Các đình làng cổ làm bằng gỗ lim, xoan, mít hàng trăm năm tuổi, rất dễ bắt lửa. Tuyệt đối không hút thuốc, vứt tàn diêm gần các cột đình, mè mái.',
        importance: 'critical',
      },
    ],
    entranceRule: {
      doorway: 'Đi qua cửa tả vu / hữu vu bên cánh, giữ bước chân nhẹ nhàng trên nền gạch Bát Tràng.',
      threshold: 'Ngạch gỗ đình làng thường rất cao - nhấc chân bước qua cung kính, không đạp lên.',
    },
    incenseAndOfferings: {
      allowed: 'Trầu cau tươi, chè khô ngon, rượu nếp trắng, hoa quả tươi, hương trầm truyền thống.',
      forbidden: 'Đồ hộp giả tạo, vàng mã quá đà, vứt rác cuống hoa bừa bãi dưới sàn gỗ.',
      note: 'Dâng lễ theo hướng dẫn của cụ từ trông đình. Giữ lễ vật gọn gàng trên khay gỗ.',
    },
    photographyRules: 'Được chụp ảnh các bức chạm khắc dân gian để nghiên cứu, học tập. Không dùng đèn chiếu công suất cao sát thớ gỗ cổ.',
    famousExamples: ['Đình Đình Bảng (Bắc Ninh)', 'Đình Tây Đằng (Hà Nội)', 'Đình Chu Quyến (Ba Vì)', 'Đình Lỗ Hạnh (Bắc Giang)', 'Đình So (Quốc Oai)'],
  },
  {
    id: 'nha_tho',
    name: 'Nhà Thờ Công Giáo & Tin Lành (Thánh Đường Kitô Giáo)',
    tagline: 'Thánh đường thiêng liêng phụng vụ Thiên Chúa và cầu nguyện cho tha nhân',
    description: 'Nhà thờ là nơi các tín hữu Kitô giáo tề tựu để cử hành Thánh lễ, cầu nguyện, lãnh nhận các bí tích và thờ phượng Thiên Chúa. Đây là không gian tôn nghiêm mang đậm vẻ đẹp kiến trúc và đức tin.',
    significance: 'Nhà của Thiên Chúa (Domus Dei). Nơi đặt Nhà Tạm lưu giữ Thánh Thể là nơi linh thánh nhất.',
    image: '/src/assets/images/nha_tho_co_vietnam_1793405786902.jpg',
    dressCode: {
      required: [
        'Trang phục trang nhã, lịch sự, kín đáo; áo có tay che kín bờ vai.',
        'Quần dài hoặc váy dài quá đầu gối. Mang giày hoặc dép quai hậu gọn gàng.',
        'Màu sắc trang phục nhã nhặn, kín cổ, phù hợp không khí trang nghiêm của thánh đường.',
      ],
      prohibited: [
        'Áo hai dây, áo ba lỗ, áo cúp ngực, áo hở eo lưng, áo mỏng nhìn thấy nội y.',
        'Quần đùi ngắn, váy ngắn trên đầu gối, váy bó sát xẻ cao quá mức.',
        'Đội mũ, nón, đội khăn trùm đầu thời trang (trừ khăn voan ren phụng vụ truyền thống của phụ nữ Công giáo).',
        'Đi dép lê lẹt xẹt gây tiếng ồn vang dội trong lòng thánh đường.',
      ],
      quickFix: 'Nếu lỡ mặc váy ngắn hoặc áo sát nách khi đến thăm, hãy dùng khăn choàng lớn che vai và phủ qua gối trước khi bước vào bên trong.',
    },
    properEtiquette: [
      {
        title: 'Giữ thinh lặng tuyệt đối (Đặc biệt trong giờ Thánh lễ)',
        desc: 'Tắt chuông hoặc để điện thoại ở chế độ im lặng. Tránh nói chuyện to, không cho trẻ nhỏ chạy nhảy la hét trên các hàng ghế quỳ.',
        importance: 'critical',
      },
      {
        title: 'Cúi đầu / cúi mình tôn kính trước Nhà Tạm',
        desc: 'Khi đi ngang qua Bàn thờ chính hoặc Nhà Tạm (nơi có ngọn đèn chầu đỏ cháy sáng biểu trưng Thánh Thể Chúa ngự), người Công giáo bái gối hoặc cúi mình cung kính. Du khách nên cúi đầu nhẹ để tỏ lòng tôn trọng tín ngưỡng.',
        importance: 'standard',
      },
      {
        title: 'Quy tắc dự lễ của người ngoại đạo (chưa rửa tội)',
        desc: 'Du khách hoặc người không có đạo có thể ngồi tham dự thánh lễ một cách tôn trọng. Tuy nhiên, khi đến nghi thức Rước Lễ (chia Bánh Thánh), chỉ người Công giáo đã xưng tội mới lên nhận Bánh Thánh; người ngoại đạo vui lòng ngồi yên tại chỗ.',
        importance: 'critical',
      },
      {
        title: 'Sử dụng hàng ghế quỳ đúng cách',
        desc: 'Thanh gỗ có đệm phía dưới các hàng ghế là bệ để tín hữu quỳ gối cầu nguyện. Không được dẫm chân hoặc gác giày dép bẩn lên bệ quỳ này.',
        importance: 'standard',
      },
    ],
    strictProhibitions: [
      {
        title: 'Nghiêm cấm bước lên Cung Thánh (Khu vực bàn thờ chính)',
        desc: 'Cung Thánh là khu vực tôn nghiêm dành riêng cho Giám mục, Linh mục và những người giúp lễ trong phụng vụ. Du khách tuyệt đối không tự ý bước lên bục Cung Thánh hay chạm vào Chén Thánh, Sách Thánh.',
        importance: 'critical',
      },
      {
        title: 'Không chụp ảnh quay phim gây gián đoạn Thánh lễ',
        desc: 'Tuyệt đối không đi lại lung tung, dùng đèn flash chiếu vào mặt Linh mục hay giáo dân đang quỳ cầu nguyện trong giờ cử hành phụng vụ.',
        importance: 'critical',
      },
      {
        title: 'Không mang đồ ăn, thức uống, nhai kẹo cao su',
        desc: 'Bên trong thánh đường nghiêm cấm ăn uống, nhai kẹo cao su hay vứt rác dưới gầm ghế.',
        importance: 'critical',
      },
      {
        title: 'Không mang vàng mã, hương nhang Phật giáo vào nhà thờ',
        desc: 'Nhà thờ Công giáo không sử dụng tiền vàng mã hay thắp hương cá nhân tại hàng ghế. Chỉ có hương trầm phụng vụ do nhà thờ cử hành.',
        importance: 'standard',
      },
    ],
    entranceRule: {
      doorway: 'Đi vào nhẹ nhàng qua cửa chính hoặc cửa hông, mở cửa khẽ khàng tránh gây tiếng động.',
      threshold: 'Bước chân nhẹ, không kéo lê giày dép trên sàn đá granite hoặc sàn gạch cổ.',
    },
    incenseAndOfferings: {
      allowed: 'Hoa tươi dâng lên Đức Mẹ hoặc Thánh đài ngoài trời; tiền đóng góp xin lễ bỏ vào thùng quyên góp.',
      forbidden: 'Vàng mã, hương vòng, lễ mặn, tiền cắm vào chân tượng Chúa hay Đức Mẹ.',
      note: 'Thắp nến tạ ơn tại các giá nến được bố trí sẵn ở đài Đức Mẹ ngoài trời.',
    },
    photographyRules: 'Được chụp ảnh kiến trúc bên ngoài tự do. Bên trong nhà thờ: chỉ chụp ảnh khi ngoài giờ lễ, không bật đèn flash, không bấm máy lia lịa khi có người đang quỳ cầu nguyện.',
    famousExamples: ['Nhà thờ Lớn Hà Nội (St. Joseph)', 'Nhà thờ Đức Bà Sài Gòn', 'Nhà thờ Đá Phát Diệm (Ninh Bình)', 'Nhà thờ Domaine de Marie (Đà Lạt)', 'Nhà thờ Chính tòa Đà Nẵng (Nhà thờ Con Gà)', 'Nhà thờ Tam Đảo'],
  },
  {
    id: 'di_tich_lich_su',
    name: 'Khu Di Tích Lịch Sử, Danh Thắng & Bảo Tàng Cách Mạng',
    tagline: 'Nơi lưu giữ ký ức ngàn năm văn hiến và tinh thần quật cường của dân tộc',
    description: 'Bao gồm các di tích quốc gia đặc biệt như Hoàng thành Thăng Long, Cố đô Huế, Văn Miếu - Quốc Tử Giám, Nhà tù Hỏa Lò, Địa đạo Củ Chi, Pác Bó... Nơi ghi dấu mốc son lịch sử và sự hy sinh anh dũng của các thế hệ cha anh.',
    significance: 'Di sản vô giá của quốc gia, không gian giáo dục truyền thống yêu nước và lòng tri ân sâu sắc.',
    image: '/src/assets/images/hero_vietnam_heritage_sanctum_1793405785844.jpg',
    dressCode: {
      required: [
        'Trang phục lịch sự, gọn gàng, thanh lịch; áo có tay, quần dài hoặc váy dài quá gối.',
        'Đặc biệt tại các di tích nhà tù cách mạng (Hỏa Lò, Côn Đảo) và nghĩa trang liệt sĩ, nên mặc trang phục tối màu hoặc màu trắng trang trọng, kín đáo.',
        'Đi giày thể thao, giày bệt êm chân để tiện di chuyển trên các bậc đá và đường dốc.',
      ],
      prohibited: [
        'Váy ngắn, quần short cũn cỡn, áo trễ vai, áo hở ngực phản cảm.',
        'Trang phục có in hình vẽ, khẩu hiệu kích động, thô tục hoặc mang tính chất báng bổ lịch sử.',
        'Đi chân trần hoặc mặc đồ bơi, đồ ngủ khi tham quan di tích lịch sử.',
      ],
      quickFix: 'Nên chuẩn bị một chiếc áo khoác nhẹ hoặc khăn quàng mỏng trong túi để che vai khi bước vào các phòng trưng bày trang trọng.',
    },
    properEtiquette: [
      {
        title: 'Bảo vệ nguyên trạng hiện vật và cổ vật',
        desc: 'Tuyệt đối không chạm tay vào các hiện vật trưng bày, bia đá, rùa đá, tường thành cổ, ngai vàng, súng thần công. Mồ hôi tay chứa axit và muối khoáng gây bào mòn cổ vật không thể phục hồi.',
        importance: 'critical',
      },
      {
        title: 'Thái độ tưởng niệm tại di tích cách mạng',
        desc: 'Tại các di tích tưởng niệm chiến tranh (Nhà tù Hỏa Lò, Địa đạo Củ Chi, Ngã ba Đồng Lộc), hãy giữ nét mặt trang nghiêm, lòng thành kính tri ân. Không cười cợt, làm dáng nhí nhố bên phòng giam hay đài tưởng niệm.',
        importance: 'critical',
      },
      {
        title: 'Tuân thủ lộ trình tham quan và biển chỉ dẫn',
        desc: 'Đi theo tuyến đường tham quan quy định, không trèo qua rào chắn an toàn, không giẫm chân lên bãi cỏ di tích, không leo trèo lên bờ thành hay các công trình đang trùng tu.',
        importance: 'standard',
      },
      {
        title: 'Văn hóa xếp hàng văn minh',
        desc: 'Xếp hàng mua vé, xếp hàng vào cửa tham quan, nhường lối cho người cao tuổi, người khuyết tật và các đoàn học sinh.',
        importance: 'standard',
      },
    ],
    strictProhibitions: [
      {
        title: 'Tuyệt đối cấm viết, vẽ, khắc bậy lên di tích',
        desc: 'Hành vi dùng dao, bút xóa, chì viết "Tôi đến đây", khắc tên lên tường gạch, cột gỗ, rùa đá Văn Miếu là hành vi phá hoại di sản văn hóa, bị xử phạt hành chính rất nặng theo Luật Di sản Văn hóa Việt Nam.',
        importance: 'critical',
      },
      {
        title: 'Cấm sờ đầu rùa đá bia Tiến sĩ',
        desc: 'Tập tục sờ đầu rùa đá để "cầu may thi cử" đã bị cấm hoàn toàn tại Văn Miếu - Quốc Tử Giám vì làm mòn vẹt các linh vật đá hàng trăm năm tuổi. Hãy ngắm nhìn từ sau hàng rào bảo vệ.',
        importance: 'critical',
      },
      {
        title: 'Cấm xả rác bừa bãi và hút thuốc lá',
        desc: 'Vứt rác đúng thùng rác phân loại. Nhiều khu di tích có cảnh quan rừng rậm hoặc cấu kiện gỗ rất dễ cháy (như Địa đạo, Di tích Chiến khu), nghiêm cấm hút thuốc ngoài khu vực cho phép.',
        importance: 'standard',
      },
      {
        title: 'Không dùng flycam (drone) khi chưa được cấp phép',
        desc: 'Hầu hết các di tích quốc gia đặc biệt nằm trong khu vực quản lý an ninh hàng không nghiêm ngặt, cấm tự ý bay thiết bị không người lái chụp hình nếu không có giấy phép của cơ quan chức năng.',
        importance: 'standard',
      },
    ],
    entranceRule: {
      doorway: 'Xuất trình vé tham quan tại cổng soát vé, kiểm tra an ninh và tuân thủ lối đi một chiều.',
      threshold: 'Tôn trọng các bậc thềm đá nghìn năm tuổi, không kéo lê valy cồng kềnh lên bậc cổ.',
    },
    incenseAndOfferings: {
      allowed: 'Đặt vòng hoa tưởng niệm, dâng hương hoa tươi tại đài tưởng niệm theo nghi thức quy định.',
      forbidden: 'Đốt vàng mã bừa bãi trong khuôn viên di tích lịch sử.',
      note: 'Dâng hương tại các địa chỉ đỏ cách mạng cần tuân theo hướng dẫn của ban quản lý di tích.',
    },
    photographyRules: 'Được chụp ảnh kỷ niệm ngoại cảnh. Cấm chụp ảnh tại các phòng trưng bày tài liệu mật, khu vực cấm quay phim chụp ảnh hoặc khu vực lưu trữ thiêng liêng.',
    famousExamples: ['Hoàng Thành Thăng Long (Hà Nội)', 'Văn Miếu - Quốc Tử Giám (Hà Nội)', 'Quần thể Di tích Cố đô Huế', 'Khu Di tích Lịch sử Nhà tù Hỏa Lò', 'Địa đạo Củ Chi (TP.HCM)', 'Khu Di tích Pác Bó (Cao Bằng)'],
  },
];

export const CULTURAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Vì sao trong kiến trúc truyền thống Việt Nam tuyệt đối cấm giẫm lên ngạch cửa?',
    shortAnswer: 'Ngạch cửa gỗ là ranh giới phân định cõi thiêng và cõi tục, tượng trưng cho bờ vai và cốt cách công trình.',
    detailedExplanation: `Trong phong thủy và quan niệm văn hóa Việt Nam:
1. **Ranh giới tôn nghiêm**: Bậu cửa (ngạch cửa) bằng gỗ là lằn ranh phân chia giữa không gian thế tục bên ngoài và không gian thiêng liêng bên trong.
2. **Biểu tượng cốt cách**: Bậu cửa được ví như "khung xương" nâng đỡ ngôi nhà tâm linh. Giẫm lên bậu cửa bị coi là đạp lên sự tôn nghiêm của chủ nhân ngôi nhà hay các bậc Thần, Phật.
3. **Ý nghĩa khiêm cung**: Ngạch cửa được thiết kế cao để người bước vào buộc phải hạ thấp tầm mắt, hơi cúi đầu khi nhấc chân qua, từ đó tự nhiên sinh tâm kính cẩn, khiêm nhường.
4. **Quy tắc bước chân**: Theo dân gian, người xưa thường bước: Nam chân trái, Nữ chân phải ("Nam tả - Nữ hữu") khi vượt qua bậu cửa.`,
    category: 'general',
    tags: ['ngạch cửa', 'bậu cửa', 'kiến trúc cổ', 'phong tục'],
  },
  {
    id: 'faq-2',
    question: 'Vì sao chỉ nên thắp đúng 01 nén hương ("Nhất tâm quy kính") thay vì thắp cả bó?',
    shortAnswer: 'Một nén hương tượng trưng cho lòng chí thành duy nhất, tránh hỏa hoạn và bảo vệ cổ vật.',
    detailedExplanation: `Theo lời khuyên chính thức của Giáo hội Phật giáo Việt Nam và các nhà nghiên cứu văn hóa:
1. **Ý nghĩa "Nhất tâm"**: Con số 1 tượng trưng cho Tâm thanh tịnh, một lòng hướng thiện ("Nhất tâm quy kính"). Dâng một nén tâm hương quý hơn ngàn nén hương nghi ngút mà tâm tạp niệm.
2. **Bảo vệ sức khỏe cộng đồng**: Thắp cả bó hương trong không gian kín tạo ra lượng khói độc hại chứa carbon monoxide và hóa chất tạo mùi, gây cay mắt, khó thở cho người già và trẻ nhỏ.
3. **Bảo vệ cổ vật**: Khói và muội than bám vào hoành phi, câu đối, tượng Phật thế kỷ 17-18 làm bong tróc lớp sơn son thếp vàng vô giá.
4. **Phòng chống hỏa hoạn**: Nhiều vụ hỏa hoạn tại các di tích cổ xuất phát từ tàn hương cháy dở gom thành bùi nhùi lửa. Hiện nay các chùa, đền lớn đều yêu cầu cắm hương tại lư hương lớn ngoài trời.`,
    category: 'chua',
    tags: ['thắp hương', 'nhất tâm', 'bảo vệ di tích', 'sức khỏe'],
  },
  {
    id: 'faq-3',
    question: 'Vì sao hành vi nhét tiền lẻ vào tay tượng Phật, miệng rùa đá lại bị lên án mạnh mẽ?',
    shortAnswer: 'Đây là biến tướng tâm lý đổi chác, làm xấu cảnh quan và xâm hại nghiêm trọng cổ vật quốc gia.',
    detailedExplanation: `Hành vi nhét, gài, rải tiền lẻ là thói quen xấu cần kiên quyết loại bỏ:
1. **Biến tướng tâm lý tâm linh**: Thần, Phật, Thánh nhân không dùng tiền trần gian. Việc nhét tiền vào tay tượng tạo cảm giác "hối lộ", "mua chuộc" thần linh, trái ngược hoàn toàn với tinh thần xả bỏ và vô ngã của đạo Phật.
2. **Làm hỏng hiện vật cổ**: Những tờ tiền lẻ ma sát làm tróc sơn thếp vàng trên tay tượng Phật, mài mòn đá hoa cương của rùa bia tiến sĩ thế kỷ 15.
3. **Mất mỹ quan tôn nghiêm**: Tiền lẻ bay tứ tung dưới chân ban thờ, góc rêu phong tạo nên cảnh tượng nhếch nhác.
4. **Cách công đức đúng đắn**: Tiền giọt dầu hãy bỏ trực tiếp vào Hòm Công Đức của Ban Quản Lý di tích để phục vụ việc tôn tạo, tu bổ chùa đền và làm công tác từ thiện xã hội.`,
    category: 'general',
    tags: ['tiền lẻ', 'công đức', 'rùa đá', 'ứng xử văn minh'],
  },
  {
    id: 'faq-4',
    question: 'Tại sao cửa chính giữa (Cửa Trung môn) của Chùa, Đền thường đóng hoặc không cho khách đi?',
    shortAnswer: 'Cửa giữa là đường Thần đạo dành riêng cho đấng tối cao, người phàm đi cửa Tả/Hữu.',
    detailedExplanation: `Trong kiến trúc Tam quan (ba cửa) của Chùa, Đền, Đình:
1. **Cửa giữa (Trung môn / Cửa Thần đạo)**: Là trục linh thiêng nối thẳng từ ngoài sân vào án gian thờ chính. Cửa này xưa kia chỉ mở khi đón Thiên tử (Vua), các bậc Cao tăng đắc đạo hoặc khi rước kiệu Thánh trong các ngày đại lễ lớn.
2. **Cửa bên Phải (Tả môn - Nhập)**: Cửa dành cho người đi vào. Theo phong thủy đây là hướng sinh khí, mang ý nghĩa đón nhận điều tốt lành.
3. **Cửa bên Trái (Hữu môn - Xuất)**: Cửa dành cho người đi ra.
Khi đến di tích, hãy đi vào bằng cửa Tả và đi ra bằng cửa Hữu để giữ trọn trật tự phong thủy và phép tắc cổ truyền.`,
    category: 'den_mieu',
    tags: ['tam quan', 'cửa giữa', 'thần đạo', 'phong thủy'],
  },
  {
    id: 'faq-5',
    question: 'Phụ nữ trong kỳ kinh nguyệt có được đến Chùa, Đền hay Nhà thờ không?',
    shortAnswer: 'Hoàn toàn ĐƯỢC PHÉP. Đây là sinh lý tự nhiên bình thường, không liên quan đến sự "bất tịnh" trong Phật giáo hiện đại.',
    detailedExplanation: `Quan niệm xưa cho rằng phụ nữ trong kỳ kinh nguyệt là "không sạch sẽ" là hủ tục phong kiến bắt nguồn từ sự thiếu hiểu biết y học:
1. **Góc nhìn Phật giáo**: Đạo Phật đề cao tâm thanh tịnh ("Tâm tịnh thì độ tịnh"). Kinh nguyệt là chu kỳ sinh học tự nhiên duy trì sự sống của con người, không phải là tội lỗi hay điều nhơ bẩn. Đức Phật từ bi thương yêu bình đẳng tất cả chúng sinh.
2. **Góc nhìn Kitô giáo**: Nhà thờ Công giáo không hề có bất kỳ cấm đoán nào đối với phụ nữ trong chu kỳ sinh lý.
3. **Lời khuyên thực tế**: Chỉ cần giữ vệ sinh thân thể sạch sẽ, lựa chọn trang phục thoải mái, kín đáo và tránh vận động leo trèo quá sức nếu cảm thấy mệt mỏi trong người.`,
    category: 'chua',
    tags: ['phụ nữ', 'sinh lý', 'bình đẳng', 'giải mã hiểu lầm'],
  },
  {
    id: 'faq-6',
    question: 'Người ngoại đạo khi đến thăm Nhà thờ Công giáo cần lưu ý điều gì nhất?',
    shortAnswer: 'Tôn trọng giờ cử hành phụng vụ, không bước lên Cung Thánh và không nhận Bánh Thánh nếu chưa rửa tội.',
    detailedExplanation: `Khi du khách không theo đạo Công giáo ghé thăm các nhà thờ:
1. **Trang phục**: Quần dài/váy quá gối, áo có tay kín đáo, bỏ nón mũ trước khi vào lòng thánh đường.
2. **Khu vực Cung Thánh**: Tuyệt đối không bước lên bục Cung Thánh (nơi đặt Bàn thờ và Nhà Tạm).
3. **Nghi thức Rước Lễ**: Trong giờ lễ, khi Linh mục chia Bánh Thánh (Mình Thánh Chúa), chỉ người Công giáo đã được rửa tội mới lên nhận. Du khách ngồi yên tại chỗ quan sát trang nghiêm.
4. **Giữ trật tự**: Không nói chuyện ồn ào, không dẫm giày bẩn lên bệ quỳ gối dưới chân ghế.`,
    category: 'nha_tho',
    tags: ['nhà thờ', 'công giáo', 'du khách', 'rước lễ'],
  },
];
