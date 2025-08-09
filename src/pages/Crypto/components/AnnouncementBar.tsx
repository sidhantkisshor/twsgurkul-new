import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { TimeLeft } from '../types';

interface AnnouncementBarProps {
    timeLeft?: TimeLeft;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ timeLeft }) => {
    return (
        <div className="fixed top-20 left-0 right-0 z-40 flex justify-center">
            <motion.div
                className="glass-effect border border-yellow-500/20 rounded-full px-3 sm:px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <p className="flex items-center justify-center gap-x-2 sm:gap-x-3 text-sm whitespace-nowrap">
                    <span className="text-yellow-400">✨ Instant access today</span>
                    <span className="text-white">•</span>
                    <span className="text-white">Next Live Q&A: <strong className="text-yellow-400">18th AUG</strong></span>
                </p>
            </motion.div>
        </div>
    );
};

export default AnnouncementBar; 