import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import LiveDashboardSection from './components/LiveDashboardSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FinalCtaSection from './components/FinalCtaSection';
import SimpleFaqSection from './components/SimpleFaqSection';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import MobileStickyQuiz from './components/MobileStickyQuiz';
import FloatingCTA from './components/FloatingCTA';
import { useExitIntent } from './hooks/useExitIntent';
import Seo from '../../components/Seo';

const MentorshipPage: React.FC = () => {
  const showExitIntent = useExitIntent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo 
        title="Elite Trading Mentorship | Live 8 PM Trading with Pro Coaches | TWS Gurukul"
        description="Learn a repeatable 8 PM trading routine with live market sessions, accountability pods, and weekly performance reviews. 2,300+ traders trained. Next cohort starts soon."
        ogTitle="Trade The 8 PM Window With Pro Coaches"
        ogDescription="Join a capped cohort, learn the 8 PM liquidity window, and practice it live five nights a week with our certified pro coaches trained in Sidhant's system."
      />
      <motion.div 
        className="min-h-screen bg-white text-gray-900 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <HeroSection />
        <ProblemSection />
        <UniqueMechanismSection />
        <WhatYouGetSection />
        <LiveDashboardSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection />
        <SimpleFaqSection />
        <Footer />
        
        {showExitIntent && <ExitIntentPopup />}
        <MobileStickyQuiz />
        <FloatingCTA />
      </motion.div>
    </>
  );
};

export default MentorshipPage;