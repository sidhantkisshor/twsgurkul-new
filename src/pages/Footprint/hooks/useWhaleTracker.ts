import { useState, useEffect } from 'react';
import { getMultipleSymbolsData, MarketData } from '../../../services/binanceV2';

interface WhaleTrackerData {
  btc: MarketData | null;
  eth: MarketData | null;
  isLoading: boolean;
  lastUpdate: Date;
  countdown: string;
  viewersCount: number;
}

export const useWhaleTracker = () => {
  const [data, setData] = useState<WhaleTrackerData>({
    btc: null,
    eth: null,
    isLoading: true,
    lastUpdate: new Date(),
    countdown: "02:47:32",
    viewersCount: 873
  });

  // Fetch market data with whale orders
  useEffect(() => {
    const fetchData = async () => {
      setData(prev => ({ ...prev, isLoading: true }));
      
      const marketData = await getMultipleSymbolsData();
      
      if (marketData.btc || marketData.eth) {
        setData(prev => ({
          ...prev,
          btc: marketData.btc,
          eth: marketData.eth,
          isLoading: false,
          lastUpdate: new Date()
        }));
      }
    };
    
    // Initial fetch
    fetchData();
    
    // Update every 15 seconds (to avoid rate limits)
    const interval = setInterval(fetchData, 15000);
    
    return () => clearInterval(interval);
  }, []);

  // Update countdown
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 3); // 3 hours from now
    
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setData(prev => ({
          ...prev,
          countdown: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }));
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Simulate viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        viewersCount: Math.max(850, Math.min(950, prev.viewersCount + Math.floor(Math.random() * 20 - 10)))
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return data;
};