import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;
      setIsVisible(scrollPercentage > 10 && scrollPercentage < 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/919220592205?text=Hi%2C%20I%20want%20to%20know%20more%20about%20ETM%20Mentorship"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
