import React, { lazy, Suspense } from 'react';
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

  return (
    <>
      <Seo
        title="TWS GurukulX — Losing Money Trading? Get a System That Works | 10,847+ Profitable Traders"
        description="Stop bleeding capital on random tips. Learn the exact rule-based trading system that turned 10,847+ Indian traders profitable in 30–90 days. Crypto, Footprint, and Elite Mentorship programs."
        keywords="trading courses india, crypto trading course, footprint trading, elite trading mentorship, sidhant gurukul, TWS gurukulX, learn trading india"
        canonicalUrl="https://www.twsgurukul.com/"
        ogImage="https://www.twsgurukul.com/og-image.jpg"
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
