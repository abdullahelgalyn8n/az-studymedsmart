import React from 'react';
import { PageRoute, SERVICE_PILLARS, EXCELLENCE_PILLARS } from '../data/platformData';
import { Stethoscope, ArrowLeft } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-12 space-y-16">
      {/* Header Title Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-sm font-bold text-[#0d3b66]">
          منصة د/عمرو البركي و د/حسام عيسى
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          ماذا نقدم
        </h1>
        <div className="w-full max-w-xs mx-auto flex items-center justify-center gap-3 pt-2">
          <div className="h-[1.5px] flex-1 bg-slate-800" />
          <Stethoscope className="w-5 h-5 text-slate-900" />
          <div className="h-[1.5px] flex-1 bg-slate-800" />
        </div>
      </section>

      {/* Dark Navy 3-Card Services Showcase */}
      <section className="w-full bg-[#060b26] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((item) => (
              <div
                key={item.id}
                className="bg-[#121936] border border-slate-700/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl space-y-5"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-[#eab308] bg-[#1a2242] flex items-center justify-center text-2xl shadow-md">
                    <span role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                  </div>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <span className="absolute top-1 -left-2.5 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <span className="absolute bottom-1 -left-2.5 w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                </div>

                <h2 className="w-full py-3 px-5 rounded-xl bg-[#111833] border border-slate-700/80 text-[#facc15] font-extrabold text-lg">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Tracks & Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eff7fb] rounded-3xl p-8 sm:p-12 text-center space-y-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#163a5f]">
            نوصلك للامتياز بإذن الله في كليتك الطبية
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXCELLENCE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 shadow-xs border border-sky-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2b9eb3] to-[#44b883] text-white flex items-center justify-center text-2xl mb-4">
                  <span>{pillar.emoji}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                onNavigate('course-detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-base shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              <span>استكشف كورس التأهيل الطبي الشامل</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
