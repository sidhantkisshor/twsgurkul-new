import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onQuizOpen: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onQuizOpen }) => {
  return (
    <section className="py-24 sm:py-32 px-4 bg-deep-slate">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-6 leading-tight">
          Ready to transform your trading?
        </h2>

        {/* Subtitle */}
        <p className="text-base text-soft-sand/70 mb-10 font-sans max-w-md mx-auto">
          Take a 30-second quiz to find your perfect program
        </p>

        {/* CTA - Burnt Amber primary */}
        <button
          onClick={onQuizOpen}
          className="group inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-8 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,117,51,0.3)]"
        >
          Take the Quiz
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust line */}
        <p className="text-[13px] text-soft-sand/50 mt-6 font-sans">
          No email required · Instant results · 30-Day Money Back
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
