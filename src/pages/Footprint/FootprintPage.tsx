import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TransformationSection from './components/TransformationSection';
import TestimonialsSection from './components/TestimonialsSection';
import CourseSection from './components/CourseSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Seo from '../../components/Seo';

function FootprintPage() {
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
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white min-h-screen">
      <Seo
        title="Footprint Mastery System | TWS Gurukul"
        description="Master order flow and institutional movements with the Footprint Mastery System. Learn to see what big money is doing before retail even knows."
      />
      <Header />
      <main>
        <HeroSection />
        <TransformationSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CourseSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default FootprintPage; 