import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useFocusTrap } from '../../../hooks/useFocusTrap';
import { WHATSAPP_NUMBER } from '../../../constants';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const focusTrapRef = useFocusTrap(isOpen);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20have%20a%20question%20about%20the%20ETM%20Mentorship%20program`,
      '_blank'
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={focusTrapRef}
          className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-start sm:items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Have questions?"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-deep-slate rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md w-full relative border border-soft-sand/10 my-auto mt-12 sm:mt-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-soft-sand/10 rounded-lg transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-soft-sand/50 hover:text-white" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366]" />
              </div>
            </div>

            <div className="text-center space-y-4 relative z-10">
              <h2 className="text-xl sm:text-2xl leading-tight">
                <span className="font-sans font-bold text-white">Before you go — </span>
                <span className="font-serif italic font-normal text-burnt-amber">talk to our team?</span>
              </h2>

              <p className="text-base text-soft-sand/80">
                Have questions about the mentorship, curriculum, or whether it's right for you? Our support team is happy to help on WhatsApp.
              </p>

              <div className="space-y-3 pt-2">
                <motion.button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#25D366] text-white hover:bg-[#1DA851] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-base sm:text-lg inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with our team
                </motion.button>

                <button
                  onClick={onClose}
                  className="w-full py-2 text-sm text-soft-sand/60 hover:text-white transition-colors"
                >
                  No thanks, I'll keep reading
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
