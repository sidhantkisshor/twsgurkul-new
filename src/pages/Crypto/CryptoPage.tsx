import React, { useState, useEffect, lazy, Suspense } from 'react';
import Seo from '../../components/Seo';

// Core components loaded immediately
import ErrorBoundary from './components/ErrorBoundary';
import AnnouncementBar from './components/AnnouncementBar';
import HeaderMinimal from './components/HeaderMinimal';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import InstructorSectionSimplified from './components/InstructorSectionSimplified';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import CryptoGuaranteeSection from './components/CryptoGuaranteeSection';
import FinalCtaSection from './components/FinalCtaSection';
import ExitIntentPopup from './components/ExitIntentPopup';
import MethodologyModal from './components/MethodologyModal';
import JournalPreview from './components/JournalPreview';
import ReturningUserCheckout from './components/ReturningUserCheckout';
import VideoSection from './components/VideoSection';

// Lazy load secondary components for performance
const TrustBadgesBar = lazy(() => import('./components/TrustBadgesBar'));
const FAQ = lazy(() => import('./components/FAQ'));

// Hooks
import { useCountdown } from './hooks/useCountdown';
import { useExitIntent } from './hooks/useExitIntent';

// Tracking
import { initScrollTracking, trackTimeOnPage } from './utils/tracking';

function CryptoPage() {
  const [showMethodologyModal, setShowMethodologyModal] = useState(false);
  const timeLeft = useCountdown();
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  // Initialize tracking
  useEffect(() => {
    const cleanupScroll = initScrollTracking();
    trackTimeOnPage();
    
    return cleanupScroll;
  }, []);

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
          description="A recorded program with monthly live Q&A to learn systematic crypto trading with risk management at the core."
        />
        
        {/* Minimal header without navigation for conversion focus */}
        <HeaderMinimal />
        
        <AnnouncementBar timeLeft={timeLeft} />
        
        {/* Returning user quick checkout */}
        <ReturningUserCheckout />
        
        <main className="pt-16">
          {/* Core conversion flow: 8 sections instead of 19 */}
          <HeroSection 
            handleSmoothScroll={handleSmoothScroll}
            onMethodologyClick={() => setShowMethodologyModal(true)}
          />
          
          {/* Trust indicators loaded after hero for performance */}
          <Suspense fallback={<div className="h-20" />}>
            <TrustBadgesBar onMethodologyClick={() => setShowMethodologyModal(true)} />
          </Suspense>
          
          <ProblemSection />
          
          <UniqueMechanismSection />
          
          
          <InstructorSectionSimplified />
          
          <TestimonialsSection 
            handleSmoothScroll={handleSmoothScroll} 
            onMethodologyClick={() => setShowMethodologyModal(true)}
          />
          
          {/* Video Section - moved from hero */}
          <VideoSection />
          
          {/* Journal Preview - high intent signal */}
          <JournalPreview />
          
          <PricingSection onMethodologyClick={() => setShowMethodologyModal(true)} />
          
          <CryptoGuaranteeSection />
          
          {/* FAQ lazy loaded as it's below the fold */}
          <Suspense fallback={<div className="h-40" />}>
            <FAQ />
          </Suspense>
          
          {/* Single final CTA - removed duplicate CtaSection */}
          <FinalCtaSection />
        </main>
        
        {/* Exit intent popup for recovery */}
        <ExitIntentPopup 
          isOpen={showExitPopup}
          onClose={() => setShowExitPopup(false)}
        />
        
        
        {/* Methodology Modal */}
        <MethodologyModal 
          isOpen={showMethodologyModal}
          onClose={() => setShowMethodologyModal(false)}
        />
      </div>
    </ErrorBoundary>
  );
}

export default CryptoPage; 