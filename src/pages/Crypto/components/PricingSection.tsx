import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Calendar, Gift } from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';
import { CRYPTO_PRICE } from '../data';
import { getCheckoutUrl } from '../../../constants';

interface PricingSectionProps {
  onMethodologyClick?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onMethodologyClick }) => {
  const formatDate = (dateStr: string) => {
    return dateStr.replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ').replace(/([A-Z]{3})/, (match) =>
      match.charAt(0) + match.slice(1).toLowerCase()
    );
  };

  const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

  const handleEnroll = () => {
    cryptoTrackingEvents.checkoutStart('pricing_section', CRYPTO_PRICE);
    window.open(getCheckoutUrl('crypto', 'pricing'), '_blank', 'noopener');
  };

  return (
    <section id="pricing" className="crypto-section bg-[#2C3539] relative overflow-hidden">
      {/* Amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C87533]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="crypto-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
            <span className="font-sans font-bold text-white">One Investment, Complete</span>{' '}
            <span className="font-serif italic font-normal text-[#C87533]">System</span>
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            One bad FOMO trade without stop-losses can wipe out ₹50k+ overnight — more than 2.5× the cost of this entire program. One risk management rule from this course can prevent that loss on day one.
          </p>
          {onMethodologyClick && (
            <button
              onClick={onMethodologyClick}
              className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-[#C87533] transition-colors mt-2 group min-h-[44px] py-2"
            >
              <span className="group-hover:underline">Methodology & verification</span>
              <span>→</span>
            </button>
          )}
        </motion.div>

        <motion.div
          className="relative max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-[#C87533] text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-lg shadow-[#C87533]/30">
              INSTANT ACCESS
            </div>
          </div>

          <div className="bg-[#3a4549] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Price header */}
            <div className="bg-[#232b2f] border-b border-white/10 px-5 sm:px-8 pt-10 pb-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Crypto Mastery</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-white">₹19,499</span>
              </div>
              <p className="text-sm text-white/60">One-time payment · Lifetime access</p>
              <p className="text-sm text-white/60 mt-1">+ 18% GST applicable</p>
              <p className="text-sm text-[#C87533] font-semibold mt-3">
                No-cost EMI: ₹1,625/month × 12
              </p>

              {/* Scarcity — tied to real live Q&A constraint */}
              <div className="mt-4 inline-flex items-center gap-2 bg-[#0A8D7A]/[0.10] border border-[#0A8D7A]/[0.20] rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 text-[#0A8D7A]" />
                <span className="text-sm text-[#0A8D7A] font-medium">
                  Join before {nextLiveDate} to attend the next live Q&A
                </span>
              </div>
            </div>

            {/* What you get */}
            <div className="px-5 sm:px-8 py-8">
              <h4 className="font-semibold text-white/80 mb-5 text-sm uppercase tracking-wider">What you get</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">12-week recorded curriculum</span>
                    <p className="text-sm text-white/50 mt-0.5">Learn at your own pace</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Monthly live Q&A + trade reviews</span>
                    <p className="text-sm text-white/50 mt-0.5">Next session: {nextLiveDate}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Scanners, checklists, sizing sheets</span>
                    <p className="text-sm text-white/50 mt-0.5">Ready-to-use trading tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Private community</span>
                    <p className="text-sm text-white/50 mt-0.5">Moderated for accountability</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bonus stacking — time-bound value addition, not a discount */}
            <div className="px-5 sm:px-8 py-6 bg-[#C87533]/[0.04] border-y border-[#C87533]/[0.10]">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-4 h-4 text-[#C87533]" />
                <p className="text-sm font-semibold text-white">
                  Enroll before <span className="text-[#C87533]">{nextLiveDate}</span> and get:
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'Pro Trading Checklist', value: '₹2,999', desc: 'Pre-trade checklist video walkthrough + downloadable template' },
                  { name: 'Top 5 Trading Tools', value: '₹1,999', desc: 'Curated tools breakdown to sharpen your edge' },
                  { name: 'Stock Market Essentials', value: '₹2,499', desc: 'Complete foundations mini-course for cross-market context' },
                ].map((bonus) => (
                  <li key={bonus.name} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C87533] shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-white">{bonus.name}</span>
                        <span className="text-xs text-[#C87533]/80">worth {bonus.value}</span>
                      </div>
                      <p className="text-xs text-white/40 mt-0.5">{bonus.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/50 mt-4 pt-3 border-t border-white/5">
                Total bonus value: <span className="text-[#C87533] font-semibold">₹7,497</span> — included free before {nextLiveDate}
              </p>
            </div>

            {/* CTA */}
            <div className="px-5 sm:px-8 pb-8 pt-6">
              <button
                onClick={handleEnroll}
                className="w-full py-4 bg-[#C87533] hover:bg-[#b5682d] text-white rounded-xl font-bold text-lg transition-all group shadow-lg shadow-[#C87533]/20"
              >
                <span className="flex items-center justify-center gap-2">
                  Start my 2-hour crypto skill
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
              <p className="text-sm text-white/50 mt-3 text-center">
                One stop-loss rule from this course can save you more than ₹19,499 on a single trade.
              </p>
              <p className="text-xs text-white/40 mt-2 text-center">
                UPI · Cards · Netbanking · No-cost EMI available
              </p>
            </div>

            {/* Trust footer */}
            <div className="px-5 sm:px-8 py-5 bg-[#0A8D7A]/5 border-t border-[#0A8D7A]/[0.10]">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-semibold mb-1">
                    Not sure? Review our refund policy before enrolling.
                  </p>
                  <p className="text-xs text-white/50">
                    We want committed students, not trapped ones. Education only, not investment advice.{' '}
                    <a href="/refunds" className="text-[#0A8D7A] underline inline-flex items-center min-h-[44px]">Read full refund policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
