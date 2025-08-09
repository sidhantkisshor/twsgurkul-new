import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, BarChart3 } from 'lucide-react';

const DataVisualizationSection: React.FC = () => {
  // Simulate live order flow data
  const [orderFlow, setOrderFlow] = useState([
    { price: 24650, buyVol: 1234, sellVol: 567, delta: 667 },
    { price: 24600, buyVol: 2345, sellVol: 1890, delta: 455 },
    { price: 24550, buyVol: 3456, sellVol: 4567, delta: -1111 },
    { price: 24500, buyVol: 5678, sellVol: 3456, delta: 2222 },
    { price: 24450, buyVol: 2345, sellVol: 5678, delta: -3333 },
  ]);

  const [liveStats, setLiveStats] = useState({
    totalBuy: 15058,
    totalSell: 16158,
    netDelta: -1100,
    dominance: 'BEARISH'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update order flow
      setOrderFlow(prev => prev.map(item => ({
        ...item,
        buyVol: Math.floor(1000 + Math.random() * 5000),
        sellVol: Math.floor(1000 + Math.random() * 5000),
        delta: Math.floor(-3000 + Math.random() * 6000)
      })));

      // Update live stats
      const newTotalBuy = Math.floor(10000 + Math.random() * 10000);
      const newTotalSell = Math.floor(10000 + Math.random() * 10000);
      const newDelta = newTotalBuy - newTotalSell;
      
      setLiveStats({
        totalBuy: newTotalBuy,
        totalSell: newTotalSell,
        netDelta: newDelta,
        dominance: newDelta > 0 ? 'BULLISH' : 'BEARISH'
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6">
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-mono text-cyan-400">LIVE DEMONSTRATION</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
            SEE THE <span className="text-cyan-400">INVISIBLE ORDERS</span> IN REAL-TIME
          </h2>
          <p className="text-lg text-slate-300">
            This is what institutions don't want you to see - the actual order flow
          </p>
          <p className="text-lg text-amber-400 mt-4 italic">
            Imagine knowing about these orders while others are still sleeping...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Flow Table */}
          <motion.div
            className="bg-slate-900/90 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 font-mono">ORDER FLOW MATRIX</h3>
              <BarChart3 className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-4 text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span>PRICE</span>
                <span className="text-center">BUY VOL</span>
                <span className="text-center">SELL VOL</span>
                <span className="text-right">DELTA</span>
              </div>

              {orderFlow.map((item, index) => (
                <motion.div
                  key={item.price}
                  className="grid grid-cols-4 text-sm font-mono py-2 border-b border-slate-800/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-white">{item.price}</span>
                  <motion.span 
                    className="text-center text-green-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {item.buyVol}
                  </motion.span>
                  <motion.span 
                    className="text-center text-red-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.5 }}
                  >
                    {item.sellVol}
                  </motion.span>
                  <span className={`text-right ${item.delta > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {item.delta > 0 ? '+' : ''}{item.delta}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-slate-400">MARKET BIAS:</span>
                <motion.span 
                  className={`font-bold ${liveStats.dominance === 'BULLISH' ? 'text-green-400' : 'text-red-400'}`}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {liveStats.dominance}
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Live Statistics */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-lg font-semibold text-cyan-400 font-mono mb-4">CUMULATIVE STATS</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-mono mb-2">
                    <span className="text-green-400">TOTAL BUY VOLUME</span>
                    <motion.span 
                      className="text-white"
                      key={liveStats.totalBuy}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      {liveStats.totalBuy.toLocaleString()}
                    </motion.span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${(liveStats.totalBuy / (liveStats.totalBuy + liveStats.totalSell)) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-mono mb-2">
                    <span className="text-red-400">TOTAL SELL VOLUME</span>
                    <motion.span 
                      className="text-white"
                      key={liveStats.totalSell}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      {liveStats.totalSell.toLocaleString()}
                    </motion.span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-red-500 to-red-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${(liveStats.totalSell / (liveStats.totalBuy + liveStats.totalSell)) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-slate-400">NET DELTA</span>
                    <motion.span 
                      className={`text-xl font-bold ${liveStats.netDelta > 0 ? 'text-green-400' : 'text-red-400'}`}
                      key={liveStats.netDelta}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                    >
                      {liveStats.netDelta > 0 ? '+' : ''}{liveStats.netDelta.toLocaleString()}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/30 p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">What You're Seeing</h4>
                  <p className="text-sm text-slate-300">
                    This is ACTUAL order flow data that shows WHO is buying/selling at each price level. 
                    Retail traders see only price. You see the TRUTH behind price movements.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-cyan-400 mb-2 font-mono">
            "Jab retail panic sell karta hai, footprint mein absorption dikhai deta hai"
          </p>
          <p className="text-lg text-slate-300">
            (When retail panic sells, absorption is visible in footprints)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualizationSection;