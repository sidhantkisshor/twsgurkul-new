import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { urgencyData } from '../data';

const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 23, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 z-[60] cursor-pointer"
      onClick={() => scrollToSection('pricing')}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <Zap className="animate-pulse" size={20} />
          <span className="font-bold">FLASH OFFER:</span>
          <span>Save {urgencyData.discount} on Pro</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Only for next {urgencyData.spotsLeft} enrollments</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;