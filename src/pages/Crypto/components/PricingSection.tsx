import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';

interface PricingSectionProps {
  onMethodologyClick?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onMethodologyClick }) => {
  const formatDate = (dateStr: string) => {
    // Remove ordinal suffix and format properly to "5 Sep" format
    return dateStr.replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ').replace(/([A-Z]{3})/, (match) =>
      match.charAt(0) + match.slice(1).toLowerCase()
    );
  };

  const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

  const handleEnroll = () => {
    cryptoTrackingEvents.checkoutStart('pricing_section', 19499);
    // Open payment page directly
    window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
  };

  return (
    <section id="pricing" className="crypto-section bg-[#FAF8F5]">
      <div className="crypto-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="crypto-h2 mb-4">
            <span className="text-[#2C3539]">
              Choose Your Learning Path
            </span>
          </h2>
          <p className="crypto-body text-[#111111]/70">
            Everything you need in one complete program.
            {onMethodologyClick && (
              <>
                <br />
                <button
                  onClick={onMethodologyClick}
                  className="inline-flex items-center gap-1 text-sm text-[#111111]/50 hover:text-[#C87533] transition-colors mt-2 group"
                >
                  <span className="group-hover:underline">Methodology & verification</span>
                  <span>→</span>
                </button>
              </>
            )}
          </p>
        </motion.div>

        {/* Single Focused Pricing Card */}
        <motion.div
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Best Value Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-[#B8956A] text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse whitespace-nowrap">
              🎯 <span className="tracking-[0.02em]">INSTANT ACCESS TODAY</span>
            </div>
          </div>

          <div className="bg-white border-t-4 border-t-[#C87533] rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8956A]/10 rounded-full filter blur-3xl"></div>

            {/* Pricing Header */}
            <div className="text-center mb-8">
              <h3 className="crypto-h3 text-[#2C3539] mb-2">Crypto Market Mastery</h3>
              <p className="crypto-micro text-[#111111]/50 mb-1">
                <span className="line-through">List price ₹50,000</span>
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg text-[#111111]/50">This cycle:</span>
                <span className="text-4xl font-bold text-[#2C3539]">₹19,499</span>
              </div>
              <p className="crypto-micro text-[#111111]/50">One-time payment • Lifetime access</p>
              <p className="crypto-micro text-[#0A8D7A] mt-1">EMI available: ₹1,625/month × 12 (No-cost EMI)</p>
              <p className="crypto-micro text-[#C87533] mt-2">
                Enroll before {nextLiveDate} to join the next Live Q&A
              </p>
            </div>

            {/* What You Get */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-[#2C3539] text-center">What you get for ₹19,499 (one-time, lifetime)</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8D7A] mt-0.5 shrink-0">•</span>
                  <span className="text-[#111111]/60"><strong className="text-[#2C3539]">Core Skillset</strong> — 12-week recorded curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8D7A] mt-0.5 shrink-0">•</span>
                  <span className="text-[#111111]/60"><strong className="text-[#2C3539]">Real-time Refinement</strong> — monthly live Q&A + trade reviews (recorded)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8D7A] mt-0.5 shrink-0">•</span>
                  <span className="text-[#111111]/60"><strong className="text-[#2C3539]">Tools & Templates</strong> — scanners, checklists, sizing sheets, psychology drills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8D7A] mt-0.5 shrink-0">•</span>
                  <span className="text-[#111111]/60"><strong className="text-[#2C3539]">Private Network</strong> — moderated community for accountability</span>
                </li>
              </ul>
            </div>


            {/* CTA Button */}
            <button
              onClick={handleEnroll}
              className="w-full py-4 bg-[#C87533] text-white rounded-lg font-bold text-xl hover:bg-[#b5682d] transition-all transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Learning — ₹19,499
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </button>

            <p className="text-xs text-[#111111]/60 mt-3 text-center">
              Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available
            </p>

            {/* Trust Badges */}
            <div className="mt-4 text-center space-y-2">
              <p className="text-sm text-[#111111]/50">
                🔒 Secure payment • 💳 EMI available • ✅ No hidden charges
              </p>
              <p className="text-xs text-[#0A8D7A] font-semibold">
                30-day satisfaction guarantee
              </p>
              <p className="text-xs text-[#111111]/50 mt-2">
                ⚠️ Education only, not investment advice
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
