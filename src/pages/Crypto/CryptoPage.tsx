import React, { useState } from 'react';
import Seo from '../../components/Seo';

// Assuming these components are in the specified path
import ErrorBoundary from './components/ErrorBoundary';
import FloatingTrustIndicators from './components/FloatingTrustIndicators';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import TrustBadgesBar from './components/TrustBadgesBar';
import HeroSection from './components/HeroSection';
import WhyCryptoSection from './components/WhyCryptoSection';
import ProblemSection from './components/ProblemSection';
import InstructorSection from './components/InstructorSection';
import CurriculumSection from './components/CurriculumSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import FAQ from './components/FAQ';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import CredibilitySection from './components/CredibilitySection';
import LiveMarketTicker from './components/LiveMarketTicker';
import ProfitCounter from './components/ProfitCounter';
import PortfolioShowcase from './components/PortfolioShowcase';
import TradingChartPreview from './components/TradingChartPreview';
import CryptoSuccessStats from './components/CryptoSuccessStats';
import CryptoGuaranteeSection from './components/CryptoGuaranteeSection';

// Assuming this hook exists
import { useCountdown } from './hooks/useCountdown';
import { useExitIntent } from './hooks/useExitIntent';

function CryptoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeLeft = useCountdown();
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  const handleSmoothScroll = (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Also close the menu on navigation
    setIsMenuOpen(false);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-900 text-white font-sans shadow-lg overflow-x-hidden">
        <Seo
          title="Crypto Market Mastery | TWS Gurukul"
          description="Navigate the volatile crypto markets like a pro. Learn our proven strategies to master crypto trading and achieve financial freedom."
        />
        <FloatingTrustIndicators />
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          handleSmoothScroll={handleSmoothScroll} 
        />
        <AnnouncementBar timeLeft={timeLeft} />
        <main>
          <HeroSection 
            handleSmoothScroll={handleSmoothScroll} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <LiveMarketTicker />
          <TrustBadgesBar />
          <ProfitCounter />
          <WhyCryptoSection />
          <CryptoSuccessStats />
          <ProblemSection />
          <UniqueMechanismSection />
          <TradingChartPreview />
          <PortfolioShowcase />
          <CredibilitySection />
          <InstructorSection handleSmoothScroll={handleSmoothScroll} />
          <CurriculumSection />
          <TestimonialsSection handleSmoothScroll={handleSmoothScroll} />
          <CtaSection />
          <CryptoGuaranteeSection />
          <FAQ />
          <FinalCtaSection />
        </main>
        <Footer />
        <ExitIntentPopup 
          isOpen={showExitPopup}
          onClose={() => setShowExitPopup(false)}
        />
      </div>
    </ErrorBoundary>
  );
}

export default CryptoPage; 