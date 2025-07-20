import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Activity, Eye, BarChart3, TrendingUp } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import { useWhaleTracker } from '../hooks/useWhaleTracker';
import { formatCurrency } from '../../../services/binanceV2';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  const whaleData = useWhaleTracker();
  
  // Get whale orders with better handling
  const hasWhaleOrders = whaleData.btc?.whaleOrders && whaleData.btc.whaleOrders.length > 0;
  const largestWhaleOrder = whaleData.btc?.largestBuyOrder || null;
  const largestSellOrder = whaleData.btc?.largestSellOrder || null;
  
  // Calculate total whale volume
  const totalWhaleVolume = whaleData.btc?.whaleOrders.reduce((sum, order) => sum + order.total, 0) || 0;
  
  // Get current BTC price and stats
  const btcPrice = whaleData.btc?.price || 42000;
  const btcChange = whaleData.btc?.priceChange24h || 0;
  const ethPrice = whaleData.eth?.price || 2200;
  const ethChange = whaleData.eth?.priceChange24h || 0;

  const heroData = {
    headline: {
      line1: "How 873 Traders Turned",
      line2: "$5K Into $127K+ in 4 Months",
      line3: "(Using This Banned Method)"
    },
    description: {
      part1: "They see what you can't:",
      highlight1: "Every $100K+ whale order",
      part2: `BEFORE it executes. Right now, ${hasWhaleOrders ? `a ${formatCurrency(largestWhaleOrder?.total || 0)} BTC order sits at $${largestWhaleOrder?.price.toLocaleString() || '0'}` : 'whale trackers are scanning for the next big move'}. In ${whaleData.countdown},`,
      highlight2: "my students profit $15K-$75K minimum",
      part3: ". Want to join them? (Only 7 spots left before Binance shuts us down)"
    }
  };

  return (
    <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          WHALE: ${largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : '$100M+'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full mb-4">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400">LIVE WHALE TRACKER • {whaleData.btc?.whaleOrders.length || 0} ORDERS DETECTED</span>
              </div>
              
              <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-tight font-mono">
                <span className="text-white">{heroData.headline.line1}</span><br />
                <motion.span 
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200%" }}
                >
                  {heroData.headline.line2}
                </motion.span><br />
                <span className="text-white">{heroData.headline.line3}</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                {heroData.description.part1} <strong className="text-cyan-400">{heroData.description.highlight1}</strong> {heroData.description.part2}
                <span className="text-teal-400 font-semibold"> {heroData.description.highlight2}</span>{heroData.description.part3}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <motion.div 
                className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-cyan-500/20 flex items-center space-x-3"
                whileHover={{ borderColor: "rgba(6, 182, 212, 0.5)", scale: 1.02 }}
              >
                <Eye className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Whale X-Ray</p>
                  <p className="text-xs text-slate-400">$100K+ orders exposed</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-teal-500/20 flex items-center space-x-3"
                whileHover={{ borderColor: "rgba(20, 184, 166, 0.5)", scale: 1.02 }}
              >
                <BarChart3 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Profit Alerts</p>
                  <p className="text-xs text-slate-400">Before 99% know</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={handlePaymentPopup}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg overflow-hidden text-base sm:text-lg bg-transparent border-2 border-cyan-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center space-x-2 text-white">
                <span>Yes, Show Me The {largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : '$100M+'} Order NOW →</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <motion.div 
                className="text-center bg-slate-900/60 backdrop-blur border border-cyan-500/20 rounded-lg p-2 sm:p-3"
                whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
              >
                <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">{largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : '$100M+'}</p>
                <p className="text-xs text-slate-400">Whale Order</p>
              </motion.div>
              <motion.div 
                className="text-center bg-slate-900/60 backdrop-blur border border-teal-500/20 rounded-lg p-2 sm:p-3"
                whileHover={{ borderColor: "rgba(20, 184, 166, 0.4)" }}
              >
                <p className="text-xl sm:text-2xl font-bold text-teal-400 font-mono">${(btcPrice / 1000).toFixed(1)}K</p>
                <p className="text-xs text-slate-400">BTC Price</p>
              </motion.div>
              <motion.div 
                className="text-center bg-slate-900/60 backdrop-blur border border-green-500/20 rounded-lg p-2 sm:p-3"
                whileHover={{ borderColor: "rgba(34, 197, 94, 0.4)" }}
              >
                <p className="text-xl sm:text-2xl font-bold text-green-400 font-mono">{whaleData.countdown.slice(0, 5)}</p>
                <p className="text-xs text-slate-400">Till Pump</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Market Depth Visualization */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 mb-6 font-mono">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-cyan-400">
                  {whaleData.isLoading ? 'CONNECTING TO BINANCE...' : hasWhaleOrders ? `LIVE WHALE TRACKER • ${whaleData.btc?.whaleOrders.length} WHALES • ${formatCurrency(totalWhaleVolume)} TOTAL` : 'LIVE WHALE TRACKER • SCANNING FOR WHALES...'}
                </h3>
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs text-slate-400">BTC ${btcPrice.toLocaleString()}</span>
                  <div className="flex-1 mx-3 h-6 bg-slate-800 rounded overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/50 to-cyan-500/20"
                      initial={{ width: "60%" }}
                      animate={{ width: [`${Math.min(85, largestWhaleOrder ? (largestWhaleOrder.total / (largestWhaleOrder.total + (largestSellOrder?.total || 0))) * 100 : 60)}%`] }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                      {largestWhaleOrder ? `${formatCurrency(largestWhaleOrder.total)} BUY @ $${largestWhaleOrder.price.toLocaleString()}` : 'Scanning for whale orders...'}
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
                  <span className="text-xs text-slate-400">ETH ${ethPrice.toLocaleString()}</span>
                  <div className="flex-1 mx-3 h-6 bg-slate-800 rounded overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 right-0 h-full bg-gradient-to-l from-red-500/50 to-red-500/20"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "55%", "40%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                      {whaleData.eth?.largestSellOrder ? 
                        `${formatCurrency(whaleData.eth.largestSellOrder.total)} SELL @ $${whaleData.eth.largestSellOrder.price.toLocaleString()}` : 
                        whaleData.eth?.largestBuyOrder ? 
                        `${formatCurrency(whaleData.eth.largestBuyOrder.total)} BUY @ $${whaleData.eth.largestBuyOrder.price.toLocaleString()}` :
                        '$23M SELL @ $2,245'}
                    </span>
                  </div>
                  <span className={`text-xs ${ethChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {ethChange > 0 ? '+' : ''}{ethChange.toFixed(2)}%
                  </span>
                </motion.div>
                
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">NET DELTA</span>
                    <motion.span 
                      className="text-green-400 font-bold"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {whaleData.btc && whaleData.btc.buyPressure ? 
                        `${whaleData.btc.buyPressure > whaleData.btc.sellPressure ? '+' : '-'}${Math.abs(whaleData.btc.buyPressure - whaleData.btc.sellPressure).toFixed(1)}% ${whaleData.btc.buyPressure > whaleData.btc.sellPressure ? 'BULLISH' : 'BEARISH'} (${formatCurrency(totalWhaleVolume)})` : 
                        'CALCULATING MARKET PRESSURE...'}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="aspect-video bg-slate-900/80 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-400/40 transition-colors cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              {!isPlaying ? (
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
                      <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Watch Real Whale Detection</p>
                      <p className="text-xs sm:text-sm text-slate-400">Live walkthrough: How I caught today's {largestWhaleOrder ? formatCurrency(largestWhaleOrder.total) : '$100M+'} order</p>
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/footprint-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {whaleData.viewersCount} WATCHING
            </motion.div>
            
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-500/30">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm whitespace-nowrap font-mono">REAL-TIME DATA FEED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;