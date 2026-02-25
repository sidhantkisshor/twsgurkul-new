import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import TargetingSection from './components/TargetingSection';
import UniqueMechanismSection from './components/UniqueMechanismSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import SocialProofBar from './components/SocialProofBar';

// Lazy-load below-fold components for better initial load performance
const VideoSection = lazy(() => import('./components/VideoSection'));
const LiveDashboardSection = lazy(() => import('./components/LiveDashboardSection'));
const InstructorSection = lazy(() => import('./components/InstructorSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const RawProofSection = lazy(() => import('./components/RawProofSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const ShowPartnerSection = lazy(() => import('./components/ShowPartnerSection'));
const FinalCtaSection = lazy(() => import('./components/FinalCtaSection'));
const SimpleFaqSection = lazy(() => import('./components/SimpleFaqSection'));
const Footer = lazy(() => import('./components/Footer'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));
const MobileStickyQuiz = lazy(() => import('./components/MobileStickyQuiz'));
const FloatingCTA = lazy(() => import('./components/FloatingCTA'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
import { useExitIntent } from './hooks/useExitIntent';
import Seo from '../../components/Seo';
import JsonLd, { mentorshipCourseSchema, buildBreadcrumbSchema, buildVideoSchema } from '../../components/StructuredData';
import QuizWelcomeBanner from '../../components/QuizWelcomeBanner';

const MentorshipPage: React.FC = () => {
  const { showExitIntent, setShowExitIntent } = useExitIntent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Elite Trading Mentorship | Live 8 PM Sessions | TWS GurukulX"
        description="Learn a repeatable 8 PM trading routine with live market sessions and weekly performance reviews. 2,300+ traders trained. Next cohort starts soon."
        ogTitle="Trade The 8 PM Window With Pro Coaches"
        ogDescription="Join a capped cohort, learn the 8 PM liquidity window, and practice it live five nights a week with our certified pro coaches trained in Sidhant's system."
        canonicalUrl="https://www.twsgurukul.com/mentorship"
        ogImage="https://www.twsgurukul.com/og-image.jpg"
      />
      <JsonLd data={[
        mentorshipCourseSchema,
        buildBreadcrumbSchema([
          { name: 'Home', url: 'https://www.twsgurukul.com/' },
          { name: 'Elite Trading Mentorship', url: 'https://www.twsgurukul.com/mentorship' },
        ]),
        buildVideoSchema({
          name: 'Elite Trading Mentorship - Live Session Walkthrough',
          description: 'Watch how a real 8 PM live trading session works. No cuts, no editing.',
          thumbnailUrl: 'https://img.youtube.com/vi/-8zKBbBCfbs/maxresdefault.jpg',
          contentUrl: 'https://www.youtube.com/watch?v=-8zKBbBCfbs',
          uploadDate: '2025-01-01',
          duration: 'PT5M',
        }),
      ]} />
      <div className="min-h-screen bg-warm-white text-deep-slate overflow-x-hidden" style={{ overflowX: 'clip' }}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-sm focus:z-50">Skip to content</a>
        <Header />
        <main id="main">
        <div className="max-w-4xl mx-auto px-4 pt-4">
          <QuizWelcomeBanner programId="elite" variant="light" />
        </div>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <TargetingSection />
        <UniqueMechanismSection />
        <WhatYouGetSection />
        <Suspense fallback={<div className="h-40" />}>
          <VideoSection />
          <LiveDashboardSection />
          <InstructorSection />
          <TestimonialsSection />
          <RawProofSection />
          <PricingSection />
          <ShowPartnerSection />
          <FinalCtaSection />
          <SimpleFaqSection />
        </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
          {showExitIntent && <ExitIntentPopup isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} />}
          <MobileStickyQuiz />
          <FloatingCTA />
          <WhatsAppButton />
        </Suspense>
      </div>
    </>
  );
};

export default MentorshipPage;