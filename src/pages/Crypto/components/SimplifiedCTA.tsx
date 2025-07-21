import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SimplifiedCTAProps {
  text?: string;
  subtext?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}

const SimplifiedCTA: React.FC<SimplifiedCTAProps> = ({ 
  text = 'Start Your Crypto Journey Today',
  subtext,
  className = '',
  size = 'large',
  variant = 'primary'
}) => {
  const handleClick = () => {
    // Scroll to final CTA section with pricing
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg shadow-yellow-500/25',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
  };

  return (
    <div className="text-center">
      <motion.button
        onClick={handleClick}
        className={`
          group relative inline-flex items-center justify-center
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          font-semibold rounded-full overflow-hidden transition-all
          ${className}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center space-x-2">
          <span>{text}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
      {subtext && (
        <p className="text-sm text-slate-400 mt-2">{subtext}</p>
      )}
    </div>
  );
};

export default SimplifiedCTA;