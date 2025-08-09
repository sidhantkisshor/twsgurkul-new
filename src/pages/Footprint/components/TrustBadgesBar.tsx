import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, BookOpen, Users, Award } from 'lucide-react';

const TrustBadgesBar: React.FC = () => {
  const trustItems = [
    { 
      icon: BookOpen, 
      text: "10 Recorded Modules", 
      color: "cyan",
      detail: "Foundation to advanced"
    },
    { 
      icon: Users, 
      text: "Monthly Live Q&A Sessions", 
      color: "teal",
      detail: "With recordings provided"
    },
    { 
      icon: CheckCircle, 
      text: "Lifetime Access", 
      color: "green",
      detail: "Learn at your pace"
    },
    { 
      icon: Award, 
      text: "Risk Management Tools", 
      color: "amber",
      detail: "Templates included"
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
                      <span className="text-sm font-semibold text-white">{item.text}</span>
                      <span className="text-xs text-slate-400 hidden sm:inline">• {item.detail}</span>
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