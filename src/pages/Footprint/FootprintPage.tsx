import { useEffect, lazy, Suspense } from 'react';
// Above-fold: render synchronously so LCP isn't gated on a chunk fetch.
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import IsThisForYouSection from './components/IsThisForYouSection';
import FrameworkSection from './components/FrameworkSection';
import Seo from '../../components/Seo';
import StickyMobileCTA from './components/StickyMobileCTA';
import StructuredData from './components/StructuredData';
import { useExitIntent } from './hooks/useExitIntent';
import QuizWelcomeBanner from '../../components/QuizWelcomeBanner';
import InlineObjection from './components/InlineObjection';
import { CDN_BASE } from '../../constants';

// Below-fold: lazy-load to shrink the initial chunk. Each has a fixed-height
// fallback to reserve layout space and prevent CLS while chunks hydrate.
const RoadmapSection = lazy(() => import('./components/RoadmapSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const Footer = lazy(() => import('./components/Footer'));
const SocialProofToast = lazy(() => import('./components/SocialProofToast'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));
const ShowPartnerSection = lazy(() => import('./components/ShowPartnerSection'));
const CostOfWaitingSection = lazy(() => import('./components/CostOfWaitingSection'));
const AntiScamSection = lazy(() => import('./components/AntiScamSection'));
const PricingComparison = lazy(() => import('./components/PricingComparison'));
const VideoSection = lazy(() => import('./components/VideoSection'));

// Static style object hoisted outside component to avoid re-creation per render
const noiseOverlayStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
  backgroundSize: '256px 256px'
} as const;

function FootprintPage() {
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1A2226] text-white font-sans overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-sm focus:z-50">Skip to content</a>
      {/* Noise overlay for depth */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={noiseOverlayStyle}
      />
      <Header />
      <StructuredData />
      <Seo
        title="Footprint Mastery | TWS GurukulX"
        description="Learn footprint chart analysis to see institutional order flow before it hits the chart. Plan clean entries, manage risk, and exit with rules. Self-paced course with monthly live Q&A."
        ogImage="https://www.twsgurukulx.com/footprint-og.jpg"
        ogType="product"
        productPriceAmount={32999}
        productPriceCurrency="INR"
        canonicalUrl="https://www.twsgurukulx.com/footprint"
      />
      <div>
        <main id="main" className="pb-24 md:pb-0">
          <div className="max-w-4xl mx-auto px-4 pt-4">
            <QuizWelcomeBanner programId="footprint" />
          </div>
          <HeroSection />

          {/* Trust Stripe */}
          <div className="bg-[#2C3539] border-y border-[#3A4449]/40 py-3">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#D0C5B4]">
                <div className="flex items-center gap-2">
                  <img src={`${CDN_BASE}/assets/images/brand/icons/tws-gurukulx-icon-512.webp`} alt="TWS GurukulX" loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0" />
                  <span>TWS GurukulX since 2023</span>
                </div>
                <span className="hidden sm:inline text-[#B8A99A]/60">·</span>
                <span>1,263+ paid learners</span>
                <span className="hidden sm:inline text-[#B8A99A]/60">·</span>
                <span>Monthly live Q&A</span>
                <span className="hidden sm:inline text-[#B8A99A]/60">·</span>
                <span>7-day refund policy</span>
              </div>
            </div>
          </div>

          <ProblemSection />
          <IsThisForYouSection />

          {/* Inline Objection 1: After targeting */}
          <div className="bg-[#2C3539] py-8">
            <div className="max-w-4xl mx-auto px-4">
              <InlineObjection
                question="Is this just another course I won't finish?"
                answer="Industry completion rate: 15%. Our completion rate: 67%. The difference? Monthly live Q&A sessions and an active WhatsApp community that keeps you accountable. You're not alone in this."
                variant="emphasis"
              />
            </div>
          </div>

          <FrameworkSection />

          {/* What You'll Learn — moved AFTER mechanism as per audit recommendation */}
          <div className="bg-[#1A2226] py-10 sm:py-14">
            <div className="max-w-3xl mx-auto px-4">
              <div className="bg-[#232B2F] rounded-xl p-5 sm:p-6 border border-[#3A4449] space-y-3">
                <h3 className="text-sm font-semibold text-[#D4943F] uppercase tracking-wider mb-3">What You'll Learn</h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {[
                    { bold: "Footprint reading:", text: " see what the big players are doing, live" },
                    { bold: "Delta confirmation:", text: " verify if the trend is real or a trap" },
                    { bold: "Liquidity zones:", text: " know where stop-loss hunts will happen" },
                    { bold: "Entry rules:", text: " 1-page checklist with entry, SL, and target defined" },
                    { bold: "Trade journal:", text: " review every trade, improve every week" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-2 shrink-0" />
                      <div>
                        <span className="font-medium text-white">{item.bold}</span>
                        <span className="text-[#D0C5B4] text-sm leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Suspense fallback={<div className="min-h-[500px]" />}>
            <VideoSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <RoadmapSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <AntiScamSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <TestimonialsSection />
          </Suspense>

          {/* Inline Objection 2: After testimonials */}
          <div className="bg-[#2C3539] py-8">
            <div className="max-w-4xl mx-auto px-4">
              <InlineObjection
                question="Will this work for someone in MY situation?"
                answer="We have students across all demographics: salaried professionals trading 1 hour/day, full-time traders, students, homemakers. The F.A.S.T. framework adapts to your schedule and capital size. What matters is consistent practice, not your current situation."
              />
            </div>
          </div>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <ShowPartnerSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <CostOfWaitingSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <PricingComparison />
          </Suspense>
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <PricingSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <FaqSection />
          </Suspense>
        </main>
      </div>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Footer />
      </Suspense>
      <StickyMobileCTA />
      <Suspense fallback={null}>
        <SocialProofToast />
      </Suspense>
      {showExitPopup && (
        <Suspense fallback={null}>
          <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
        </Suspense>
      )}
    </div>
  );
}

export default FootprintPage;
