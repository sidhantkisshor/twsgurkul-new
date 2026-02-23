import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, TrendingUp, Users, Clock } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleEnroll = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="bg-deep-slate rounded-2xl p-8 max-w-lg w-full relative border border-soft-sand/10"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-soft-sand/60 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-burnt-amber/20 rounded-full mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="text-burnt-amber" size={32} />
            </motion.div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Don't Miss Out!
            </h3>

            <p className="text-xl text-soft-sand mb-6">
              <span className="font-bold text-white">93% of traders</span> who leave without joining
              <span className="text-burnt-amber font-bold"> never find a profitable system</span>
            </p>

            <div className="space-y-4 mb-6">
              <div className="rounded-lg p-4 border border-soft-sand/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Users className="text-burnt-amber" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">17 traders joined in last 2 hours</p>
                    <p className="text-sm text-soft-sand/70">Cohort filling up fast - only 8 spots left</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-4 border border-soft-sand/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-wealth-teal" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">₹47,000 average monthly profit</p>
                    <p className="text-sm text-soft-sand/70">Made by our students in last 30 days</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-4 border border-soft-sand/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Clock className="text-burnt-amber" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">Next cohort in 3 weeks</p>
                    <p className="text-sm text-soft-sand/70">You'll lose another month of potential profits</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleEnroll}
              className="w-full py-4 bg-burnt-amber text-white font-semibold rounded-full hover:bg-burnt-amber/90 transition-all transform hover:scale-105 mb-4"
            >
              Secure Your Spot Now
            </button>

            <button
              onClick={handleClose}
              className="text-sm text-soft-sand/60 hover:text-white transition-colors"
            >
              I'll continue struggling on my own
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;