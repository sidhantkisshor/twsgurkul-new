import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface InlineObjectionProps {
  question: string;
  answer: string;
  variant?: 'default' | 'emphasis';
}

const InlineObjection: React.FC<InlineObjectionProps> = ({
  question,
  answer,
  variant = 'default'
}) => {
  const bgColor = variant === 'emphasis' ? 'bg-[#C87533]/10' : 'bg-[#3A4449]/60';
  const borderColor = variant === 'emphasis' ? 'border-[#C87533]/30' : 'border-[#B8956A]/20';
  const iconColor = variant === 'emphasis' ? 'text-[#D4943F]' : 'text-[#B8956A]';

  return (
    <motion.div
      className={`${bgColor} rounded-lg p-5 border ${borderColor} max-w-3xl mx-auto`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-3">
        <HelpCircle className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
        <div>
          <p className="text-white font-semibold mb-2 text-sm sm:text-base">
            {question}
          </p>
          <p className="text-[#D0C5B4] text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InlineObjection;
