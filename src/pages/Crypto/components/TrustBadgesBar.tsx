import React from 'react';
import { motion } from 'framer-motion';
import { trustBadges } from '../data';

interface TrustBadgesBarProps {
    onMethodologyClick?: () => void;
}

const badgeColorMap = {
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
};

const TrustBadgesBar: React.FC<TrustBadgesBarProps> = ({ onMethodologyClick }) => {
    // Create badge content component for reuse
    const BadgeContent = () => (
        <>
            {trustBadges.map((badge, index) => (
                <React.Fragment key={`${badge.text}-${index}`}>
                    <div className="flex items-center space-x-1.5 shrink-0">
                        <badge.icon className={`w-4 h-4 ${badgeColorMap[badge.color]} shrink-0`} />
                        <span className="text-xs sm:text-sm whitespace-nowrap text-slate-200">{badge.text}</span>
                    </div>
                    {index < trustBadges.length - 1 && (
                        <span className="text-slate-600 text-xs shrink-0 mx-3">•</span>
                    )}
                </React.Fragment>
            ))}
            {onMethodologyClick && (
                <>
                    <span className="text-slate-600 text-xs shrink-0 mx-3">•</span>
                    <button
                        onClick={onMethodologyClick}
                        className="flex items-center gap-1 text-xs sm:text-sm text-slate-400 hover:text-yellow-400 transition-colors group shrink-0"
                    >
                        <span className="group-hover:underline">Methodology & verification</span>
                        <span>→</span>
                    </button>
                </>
            )}
        </>
    );

    return (
        <motion.div 
            className="py-4 bg-slate-900/50 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            {/* Desktop: Static centered badge */}
            <div className="hidden sm:flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="glass-effect border border-white/10 rounded-full px-6 py-3 shadow-lg hover:border-white/20 transition-all inline-flex items-center gap-3 sm:gap-4">
                    <BadgeContent />
                </div>
            </div>

            {/* Mobile: Auto-scrolling marquee */}
            <div className="sm:hidden relative">
                <div className="flex">
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
                        <span className="text-slate-600 text-xs mx-6">•</span>
                        {/* Second set for seamless loop */}
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <BadgeContent />
                        </div>
                    </motion.div>
                </div>
                
                {/* Gradient edges for better visual on mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-slate-900 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-slate-900 to-transparent pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

export default TrustBadgesBar; 