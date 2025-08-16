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
      {/* Animated background with market depth visualization */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(6, 182, 212, 0.1) 2px,
              rgba(6, 182, 212, 0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(6, 182, 212, 0.1) 2px,
              rgba(6, 182, 212, 0.1) 4px
            )`
          }}></div>
        </div>
        
        {/* Animated data points */}
        <motion.div 
          className="absolute top-20 left-10 text-cyan-500/20 font-mono text-xs"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          BTC: ${btcPrice.toLocaleString()}
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-green-500/20 font-mono text-xs"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          ETH: ${ethPrice.toLocaleString()}
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/3 text-yellow-500/20 font-mono text-xs"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        >
          VOLUME: ${largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : 'LOADING'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[600]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-xs text-slate-300">
                  Recorded modules
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-xs text-slate-300">
                  Monthly live Q&A (recordings provided)
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-xs text-slate-300">
                  Lifetime access
                </span>
              </div>
              
              <div className="flex items-start gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight flex-1">
                  <span className="text-white">{heroData.headline.line1}</span><br />
                  <span className="text-white">{heroData.headline.line2}</span><br />
                  <span className="text-cyan-400">{heroData.headline.line3}</span>
                </h1>
                <div className="flex-shrink-0 mt-1 sm:mt-2 pointer-events-none">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <span className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">TWS</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed mb-2">
                Footprint Mastery by TWS Gurukul — a recorded program for working traders with monthly live Q&A and lifetime access.
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Learn to read absorption, cumulative delta, and liquidity zones.<br className="hidden sm:block" />
                <span className="text-cyan-400 font-medium">Guess nahi. Data se trade karo.</span>
              </p>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:hidden">
              <motion.button
                onClick={handlePaymentPopup}
                className="w-full px-4 py-3 font-semibold rounded-lg text-sm bg-slate-800 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning with TWS
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-4 py-3 font-semibold rounded-lg text-sm bg-transparent border-2 border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white transition-all"
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
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg text-base sm:text-lg bg-slate-800 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning with TWS
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg text-base sm:text-lg bg-transparent border-2 border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Live Student Results
              </motion.button>
            </div>

            {/* Key Highlights Section */}
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-lg p-4 border border-slate-700 space-y-3">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Key Highlights</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white">Footprint clarity:</span>
                    <span className="text-slate-400 text-sm"> spot absorption vs. exhaustion</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white">Delta confirmation:</span>
                    <span className="text-slate-400 text-sm"> use cumulative delta for bias</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white">Liquidity zones:</span>
                    <span className="text-slate-400 text-sm"> mark likely stop clusters</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white">Risk rules:</span>
                    <span className="text-slate-400 text-sm"> pre-defined entries, invalidation, and sizing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white">Review loop:</span>
                    <span className="text-slate-400 text-sm"> post-trade logs to improve consistency</span>
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
              <div className="bg-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-500/20 mb-6 font-mono relative z-[700]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-cyan-400">
                  Live Demo • Footprint Table & Delta Shifts
                </h3>
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-[10px] sm:text-xs text-slate-400 whitespace-nowrap">BTC</span>
                  <div className="flex-1 mx-2 sm:mx-3 h-6 bg-slate-800 rounded overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/50 to-cyan-500/20"
                      initial={{ width: "60%" }}
                      animate={{ width: [`${Math.min(85, largestWhaleOrder ? (largestWhaleOrder.total / (largestWhaleOrder.total + (largestSellOrder?.total || 0))) * 100 : 60)}%`] }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs text-white px-1">
                      <span className="hidden sm:inline">Bid: </span>{largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : 'Loading'}
                    </span>
                  </div>
                  <span className={`text-xs ${btcChange > 0 ? 'text-cyan-400' : 'text-red-400'}`}>
                    {btcChange > 0 ? '+' : ''}{btcChange.toFixed(2)}%
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-[10px] sm:text-xs text-slate-400 whitespace-nowrap">ETH</span>
                  <div className="flex-1 mx-2 sm:mx-3 h-6 bg-slate-800 rounded overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 right-0 h-full bg-gradient-to-l from-red-500/50 to-red-500/20"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "55%", "40%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs text-white px-1">
                      <span className="hidden sm:inline">Ask: </span>{whaleData.eth?.largestSellOrder ? formatCurrency(whaleData.eth.largestSellOrder.total) : 'Loading'}
                    </span>
                  </div>
                  <span className={`text-xs ${ethChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {ethChange > 0 ? '+' : ''}{ethChange.toFixed(2)}%
                  </span>
                </motion.div>
                
                <div className="pt-3 border-t border-slate-800">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400">Cumulative Delta</span>
                      <motion.div 
                        className="text-cyan-400 font-bold mt-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {whaleData.btc && whaleData.btc.buyPressure ? 
                          `${whaleData.btc.buyPressure > whaleData.btc.sellPressure ? '+' : '-'}${Math.abs(whaleData.btc.buyPressure - whaleData.btc.sellPressure).toFixed(1)}%` : 
                          '+2.3%'}
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-slate-400">Absorption Level</span>
                      <motion.div 
                        className="text-amber-400 font-bold mt-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        ${(btcPrice - 500).toLocaleString()} - ${(btcPrice + 200).toLocaleString()}
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-500">
                    This is a demonstration of how order flow is interpreted in practice.
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <button
                onClick={() => setShowDemo(true)}
                className="w-full bg-slate-900/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-500/20 mb-6 hover:border-cyan-400/40 transition-colors cursor-pointer relative z-[700] group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <h3 className="text-sm font-semibold text-cyan-400">
                      Click to View Live Footprint Demo
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                    See order flow in action →
                  </span>
                </div>
              </button>
            )}

            <div
              ref={videoRef}
              className="aspect-video bg-slate-900/80 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-400/40 transition-colors cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              {!isPlaying || !shouldLoadVideo ? (
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900">
                    {/* Matrix rain effect */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-cyan-500 font-mono text-xs"
                          style={{ left: `${i * 5}%` }}
                          animate={{ y: ["-10%", "110%"] }}
                          transition={{ 
                            duration: 3 + Math.random() * 2, 
                            repeat: Infinity,
                            delay: Math.random() * 3 
                          }}
                        >
                          {Math.random() > 0.5 ? "01" : "10"}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center px-4">
                      <motion.div 
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-cyan-500/50"
                        whileHover={{ scale: 1.1, borderColor: "rgba(6, 182, 212, 0.8)" }}
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 ml-1" />
                      </motion.div>
                      <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Watch Footprint Analysis Demo</p>
                      <p className="text-xs sm:text-sm text-slate-400">See how footprint tables and delta shifts work in practice</p>
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
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-slate-800 text-cyan-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm border border-cyan-500/30 pointer-events-none z-[700]"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live Demo
            </motion.div>
            
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-700 pointer-events-none z-[700]">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm whitespace-nowrap">Order Flow Visualization</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;