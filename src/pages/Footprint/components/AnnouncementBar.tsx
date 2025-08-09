import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen } from 'lucide-react';

interface AnnouncementBarProps {
  timeLeft?: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 text-white py-2 px-4 text-center relative overflow-hidden"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <span className="flex items-center gap-1 text-cyan-400">
          <BookOpen className="w-4 h-4" />
          Footprint Chart Mastery
        </span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span className="text-slate-300">
          Learn Order Flow Trading
        </span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span className="flex items-center gap-1 text-cyan-400">
          <Calendar className="w-4 h-4" />
          Next Live Q&A: August 27th
        </span>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;