import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handlePaymentPopup } from '../utils/payment';
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const nextSessionDate = getNextFirstSaturdayWithOrdinal();

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
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C3539]/95 backdrop-blur-lg border-t border-[#C87533]/20 p-3 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <button
            onClick={handlePaymentPopup}
            className="w-full bg-[#C87533] hover:bg-[#A85E28] text-white font-bold py-3 rounded-full shadow-lg shadow-[#C87533]/25 transition-all"
          >
            Enroll Now
          </button>
          <p className="text-center text-[#B8A99A] text-xs mt-1">
            Next Q&A: {nextSessionDate}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
