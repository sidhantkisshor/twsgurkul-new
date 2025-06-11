import React from 'react';
import Header from './components/Header';
import BrutalTruthSection from './components/BrutalTruthSection';
import GurukulSection from './components/GurukulSection';
import FeaturedProgramsSection from './components/FeaturedProgramsSection';
import AudienceSection from './components/AudienceSection';
import CallToActionSection from './components/CallToActionSection';
import Seo from '../../components/Seo';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo 
        title="TWS Gurukul - Stop Gambling. Start Dominating."
        description="Transform from a struggling trader to a market master in 90 days. TWS Gurukul offers live mentorship, psychology rewiring, and multi-market mastery."
      />
      <main className="container mx-auto px-6 py-12 text-center">
        <Header />
        <hr className="my-12 border-gray-700" />
        <BrutalTruthSection />
        <hr className="my-12 border-gray-700" />
        <GurukulSection />
        <hr className="my-12 border-gray-700" />
        <FeaturedProgramsSection />
        <hr className="my-12 border-gray-700" />
        <AudienceSection />
        <hr className="my-12 border-gray-700" />
        <CallToActionSection />
      </main>
    </>
  );
};

export default HomePage; 