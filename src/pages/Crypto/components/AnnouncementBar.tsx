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
            className="bg-gradient-to-r from-yellow-500 to-orange-500 py-1.5 sm:py-2 text-center text-xs sm:text-sm"
            initial={{ y: -40 }}
            animate={{ y: 0 }}
        >
            <p className="px-2 sm:px-4 flex items-center justify-center flex-wrap">
                <span className="mr-2">🎉 <strong>Special:</strong> ₹2,000 bonus on enrollment</span>
                {timeLeft && (
                    <span className="inline-flex items-center" aria-live="polite">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {String(timeLeft.hours).padStart(2, '0')}:
                        {String(timeLeft.minutes).padStart(2, '0')}:
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                )}
            </p>
        </motion.div>
    );
};

export default AnnouncementBar; 