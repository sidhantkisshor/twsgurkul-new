import React from 'react';
import { motion } from 'framer-motion';
import { scrollToPricing, scrollToSocialProof } from '../utils/common';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
      
      {/* Grid pattern overlay - hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-white/10 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300">Live Crypto Trading Excellence</span>
            </div>

            {/* Primary Headline with Behavioral Psychology */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Master Live Crypto
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Trading Daily
              </span>
            </h1>

            {/* Subheadline with Benefits */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl leading-relaxed">
              Join live crypto trading sessions, get real-time crypto market insights, and build wealth with{' '}
              <span className="text-green-400 font-semibold">proven crypto strategies</span> from expert traders.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 max-w-3xl">
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">24/7</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Live Streams</p>
              </div>
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">₹50L+</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Member Profits</p>
              </div>
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Active Traders</p>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
              <motion.button
                onClick={scrollToPricing}
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <button
                onClick={scrollToSocialProof}
                className="glass-effect hover:bg-white/10 text-white rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                Watch Live Demo
              </button>
            </div>


            {/* Trust badges */}
            <div className="mt-10 sm:mt-12">
              <div className="text-xs sm:text-sm text-gray-400 mb-3">Trusted by traders from</div>
              <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-8">
                <span className="text-gray-300 font-medium text-sm sm:text-base">NSE</span>
                <span className="text-gray-300 font-medium text-sm sm:text-base">BSE</span>
                <span className="text-gray-300 font-medium text-sm sm:text-base">MCX</span>
                <span className="text-gray-300 font-medium text-sm sm:text-base">NASDAQ</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image with Glass Effect */}
          <motion.div
            className="relative lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="glass-effect rounded-3xl p-8 text-center border border-white/10">
                <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 30px rgba(34, 197, 94, 0.4)',
                          '0 0 50px rgba(34, 197, 94, 0.6)',
                          '0 0 30px rgba(34, 197, 94, 0.4)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      aria-label="Play video"
                    >
                      <span className="text-white text-3xl" aria-hidden="true">▶</span>
                    </motion.div>
                    <span className="text-white font-medium text-lg">Live Crypto Analysis</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base">
                  Join expert traders for real-time crypto market breakdowns
                </p>
              </div>
              
              {/* Live Indicator */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>LIVE NOW</span>
              </motion.div>

              {/* Floating Success Indicator */}
              <motion.div
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 glass-effect text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-2xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="text-center">
                  <div className="font-bold text-green-400">+₹25,000</div>
                  <div className="text-gray-300">This Week</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements - hidden on mobile */}
      <div className="hidden md:block absolute top-40 left-20 glass-effect rounded-full p-3 animate-float">
        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-40 right-20 glass-effect rounded-full p-3 animate-float-delayed">
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 