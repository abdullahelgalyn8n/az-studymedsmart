import test from 'node:test';
import assert from 'node:assert/strict';
import { COURSES_DATA } from '../data/platformData';
import {
  filterAndSortCourses,
  calculateDiscountPercentage,
  formatEgyptianPrice,
  getCurriculumStats,
  validateLoginForm,
  validateRegisterForm,
} from './courseHelpers';

test('calculateDiscountPercentage computes accurate discount from 1600 to 799', () => {
  assert.equal(calculateDiscountPercentage(1600, 799), 50);
  assert.equal(calculateDiscountPercentage(1000, 1000), 0);
});

test('formatEgyptianPrice formats prices like reference site (1,600.00EGP and 799.00EGP)', () => {
  assert.equal(formatEgyptianPrice(1600, 'EGP'), '1,600.00EGP');
  assert.equal(formatEgyptianPrice(799, 'EGP'), '799.00EGP');
});

test('getCurriculumStats counts 6 sections and 64 lectures accurately', () => {
  const stats = getCurriculumStats(COURSES_DATA[0].curriculum);
  assert.equal(stats.totalSections, 6);
  assert.equal(stats.totalLectures, 64);
  assert.equal(stats.previewCount, 4);
});

test('filterAndSortCourses filters by query, category, and price type', () => {
  const all = filterAndSortCourses(COURSES_DATA, {
    searchQuery: '',
    selectedCategories: [],
    selectedInstructors: [],
    priceFilter: 'all',
    sortBy: 'newest',
  });
  assert.equal(all.length, 1);

  const matchedLecture = filterAndSortCourses(COURSES_DATA, {
    searchQuery: 'CPR',
    selectedCategories: ['كورسات التاهيل'],
    selectedInstructors: [],
    priceFilter: 'paid',
    sortBy: 'newest',
  });
  assert.equal(matchedLecture.length, 1);

  const freeOnly = filterAndSortCourses(COURSES_DATA, {
    searchQuery: '',
    selectedCategories: [],
    selectedInstructors: [],
    priceFilter: 'free',
    sortBy: 'newest',
  });
  assert.equal(freeOnly.length, 0);
});

test('validateLoginForm and validateRegisterForm enforce required Arabic validation rules', () => {
  const badLogin = validateLoginForm('', '12');
  assert.equal(badLogin.valid, false);
  assert.ok(badLogin.errors.identifier);
  assert.ok(badLogin.errors.password);

  const goodLogin = validateLoginForm('student@studymedsmart.com', 'med1234');
  assert.equal(goodLogin.valid, true);

  const mismatchReg = validateRegisterForm({
    email: 'student@studymedsmart.com',
    username: 'medstudent',
    password: 'password123',
    confirmPassword: 'password999',
  });
  assert.equal(mismatchReg.valid, false);
  assert.ok(mismatchReg.errors.confirmPassword);

  const goodReg = validateRegisterForm({
    email: 'student@studymedsmart.com',
    username: 'medstudent',
    password: 'password123',
    confirmPassword: 'password123',
  });
  assert.equal(goodReg.valid, true);
});
