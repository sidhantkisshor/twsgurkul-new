import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [urgencyText, setUrgencyText] = useState('23 people viewing');

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    // Simulate live activity updates
    const updateUrgency = () => {
      const urgencyMessages = [
        '23 people viewing',
        'Rajesh just joined',
        '₹15,000 profit today',
        'Live session starting',
        '47 people online',
        'Priya from Delhi joined',
        '2 spots left today',
        'Live analysis active'
      ];
      
      setUrgencyText(urgencyMessages[Math.floor(Math.random() * urgencyMessages.length)]);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Update urgency text every 5 seconds
    const urgencyInterval = setInterval(updateUrgency, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(urgencyInterval);
    };
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-40 max-w-sm"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          {/* Main Floating Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
            {/* Live Activity Indicator */}
            <motion.div
              className="flex items-center space-x-2 mb-3"
              key={urgencyText} // Re-animate when text changes
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-semibold">
                {urgencyText}
              </span>
            </motion.div>

            {/* Compelling Headline */}
            <h3 className="text-white font-bold text-lg mb-2 leading-tight">
              Don't Trade Alone!
            </h3>
            
            <p className="text-slate-300 text-sm mb-4">
              Join live sessions with expert traders and community support.
            </p>

            {/* Value Props */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-slate-300 text-xs">Real-time market analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-slate-300 text-xs">500+ successful traders</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-slate-300 text-xs">₹50L+ total profits made</span>
              </div>
            </div>

            {/* Primary Floating CTA */}
            <motion.button
              onClick={scrollToPricing}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg py-3 text-sm shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  '0 4px 15px rgba(249, 115, 22, 0.3)',
                  '0 4px 20px rgba(249, 115, 22, 0.5)',
                  '0 4px 15px rgba(249, 115, 22, 0.3)'
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 0.2 }
              }}
            >
              <span className="relative z-10">Start My Journey Now</span>
              <div className="absolute inset-0 bg-white/20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>

            {/* Risk Reversal */}
            <p className="text-center text-xs text-slate-400 mt-2">
              30-day guarantee • No risk
            </p>

            {/* Scarcity Element */}
            <motion.div
              className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 mt-3"
              animate={{ 
                scale: [1, 1.02, 1],
                borderColor: ['rgba(234, 179, 8, 0.3)', 'rgba(234, 179, 8, 0.6)', 'rgba(234, 179, 8, 0.3)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-yellow-400 text-xs">⚡</span>
                <span className="text-yellow-400 text-xs font-semibold">
                  Limited time pricing
                </span>
              </div>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile-Optimized Sticky Bottom CTA (for smaller screens) */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-4 z-40">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold">{urgencyText}</span>
                </div>
                <h4 className="text-white font-bold text-sm">Join SuperStreams</h4>
                <p className="text-slate-300 text-xs">Live trading community</p>
              </div>
              
              <motion.button
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg px-6 py-3 text-sm shadow-lg"
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta; 