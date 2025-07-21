import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import CredibilitySection from './components/CredibilitySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import PricingSection from './components/PricingSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import ExitIntentPopup from './components/ExitIntentPopup';
import { useExitIntent } from './hooks/useExitIntent';

const MentorshipPage: React.FC = () => {
  const showExitIntent = useExitIntent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-black text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroSection />
      <ProblemSection />
      <UniqueMechanismSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
      
      <FloatingCta />
      {showExitIntent && <ExitIntentPopup />}
    </motion.div>
  );
};

export default MentorshipPage;