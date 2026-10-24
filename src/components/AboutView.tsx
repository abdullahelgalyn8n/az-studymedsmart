import React, { useState } from 'react';
import {
  PageRoute,
  TRUST_CARDS,
  ABOUT_VALUES,
  FAQ_ITEMS,
} from '../data/platformData';
import {
  Stethoscope,
  Plus,
  Minus,
  BookOpen,
  HeartPulse,
  Smile,
  Award,
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const renderFaqIcon = (iconName: string) => {
    switch (iconName) {
      case 'book':
        return <BookOpen className="w-4 h-4 text-[#0d3b66]" />;
      case 'heart':
        return <HeartPulse className="w-4 h-4 text-[#0d3b66]" />;
      case 'smile':
        return <Smile className="w-4 h-4 text-[#0d3b66]" />;
      case 'award':
        return <Award className="w-4 h-4 text-[#0d3b66]" />;
      default:
        return <Stethoscope className="w-4 h-4 text-[#0d3b66]" />;
    }
  };

  return (
    <div className="w-full py-10 space-y-16">
      {/* Top Hero Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-[#0d3b66] mb-3">
          منصة د/عمرو البركي و د/حسام عيسى
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-center flex flex-col items-center space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-[31px] xl:text-[34px] font-bold text-slate-900 tracking-tight leading-snug lg:whitespace-nowrap">
              منصة د/عمرو البركي و د/حسام عيسى
            </h1>

            <div className="w-full max-w-xs flex items-center justify-center gap-3">
              <div className="h-[1.5px] flex-1 bg-slate-800" />
              <Stethoscope className="w-5 h-5 text-slate-900" />
              <div className="h-[1.5px] flex-1 bg-slate-800" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
              هدفنا هو واحد ازاى نخليك تضمن الامتياز باذن الله في كليتك الطبية (طب صيدلة تمريض علاج طبيعي اسنان علوم) وتفهم اساسيات كل المواد وتتعلم كل المهارات وتعرف تخطط مستقبلك صح واسلوب الشرح والفيديوهات هيوصلك للحظة (كتير شايف انها مستحيلة) انك تحب المواد اللي بتدرسها لانك هتكون وصلت لاعلى درجة من الفهم♥
            </p>

            <button
              type="button"
              onClick={() => {
                onNavigate('profile');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-10 py-3.5 rounded-xl bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-base shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              انشئ حسابك الآن !
            </button>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="max-w-lg w-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src="/images/about-doctors.jpg"
                alt="د/عمرو البركي ود/حسام عيسى - من نحن"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards ("رسالتنا" & "رؤيتنا") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/images/mission.jpg"
              alt="رسالتنا"
              referrerPolicy="no-referrer"
              className="w-36 h-36 rounded-xl object-cover shrink-0 shadow-xs"
            />
            <div className="text-right space-y-2">
              <h2 className="text-2xl font-extrabold text-[#0d3b66]">رسالتنا</h2>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                تمكين طلاب الكليات الطبية من الوصول إلى أعلى مستويات التميز الأكاديمي والمهني من خلال تقديم محتوى تعليمي مبسط، شامل، وعملي، يعتمد على الخبرة الواقعية لأطباء تفوقوا بامتياز، ويجمع بين الفهم العميق، المهارات الطبية، والتخطيط للمستقبل منذ اليوم الأول.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/images/vision.jpg"
              alt="رؤيتنا"
              referrerPolicy="no-referrer"
              className="w-36 h-36 rounded-xl object-cover shrink-0 shadow-xs"
            />
            <div className="text-right space-y-2">
              <h2 className="text-2xl font-extrabold text-[#0d3b66]">رؤيتنا</h2>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                أن نصبح المنصة التعليمية الأولى لطلاب الكليات الطبية في العالم العربي، حيث يكون الامتياز في الدراسة، والثقة في الفهم، والتميّز في المهارات، هو القاعدة لا الاستثناء، وأن نُحدث تحولًا حقيقيًا في نظرة الطالب للمذاكرة والدراسة الطبية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#d9f3ef] rounded-3xl px-6 py-14 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            🩺 لماذا تثق بـ{' '}
            <span className="text-[#1f9d8b] underline decoration-[#1f9d8b] decoration-4 underline-offset-8">
              منصة د/عمرو البركي ود/حسام عيسى؟
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 shadow-xs flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#e6f7f4] flex items-center justify-center mb-4 p-3.5">
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values ("قيمنا") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">قيمنا</h2>
        <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto mb-10">
          نحن نؤمن أن نجاحنا يبدأ من داخلنا، لذلك نتمسك بمجموعة من القيم الأساسية التي توجه جميع أعمالنا وتحدد أسلوب تعاملنا مع طلابنا وشركائنا:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ABOUT_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-right flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold text-sky-600 block mb-2 tabular-nums">
                  0{idx + 1}.
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Interactive Accordion Section ("الأسئلة الشائعة (FAQ)") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/70">
          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/images/faq-pills.png"
              alt="الأسئلة الشائعة"
              referrerPolicy="no-referrer"
              className="w-64 sm:w-80 h-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="lg:col-span-7 text-right space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              الأسئلة الشائعة (FAQ)
            </h2>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        {renderFaqIcon(faq.iconName)}
                        <span>{faq.question}</span>
                      </span>
                      <span className="text-slate-500 shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
