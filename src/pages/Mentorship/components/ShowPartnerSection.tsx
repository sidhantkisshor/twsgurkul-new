import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingDown, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../../constants';

const ShowPartnerSection: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-paper-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-burnt-amber/10 border border-burnt-amber/20 rounded-full px-4 py-2 mb-4">
                <Heart className="w-4 h-4 text-burnt-amber" />
                <span className="text-sm font-semibold text-burnt-amber">Show this to your partner</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-deep-slate mb-3">
                Discussing this with <span className="font-serif italic font-normal text-burnt-amber">family?</span>
              </h2>
              <p className="text-base text-deep-slate/60 max-w-xl mx-auto">
                At ₹19,999, this is a family decision for most people. Here's the plain-language breakdown for whoever needs to approve it.
              </p>
            </div>

            {/* Comparison */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Without */}
              <div className="bg-white border border-deep-slate/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold text-deep-slate">Without this program</h3>
                </div>
                <ul className="space-y-3 text-sm text-deep-slate/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>Average beginner loss: <strong className="text-deep-slate">₹2.3 lakh</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>Random tips, Telegram groups, YouTube confusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>No accountability — 97% quit within 90 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>Money gone with nothing to show for it</span>
                  </li>
                </ul>
              </div>

              {/* With */}
              <div className="bg-white border-2 border-wealth-teal/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-wealth-teal" />
                  <h3 className="font-semibold text-deep-slate">With the mentorship</h3>
                </div>
                <ul className="space-y-3 text-sm text-deep-slate/70">
                  <li className="flex items-start gap-2">
                    <span className="text-wealth-teal mt-0.5">✓</span>
                    <span>One-time ₹19,999 — <strong className="text-deep-slate">less than 1 bad month of trading losses</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wealth-teal mt-0.5">✓</span>
                    <span>Structured 90-day routine with live coaching every night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wealth-teal mt-0.5">✓</span>
                    <span>83% complete the full program (vs 3% industry average)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wealth-teal mt-0.5">✓</span>
                    <span>7-day money-back guarantee if it doesn't feel right</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom line */}
            <div className="bg-deep-slate rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-wealth-teal" />
                <p className="text-sm font-semibold text-white">The bottom line</p>
              </div>
              <p className="text-soft-sand text-sm max-w-lg mx-auto mb-4">
                ₹19,999 one-time to learn a skill that pays back every month — vs ₹2.3 lakh average loss from figuring it out alone. This isn't an expense. It's the cheapest insurance against losing more.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20my%20family%20has%20some%20questions%20about%20the%20ETM%20Mentorship%20before%20I%20enroll`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-burnt-amber hover:text-burnt-amber/80 transition-colors"
              >
                Have questions? Chat with our team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowPartnerSection;
