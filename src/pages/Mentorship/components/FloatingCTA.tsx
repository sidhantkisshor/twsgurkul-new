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
                <div className="bg-deep-slate rounded-2xl shadow-2xl border border-soft-sand/10 overflow-hidden">
                  <div className="p-6">
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="absolute top-3 right-3 text-soft-sand/60 hover:text-white transition-colors"
                      aria-label="Minimize"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-burnt-amber p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Ready to Transform?
                        </h3>
                        <p className="text-soft-sand text-sm mt-1">
                          Join 500+ traders in ETM Mentorship
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-soft-sand">
                        <span className="text-wealth-teal">✓</span>
                        <span>Daily 8 PM live sessions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-soft-sand">
                        <span className="text-wealth-teal">✓</span>
                        <span>Personal trade reviews</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-soft-sand">
                        <span className="text-wealth-teal">✓</span>
                        <span>90-day transformation</span>
                      </div>
                    </div>

                    <button
                      onClick={handleClick}
                      className="w-full mt-5 bg-burnt-amber text-white font-semibold py-3 px-4 rounded-lg hover:bg-burnt-amber/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>View Pricing</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsMinimized(false)}
                  className="bg-burnt-amber text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-burnt-amber/90 transition-all duration-300 flex items-center gap-2 group"
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
            <div className="bg-deep-slate border-t border-soft-sand/10">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">
                      ETM Mentorship Open
                    </p>
                    <p className="text-soft-sand/70 text-xs">
                      Limited seats available
                    </p>
                  </div>
                  <button
                    onClick={handleClick}
                    className="bg-burnt-amber text-white font-semibold py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 whitespace-nowrap hover:bg-burnt-amber/90 transition-all"
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