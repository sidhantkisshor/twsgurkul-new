import React from 'react';
import { Search, Crosshair, ShieldCheck } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Audit Your Leaks',
    description: "Find out exactly where you\u2019re bleeding money \u2014 bad entries, no stop-loss, emotional exits. Most traders skip this and keep repeating the same mistakes.",
  },
  {
    icon: Crosshair,
    number: '02',
    title: 'Install a Rule-Based System',
    description: "Replace guesswork with a repeatable system \u2014 specific entries, exits, and position sizes. You\u2019ll know what to do before the market opens.",
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Trade with Risk-First Discipline',
    description: 'Learn to protect capital first, profit second. This is why our students stay profitable — they survive the bad weeks that wipe out everyone else.',
  },
];

const MechanismSection: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.1);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 bg-warm-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2C3539 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-burnt-amber/60 mb-4 font-sans font-medium">
            The GurukulX Method
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-deep-slate mb-4">
            <span className="font-sans font-bold">How it </span>
            <span className="font-serif italic font-normal text-burnt-amber">actually works</span>
          </h2>
          <p className="text-base text-deep-slate/45 font-sans max-w-lg mx-auto leading-relaxed">
            Not 200 hours of theory. A focused 3-step system that turns losing traders into profitable ones. Every program follows this framework.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex items-start gap-5 sm:gap-6 bg-white rounded-2xl border border-deep-slate/[0.06] p-6 sm:p-7 transition-all duration-600 ease-out hover:border-burnt-amber/15 hover:shadow-[0_4px_24px_rgba(44,53,57,0.06)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + i * 120}ms`,
                }}
              >
                {/* Step number + icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-burnt-amber/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-burnt-amber/70" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-[11px] font-bold text-deep-slate/20 font-sans tracking-wider">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-deep-slate font-sans mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-deep-slate/50 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom connector to programs */}
        <div
          className="text-center mt-10 transition-all duration-700 ease-out delay-600"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <p className="text-sm text-deep-slate/50 font-sans">
            Three programs. Same framework. Pick the one that fits your level &darr;
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MechanismSection);
