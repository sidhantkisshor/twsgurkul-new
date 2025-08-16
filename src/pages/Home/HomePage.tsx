import React, { Suspense, lazy } from 'react';
import NewHeroSection from './components/NewHeroSection';
import BigProblemSection from './components/BigProblemSection';
import ProgramsOverviewSection from './components/ProgramsOverviewSection';
import CombinedStudentSuccessSection from './components/CombinedStudentSuccessSection';
import UnifiedStickyController from './components/UnifiedStickyController';
import LazyLoadSection from './components/LazyLoadSection';
import Seo from '../../components/Seo';
import { Disclaimer } from '../../components/Disclaimer';
import QuizModal from '../../components/QuizModal';
import QuizStickyBar from '../../components/QuizStickyBar';
import { useQuizModal } from '../../hooks/useQuizModal';

// Lazy load heavy sections
const AuthorityTrustSection = lazy(() => import('./components/AuthorityTrustSection'));
const SimplifiedCTASection = lazy(() => import('./components/SimplifiedCTASection'));

const HomePage: React.FC = () => {
  // Initialize quiz modal with all triggers
  const { isOpen, source, showStickyBar, openQuiz, closeQuiz } = useQuizModal({
    enableExitIntent: true,
    enableStickyBar: true,
    stickyBarThreshold: 30
  });

  return (
    <>
      <Seo 
        title="TWS Gurukul - Learn Profitable Trading from Sidhant | 10,847+ Success Stories"
        description="Join India's most trusted trading education platform by Sidhant. Choose from Crypto Mastery (beginners), Footprint Analysis (advanced), or Elite Mentorship (live trading). 89% student success rate."
        keywords="trading courses india, crypto trading course, footprint trading, elite trading mentorship, sidhant gurukul, TWS gurukul"
      />
      <div className="min-h-screen bg-black">
        {/* Unified Sticky Controller */}
        <UnifiedStickyController onQuizOpen={() => openQuiz('sticky')} />
        
        {/* MULTI-PROGRAM HOMEPAGE FLOW */}
        
        {/* 1. Platform Hero - Brand & Programs Introduction */}
        <div id="hero">
          <NewHeroSection onQuizOpen={() => openQuiz('hero')} />
        </div>
        
        {/* 2. Universal Problem - Why Traders Fail */}
        <div id="problem">
          <BigProblemSection onQuizOpen={() => openQuiz('problem')} />
        </div>
        
        {/* 3. Programs Overview - 3 Paths to Success */}
        <div id="programs">
          <ProgramsOverviewSection onQuizOpen={() => openQuiz('program_card')} />
        </div>
        
        {/* 4. Platform Authority - Sidhant & TWS Credibility */}
        <LazyLoadSection>
          <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
            <AuthorityTrustSection onQuizOpen={() => openQuiz('authority')} />
          </Suspense>
        </LazyLoadSection>
        
        {/* 5. Success Stories - Results Across All Programs */}
        <div id="success">
          <CombinedStudentSuccessSection onQuizOpen={() => openQuiz('success')} />
        </div>
        
        {/* 6. Final CTA - Start Your Journey */}
        <div id="cta">
          <LazyLoadSection>
            <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
              <SimplifiedCTASection onQuizOpen={() => openQuiz('cta')} />
            </Suspense>
          </LazyLoadSection>
        </div>
        
        {/* Disclaimer for success rates */}
        <div className="container mx-auto px-4 pb-8">
          <Disclaimer type="footer" />
        </div>
      </div>

      {/* Quiz Modal */}
      <QuizModal 
        isOpen={isOpen} 
        onClose={closeQuiz} 
        source={source}
      />

      {/* Quiz Sticky Bar */}
      <QuizStickyBar
        show={showStickyBar}
        onClick={() => openQuiz('sticky_bar')}
      />
    </>
  );
};

export default HomePage;