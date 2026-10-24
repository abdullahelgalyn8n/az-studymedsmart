import React, { useState } from 'react';
import { Send, MessageCircle, PhoneCall, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [faculty, setFaculty] = useState('طب بشري');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('يرجى ملء الاسم ورقم الهاتف ورسالتك بالكامل.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="w-full py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Main Contact Card matching studymedsmart.com */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          📞 تواصل معنا
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto">
          نحن هنا دائمًا لخدمتك وتقديم الدعم اللازم في كل خطوة من رحلتك التعليمية والمهنية. تواصل معنا بأي وسيلة تفضلها وسنرد عليك في أقرب وقت ممكن.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 max-w-3xl mx-auto">
          <a
            href="https://wa.me/201060825804"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 flex items-center justify-between gap-4 shadow-xs transition-all group"
          >
            <div className="text-right space-y-1">
              <p className="text-xs font-bold text-emerald-700">
                تواصل مباشر عبر واتساب
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900 tabular-nums">
                للتواصل رقم الواتساب الخاص بنا : 01060825804
              </p>
            </div>
            <span className="w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </span>
          </a>

          <a
            href="http://t.me/studymedsmart"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-sky-50/60 border border-sky-200 rounded-2xl p-6 flex items-center justify-between gap-4 shadow-xs transition-all group"
          >
            <div className="text-right space-y-1">
              <p className="text-xs font-bold text-sky-700">
                القناة والدعم الفني على تليجرام
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                للتواصل تليجرام : studymedsmart
              </p>
            </div>
            <span className="w-12 h-12 rounded-full bg-[#3b66f5] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Send className="w-5 h-5 -rotate-12" />
            </span>
          </a>
        </div>
      </div>

      {/* Direct Student Inquiry Form */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <PhoneCall className="w-6 h-6 text-[#0d3b66]" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            أرسل استفسارك مباشرة للفريق العلمي
          </h2>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-extrabold text-emerald-950">
              تم إرسال رسالتك بنجاح يا {name}!
            </h3>
            <p className="text-sm text-emerald-800 font-medium">
              سيتواصل معك فريق د/عمرو البركي ود/حسام عيسى عبر الواتساب على الرقم ({phone}) في أقرب وقت.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
                setMessage('');
              }}
              className="px-6 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold cursor-pointer"
            >
              إرسال استفسار آخر
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold text-slate-700 mb-1.5"
                >
                  الاسم الكامل *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك الثلاثي"
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d3b66]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-bold text-slate-700 mb-1.5"
                >
                  رقم الواتساب *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010xxxxxxxx"
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d3b66] tabular-nums"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-faculty"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                الكلية الطبية
              </label>
              <select
                id="contact-faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#0d3b66]"
              >
                <option value="طب بشري">طب بشري</option>
                <option value="صيدلة">صيدلة</option>
                <option value="طب أسنان">طب أسنان</option>
                <option value="علاج طبيعي">علاج طبيعي</option>
                <option value="تمريض">تمريض</option>
                <option value="علوم طبية">علوم / علوم صحية تطبيقية</option>
                <option value="طب بيطري">طب بيطري</option>
                <option value="معهد فني صحي">معهد فني صحي</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                رسالتك أو استفسارك *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اكتب استفسارك حول كورس التأهيل أو طريقة التفعيل..."
                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d3b66]"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
            >
              إرسال الرسالة
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
