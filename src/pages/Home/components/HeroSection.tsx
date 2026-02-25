import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onQuizOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onQuizOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Layered background — Deep Slate base with warm gradient atmosphere */}
      <div className="absolute inset-0 bg-[#1a2024]" />
      <div className="absolute inset-0 bg-linear-to-b from-deep-slate via-[#1e2a2f] to-[#0f1519]" />

      {/* Warm amber glow — top center */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-burnt-amber/[0.07] rounded-full blur-[150px] pointer-events-none" />

      {/* Secondary teal glow — bottom right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-wealth-teal/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal rule accent line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-burnt-amber/10 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Pain-first opener — names the reader's current situation */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-[13px] sm:text-sm tracking-[0.15em] uppercase text-red-400/70 mb-8 font-sans font-medium">
            Still losing money on random tips &amp; YouTube strategies?
          </p>
        </div>

        {/* Main headline — identity attack + transformation */}
        <h1 className="mb-7">
          <span
            className="block text-[clamp(1.6rem,5vw,2.8rem)] font-medium text-soft-sand/50 font-sans leading-[1.3] mb-3 transition-all duration-700 ease-out delay-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            You&apos;re not a bad trader.
          </span>
          <span
            className="block text-[clamp(2.2rem,7vw,5rem)] font-bold text-white font-sans leading-[1.08] transition-all duration-700 ease-out delay-200"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            You just don&apos;t have
          </span>
          <span
            className="block text-[clamp(2.2rem,7vw,5rem)] font-serif italic font-normal text-burnt-amber leading-[1.08] mt-1 transition-all duration-700 ease-out delay-[350ms]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            a system.
          </span>
        </h1>

        {/* Micro social proof — above the fold */}
        <div
          className="flex items-center justify-center gap-3 mb-7 transition-all duration-700 ease-out delay-[400ms]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wealth-teal/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wealth-teal" />
          </span>
          <p className="text-sm text-soft-sand/70 font-sans">
            <span className="text-soft-sand/90 font-semibold">10,847+</span> traders already profitable
          </p>
        </div>

        {/* Transformation subheadline — specific outcome + timeframe */}
        <p
          className="text-base sm:text-lg text-soft-sand/55 max-w-lg mx-auto mb-10 leading-relaxed font-sans font-normal transition-all duration-700 ease-out delay-500"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          In 30–90 days, go from bleeding capital on guesswork to
          <span className="text-burnt-amber font-semibold"> consistent ₹1L–₹25L/month </span>
          with a rule-based system built by a 12-year pro.
        </p>

        {/* CTA */}
        <div
          className="transition-all duration-700 ease-out delay-[600ms]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            onClick={onQuizOpen}
            className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(200,117,51,0)] group-hover:shadow-[0_0_40px_rgba(200,117,51,0.35)] transition-shadow duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Find My Profit Path
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <p className="text-[13px] text-soft-sand/50 mt-5 font-sans">
            Free &middot; 2 minutes &middot; Join 10,847+ profitable traders
          </p>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-warm-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
