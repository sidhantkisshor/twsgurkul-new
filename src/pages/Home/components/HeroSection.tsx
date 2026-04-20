import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../../../constants';

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
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Layered background — Deep Slate base with warm gradient atmosphere */}
      <div className="absolute inset-0 bg-[#1a2024]" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-b from-deep-slate via-[#1e2a2f] to-[#0f1519]" aria-hidden="true" />

      {/* Warm amber glow — top center. `contain: paint` isolates the blur from neighbouring
          paint operations so mid-range Android doesn't re-composite the whole hero on scroll. */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-burnt-amber/[0.07] rounded-full blur-[150px] pointer-events-none"
        style={{ contain: 'paint', willChange: 'auto' }}
        aria-hidden="true"
      />

      {/* Secondary teal glow — bottom right */}
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-wealth-teal/[0.04] rounded-full blur-[120px] pointer-events-none"
        style={{ contain: 'paint', willChange: 'auto' }}
        aria-hidden="true"
      />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal rule accent line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-burnt-amber/10 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Pain-first opener — names the reader's current situation */}
        <div
          className="transition-all duration-700 ease-out motion-reduce:transition-none"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-[13px] sm:text-sm tracking-[0.15em] uppercase text-red-400 mb-8 font-sans font-medium">
            Still losing money on YouTube tips &amp; Telegram calls?
          </p>
        </div>

        {/* LCP candidate — paint immediately, no opacity gate. Entrance animation stays for non-LCP lines. */}
        <h1 className="mb-7">
          <span className="block text-[clamp(1.7rem,5.5vw,2.8rem)] font-medium text-soft-sand/75 font-sans leading-[1.3] mb-3">
            You&apos;re not a bad trader.
          </span>
          <span className="block text-[clamp(2.4rem,8.5vw,5rem)] font-bold text-white font-sans leading-[1.08]">
            You just don&apos;t have
          </span>
          <span className="block text-[clamp(2.4rem,8.5vw,5rem)] font-serif italic font-normal text-burnt-amber leading-[1.08] mt-1">
            a system.
          </span>
        </h1>

        {/* Micro social proof — above the fold */}
        <div
          className="flex items-center justify-center gap-3 mb-6 transition-all duration-700 ease-out delay-[400ms] motion-reduce:transition-none"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <span className="relative flex h-2 w-2 motion-reduce:animate-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wealth-teal/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wealth-teal" />
          </span>
          <p className="text-sm text-soft-sand/80 font-sans">
            <span className="text-soft-sand font-bold">10,847+</span> students trained since 2023
          </p>
        </div>

        {/* Transformation subheadline — simpler English for T2 readers */}
        <p
          className="text-base sm:text-lg text-soft-sand/80 max-w-lg mx-auto mb-4 leading-relaxed font-sans font-normal transition-all duration-700 ease-out delay-500 motion-reduce:transition-none"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          In 30 to 90 days, stop trading on guesswork. Learn the rules our students use to aim for
          <span className="text-amber-bright font-bold"> ₹1L–₹5L/month</span>
          <sup className="text-soft-sand/60 ml-0.5">*</sup>. Built by a trader with 12 years of experience.
        </p>

        {/* Inline SEBI / claim disclaimer — required when the claim is above-fold */}
        <p className="text-[11px] text-soft-sand/55 max-w-md mx-auto mb-8 font-sans leading-snug">
          *Typical student range (self-reported). Individual results vary. Education only — not SEBI-registered investment advice.
        </p>

        {/* Primary CTA */}
        <div
          className="transition-all duration-700 ease-out delay-[600ms] motion-reduce:transition-none"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            type="button"
            onClick={onQuizOpen}
            className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] motion-reduce:hover:scale-100 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a2024] focus-visible:ring-amber-bright"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(200,117,51,0)] group-hover:shadow-[0_0_40px_rgba(200,117,51,0.35)] transition-shadow duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Take the 2-Min Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <p className="text-[13px] text-soft-sand/70 mt-5 font-sans">
            Free &middot; 2 minutes &middot; We match you to the right program
          </p>

          {/* WhatsApp secondary CTA — T2 buyers treat "no WhatsApp = suspicious".
              Lower-commitment path for the skeptical reader who isn't ready for the quiz yet. */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-[13px] text-soft-sand/80 hover:text-white transition-colors font-sans font-medium underline decoration-soft-sand/30 underline-offset-4 hover:decoration-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2024] rounded"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
            Or chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom fade to next section — shortened so the fold isn't compressed by a dead band */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-warm-white to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
