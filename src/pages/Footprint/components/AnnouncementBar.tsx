import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Users } from 'lucide-react';
import { urgencyData } from '../data';
import { useWhaleTracker } from '../hooks/useWhaleTracker';

interface AnnouncementBarProps {
  timeLeft?: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ timeLeft = "48:00:00" }) => {
  const { viewersCount } = useWhaleTracker();
  return (
    <motion.div 
      className="bg-gradient-to-r from-red-950 via-slate-950 to-red-950 border-b border-red-500/30 text-white py-2 px-4 text-center relative overflow-hidden"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono">
        <motion.span 
          className="flex items-center gap-1 text-red-400 font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
          LAST CHANCE
        </motion.span>
        <span className="text-yellow-400 font-semibold">
          Binance CEO demanded we stop exposing whales by midnight ({timeLeft} left)
        </span>
        <span className="hidden lg:inline text-red-500">|</span>
        <motion.span 
          className="text-orange-400 font-bold flex items-center gap-1"
          key={viewersCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Users className="w-4 h-4" />
          {viewersCount} people viewing NOW
        </motion.span>
        <span className="hidden sm:inline text-red-500">|</span>
        <motion.span 
          className="text-red-400 font-bold flex items-center gap-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <Clock className="w-4 h-4" />
          CLOSING SOON
        </motion.span>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;