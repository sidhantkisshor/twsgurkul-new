import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, Users, Award } from 'lucide-react';

const TrustBadgesBar: React.FC = () => {
  const trustItems = [
    { 
      icon: Users, 
      text: "[LIVE] 523 Traders Online", 
      color: "cyan",
      detail: "Decoding institutional footprints"
    },
    { 
      icon: Shield, 
      text: "[VERIFIED] NSE Data Feed", 
      color: "teal",
      detail: "Real-time market depth analysis"
    },
    { 
      icon: CheckCircle, 
      text: "[STAT] 90.3% Win Rate", 
      color: "green",
      detail: "Average across 500+ students"
    },
    { 
      icon: Award, 
      text: "[SECURE] 30-Day Guarantee", 
      color: "blue",
      detail: "Full refund if not profitable"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trustItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [trustItems.length]);

  return (
    <div className="bg-slate-950/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-3"
            >
              {(() => {
                const item = trustItems[currentIndex];
                const Icon = item.icon;
                return (
                  <>
                    <div className={`w-8 h-8 bg-${item.color}-500/10 rounded-full flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 text-${item.color}-400`} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-white font-mono">{item.text}</span>
                      <span className="text-xs text-slate-400 hidden sm:inline font-mono"> // {item.detail}</span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgesBar;