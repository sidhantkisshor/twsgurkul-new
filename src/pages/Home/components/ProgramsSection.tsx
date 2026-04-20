import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart3, Crown } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';
import { HOME_PROGRAM_PRICING } from '../../../constants';

const programs = [
  {
    icon: BookOpen,
    level: 'Beginner',
    name: 'Crypto Mastery',
    tagline: 'Start trading crypto in 45 days, even if you have never traded before',
    metric: '₹40k–₹1.2L/month',
    priceLabel: HOME_PROGRAM_PRICING.crypto.label,
    emiLabel: `EMI from ₹${HOME_PROGRAM_PRICING.crypto.emi}/mo`,
    duration: '45 days',
    students: '4,200+',
    route: '/crypto',
    accent: '#3b82f6',
    testimonial: '"Made ₹87,000 in my first month after the course." — Rahul, Pune',
    waitlist: false,
  },
  {
    icon: BarChart3,
    level: 'Intermediate',
    name: 'Footprint Trading',
    tagline: 'See where big money is moving, and trade before the crowd',
    metric: '₹1L–₹5L/month',
    priceLabel: HOME_PROGRAM_PRICING.footprint.label,
    emiLabel: `EMI from ₹${HOME_PROGRAM_PRICING.footprint.emi}/mo`,
    duration: '60 days',
    students: '3,800+',
    route: '/footprint',
    accent: '#8b5cf6',
    testimonial: '"My win rate jumped to 73% after the course." — Priya, Mumbai',
    waitlist: false,
  },
  {
    icon: Crown,
    level: 'Advanced',
    name: 'Elite Mentorship',
    tagline: 'Trade live with pro coaches every day. Full 1-on-1 support',
    metric: '₹3L–₹8L/month',
    priceLabel: HOME_PROGRAM_PRICING.mentorship.label,
    emiLabel: `EMI from ₹${HOME_PROGRAM_PRICING.mentorship.emi}/mo`,
    duration: '90 days',
    students: '2,847+',
    route: '/mentorship',
    accent: '#C87533',
    testimonial: '"Earning ₹8L/month consistently now." — Vikram, Delhi',
    waitlist: true,
  },
];

interface ProgramsSectionProps {
  onQuizOpen: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onQuizOpen }) => {
  const [ref, visible] = useIntersectionAnimation(0.15);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 bg-warm-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2C3539 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-deep-slate mb-5">
            <span className="font-sans font-bold">Pick your </span>
            <span className="font-serif italic font-normal text-burnt-amber">starting point</span>
          </h2>
          <p className="text-base sm:text-lg text-deep-slate/75 font-sans max-w-lg mx-auto leading-relaxed">
            Three programs, one framework. Pick the one that matches your experience today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7 mb-12">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.name}
                to={program.route}
                className="group block rounded-2xl bg-white border border-deep-slate/[0.06] p-5 sm:p-7 transition-all duration-500 hover-card no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-amber focus-visible:ring-offset-2"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${200 + i * 120}ms`,
                }}
              >
                {/* Top row: icon + level (+ waitlist badge on Mentorship) */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${program.accent}14` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: program.accent }} />
                  </div>
                  <div className="flex items-center gap-2">
                    {program.waitlist && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full font-sans bg-burnt-amber/15 text-burnt-amber border border-burnt-amber/30">
                        Waitlist
                      </span>
                    )}
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full font-sans"
                      style={{
                        color: program.accent,
                        backgroundColor: `${program.accent}14`,
                      }}
                    >
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-[22px] font-bold text-deep-slate mb-2 font-sans leading-tight">
                  {program.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-deep-slate/75 mb-5 font-sans leading-relaxed">
                  {program.tagline}
                </p>

                {/* Student earnings range — relabelled from "Earning potential" to dodge the SEBI/FTC red flag */}
                <div className="bg-warm-white rounded-xl px-4 py-3 mb-4 border border-deep-slate/[0.06]">
                  <div className="text-[11px] text-deep-slate/65 uppercase tracking-wider font-sans mb-1">
                    Student earnings range*
                  </div>
                  <div className="text-xl font-bold font-sans" style={{ color: program.accent }}>
                    {program.metric}
                  </div>
                </div>

                {/* Price + EMI */}
                <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-deep-slate/[0.06]">
                  <div>
                    <div className="text-[11px] text-deep-slate/65 uppercase tracking-wider font-sans mb-0.5">
                      Price
                    </div>
                    <div className="text-lg font-bold text-deep-slate font-sans">
                      {program.priceLabel}
                    </div>
                  </div>
                  <div className="text-[12px] text-deep-slate/70 font-sans text-right">
                    {program.emiLabel}
                    <div className="text-[11px] text-deep-slate/60">7-day refund</div>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between text-[13px] text-deep-slate/65 mb-4 font-sans">
                  <span>{program.duration}</span>
                  <span>{program.students} students</span>
                </div>

                {/* Micro testimonial */}
                <div className="bg-deep-slate/[0.04] rounded-lg px-3 py-2.5 mb-2 border border-deep-slate/[0.05]">
                  <p className="text-[14px] text-deep-slate/80 font-sans leading-relaxed">
                    {program.testimonial}
                  </p>
                  <p className="text-[10px] text-deep-slate/55 font-sans mt-2 pt-2 border-t border-deep-slate/[0.06] leading-snug">
                    Self-reported. Not typical. Past performance not indicative of future results.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-bold font-sans group-hover:gap-3 transition-all duration-300 mt-3"
                  style={{ color: program.accent }}
                >
                  {program.waitlist ? 'See Details & Join Waitlist' : 'See Course Details'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Inline claim disclaimer for the whole card row */}
        <p className="text-[11px] text-deep-slate/65 text-center font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          *Typical observed earnings range based on student self-reports, 2024 survey. Your results will vary. Testimonials show individual outcomes that are not typical. Education only. Not SEBI-registered investment advice.
        </p>

        {/* Quiz CTA */}
        <div
          className="text-center transition-all duration-700 ease-out delay-700 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <p className="text-sm text-deep-slate/75 mb-4 font-sans">
            Not sure which one fits you?
          </p>
          <button
            type="button"
            onClick={onQuizOpen}
            className="group inline-flex items-center gap-2.5 text-burnt-amber font-bold font-sans text-sm border-2 border-burnt-amber/30 rounded-full px-7 py-3 transition-all duration-300 hover:border-burnt-amber hover:bg-burnt-amber/[0.06] hover:shadow-[0_0_30px_rgba(200,117,51,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-amber focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
          >
            Which Program Fits Me? (2-min quiz)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProgramsSection);
