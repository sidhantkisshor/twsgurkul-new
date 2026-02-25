import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, UserCheck } from 'lucide-react';

const TargetingSection: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="crypto-section bg-[#2C3539] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
            <span className="font-sans font-bold text-white">Is This</span>{' '}
            <span className="font-serif italic font-normal text-[#C87533]">For You?</span>
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            This program is not for everyone. See if you recognize yourself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* This is for you if... */}
          <motion.div
            className="bg-[#232b2f] border border-[#0A8D7A]/30 rounded-xl p-6 sm:p-8 ring-1 ring-[#0A8D7A]/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-base font-bold text-[#0A8D7A] mb-5">
              <Check className="w-5 h-5" />
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You're a salaried professional (IT, CA, doctor, banker) earning ₹50k-₹2L/month and want a side income from crypto",
                "You've lost ₹20k+ following random tips from Telegram groups or Instagram \"gurus\"",
                "You have 2 hours in the evening (7-9 PM) and want a structured, repeatable system",
                "You want to understand risk management before entering any trade, not after",
                "You're tired of FOMO-buying at the top and panic-selling at the bottom",
                "You want a rule-based approach that works whether you're in Bangalore, Mumbai, or Jaipur",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0A8D7A]/[0.15] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0A8D7A]" />
                  </div>
                  <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* This is NOT for you if... */}
          <motion.div
            className="bg-[#232b2f] border border-[#E5484D]/25 rounded-xl p-6 sm:p-8 ring-1 ring-[#E5484D]/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-base font-bold text-[#E5484D] mb-5">
              <X className="w-5 h-5" />
              This is NOT for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You want guaranteed returns or \"100x signals\" — we don't do that",
                "You're looking for a get-rich-quick scheme that works overnight",
                "You're not willing to spend 2 hours daily learning and practicing",
                "You expect someone to trade for you or give you exact buy/sell calls",
                "You can't afford to lose the money you're investing in trades",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E5484D]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-[#E5484D]" />
                  </div>
                  <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mirror story */}
        <motion.div
          className="bg-[#C87533]/[0.08] border border-[#C87533]/20 rounded-xl p-6 sm:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#C87533]/[0.15] flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-[#C87533]" />
            </div>
            <div>
              <p className="text-white/80 leading-relaxed mb-3">
                <span className="font-semibold text-white">"I'm a software engineer in Bangalore, 28.</span> I was spending ₹500-1000 on random Telegram groups and losing ₹10-15k a month on FOMO trades. I thought crypto trading was just gambling until I found this. The risk management module alone paid for the course in my first month."
              </p>
              <p className="text-sm text-white/40">
                <span className="font-semibold text-white/60">Rahul S.</span> — Software Engineer, Bangalore · Enrolled 4 months ago
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2 bg-[#C87533] hover:bg-[#b5682d] text-white font-semibold py-3 px-8 rounded-xl transition-all text-base shadow-lg shadow-[#C87533]/20"
          >
            Yes, this sounds like me
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetingSection;
