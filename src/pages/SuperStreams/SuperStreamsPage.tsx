import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AuthoritySection from './components/AuthoritySection';
import SocialProofSection from './components/SocialProofSection';
import ProgramOverviewSection from './components/ProgramOverviewSection';
import PricingSection from './components/PricingSection';
import UrgencySection from './components/UrgencySection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import ExitIntentPopup from './components/ExitIntentPopup';
import SocialProofTicker from './components/SocialProofTicker';

const SuperStreamsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Fixed Header with Behavioral Psychology */}
      <Header />
      
      {/* Hero Section with Primary & Secondary CTAs */}
      <HeroSection />
      
      {/* Problem Agitation with Micro-Commitment */}
      <ProblemSection />
      
      {/* Authority/Credibility Section */}
      <AuthoritySection />
      
      {/* Social Proof Section with FOMO */}
      <SocialProofSection />
      
      {/* Program Overview with Value Stacking */}
      <ProgramOverviewSection />
      
      {/* Pricing Section - Critical Conversion Zone */}
      <PricingSection />
      
      {/* Urgency/Scarcity Section with Countdown */}
      <UrgencySection />
      
      {/* FAQ Section with Objection Handling */}
      <FaqSection />
      
      {/* Final CTA Section */}
      <FinalCtaSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Behavioral Psychology Sticky Elements */}
      <FloatingCta />
      <SocialProofTicker />
      <ExitIntentPopup />
    </div>
  );
};

export default SuperStreamsPage; 