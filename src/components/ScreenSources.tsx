import React, { useState } from 'react';
import {
  FileText,
  Shield,
  BookOpen,
  Copy,
  Check,
  Scale,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertOctagon,
} from 'lucide-react';
import { LEGAL_DOCUMENTS, RESEARCH_MATERIALS, LegalDocumentItem } from '../data/sourcesData';

export const ScreenSources: React.FC = () => {
  const [activeDocId, setActiveDocId] = useState<string>('law-heritage');
  const [copiedArticle, setCopiedArticle] = useState<string | null>(null);

  const handleCopyCitation = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedArticle(id);
    setTimeout(() => setCopiedArticle(null), 2000);
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 sm:p-7 border border-stone-800 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Cơ Sở Pháp Lý &amp; Tư Liệu Chuẩn</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-50 mb-2">
          Nguồn Tư Liệu &amp; Văn Bản Pháp Quy
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl">
          Hệ thống văn bản pháp luật của Nhà nước, nghị định xử phạt, bộ quy tắc của Bộ Văn hóa, Thể thao &amp; Du lịch cùng các công trình nghiên cứu di sản chính thống.
        </p>
      </div>

      {/* Quick Penalty Highlights Matrix (Table for Grassroots Officers & Students) */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-rose-600" />
          <h2 className="font-serif font-bold text-base text-stone-900">
            Khung Xử Phạt Hành Vi Vi Phạm Tại Di Tích (Nghị định 38/2021/NĐ-CP)
          </h2>
        </div>
        <p className="text-xs text-stone-500 font-light">
          Căn cứ pháp lý giúp cán bộ văn hóa cơ sở nhắc nhở và học sinh ghi nhớ để tránh vi phạm
        </p>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-semibold border-b border-stone-200">
              <tr>
                <th className="p-3">Hành vi vi phạm</th>
                <th className="p-3">Mức xử phạt tiền</th>
                <th className="p-3">Căn cứ điều luật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 font-light">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-medium text-stone-900">
                  Thắp hương, đốt vàng mã sai nơi quy định
                </td>
                <td className="p-3 text-rose-700 font-semibold">200.000đ – 500.000đ</td>
                <td className="p-3 text-stone-500">Điều 14 Khoản 1</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-medium text-stone-900">
                  Nói tục, chửi thề, xúc phạm tâm linh tại di tích
                </td>
                <td className="p-3 text-rose-700 font-semibold">200.000đ – 500.000đ</td>
                <td className="p-3 text-stone-500">Điều 14 Khoản 1</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-medium text-stone-900">
                  Đổi tiền lẻ hưởng chênh lệch phí tại lễ hội
                </td>
                <td className="p-3 text-rose-700 font-semibold">200.000đ – 500.000đ</td>
                <td className="p-3 text-stone-500">Điều 14 Khoản 2</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-medium text-stone-900">
                  Viết, vẽ, làm bẩn, xâm hại di tích, bia đá
                </td>
                <td className="p-3 text-rose-700 font-semibold">1.000.000đ – 3.000.000đ</td>
                <td className="p-3 text-stone-500">Điều 23 Khoản 1</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-medium text-stone-900">
                  Lợi dụng hoạt động tâm linh, mê tín để trục lợi
                </td>
                <td className="p-3 text-rose-700 font-semibold">3.000.000đ – 5.000.000đ</td>
                <td className="p-3 text-stone-500">Điều 14 Khoản 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Legal Documents Accordion */}
      <div className="space-y-3">
        <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-700" />
          <span>Văn Bản Pháp Quy Nền Tảng</span>
        </h2>

        <div className="space-y-3">
          {LEGAL_DOCUMENTS.map((doc) => {
            const isExpanded = activeDocId === doc.id;
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveDocId(isExpanded ? '' : doc.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 hover:bg-stone-50/80 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                      {doc.code} · Năm {doc.year}
                    </div>
                    <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-light">
                      Cơ quan ban hành: {doc.issuer}
                    </p>
                  </div>
                  <div className="p-1 rounded-lg text-stone-500 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-stone-100 text-xs sm:text-sm space-y-4 font-light">
                    <p className="text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                      {doc.summary}
                    </p>

                    <div className="space-y-2.5">
                      <span className="font-bold text-stone-900 text-xs uppercase tracking-wider block">
                        Các điều khoản trọng tâm cần áp dụng:
                      </span>
                      {doc.keyArticles.map((art, idx) => {
                        const artId = `${doc.id}-art-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-stone-900 text-xs">
                                {art.article}
                              </span>
                              <button
                                onClick={() =>
                                  handleCopyCitation(
                                    `${doc.title} - ${art.article}: ${art.content}`,
                                    artId
                                  )
                                }
                                className="text-[11px] text-stone-600 hover:text-stone-900 flex items-center gap-1 px-2 py-0.5 rounded border border-stone-300 bg-white"
                              >
                                {copiedArticle === artId ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-600" />
                                    <span className="text-emerald-700">Đã chép</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Trích dẫn</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <p className="text-stone-700 text-xs leading-relaxed font-light">
                              {art.content}
                            </p>
                            {art.penaltyOrNote && (
                              <div className="text-[11px] text-amber-900 bg-amber-100/60 px-2 py-0.5 rounded font-medium inline-block">
                                Lưu ý: {art.penaltyOrNote}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Materials & Official Field Guides */}
      <div className="space-y-3">
        <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <span>Tài Liệu Nghiên Cứu &amp; Giáo Trình Nghiệp Vụ</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RESEARCH_MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                  <span className="uppercase font-semibold text-amber-800">{mat.type}</span>
                  <span>{mat.authorOrOrg}</span>
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-snug">
                  {mat.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed mt-1.5">
                  {mat.summary}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-stone-700 font-light mt-2">
                <span className="font-semibold text-stone-900 block">Ý nghĩa thực tiễn:</span>
                {mat.practicalValue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
