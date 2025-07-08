import React, { useState, useEffect, useRef } from 'react';
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
        <div className="py-2 sm:py-4 bg-gradient-to-b from-slate-800/50 to-transparent">
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
                {/* DESKTOP */}
                <div className="hidden sm:flex justify-center items-center gap-6 flex-nowrap">
                    {trustBadges.map((badge, index) => (
                        <React.Fragment key={badge.text}>
                            <div className="flex items-center space-x-1.5">
                                <badge.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${badgeColorMap[badge.color]}`} />
                                <span className="text-[10px] sm:text-sm whitespace-nowrap">{badge.text}</span>
                            </div>
                            {index < trustBadges.length - 1 && (
                                <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                {/* MOBILE */}
                <TrustBadgesMobile badges={trustBadges} />
            </div>
        </div>
    );
};

export default TrustBadgesBar; 