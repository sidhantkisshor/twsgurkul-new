import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { getMultipleCryptoPrices } from '../../../services/binanceCrypto';

interface CryptoPrice {
  symbol: string;
  price: number;
  change: number;
  isUp: boolean;
}

const LiveMarketTicker: React.FC = () => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', price: 117900, change: 2.3, isUp: true },
    { symbol: 'ETH', price: 3950, change: 1.8, isUp: true },
    { symbol: 'SOL', price: 245, change: -2.1, isUp: false },
    { symbol: 'BNB', price: 725, change: 3.4, isUp: true },
    { symbol: 'ADA', price: 1.05, change: -0.8, isUp: false },
    { symbol: 'XRP', price: 2.45, change: 3.4, isUp: true },
  ]);

  // Fetch real Binance data
  useEffect(() => {
    const fetchBinanceData = async () => {
      const data = await getMultipleCryptoPrices();
      if (data && data.length > 0) {
        setCryptoPrices(data.map(crypto => ({
          symbol: crypto.symbol,
          price: crypto.price,
          change: crypto.priceChangePercent,
          isUp: crypto.priceChangePercent > 0
        })));
      }
    };

    // Initial fetch
    fetchBinanceData();

    // Update every 10 seconds
    const interval = setInterval(fetchBinanceData, 10000);

    // Also simulate minor changes for visual effect
    const simulationInterval = setInterval(() => {
      setCryptoPrices(prev => prev.map(crypto => {
        // Add minor fluctuations for visual effect
        const minorChange = (Math.random() - 0.5) * 0.001;
        return {
          ...crypto,
          price: crypto.price * (1 + minorChange)
        };
      }));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(simulationInterval);
    };
  }, []);

  return (
    <div className="bg-slate-900/80 border-y border-yellow-500/20 py-3 overflow-hidden">
      <div className="flex items-center gap-8 animate-scroll-left">
        <span className="text-yellow-400 font-bold whitespace-nowrap">🔴 LIVE MARKET</span>
        {[...cryptoPrices, ...cryptoPrices].map((crypto, index) => (
          <motion.div
            key={`${crypto.symbol}-${index}`}
            className="flex items-center gap-2 whitespace-nowrap"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white font-medium">{crypto.symbol}:</span>
            <span className="text-white font-mono">
              ${crypto.price.toLocaleString('en-US', { 
                minimumFractionDigits: crypto.price < 1 ? 4 : 2,
                maximumFractionDigits: crypto.price < 1 ? 4 : 2
              })}
            </span>
            <span className={`flex items-center gap-1 ${crypto.isUp ? 'text-green-400' : 'text-red-400'}`}>
              {crypto.isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(crypto.change).toFixed(2)}%
            </span>
          </motion.div>
        ))}
        <span className="text-orange-400 font-bold animate-pulse whitespace-nowrap">⚡ STUDENTS EARNING NOW</span>
      </div>
    </div>
  );
};

export default LiveMarketTicker;