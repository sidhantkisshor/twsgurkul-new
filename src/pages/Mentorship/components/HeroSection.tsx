import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white px-4 sm:px-6 lg:px-12 pt-32 sm:pt-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        </div>
      
      {/* Minimalist floating elements - hidden on mobile for clarity */}
      <motion.div
        className="hidden sm:block absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gray-100/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gray-100/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content - centered and minimal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Live indicator - smaller, more subtle */}
            <motion.div 
              className="mb-6 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-gray-900 text-white py-2 px-4 rounded-full inline-flex items-center gap-2 text-xs">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <motion.div 
                    className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="font-light tracking-wider uppercase">
                  Live Trading • 8 PM Daily
                </span>
              </div>
            </motion.div>

            {/* Headline - pure simplicity */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-tight px-4">
              <motion.span 
                className="block text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Build Consistent Crypto Profits in the 8 PM Window
              </motion.span>
            </h1>

            {/* Subheadline - refined */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 sm:mb-20 max-w-2xl mx-auto leading-relaxed font-light px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ maxWidth: '720px' }}
            >
              Trade a clear playbook live with our certified pro coaches, five nights a week. India-friendly timing, real executions, and weekly reviews that build discipline.
            </motion.p>

            {/* Stats - responsive layout for mobile */}
            <motion.div 
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* First two stats - always inline */}
              <div className="flex items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base mb-4 sm:mb-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-light text-gray-900">2,300+</span>
                  <span className="text-xs sm:text-sm text-gray-500">traders trained</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-light text-gray-900">1,800+</span>
                  <span className="text-xs sm:text-sm text-gray-500">live sessions</span>
                </div>
              </div>
              
              {/* Third stat - below on mobile, inline on desktop */}
              <div className="flex items-center justify-center sm:hidden">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light text-gray-900">4.8/5</span>
                  <span className="text-xs text-gray-500">session rating (90 days)</span>
                </div>
              </div>
              
              {/* Desktop version - only third stat */}
              <div className="hidden sm:flex items-center justify-center gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-light text-gray-900">4.8/5</span>
                  <span className="text-sm text-gray-500">session rating (90 days)</span>
                </div>
              </div>
            </motion.div>

            {/* CTA - elegant simplicity */}
            <motion.div 
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToPricing}
                className="group relative px-8 sm:px-16 py-4 sm:py-6 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-3 sm:gap-4 font-light tracking-wide">
                  Begin your journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Cohort capped at 50 seats for mentor ratio
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;