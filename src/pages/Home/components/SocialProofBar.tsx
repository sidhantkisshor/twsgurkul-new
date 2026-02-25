import React from 'react';
import { useIntersectionAnimation } from '../../../utils/animations';

const metrics = [
  { value: '10,847+', label: 'Profitable Traders' },
  { value: '89%', label: 'Students Profitable in 30 Days' },
  { value: '₹100 Cr+', label: 'Total Student Earnings' },
];

const companyNames = ['Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS'];

const SocialProofBar: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative bg-warm-white py-10 sm:py-12 border-b border-deep-slate/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Metrics + Featured In — 4-col on desktop, stacked on mobile */}
        <div className="grid grid-cols-4 gap-6 items-start">
          {/* 3 metrics — each takes 1 col on desktop; on mobile they share first 2 rows */}
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center transition-all duration-600 ease-out ${
                i === 2 ? 'col-span-2 sm:col-span-1 col-start-2 sm:col-start-auto' : 'col-span-2 sm:col-span-1'
              }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-deep-slate font-sans tracking-tight">
                {metric.value}
              </div>
              <div className="text-[13px] text-deep-slate/40 mt-1.5 font-sans uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}

          {/* Students from */}
          <div
            className="text-center col-span-4 sm:col-span-1 transition-all duration-600 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '300ms',
            }}
          >
            <div className="text-[11px] text-deep-slate/30 mb-3 font-sans uppercase tracking-[0.2em]">
              Students from
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {companyNames.map((name, i) => (
                <React.Fragment key={name}>
                  <span className="text-[13px] text-deep-slate/35 font-sans font-medium whitespace-nowrap">
                    {name}
                  </span>
                  {i < companyNames.length - 1 && (
                    <span className="text-deep-slate/15 hidden sm:inline">&middot;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SocialProofBar);
