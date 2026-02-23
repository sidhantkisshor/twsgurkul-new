import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, BarChart3 } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { useWhaleTracker } from '../hooks/useWhaleTracker';
import { formatCurrency } from '../../../services/binanceV2';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Lazy load video section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0.01
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whaleData = useWhaleTracker();

  // Get whale orders with better handling
  const largestWhaleOrder = whaleData.btc?.largestBuyOrder || null;
  const largestSellOrder = whaleData.btc?.largestSellOrder || null;

  // Get current BTC price and stats
  const btcPrice = whaleData.btc?.price || 42000;
  const btcChange = whaleData.btc?.priceChange24h || 0;
  const ethPrice = whaleData.eth?.price || 2200;
  const ethChange = whaleData.eth?.priceChange24h || 0;

  const heroData = {
    headline: {
      line1: "See order flow before",
      line2: "it hits the chart.",
      line3: "Plan clean entries. Exit with rules."
    },
    description: {
      main: "A recorded footprint trading program for working traders — with monthly live Q&A.",
      details: "Learn to read absorption, cumulative delta, and liquidity zones so your entries/exits are planned, not guessed."
    }
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0 relative overflow-hidden">
      {/* Background with subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[#2C3539]">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(200,117,51,0.08) 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-600">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-[#3A4449]/60 border border-[#3A4449] rounded-full text-xs text-[#B8A99A]">
                  Recorded modules
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-[#3A4449]/60 border border-[#3A4449] rounded-full text-xs text-[#B8A99A]">
                  Monthly live Q&A (recordings provided)
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-[#3A4449]/60 border border-[#3A4449] rounded-full text-xs text-[#B8A99A]">
                  Lifetime access
                </span>
              </div>

              <div className="flex items-start gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight flex-1">
                  <span className="text-[#EDE6D8]">{heroData.headline.line1}</span><br />
                  <span className="text-[#EDE6D8]">{heroData.headline.line2}</span><br />
                  <span className="text-[#C87533]">{heroData.headline.line3}</span>
                </h1>
                <div className="shrink-0 mt-1 sm:mt-2 pointer-events-none">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-[#C87533] to-[#A85E28] rounded-full flex items-center justify-center shadow-lg shadow-[#C87533]/30">
                    <span className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">TWS</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-xl text-[#B8A99A] leading-relaxed mb-2">
                Footprint Mastery by TWS Gurukul — a recorded program for working traders with monthly live Q&A and lifetime access.
              </p>
              <p className="text-sm sm:text-base text-[#B8A99A]">
                Learn to read absorption, cumulative delta, and liquidity zones.<br className="hidden sm:block" />
                <span className="font-serif italic text-[#C87533] font-medium">Guess nahi. Data se trade karo.</span>
              </p>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:hidden">
              <motion.button
                onClick={handlePaymentPopup}
                className="w-full px-4 py-3 font-bold rounded-full text-sm bg-[#C87533] hover:bg-[#A85E28] text-white shadow-lg shadow-[#C87533]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning with TWS
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-4 py-3 font-semibold rounded-full text-sm bg-transparent border-2 border-[#C87533] text-[#C87533] hover:bg-[#C87533]/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Student Results
              </motion.button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex gap-4">
              <motion.button
                onClick={handlePaymentPopup}
                className="px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full text-base sm:text-lg bg-[#C87533] hover:bg-[#A85E28] text-white shadow-lg shadow-[#C87533]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning with TWS
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-base sm:text-lg bg-transparent border-2 border-[#C87533] text-[#C87533] hover:bg-[#C87533]/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Live Student Results
              </motion.button>
            </div>

            {/* Key Highlights Section */}
            <div className="bg-[#3A4449]/60 backdrop-blur-xs rounded-lg p-4 border border-[#3A4449] space-y-3">
              <h3 className="text-sm font-semibold text-[#B8956A] uppercase tracking-wider mb-3">Key Highlights</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-[#EDE6D8]">Footprint clarity:</span>
                    <span className="text-[#B8A99A] text-sm"> spot absorption vs. exhaustion</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-[#EDE6D8]">Delta confirmation:</span>
                    <span className="text-[#B8A99A] text-sm"> use cumulative delta for bias</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-[#EDE6D8]">Liquidity zones:</span>
                    <span className="text-[#B8A99A] text-sm"> mark likely stop clusters</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-[#EDE6D8]">Risk rules:</span>
                    <span className="text-[#B8A99A] text-sm"> pre-defined entries, invalidation, and sizing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C87533] mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-[#EDE6D8]">Review loop:</span>
                    <span className="text-[#B8A99A] text-sm"> post-trade logs to improve consistency</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Live Demo Section - Hidden by default */}
            {showDemo ? (
              <div className="bg-[#0B1221] backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-[#0A8D7A]/30 mb-6 font-mono relative z-700 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[#EDE6D8]">
                  Live Demo • Footprint Table & Delta Shifts
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#0A8D7A]/20 text-[#0A8D7A] rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A8D7A] animate-pulse"></span>
                    LIVE
                  </span>
                  <Activity className="w-4 h-4 text-[#0A8D7A] animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <motion.div
                  className="flex items-center justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-[10px] sm:text-xs text-[#B8A99A] whitespace-nowrap">BTC</span>
                  <div className="flex-1 mx-2 sm:mx-3 h-6 bg-[#0A8D7A]/20 rounded-sm overflow-hidden relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#0A8D7A]"
                      initial={{ width: "60%" }}
                      animate={{ width: [`${Math.min(85, largestWhaleOrder ? (largestWhaleOrder.total / (largestWhaleOrder.total + (largestSellOrder?.total || 0))) * 100 : 60)}%`] }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs text-[#EDE6D8] px-1">
                      <span className="hidden sm:inline">Bid: </span>{largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : 'Loading'}
                    </span>
                  </div>
                  <span className={`text-xs ${btcChange > 0 ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                    {btcChange > 0 ? '+' : ''}{btcChange.toFixed(2)}%
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-[10px] sm:text-xs text-[#B8A99A] whitespace-nowrap">ETH</span>
                  <div className="flex-1 mx-2 sm:mx-3 h-6 bg-[#E5484D]/20 rounded-sm overflow-hidden relative">
                    <motion.div
                      className="absolute top-0 right-0 h-full bg-[#E5484D]"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "55%", "40%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs text-[#EDE6D8] px-1">
                      <span className="hidden sm:inline">Ask: </span>{whaleData.eth?.largestSellOrder ? formatCurrency(whaleData.eth.largestSellOrder.total) : 'Loading'}
                    </span>
                  </div>
                  <span className={`text-xs ${ethChange > 0 ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                    {ethChange > 0 ? '+' : ''}{ethChange.toFixed(2)}%
                  </span>
                </motion.div>

                <div className="pt-3 border-t border-[#3A4449]">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#B8A99A]">Cumulative Delta</span>
                      <motion.div
                        className="text-[#0A8D7A] font-bold mt-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {whaleData.btc && whaleData.btc.buyPressure ?
                          `${whaleData.btc.buyPressure > whaleData.btc.sellPressure ? '+' : '-'}${Math.abs(whaleData.btc.buyPressure - whaleData.btc.sellPressure).toFixed(1)}%` :
                          '+2.3%'}
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-[#B8A99A]">Absorption Level</span>
                      <motion.div
                        className="text-[#D4943F] font-bold mt-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        ${(btcPrice - 500).toLocaleString()} - ${(btcPrice + 200).toLocaleString()}
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-[#B8A99A]/60">
                    This is a demonstration of how order flow is interpreted in practice.
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <button
                onClick={() => setShowDemo(true)}
                className="w-full bg-[#0B1221] backdrop-blur-xs rounded-2xl p-4 sm:p-6 border border-[#0A8D7A]/30 mb-6 hover:border-[#0A8D7A]/50 transition-colors cursor-pointer relative z-700 group shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#0A8D7A] animate-pulse" />
                    <h3 className="text-sm font-semibold text-[#EDE6D8]">
                      Click to View Live Footprint Demo
                    </h3>
                  </div>
                  <span className="text-xs text-[#B8A99A] group-hover:text-[#0A8D7A] transition-colors">
                    See order flow in action →
                  </span>
                </div>
              </button>
            )}

            <div
              ref={videoRef}
              className="aspect-video bg-[#0B1221] rounded-2xl border border-[#C87533]/20 overflow-hidden hover:border-[#C87533]/40 transition-colors cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              {!isPlaying || !shouldLoadVideo ? (
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#0B1221]" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center px-4">
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C87533]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-[#C87533]/50"
                        whileHover={{ scale: 1.1, borderColor: "rgba(200, 117, 51, 0.8)" }}
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#C87533] ml-1" />
                      </motion.div>
                      <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-[#EDE6D8]">Watch Footprint Analysis Demo</p>
                      <p className="text-xs sm:text-sm text-[#B8A99A]">See how footprint tables and delta shifts work in practice</p>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rPUQ_qtqH_M?start=22&autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                  title="Footprint Mastery Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#0A8D7A]/20 text-[#0A8D7A] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm border border-[#0A8D7A]/30 pointer-events-none z-700"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A8D7A] animate-pulse"></span>
                Live Demo
              </span>
            </motion.div>

            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0B1221]/90 backdrop-blur-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#3A4449] pointer-events-none z-700">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C87533]" />
                <span className="text-xs sm:text-sm text-[#B8956A] whitespace-nowrap">Order Flow Visualization</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
