import React, { useState } from 'react';
import {
  PageRoute,
  COURSES_DATA,
  EXCELLENCE_PILLARS,
  TRUST_CARDS,
  SERVICE_PILLARS,
} from '../data/platformData';
import { Stethoscope, Play, ArrowLeft, X, CheckCircle2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const featuredCourse = COURSES_DATA[0];

  const handleGoToCourses = () => {
    onNavigate('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToCourseDetail = () => {
    onNavigate('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* SECTION 1: Hero Split Section matching studymedsmart.com */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right Column in RTL (DOM first): Platform Title, Divider, Paragraph & CTA */}
          <div className="lg:col-span-6 text-center flex flex-col items-center justify-center px-2 sm:px-6 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-[31px] xl:text-[34px] font-bold text-slate-900 tracking-tight leading-snug lg:whitespace-nowrap">
              منصة د/عمرو البركي و د/حسام عيسى
            </h1>

            {/* Stethoscope Ornamental Divider */}
            <div className="w-full max-w-xs flex items-center justify-center gap-3 my-4">
              <div className="h-[1.5px] flex-1 bg-slate-800" />
              <Stethoscope className="w-5 h-5 text-[#050b24] shrink-0" />
              <div className="h-[1.5px] flex-1 bg-slate-800" />
            </div>

            <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed max-w-xl mb-8">
              هدفنا هو واحد ازاى نخليك تضمن الامتياز باذن الله في كليتك الطبية (طب صيدلة تمريض علاج طبيعي اسنان علوم طب بيطري والمعاهد الطبية) وتفهم اساسيات كل المواد وتتعلم كل المهارات وتعرف تخطط مستقبلك صح واسلوب الشرح والفيديوهات هيوصلك للحظة (كتير شايف انها مستحيلة) انك تحب المواد اللي بتدرسها لانك هتكون وصلت لاعلى درجة من الفهم♥
            </p>

            <button
              type="button"
              onClick={handleGoToCourses}
              className="px-12 py-3.5 rounded-lg bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-base shadow-md transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              اشتراك في الكورس
            </button>
          </div>

          {/* Left Column in RTL (DOM second): Portrait of Dr. Amr & Dr. Hossam */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden bg-slate-50 shadow-xs">
              <img
                src="/images/hero-doctors.jpg"
                alt="د/عمرو البركي و د/حسام عيسى"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Course Card ("الكورسات") */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          الكورسات
        </h2>

        {/* Wide Stethoscope Divider */}
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-3 mt-4 mb-12">
          <div className="h-[1px] flex-1 bg-slate-800" />
          <Stethoscope className="w-5 h-5 text-[#050b24] shrink-0" />
          <div className="h-[1px] flex-1 bg-slate-800" />
        </div>

        {/* Centered Dark Navy Vertical Course Showcase Card */}
        <div className="max-w-[390px] mx-auto bg-[#060926] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 text-right flex flex-col">
          {/* Course Top Thumbnail with Play Button Overlay */}
          <div className="relative group overflow-hidden bg-slate-900">
            <img
              src={featuredCourse.bannerImage}
              alt={featuredCourse.shortTitle}
              referrerPolicy="no-referrer"
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                aria-label="تشغيل فيديو مقدمة الكورس"
                className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-xs border border-white/60 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </button>
            </div>
          </div>

          {/* Course Card Body */}
          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-center text-[#5c7cfa] mb-6">
                {featuredCourse.shortTitle}
              </h3>

              <div className="space-y-4 text-xs sm:text-[13.5px] text-slate-200 leading-relaxed">
                {featuredCourse.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                    <p className="flex-1 font-medium text-slate-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleGoToCourseDetail}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-l from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <span>سجل الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stethoscope Divider */}
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-3 mt-12">
          <div className="h-[1px] flex-1 bg-slate-800" />
          <Stethoscope className="w-5 h-5 text-[#050b24] shrink-0" />
          <div className="h-[1px] flex-1 bg-slate-800" />
        </div>
      </section>

      {/* SECTION 3: "نوصلك للامتياز بإذن الله في كليتك الطبية" (4 Light Blue Pillar Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#eff7fb] rounded-2xl px-6 py-12 sm:px-10 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#163a5f] mb-10">
            نوصلك للامتياز بإذن الله في كليتك الطبية
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXCELLENCE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 shadow-xs border border-sky-100/80 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2b9eb3] to-[#44b883] text-white flex items-center justify-center text-3xl mb-5 shadow-xs">
                  <span role="img" aria-label={pillar.text}>
                    {pillar.emoji}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#1e293b] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Dark Navy Smart Search Banner */}
      <section className="w-full bg-[#111936] text-white py-16 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Right side in RTL: Heading, Subtitle, Yellow CTA Button */}
            <div className="lg:col-span-7 text-right space-y-6 order-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d7dfa] leading-relaxed">
                ابدأ رحلتك التعليمية مع كورسات متنوعة تلبي اهتماماتك وتدعم أهدافك.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-2xl">
                وفرنا عليك وقت ومجهود! دلوقتي تقدر تلاقي الكورس اللي يناسبك بسهولة من خلال محرك البحث الذكي على منصتنا. جربه بنفسك وابدأ رحلتك التعليمية بسرعة! 🚀
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleGoToCourses}
                  className="px-10 py-3.5 rounded-xl bg-[#fce181] hover:bg-[#fadd6e] text-slate-950 font-extrabold text-sm sm:text-base shadow-md transition-transform hover:scale-105 cursor-pointer"
                >
                  تصفح الكورسات
                </button>
              </div>
            </div>

            {/* Left side in RTL: Custom SVG Vector Illustration matching the Doctor at Computer Monitor */}
            <div className="lg:col-span-5 order-2 flex justify-center">
              <div className="w-full max-w-md">
                <svg
                  viewBox="0 0 500 380"
                  className="w-full h-auto drop-shadow-xl"
                  role="img"
                  aria-label="رسم توضيحي للتعليم الطبي الذكي"
                >
                  {/* Computer Monitor Base & Stand */}
                  <rect x="190" y="320" width="120" height="16" rx="6" fill="#475569" />
                  <path d="M225 280 L275 280 L285 320 L215 320 Z" fill="#64748b" />
                  <rect x="90" y="334" width="320" height="6" rx="3" fill="#334155" />

                  {/* Monitor Outer Frame */}
                  <rect
                    x="105"
                    y="85"
                    width="290"
                    height="205"
                    rx="16"
                    fill="#93c5fd"
                    stroke="#60a5fa"
                    strokeWidth="6"
                  />
                  <rect x="118" y="98" width="264" height="178" rx="10" fill="#dbeafe" />

                  {/* Connection Dashed Lines */}
                  <line
                    x1="150"
                    y1="150"
                    x2="95"
                    y2="120"
                    stroke="#1e3a8a"
                    strokeWidth="2.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="150"
                    y1="165"
                    x2="90"
                    y2="205"
                    stroke="#1e3a8a"
                    strokeWidth="2.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="155"
                    y1="180"
                    x2="145"
                    y2="250"
                    stroke="#1e3a8a"
                    strokeWidth="2.5"
                    strokeDasharray="5,5"
                  />
                  <circle cx="152" cy="162" r="12" fill="#ffffff" stroke="#1e3a8a" strokeWidth="4" />

                  {/* Doctor Character Inside Monitor */}
                  {/* Hair */}
                  <path
                    d="M235 80 C210 80 205 115 215 135 C225 145 275 145 285 135 C295 115 290 80 265 80 Z"
                    fill="#0f172a"
                  />
                  {/* Head */}
                  <ellipse cx="250" cy="112" rx="22" ry="26" fill="#fbd38d" />
                  {/* Head Mirror Band */}
                  <path d="M228 100 Q250 92 272 100" stroke="#1e293b" strokeWidth="4" fill="none" />
                  <circle cx="268" cy="94" r="10" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
                  {/* White Lab Coat */}
                  <path
                    d="M195 276 L205 155 C205 145 225 140 250 140 C275 140 295 145 295 155 L305 276 Z"
                    fill="#ffffff"
                  />
                  {/* Inner Scrubs V-neck */}
                  <polygon points="238,140 262,140 250,180" fill="#3b82f6" />
                  {/* Clipboard in Doctor's Hand */}
                  <rect
                    x="265"
                    y="195"
                    width="52"
                    height="65"
                    rx="6"
                    transform="rotate(18 290 225)"
                    fill="#3b82f6"
                  />

                  {/* Student Character Standing on Right */}
                  <circle cx="385" cy="175" r="16" fill="#0f172a" />
                  <circle cx="382" cy="180" r="13" fill="#fbd38d" />
                  <path
                    d="M362 255 L368 202 C370 195 398 195 400 202 L408 255 Z"
                    fill="#fb923c"
                  />
                  <path d="M368 255 L373 332 L383 332 L385 265 L389 332 L399 332 L402 255 Z" fill="#1e293b" />

                  {/* Floating Medical Cards on Left */}
                  {/* Card 1: ECG Heartbeat */}
                  <rect x="115" y="45" width="76" height="50" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
                  <polyline
                    points="122,72 135,72 140,56 146,84 152,65 158,72 168,72"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M175 65 C172 60 166 63 175 73 C184 63 178 60 175 65 Z"
                    fill="#ea580c"
                  />

                  {/* Card 2: Stethoscope */}
                  <rect x="28" y="88" width="68" height="54" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
                  <circle cx="62" cy="115" r="16" fill="none" stroke="#ea580c" strokeWidth="3" />
                  <path d="M55 110 L69 110 M62 103 L62 117" stroke="#ea580c" strokeWidth="2.5" />

                  {/* Card 3: Microscope */}
                  <rect x="28" y="195" width="66" height="54" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
                  <path d="M50 238 L74 238 M62 208 L62 238 M55 222 L69 222" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />

                  {/* Card 4: Medical Folder */}
                  <rect x="115" y="245" width="68" height="48" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="2" />
                  <rect x="132" y="257" width="34" height="24" rx="3" fill="#fb923c" />
                  <path d="M145 269 L153 269 M149 265 L149 273" stroke="#ffffff" strokeWidth="2.5" />

                  {/* Card 5: Smartphone Schedule */}
                  <rect x="42" y="255" width="54" height="86" rx="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
                  <rect x="48" y="267" width="42" height="62" rx="4" fill="#ffffff" />
                  <line x1="53" y1="280" x2="85" y2="280" stroke="#fb923c" strokeWidth="3" />
                  <line x1="53" y1="292" x2="85" y2="292" stroke="#cbd5e1" strokeWidth="3" />
                  <line x1="53" y1="304" x2="85" y2="304" stroke="#cbd5e1" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: "لماذا تثق بـ منصة د/عمرو البركي ود/حسام عيسى؟" (Mint Container + 4 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#d9f3ef] rounded-3xl px-6 py-14 sm:px-10 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 flex flex-wrap items-center justify-center gap-2">
            <span>🩺 لماذا تثق بـ</span>
            <span className="text-[#1f9d8b] underline decoration-[#1f9d8b] decoration-4 underline-offset-8">
              منصة د/عمرو البركي ود/حسام عيسى؟
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-7 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-[#e6f7f4] flex items-center justify-center mb-5 p-4">
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 object-contain"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
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

      {/* SECTION 6: Bottom Dark Navy 3-Card Feature Strip */}
      <section className="w-full bg-[#060b26] py-14 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PILLARS.map((item) => (
              <div
                key={item.id}
                className="bg-[#121936] border border-slate-700/70 rounded-2xl p-7 flex flex-col items-center text-center shadow-lg"
              >
                {/* Circle Icon with Golden Orbit Dots */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-[#eab308] bg-[#1a2242] flex items-center justify-center text-2xl shadow-md">
                    <span role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                  </div>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <span className="absolute top-1 -left-2.5 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <span className="absolute bottom-1 -left-2.5 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <span className="absolute top-1/2 -translate-y-1/2 -left-4 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                </div>

                <div className="w-full py-3 px-5 rounded-xl bg-[#111833] border border-slate-700/80 text-[#facc15] font-extrabold text-base shadow-inner">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Intro Preview Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#0b132b] border border-slate-700 text-white rounded-2xl max-w-xl w-full p-6 shadow-2xl text-right">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <h3 id="video-modal-title" className="text-lg font-extrabold text-cyan-400">
                مقدمة كورس التأهيل للكليات الطبية (64 محاضرة)
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                aria-label="إغلاق المعاينة"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4 mb-6">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>معاينة مجانية متاحة لأول محاضرات التأسيس والـ CPR</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                يشمل الكورس 7 فروع متكاملة: المصطلحات الطبية، أجهزة الجسم (Systems)، الإسعافات الأولية والمهارات الإكلينيكية، تأسيس المواد الأكاديمية (Anatomy, Physiology, Biochemistry, Histology, Immunology, Genetics)، أسرار المذاكرة، وبودكاست الكليات الطبية.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-bold cursor-pointer"
              >
                إغلاق
              </button>
              <button
                type="button"
                onClick={() => {
                  setVideoModalOpen(false);
                  handleGoToCourseDetail();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-l from-[#3b82f6] to-[#8b5cf6] text-white text-sm font-extrabold cursor-pointer"
              >
                انتقل لصفحة الكورس والمنهاج الكامل ←
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
