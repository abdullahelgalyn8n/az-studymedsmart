import React, { useState } from 'react';
import { PageRoute, TICKER_MESSAGES } from '../data/platformData';
import { Send, MessageCircle, Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  cartCount: number;
  isEnrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  cartCount,
  isEnrolled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'الرئيسية', route: 'home' },
    { label: 'نبذة عننا', route: 'about' },
    { label: 'خدماتنا', route: 'services' },
    { label: 'الكورسات', route: 'courses' },
    { label: 'تواصل معنا', route: 'contact' },
    { label: 'حسابي', route: 'profile' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Dark Navy Scrolling Ticker Bar */}
      <div className="bg-[#050826] text-white overflow-hidden py-2.5 border-b border-[#04c2c9]/40 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6 text-xs md:text-sm font-semibold whitespace-nowrap overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-8 animate-ticker-rtl">
            {TICKER_MESSAGES.map((msg, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 text-cyan-300">
                <span>{msg}</span>
                <span className="text-teal-400">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar matching studymedsmart.com */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 border-b border-slate-100">
        {/* Right side in RTL: Primary Navigation Links */}
        <nav aria-label="Menu" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'courses' && currentRoute === 'course-detail');
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavClick(item.route)}
                className={`relative py-2 text-base font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-slate-950'
                    : 'text-slate-700 hover:text-[#0d3b66]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-[3px] bg-slate-950 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="p-2.5 rounded-lg text-slate-800 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center/Left in RTL: "حسابي" blue link + Cart indicator */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('profile')}
            className="text-[#2563eb] hover:text-[#1d4ed8] font-bold text-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isEnrolled ? 'حسابي (مشترك)' : 'حسابي'}
          </button>

          {cartCount > 0 && (
            <button
              type="button"
              onClick={() => handleNavClick('course-detail')}
              aria-label="سلة المشتريات"
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-[#0d3b66] text-xs font-bold border border-sky-200 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="tabular-nums">{cartCount}</span>
            </button>
          )}
        </div>

        {/* Far Left in RTL: Circular Telegram & WhatsApp Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="http://t.me/studymedsmart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-10 h-10 rounded-full bg-[#3b66f5] hover:bg-[#2952d9] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105"
          >
            <Send className="w-4 h-4 -rotate-12" />
          </a>
          <a
            href="https://wa.me/201060825804"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25d366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'courses' && currentRoute === 'course-detail');
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-right block px-4 py-2.5 rounded-lg text-base font-bold ${
                  isActive
                    ? 'bg-sky-50 text-[#0d3b66]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
