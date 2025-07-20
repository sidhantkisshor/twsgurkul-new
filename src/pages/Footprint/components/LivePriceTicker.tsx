import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useBinanceData } from '../hooks/useBinanceData';

const LivePriceTicker: React.FC = () => {
  const marketData = useBinanceData();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20 z-[60] py-2"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6 text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">BTC:</span>
            <span className="text-white font-bold">
              ${marketData.btcPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>
            {marketData.btc24hChange > 0 ? (
              <span className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +{marketData.btc24hChange.toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {marketData.btc24hChange.toFixed(2)}%
              </span>
            )}
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-400">ETH:</span>
            <span className="text-white font-bold">
              ${marketData.ethPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>
            {marketData.eth24hChange > 0 ? (
              <span className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +{marketData.eth24hChange.toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {marketData.eth24hChange.toFixed(2)}%
              </span>
            )}
          </div>
          
          <motion.div 
            className="flex items-center gap-2 text-yellow-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="font-bold">
              WHALE: $47M BTC ORDER DETECTED
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LivePriceTicker;