import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';
import { CRYPTO_PRICE } from '../data';
import { getCheckoutUrl } from '../../../constants';

const SCROLL_THRESHOLD = 0.6; // 60% scroll depth

const ScrollDepthStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const formatDate = (dateStr: string) =>
    dateStr
      .replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ')
      .replace(/([A-Z]{3})/, (m) => m.charAt(0) + m.slice(1).toLowerCase());

  const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = window.scrollY / scrollHeight;
      setVisible(pct >= SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    setVisible(false);
  }, []);

  const handleCta = () => {
    cryptoTrackingEvents.checkoutStart('sticky_bar', CRYPTO_PRICE);
    window.open(getCheckoutUrl('crypto', 'sticky_bar'), '_blank', 'noopener');
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          {/* Subtle top edge glow */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C87533]/40 to-transparent" />

          <div className="bg-[#1a2026]/95 backdrop-blur-md border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3">
              {/* Mobile: two-line layout so date is never truncated */}
              <div className="flex items-center gap-2 md:hidden">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/80 font-semibold leading-tight">
                    Live Q&A — <span className="text-[#C87533]">{nextLiveDate}</span>
                  </p>
                  <p className="text-[10px] text-white/50 leading-tight mt-0.5">3 bonuses worth ₹7,497 included</p>
                </div>
                <button
                  onClick={handleCta}
                  className="shrink-0 px-4 py-2.5 min-h-[44px] bg-[#C87533] hover:bg-[#b5682d] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
                >
                  Enroll now
                </button>
                <button
                  onClick={handleDismiss}
                  aria-label="Dismiss"
                  className="shrink-0 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/50 hover:text-white/80 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Desktop: full info */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C87533]" />
                  <p className="text-sm text-white/80">
                    Enroll before <span className="text-[#C87533] font-semibold">{nextLiveDate}</span> to attend the live Q&A
                    <span className="text-white/40 mx-2">·</span>
                    <span className="text-white/60">3 bonuses worth ₹7,497 included free</span>
                  </p>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <motion.button
                    onClick={handleCta}
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#C87533] hover:bg-[#b5682d] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-[#C87533]/[0.15]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Claim your spot
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                  <button
                    onClick={handleDismiss}
                    aria-label="Dismiss"
                    className="p-1.5 text-white/30 hover:text-white/60 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDepthStickyBar;
