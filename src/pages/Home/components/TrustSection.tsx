import React from 'react';
import { Award, Mic2, GraduationCap } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const credentials = [
  { icon: GraduationCap, label: 'IIT Bombay', detail: 'Guest Faculty - Trading & Markets' },
  { icon: Mic2, label: 'TEDx Speaker', detail: 'Decoding Market Psychology' },
  { icon: Award, label: '12+ Years', detail: 'Full-Time Professional Trader' },
];

const TrustSection: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative py-20 sm:py-24 px-4 overflow-hidden">
      {/* Layered dark background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a2024] via-deep-slate to-[#1a2024]" />

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brushed-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Photo + intro */}
        <div
          className="flex flex-col items-center mb-10 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-brushed-gold/60 mb-6 font-sans font-medium">
            The Mind Behind the System
          </p>
          <div className="relative w-36 h-48 sm:w-40 sm:h-56 rounded-2xl mb-6 overflow-hidden border-2 border-brushed-gold/20 shadow-[0_0_60px_rgba(184,149,106,0.12)]">
            <img
              src="/sidhant-casino-chips.png"
              alt="Sidhant — Founder of TWS GurukulX, professional trader and IIT Bombay guest faculty"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            <span className="font-sans font-bold">Built by </span>
            <span className="font-serif italic font-normal text-brushed-gold">Sidhant</span>
          </h2>
          <p className="text-base text-soft-sand/60 font-sans max-w-lg mx-auto leading-relaxed text-center">
            IIT Bombay guest faculty. TEDx speaker. 12+ years in the markets.
            Every program is built on his trading principles and risk-first methodology.
          </p>
        </div>

        {/* Sidhant's quote */}
        <div
          className="text-center mb-12 transition-all duration-700 ease-out delay-100"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <blockquote className="text-lg sm:text-xl text-soft-sand/60 font-serif italic max-w-md mx-auto leading-relaxed">
            &ldquo;I don&apos;t sell hope. I teach a system. Follow the system, and the money follows you.&rdquo;
          </blockquote>
        </div>

        {/* Credentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.label}
                className="text-center py-6 px-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-600 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + i * 100}ms`,
                }}
              >
                <Icon className="w-5 h-5 text-brushed-gold/70 mx-auto mb-3" />
                <div className="text-lg font-bold text-white font-sans mb-0.5">
                  {cred.label}
                </div>
                <div className="text-[13px] text-soft-sand/60 font-sans">
                  {cred.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified results link */}
        <div
          className="text-center transition-all duration-700 ease-out delay-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          </div>
      </div>
    </section>
  );
};

export default React.memo(TrustSection);
