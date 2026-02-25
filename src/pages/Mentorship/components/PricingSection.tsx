import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle, Shield, Users, CreditCard } from 'lucide-react';
import { getCheckoutUrl, WHATSAPP_NUMBER } from '../../../constants';

const PricingSection: React.FC = () => {
  const handleEnroll = () => {
    window.open(getCheckoutUrl('mentorship', 'max'), '_blank');
  };

  const features = [
    'Nightly 8 PM live trading sessions with pro coaches',
    '40+ strategy videos & comprehensive course materials',
    'Weekly performance reviews',
    'Whale wallet tracking',
    'WhatsApp support',
    'Community access',
    'Daily trade ideas & market analysis',
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-deep-slate mb-6">
              One program. Everything you need. Start <span className="font-serif italic font-normal text-burnt-amber">tonight.</span>
            </h2>
            <p className="text-lg text-deep-slate/70 max-w-2xl mx-auto font-normal">
              Lifetime access to updates. No hidden fees.
            </p>

            {/* Price anchoring */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-deep-slate/50">
              <div className="flex items-center gap-2">
                <span className="line-through">1-on-1 coaching: ₹1.5L+</span>
              </div>
              <span className="hidden sm:inline text-deep-slate/20">|</span>
              <div className="flex items-center gap-2">
                <span className="line-through">1 bad month of random trades: ₹50k-₹2L lost</span>
              </div>
            </div>
          </motion.div>

          {/* Single Pricing Card */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-deep-slate text-white shadow-2xl border-2 border-burnt-amber rounded-3xl">
              {/* Scarcity badge */}
              <div className="bg-burnt-amber text-white text-center py-2.5 px-4 rounded-t-3xl">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold">Capped at 50 per batch — coaches review your trades personally</span>
                </div>
              </div>
              {/* Card content */}
              <div className="p-8 sm:p-10">
                {/* Plan header */}
                <div className="text-center mb-8 pb-8 border-b border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Mentorship
                  </h3>

                  {/* Price */}
                  <div className="mt-4">
                    <p className="text-sm line-through text-soft-sand/70">
                      ₹85,000+ value
                    </p>
                    <span className="text-4xl font-semibold text-white">
                      ₹19,999
                    </span>
                    <span className="text-sm text-soft-sand/70">
                      {' '}/ 3 months
                    </span>
                    <p className="text-xs text-soft-sand/70 mt-1">+ 18% GST applicable</p>
                  </div>

                  {/* EMI Option */}
                  <div className="mt-4 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <CreditCard className="w-4 h-4 text-wealth-teal" />
                      <span className="text-sm font-semibold text-white">No-cost EMI available</span>
                    </div>
                    <p className="text-xs text-soft-sand/70">
                      From ₹1,999/month × 12 — less than your Swiggy bill
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm mt-4 text-soft-sand font-normal">
                    The full transformation - live coaching, accountability, results.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 shrink-0 text-wealth-teal" />
                      <span className="text-sm font-normal text-soft-sand">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div>
                  <motion.button
                    onClick={handleEnroll}
                    className="w-full py-4 bg-burnt-amber text-white hover:bg-burnt-amber/90 rounded-full transition-all duration-300 group font-semibold flex items-center justify-center gap-2 text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Trading at 8 PM
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Microcopy */}
                  <p className="text-xs text-center mt-3 text-soft-sand/60">
                    = ₹222/day. Less than chai + samosa.
                  </p>

                  {/* 7-Day Guarantee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-wealth-teal shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">7-day money-back guarantee</p>
                        <p className="text-xs text-soft-sand/70 mt-1">
                          Request a refund within 7 days of purchase if you've accessed less than 20% of the content. No questions, no drama. Full refund to your original payment method within 7–10 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Risk Reversal */}
          <motion.div
            className="max-w-lg mx-auto mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-deep-slate/5 border border-deep-slate/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-wealth-teal" />
                <p className="text-sm font-semibold text-deep-slate">Not sure if this is right for you?</p>
              </div>
              <p className="text-sm text-deep-slate/70 mb-4">
                Message us on WhatsApp before you pay. We'll tell you honestly if this program fits your situation.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20the%20mentorship%20but%20have%20some%20questions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-medium text-wealth-teal hover:text-wealth-teal/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with us first
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
