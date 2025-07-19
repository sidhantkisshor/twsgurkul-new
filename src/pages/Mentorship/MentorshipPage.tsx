import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import LiveResultsSection from './components/LiveResultsSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import CredibilitySection from './components/CredibilitySection';
import AuthoritySection from './components/AuthoritySection';
import TransformationSection from './components/TransformationSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import UrgencyBanner from './components/UrgencyBanner';
import SocialProofNotifications from './components/SocialProofNotifications';
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
      <LiveResultsSection />
      <CredibilitySection />
      <AuthoritySection />
      <TransformationSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      
      <FloatingCta />
      {showExitIntent && <ExitIntentPopup />}
    </motion.div>
  );
};

export default MentorshipPage;