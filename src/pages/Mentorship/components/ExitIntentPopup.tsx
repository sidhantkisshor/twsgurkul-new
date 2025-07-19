import React from 'react';
import { motion } from 'framer-motion';
import { X, Tag } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  const handleEnroll = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    if (onClose) onClose();
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full relative border border-green-500/30"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Tag className="text-green-500" size={32} />
          </motion.div>

          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Before You Go...
            </span>
          </h3>

          <p className="text-xl text-gray-300 mb-6">
            Get your <span className="font-bold text-green-500">free trading checklist</span> + ₹500 discount
          </p>

          <div className="glass-effect rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold text-white mb-2">
              ETM Pro: <span className="line-through text-gray-500">₹15,999</span>{' '}
              <span className="text-green-500">₹15,499</span>
            </p>
            <p className="text-sm text-gray-400">
              Extra ₹500 off - Valid for next 10 minutes only
            </p>
          </div>

          <button 
            onClick={handleEnroll}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 mb-4"
          >
            Claim Your Discount Now
          </button>

          <p className="text-sm text-gray-400">
            No thanks, I prefer to pay full price
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExitIntentPopup;