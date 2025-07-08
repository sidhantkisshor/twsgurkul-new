import React from 'react';
import HeroSection from './components/HeroSection';
import ModernFeaturesSection from './components/ModernFeaturesSection';
import ProgramsShowcase from './components/ProgramsShowcase';
import SocialProofSection from './components/SocialProofSection';
import ModernCTASection from './components/ModernCTASection';
import Seo from '../../components/Seo';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="TWS Gurukul - Transform Your Trading Journey"
        description="Join India's elite trading academy. Learn institutional strategies, master market psychology, and build consistent profits with personalized mentorship."
      />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <ModernFeaturesSection />
        <ProgramsShowcase />
        <SocialProofSection />
        <ModernCTASection />
      </main>
    </>
  );
};

export default HomePage; 