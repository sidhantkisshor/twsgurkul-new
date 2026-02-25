import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../../constants';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stickyBarVisible, setStickyBarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;
      setIsVisible(scrollPercentage > 10 && scrollPercentage < 95);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setStickyBarVisible(scrollHeight > 0 && window.scrollY / scrollHeight >= 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Crypto%20Market%20Mastery%20program`}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed right-6 z-40 flex items-center gap-2 bg-wealth-teal rounded-full shadow-lg shadow-wealth-teal/20 hover:bg-[#097A6A] transition-all px-4 py-3 sm:px-5 sm:py-3 ${stickyBarVisible ? 'bottom-[76px]' : 'bottom-6'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="hidden sm:inline text-white text-sm font-semibold">Have a question?</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
