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
];
