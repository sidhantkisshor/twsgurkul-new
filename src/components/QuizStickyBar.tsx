import React from 'react';
import { ArrowRight } from 'lucide-react';

interface QuizStickyBarProps {
  show: boolean;
  onClick: () => void;
}

const QuizStickyBar: React.FC<QuizStickyBarProps> = ({ show, onClick }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-90 transition-transform duration-500 ease-out ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="bg-deep-slate border-t border-burnt-amber/20">
        <div className="container mx-auto px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Journey progress */}
            <div className="flex items-center gap-3 min-w-0">
              {/* Step indicator */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-bold text-burnt-amber bg-burnt-amber/15 px-2 py-0.5 rounded-full font-sans uppercase tracking-wider">
                  Step 1 of 3
                </span>
              </div>

              <div className="min-w-0">
                {/* Desktop text */}
                <p className="text-white font-semibold text-sm font-sans hidden md:block truncate">
                  Find Your Perfect Program
                </p>
                {/* Mobile text */}
                <p className="text-white font-semibold text-sm font-sans md:hidden truncate">
                  Step 1: Find Your Program
                </p>

                {/* Progress dots — desktop only */}
                <div className="hidden md:flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-burnt-amber" />
                  <div className="w-6 h-px bg-soft-sand/20" />
                  <div className="w-1.5 h-1.5 rounded-full border border-soft-sand/30" />
                  <div className="w-6 h-px bg-soft-sand/20" />
                  <div className="w-1.5 h-1.5 rounded-full border border-soft-sand/30" />
                  <span className="text-[10px] text-soft-sand/50 font-sans ml-2">
                    Quiz &rarr; Your Plan &rarr; Start Earning
                  </span>
                </div>
              </div>
            </div>

            {/* Right: CTA button */}
            <button
              onClick={onClick}
              tabIndex={show ? 0 : -1}
              className="flex items-center gap-2 bg-burnt-amber text-white px-5 md:px-6 py-2.5 rounded-full font-bold text-sm font-sans hover:bg-[#d4843f] transition-all hover:scale-105 group shrink-0"
            >
              <span className="hidden md:inline">Start Now</span>
              <span className="md:hidden">Go</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStickyBar;
