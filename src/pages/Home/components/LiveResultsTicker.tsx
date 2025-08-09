import React, { useState, useEffect } from 'react';
import tickerData from '../data/liveTickerData.json';

const LiveResultsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const results = tickerData.results;
  
  // Get current data
  const currentData = results[currentIndex];
  
  useEffect(() => {
    // Fire analytics event on mount
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (event: string, eventName: string) => void }).gtag) {
      (window as unknown as { gtag: (event: string, eventName: string) => void }).gtag('event', 'live_ticker_viewed');
    }
    
    // Fade in effect
    setTimeout(() => setIsVisible(true), 100);
    
    // Rotate through data every 300 seconds (5 minutes)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 300000); // 300 seconds = 5 minutes
    
    return () => clearInterval(interval);
  }, [results.length]);
  
  // Animate number changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  return (
    <div className="mt-12 glass-effect rounded-xl p-4 border border-green-500/20 bg-gradient-to-r from-green-500/5 to-transparent">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Live indicator */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
            </div>
            <p className="text-green-400 font-medium">Live Today:</p>
          </div>
          
          {/* Stats with animation */}
          <div className={`flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <p className="text-white">
              <span className="font-bold text-green-400">{currentData.students}</span> students made profits
            </p>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <p className="text-white">
              Total: <span className="text-green-400 font-bold">₹{currentData.totalProfit} Lakhs</span>
            </p>
          </div>
        </div>
        
        {/* Update time */}
        <p className={`text-sm text-gray-500 transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          Updated {currentData.timestamp}
        </p>
      </div>
      
      {/* Progress bar showing rotation */}
      <div className="mt-3 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-[300000ms] ease-linear"
          style={{ 
            width: '100%',
            animation: 'progress 300s linear infinite'
          }}
        />
      </div>
      
      {/* Add CSS animation for progress bar */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LiveResultsTicker;