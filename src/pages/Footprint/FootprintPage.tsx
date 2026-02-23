import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FrameworkSection from './components/FrameworkSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Seo from '../../components/Seo';
import StickyMobileCTA from './components/StickyMobileCTA';
import StructuredData from './components/StructuredData';

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
    <div className="min-h-screen bg-[#2C3539] text-white font-sans overflow-x-hidden">
      <Header />
      <StructuredData />
      <Seo
        title="Footprint Mastery | TWS Gurukul"
        description="See order flow before it hits the chart. Plan clean entries. Exit with rules."
        ogImage="https://www.twsgurukul.com/footprint-og.jpg"
        ogType="website"
        canonicalUrl="https://twsgurukul.com/footprint"
      />
      <div>
        <main>
          <HeroSection />
          
          {/* Trust Stripe */}
          <div className="bg-[#3A4449]/30 border-y border-[#B8956A]/20 py-3">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#B8956A]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C87533] flex items-center justify-center shrink-0 pointer-events-none">
                    <span className="text-white font-bold text-[10px] sm:text-xs">TWS</span>
                  </div>
                  <span>TWS Gurukul since 2023</span>
                </div>
                <span className="hidden sm:inline text-[#B8A99A]/40">•</span>
                <span>1,263+ paid learners</span>
                <span className="hidden sm:inline text-[#B8A99A]/40">•</span>
                <span>Monthly live Q&A</span>
                <span className="hidden sm:inline text-[#B8A99A]/40">•</span>
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>
          
          <ProblemSection />
          <FrameworkSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
        </main>
      </div>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default FootprintPage; 