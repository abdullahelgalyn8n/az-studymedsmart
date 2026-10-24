import { CourseItem, CurriculumSection } from '../data/platformData';

export interface CourseFilterParams {
  searchQuery: string;
  selectedCategories: string[];
  selectedInstructors: string[];
  priceFilter: 'all' | 'paid' | 'free';
  sortBy: 'newest' | 'price-asc' | 'price-desc' | 'lectures';
}

export function filterAndSortCourses(
  courses: CourseItem[],
  params: CourseFilterParams
): CourseItem[] {
  const query = params.searchQuery.trim().toLowerCase();

  const filtered = courses.filter((course) => {
    if (query) {
      const matchesTitle = course.title.toLowerCase().includes(query);
      const matchesShort = course.shortTitle.toLowerCase().includes(query);
      const matchesDesc = course.description.toLowerCase().includes(query);
      const matchesLecture = course.curriculum.some((sec) =>
        sec.lectures.some((lec) => lec.title.toLowerCase().includes(query))
      );
      if (!matchesTitle && !matchesShort && !matchesDesc && !matchesLecture) {
        return false;
      }
    }

    if (
      params.selectedCategories.length > 0 &&
      !params.selectedCategories.includes(course.category)
    ) {
      return false;
    }

    if (
      params.selectedInstructors.length > 0 &&
      !params.selectedInstructors.includes(course.instructor)
    ) {
      return false;
    }

    if (params.priceFilter === 'paid' && course.discountedPrice <= 0) {
      return false;
    }

    if (params.priceFilter === 'free' && course.discountedPrice > 0) {
      return false;
    }

    return true;
  });

  return [...filtered].sort((a, b) => {
    switch (params.sortBy) {
      case 'price-asc':
        return a.discountedPrice - b.discountedPrice;
      case 'price-desc':
        return b.discountedPrice - a.discountedPrice;
      case 'lectures':
        return b.lecturesCount - a.lecturesCount;
      case 'newest':
      default:
        return 0;
    }
  });
}

export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
): number {
  if (originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

export function formatEgyptianPrice(amount: number, currency = 'EGP'): string {
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatted}${currency}`;
}

export function getCurriculumStats(curriculum: CurriculumSection[]): {
  totalSections: number;
  totalLectures: number;
  previewCount: number;
} {
  let totalLectures = 0;
  let previewCount = 0;

  for (const sec of curriculum) {
    totalLectures += sec.lectures.length;
    for (const lec of sec.lectures) {
      if (lec.isPreview || !lec.locked) {
        previewCount += 1;
      }
    }
  }

  return {
    totalSections: curriculum.length,
    totalLectures,
    previewCount,
  };
}

export interface AuthValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateLoginForm(identifier: string, password: string): AuthValidationResult {
  const errors: Record<string, string> = {};
  if (!identifier.trim()) {
    errors.identifier = 'يرجى إدخال اسم المستخدم أو البريد الإلكتروني';
  }
  if (!password || password.length < 4) {
    errors.password = 'يرجى إدخال كلمة مرور صحيحة (4 أحرف على الأقل)';
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateRegisterForm(input: {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
}): AuthValidationResult {
  const errors: Record<string, string> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!input.email.trim() || !emailRegex.test(input.email.trim())) {
    errors.email = 'يرجى إدخال بريد إلكتروني صحيح';
  }
  if (!input.username.trim() || input.username.trim().length < 3) {
    errors.username = 'اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل';
  }
  if (!input.password || input.password.length < 6) {
    errors.password = 'كلمة المرور يجب أن تتكون من 6 أحرف على الأقل';
  }
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = 'كلمتا المرور غير متطابقتين';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
