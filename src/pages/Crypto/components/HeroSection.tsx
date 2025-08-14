import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { heroData, trustBadges } from '../data';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';

interface HeroSectionProps {
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
    onMethodologyClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleSmoothScroll, onMethodologyClick }) => {
    const { headline, description, enrollmentStats, features, stats, badges, microNote, cta } = heroData;
    const nextLiveDate = getNextFirstSaturdayWithOrdinal();
    
    const handleEnroll = () => {
        cryptoTrackingEvents.checkoutStart('hero_section', 19499);
        window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
    };

    return (
        <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5" />
            <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/10 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full filter blur-[100px]" />
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <div className="">
                    <motion.div
                        className="space-y-5 sm:space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="space-y-3 sm:space-y-4 text-center">
                            <h1 className="text-[40px] sm:text-[42px] lg:text-[44px] font-bold leading-[1.15]">
                                <span className="text-white">{headline.line1}</span><br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                    {headline.line2}
                                </span><br />
                                <span className="text-white">{headline.line3}</span>
                            </h1>
                            <p className="text-base sm:text-[17px] lg:text-lg text-slate-200 leading-[1.6]">
                                {description.part1} <strong className="text-slate-100">{description.highlight1}</strong> {description.part2}
                                <span className="text-yellow-400"> {description.highlight2}</span>{description.part3}
                            </p>
                            <p className="text-sm text-slate-400 mt-2">
                                Next live Q&A: <span className="text-yellow-400">{nextLiveDate}</span> · Recording provided
                            </p>
                            {microNote && (
                                <p className="text-xs text-slate-500 italic mt-2">
                                    {microNote}
                                </p>
                            )}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">

                                {/* Overlapping Avatars */}
                                <div className="flex -space-x-3">
                                    {/* Placeholder avatars - can be made dynamic later */}
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/48.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/12.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/15.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://xsgames.co/randomusers/assets/avatars/male/65.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pravatar.cc/400?img=59)' }}></div>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-400">
                                    <span className="text-white font-semibold">{enrollmentStats.count}</span>
                                    <span className="hidden xs:inline"> {enrollmentStats.text}</span>
                                    <span className="xs:hidden"> enrolled</span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                            {features.map((feature) => (
                                <div key={feature.text} className="glass-effect rounded-lg p-2.5 sm:p-3 border border-white/10 flex items-center space-x-2 sm:space-x-3 hover:border-white/20 transition-all">
                                    <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-400 flex-shrink-0`} />
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium truncate">{feature.text}</p>
                                        <p className="text-xs text-slate-400 truncate">{feature.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="flex flex-col items-center">
                            <motion.button
                                onClick={handleEnroll}
                                className="group relative px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-yellow-500/25 text-base lg:text-lg transition-all whitespace-nowrap"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                    <span>{cta.primary} — ₹19,499</span>
                                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                            <p className="text-xs text-slate-400 mt-2 text-center">
                                Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                {stats.map((stat, index) => (
                                    <div key={stat.label} className="text-center glass-effect rounded-lg p-2 sm:p-3 border border-white/10">
                                        {index === 1 ? (
                                            <div className="flex justify-center items-center">
                                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                                <span className="text-xl sm:text-2xl font-bold ml-1">{stat.value}</span>
                                            </div>
                                        ) : (
                                            <p className={`text-base xs:text-xl sm:text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
                                        )}
                                        <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            {onMethodologyClick && (
                                <button 
                                    onClick={onMethodologyClick}
                                    className="text-xs text-slate-500 hover:text-yellow-400 transition-colors hover:underline mx-auto block"
                                >
                                    Methodology & verification →
                                </button>
                            )}
                        </div>
                    </motion.div>

                </div>
                
                {/* Mobile Trust Badges */}
                <motion.div 
                    className="sm:hidden mt-8 glass-effect rounded-xl border border-white/10 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col gap-3">
                        {trustBadges.slice(0, 3).map((badge) => (
                            <div key={badge.text} className="flex items-center justify-center space-x-2 text-sm">
                                <badge.icon className={`w-5 h-5 text-${badge.color}-400 flex-shrink-0`} />
                                <span className="text-slate-300">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection; 