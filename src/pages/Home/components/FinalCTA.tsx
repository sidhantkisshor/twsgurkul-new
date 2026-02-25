import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

interface FinalCTAProps {
  onQuizOpen: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onQuizOpen }) => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-28 px-4 overflow-hidden bg-warm-white">
      {/* Subtle amber radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burnt-amber/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Headline -outcome-specific, not generic */}
        <h2
          className="text-3xl sm:text-4xl md:text-[3.25rem] leading-tight mb-5 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <span className="font-sans font-bold text-deep-slate">30 days from now, you&apos;ll </span>
          <span className="font-serif italic font-normal text-burnt-amber">wish</span>
          <span className="font-sans font-bold text-deep-slate"> you started today</span>
        </h2>

        {/* Subtitle -urgency + benefit */}
        <p
          className="text-base sm:text-lg text-deep-slate/50 mb-8 font-sans max-w-lg mx-auto leading-relaxed transition-all duration-700 ease-out delay-150"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          Take a 2-minute quiz. We&apos;ll tell you exactly which program fits your experience, budget, and goals.
        </p>

        {/* Mini testimonial */}
        <div
          className="inline-block bg-deep-slate/[0.03] border border-deep-slate/[0.06] rounded-xl px-5 py-3 mb-10 transition-all duration-700 ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <p className="text-sm text-deep-slate/50 font-sans italic">
            &ldquo;I was skeptical. Took the quiz, joined Crypto Mastery, made ₹1.4L in month 2.&rdquo;
            <span className="not-italic font-medium text-deep-slate/60"> -Ankit, Bangalore</span>
          </p>
        </div>

        {/* CTA */}
        <div
          className="transition-all duration-700 ease-out delay-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <button
            onClick={onQuizOpen}
            className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(200,117,51,0)] group-hover:shadow-[0_0_40px_rgba(200,117,51,0.3)] transition-shadow duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Start My 30-Day Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Trust line */}
        <p
          className="text-[13px] text-deep-slate/30 mt-6 font-sans transition-all duration-700 ease-out delay-[450ms]"
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          Free quiz &middot; No email needed &middot; 7-day refund policy
        </p>

        {/* Batch info */}
        <div
          className="mt-6 inline-flex items-center gap-2 bg-deep-slate/[0.04] border border-deep-slate/[0.06] rounded-full px-5 py-2 transition-all duration-700 ease-out delay-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wealth-teal/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wealth-teal" />
          </span>
          <span className="text-[13px] font-sans">
            <span className="font-semibold text-deep-slate/60">
              Enrolling now
            </span>
            <span className="text-deep-slate/40"> -instant access after payment</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
