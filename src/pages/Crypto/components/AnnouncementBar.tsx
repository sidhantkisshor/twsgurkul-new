import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { TimeLeft } from '../types';

interface AnnouncementBarProps {
    timeLeft?: TimeLeft;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ timeLeft }) => {
    return (
        <motion.div
            className="fixed top-20 sm:top-20 left-1/2 transform -translate-x-1/2 z-40 glass-effect border border-yellow-500/20 rounded-full px-3 sm:px-4 py-2 shadow-lg max-w-[90vw] sm:max-w-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <p className="flex items-center justify-center gap-x-2 sm:gap-x-3 text-sm">
                <span className="text-yellow-400">⚠️ <strong className="hidden xs:inline">ALERT:</strong> Limited seats<span className="hidden sm:inline"> at current price</span></span>
                {timeLeft && (
                    <span className="inline-flex items-center text-white" aria-live="polite">
                        <Clock className="w-4 h-4 mr-1 text-yellow-400" />
                        <span className="font-mono">
                            {String(timeLeft.hours).padStart(2, '0')}:
                            {String(timeLeft.minutes).padStart(2, '0')}:
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                    </span>
                )}
            </p>
        </motion.div>
    );
};

export default AnnouncementBar; 