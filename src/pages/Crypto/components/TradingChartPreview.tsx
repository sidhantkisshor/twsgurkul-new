import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';
import { getBinance24hrTicker } from '../../../services/binance';

interface Candle {
  high: number;
  low: number;
  open: number;
  close: number;
  time: string;
}

const TradingChartPreview: React.FC = () => {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [currentPrice, setCurrentPrice] = useState(117900 * 83); // USD to INR
  const [priceChange, setPriceChange] = useState(2.3);
  const [usdPrice, setUsdPrice] = useState(117900);

  useEffect(() => {
    // Fetch real Binance data
    const fetchBinanceData = async () => {
      const data = await getBinance24hrTicker();
      if (data) {
        setUsdPrice(data.btc.price);
        setCurrentPrice(data.btc.price * 83); // Convert to INR
        setPriceChange(data.btc.priceChangePercent);
      }
    };

    // Initial fetch
    fetchBinanceData();

    // Generate initial candles based on current price
    const initialCandles: Candle[] = [];
    let basePrice = currentPrice;
    
    for (let i = 0; i < 20; i++) {
      const volatility = basePrice * 0.015; // 1.5% volatility
      const open = basePrice + (Math.random() - 0.5) * volatility;
      const close = open + (Math.random() - 0.5) * volatility;
      const high = Math.max(open, close) + Math.random() * volatility * 0.5;
      const low = Math.min(open, close) - Math.random() * volatility * 0.5;
      
      initialCandles.push({
        open,
        close,
        high,
        low,
        time: `${i * 5}m`
      });
      
      basePrice = close;
    }
    
    setCandles(initialCandles);
    
    // Update every 10 seconds
    const interval = setInterval(fetchBinanceData, 10000);
    
    // Simulate minor price movements
    const priceInterval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.5) * 1000;
        return prev + change;
      });
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearInterval(priceInterval);
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">Trading Interface Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            This Is What You'll Master in <span className="text-yellow-400">Week 3</span>
          </h2>
          <p className="text-lg text-slate-300">
            Professional trading interface with real-time signals and indicators
          </p>
        </motion.div>

        <motion.div
          className="glass-effect rounded-2xl p-6 border border-white/10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Trading Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="w-8 h-8" />
                <span className="text-xl font-bold">BTC/INR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-mono">₹{(currentPrice / 100000).toFixed(2)}L</span>
                <span className={`text-sm font-medium flex items-center gap-1 ${priceChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(priceChange).toFixed(2)}%
                </span>
              </div>
              <div className="text-xs text-slate-400">
                ${usdPrice.toLocaleString()}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 font-semibold">
                BUY
              </button>
              <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 font-semibold">
                SELL
              </button>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative h-64 sm:h-96 bg-slate-800/50 rounded-lg overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full border-t border-slate-700/30"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
            </div>

            {/* Candles */}
            <div className="absolute inset-0 flex items-end justify-around px-2">
              {candles.map((candle, index) => {
                const maxPrice = Math.max(...candles.flatMap(c => [c.high, c.low]));
                const minPrice = Math.min(...candles.flatMap(c => [c.high, c.low]));
                const range = maxPrice - minPrice;
                
                const bodyHeight = Math.abs(candle.close - candle.open) / range * 100;
                const bodyBottom = (Math.min(candle.close, candle.open) - minPrice) / range * 100;
                const wickTop = (candle.high - minPrice) / range * 100;
                const wickBottom = (candle.low - minPrice) / range * 100;
                
                const isGreen = candle.close > candle.open;
                
                return (
                  <motion.div
                    key={index}
                    className="relative w-4"
                    style={{ height: '100%' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Wick */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-500"
                      style={{
                        bottom: `${wickBottom}%`,
                        height: `${wickTop - wickBottom}%`
                      }}
                    />
                    {/* Body */}
                    <div
                      className={`absolute left-0 right-0 rounded-sm ${
                        isGreen ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{
                        bottom: `${bodyBottom}%`,
                        height: `${bodyHeight}%`,
                        minHeight: '2px'
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Indicators */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-slate-300">Buy Signal Active</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded">
                <BarChart3 className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-slate-300">RSI: 65</span>
              </div>
            </div>

            {/* Profit Indicator */}
            <motion.div
              className="absolute top-4 right-4 glass-effect px-4 py-2 rounded border border-green-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-bold text-green-400">+₹12,340</span>
            </motion.div>
          </div>

          {/* Trading Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <p className="text-xs text-slate-400">24h High</p>
              <p className="text-sm font-bold text-green-400">₹{((usdPrice * 1.02 * 83) / 100000).toFixed(0)}L</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400">24h Low</p>
              <p className="text-sm font-bold text-red-400">₹{((usdPrice * 0.98 * 83) / 100000).toFixed(0)}L</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400">Volume</p>
              <p className="text-sm font-bold">₹234Cr</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400">Your P&L</p>
              <p className="text-sm font-bold text-green-400">+18.5%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-yellow-400 font-semibold">
            "Our AI-powered signals caught this 18% move. Your turn next."
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Join 1,263+ students already trading profitably
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingChartPreview;