import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { getBinance24hrTicker } from '../../../services/binance';

const ProfitCounter: React.FC = () => {
  const [totalProfit, setTotalProfit] = useState(27000000); // ₹2.7 Cr
  const [activeTraders, setActiveTraders] = useState(342);
  const [todayProfit, setTodayProfit] = useState(823456);
  const [btcPrice, setBtcPrice] = useState(117900);
  const [btcChange, setBtcChange] = useState(2.3);

  useEffect(() => {
    // Fetch real BTC price
    const fetchBinanceData = async () => {
      const data = await getBinance24hrTicker();
      if (data) {
        setBtcPrice(data.btc.price);
        setBtcChange(data.btc.priceChangePercent);
      }
    };

    fetchBinanceData();
    const binanceInterval = setInterval(fetchBinanceData, 10000);

    const interval = setInterval(() => {
      // Simulate real-time profit increases
      setTotalProfit(prev => prev + Math.floor(Math.random() * 5000) + 1000);
      setTodayProfit(prev => prev + Math.floor(Math.random() * 1000) + 200);
      
      // Randomly update active traders
      if (Math.random() > 0.7) {
        setActiveTraders(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(binanceInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="glass-effect border border-green-500/20 rounded-2xl p-4 shadow-2xl min-w-[280px]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-white">Live Student Profits</h3>
          <span className="flex items-center gap-1 text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            LIVE
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Total Profits
            </span>
            <motion.span 
              className="text-lg font-bold text-green-400 font-mono"
              key={totalProfit}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ₹{(totalProfit / 100000).toFixed(2)}L
            </motion.span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Trading Now
            </span>
            <span className="text-lg font-bold text-yellow-400">
              {activeTraders}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Today's Profits
            </span>
            <motion.span 
              className="text-lg font-bold text-orange-400 font-mono"
              key={todayProfit}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ₹{(todayProfit / 1000).toFixed(0)}K
            </motion.span>
          </div>
          
          <div className="flex items-center justify-between border-t border-white/10 pt-2">
            <span className="text-xs text-slate-400">BTC</span>
            <span className={`text-sm font-bold flex items-center gap-1 ${btcChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
              ${(btcPrice / 1000).toFixed(1)}K
              <span className="text-xs">({btcChange > 0 ? '+' : ''}{btcChange.toFixed(1)}%)</span>
            </span>
          </div>
        </div>
        
        <motion.div 
          className="mt-4 text-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a 
            href="#get-started" 
            className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold"
          >
            Join Them Now →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfitCounter;