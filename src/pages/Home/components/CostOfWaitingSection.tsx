import React from 'react';
import { TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const withoutSystem = [
  { month: 'Month 1', outcome: '-₹15,000', detail: 'Bad trade on a WhatsApp tip' },
  { month: 'Month 3', outcome: '-₹73,000', detail: 'Losses add up, no clear rules' },
  { month: 'Month 6', outcome: '-₹1.5L', detail: 'Stopped trading out of frustration' },
  { month: 'Month 12', outcome: 'Quit forever', detail: 'Blame the market, give up' },
];

const withTWS = [
  { month: 'Month 1', outcome: '₹0 risk', detail: 'Learning the system properly' },
  { month: 'Month 3', outcome: '+₹47,000', detail: 'First real profits with the rules' },
  { month: 'Month 6', outcome: '₹1.2L/mo*', detail: 'Steady monthly trading income' },
  { month: 'Month 12', outcome: '₹3L+/mo*', detail: 'Trading covers monthly expenses' },
];

interface CostOfWaitingSectionProps {
  onQuizOpen: () => void;
}

const CostOfWaitingSection: React.FC<CostOfWaitingSectionProps> = ({ onQuizOpen }) => {
  const [ref, visible] = useIntersectionAnimation(0.15);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Accent divider from TrustSection above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-burnt-amber/15 to-transparent" />
      {/* Dark background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a2024] via-[#1e2a2f] to-[#0f1519]" />

      {/* Subtle red glow left */}
      <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[400px] h-[400px] bg-red-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle teal glow right */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[400px] h-[400px] bg-wealth-teal/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-red-400 mb-5 font-sans font-medium">
            The Hidden Cost
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-5">
            <span className="font-sans font-bold">The real cost of </span>
            <span className="font-serif italic font-normal text-red-400/80">figuring it out alone</span>
          </h2>
          <p className="text-base text-soft-sand/85 font-sans max-w-lg mx-auto leading-relaxed">
            The average trader we surveyed loses about ₹73,000 a month without a plan.* Here is what the next 12 months can look like, with and without our system.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 mb-14">
          {/* WITHOUT column */}
          <div
            className="rounded-2xl bg-red-500/[0.04] border border-red-500/[0.1] p-6 sm:p-8 transition-all duration-700 ease-out delay-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-400/80 font-sans">Without a System</h3>
            </div>
            <div className="space-y-4">
              {withoutSystem.map((item, i) => (
                <div
                  key={item.month}
                  className="flex items-start gap-4 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-16px)',
                    transitionDelay: `${300 + i * 120}ms`,
                  }}
                >
                  <div className="text-[11px] text-soft-sand/70 font-sans font-medium w-16 shrink-0 pt-0.5 uppercase tracking-wider">
                    {item.month}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-400/90 font-sans">{item.outcome}</div>
                    <div className="text-[13px] text-soft-sand/80 font-sans">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WITH column */}
          <div
            className="rounded-2xl bg-wealth-teal/[0.04] border border-wealth-teal/[0.1] p-6 sm:p-8 transition-all duration-700 ease-out delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-wealth-teal/70" />
              <h3 className="text-lg font-bold text-wealth-teal/80 font-sans">With TWS GurukulX</h3>
            </div>
            <div className="space-y-4">
              {withTWS.map((item, i) => (
                <div
                  key={item.month}
                  className="flex items-start gap-4 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(16px)',
                    transitionDelay: `${400 + i * 120}ms`,
                  }}
                >
                  <div className="text-[11px] text-soft-sand/70 font-sans font-medium w-16 shrink-0 pt-0.5 uppercase tracking-wider">
                    {item.month}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-wealth-teal font-sans">{item.outcome}</div>
                    <div className="text-[13px] text-soft-sand/80 font-sans">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inline SEBI-compliant disclaimer near the specific rupee claims */}
        <p className="text-[11px] text-soft-sand/65 font-sans text-center max-w-xl mx-auto mb-8 leading-relaxed">
          *Based on 2024 survey of TWS students + matched non-student controls. Self-reported, illustrative only. Individual results vary. Education only. Not SEBI-registered investment advice.
        </p>

        {/* CTA */}
        <div
          className="text-center transition-all duration-700 ease-out delay-700 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <button
            type="button"
            onClick={onQuizOpen}
            className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] motion-reduce:hover:scale-100 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a2024] focus-visible:ring-amber-bright"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(200,117,51,0)] group-hover:shadow-[0_0_40px_rgba(200,117,51,0.3)] transition-shadow duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              See Which Program Fits Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CostOfWaitingSection;
