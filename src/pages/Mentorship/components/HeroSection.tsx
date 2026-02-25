import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Convert to IST (UTC+5:30)
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istNow = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + istOffset);

      const hours = istNow.getHours();
      const minutes = istNow.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const sessionStart = 20 * 60; // 8 PM = 1200 min
      const sessionEnd = 22 * 60 + 30; // 10:30 PM = 1350 min

      if (currentMinutes >= sessionStart && currentMinutes < sessionEnd) {
        setCountdown('Session is LIVE now');
      } else {
        // Calculate minutes until next 8 PM IST
        let diff = sessionStart - currentMinutes;
        if (diff <= 0) {
          diff += 24 * 60; // next day
        }
        const h = Math.floor(diff / 60);
        const m = diff % 60;
        setCountdown(`Next session in ${h}h ${m}m`);
      }
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-slate px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20">
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-deep-slate to-deep-slate" />
        </div>

      {/* Minimalist floating elements - hidden on mobile for clarity */}
      <motion.div
        className="hidden sm:block absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-burnt-amber/10 rounded-full filter blur-3xl"
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
        className="hidden sm:block absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-wealth-teal/10 rounded-full filter blur-3xl"
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
              <div className="bg-burnt-amber text-white py-2 px-4 rounded-full inline-flex items-center gap-2 text-xs">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <motion.div
                    className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="font-semibold tracking-wider uppercase">
                  LIVE NOW - 8 PM Every Night
                </span>
              </div>
            </motion.div>

            {/* Headline - pain-first identity attack */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold mb-4 sm:mb-6 leading-tight px-4">
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Still Losing Money to Random YouTube Tips?
              </motion.span>
            </h1>

            {/* Transformation subheadline */}
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-burnt-amber mb-6 sm:mb-10 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              There's a simpler way to trade.
            </motion.p>

            {/* Outcome with timeframe */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-soft-sand mb-12 sm:mb-20 max-w-2xl mx-auto leading-relaxed font-normal px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ maxWidth: '720px' }}
            >
              In 90 days, go from confused retail trader to a disciplined 8 PM routine - following live coaches, 5 nights a week, from your phone.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mb-10 sm:mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* Mobile: stacked grid */}
              <div className="grid grid-cols-3 gap-4 sm:hidden max-w-sm mx-auto text-center">
                <div>
                  <span className="text-2xl font-semibold text-white block">2,300+</span>
                  <span className="text-xs text-soft-sand/70 leading-tight block mt-1">traders trained</span>
                </div>
                <div>
                  <span className="text-2xl font-semibold text-white block">83%</span>
                  <span className="text-xs text-soft-sand/70 leading-tight block mt-1">complete 90 days</span>
                </div>
                <div>
                  <span className="text-2xl font-semibold text-white block">5</span>
                  <span className="text-xs text-soft-sand/70 leading-tight block mt-1">nights a week</span>
                </div>
              </div>

              {/* Desktop: inline */}
              <div className="hidden sm:flex items-baseline justify-center gap-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">2,300+</span>
                  <span className="text-sm text-soft-sand/70">traders trained since 2023</span>
                </div>
                <span className="text-soft-sand/60">·</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">83%</span>
                  <span className="text-sm text-soft-sand/70">complete the full 90 days</span>
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
                className="group relative px-8 sm:px-16 py-4 sm:py-6 bg-burnt-amber text-white rounded-full hover:bg-burnt-amber/90 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-3 sm:gap-4 font-semibold tracking-wide">
                  Join Tonight's 8 PM Session
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              {/* Trust line */}
              <div className="flex items-center gap-2 mt-4">
                <Shield size={16} className="text-wealth-teal" />
                <span className="text-xs sm:text-sm text-soft-sand/70">Live sessions every night at 8 PM IST</span>
              </div>

              {/* Countdown to 8 PM IST */}
              <p className="text-xs text-soft-sand/60 mt-3">
                {countdown}
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
