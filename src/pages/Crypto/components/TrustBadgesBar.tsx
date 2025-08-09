import React from 'react';
import { motion } from 'framer-motion';
import { trustBadges } from '../data';

const badgeColorMap = {
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
};

const TrustBadgesBar: React.FC = () => {
    return (
        <motion.div 
            className="fixed bottom-6 left-0 right-0 z-40 hidden sm:flex justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="glass-effect border border-white/10 rounded-full px-4 py-3 shadow-2xl hover:border-white/20 transition-all">
                <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-6">
                    {trustBadges.map((badge, index) => (
                        <React.Fragment key={badge.text}>
                            <motion.div 
                                className="flex items-center space-x-1.5 flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <badge.icon className={`w-4 h-4 ${badgeColorMap[badge.color]} flex-shrink-0`} />
                                <span className="text-xs sm:text-sm whitespace-nowrap">{badge.text}</span>
                            </motion.div>
                            {index < trustBadges.length - 1 && (
                                <span className="text-slate-600 text-xs flex-shrink-0">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TrustBadgesBar; 