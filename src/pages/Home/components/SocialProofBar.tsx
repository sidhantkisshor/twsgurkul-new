import React from 'react';
import { useIntersectionAnimation } from '../../../utils/animations';

const metrics = [
  { value: '10,847+', label: 'Students Trained' },
  { value: '89%*', label: 'Booked a profitable week in 30 days' },
  { value: '₹100 Cr+*', label: 'Total Student Earnings (self-reported)' },
];

const companyNames = ['Infosys', 'TCS', 'HDFC', 'Wipro', 'HCL', 'Cognizant'];

const SocialProofBar: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative bg-warm-white py-10 sm:py-12 border-b border-deep-slate/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats row — equal-width 3-col grid on both mobile and desktop */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="text-center transition-all duration-600 ease-out motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-2xl sm:text-4xl font-bold text-deep-slate font-sans tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] sm:text-[13px] text-deep-slate/70 mt-1.5 font-sans uppercase tracking-wider leading-snug max-w-[140px] sm:max-w-none mx-auto">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Companies strip — below stats, across both breakpoints */}
        <div
          className="mt-8 pt-6 border-t border-deep-slate/[0.06] transition-all duration-600 ease-out motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '320ms',
          }}
        >
          <div className="text-[11px] text-deep-slate/65 mb-3 font-sans uppercase tracking-[0.2em] text-center">
            Students from every walk of life, including
          </div>
          <div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
            {companyNames.map((name) => (
              <span key={name} className="text-[13px] text-deep-slate/65 font-sans font-medium whitespace-nowrap">
                {name}
              </span>
            ))}
            <span className="text-[13px] text-deep-slate/60 font-sans italic">+ 200 SMB owners</span>
          </div>
        </div>

        {/* Inline disclaimer — SEBI-compliant claim footer in-viewport */}
        <p className="mt-5 text-[11px] text-deep-slate/60 font-sans text-center leading-relaxed max-w-2xl mx-auto">
          *Based on 2024 survey of 1,247 students who completed a full program. Self-reported results. Individual outcomes vary. Education only. Not SEBI-registered investment advice.
        </p>
      </div>
    </section>
  );
};

export default React.memo(SocialProofBar);
