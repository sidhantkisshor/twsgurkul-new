import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Gift } from 'lucide-react';
import { cryptoTrackingEvents } from '../utils/tracking';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      cryptoTrackingEvents.exitIntentShow();
    }
  }, [isOpen]);

  const handleClaimSeat = () => {
    cryptoTrackingEvents.couponClaimed(5000); // ₹5000 discount
    cryptoTrackingEvents.checkoutStart('exit_intent', 19499);
    window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-xs z-900 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 max-w-lg w-full border border-yellow-500/30 shadow-2xl relative overflow-hidden my-auto mt-12 sm:mt-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-slate-700/50 rounded-lg transition-colors z-20"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>

            {/* Timer Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
              </div>
            </div>

            {/* Main Offer */}
            <div className="text-center space-y-3 sm:space-y-4 relative z-10">
              <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight px-2">
                We've held your seat for 15 minutes
              </h2>
              
              <p className="text-sm sm:text-lg text-slate-300 px-2">
                Join today and unlock the <span className="text-yellow-400 font-semibold">Advanced Bot Trading Module</span> free.
              </p>

              {/* Bonus Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Gift className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm font-medium text-green-400">₹5,000 Value - Today Only</span>
              </div>

              {/* CTAs */}
              <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6">
                <motion.button
                  onClick={handleClaimSeat}
                  className="w-full py-3 sm:py-4 bg-linear-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-base sm:text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Claim my seat — ₹19,499
                </motion.button>
                
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs sm:text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup; 