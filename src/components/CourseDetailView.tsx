import React, { useState } from 'react';
import {
  PageRoute,
  COURSES_DATA,
  LectureItem,
} from '../data/platformData';
import {
  formatEgyptianPrice,
  getCurriculumStats,
} from '../utils/courseHelpers';
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Clock,
  BarChart2,
  Globe,
  Award,
  CheckSquare,
  Lock,
  PlayCircle,
  User,
  Bookmark,
  ListChecks,
  CheckCircle2,
  X,
} from 'lucide-react';

interface CourseDetailViewProps {
  onNavigate: (route: PageRoute) => void;
  isEnrolled: boolean;
  onEnroll: () => void;
  onAddToCart: () => void;
  cartAdded: boolean;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  onNavigate,
  isEnrolled,
  onEnroll,
  onAddToCart,
  cartAdded,
}) => {
  const course = COURSES_DATA[0];
  const [activeTab, setActiveTab] = useState<
    'overview' | 'curriculum' | 'instructor'
  >('overview');
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'sec-1',
    'sec-2',
    'sec-3',
  ]);
  const [selectedLecture, setSelectedLecture] = useState<LectureItem | null>(
    null
  );
  const [enrollSuccessModal, setEnrollSuccessModal] = useState(false);

  const stats = getCurriculumStats(course.curriculum);

  const toggleSection = (secId: string) => {
    setExpandedSections((prev) =>
      prev.includes(secId) ? prev.filter((id) => id !== secId) : [...prev, secId]
    );
  };

  const handleBuyNow = () => {
    onEnroll();
    setEnrollSuccessModal(true);
  };

  return (
    <div className="w-full py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Category Header & Breadcrumbs */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-right space-y-2">
        <h2 className="text-xl font-extrabold text-slate-900">
          {course.category}
        </h2>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 cursor-pointer"
          >
            Home
          </button>
          <ChevronLeft className="w-3.5 h-3.5" />
          <button
            type="button"
            onClick={() => onNavigate('courses')}
            className="hover:text-slate-900 cursor-pointer"
          >
            All Courses
          </button>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-[#0d3b66]">{course.category}</span>
        </nav>
      </div>

      {/* Course Main Title & Meta Bar */}
      <div className="space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 leading-snug">
          {course.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-200">
          {/* Teacher & Category Meta */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-sky-100 text-[#0d3b66] flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="block text-xs text-slate-400 font-medium">
                  Teacher
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {course.instructor}
                </span>
              </div>
            </div>

            <div className="text-right border-r border-slate-200 pr-6">
              <span className="block text-xs text-slate-400 font-medium">
                Categories
              </span>
              <button
                type="button"
                onClick={() => onNavigate('courses')}
                className="text-sm font-bold text-[#2563eb] hover:underline cursor-pointer"
              >
                {course.category}
              </button>
            </div>
          </div>

          {/* Price & Buy / Add to Cart Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 font-extrabold tabular-nums" dir="ltr">
              <span className="text-slate-400 line-through text-sm">
                {formatEgyptianPrice(course.originalPrice, course.currency)}
              </span>
              <span className="text-[#f97316] text-xl">
                {formatEgyptianPrice(course.discountedPrice, course.currency)}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleBuyNow}
                className="px-6 py-2.5 rounded-lg bg-[#0d3b66] hover:bg-[#092b4c] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                {isEnrolled ? 'تم الاشتراك في الكورس ✓' : 'إشتري الآن'}
              </button>

              <button
                type="button"
                onClick={onAddToCart}
                className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                {cartAdded ? 'في السلة ✓' : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Banner Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md max-h-[460px] flex items-center justify-center">
        <img
          src={course.detailImage}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover max-h-[460px]"
        />
      </div>

      {/* Course Tabs Navigation: نظرة عامة | المنهاج | المدرب */}
      <div className="border-b border-slate-200 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`inline-flex items-center gap-2 px-6 py-3.5 font-extrabold text-sm sm:text-base border-b-2 transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'border-[#2563eb] text-[#2563eb] bg-blue-50/40'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>نظرة عامة</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('curriculum')}
          className={`inline-flex items-center gap-2 px-6 py-3.5 font-extrabold text-sm sm:text-base border-b-2 transition-colors cursor-pointer ${
            activeTab === 'curriculum'
              ? 'border-[#2563eb] text-[#2563eb] bg-blue-50/40'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <ListChecks className="w-4 h-4" />
          <span>المنهاج ({stats.totalLectures} محاضرة)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('instructor')}
          className={`inline-flex items-center gap-2 px-6 py-3.5 font-extrabold text-sm sm:text-base border-b-2 transition-colors cursor-pointer ${
            activeTab === 'instructor'
              ? 'border-[#2563eb] text-[#2563eb] bg-blue-50/40'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <User className="w-4 h-4" />
          <span>المدرب</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Overview Description (8 cols) */}
          <div className="lg:col-span-8 space-y-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-slate-900 text-sm sm:text-base font-bold leading-relaxed space-y-2">
              <p>
                للاشتراك في الكورس أو تفاصيل اكثر برجاء التواصل مع فريقنا على تيلجرام من هنا :{' '}
                <a
                  href="http://t.me/studymedsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] underline"
                >
                  t.me/studymedsmart
                </a>{' '}
                او التواصل مع فريقنا واتساب :{' '}
                <a
                  href="https://wa.me/201060825804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16a34a] underline tabular-nums"
                >
                  01060825804
                </a>{' '}
                ثم اضغط علي add to cart وسيتم تفعيل كل مزايا الكورس لك مباشرة
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                تفاصيل الكورس ومحتوياته:
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 pt-3">
                {course.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="text-lg shrink-0">{h.icon}</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Features Table (4 cols) matching studymedsmart.com */}
          <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-200 pb-3">
              Course Features
            </h3>

            <ul className="divide-y divide-slate-200/70 text-sm">
              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <FileText className="w-4 h-4 text-[#0d3b66]" />
                  <span>Lectures</span>
                </span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {course.lecturesCount}
                </span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <HelpCircle className="w-4 h-4 text-[#0d3b66]" />
                  <span>Quiz</span>
                </span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {course.quizzesCount}
                </span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-[#0d3b66]" />
                  <span>Duration</span>
                </span>
                <span className="font-bold text-slate-900">
                  {course.durationWeeks} أسبوعًا
                </span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <BarChart2 className="w-4 h-4 text-[#0d3b66]" />
                  <span>Skill level</span>
                </span>
                <span className="font-bold text-slate-900">
                  {course.skillLevel}
                </span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <Globe className="w-4 h-4 text-[#0d3b66]" />
                  <span>Language</span>
                </span>
                <span className="font-bold text-slate-900">
                  {course.language}
                </span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <Award className="w-4 h-4 text-[#0d3b66]" />
                  <span>Certificate</span>
                </span>
                <span className="font-bold text-slate-900">Yes</span>
              </li>

              <li className="py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <CheckSquare className="w-4 h-4 text-[#0d3b66]" />
                  <span>Assessments</span>
                </span>
                <span className="font-bold text-slate-900">Yes</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'curriculum' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
            <span>
              إجمالي المحتوى: {stats.totalSections} فروع رئيسية •{' '}
              {stats.totalLectures} محاضرة وتدريب
            </span>
            <button
              type="button"
              onClick={() =>
                setExpandedSections(
                  expandedSections.length === course.curriculum.length
                    ? []
                    : course.curriculum.map((s) => s.id)
                )
              }
              className="text-[#2563eb] hover:underline cursor-pointer"
            >
              {expandedSections.length === course.curriculum.length
                ? 'طي جميع الفروع'
                : 'فتح جميع الفروع'}
            </button>
          </div>

          {course.curriculum.map((section) => {
            const isOpen = expandedSections.includes(section.id);
            return (
              <div
                key={section.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 text-right transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      {section.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {section.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-bold text-slate-600 tabular-nums">
                      {section.lectures.length} محاضرات
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <ul className="divide-y divide-slate-100">
                    {section.lectures.map((lec) => {
                      const canWatch = isEnrolled || lec.isPreview || !lec.locked;
                      return (
                        <li
                          key={lec.id}
                          onClick={() => setSelectedLecture(lec)}
                          className="px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-sky-50/40 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 text-right">
                            <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="text-xs font-bold text-[#2563eb] tabular-nums">
                              {lec.code}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-800">
                              {lec.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs text-slate-500 font-medium">
                              {lec.duration}
                            </span>
                            {canWatch ? (
                              <PlayCircle className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Lock className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'instructor' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/hero-doctors.jpg"
            alt={course.instructor}
            referrerPolicy="no-referrer"
            className="w-32 h-32 rounded-2xl object-cover shrink-0 border border-slate-200"
          />
          <div className="text-right space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900">
              {course.instructor}
            </h3>
            <p className="text-xs font-bold text-[#1f9d8b]">
              مؤسسا منصة StudyMedSmart للتعليم الطبي الذكي
            </p>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              فريق طبي أكاديمي متخصص في تأهيل طلاب الكليات الطبية (طب بشري، صيدلة، أسنان، علاج طبيعي، تمريض، علوم، طب بيطري، والمعاهد الصحية) وتبسيط العلوم الطبية الأساسية والإكلينيكية لضمان التفوق والامتياز من السنة الأولى.
            </p>
          </div>
        </div>
      )}

      {/* Lecture Preview / Player Modal */}
      {selectedLecture && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl text-right space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-base">
                محاضرة {selectedLecture.code}: {selectedLecture.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedLecture(null)}
                aria-label="إغلاق"
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isEnrolled || selectedLecture.isPreview ? (
              <div className="space-y-4">
                <div className="bg-[#050b24] text-white rounded-xl p-6 text-center space-y-3">
                  <PlayCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                  <p className="font-bold text-sm">
                    جاري تشغيل المحاضرة ({selectedLecture.duration})
                  </p>
                  <p className="text-xs text-slate-300">
                    شرح تفصيلي مبسط مع د/عمرو البركي ود/حسام عيسى + ملف PDF للمحاضرة.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3 text-slate-800">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>هذه المحاضرة متاحة للمشتركين في الكورس</span>
                </div>
                <p className="text-xs leading-relaxed">
                  اشترك الآن في كورس التأهيل للكليات الطبية بخصم 50% (799.00EGP بدلاً من 1,600.00EGP) لفتح جميع الـ 64 محاضرة والاختبارات التفاعلية.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLecture(null);
                    handleBuyNow();
                  }}
                  className="w-full py-2.5 rounded-lg bg-[#0d3b66] text-white font-bold text-xs cursor-pointer"
                >
                  تفعيل الاشتراك الفوري في الكورس
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enrollment Confirmation Modal */}
      {enrollSuccessModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              تم تفعيل اشتراكك في الكورس بنجاح!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              جميع المحاضرات الـ 64 في الـ 6 فروع أصبحت مفتوحة الآن للمشاهدة المباشرة، ويمكنك متابعة تقدمك من صفحة حسابي.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setEnrollSuccessModal(false);
                  setActiveTab('curriculum');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0d3b66] text-white font-bold text-sm cursor-pointer"
              >
                ابدأ مشاهدة المحاضرات الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
