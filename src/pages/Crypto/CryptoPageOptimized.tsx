import React, { useState } from 'react';
import Seo from '../../components/Seo';

// Core components only - reduced from 19 to 10
import ErrorBoundary from './components/ErrorBoundary';
import AnnouncementBar from './components/AnnouncementBar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import TestimonialsSection from './components/TestimonialsSection';
import CryptoGuaranteeSection from './components/CryptoGuaranteeSection';
import FinalCtaSection from './components/FinalCtaSection';
import ExitIntentPopup from './components/ExitIntentPopup';
import StickyMobileCTA from './components/StickyMobileCTA';
import CtaSection from './components/CtaSection';

import { useCountdown } from './hooks/useCountdown';
import { useExitIntent } from './hooks/useExitIntent';

function CryptoPageOptimized() {
  const [isPlaying, setIsPlaying] = useState(false);
  const timeLeft = useCountdown();
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
        <Seo
          title="Crypto Market Mastery | TWS Gurukul"
          description="Navigate the volatile crypto markets like a pro. Learn our proven strategies to master crypto trading and achieve financial freedom."
        />
        
        {/* Removed Header with navigation - landing pages should not have navigation */}
        {/* Removed FloatingTrustIndicators - reduces cognitive load */}
        
        <AnnouncementBar timeLeft={timeLeft} />
        
        <main>
          {/* Core conversion flow: Hook → Problem → Solution → Proof → Guarantee → CTA */}
          <HeroSection 
            handleSmoothScroll={handleSmoothScroll}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          
          {/* Removed LiveMarketTicker, TrustBadgesBar, ProfitCounter - too many distractions */}
          
          <ProblemSection />
          
          <UniqueMechanismSection />
          
          {/* Removed multiple sections: WhyCrypto, SuccessStats, TradingChart, Portfolio, 
              Credibility, Instructor, Curriculum, FAQ - consolidated into core sections */}
          
          <TestimonialsSection handleSmoothScroll={handleSmoothScroll} />
          
          <CtaSection />
          
          <CryptoGuaranteeSection />
          
          <FinalCtaSection />
        </main>
        
        {/* Removed Footer - not needed on landing page */}
        
        <ExitIntentPopup 
          isOpen={showExitPopup}
          onClose={() => setShowExitPopup(false)}
        />
        
        {/* Sticky mobile CTA */}
        <StickyMobileCTA handleSmoothScroll={handleSmoothScroll} />
      </div>
    </ErrorBoundary>
  );
}

export default CryptoPageOptimized;