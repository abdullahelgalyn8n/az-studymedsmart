import React, { useState } from 'react';
import { PageRoute, COURSES_DATA } from '../data/platformData';
import {
  validateLoginForm,
  validateRegisterForm,
} from '../utils/courseHelpers';
import { ChevronLeft, CheckCircle2, LogOut, BookOpen, PlayCircle } from 'lucide-react';

interface ProfileViewProps {
  onNavigate: (route: PageRoute) => void;
  isEnrolled: boolean;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onNavigate,
  isEnrolled,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<{
    username: string;
    email: string;
    fullName: string;
  } | null>(null);

  // Login State matching studymedsmart.com/lp-profile-3/
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});

  // Register State matching studymedsmart.com/lp-profile-3/
  const [regEmail, setRegEmail] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateLoginForm(loginIdentifier, loginPassword);
    if (!res.valid) {
      setLoginErrors(res.errors);
      return;
    }
    setLoginErrors({});
    setLoggedInUser({
      username: loginIdentifier.split('@')[0],
      email: loginIdentifier.includes('@')
        ? loginIdentifier
        : `${loginIdentifier}@studymedsmart.com`,
      fullName: loginIdentifier,
    });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateRegisterForm({
      email: regEmail,
      username: regUsername,
      password: regPassword,
      confirmPassword: regConfirmPassword,
      firstName: regFirstName,
      lastName: regLastName,
    });
    if (!res.valid) {
      setRegErrors(res.errors);
      return;
    }
    setRegErrors({});
    const fullName =
      `${regFirstName} ${regLastName}`.trim() || regUsername;
    setLoggedInUser({
      username: regUsername,
      email: regEmail,
      fullName,
    });
  };

  return (
    <div className="w-full py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Title & Breadcrumb */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-right space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Profile
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-slate-500"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 cursor-pointer"
          >
            Home
          </button>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-slate-900">Profile</span>
        </nav>
      </div>

      {loggedInUser ? (
        /* Student Dashboard once logged in / registered */
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-8 text-right">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0d3b66] text-white flex items-center justify-center font-extrabold text-xl">
                {loggedInUser.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-slate-900">
                    أهلاً بك، د/ {loggedInUser.fullName}
                  </h2>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {loggedInUser.email} • حساب طالب مفعل
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLoggedInUser(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>تسجيل الخروج</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0d3b66]" />
              <span>دوراتي المسجلة</span>
            </h3>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-right">
                <img
                  src={COURSES_DATA[0].bannerImage}
                  alt={COURSES_DATA[0].shortTitle}
                  referrerPolicy="no-referrer"
                  className="w-36 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-base text-slate-900">
                    {COURSES_DATA[0].title}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    64 محاضرة • 6 فروع تأسيسية • حالة الاشتراك:{' '}
                    <span className="text-emerald-700 font-bold">
                      {isEnrolled ? 'مشترك بالكامل' : 'نسخة المعاينة المجانية'}
                    </span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onNavigate('course-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-xs sm:text-sm shrink-0 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>الذهاب للمحاضرات</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Dual Login & Registration Forms matching studymedsmart.com/lp-profile-3/ */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Login Form ("تسجيل الدخول") */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs text-right space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
              تسجيل الدخول
            </h2>

            <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="login-identifier"
                  className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                >
                  اسم المستخدم أو البريد الإلكتروني *
                </label>
                <input
                  id="login-identifier"
                  type="text"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  placeholder="البريد الإلكتروني أو اسم المستخدم"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                />
                {loginErrors.identifier && (
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {loginErrors.identifier}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                >
                  كلمة المرور *
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="كلمة المرور"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                />
                {loginErrors.password && (
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {loginErrors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600"
                  />
                  <span>تذكرني</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                تسجيل الدخول
              </button>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-slate-500 hover:text-[#2563eb] cursor-pointer"
                >
                  فقدت كلمة المرور الخاصة بك؟
                </button>
              </div>
            </form>
          </div>

          {/* Register Form ("تسجيل") */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs text-right space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
              تسجيل
            </h2>

            <form onSubmit={handleRegisterSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                >
                  عنوان البريد الإلكتروني *
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="البريد الإلكتروني"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                />
                {regErrors.email && (
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {regErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="reg-username"
                  className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                >
                  إسم المستخدم *
                </label>
                <input
                  id="reg-username"
                  type="text"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                  placeholder="إسم المستخدم"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                />
                {regErrors.username && (
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {regErrors.username}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="reg-password"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    كلمة المرور *
                  </label>
                  <input
                    id="reg-password"
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="كلمة المرور"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                  />
                  {regErrors.password && (
                    <p className="text-xs text-red-600 font-bold mt-1">
                      {regErrors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="reg-confirm"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    تأكيد كلمة المرور *
                  </label>
                  <input
                    id="reg-confirm"
                    type="password"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="كلمة المرور"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                  />
                  {regErrors.confirmPassword && (
                    <p className="text-xs text-red-600 font-bold mt-1">
                      {regErrors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="reg-fname"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    الأسم الأول
                  </label>
                  <input
                    id="reg-fname"
                    type="text"
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reg-lname"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    الأسم الأخير
                  </label>
                  <input
                    id="reg-lname"
                    type="text"
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                التسجيل
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
