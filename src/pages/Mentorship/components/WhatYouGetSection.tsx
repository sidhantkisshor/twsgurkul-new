import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const features = [
    "Live 8 PM sessions, Mon-Fri (miss one? watch the replay within 1 hour)",
    "Real trades explained as they happen, same screen, same market, no editing",
    "Weekly 1-on-1 review: \"here's what you did wrong, here's the fix\"",
  ];

  return (
    <section id="what-you-get" className="py-16 lg:py-24 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-deep-slate mb-6">
              What happens <span className="font-serif italic font-normal text-burnt-amber">inside</span> the room
            </h2>
          </motion.div>

          {/* Features List */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-wealth-teal flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-deep-slate/70 font-normal">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Delivered by line */}
            <motion.p
              className="text-sm text-deep-slate/70 mt-8 text-center font-normal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Delivered by certified coaches trained in Sidhant's system
            </motion.p>
          </div>

          {/* Trust Bar */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-soft-sand/50 rounded-2xl px-6 py-4">
              <p className="text-sm text-deep-slate/70 text-center font-normal">
                We trade the market you see. No screenshots. No faking. Same screen, same time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
