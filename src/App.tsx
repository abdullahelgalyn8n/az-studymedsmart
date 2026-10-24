/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageRoute } from './data/platformData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { CoursesView } from './components/CoursesView';
import { CourseDetailView } from './components/CourseDetailView';
import { ContactView } from './components/ContactView';
import { ProfileView } from './components/ProfileView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
    setCartAdded(true);
  };

  const handleAddToCart = () => {
    setCartAdded(true);
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header
        currentRoute={currentRoute}
        onNavigate={setCurrentRoute}
        cartCount={cartAdded ? 1 : 0}
        isEnrolled={isEnrolled}
      />

      <div className="flex-1">
        {currentRoute === 'home' && <HomeView onNavigate={setCurrentRoute} />}
        {currentRoute === 'about' && <AboutView onNavigate={setCurrentRoute} />}
        {currentRoute === 'services' && <ServicesView onNavigate={setCurrentRoute} />}
        {currentRoute === 'courses' && <CoursesView onNavigate={setCurrentRoute} />}
        {currentRoute === 'course-detail' && (
          <CourseDetailView
            onNavigate={setCurrentRoute}
            isEnrolled={isEnrolled}
            onEnroll={handleEnroll}
            onAddToCart={handleAddToCart}
            cartAdded={cartAdded}
          />
        )}
        {currentRoute === 'contact' && <ContactView />}
        {currentRoute === 'profile' && (
          <ProfileView onNavigate={setCurrentRoute} isEnrolled={isEnrolled} />
        )}
      </div>

      <Footer onNavigate={setCurrentRoute} />
    </div>
  );
}
