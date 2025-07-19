import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrolled / (documentHeight - windowHeight);
      
      // Show only after scrolling 70% of the page or near pricing section
      setIsVisible(scrollPercentage > 0.7 || scrolled > windowHeight * 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-green-500/30 p-4 z-40"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full"
            >
              Join Pro - ₹15,999 Today
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="hidden md:block fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
              >
                Start Now - Save ₹5,001
              </button>
              
              <button 
                onClick={scrollToTop}
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors mx-auto"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCta;