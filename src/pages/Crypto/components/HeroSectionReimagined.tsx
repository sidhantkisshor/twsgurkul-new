import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
    ArrowRight, 
    Lock, 
    TrendingUp, 
    Users, 
    Calendar,
    Zap,
    Shield,
    BookOpen,
    Clock,
    AlertCircle,
    CheckCircle,
    Activity,
    DollarSign
} from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';

interface HeroSectionReimaginedProps {
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
    onMethodologyClick?: () => void;
}

// Live ticker data
const liveWins = [
    { name: "Rahul S.", location: "Mumbai", profit: "+₹12,400", time: "2 min ago", coin: "BTC" },
    { name: "Priya K.", location: "Delhi", profit: "+₹8,200", time: "5 min ago", coin: "ETH" },
    { name: "Amit R.", location: "Bangalore", profit: "+₹15,600", time: "8 min ago", coin: "SOL" },
    { name: "Sneha M.", location: "Pune", profit: "+₹9,800", time: "12 min ago", coin: "MATIC" },
    { name: "Vikram T.", location: "Chennai", profit: "+₹21,300", time: "15 min ago", coin: "BTC" }
];

const HeroSectionReimagined: React.FC<HeroSectionReimaginedProps> = ({ handleSmoothScroll, onMethodologyClick }) => {
    const [currentWinIndex, setCurrentWinIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    // Format date
    const formatDate = (dateStr: string) => {
        return dateStr.replace(/(\\d+)(st|nd|rd|th)\\s+/, '$1 ').replace(/([A-Z]{3})/, (match) => 
            match.charAt(0) + match.slice(1).toLowerCase()
        );
    };
    
    const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

    // Rotate live wins
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWinIndex((prev) => (prev + 1) % liveWins.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    const handleEnroll = () => {
        cryptoTrackingEvents.checkoutStart('hero_section_reimagined', 19499);
        window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
    };

    return (
        <section ref={containerRef} className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-0">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/10 rounded-full filter blur-[80px] sm:blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/10 rounded-full filter blur-[80px] sm:blur-[120px] animate-pulse delay-1000" />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
            </div>

            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
                style={{ opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : opacity, scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : scale }}
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-6">
                        {/* Live Ticker */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentWinIndex}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs sm:text-sm text-green-400">
                                    <span className="font-semibold">{liveWins[currentWinIndex].name}</span>
                                    <span className="hidden sm:inline"> from {liveWins[currentWinIndex].location}</span>
                                    <span> made </span>
                                    <span className="font-bold">{liveWins[currentWinIndex].profit}</span>
                                    <span className="hidden sm:inline"> on {liveWins[currentWinIndex].coin}</span>
                                </span>
                            </motion.div>
                        </AnimatePresence>

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
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
                                        Instagram gurus
                                    </span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                                        <path d="M0 4 Q50 0 100 4 T200 4" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#facc15" />
                                                <stop offset="100%" stopColor="#f97316" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </motion.h1>
                            
                            <motion.p 
                                className="mt-4 text-base sm:text-lg md:text-xl text-slate-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Master crypto trading in 2 hours daily with our <span className="font-semibold text-white">proven system</span> that 1,263 professionals already use to generate consistent profits.
                            </motion.p>
                        </div>

                        {/* Problem/Solution Toggle */}
                        <div className="bg-slate-800/50 backdrop-blur-xs rounded-xl p-1">
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setActiveTab('problem')}
                                    className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg transition-all text-xs sm:text-sm ${
                                        activeTab === 'problem' 
                                            ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                            : 'text-slate-400 hover:text-white'
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
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                            : 'text-slate-400 hover:text-white'
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
                                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                            </div>
                                            <span className="text-sm sm:text-base text-slate-400">{item}</span>
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
                                        "Rule-based system → ₹27.2 Cr student profits",
                                        "Risk-first approach → Never lose more than 2%",
                                        "2-hour daily routine → Perfect for working professionals",
                                        "Live monthly Q&A → Direct access to expert guidance"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-sm sm:text-base text-slate-300">{item}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mobile Countdown Timer */}
                        <div className="lg:hidden bg-linear-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-xs rounded-xl p-3 border border-yellow-500/30">
                            <div className="text-center">
                                <div className="text-xs text-yellow-400 mb-1">Enrollment closes in</div>
                                <div className="flex items-center justify-center gap-1 text-white font-mono">
                                    <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                        <div className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                                        <div className="text-[9px] text-slate-400">HRS</div>
                                    </div>
                                    <span className="text-yellow-400 text-sm">:</span>
                                    <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                        <div className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                        <div className="text-[9px] text-slate-400">MIN</div>
                                    </div>
                                    <span className="text-yellow-400 text-sm">:</span>
                                    <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                        <div className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                        <div className="text-[9px] text-slate-400">SEC</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="space-y-4">
                            <motion.button
                                onClick={handleEnroll}
                                className="w-full sm:w-auto bg-linear-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 text-sm sm:text-base"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Zap className="w-5 h-5" />
                                Start my 2-hour skill today
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Lock className="w-4 h-4" />
                                <span>Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available</span>
                            </div>

                            {/* Next Live Q&A */}
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-yellow-400" />
                                <span className="text-slate-400">Next live Q&A:</span>
                                <span className="text-yellow-400 font-semibold">{nextLiveDate}</span>
                                <span className="text-slate-500">· Recording provided</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Proof */}
                    <div className="relative lg:pl-8 mt-12 lg:mt-0">
                        {/* Floating Stats Cards - Hidden on mobile, shown on tablet+ */}
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
                                            stroke="url(#progressGradient)" 
                                            strokeWidth="16" 
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 120 * 0.73} ${2 * Math.PI * 120}`}
                                            strokeLinecap="round"
                                            className="animate-[dash_2s_ease-in-out_forwards]"
                                        />
                                        <defs>
                                            <linearGradient id="progressGradient">
                                                <stop offset="0%" stopColor="#facc15" />
                                                <stop offset="100%" stopColor="#f97316" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-4xl font-bold text-white">73%</div>
                                        <div className="text-sm text-slate-400">Win Rate</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stat cards */}
                            <motion.div 
                                className="absolute top-0 left-0 bg-slate-800/80 backdrop-blur-xs rounded-xl p-4 border border-slate-700"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">₹27.2 Cr</div>
                                        <div className="text-xs text-slate-400">Student Profits</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="absolute top-20 right-0 bg-slate-800/80 backdrop-blur-xs rounded-xl p-4 border border-slate-700"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">1,263</div>
                                        <div className="text-xs text-slate-400">Active Learners</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="absolute bottom-20 left-0 bg-slate-800/80 backdrop-blur-xs rounded-xl p-4 border border-slate-700"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">Live Now</div>
                                        <div className="text-xs text-slate-400">42 Students Trading</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Timer Card - Desktop Only */}
                            <motion.div 
                                className="hidden lg:block absolute bottom-0 right-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-xs rounded-xl p-4 border border-yellow-500/30"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-center">
                                    <div className="text-xs text-yellow-400 mb-2">Enrollment closes in</div>
                                    <div className="flex items-center gap-2 text-white font-mono">
                                        <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                            <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-slate-400">HRS</div>
                                        </div>
                                        <span className="text-yellow-400">:</span>
                                        <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                            <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-slate-400">MIN</div>
                                        </div>
                                        <span className="text-yellow-400">:</span>
                                        <div className="bg-slate-800/80 rounded-sm px-2 py-1">
                                            <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-slate-400">SEC</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile Stats - Visible only on mobile */}
                        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-800/60 backdrop-blur-xs rounded-xl p-4 border border-slate-700">
                                <div className="text-2xl font-bold text-white">₹27.2 Cr</div>
                                <div className="text-xs text-slate-400">Student Profits</div>
                            </div>
                            <div className="bg-slate-800/60 backdrop-blur-xs rounded-xl p-4 border border-slate-700">
                                <div className="text-2xl font-bold text-white">1,263</div>
                                <div className="text-xs text-slate-400">Active Learners</div>
                            </div>
                            <div className="bg-slate-800/60 backdrop-blur-xs rounded-xl p-4 border border-slate-700">
                                <div className="text-2xl font-bold text-white">73%</div>
                                <div className="text-xs text-slate-400">Win Rate</div>
                            </div>
                            <div className="bg-linear-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-xs rounded-xl p-4 border border-yellow-500/30">
                                <div className="text-2xl font-bold text-white">Live</div>
                                <div className="text-xs text-slate-400">42 Trading Now</div>
                            </div>
                        </div>
                        
                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4 md:mt-8">
                            <div className="text-center p-2 sm:p-3 bg-slate-800/40 rounded-lg">
                                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-slate-400">Risk-First</div>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-slate-800/40 rounded-lg">
                                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-slate-400">Journal System</div>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-slate-800/40 rounded-lg">
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-[10px] sm:text-xs text-slate-400">2 Hrs Daily</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Proof Bar */}
                <motion.div 
                    className="mt-8 lg:mt-12 bg-slate-800/30 backdrop-blur-xs rounded-xl p-3 sm:p-4 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                            {/* Avatar Group */}
                            <div className="flex -space-x-2 sm:-space-x-3">
                                <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 bg-cover bg-center filter brightness-90 contrast-110" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/48.jpg)' }} />
                                <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 bg-cover bg-center filter brightness-90 contrast-110" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/12.jpg)' }} />
                                <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 bg-cover bg-center filter brightness-90 contrast-110" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/15.jpg)' }} />
                                <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 bg-cover bg-center filter brightness-90 contrast-110" style={{ backgroundImage: 'url(https://xsgames.co/randomusers/assets/avatars/male/65.jpg)' }} />
                                <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 bg-cover bg-center filter brightness-90 contrast-110" style={{ backgroundImage: 'url(https://i.pravatar.cc/400?img=59)' }} />
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-yellow-500 to-orange-600 border-2 border-slate-800 flex items-center justify-center">
                                    <span className="text-[10px] sm:text-xs text-white font-semibold">+1k</span>
                                </div>
                            </div>
                            <div className="text-xs sm:text-sm">
                                <div className="text-white font-semibold">Join 1,263 profitable traders</div>
                                <div className="text-slate-400">Learning the TWS method right now</div>
                            </div>
                        </div>
                        
                        {onMethodologyClick && (
                            <button
                                onClick={onMethodologyClick}
                                className="text-xs sm:text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-1"
                            >
                                <span className="hover:underline">Methodology & verification</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSectionReimagined;