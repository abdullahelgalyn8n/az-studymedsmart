import React, { useState } from 'react';
import { PageRoute } from '../data/platformData';
import { Send, MessageCircle, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [chatOpen, setChatOpen] = useState(false);

  const footerLinks: { label: string; route: PageRoute }[] = [
    { label: 'الرئيسية', route: 'home' },
    { label: 'نبذة عننا', route: 'about' },
    { label: 'خدماتنا', route: 'services' },
    { label: 'الكورسات', route: 'courses' },
    { label: 'تواصل معنا', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#050b24] text-white pt-12 pb-10 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Navigation Links Row */}
          <div className="flex flex-wrap items-center justify-start gap-8 md:gap-14 pb-8 border-b border-slate-700/60">
            {footerLinks.map((item) => (
              <button
                key={item.route}
                type="button"
                onClick={() => handleLinkClick(item.route)}
                className="text-sm md:text-base font-semibold text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bottom Copyright & Social Icons Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 font-medium text-center sm:text-right">
              <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">جميع الحقوق محفوظة. A.Z Agency 2026 ©</a>
            </p>

            <div className="flex items-center gap-3">
              <a
                href="http://t.me/studymedsmart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Footer"
                className="w-8 h-8 rounded-full bg-white text-[#0ea5e9] hover:bg-sky-50 flex items-center justify-center transition-transform hover:scale-105"
              >
                <Send className="w-4 h-4 -rotate-12" />
              </a>
              <a
                href="https://wa.me/201060825804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Footer"
                className="w-8 h-8 rounded-full bg-white text-[#25d366] hover:bg-emerald-50 flex items-center justify-center transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom-Right Chaty Contact Widget matching studymedsmart.com */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3" dir="ltr">
        {chatOpen && (
          <div
            dir="rtl"
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 text-right animate-in fade-in slide-in-from-bottom-2 duration-150"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">
                تواصل مع فريق د/عمرو ود/حسام
              </span>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="إغلاق نافذة التواصل"
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/201060825804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-sm transition-colors"
              >
                <span>تواصل عبر واتساب</span>
                <span className="w-7 h-7 rounded-full bg-[#25d366] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </span>
              </a>
              <a
                href="https://telegram.me/studymedsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 font-bold text-sm transition-colors"
              >
                <span>تواصل عبر تليجرام</span>
                <span className="w-7 h-7 rounded-full bg-[#2aabee] text-white flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 -rotate-12" />
                </span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setChatOpen(false);
                  handleLinkClick('contact');
                }}
                className="w-full text-center py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                أو اترك رسالة مباشرة عبر الموقع ←
              </button>
            </div>
          </div>
        )}

        <div
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-white text-slate-800 px-3.5 py-1.5 rounded-lg shadow-md border border-slate-100 text-xs font-medium cursor-pointer select-none hover:bg-slate-50"
        >
          Contact us
        </div>
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open chaty"
          className="w-12 h-12 rounded-full bg-[#9b82cf] hover:bg-[#886cc4] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
        >
          {chatOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-white" />
          )}
        </button>
      </div>
    </>
  );
};
