import React, { lazy, Suspense, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SocialProofBar from './components/SocialProofBar';
import TargetingSection from './components/TargetingSection';
import MechanismSection from './components/MechanismSection';
import RawProofWall from './components/RawProofWall';
import ProgramsSection from './components/ProgramsSection';
import TrustSection from './components/TrustSection';
import CostOfWaitingSection from './components/CostOfWaitingSection';
import FinalCTA from './components/FinalCTA';
import Seo from '../../components/Seo';
import { Disclaimer } from '../../components/Disclaimer';
import QuizStickyBar from '../../components/QuizStickyBar';
import { useQuizModal } from '../../hooks/useQuizModal';
import JsonLd, { organizationSchema, webSiteSchema } from '../../components/StructuredData';

// Lazy load quiz — 35KB chunk deferred until user interacts
const UnifiedQuiz = lazy(() =>
  import('../../components/UnifiedQuiz').then(m => ({ default: m.UnifiedQuiz }))
);

const HomePage: React.FC = () => {
  const { isOpen, source, showStickyBar, openQuiz, closeQuiz } = useQuizModal({
    enableExitIntent: true,
    enableStickyBar: true,
    stickyBarThreshold: 50,
  });

  // Open the quiz automatically when another page deep-links to Home with ?quiz=open
  // (e.g. Navbar CTA clicked while visiting /crypto).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('quiz') === 'open') {
      openQuiz('navbar_deeplink');
      const url = new URL(window.location.href);
      url.searchParams.delete('quiz');
      window.history.replaceState({}, '', url.toString());
    }
  }, [openQuiz]);

  return (
    <>
      <Seo
        title="TWS GurukulX | Learn a Simple Trading System | 10,847+ Students Trained"
        description="Losing money on YouTube tips and Telegram calls? Learn the rule-based trading system used by 10,847+ students. Crypto Mastery, Footprint Trading, and Elite Mentorship (waitlist) programs. Education only. Not SEBI-registered investment advice."
        canonicalUrl="https://www.twsgurukulx.com/"
        ogType="website"
        ogImage="https://www.twsgurukulx.com/og-image.jpg"
      />
      <JsonLd data={[organizationSchema, webSiteSchema]} />

      {/* Psychological sequence: Pain → Targeting → Mechanism → Proof → Programs → Trust → Urgency → CTA */}
      <div className="min-h-screen">
        <HeroSection onQuizOpen={() => openQuiz('hero')} />
        <SocialProofBar />
        <TargetingSection />
        <MechanismSection />
        <RawProofWall />
        <ProgramsSection onQuizOpen={() => openQuiz('program_card')} />
        <TrustSection />
        <CostOfWaitingSection onQuizOpen={() => openQuiz('cost_of_waiting')} />
        <FinalCTA onQuizOpen={() => openQuiz('cta')} />

        {/* Footer disclaimer */}
        <div className="bg-warm-white">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Disclaimer type="footer" />
          </div>
        </div>
      </div>

      {isOpen && (
        <Suspense fallback={null}>
          <UnifiedQuiz mode="modal" isOpen={isOpen} onClose={closeQuiz} source={source} />
        </Suspense>
      )}
      <QuizStickyBar show={showStickyBar} onClick={() => openQuiz('sticky_bar')} />
    </>
  );
};

export default HomePage;
