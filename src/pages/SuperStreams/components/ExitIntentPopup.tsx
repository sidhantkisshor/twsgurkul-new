import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExitIntentPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let exitTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport (intent to close tab/navigate away)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        // This will show the browser's default dialog
        e.preventDefault();
        e.returnValue = '';
        
        // Show our custom popup after a brief delay
        exitTimer = setTimeout(() => {
          setShowPopup(true);
          setHasShown(true);
        }, 100);
      }
    };

    // Also show popup after 45 seconds if user hasn't taken action
    const timeoutTimer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(exitTimer);
      clearTimeout(timeoutTimer);
    };
  }, [hasShown]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsExiting(false);
    }, 300);
  };

  const handleStayAndJoin = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
    handleClose();
  };

  const handleGetFreeAccess = () => {
    // This could integrate with email capture
    console.log('Free access claimed with SAVE20');
    alert('Free 7-day access granted! Check your email for login details.');
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-red-500/50 p-6 md:p-8 max-w-lg w-full relative overflow-hidden my-4 max-h-[90vh] overflow-y-auto ${
            isExiting ? 'animate-pulse' : ''
          }`}
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Urgency Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Attention-Grabbing Header */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-3xl font-bold text-red-400 mb-2">
                Wait! Don't Leave Empty-Handed
              </h2>
              <p className="text-lg text-yellow-400 font-semibold">
                You're 1 click away from joining 500+ profitable traders
              </p>
            </div>

            {/* Loss Aversion Hook */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <h3 className="text-red-300 font-bold mb-2">⏰ What you're about to miss:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-red-400">❌</span>
                  <span>Daily live market analysis (worth ₹5,000/month)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-400">❌</span>
                  <span>Real-time trade alerts from experts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-400">❌</span>
                  <span>Community of 500+ successful traders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-400">❌</span>
                  <span>Limited-time ₹2,499 pricing (increasing soon)</span>
                </li>
              </ul>
            </div>

            {/* Reciprocity Offer */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-6 mb-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  🎁 Special Exit Offer
                </h3>
                <p className="text-white text-lg font-semibold mb-2">
                  FREE 7-Day Trial + 20% Discount
                </p>
                <p className="text-slate-300 text-sm mb-4">
                  Experience our live sessions risk-free, then get 20% off any plan
                </p>
                
                {/* Discount Code */}
                <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-3 mb-4">
                  <p className="text-yellow-400 font-bold text-lg">
                    Code: SAVE20
                  </p>
                  <p className="text-xs text-slate-400">
                    Valid for next 24 hours only
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                  RK
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Rajesh K.</p>
                  <p className="text-slate-400 text-xs">Joined 2 months ago</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm italic">
                "I almost left without joining. Best decision to try the free trial first. 
                Made ₹45,000 in my first month with their live guidance!"
              </p>
            </div>

            {/* Urgency Counter */}
            <motion.div
              className="text-center mb-6"
              animate={{ 
                scale: [1, 1.05, 1],
                color: ['#ef4444', '#f97316', '#ef4444']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-red-400 font-bold">
                🔥 Only 12 free trials left today
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Primary CTA - Free Trial */}
              <motion.button
                onClick={handleGetFreeAccess}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg py-4 text-lg shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: [
                    '0 4px 20px rgba(34, 197, 94, 0.3)',
                    '0 4px 25px rgba(34, 197, 94, 0.5)',
                    '0 4px 20px rgba(34, 197, 94, 0.3)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 }
                }}
              >
                <span className="relative z-10">
                  Yes! Give Me FREE 7-Day Access + 20% Off
                </span>
                <div className="absolute inset-0 bg-white/20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>

              {/* Secondary CTA - Direct to Pricing */}
              <button
                onClick={handleStayAndJoin}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg py-3 border border-orange-500/50 hover:bg-orange-600 transition-colors"
              >
                Skip Trial - Show Me Pricing Plans
              </button>

              {/* Exit Option */}
              <button
                onClick={handleClose}
                className="w-full bg-slate-700/50 text-slate-300 font-medium rounded-lg py-3 hover:bg-slate-700 transition-colors"
              >
                No thanks, I'll keep struggling alone
              </button>
            </div>

            {/* Risk Reversal */}
            <div className="text-center mt-4">
              <p className="text-xs text-slate-400">
                🔒 100% secure • No spam • Unsubscribe anytime • 30-day guarantee
              </p>
            </div>

            {/* Scarcity Timer */}
            <motion.div
              className="text-center mt-4 bg-red-500/20 border border-red-500/30 rounded-lg p-2"
              animate={{ 
                borderColor: ['rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.6)', 'rgba(239, 68, 68, 0.3)']
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <p className="text-red-400 text-xs font-semibold">
                ⏰ Offer expires in: 23:45:12
              </p>
            </motion.div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup; 