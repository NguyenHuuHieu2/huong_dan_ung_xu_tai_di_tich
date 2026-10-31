export type SiteCategoryKey = 'chua' | 'den_mieu' | 'dinh_lang' | 'nha_tho' | 'di_tich_lich_su';

export interface RuleItem {
  title: string;
  desc: string;
  importance: 'critical' | 'standard' | 'cultural_tip';
}

export interface SiteCategory {
  id: SiteCategoryKey;
  name: string;
  tagline: string;
  description: string;
  significance: string; // Ý nghĩa tâm linh / lịch sử
  image: string;
  dressCode: {
    required: string[];
    prohibited: string[];
    quickFix: string;
  };
  properEtiquette: RuleItem[]; // Hành vi phù hợp (Do's)
  strictProhibitions: RuleItem[]; // Điều cấm / tối kỵ (Don'ts)
  entranceRule: {
    doorway: string; // Quy tắc vào cửa (Tả nhập, Hữu xuất, tránh cửa giữa)
    threshold: string; // Quy tắc bước qua bậu cửa / ngạch cửa
  };
  incenseAndOfferings: {
    allowed: string;
    forbidden: string;
    note: string;
  };
  photographyRules: string;
  famousExamples: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedExplanation: string;
  category: SiteCategoryKey | 'general';
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface HeritageSiteItem {
  id: string;
  name: string;
  location: string;
  category: SiteCategoryKey;
  highlights: string;
  specialRules: string[];
  openHours?: string;
}

export interface OutfitOption {
  id: string;
  label: string;
  part: 'top' | 'bottom' | 'footwear' | 'accessory';
  status: 'safe' | 'warning' | 'forbidden';
  feedback: string;
}

export interface DiSanRecord {
  'tên chính thức': string;
  'tên gọi khác': string[] | string;
  'loại hình': string;
  'địa phương': string;
  'mô tả đặc trưng': string;
  'nghệ nhân tiêu biểu': string[] | string;
  'tình trạng ghi danh': string;
  'nguồn tư liệu': string;
}

