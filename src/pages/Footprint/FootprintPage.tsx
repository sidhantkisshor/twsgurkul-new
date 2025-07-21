import { useEffect, useState } from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import TrustBadgesBar from './components/TrustBadgesBar';
import HeroSection from './components/HeroSection';
import WhyFootprintSection from './components/WhyFootprintSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import DataVisualizationSection from './components/DataVisualizationSection';
import BenefitsSection from './components/BenefitsSection';
import TransformationSection from './components/TransformationSection';
import TestimonialsSection from './components/TestimonialsSection';
import CourseSection from './components/CourseSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Seo from '../../components/Seo';
import WhaleAlertPopup from './components/WhaleAlertPopup';

function FootprintPage() {
  const [timeLeft, setTimeLeft] = useState('48:00:00');
  
  useEffect(() => {
    // Countdown timer logic
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft('00:00:00');
      } else {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
      <Seo
        title="Footprint Mastery System | TWS Gurukul"
        description="Master order flow and institutional movements with the Footprint Mastery System. Learn to see what big money is doing before retail even knows."
      />
      <Header />
      <div className="pt-16">
        <AnnouncementBar timeLeft={timeLeft} />
        <TrustBadgesBar />
        <main>
          <HeroSection />
        <WhyFootprintSection />
        <ProblemSection />
        <UniqueMechanismSection />
        <DataVisualizationSection />
        <TransformationSection />
        <BenefitsSection />
        <CourseSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        </main>
      </div>
      <Footer />
      <WhaleAlertPopup />
    </div>
  );
}

export default FootprintPage; 