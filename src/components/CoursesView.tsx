import React, { useState } from 'react';
import { PageRoute, COURSES_DATA } from '../data/platformData';
import {
  filterAndSortCourses,
  formatEgyptianPrice,
} from '../utils/courseHelpers';
import {
  Search,
  LayoutGrid,
  List,
  FileText,
  User,
  ChevronLeft,
} from 'lucide-react';

interface CoursesViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<'all' | 'paid' | 'free'>('all');
  const [sortBy, setSortBy] = useState<
    'newest' | 'price-asc' | 'price-desc' | 'lectures'
  >('newest');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Pending sidebar filter state so "تطبيق" and "إعادة ضبط" buttons work authentically
  const [draftCategories, setDraftCategories] = useState<string[]>([]);
  const [draftInstructors, setDraftInstructors] = useState<string[]>([]);
  const [draftPrice, setDraftPrice] = useState<'all' | 'paid' | 'free'>('all');

  const toggleDraftCategory = (cat: string) => {
    setDraftCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleDraftInstructor = (inst: string) => {
    setDraftInstructors((prev) =>
      prev.includes(inst) ? prev.filter((i) => i !== inst) : [...prev, inst]
    );
  };

  const handleApplyFilters = () => {
    setSelectedCategories(draftCategories);
    setSelectedInstructors(draftInstructors);
    setPriceFilter(draftPrice);
  };

  const handleResetFilters = () => {
    setDraftCategories([]);
    setDraftInstructors([]);
    setDraftPrice('all');
    setSelectedCategories([]);
    setSelectedInstructors([]);
    setPriceFilter('all');
    setSearchQuery('');
    setSortBy('newest');
  };

  const filteredCourses = filterAndSortCourses(COURSES_DATA, {
    searchQuery,
    selectedCategories,
    selectedInstructors,
    priceFilter,
    sortBy,
  });

  return (
    <div className="w-full py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title & Breadcrumb */}
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          الدورات
        </h1>
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 cursor-pointer"
          >
            Home
          </button>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">All Courses</span>
        </nav>
      </div>

      {/* Main Layout: Content on Right (in RTL), Filter Sidebar on Left (in RTL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Course Listing Area (9 cols) */}
        <main className="lg:col-span-9 order-1 space-y-6">
          {/* Top Toolbar: Result count + View Mode Toggle + Sort Select + Search Box */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            {/* Right side in RTL: View Toggle & Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 border border-slate-200 rounded-md p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="عرض شبكي"
                  className={`p-1.5 rounded cursor-pointer ${
                    viewMode === 'grid'
                      ? 'text-[#2563eb] bg-blue-50'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="عرض قائمة"
                  className={`p-1.5 rounded cursor-pointer ${
                    viewMode === 'list'
                      ? 'text-[#2563eb] bg-blue-50'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm font-medium text-slate-600">
                {filteredCourses.length === 1
                  ? 'عرض نتيجة واحدة فقط'
                  : `عرض ${filteredCourses.length} نتائج`}
              </span>
            </div>

            {/* Left side in RTL: Sort Dropdown + Search Input */}
            <div className="flex flex-wrap items-center gap-3 flex-1 sm:flex-initial justify-end">
              <select
                aria-label="ترتيب الدورات"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | 'newest'
                      | 'price-asc'
                      | 'price-desc'
                      | 'lectures'
                  )
                }
                className="border border-slate-200 rounded-md px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-blue-600"
              >
                <option value="newest">المنشورة حديثًا</option>
                <option value="price-asc">السعر: من الأقل للأعلى</option>
                <option value="price-desc">السعر: من الأعلى للأقل</option>
                <option value="lectures">عدد المحاضرات</option>
              </select>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="بحث عن الدورات..."
                  aria-label="بحث عن الدورات"
                  className="w-full border border-slate-200 rounded-md pr-3 pl-9 py-2 text-xs sm:text-sm text-right focus:outline-none focus:border-blue-600"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Course Items */}
          {filteredCourses.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center space-y-4">
              <p className="text-base font-bold text-slate-800">
                لا توجد دورات مطابقة لمعايير البحث الحالية.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-bold hover:bg-blue-700 cursor-pointer"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                  : 'space-y-6'
              }
            >
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  onClick={() => {
                    onNavigate('course-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group bg-white border-b border-slate-200 pb-6 transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'border rounded-2xl p-5 shadow-xs flex flex-col gap-4'
                      : 'flex flex-col md:flex-row items-start gap-6'
                  }`}
                >
                  {/* Course Image on Right in RTL */}
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'w-full h-52 rounded-xl overflow-hidden shrink-0 bg-slate-900'
                        : 'w-full md:w-72 h-48 rounded-lg overflow-hidden shrink-0 bg-slate-900'
                    }
                  >
                    <img
                      src={course.bannerImage}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Course Details on Left in RTL */}
                  <div className="flex-1 text-right space-y-3 w-full">
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                      {course.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                      للاشتراك في الكورس أو تفاصيل اكثر برجاء التواصل مع فريقنا على تيلجرام من هنا : t.me/studymedsmart او التواصل مع فريقنا واتساب : 01060825804 ثم اضغط...
                    </p>

                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
                      {/* Instructor & Lecture Count */}
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 font-semibold text-slate-700">
                          <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                            <User className="w-4 h-4" />
                          </span>
                          <span>{course.instructor}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-slate-500 tabular-nums">
                          <FileText className="w-4 h-4" />
                          <span>{course.lecturesCount}</span>
                        </span>
                      </div>

                      {/* Price Display matching 1,600.00EGP 799.00EGP */}
                      <div className="flex items-center gap-2 font-bold tabular-nums" dir="ltr">
                        <span className="text-slate-400 line-through text-xs">
                          {formatEgyptianPrice(course.originalPrice, course.currency)}
                        </span>
                        <span className="text-[#f97316] text-sm sm:text-base font-extrabold">
                          {formatEgyptianPrice(course.discountedPrice, course.currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Sidebar Filters on Left in RTL (3 cols) matching studymedsmart.com/courses-11/ */}
        <aside className="lg:col-span-3 order-2 bg-white border border-slate-200 rounded-md p-6 space-y-6">
          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">التصنيفات</h3>
            <label className="flex items-center justify-between gap-2 text-sm text-slate-600 cursor-pointer select-none">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={draftCategories.includes('كورسات التاهيل')}
                  onChange={() => toggleDraftCategory('كورسات التاهيل')}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>كورسات التاهيل</span>
              </div>
              <span className="text-xs text-slate-400 tabular-nums">1</span>
            </label>
          </div>

          {/* Author / Instructor */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900">الكاتب</h3>
            <label className="flex items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 cursor-pointer select-none">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={draftInstructors.includes(
                    'Dr Amr Elbaraky & Dr Hossam eissa'
                  )}
                  onChange={() =>
                    toggleDraftInstructor('Dr Amr Elbaraky & Dr Hossam eissa')
                  }
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="leading-snug">
                  Dr Amr Elbaraky & Dr Hossam Eissa
                </span>
              </div>
              <span className="text-xs text-slate-400 tabular-nums">1</span>
            </label>
          </div>

          {/* Price */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900">السعر</h3>
            <label className="flex items-center justify-between gap-2 text-sm text-slate-600 cursor-pointer select-none">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={draftPrice === 'paid'}
                  onChange={() =>
                    setDraftPrice((prev) => (prev === 'paid' ? 'all' : 'paid'))
                  }
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>مدفوع</span>
              </div>
              <span className="text-xs text-slate-400 tabular-nums">1</span>
            </label>
          </div>

          {/* Action Buttons: تطبيق & إعادة ضبط */}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleApplyFilters}
              className="py-2.5 px-4 rounded bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              تطبيق
            </button>
            <button
              type="button"
              onClick={handleResetFilters}
              className="py-2.5 px-4 rounded border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              إعادة ضبط
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
