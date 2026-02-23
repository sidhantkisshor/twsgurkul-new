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
          className="bg-linear-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full relative border border-red-500/30"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="text-red-500" size={32} />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-linear-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
                Don't Miss Out!
              </span>
            </h3>

            <p className="text-xl text-gray-300 mb-6">
              <span className="font-bold text-white">93% of traders</span> who leave without joining 
              <span className="text-red-500 font-bold"> never find a profitable system</span>
            </p>

            <div className="space-y-4 mb-6">
              <div className="glass-effect rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center gap-3">
                  <Users className="text-yellow-500" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">17 traders joined in last 2 hours</p>
                    <p className="text-sm text-gray-400">Cohort filling up fast - only 8 spots left</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-green-500" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">₹47,000 average monthly profit</p>
                    <p className="text-sm text-gray-400">Made by our students in last 30 days</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-lg p-4 border border-red-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="text-red-500" size={24} />
                  <div className="text-left">
                    <p className="text-white font-semibold">Next cohort in 3 weeks</p>
                    <p className="text-sm text-gray-400">You'll lose another month of potential profits</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleEnroll}
              className="w-full py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 mb-4"
            >
              Secure Your Spot Now
            </button>

            <button
              onClick={handleClose}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
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