import React from 'react';
import HeroSection from './components/HeroSection';
import ModernFeaturesSection from './components/ModernFeaturesSection';
import WealthPathSelector from './components/WealthPathSelector';
import SocialProofSection from './components/SocialProofSection';
import ModernCTASection from './components/ModernCTASection';
import Seo from '../../components/Seo';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="TWS Gurukul - From Salary to Financial Freedom"
        description="Master high-income skills in Trading, Crypto & AI. Replace your 9-5 with automated income streams. Join 5000+ Indians building wealth on their terms."
      />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <ModernFeaturesSection />
        <WealthPathSelector />
        <SocialProofSection />
        <ModernCTASection />
      </main>
    </>
  );
};

export default HomePage; 