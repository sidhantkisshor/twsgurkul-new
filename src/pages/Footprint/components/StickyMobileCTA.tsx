import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handlePaymentPopup } from '../utils/payment';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const pricingSection = document.getElementById('pricing');
    const footerSection = document.querySelector('footer');
    
    if (!pricingSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide when pricing section or footer is visible
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    observer.observe(pricingSection);
    if (footerSection) {
      observer.observe(footerSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[800] md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20 p-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <button
            onClick={handlePaymentPopup}
            className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all"
          >
            Start Footprint Mastery
          </button>
          <p className="text-xs text-slate-400 text-center mt-2">
            Instant access • Next Live Q&A: 27th Aug
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;