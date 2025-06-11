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
import ConsultationFormModal from './components/ConsultationFormModal';
import WhatsppFloatingButton from './components/WhatsppFloatingButton';
import ExitIntentPopup from './components/ExitIntentPopup';

// Assuming this hook exists
import { useCountdown } from './hooks/useCountdown';
import { useExitIntent } from './hooks/useExitIntent';

function CryptoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
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
        <AnnouncementBar timeLeft={timeLeft} />
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          handleSmoothScroll={handleSmoothScroll} 
        />
        <TrustBadgesBar />
        <main>
          <HeroSection 
            handleSmoothScroll={handleSmoothScroll} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setShowConsultationForm={setShowConsultationForm}
          />
          <WhyCryptoSection />
          <ProblemSection />
          <InstructorSection handleSmoothScroll={handleSmoothScroll} />
          <CurriculumSection />
          <TestimonialsSection handleSmoothScroll={handleSmoothScroll} />
          <CtaSection />
          <FAQ setShowConsultationForm={setShowConsultationForm} />
          <FinalCtaSection />
        </main>
        <Footer />
        <ConsultationFormModal
          isVisible={showConsultationForm}
          onClose={() => setShowConsultationForm(false)}
        />
        <WhatsppFloatingButton />
        <ExitIntentPopup 
          isOpen={showExitPopup}
          onClose={() => setShowExitPopup(false)}
        />
      </div>
    </ErrorBoundary>
  );
}

export default CryptoPage; 