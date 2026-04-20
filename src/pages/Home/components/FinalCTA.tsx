import React from 'react';
import { ArrowRight, ShieldCheck, MessageCircle, Gift } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';
import { WHATSAPP_URL } from '../../../constants';

interface FinalCTAProps {
  onQuizOpen: () => void;
}

/**
 * Bonuses stacked into the pre-CTA strip.
 * Values are representative — update in a single place if you renegotiate the offer.
 * India CRO research: stacked ₹ totals outperform minimalist "trial" framing for this audience.
 */
const bonuses = [
  { label: 'Morning Pre-Market Brief', value: '₹6,000' },
  { label: 'Risk Calculator Template', value: '₹1,500' },
  { label: '1-on-1 Onboarding Call', value: '₹5,000' },
  { label: '7-Day No-Questions Refund', value: 'Priceless' },
];
const TOTAL_BONUS_LABEL = '₹12,500+ free';

const FinalCTA: React.FC<FinalCTAProps> = ({ onQuizOpen }) => {
  const [ref, visible] = useIntersectionAnimation(0.05);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 overflow-hidden bg-warm-white">
      {/* Subtle amber radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burnt-amber/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Stacked-value bonus strip — pre-CTA trust boost. Mirrors what this audience sees
            from Pushkar Raj Thakur / Finology and expects to see. */}
        <div
          className="inline-block max-w-2xl mx-auto mb-10 bg-paper-cream border border-burnt-amber/20 rounded-2xl p-5 sm:p-6 text-left transition-all duration-700 ease-out motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-4 h-4 text-burnt-amber" aria-hidden="true" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-burnt-amber font-sans font-bold">
              Enrol this week &mdash; you also get
            </p>
          </div>
          <ul className="space-y-2.5 mb-4">
            {bonuses.map((b) => (
              <li key={b.label} className="flex items-baseline justify-between gap-3 text-[14px] sm:text-[15px] font-sans">
                <span className="text-deep-slate flex items-baseline gap-2">
                  <span className="text-wealth-teal font-bold">+</span>
                  {b.label}
                </span>
                <span className="text-deep-slate/70 font-bold whitespace-nowrap">
                  {b.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-burnt-amber/20 flex items-baseline justify-between text-[15px] font-sans">
            <span className="text-deep-slate font-bold">Total bonus value</span>
            <span className="text-burnt-amber font-bold">{TOTAL_BONUS_LABEL}</span>
          </div>
        </div>

        {/* Headline — linear, one-pass readable */}
        <h2
          className="text-3xl sm:text-4xl md:text-[3.25rem] leading-tight mb-5 transition-all duration-700 ease-out motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <span className="font-sans font-bold text-deep-slate">In 30 days, this will feel like </span>
          <span className="font-serif italic font-normal text-burnt-amber">the best decision</span>
          <span className="font-sans font-bold text-deep-slate"> of your year</span>
        </h2>

        <p
          className="text-base sm:text-lg text-deep-slate/75 mb-8 font-sans max-w-lg mx-auto leading-relaxed transition-all duration-700 ease-out delay-150 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          Take a 2-minute quiz. We&apos;ll match you to the program that fits your experience, budget, and goals.
        </p>

        {/* Mini testimonial — bumped contrast + text-14 for Android legibility */}
        <div
          className="inline-block bg-deep-slate/[0.04] border border-deep-slate/[0.08] rounded-xl px-5 py-3 mb-8 transition-all duration-700 ease-out delay-200 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <p className="text-[14px] text-deep-slate/80 font-sans leading-relaxed">
            <span className="italic">&ldquo;I was skeptical. Took the quiz, joined Crypto Mastery, made ₹1.4L in month 2.&rdquo;</span>
            <span className="font-bold text-deep-slate/85"> — Ankit, Bangalore</span>
          </p>
        </div>

        {/* Refund badge — promoted from 13px footnote to a boxed trust signal */}
        <div
          className="inline-flex items-center gap-2 bg-wealth-teal/[0.08] border border-wealth-teal/25 text-wealth-teal rounded-full px-5 py-2 mb-8 font-sans font-bold text-[13px] transition-all duration-700 ease-out delay-[250ms] motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <ShieldCheck className="w-4 h-4" aria-hidden="true" />
          7-Day No-Questions-Asked Refund · Secured via Razorpay
        </div>

        {/* CTA row — primary quiz + secondary WhatsApp for the skeptical T2 buyer */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-300 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <button
            type="button"
            onClick={onQuizOpen}
            className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-8 sm:px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] motion-reduce:hover:scale-100 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-warm-white focus-visible:ring-burnt-amber"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(200,117,51,0)] group-hover:shadow-[0_0_40px_rgba(200,117,51,0.3)] transition-shadow duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Match Me to the Right Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#128C7E] bg-[#25D366]/[0.08] border border-[#25D366]/30 rounded-full px-6 py-3 text-sm font-bold font-sans transition-all duration-300 hover:bg-[#25D366]/15 hover:border-[#25D366]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Talk on WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <p
          className="text-[13px] text-deep-slate/70 mt-6 font-sans transition-all duration-700 ease-out delay-[450ms] motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          Free quiz &middot; No email needed to start
        </p>

        {/* Batch info */}
        <div
          className="mt-6 inline-flex items-center gap-2 bg-deep-slate/[0.06] border border-deep-slate/[0.08] rounded-full px-5 py-2 transition-all duration-700 ease-out delay-500 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <span className="relative flex h-2 w-2 motion-reduce:animate-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wealth-teal/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wealth-teal" />
          </span>
          <span className="text-[13px] font-sans">
            <span className="font-bold text-deep-slate/85">
              Enrolling now
            </span>
            <span className="text-deep-slate/70">, you get access right after you pay</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
