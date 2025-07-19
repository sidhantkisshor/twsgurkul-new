import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { urgencyData } from '../data';

interface AnnouncementBarProps {
  timeLeft?: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ timeLeft = "48:00:00" }) => {
  return (
    <motion.div 
      className="bg-slate-950 border-b border-cyan-500/30 text-white py-2 px-4 text-center relative overflow-hidden"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center space-x-3 text-sm sm:text-base font-mono">
        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <span className="text-cyan-400 font-semibold">
          [ALERT] Price increases to {urgencyData.priceIncrease.newPrice} on {urgencyData.priceIncrease.date}
        </span>
        <span className="hidden sm:inline text-cyan-500">|</span>
        <span className="hidden sm:inline text-slate-400">Seats: {urgencyData.seatsLeft}/100</span>
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-cyan-400" />
        <span className="text-cyan-400 font-mono">{timeLeft}</span>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;