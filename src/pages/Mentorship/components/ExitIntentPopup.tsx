import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = () => {
    window.open(
      'https://wa.me/919220592205?text=Hi%2C%20send%20me%20the%208%20PM%20checklist',
      '_blank'
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="bg-deep-slate rounded-2xl p-8 max-w-lg w-full relative border border-soft-sand/10"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-soft-sand/60 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wealth-teal/20 rounded-full mb-4">
              <Download className="text-wealth-teal" size={32} />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Before You Go — Free Download
            </h3>

            <p className="text-xl text-soft-sand mb-6">
              Get the 8 PM Trading Checklist our students use every session. Free. No signup.
            </p>

            <button
              onClick={handleDownload}
              className="w-full py-4 bg-burnt-amber text-white font-semibold rounded-full hover:bg-burnt-amber/90 transition-all transform hover:scale-105 mb-4"
            >
              Send to My WhatsApp
            </button>

            <button
              onClick={handleClose}
              className="text-sm text-soft-sand/60 hover:text-white transition-colors"
            >
              No thanks
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
