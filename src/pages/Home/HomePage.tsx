import React from 'react';
import HeroSection from './components/HeroSection';
import AuthorityStrip from './components/AuthorityStrip';
import ProgramQuiz from './components/ProgramQuiz';
import CredibilitySection from './components/CredibilitySection';
import StudentResults from './components/StudentResults';
import CTASection from './components/CTASection';
import Seo from '../../components/Seo';
import { Disclaimer } from '../../components/Disclaimer';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="TWS Gurukul - Learn Profitable Trading from Sidhant | 10,847+ Success Stories"
        description="Join India's most trusted trading education platform by Sidhant. Choose from Crypto Mastery (beginners), Footprint Analysis (advanced), or Elite Mentorship (live trading). 89% student success rate."
        keywords="trading courses india, crypto trading course, footprint trading, elite trading mentorship, sidhant gurukul, TWS gurukul"
      />
      <div className="min-h-screen bg-black">
        {/* Hero - Introduce Sidhant & TWS Gurukul */}
        <HeroSection />
        
        {/* Authority Strip - Media & Creator Features */}
        <AuthorityStrip />
        
        {/* Quiz - Primary conversion tool */}
        <ProgramQuiz />
        
        {/* Results - Student success stories (build trust before showing programs) */}
        <StudentResults />
        
        {/* Credibility - Why learn from Sidhant */}
        <CredibilitySection />
        
        {/* CTA - Book consultation call */}
        <CTASection />
        
        {/* Disclaimer for success rates */}
        <div className="container mx-auto px-4 pb-8">
          <Disclaimer type="footer" />
        </div>
      </div>
    </>
  );
};

export default HomePage;