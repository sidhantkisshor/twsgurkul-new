import React from 'react';
import { motion } from 'framer-motion';
import { trustBadges } from '../data';

interface TrustBadgesBarProps {
    onMethodologyClick?: () => void;
}

const badgeColorMap = {
    yellow: 'text-[#C87533]',
    green: 'text-[#0A8D7A]',
    blue: 'text-[#3B82F6]',
};

const BadgeContent: React.FC<{ onMethodologyClick?: () => void }> = ({ onMethodologyClick }) => (
    <>
        {trustBadges.map((badge, index) => (
            <React.Fragment key={`${badge.text}-${index}`}>
                <div className="flex items-center space-x-1.5 shrink-0">
                    <badge.icon className={`w-4 h-4 ${badgeColorMap[badge.color]} shrink-0`} />
                    <span className="text-xs sm:text-sm whitespace-nowrap text-[#2C3539] font-bold">{badge.text}</span>
                </div>
                {index < trustBadges.length - 1 && (
                    <span className="text-[#2C3539]/60 text-xs shrink-0 mx-3">•</span>
                )}
            </React.Fragment>
        ))}
        {onMethodologyClick && (
            <>
                <span className="text-[#2C3539]/60 text-xs shrink-0 mx-3">•</span>
                <button
                    onClick={onMethodologyClick}
                    className="flex items-center gap-1 text-xs sm:text-sm text-[#2C3539]/60 hover:text-[#C87533] transition-colors group shrink-0 py-3 -my-3 min-h-[44px]"
                >
                    <span className="group-hover:underline">Methodology & verification</span>
                    <span>→</span>
                </button>
            </>
        )}
    </>
);

const TrustBadgesBar: React.FC<TrustBadgesBarProps> = ({ onMethodologyClick }) => {
    return (
        <motion.div 
            className="py-6 sm:py-8 bg-[#FAF8F5] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            {/* Desktop: Static centered badge */}
            <div className="hidden sm:flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-[rgba(44,53,57,0.08)] rounded-xl shadow-sm px-6 py-3 hover:border-[rgba(200,117,51,0.3)] transition-all inline-flex items-center gap-3 sm:gap-4">
                    <BadgeContent onMethodologyClick={onMethodologyClick} />
                </div>
            </div>

            {/* Mobile: Auto-scrolling marquee */}
            <div className="sm:hidden relative overflow-hidden" style={{ contain: 'layout', overflowX: 'clip' }}>
                <div className="flex overflow-hidden" style={{ overflowX: 'clip' }}>
                    <motion.div
                        className="flex items-center gap-6 px-4"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            x: {
                                duration:55,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* First set */}
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <BadgeContent />
                        </div>
                        {/* Separator between sets */}
                        <span className="text-[#2C3539]/60 text-xs mx-6">•</span>
                        {/* Second set for seamless loop */}
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <BadgeContent />
                        </div>
                    </motion.div>
                </div>
                
                {/* Gradient edges for better visual on mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-[#FAF8F5] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-[#FAF8F5] to-transparent pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

export default TrustBadgesBar; 