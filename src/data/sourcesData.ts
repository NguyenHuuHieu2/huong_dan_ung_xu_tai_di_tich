export interface LegalDocumentItem {
  id: string;
  code: string;
  title: string;
  issuer: string;
  year: string;
  summary: string;
  keyArticles: {
    article: string;
    content: string;
    penaltyOrNote?: string;
  }[];
  downloadOrRef: string;
}

export interface ResearchMaterialItem {
  id: string;
  title: string;
  authorOrOrg: string;
  type: 'giáo trình' | 'cẩm nang' | 'nghiên cứu' | 'hướng dẫn';
  summary: string;
  practicalValue: string;
}

export const LEGAL_DOCUMENTS: LegalDocumentItem[] = [
  {
    id: 'law-heritage',
    code: 'Luật số 28/2001/QH10 & Luật số 32/2009/QH12',
    title: 'Luật Di sản Văn hóa Việt Nam',
    issuer: 'Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    year: '2001 (sửa đổi, bổ sung 2009)',
    summary: 'Đạo luật nền tảng cao nhất quy định về hoạt động bảo vệ và phát huy giá trị di sản văn hóa phi vật thể và di sản văn hóa vật thể tại Việt Nam.',
    keyArticles: [
      {
        article: 'Điều 13 (Các hành vi bị nghiêm cấm)',
        content: 'Nghiêm cấm chiếm đoạt, làm sai lệch di tích lịch sử - văn hóa, danh lam thắng cảnh; hủy hoại hoặc gây nguy cơ hủy hoại di sản văn hóa; đào bới trái phép địa điểm khảo cổ; lấn chiếm đất đai thuộc di tích.',
        penaltyOrNote: 'Tùy theo tính chất có thể bị xử lý hành chính hoặc truy cứu trách nhiệm hình sự.',
      },
      {
        article: 'Điều 14 (Quyền và nghĩa vụ của tổ chức, cá nhân)',
        content: 'Mọi công dân có nghĩa vụ tôn trọng, bảo vệ và giữ gìn di sản văn hóa; ngăn chặn hoặc thông báo kịp thời cho cơ quan chức năng những hành vi phá hoại, chiếm đoạt, sử dụng trái phép di sản văn hóa.',
        penaltyOrNote: 'Nghĩa vụ bắt buộc của mọi người dân và du khách khi đến di tích.',
      },
    ],
    downloadOrRef: 'Văn phòng Quốc hội ban hành',
  },
  {
    id: 'decree-38',
    code: 'Nghị định số 38/2021/NĐ-CP',
    title: 'Quy định xử phạt vi phạm hành chính trong lĩnh vực văn hóa và quảng cáo',
    issuer: 'Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    year: '2021 (sửa đổi bởi Nghị định 128/2022/NĐ-CP)',
    summary: 'Căn cứ pháp lý trực tiếp quy định mức phạt tiền đối với các hành vi vi phạm nếp sống văn minh tại lễ hội, di tích, viết vẽ bậy, sờ hiện vật, thắp hương sai quy định.',
    keyArticles: [
      {
        article: 'Điều 14 (Vi phạm quy định về tổ chức lễ hội)',
        content: 'Phạt tiền từ 200.000đ đến 500.000đ đối với hành vi thắp hương hoặc đốt vàng mã không đúng nơi quy định; nói tục, chửi thề, xúc phạm tâm linh gây ảnh hưởng đến không khí trang nghiêm của lễ hội.',
        penaltyOrNote: 'Mức phạt áp dụng tại mọi di tích và lễ hội toàn quốc.',
      },
      {
        article: 'Điều 14 Khoản 2 (Mê tín dị đoan & đổi tiền chênh lệch)',
        content: 'Phạt tiền từ 3.000.000đ đến 5.000.000đ đối với hành vi lợi dụng hoạt động lên đồng, xem bói, gọi hồn để trục lợi; phạt từ 200.000đ đến 500.000đ đối với hành vi đổi tiền lẻ hưởng phí chênh lệch tại di tích.',
        penaltyOrNote: 'Nghiêm cấm tại khu vực cổng đền, chùa.',
      },
      {
        article: 'Điều 23 (Vi phạm bảo vệ di tích)',
        content: 'Phạt tiền từ 1.000.000đ đến 3.000.000đ đối với hành vi viết, vẽ, làm bẩn, làm ô uế di tích lịch sử - văn hóa, danh lam thắng cảnh.',
        penaltyOrNote: 'Áp dụng cho hành vi khắc tên lên rùa đá, tường gạch cổ.',
      },
    ],
    downloadOrRef: 'Cổng Thông tin điện tử Chính phủ',
  },
  {
    id: 'tourism-code',
    code: 'Quyết định số 718/QĐ-BVHTTDL',
    title: 'Bộ Quy tắc Ứng xử Văn minh Du lịch',
    issuer: 'Bộ Văn hóa, Thể thao và Du lịch',
    year: '2017',
    summary: 'Bộ quy tắc hướng dẫn chuẩn mực thái độ, hành vi ứng xử của khách du lịch, doanh nghiệp lữ hành và cộng đồng dân cư tại các điểm đến du lịch, di tích văn hóa.',
    keyArticles: [
      {
        article: 'Quy tắc ứng xử tại điểm đến tâm linh',
        content: 'Trang phục chỉnh tề, kín đáo, phù hợp với thuần phong mỹ tục; tuân thủ sự chỉ dẫn của ban quản lý; giữ gìn vệ sinh, không vứt rác bừa bãi; đi nhẹ, nói khẽ, không cười đùa lớn tiếng.',
        penaltyOrNote: 'Chuẩn mực văn hóa du lịch quốc gia.',
      },
    ],
    downloadOrRef: 'Cục Du lịch Quốc gia Việt Nam',
  },
  {
    id: 'sangha-guideline',
    code: 'Thông bạch số 223/TB-HĐTS',
    title: 'Về việc thực hiện nếp sống văn minh tại các tự viện Phật giáo',
    issuer: 'Hội đồng Trị sự Giáo hội Phật giáo Việt Nam',
    year: '2018 - 2024',
    summary: 'Hướng dẫn chính thức gửi toàn thể Tăng Ni, Phật tử và du khách thập phương về việc không đốt vàng mã tại chùa, chỉ thắp 01 nén tâm hương và dâng lễ vật thanh tịnh.',
    keyArticles: [
      {
        article: 'Thực hành nghi lễ văn minh',
        content: 'Khuyên phật tử và du khách chỉ thắp 01 nén hương tại lư đồng lớn ngoài sân; không mang hương cháy vào chính điện; không đốt vàng mã tại các cơ sở tự viện Phật giáo trên toàn quốc.',
        penaltyOrNote: 'Chủ trương chính thức của Giáo hội Phật giáo Việt Nam.',
      },
    ],
    downloadOrRef: 'Văn phòng Trung ương Giáo hội Phật giáo Việt Nam',
  },
  {
    id: 'decree-110',
    code: 'Nghị định số 110/2018/NĐ-CP',
    title: 'Quy định về quản lý và tổ chức lễ hội',
    issuer: 'Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    year: '2018',
    summary: 'Quy định nguyên tắc tổ chức lễ hội, quyền và trách nhiệm của Ban tổ chức, người tham gia lễ hội nhằm bảo đảm an toàn, tiết kiệm và phát huy giá trị văn hóa truyền thống.',
    keyArticles: [
      {
        article: 'Điều 6 (Trách nhiệm của người tham gia lễ hội)',
        content: 'Mặc trang phục lịch sự, phù hợp với thuần phong mỹ tục của dân tộc; không nói tục, chửi thề xúc phạm tâm linh; không chen lấn xô đẩy cướp lộc; thực hiện nếp sống văn minh.',
        penaltyOrNote: 'Quy tắc bắt buộc tại mọi lễ hội truyền thống.',
      },
    ],
    downloadOrRef: 'Cổng Thông tin điện tử Chính phủ',
  },
  {
    id: 'circular-04-btc',
    code: 'Thông tư số 04/2023/TT-BTC',
    title: 'Hướng dẫn quản lý, thu chi tài chính cho công tác tổ chức lễ hội và tiền công đức, tài trợ cho di tích',
    issuer: 'Bộ Tài chính',
    year: '2023',
    summary: 'Quy định rõ ràng về việc tiếp nhận, quản lý hòm công đức, kiểm đếm và sử dụng nguồn tiền công đức, tiền giọt dầu đảm bảo công khai, minh bạch.',
    keyArticles: [
      {
        article: 'Điều 10 (Quản lý tiền công đức, tài trợ)',
        content: 'Tiền công đức phải được bỏ vào hòm công đức hoặc tài khoản của di tích; mở hòm công đức định kỳ có sự giám sát của ban quản lý; không được để tiền vương vãi trên ban thờ.',
        penaltyOrNote: 'Bảo đảm tính minh bạch trong quản lý di tích.',
      },
    ],
    downloadOrRef: 'Bộ Tài chính ban hành',
  },
  {
    id: 'decree-98',
    code: 'Nghị định số 98/2010/NĐ-CP',
    title: 'Quy định chi tiết thi hành một số điều của Luật Di sản văn hóa',
    issuer: 'Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    year: '2010',
    summary: 'Quy định chi tiết về việc khoanh vùng bảo vệ di tích (khu vực bảo vệ I và khu vực bảo vệ II), tu bổ phục hồi di tích và bảo vệ di vật, cổ vật quý hiếm.',
    keyArticles: [
      {
        article: 'Điều 14 (Bảo vệ khu vực I của di tích)',
        content: 'Khu vực bảo vệ I phải được bảo vệ nguyên trạng về mặt bằng và không gian. Mọi hành vi xâm phạm, làm thay đổi cảnh quan di tích đều bị xử lý nghiêm minh.',
        penaltyOrNote: 'Khu vực lõi thiêng liêng nhất của di tích.',
      },
    ],
    downloadOrRef: 'Cổng Thông tin điện tử Chính phủ',
  },
  {
    id: 'unesco-convention-1972',
    code: 'Công ước UNESCO 1972',
    title: 'Công ước về Bảo vệ Di sản Văn hóa và Thiên nhiên Thế giới',
    issuer: 'Tổ chức Giáo dục, Khoa học và Văn hóa của Liên Hợp Quốc (UNESCO)',
    year: '1972 (Việt Nam tham gia năm 1987)',
    summary: 'Công ước quốc tế quy định trách nhiệm của các quốc gia thành viên trong việc bảo vệ, bảo tồn và truyền lại cho các thế hệ tương lai những di sản có giá trị nổi bật toàn cầu.',
    keyArticles: [
      {
        article: 'Điều 4 (Trách nhiệm quốc gia thành viên)',
        content: 'Mỗi quốc gia thành viên công nhận nghĩa vụ bảo đảm việc xác định, bảo vệ, bảo tồn, tôn tạo và truyền lại cho các thế hệ tương lai di sản văn hóa và thiên nhiên.',
        penaltyOrNote: 'Chuẩn mực bảo tồn quốc tế.',
      },
    ],
    downloadOrRef: 'Trung tâm Di sản Thế giới UNESCO',
  },
  {
    id: 'unesco-convention-2003',
    code: 'Công ước UNESCO 2003',
    title: 'Công ước về Bảo vệ Di sản Văn hóa Phi vật thể',
    issuer: 'UNESCO',
    year: '2003 (Việt Nam tham gia năm 2005)',
    summary: 'Khung pháp lý quốc tế về bảo vệ các tập quán, hình thức biểu đạt, tri thức và kỹ năng văn hóa truyền thống của cộng đồng dân cư.',
    keyArticles: [
      {
        article: 'Điều 15 (Sự tham gia của cộng đồng)',
        content: 'Các quốc gia thành viên phải nỗ lực bảo đảm sự tham gia rộng rãi nhất có thể của các cộng đồng, nhóm người và các cá nhân sáng tạo, duy trì di sản.',
        penaltyOrNote: 'Tôn vinh vai trò nghệ nhân và cộng đồng.',
      },
    ],
    downloadOrRef: 'UNESCO Paris',
  },
  {
    id: 'dispatch-pccc-dsvh',
    code: 'Công văn số 1171/BVHTTDL-DSVH',
    title: 'Tăng cường công tác phòng chống cháy nổ và bảo đảm an ninh trật tự tại di tích',
    issuer: 'Bộ Văn hóa, Thể thao và Du lịch',
    year: '2023',
    summary: 'Chỉ đạo toàn bộ các tỉnh, thành phố siết chặt kiểm tra an toàn phòng cháy chữa cháy, bố trí lư hương ngoài trời, không để khách thắp cả bó hương trong di tích gỗ cổ.',
    keyArticles: [
      {
        article: 'Quy tắc an toàn PCCC tại cơ sở tự viện',
        content: 'Di chuyển toàn bộ việc thắp hương ra ngoài sân; tuyệt đối không đốt vàng mã trong gian thờ chính; trang bị bình chữa cháy cầm tay tại các cột đình, chùa.',
        penaltyOrNote: 'Quy chuẩn phòng cháy bắt buộc.',
      },
    ],
    downloadOrRef: 'Cục Di sản Văn hóa ban hành',
  },
];

export const RESEARCH_MATERIALS: ResearchMaterialItem[] = [
  {
    id: 'mat-1',
    title: 'Kiến Trúc Đình Làng Miền Bắc - Không Gian Thiêng & Hội Tụ Cộng Đồng',
    authorOrOrg: 'Viện Bảo tồn Di tích - Bộ VHTTDL',
    type: 'nghiên cứu',
    summary: 'Phân tích cấu trúc Tam quan, Tả vu, Hữu vu, Gian chính điện, Bậu cửa gỗ và hệ thống điêu khắc gỗ dân gian thế kỷ 16-18.',
    practicalValue: 'Giúp hiểu sâu vì sao ngạch cửa đình làng lại cao và quy định bước qua bậu cửa của người xưa.',
  },
  {
    id: 'mat-2',
    title: 'Nghi Lễ & Phong Tục Thờ Cúng Cổ Truyền Của Người Việt',
    authorOrOrg: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam (VICAS)',
    type: 'giáo trình',
    summary: 'Tập hợp các chuẩn mực dâng lễ, khấn vái, xưng hô tại Chùa, Đền Thánh, Miếu Mẫu và Nhà thờ họ.',
    practicalValue: 'Tài liệu chuẩn mực cho cán bộ văn hóa xã phường khi tổ chức và giám sát lễ hội truyền thống.',
  },
  {
    id: 'mat-3',
    title: 'Sổ Tay Nghiệp Vụ Quản Lý Di Tích Cấp Xã, Phường',
    authorOrOrg: 'Sở Văn hóa và Thể thao Hà Nội',
    type: 'cẩm nang',
    summary: 'Quy trình kiểm tra an toàn PCCC, quản lý tiền công đức, bảo quản hiện vật gỗ và xử lý vi phạm trật tự văn minh.',
    practicalValue: 'Cẩm nang thực chiến hàng ngày cho cán bộ văn hóa cơ sở không có chuyên môn sâu về khảo cổ.',
  },
  {
    id: 'mat-4',
    title: 'Hướng Dẫn Giáo Dục Di Sản Trong Nhà Trường Phổ Thông',
    authorOrOrg: 'Bộ Giáo dục & Đào tạo phối hợp Bộ VHTTDL',
    type: 'hướng dẫn',
    summary: 'Phương pháp tổ chức các chuyến đi dã ngoại học tập môn Lịch sử, Giáo dục công dân và viết bài thu hoạch di sản cho học sinh, sinh viên.',
    practicalValue: 'Tài liệu tham khảo cho giáo viên phụ trách đoàn và ban cán sự lớp khi lên kế hoạch tham quan ngoại khóa.',
  },
  {
    id: 'mat-5',
    title: 'Mỹ Thuật Điêu Khắc Cổ Việt Nam Thế Kỷ 16 - 18',
    authorOrOrg: 'Viện Mỹ thuật Quốc gia & NXB Mỹ thuật',
    type: 'nghiên cứu',
    summary: 'Phân tích các đồ án điêu khắc rồng, phượng, cảnh sinh hoạt dân gian (đánh vật, chèo thuyền) trên vì kèo gỗ lim đình làng Bắc Bộ.',
    practicalValue: 'Hiểu giá trị vô giá của thớ gỗ cổ để quán triệt du khách không chạm tay, cào xước hiện vật.',
  },
  {
    id: 'mat-6',
    title: 'Cẩm Nang Thực Hành Nếp Sống Văn Minh Tại Các Cơ Sở Tôn Giáo',
    authorOrOrg: 'Ban Tôn giáo Chính phủ',
    type: 'cẩm nang',
    summary: 'Hướng dẫn chuẩn mực ứng xử khi tham quan chùa Phật giáo, nhà thờ Công giáo, thánh thất Cao Đài và thánh đường Hồi giáo.',
    practicalValue: 'Tài liệu liên tôn giáo giúp khách tham quan không phạm phải điều kiêng kỵ của từng đức tin.',
  },
  {
    id: 'mat-7',
    title: 'Tín Ngưỡng Dân Gian & Không Gian Văn Hóa Nơi Thờ Tự Người Việt',
    authorOrOrg: 'GS.TS Ngô Đức Thịnh - Viện Nghiên cứu Văn hóa',
    type: 'nghiên cứu',
    summary: 'Khảo cứu sâu về Tín ngưỡng thờ Mẫu Tam phủ, Tứ phủ, Thành hoàng làng và tục thờ cúng tổ tiên của người Việt.',
    practicalValue: 'Giải thích bản chất nhân văn của đạo Mẫu và phân biệt rõ giữa tín ngưỡng chân chính và mê tín dị đoan.',
  },
  {
    id: 'mat-8',
    title: 'Giáo Trình Nhập Môn Bảo Tồn Di Sản Văn Hóa Vật Thể & Phi Vật Thể',
    authorOrOrg: 'Trường Đại học Văn hóa Hà Nội',
    type: 'giáo trình',
    summary: 'Kiến thức căn bản về kiểm kê di sản, nhận diện giá trị, lập hồ sơ khoa học và bảo vệ di sản trước nguy cơ biến dạng.',
    practicalValue: 'Giáo trình chuẩn cho cán bộ văn hóa cơ sở bồi dưỡng nghiệp vụ quản lý nhà nước.',
  },
  {
    id: 'mat-9',
    title: 'Kỹ Năng Tiếp Nhận & Hướng Dẫn Du Khách Tại Điểm Di Tích Lịch Sử',
    authorOrOrg: 'Cục Du lịch Quốc gia Việt Nam',
    type: 'hướng dẫn',
    summary: 'Kỹ năng giao tiếp, thái độ ứng xử lịch thiệp, kỹ năng xử lý khiếu nại và nhắc nhở khách vi phạm trang phục một cách văn minh.',
    practicalValue: 'Tài liệu đào tạo đội ngũ tình nguyện viên, bảo vệ và ban khánh tiết tại điểm đến di sản.',
  },
  {
    id: 'mat-10',
    title: 'Sổ Tay Phòng Chống Cháy Nổ & Bảo Vệ Cấu Kiện Gỗ Cổ Tại Di Tích',
    authorOrOrg: 'Cục Cảnh sát PCCC & Viện Bảo tồn Di tích',
    type: 'cẩm nang',
    summary: 'Phương pháp nhận biết nguy cơ chập cháy điện, quản lý tàn nhang, quy trình xử lý khẩn cấp khi xảy ra sự cố cháy tại di tích gỗ.',
    practicalValue: 'Cẩm nang an toàn tính mạng và tài sản di sản quốc gia cho ban quản lý cơ sở.',
  },
];
