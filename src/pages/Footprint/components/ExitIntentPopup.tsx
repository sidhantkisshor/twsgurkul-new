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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={focusTrapRef}
          className="fixed inset-0 bg-[#0B1221]/80 z-900 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Have questions?"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#2C3539] rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md w-full relative border border-[#C87533]/20 shadow-2xl my-auto mt-12 sm:mt-auto"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-[#3A4449] rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#B8A99A]" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366]" />
              </div>
            </div>

            <div className="text-center space-y-4 relative z-10">
              <h2 className="text-xl sm:text-2xl leading-tight">
                <span className="font-sans font-bold text-[#EDE6D8]">Before you go — </span>
                <span className="font-serif italic font-normal text-[#C87533]">talk to our team?</span>
              </h2>

              <p className="text-base text-[#B8A99A]">
                Have questions about Footprint Mastery, the curriculum, or whether it's right for your trading style? Our support team is happy to help on WhatsApp.
              </p>

              <div className="space-y-3 pt-2">
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Footprint%20Mastery%20program`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-base sm:text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with our team
                </motion.a>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-sm text-[#B8A99A] hover:text-[#EDE6D8] transition-colors"
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
