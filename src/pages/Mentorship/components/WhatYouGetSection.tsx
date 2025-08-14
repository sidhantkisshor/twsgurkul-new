import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    "Nightly 8 PM live market sessions, Monday–Friday",
    "Real‑time walkthrough of entries, exits, and invalidation",
    "Accountability pod with 12 traders max",
    "Weekly performance review with action items",
    "Private community and priority support"
  ];

  return (
    <section id="what-you-get" className="py-32 relative overflow-hidden bg-gray-50">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
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
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-light">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Delivered by line */}
            <motion.p
              className="text-sm text-gray-600 mt-8 text-center font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Delivered by our certified pro coaches trained in the 8 PM system
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
                className="text-sm text-gray-500 underline hover:text-gray-700 transition-colors inline-flex items-center gap-1"
              >
                <Info className="w-3 h-3" />
                How pods work
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
            <div className="bg-gray-100 rounded-2xl px-6 py-4">
              <p className="text-sm text-gray-600 text-center font-light">
                We trade the market you see, not screenshots you cannot verify.
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
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Modal Header */}
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                How pods work
              </h3>
              
              {/* Pod Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Pod Size</h4>
                  <p className="text-base text-gray-700 font-light">
                    Limited traders per pod. Small enough for personal attention, large enough for peer learning.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Cadence</h4>
                  <p className="text-base text-gray-700 font-light">
                    Daily 8 PM sessions (Mon-Fri) + weekly review. Miss a session? Watch the recording within 24 hours.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Weekly Review</h4>
                  <p className="text-base text-gray-700 font-light">
                    Every WWeekend: P&L analysis, journal review, pattern recognition, and personalized action items for the coming week.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Accountability</h4>
                  <p className="text-base text-gray-700 font-light">
                    Daily check-ins, trade logs, and peer support. No hiding. No excuses. Just consistent progress.
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-light"
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