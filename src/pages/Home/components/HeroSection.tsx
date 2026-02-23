import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onQuizOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onQuizOpen }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-deep-slate">
      {/* Subtle warm radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burnt-amber/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand label */}
        <p className="text-sm tracking-[0.3em] uppercase text-soft-sand/60 mb-8 font-sans">
          TWS Gurukul
        </p>

        {/* Main headline */}
        <h1 className="mb-8">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-sans leading-[1.1]">
            Stop Gambling.
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-transparent bg-clip-text bg-linear-to-b from-white to-soft-sand leading-[1.1] mt-2">
            Start Dominating.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-soft-sand/80 max-w-xl mx-auto mb-12 leading-relaxed font-sans">
          Transform from a struggling trader to a market master. Choose your path below.
        </p>

        {/* CTA - Burnt Amber primary */}
        <button
          onClick={onQuizOpen}
          className="group inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-8 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,117,51,0.3)]"
        >
          Find Your Perfect Program
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
