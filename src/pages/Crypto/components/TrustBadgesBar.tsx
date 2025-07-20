import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrustBadge } from '../types';
import { trustBadges } from '../data';

const badgeColorMap = {
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
};

const TrustBadgesMobile: React.FC<{ badges: TrustBadge[] }> = ({ badges }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev === badges.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    useEffect(() => {
        if (window.innerWidth >= 640) return;
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [badges.length]);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.targetTouches[0].clientX;
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            setCurrentIndex((prev) => (prev === badges.length - 1 ? 0 : prev + 1));
        } else if (touchStartX.current - touchEndX.current < -50) {
            setCurrentIndex((prev) => (prev === 0 ? badges.length - 1 : prev - 1));
        }
        resetInterval();
    };

    return (
        <div
            className="sm:hidden relative w-full h-7 flex items-center justify-center overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                {badges.map((badge, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 flex justify-center items-center">
                    <div className="flex items-center space-x-1.5 px-4 py-1.5 text-slate-200">
                        <badge.icon className={`w-4 h-4 ${badgeColorMap[badge.color]}`} />
                        <span className="text-[12px] whitespace-nowrap">{badge.text}</span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TrustBadgesBar: React.FC = () => {
    return (
        <motion.div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 hidden sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="glass-effect border border-white/10 rounded-full px-6 py-3 shadow-2xl hover:border-white/20 transition-all">
                <div className="flex justify-center items-center gap-6 flex-nowrap">
                    {trustBadges.map((badge, index) => (
                        <React.Fragment key={badge.text}>
                            <motion.div 
                                className="flex items-center space-x-1.5"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <badge.icon className={`w-4 h-4 ${badgeColorMap[badge.color]}`} />
                                <span className="text-sm whitespace-nowrap">{badge.text}</span>
                            </motion.div>
                            {index < trustBadges.length - 1 && (
                                <span className="text-slate-600 text-xs">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TrustBadgesBar; 