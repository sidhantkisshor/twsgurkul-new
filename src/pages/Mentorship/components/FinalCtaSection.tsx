import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checklistItems = [
    "Same time every night",
    "One playbook that works",
    "Coach who fixes your mistakes"
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-deep-slate">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white mb-6">
              8 PM tonight. The market opens. <span className="font-serif italic font-normal text-burnt-amber">You in?</span>
            </h2>
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto text-soft-sand">
              30 days from now, you'll either have a trading routine that works, or another month of "I'll start tomorrow."
            </p>
          </motion.div>

          {/* Checklist */}
          <motion.div
            className="mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="w-5 h-5 text-wealth-teal shrink-0" />
                  <span className="text-lg font-medium text-soft-sand">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToPricing}
              className="group px-12 sm:px-16 py-5 sm:py-6 bg-burnt-amber text-white rounded-full hover:bg-burnt-amber/90 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-semibold tracking-wide">
                Join the 8 PM Room
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <p className="mt-4 text-sm text-soft-sand/60">From ₹222/day · Live sessions every night</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
