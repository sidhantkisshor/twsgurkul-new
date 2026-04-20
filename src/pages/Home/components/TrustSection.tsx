import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Mic2, GraduationCap, ArrowRight } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';
import { CDN_BASE } from '../../../constants';

const credentials = [
  { icon: GraduationCap, label: 'IIT Bombay', detail: 'Guest Faculty - Trading & Markets' },
  { icon: Mic2, label: 'TEDx Speaker', detail: 'Decoding Market Psychology' },
  { icon: Award, label: '12+ Years', detail: 'Full-Time Professional Trader' },
];

const TrustSection: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative py-20 sm:py-24 px-4 overflow-hidden">
      {/* Layered dark background — navy-black tone differentiates this "who built this" section
          from RawProofWall (above) and CostOfWaiting (below), which both use the deep-slate gradient. */}
      <div className="absolute inset-0 bg-linear-to-b from-navy-black via-[#0F1A2E] to-navy-black" />

      {/* Warm glow — dialled up so the gold-on-navy contrast reads as premium, not gloomy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brushed-gold/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Photo + intro */}
        <div
          className="flex flex-col items-center mb-10 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-brushed-gold mb-6 font-sans font-medium">
            Who Built This
          </p>
          <div className="relative w-36 h-48 sm:w-40 sm:h-56 rounded-2xl mb-6 overflow-hidden border-2 border-brushed-gold/20 shadow-[0_0_60px_rgba(184,149,106,0.12)]">
            <img
              src={`${CDN_BASE}/assets/images/brand/raw/sidhant-casino-chips.webp`}
              alt="Sidhant, Founder of TWS GurukulX, professional trader and IIT Bombay guest faculty"
              width={160}
              height={224}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            <span className="font-sans font-bold">Built by </span>
            <span className="font-serif italic font-normal text-brushed-gold">Sidhant</span>
          </h2>
          <p className="text-base text-soft-sand/85 font-sans max-w-lg mx-auto leading-relaxed text-center">
            IIT Bombay guest faculty. TEDx speaker. 12+ years in the markets.
            Every program is built on his trading rules and risk-first method.
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
          <blockquote className="text-lg sm:text-xl text-soft-sand/85 font-serif italic max-w-md mx-auto leading-relaxed">
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
                <Icon className="w-5 h-5 text-brushed-gold mx-auto mb-3" />
                <div className="text-lg font-bold text-white font-sans mb-0.5">
                  {cred.label}
                </div>
                <div className="text-[13px] text-soft-sand/80 font-sans">
                  {cred.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified results link — restored from an empty div that was shipping a phantom
            animated node. Links to the public claims page so students can verify numbers. */}
        <div
          className="text-center transition-all duration-700 ease-out delay-500 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <Link
            to="/results-and-claims"
            className="group inline-flex items-center gap-2 text-brushed-gold font-sans text-sm font-bold border border-brushed-gold/30 rounded-full px-5 py-2.5 transition-all duration-300 hover:border-brushed-gold hover:bg-brushed-gold/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brushed-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-slate"
          >
            See verified student results
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrustSection);
