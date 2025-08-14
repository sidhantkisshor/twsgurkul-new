import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import QuickQuiz from './QuickQuiz';

const MobileStickyQuiz: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {/* Mobile sticky button - only visible on small screens */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <button
          onClick={() => setShowQuiz(true)}
          className="w-full px-6 py-4 bg-gray-900 text-white flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-base font-light">Take the 45-second quiz</span>
        </button>
      </motion.div>

      {/* Quiz Modal */}
      <QuickQuiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </>
  );
};

export default MobileStickyQuiz;