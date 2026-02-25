import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;

        if (scrollPercentage > 20 && !hasScrolled) {
          setHasScrolled(true);
          setIsVisible(true);
        }

        // Hide near sections where FloatingCTA overlaps content
        // Use a buffer so the bar disappears before it covers CTAs
        const hideNearSections = ['pricing', 'testimonials', 'faq'];
        const buffer = 80; // px buffer so sticky bar clears before overlapping CTAs
        for (const id of hideNearSections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + buffer && rect.bottom > -buffer) {
              setIsVisible(false);
              ticking = false;
              return;
            }
          }
        }

        if (scrollPercentage > 90) {
          setIsVisible(false);
        } else if (scrollPercentage > 20 && hasScrolled) {
          setIsVisible(true);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <div className={`${isMinimized ? 'w-auto' : 'max-w-xs'}`}>
              {!isMinimized ? (
                <div className="bg-deep-slate rounded-2xl shadow-2xl border border-soft-sand/10 overflow-hidden">
                  <div className="p-5">
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
                        <h3 className="text-white font-sans font-semibold text-lg">
                          Live Sessions at 8 PM
                        </h3>
                        <p className="text-soft-sand text-sm mt-1">
                          5 nights a week, from your phone
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-soft-sand">
                      Live trading · Personal reviews · Weekly analysis
                    </p>

                    <button
                      onClick={handleClick}
                      className="w-full mt-5 bg-burnt-amber text-white font-semibold py-3 px-4 rounded-lg hover:bg-burnt-amber/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Join the 8 PM Room</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsMinimized(false)}
                  className="bg-burnt-amber text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-burnt-amber/90 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>ET<span className="font-serif italic">M</span> Mentorship</span>
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
            <div className="bg-deep-slate border-t border-soft-sand/10" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm">
                      8 PM Session Tonight
                    </p>
                    <p className="text-soft-sand/70 text-xs">
                      Weekly reviews
                    </p>
                  </div>
                  <button
                    onClick={handleClick}
                    className="bg-burnt-amber text-white font-semibold py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 whitespace-nowrap hover:bg-burnt-amber/90 transition-all"
                  >
                    <span>Join at 8 PM</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-soft-sand/50 hover:text-white transition-colors p-1 shrink-0"
                    aria-label="Dismiss sticky bar"
                  >
                    <X className="w-4 h-4" />
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