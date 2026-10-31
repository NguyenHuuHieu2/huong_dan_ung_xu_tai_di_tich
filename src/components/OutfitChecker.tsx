import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Shirt, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';
import { OUTFIT_OPTIONS } from '../data/quizData';
import { OutfitOption } from '../types';

export const OutfitChecker: React.FC = () => {
  // Default selection: safe top and bottom
  const [selectedTop, setSelectedTop] = useState<string>('top-shirt');
  const [selectedBottom, setSelectedBottom] = useState<string>('bot-pants');
  const [selectedFootwear, setSelectedFootwear] = useState<string>('foot-flat');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetToDefault = () => {
    setSelectedTop('top-shirt');
    setSelectedBottom('bot-pants');
    setSelectedFootwear('foot-flat');
    setSelectedAccessories([]);
  };

  const topItem = OUTFIT_OPTIONS.find((o) => o.id === selectedTop);
  const bottomItem = OUTFIT_OPTIONS.find((o) => o.id === selectedBottom);
  const footwearItem = OUTFIT_OPTIONS.find((o) => o.id === selectedFootwear);
  const accessoryItems = OUTFIT_OPTIONS.filter((o) => selectedAccessories.includes(o.id));

  // Calculate overall score & status
  const allSelected: OutfitOption[] = [
    ...(topItem ? [topItem] : []),
    ...(bottomItem ? [bottomItem] : []),
    ...(footwearItem ? [footwearItem] : []),
    ...accessoryItems,
  ];

  const hasForbidden = allSelected.some((item) => item.status === 'forbidden');
  const hasWarning = allSelected.some((item) => item.status === 'warning');
  const hasScarf = selectedAccessories.includes('acc-scarf');

  let resultStatus: 'perfect' | 'warning' | 'forbidden' = 'perfect';
  let resultTitle = 'Trang phục chuẩn mực & tôn nghiêm (Đạt 100%)';
  let resultMessage =
    'Bạn đã sẵn sàng để viếng thăm Chùa, Đền, Đình, Nhà thờ và mọi khu di tích lịch sử tại Việt Nam với diện mạo trang trọng, lịch thiệp.';

  if (hasForbidden) {
    if (hasScarf) {
      resultStatus = 'warning';
      resultTitle = 'Cần quấn khăn choàng phủ kín trước khi bước vào';
      resultMessage =
        'Trang phục bên trong chưa đạt chuẩn (hở vai hoặc ngắn trên gối), nhưng nhờ có khăn choàng dự phòng, bạn có thể quấn kín che vai và phủ qua đầu gối trước khi bước vào gian thờ.';
    } else {
      resultStatus = 'forbidden';
      resultTitle = 'Chưa đạt chuẩn - Nguy cơ bị từ chối vào gian thờ';
      resultMessage =
        'Trang phục của bạn để lộ vai, ngực hoặc đùi. Ban quản lý di tích hoặc nhà chùa sẽ nhắc nhở hoặc từ chối cho vào Chính điện Tam Bảo / Thánh đường.';
    }
  } else if (hasWarning) {
    resultStatus = 'warning';
    resultTitle = 'Phù hợp phần lớn, nhưng cần lưu ý nhỏ';
    resultMessage =
      'Quần áo của bạn đã đủ kín đáo, tuy nhiên hãy nhớ tháo mũ nón/kính râm và đi lại khẽ khàng để không làm ảnh hưởng đến không gian thanh tịnh.';
  }

  return (
    <section id="outfit-checker" className="py-12 sm:py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Công Cụ Tương Tác Nhanh
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-2">
            Kiểm Tra Độ Phù Hợp Trang Phục Đi Lễ
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            Chọn các món đồ bạn dự định mặc để kiểm tra xem có đáp ứng quy chuẩn tôn nghiêm tại các di tích và nơi thờ tự Việt Nam hay không.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                <Shirt className="w-4 h-4 text-stone-700" />
                <span>Chọn Trang Phục Dự Định Mặc</span>
              </span>
              <button
                onClick={resetToDefault}
                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Đặt lại</span>
              </button>
            </div>

            {/* Part 1: Top */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                1. Áo / Phần Thân Trên
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {OUTFIT_OPTIONS.filter((o) => o.part === 'top').map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedTop(opt.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      selectedTop === opt.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Part 2: Bottom */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                2. Quần / Váy / Phần Thân Dưới
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {OUTFIT_OPTIONS.filter((o) => o.part === 'bottom').map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedBottom(opt.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      selectedBottom === opt.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Part 3: Footwear */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                3. Giày Dép
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {OUTFIT_OPTIONS.filter((o) => o.part === 'footwear').map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFootwear(opt.id)}
                    className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                      selectedFootwear === opt.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Part 4: Accessories */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                4. Phụ Kiện Kèm Theo (Chọn nếu có)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {OUTFIT_OPTIONS.filter((o) => o.part === 'accessory').map((opt) => {
                  const isChecked = selectedAccessories.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleAccessory(opt.id)}
                      className={`text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-amber-700 bg-amber-50 text-amber-950 font-medium'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                          isChecked
                            ? 'bg-amber-700 border-amber-700 text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="pb-3 border-b border-stone-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                Kết Quả Đánh Giá Tôn Nghiêm
              </span>
              <div className="flex items-center gap-2.5 mt-2">
                {resultStatus === 'perfect' && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                )}
                {resultStatus === 'warning' && (
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                )}
                {resultStatus === 'forbidden' && (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                )}
                <h3
                  className={`font-serif font-bold text-base sm:text-lg ${
                    resultStatus === 'perfect'
                      ? 'text-emerald-950'
                      : resultStatus === 'warning'
                      ? 'text-amber-950'
                      : 'text-rose-950'
                  }`}
                >
                  {resultTitle}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
              {resultMessage}
            </p>

            {/* Itemized Feedback List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                Chi tiết từng món đồ:
              </div>
              {allSelected.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    item.status === 'safe'
                      ? 'bg-emerald-50/60 border-emerald-200/70 text-emerald-900'
                      : item.status === 'warning'
                      ? 'bg-amber-50/60 border-amber-200/70 text-amber-900'
                      : 'bg-rose-50/60 border-rose-200/70 text-rose-900'
                  }`}
                >
                  <div className="font-semibold mb-0.5">{item.label}</div>
                  <div>{item.feedback}</div>
                </div>
              ))}
            </div>

            {/* Practical Advice Banner */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs text-stone-600 space-y-1.5">
              <span className="font-semibold text-stone-900 block">
                Quy ước văn hóa cần nhớ:
              </span>
              <p>• Áo có tay che kín vai và ngực.</p>
              <p>• Quần hoặc váy phủ qua đầu gối khi đứng và khi quỳ lễ.</p>
              <p>• Luôn tháo mũ nón, kính đen trước khi vào trước ban thờ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
