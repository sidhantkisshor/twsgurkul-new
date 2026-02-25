import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import Seo from '../../components/Seo';
import JsonLd, { cryptoCourseSchema, buildBreadcrumbSchema, buildVideoSchema } from '../../components/StructuredData';
import QuizWelcomeBanner from '../../components/QuizWelcomeBanner';
import './styles/crypto.css'; // consolidated: tokens + design system + hero + components

// Core components loaded immediately
import ErrorBoundary from './components/ErrorBoundary';
import HeaderMinimal from './components/HeaderMinimal';
import HeroSectionReimagined from './components/HeroSectionReimagined';
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
import Footer from './components/Footer';
import TargetingSection from './components/TargetingSection';
import ObjectionKiller from './components/ObjectionKiller';
import WhatsAppButton from './components/WhatsAppButton';
import RawProofSection from './components/RawProofSection';
import ScrollDepthStickyBar from './components/ScrollDepthStickyBar';

// Lazy load secondary components for performance
const TrustBadgesBar = lazy(() => import('./components/TrustBadgesBar'));
const FAQ = lazy(() => import('./components/FAQ'));

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
          canonicalUrl="https://www.twsgurukul.com/crypto"
          ogImage="https://www.twsgurukul.com/og-image.jpg"
        />
        <JsonLd data={[
          cryptoCourseSchema,
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.twsgurukul.com/' },
            { name: 'Crypto Mastery', url: 'https://www.twsgurukul.com/crypto' },
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

          <TestimonialsSection
            onMethodologyClick={() => setShowMethodologyModal(true)}
          />

          {/* Raw WhatsApp-style proof from community */}
          <RawProofSection />

          {/* Video Section */}
          <VideoSection />

          {/* Journal Preview - high intent signal */}
          <JournalPreview />

          {/* Objection handling + guarantee + FAQ BEFORE pricing */}
          <ObjectionKiller />

          <CryptoGuaranteeSection />

          <Suspense fallback={<div className="h-40" />}>
            <FAQ />
          </Suspense>

          {/* Pricing after all objections handled */}
          <PricingSection onMethodologyClick={() => setShowMethodologyModal(true)} />

          {/* Single final CTA */}
          <FinalCtaSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating WhatsApp button */}
        <WhatsAppButton />

        {/* Scroll-depth sticky bar — cohort urgency + bonus reminder */}
        <ScrollDepthStickyBar />

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