import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { urgencyData } from '../data';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
                Get Crypto Trading Profits Up to ₹2L Monthly
              </motion.span>
              <motion.span 
                className="block text-gray-400 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                in 30 Days Using Live 8PM Mentorship Sessions
              </motion.span>
            </h1>

            {/* Subheadline - refined */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 sm:mb-20 max-w-3xl mx-auto leading-relaxed font-light px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Done wasting lakhs on courses that show only past performance? The only transparent program that employs nightly live sessions and real capital deployment to deliver ₹2L monthly profits. No recordings, no fake screenshots, and measurable results from day one of joining.
            </motion.p>

            {/* Stats - minimal and elegant */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-light text-gray-900">₹50K</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Average monthly profit</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-light text-gray-900">2,347</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Active traders</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-light text-gray-900">89%</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Success rate</p>
              </div>
            </motion.div>

            {/* CTA - elegant simplicity */}
            <motion.div 
              className="flex flex-col items-center gap-6 sm:gap-8"
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
              
              <p className="text-xs sm:text-sm text-gray-500">
                Join {urgencyData.enrollmentsToday} traders who started today
              </p>
            </motion.div>

            {/* Subtle urgency */}
            <motion.div 
              className="mt-12 sm:mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 flex-wrap justify-center">
                <Clock size={16} />
                <span className="text-center">
                  {urgencyData.spotsLeft} seats • 
                  Expires in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </motion.div>

            {/* Live results - minimal visualization */}
            <motion.div
              className="mt-16 sm:mt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.6 }}
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">Today's results</p>
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">Bitcoin</p>
                  <p className="text-xl sm:text-2xl font-light text-gray-900">+12.7%</p>
                  <p className="text-base sm:text-lg text-gray-600 mt-1">₹47,300</p>
                </motion.div>
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                >
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">Ethereum</p>
                  <p className="text-xl sm:text-2xl font-light text-gray-900">+8.3%</p>
                  <p className="text-base sm:text-lg text-gray-600 mt-1">₹23,100</p>
                </motion.div>
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">Solana</p>
                  <p className="text-xl sm:text-2xl font-light text-gray-900">+15.2%</p>
                  <p className="text-base sm:text-lg text-gray-600 mt-1">₹31,500</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;