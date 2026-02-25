import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';

const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 20 seconds
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 20000);

    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setDismissed(true); // Only show once per session
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-[7.5rem] left-4 z-40 max-w-[260px] sm:bottom-6 sm:left-6"
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div
            role="status"
            aria-live="polite"
            className="bg-[#3A4449] border border-[#B8956A]/20 rounded-lg p-3 shadow-xl cursor-pointer"
            onClick={() => setDismissed(true)}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0A8D7A]/20 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#2DBDA8]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#EDE6D8]">
                  1,263+ traders enrolled
                </p>
                <p className="text-xs text-[#B8A99A]">across 28+ Indian cities</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToast;
