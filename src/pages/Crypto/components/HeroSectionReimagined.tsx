import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Lock,
    Users,
    Calendar,
    Zap,
    Shield,
    BookOpen,
    Clock,
    AlertCircle,
    CheckCircle,
    DollarSign
} from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';

interface HeroSectionReimaginedProps {
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
    onMethodologyClick?: () => void;
}

const HeroSectionReimagined: React.FC<HeroSectionReimaginedProps> = ({ handleSmoothScroll, onMethodologyClick }) => {
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');
    const containerRef = useRef(null);

    // Format date
    const formatDate = (dateStr: string) => {
        return dateStr.replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ').replace(/([A-Z]{3})/, (match) =>
            match.charAt(0) + match.slice(1).toLowerCase()
        );
    };

    const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

    const handleEnroll = () => {
        cryptoTrackingEvents.checkoutStart('hero_section_reimagined', 19499);
        window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
    };

    return (
        <section ref={containerRef} className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden bg-[#2C3539] py-20 lg:py-0">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
            </div>

            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-6">
                        {/* Next Q&A Badge - honest, real date */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-[#C87533]/10 border border-[#C87533]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                        >
                            <Calendar className="w-3.5 h-3.5 text-[#C87533]" />
                            <span className="text-xs sm:text-sm text-[#EDE6D8]">
                                Next Live Q&A: <span className="font-semibold text-[#C87533]">{nextLiveDate}</span>
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <div>
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-white">Stop losing money to</span>{" "}
                                <span className="relative">
                                    <span className="text-[#C87533]">
                                        Instagram gurus
                                    </span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                                        <path d="M0 4 Q50 0 100 4 T200 4" stroke="#C87533" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </motion.h1>

                            <motion.p
                                className="mt-4 text-base sm:text-lg md:text-xl text-[#EDE6D8]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Master crypto trading in 2 hours daily with our <span className="font-semibold text-white">proven system</span> that 1,263 professionals already use to generate consistent profits.
                            </motion.p>
                        </div>

                        {/* Problem/Solution Toggle */}
                        <div className="bg-white/10 rounded-xl p-1">
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setActiveTab('problem')}
                                    className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg transition-all text-xs sm:text-sm ${
                                        activeTab === 'problem'
                                            ? 'bg-[#E5484D]/10 text-[#E5484D] border border-[#E5484D]/20'
                                            : 'text-[#EDE6D8] hover:text-white'
                                    }`}
                                >
                                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                                    <span className="hidden sm:inline">Without Proper System</span>
                                    <span className="sm:hidden">Problems</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('solution')}
                                    className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg transition-all text-xs sm:text-sm ${
                                        activeTab === 'solution'
                                            ? 'bg-[#0A8D7A]/10 text-[#0A8D7A] border border-[#0A8D7A]/20'
                                            : 'text-[#EDE6D8] hover:text-white'
                                    }`}
                                >
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                                    <span className="hidden sm:inline">With TWS Method</span>
                                    <span className="sm:hidden">Solution</span>
                                </button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'problem' ? (
                                <motion.div
                                    key="problem"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-3"
                                >
                                    {[
                                        "Following random tips → Lost ₹50K+ in pump & dumps",
                                        "No risk management → Account blown in one bad trade",
                                        "FOMO trading → Buying tops, selling bottoms",
                                        "Information overload → Paralysis by analysis"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#E5484D]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 bg-[#E5484D] rounded-full" />
                                            </div>
                                            <span className="text-sm sm:text-base text-[#EDE6D8]/80">{item}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="solution"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-3"
                                >
                                    {[
                                        "Rule-based system → ₹27.2 Cr student profits reported",
                                        "Risk-first approach → Never lose more than 2%",
                                        "2-hour daily routine → Perfect for working professionals",
                                        "Live monthly Q&A → Direct access to expert guidance"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#0A8D7A]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle className="w-4 h-4 text-[#0A8D7A]" />
                                            </div>
                                            <span className="text-sm sm:text-base text-[#EDE6D8]">{item}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* CTA Section */}
                        <div className="space-y-4">
                            <motion.button
                                onClick={handleEnroll}
                                className="w-full sm:w-auto bg-[#C87533] hover:bg-[#b5682d] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 text-sm sm:text-base"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Zap className="w-5 h-5" />
                                Start my 2-hour skill today
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <div className="flex items-center gap-2 text-sm text-[#EDE6D8]/80">
                                <Lock className="w-4 h-4" />
                                <span>Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Proof */}
                    <div className="relative lg:pl-8 mt-12 lg:mt-0">
                        {/* Stats Cards - Hidden on mobile, shown on tablet+ */}
                        <div className="hidden md:block relative h-[400px] lg:h-[500px]">
                            {/* Central Chart/Visual */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 relative">
                                    <svg className="w-full h-full -rotate-90">
                                        <circle cx="128" cy="128" r="120" stroke="rgba(255,255,255,0.1)" strokeWidth="16" fill="none" />
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="120"
                                            stroke="#C87533"
                                            strokeWidth="16"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 120 * 0.73} ${2 * Math.PI * 120}`}
                                            strokeLinecap="round"
                                            className="animate-[dash_2s_ease-in-out_forwards]"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-4xl font-bold text-[#C87533]">73%</div>
                                        <div className="text-sm text-[#EDE6D8]/80">Win Rate</div>
                                    </div>
                                </div>
                            </div>

                            {/* Static stat cards */}
                            <div className="absolute top-0 left-0 bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#C87533]/10 rounded-lg flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-[#C87533]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#C87533]">₹27.2 Cr</div>
                                        <div className="text-xs text-[#2C3539]/60">Student Profits</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-20 right-0 bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#0A8D7A]/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#0A8D7A]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#C87533]">1,263</div>
                                        <div className="text-xs text-[#2C3539]/60">Students Enrolled</div>
                                    </div>
                                </div>
                            </div>

                            {/* Next Q&A Card - replaces fake "Live Now" */}
                            <div className="absolute bottom-20 left-0 bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#C87533]/10 rounded-lg flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-[#C87533]" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-[#C87533]">Next Q&A</div>
                                        <div className="text-xs text-[#2C3539]/60">{nextLiveDate}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Program Format Card - replaces fake countdown */}
                            <div className="hidden lg:block absolute bottom-0 right-0 bg-white/10 rounded-xl p-4 border border-[#EDE6D8]/20">
                                <div className="text-center">
                                    <div className="text-xs text-[#C87533] mb-2">Program Format</div>
                                    <div className="space-y-1.5 text-sm">
                                        <div className="flex items-center gap-2 text-[#EDE6D8]">
                                            <BookOpen className="w-4 h-4 text-[#0A8D7A]" />
                                            <span>12-week recorded curriculum</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#EDE6D8]">
                                            <Calendar className="w-4 h-4 text-[#C87533]" />
                                            <span>Monthly live Q&A sessions</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#EDE6D8]">
                                            <Clock className="w-4 h-4 text-[#0A8D7A]" />
                                            <span>Lifetime access included</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Stats - Visible only on mobile */}
                        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="text-2xl font-bold text-[#C87533]">₹27.2 Cr</div>
                                <div className="text-xs text-[#2C3539]/60">Student Profits</div>
                            </div>
                            <div className="bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="text-2xl font-bold text-[#C87533]">1,263</div>
                                <div className="text-xs text-[#2C3539]/60">Students Enrolled</div>
                            </div>
                            <div className="bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="text-2xl font-bold text-[#C87533]">73%</div>
                                <div className="text-xs text-[#2C3539]/60">Win Rate</div>
                            </div>
                            <div className="bg-[#FAF8F5] text-[#2C3539] rounded-xl p-4 shadow-lg">
                                <div className="text-lg font-bold text-[#C87533]">Q&A {nextLiveDate}</div>
                                <div className="text-xs text-[#2C3539]/60">Next Live Session</div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4 md:mt-8">
                            <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
                                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A8D7A] mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-[#EDE6D8]/80">Risk-First</div>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
                                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A8D7A] mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-[#EDE6D8]/80">Journal System</div>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#C87533] mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-[#EDE6D8]/80">2 Hrs Daily</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Proof Bar - honest, no fake avatars */}
                <motion.div
                    className="mt-8 lg:mt-12 bg-white/10 rounded-xl p-3 sm:p-4 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#C87533]" />
                                <div className="text-sm">
                                    <span className="text-white font-semibold">1,263 students enrolled</span>
                                    <span className="text-[#EDE6D8]/60 ml-2">· Self-reported results</span>
                                </div>
                            </div>
                        </div>

                        {onMethodologyClick && (
                            <button
                                onClick={onMethodologyClick}
                                className="text-xs sm:text-sm text-[#EDE6D8]/80 hover:text-[#C87533] transition-colors flex items-center gap-1"
                            >
                                <span className="hover:underline">Methodology & verification</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSectionReimagined;
