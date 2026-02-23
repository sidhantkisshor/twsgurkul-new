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
    return dateStr.replace(/(\\d+)(st|nd|rd|th)\\s+/, '$1 ').replace(/([A-Z]{3})/, (match) => 
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
    <section id="pricing" className="crypto-section bg-linear-to-b from-slate-900 to-slate-800">
      <div className="crypto-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="crypto-h2 mb-4">
            <span className="bg-linear-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              Choose Your Learning Path
            </span>
          </h2>
          <p className="crypto-body text-slate-200">
            Everything you need in one complete program.
            {onMethodologyClick && (
              <>
                <br />
                <button
                  onClick={onMethodologyClick}
                  className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-yellow-400 transition-colors mt-2 group"
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
            <div className="bg-linear-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse whitespace-nowrap">
              🎯 <span className="tracking-[0.02em]">INSTANT ACCESS TODAY</span>
            </div>
          </div>
          
          <div className="crypto-card glass-effect p-8 border-2 border-yellow-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
            
            {/* Pricing Header */}
            <div className="text-center mb-8">
              <h3 className="crypto-h3 text-white mb-2">Crypto Market Mastery</h3>
              <p className="crypto-micro text-gray-400 mb-1">
                <span className="line-through">List price ₹50,000</span>
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg text-gray-400">This cycle:</span>
                <span className="text-4xl font-bold text-yellow-400">₹19,499</span>
              </div>
              <p className="crypto-micro text-gray-400">One-time payment • Lifetime access</p>
              <p className="crypto-micro text-green-400 mt-1">EMI available: ₹1,625/month × 12 (No-cost EMI)</p>
              <p className="crypto-micro text-yellow-400 mt-2">
                Enroll before {nextLiveDate} to join the next Live Q&A
              </p>
            </div>
            
            {/* What You Get */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-white text-center">What you get for ₹19,499 (one-time, lifetime)</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300"><strong className="text-white">Core Skillset</strong> — 12-week recorded curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300"><strong className="text-white">Real-time Refinement</strong> — monthly live Q&A + trade reviews (recorded)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300"><strong className="text-white">Tools & Templates</strong> — scanners, checklists, sizing sheets, psychology drills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300"><strong className="text-white">Private Network</strong> — moderated community for accountability</span>
                </li>
              </ul>
            </div>
            
            
            {/* CTA Button */}
            <button 
              onClick={handleEnroll}
              className="w-full py-4 bg-linear-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-bold text-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Learning — ₹19,499
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </button>
            
            <p className="text-xs text-slate-400 mt-3 text-center">
              Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available
            </p>
            
            {/* Trust Badges */}
            <div className="mt-4 text-center space-y-2">
              <p className="text-sm text-gray-400">
                🔒 Secure payment • 💳 EMI available • ✅ No hidden charges
              </p>
              <p className="text-xs text-green-400 font-semibold">
                30-day satisfaction guarantee
              </p>
              <p className="text-xs text-gray-500 mt-2">
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