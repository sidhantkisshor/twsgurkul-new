import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import InlineCTA from './InlineCTA';

const TargetingSection: React.FC = () => {
  const forYou = [
    "You've tried YouTube strategies, joined Telegram tip groups, and lost \u20B950k\u2013\u20B93L with nothing to show for it",
    "You work 9-6, trade on the side, but have no system - just random entries and hope",
    "You've taken a trading course before but need hands-on coaching, live practice, and someone to hold you accountable",
    "You understand charts, indicators, and setups - but freeze when it's time to click buy. You need someone trading next to you",
  ];

  const notForYou = [
    "You want 10x returns in a week. We teach discipline, not fantasies.",
    "You can't show up 5 nights a week for 90 days. This only works if you do.",
    "You want buy/sell signals without learning why. We make you independent, not dependent.",
    "You're already consistently profitable. You don't need this.",
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-deep-slate">
              Is this for <span className="font-serif italic font-normal text-burnt-amber">you?</span>
            </h2>
          </motion.div>

          {/* This is for you if... */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-deep-slate mb-6">
              This is for you if...
            </h3>
            <div className="space-y-4">
              {forYou.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-wealth-teal flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-deep-slate/80 font-normal leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mirror story */}
          <motion.div
            className="mb-12 bg-deep-slate rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-base sm:text-lg text-soft-sand font-normal leading-relaxed mb-4">
              "I had done 3 courses before ETM. I knew the theory. I just couldn't execute alone. The live room forced me to show up, and the weekly reviews caught every mistake."
            </blockquote>
            <p className="text-sm text-soft-sand/60">
              Vikram, Pune - Ex-IT employee, started with ₹50k
            </p>
          </motion.div>

          {/* This is NOT for you if... */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-deep-slate mb-6">
              This is NOT for you if...
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <p className="text-base sm:text-lg text-deep-slate/70 font-normal leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <InlineCTA text="Check if the 8 PM routine fits your schedule" />
        </div>
      </div>
    </section>
  );
};

export default TargetingSection;
