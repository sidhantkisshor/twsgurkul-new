import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import Seo from '../../components/Seo';
import JsonLd, { cryptoCourseSchema, buildBreadcrumbSchema, buildVideoSchema } from '../../components/StructuredData';
import QuizWelcomeBanner from '../../components/QuizWelcomeBanner';
import './styles/crypto.css'; // consolidated: tokens + design system + hero + components

// Above-fold: render synchronously so the LCP section is never gated on a chunk fetch.
import ErrorBoundary from './components/ErrorBoundary';
import HeaderMinimal from './components/HeaderMinimal';
import HeroSectionReimagined from './components/HeroSectionReimagined';
import TargetingSection from './components/TargetingSection';
import ProblemSection from './components/ProblemSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import InstructorSectionSimplified from './components/InstructorSectionSimplified';
import CryptoGuaranteeSection from './components/CryptoGuaranteeSection';

// Floating / always-mounted: small, low cost.
import ReturningUserCheckout from './components/ReturningUserCheckout';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollDepthStickyBar from './components/ScrollDepthStickyBar';

// Below-fold: lazy-load to cut the initial chunk. Each has a fixed-height
// fallback to reserve layout space and prevent CLS as sections hydrate.
const TrustBadgesBar = lazy(() => import('./components/TrustBadgesBar'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const RawProofSection = lazy(() => import('./components/RawProofSection'));
const VideoSection = lazy(() => import('./components/VideoSection'));
const JournalPreview = lazy(() => import('./components/JournalPreview'));
const ObjectionKiller = lazy(() => import('./components/ObjectionKiller'));
const FAQ = lazy(() => import('./components/FAQ'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FinalCtaSection = lazy(() => import('./components/FinalCtaSection'));
const Footer = lazy(() => import('./components/Footer'));

// Modals / popups: load only when opened.
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));
const MethodologyModal = lazy(() => import('./components/MethodologyModal'));

// Hooks
import { useExitIntent } from './hooks/useExitIntent';

// Tracking
import { initScrollTracking, trackTimeOnPage } from './utils/tracking';

function CryptoPage() {
  const [showMethodologyModal, setShowMethodologyModal] = useState(false);
  // Prevent popup stacking: suppress exit intent while returning-user checkout is visible
  const [returningUserVisible, setReturningUserVisible] = useState(false);
  const handleReturningUserVisibility = useCallback((visible: boolean) => setReturningUserVisible(visible), []);
  const { showExitPopup, setShowExitPopup } = useExitIntent(returningUserVisible);

  // Initialize tracking
  useEffect(() => {
    const cleanupScroll = initScrollTracking();
    const cleanupTime = trackTimeOnPage();
    return () => {
      cleanupScroll?.();
      cleanupTime();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="crypto-page min-h-screen overflow-x-hidden" style={{ overflowX: 'clip' }}>
        <Seo
          title="Crypto Mastery | TWS GurukulX"
          description="A recorded program with monthly live Q&A to learn systematic crypto trading with risk management at the core."
          canonicalUrl="https://www.twsgurukulx.com/crypto"
          ogImage="https://www.twsgurukulx.com/og-image.jpg"
        />
        <JsonLd data={[
          cryptoCourseSchema,
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.twsgurukulx.com/' },
            { name: 'Crypto Mastery', url: 'https://www.twsgurukulx.com/crypto' },
          ]),
          buildVideoSchema({
            name: 'Crypto Mastery - Trade Review Walkthrough',
            description: 'Watch a real trade review session showing setup logic, risk sizing, and exit planning.',
            thumbnailUrl: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg',
            contentUrl: 'https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-cmm-sidhant-1080.mp4',
            uploadDate: '2025-01-01',
            duration: 'PT5M',
          }),
        ]} />
        
        {/* Minimal header without navigation for conversion focus */}
        <HeaderMinimal />
        
        {/* Announcement bar removed - keeping Q&A date only in hero */}
        {/* <AnnouncementBar timeLeft={timeLeft} /> */}
        
        {/* Returning user quick checkout */}
        <ReturningUserCheckout onVisibilityChange={handleReturningUserVisibility} />
        
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-sm focus:z-50">Skip to content</a>
        <main id="main" className="pt-20">
          {/* Personalized banner for quiz completers */}
          <div className="max-w-4xl mx-auto px-4 pt-4">
            <QuizWelcomeBanner programId="cmm" variant="light" />
          </div>
          {/* Reimagined Hero Section */}
          <HeroSectionReimagined
            onMethodologyClick={() => setShowMethodologyModal(true)}
          />
          
          {/* Trust indicators loaded after hero for performance */}
          <Suspense fallback={<div className="h-20" />}>
            <TrustBadgesBar onMethodologyClick={() => setShowMethodologyModal(true)} />
          </Suspense>

          {/* Targeting: "Is this for you?" — persona match + disqualification */}
          <TargetingSection />

          <ProblemSection />

          <UniqueMechanismSection />

          <InstructorSectionSimplified />

          <Suspense fallback={<div className="min-h-[600px]" />}>
            <TestimonialsSection
              onMethodologyClick={() => setShowMethodologyModal(true)}
            />
          </Suspense>

          {/* Raw WhatsApp-style proof from community */}
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <RawProofSection />
          </Suspense>

          {/* Video Section */}
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <VideoSection />
          </Suspense>

          {/* Journal Preview - high intent signal */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <JournalPreview />
          </Suspense>

          {/* Objection handling + guarantee + FAQ BEFORE pricing */}
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <ObjectionKiller />
          </Suspense>

          <CryptoGuaranteeSection />

          <Suspense fallback={<div className="min-h-[400px]" />}>
            <FAQ />
          </Suspense>

          {/* Pricing after all objections handled */}
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <PricingSection onMethodologyClick={() => setShowMethodologyModal(true)} />
          </Suspense>

          {/* Single final CTA */}
          <Suspense fallback={<div className="min-h-[300px]" />}>
            <FinalCtaSection />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <Footer />
        </Suspense>

        {/* Floating WhatsApp button */}
        <WhatsAppButton />

        {/* Scroll-depth sticky bar — cohort urgency + bonus reminder */}
        <ScrollDepthStickyBar />

        {/* Exit intent popup for recovery. Only load the chunk if we need to render it. */}
        {showExitPopup && (
          <Suspense fallback={null}>
            <ExitIntentPopup
              isOpen={showExitPopup}
              onClose={() => setShowExitPopup(false)}
            />
          </Suspense>
        )}

        {/* Methodology Modal — load the chunk on first open only. */}
        {showMethodologyModal && (
          <Suspense fallback={null}>
            <MethodologyModal
              isOpen={showMethodologyModal}
              onClose={() => setShowMethodologyModal(false)}
            />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default CryptoPage; 