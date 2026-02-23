import React from 'react';
import HeroSection from './components/HeroSection';
import SocialProofBar from './components/SocialProofBar';
import ProgramsSection from './components/ProgramsSection';
import TrustSection from './components/TrustSection';
import FinalCTA from './components/FinalCTA';
import Seo from '../../components/Seo';
import { Disclaimer } from '../../components/Disclaimer';
import QuizModal from '../../components/QuizModal';
import QuizStickyBar from '../../components/QuizStickyBar';
import { useQuizModal } from '../../hooks/useQuizModal';

const HomePage: React.FC = () => {
  const { isOpen, source, showStickyBar, openQuiz, closeQuiz } = useQuizModal({
    enableExitIntent: true,
    enableStickyBar: true,
    stickyBarThreshold: 30,
  });

  return (
    <>
      <Seo
        title="TWS Gurukul - Stop Gambling. Start Dominating. | 10,847+ Success Stories"
        description="Join India's most trusted trading education platform by Sidhant. Choose from Crypto Mastery, Footprint Analysis, or Elite Mentorship. 89% student success rate."
        keywords="trading courses india, crypto trading course, footprint trading, elite trading mentorship, sidhant gurukul, TWS gurukul"
      />
      <div className="min-h-screen">
        <HeroSection onQuizOpen={() => openQuiz('hero')} />
        <SocialProofBar />
        <ProgramsSection onQuizOpen={() => openQuiz('program_card')} />
        <TrustSection />
        <FinalCTA onQuizOpen={() => openQuiz('cta')} />

        <div className="bg-deep-slate">
          <div className="max-w-4xl mx-auto px-4 pb-8">
            <Disclaimer type="footer" />
          </div>
        </div>
      </div>

      <QuizModal isOpen={isOpen} onClose={closeQuiz} source={source} />
      <QuizStickyBar show={showStickyBar} onClick={() => openQuiz('sticky_bar')} />
    </>
  );
};

export default HomePage;
