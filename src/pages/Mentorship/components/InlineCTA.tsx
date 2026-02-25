import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  text?: string;
  variant?: 'light' | 'dark';
}

const InlineCTA: React.FC<InlineCTAProps> = ({
  text = "See pricing details",
  variant = 'light',
}) => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="text-center mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <button
        onClick={scrollToPricing}
        className={`inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-medium transition-colors group ${
          variant === 'light'
            ? 'text-burnt-amber hover:text-burnt-amber/80'
            : 'text-burnt-amber hover:text-burnt-amber/80'
        }`}
      >
        {text}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default InlineCTA;
