import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Shield, Award, Zap, ChartBar, MessageCircle, Users } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { WHATSAPP_NUMBER } from '../../../constants';

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Footprint%20Mastery`;
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const PricingSection: React.FC = () => {
  const nextSession = getNextFirstSaturdayWithOrdinal();

  const features = [
    { icon: BookOpen, text: "10 comprehensive modules" },
    { icon: Users, text: `Monthly live Q&A (next: ${nextSession})` },
    { icon: ChartBar, text: "Real footprint analysis examples" },
    { icon: Shield, text: "Risk management tools & templates" },
    { icon: Award, text: "1-page entry checklist system" },
    { icon: Zap, text: "Private community access" },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-[#1A2226] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#C87533]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-4">
            <span className="font-sans font-bold">Invest in Your </span>
            <span className="font-serif italic font-normal text-[#C87533]">Trading Edge</span>
          </h2>
          <p className="text-lg text-[#B8A99A]">
            Everything you need to read order flow with confidence.
          </p>
        </motion.div>

        {/* What's Included - simple list OUTSIDE the card */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5 text-[#C87533] shrink-0" />
                <span className="text-sm text-[#EDE6D8]">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Card - clean and focused */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#3A4449]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-[#C87533]/30 shadow-xl shadow-[#C87533]/5 text-center">
            {/* Price */}
            <p className="text-sm text-[#B8A99A] mb-2">One-time payment · Self-paced access</p>
            <div className="flex items-baseline justify-center gap-3 mb-1">
              <span className="text-4xl sm:text-5xl font-bold text-[#EDE6D8]">₹32,999</span>
            </div>
            <p className="text-sm text-[#D4943F] font-medium mb-2">
              or ₹2,750/month × 12 months (₹90/day)
            </p>
            <p className="text-xs text-[#B8A99A]/50 mb-6">+ 18% GST applicable</p>

            {/* Scarcity — tied to real Q&A date */}
            <div className="bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 rounded-lg px-4 py-2.5 mb-4">
              <p className="text-sm text-[#2DBDA8] font-medium">
                Next live Q&A: {nextSession}
              </p>
              <p className="text-xs text-[#B8A99A] mt-0.5">
                Enroll now to join with your questions ready
              </p>
            </div>

            {/* CTA */}
            <motion.button
              onClick={handlePaymentPopup}
              className="w-full bg-[#C87533] hover:bg-[#A85E28] text-white font-bold py-4 rounded-full shadow-lg shadow-[#C87533]/25 transition-all text-lg mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Yes, I want this →
            </motion.button>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-wealth-teal/10 border border-wealth-teal/30 text-wealth-teal font-semibold rounded-full hover:bg-wealth-teal/20 transition-all text-sm mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Questions? Ask on WhatsApp
            </motion.a>

            {/* Guarantees - inline */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#B8A99A]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2DBDA8]" /> 7-day refund policy
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2DBDA8]" /> Lifetime access
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2DBDA8]" /> Free updates
              </span>
            </div>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-[#B8956A]/10 text-[#B8A99A]">
              <span className="text-xs flex items-center gap-1">
                <Shield className="w-3 h-3" /> Secure Payment
              </span>
              <span className="text-xs">UPI</span>
              <span className="text-xs">Cards</span>
              <span className="text-xs">EMI</span>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          className="mt-12 bg-[#2C3539] rounded-xl p-6 sm:p-8 border border-[#0A8D7A]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A8D7A] via-[#2DBDA8] to-[#0A8D7A]" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0A8D7A]/15 border border-[#0A8D7A]/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#2DBDA8]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#EDE6D8] mb-3">Our 7-Day Promise</h3>
              <p className="text-sm text-[#D0C5B4] leading-relaxed mb-4">
                Start the course. Watch the first 3 modules. Try the F.A.S.T. checklist on a paper trade. If you honestly feel this isn't worth your time, email us within 7 days of purchase — full refund, no questions asked.
              </p>
              <div className="space-y-2 text-sm text-[#B8A99A]">
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2DBDA8] shrink-0 mt-0.5" />
                  <span>Refund available within 7 days if less than 20% accessed</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2DBDA8] shrink-0 mt-0.5" />
                  <span>Email support@tradingwithsidhant.com with your order ID</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2DBDA8] shrink-0 mt-0.5" />
                  <span>No hoops, no retention calls — just a refund</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-8 text-center text-[#B8A99A] text-xs italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Educational content only. Not investment advice. Results vary with practice.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
