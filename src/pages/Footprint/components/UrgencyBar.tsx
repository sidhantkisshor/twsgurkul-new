import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useCountdown } from '../../Crypto/hooks/useCountdown';
import { getNextFirstSaturdayWithOrdinal } from '../../Crypto/utils/dateHelpers';

const UrgencyBar: React.FC = () => {
  const timeLeft = useCountdown();
  const nextSession = getNextFirstSaturdayWithOrdinal();

  return (
    <div className="bg-[#0B1221] border-y border-[#0A8D7A]/20 py-2.5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
          {/* Countdown */}
          <div className="flex items-center gap-2 text-[#EDE6D8]">
            <Clock className="w-4 h-4 text-[#C87533]" />
            <span className="text-[#B8A99A]">Offer ends in</span>
            <div className="flex items-center gap-1 font-mono font-bold text-[#C87533]">
              <span className="bg-[#C87533]/10 px-1.5 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-[#C87533]/10 px-1.5 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-[#C87533]/10 px-1.5 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          <span className="hidden sm:inline text-[#B8A99A]/30">|</span>

          {/* Seat counter */}
          <div className="flex items-center justify-center gap-2">
            <motion.div
              className="w-2 h-2 bg-[#E5484D] rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[#E5484D] font-medium text-center">Only 8 seats left for {nextSession} batch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
