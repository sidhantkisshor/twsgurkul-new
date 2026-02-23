import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    "Live 8 PM sessions, Mon-Fri (miss one? watch the replay within 1 hour)",
    "Real trades explained as they happen — same screen, same market, no editing",
    "Small group pod, max 12 people — coach knows your name",
    "Weekly 1-on-1 review: \"here's what you did wrong, here's the fix\"",
    "Private WhatsApp group — ask questions anytime, get answers same day"
  ];

  return (
    <section id="what-you-get" className="py-32 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-slate mb-6">
              What happens inside the room
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
            
            {/* How pods work link */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="text-sm text-deep-slate/60 underline hover:text-deep-slate transition-colors inline-flex items-center gap-1"
              >
                <Info className="w-3 h-3" />
                How Pods Work
              </button>
            </motion.div>
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
      
      {/* Pod Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowModal(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-deep-slate/40 hover:text-deep-slate/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Modal Header */}
              <h3 className="text-2xl font-semibold text-deep-slate mb-6">
                How Pods Work
              </h3>
              
              {/* Pod Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-deep-slate/60 mb-2">Pod Size</h4>
                  <p className="text-base text-deep-slate/70 font-normal">
                    Limited traders per pod. Small enough for personal attention, large enough for peer learning.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-deep-slate/60 mb-2">Cadence</h4>
                  <p className="text-base text-deep-slate/70 font-normal">
                    Daily 8 PM sessions (Mon-Fri) + weekly review. Miss a session? Watch the recording within 24 hours.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-deep-slate/60 mb-2">Weekly Review</h4>
                  <p className="text-base text-deep-slate/70 font-normal">
                    Every weekend: P&L analysis, journal review, pattern recognition, and personalized action items for the coming week.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-deep-slate/60 mb-2">Accountability</h4>
                  <p className="text-base text-deep-slate/70 font-normal">
                    Daily check-ins, trade logs, and peer support. Your pod keeps you honest.
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-8 px-6 py-3 bg-burnt-amber text-white rounded-full hover:bg-burnt-amber/90 transition-colors font-normal"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatYouGetSection;
