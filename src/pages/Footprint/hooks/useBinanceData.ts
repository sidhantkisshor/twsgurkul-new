import { useState, useEffect } from 'react';
import { getBinance24hrTicker } from '../../../services/binance';

interface MarketData {
  btcPrice: number;
  ethPrice: number;
  btc24hChange: number;
  eth24hChange: number;
  countdown: string;
  viewersCount: number;
}

export const useBinanceData = () => {
  const [marketData, setMarketData] = useState<MarketData>({
    btcPrice: 42850,
    ethPrice: 2250,
    btc24hChange: 2.34,
    eth24hChange: 1.87,
    countdown: "02:47:32",
    viewersCount: 873
  });

  // Fetch Binance data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBinance24hrTicker();
      if (data) {
        setMarketData(prev => ({
          ...prev,
          btcPrice: data.btc.price,
          ethPrice: data.eth.price,
          btc24hChange: data.btc.priceChangePercent,
          eth24hChange: data.eth.priceChangePercent
        }));
      }
    };
    
    // Initial fetch
    fetchData();
    
    // Update every 10 seconds
    const interval = setInterval(fetchData, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => {
        const [hours, minutes, seconds] = prev.countdown.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        
        if (totalSeconds > 0) {
          totalSeconds--;
          const h = Math.floor(totalSeconds / 3600);
          const m = Math.floor((totalSeconds % 3600) / 60);
          const s = totalSeconds % 60;
          return {
            ...prev,
            countdown: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        viewersCount: Math.max(850, Math.min(950, prev.viewersCount + Math.floor(Math.random() * 10 - 5)))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return marketData;
};