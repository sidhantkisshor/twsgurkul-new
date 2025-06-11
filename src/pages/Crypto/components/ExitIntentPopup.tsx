import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CheckCircle, Gift, Users, Clock, Shield, CreditCard } from 'lucide-react';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-yellow-500/30 shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>

            {/* Emergency/Urgency Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full animate-pulse">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">Wait! Special Offer</span>
              </div>
            </div>

            {/* Main Offer */}
            <div className="text-center space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Get <span className="text-green-400">₹5,000 OFF</span> + 
                <span className="text-yellow-400"> Free Bonus</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-300">
                This one-time offer expires when you leave this page
              </p>

              {/* Value Stack */}
              <div className="bg-slate-800/50 rounded-xl p-4 space-y-3 my-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Complete Course Access</span>
                  </span>
                  <span className="text-slate-400 line-through">₹19,999</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-yellow-400" />
                    <span>Exclusive Trading Calculator</span>
                  </span>
                  <span className="text-green-400">FREE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>1-on-1 Consultation Call</span>
                  </span>
                  <span className="text-green-400">FREE</span>
                </div>
                <div className="border-t border-slate-700 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Your Investment Today:</span>
                    <div>
                      <span className="text-2xl font-bold text-green-400">₹14,999</span>
                      <span className="text-xs text-slate-400 block">Save ₹5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scarcity */}
              <div className="flex items-center justify-center space-x-2 text-sm text-yellow-400">
                <Clock className="w-4 h-4" />
                <span>Offer valid for next 15 minutes only</span>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                <motion.button
                  onClick={() => {
                    window.open('https://learn.tradingwithsidhant.com/web/checkout/6847d996a56185b0df9c9e04?purchaseNow=true', '_blank');
                    onClose();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Claim Your ₹5,000 Discount →
                </motion.button>
                
                <button
                  onClick={onClose}
                  className="w-full py-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  No thanks, I'll pay full price
                </button>
              </div>

              {/* Trust elements */}
              <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure Payment</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CreditCard className="w-3 h-3" />
                  <span>EMI Available</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup; 