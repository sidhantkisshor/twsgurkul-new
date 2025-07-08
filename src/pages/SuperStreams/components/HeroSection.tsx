import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSocialProof = () => {
    const socialProofSection = document.getElementById('social-proof-section');
    if (socialProofSection) {
      socialProofSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If social proof section doesn't exist, scroll to pricing
      scrollToPricing();
    }
  };

  return (
    <section className="pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Primary Headline with Behavioral Psychology */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Master </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Live Market Analysis
              </span>
              <span className="text-white"> with SuperStreams</span>
            </h1>

            {/* Subheadline with Benefits */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300">
              Join live trading sessions, get real-time market insights, and build wealth with{' '}
              <span className="text-green-400 font-semibold">proven strategies</span> from expert traders.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Daily Live Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Community Support</span>
              </div>
            </div>


            {/* Primary CTA with Behavioral Psychology */}
            <div className="pt-4 space-y-4">
              <motion.button
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-orange-500/25 w-full sm:w-auto relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: [
                    '0 10px 25px rgba(249, 115, 22, 0.25)',
                    '0 10px 25px rgba(249, 115, 22, 0.4)',
                    '0 10px 25px rgba(249, 115, 22, 0.25)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 }
                }}
              >
                <span className="relative z-10">Get My Trading Strategy Now</span>
                <div className="absolute inset-0 bg-white/20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>

              {/* Secondary Nudge - Curiosity Gap */}
              <div className="text-center sm:text-left">
                <button
                  onClick={scrollToSocialProof}
                  className="text-yellow-400 hover:text-yellow-300 underline text-sm font-medium transition-colors"
                >
                  See how members made ₹50L+ profits ↓
                </button>
              </div>
            </div>

            {/* Stats Grid with Social Proof */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Live Streams</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">₹50L+</div>
                <div className="text-sm text-slate-400">Member Profits</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Active Traders</div>
              </motion.div>
            </div>

            {/* Social Proof Nudge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-900">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-green-400 text-sm font-semibold">
                Join 500+ successful traders
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Video with Live Indicator */}
          <motion.div
            className="lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8 text-center">
                <div className="w-full h-64 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(34, 197, 94, 0.5)',
                          '0 0 30px rgba(34, 197, 94, 0.8)',
                          '0 0 20px rgba(34, 197, 94, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white text-2xl">▶</span>
                    </motion.div>
                    <span className="text-slate-300 font-medium">Live Market Analysis Session</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Join our expert traders for live market breakdowns and real-time strategies
                </p>
              </div>
              
              {/* Live Indicator with Enhanced Animation */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>LIVE</span>
              </motion.div>

              {/* Floating Success Indicator */}
              <motion.div
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-green-500/90 text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="text-center">
                  <div className="font-bold">+₹25,000</div>
                  <div>This Week</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators Bar with Real-Time Social Proof */}
      <div className="bg-slate-800/30 border-t border-slate-700/50 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">₹50L+ Generated by Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-medium">500+ Active Traders</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Daily Live Market Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Expert Community Support</span>
            </div>
          </motion.div>

          {/* Live Activity Ticker */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="inline-flex items-center space-x-2 text-xs text-slate-400">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live: Rajesh from Mumbai just joined • 3 minutes ago</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 