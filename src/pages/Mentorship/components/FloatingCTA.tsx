import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Show after user scrolls 20% of the page
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;
      
      if (scrollPercentage > 20 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(true);
      }
      
      // Hide when near bottom (last 10% of page) to avoid overlapping with footer
      if (scrollPercentage > 90) {
        setIsVisible(false);
      } else if (scrollPercentage > 20 && hasScrolled) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Version - Bottom Right */}
          <motion.div
            className="hidden lg:block fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={`${isMinimized ? 'w-auto' : 'max-w-sm'}`}>
              {!isMinimized ? (
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                  <div className="p-6">
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                      aria-label="Minimize"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Ready to Transform?
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          Join 500+ traders in ETM Mentorship
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400">✓</span>
                        <span>Daily 8 PM live sessions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400">✓</span>
                        <span>Personal trade reviews</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400">✓</span>
                        <span>90-day transformation</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleClick}
                      className="w-full mt-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>View Pricing</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsMinimized(false)}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>ETM Mentorship</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Mobile Version - Bottom Fixed Bar */}
          <motion.div
            className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">
                      ETM Mentorship Open
                    </p>
                    <p className="text-gray-400 text-xs">
                      Limited seats available
                    </p>
                  </div>
                  <button
                    onClick={handleClick}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;