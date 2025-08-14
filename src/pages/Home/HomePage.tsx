import React, { Suspense, lazy } from 'react';
import PlatformHeroSection from './components/PlatformHeroSection';
import BigProblemSection from './components/BigProblemSection';
import ProgramsOverviewSection from './components/ProgramsOverviewSection';
import CombinedStudentSuccessSection from './components/CombinedStudentSuccessSection';
import ProgramQuiz from './components/ProgramQuiz';
import UnifiedStickyController from './components/UnifiedStickyController';
import LazyLoadSection from './components/LazyLoadSection';
import Seo from '../../components/Seo';
import { Disclaimer } from '../../components/Disclaimer';

// Lazy load heavy sections
const AuthorityTrustSection = lazy(() => import('./components/AuthorityTrustSection'));
const SimplifiedCTASection = lazy(() => import('./components/SimplifiedCTASection'));

const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="TWS Gurukul - Learn Profitable Trading from Sidhant | 10,847+ Success Stories"
        description="Join India's most trusted trading education platform by Sidhant. Choose from Crypto Mastery (beginners), Footprint Analysis (advanced), or Elite Mentorship (live trading). 89% student success rate."
        keywords="trading courses india, crypto trading course, footprint trading, elite trading mentorship, sidhant gurukul, TWS gurukul"
      />
      <div className="min-h-screen bg-black">
        {/* Unified Sticky Controller */}
        <UnifiedStickyController />
        
        {/* MULTI-PROGRAM HOMEPAGE FLOW */}
        
        {/* 1. Platform Hero - Brand & Programs Introduction */}
        <div id="hero">
          <PlatformHeroSection />
        </div>
        
        {/* 2. Universal Problem - Why Traders Fail */}
        <div id="problem">
          <BigProblemSection />
        </div>
        
        {/* 3. Programs Overview - 3 Paths to Success */}
        <div id="programs">
          <ProgramsOverviewSection />
        </div>
        
        {/* 4. Platform Authority - Sidhant & TWS Credibility */}
        <LazyLoadSection>
          <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
            <AuthorityTrustSection />
          </Suspense>
        </LazyLoadSection>
        
        {/* 5. Success Stories - Results Across All Programs */}
        <div id="success">
          <CombinedStudentSuccessSection />
        </div>
        
        {/* 6. Program Matcher Quiz - Personalized Recommendation */}
        <div id="quiz">
          <ProgramQuiz />
        </div>
        
        {/* 7. Final CTA - Start Your Journey */}
        <div id="cta">
          <LazyLoadSection>
            <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
              <SimplifiedCTASection />
            </Suspense>
          </LazyLoadSection>
        </div>
        
        {/* Disclaimer for success rates */}
        <div className="container mx-auto px-4 pb-8">
          <Disclaimer type="footer" />
        </div>
      </div>
    </>
  );
};

export default HomePage;