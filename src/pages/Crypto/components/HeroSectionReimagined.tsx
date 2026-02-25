import { motion } from 'framer-motion';
import { ArrowRight, Lock, Calendar, CheckCircle } from 'lucide-react';
import { getNextFirstSaturdayWithOrdinal } from '../utils/dateHelpers';
import { cryptoTrackingEvents } from '../utils/tracking';
import { CRYPTO_PRICE, CRYPTO_STATS } from '../data';
import { getCheckoutUrl } from '../../../constants';

interface HeroSectionReimaginedProps {
    onMethodologyClick?: () => void;
}

const formatDate = (dateStr: string) => {
    return dateStr.replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ').replace(/([A-Z]{3})/, (match) =>
        match.charAt(0) + match.slice(1).toLowerCase()
    );
};

const HeroSectionReimagined: React.FC<HeroSectionReimaginedProps> = ({ onMethodologyClick }) => {
    const nextLiveDate = formatDate(getNextFirstSaturdayWithOrdinal());

    const handleEnroll = () => {
        cryptoTrackingEvents.checkoutStart('hero_section_reimagined', CRYPTO_PRICE);
        window.open(getCheckoutUrl('crypto', 'hero'), '_blank', 'noopener');
    };

    return (
        <section className="relative overflow-hidden bg-[#2C3539] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[4rem_4rem]" aria-hidden="true" />
            {/* Amber glow top-left */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C87533]/[0.08] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-5 sm:space-y-6">
                        {/* Next Q&A badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-[#C87533]/10 border border-[#C87533]/[0.25] rounded-full px-4 py-2"
                        >
                            <Calendar className="w-4 h-4 text-[#C87533]" />
                            <span className="text-sm text-white/80">
                                Next Live Q&A: <span className="font-semibold text-[#C87533]">{nextLiveDate}</span>
                            </span>
                        </motion.div>

                        {/* Identity attack — name the painful identity */}
                        <motion.p
                            className="text-base sm:text-lg text-white/70 max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            Still FOMO-buying at the top and panic-selling at the bottom?
                        </motion.p>

                        {/* Headline — pain-first, then solution */}
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-sans font-bold text-white">Stop losing money on </span>
                            <span className="font-serif italic font-normal text-[#C87533]">random crypto trades</span>
                        </motion.h1>

                        {/* Transformation subheadline */}
                        <motion.p
                            className="text-xl sm:text-2xl text-white/90 font-medium max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                        >
                            Build a 2-hour evening system that turns guesswork into rules.
                        </motion.p>

                        {/* Supporting detail with timeframe */}
                        <motion.p
                            className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                        >
                            In 12 weeks, go from random trades to a repeatable system — with a journal to prove it. Recorded curriculum + monthly live Q&A for doubt-solving.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            className="flex flex-wrap gap-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div>
                                <div className="text-2xl font-bold text-[#C87533]">{CRYPTO_STATS.enrolled}</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Enrolled</div>
                            </div>
                            <div className="hidden sm:block w-px bg-white/10" />
                            <div>
                                <div className="text-2xl font-bold text-[#0A8D7A]">{CRYPTO_STATS.winRate}</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Reported win rate</div>
                            </div>
                            <div className="hidden sm:block w-px bg-white/10" />
                            <div>
                                <div className="text-2xl font-bold text-white">{CRYPTO_STATS.dailyCommitment}</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Daily commitment</div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.button
                                onClick={handleEnroll}
                                className="inline-flex items-center gap-3 bg-[#C87533] hover:bg-[#b5682d] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-[#C87533]/20"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start my 2-hour skill today
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <div className="flex items-center gap-2 text-sm text-white/50">
                                <Lock className="w-4 h-4" />
                                <span>UPI · Cards · Netbanking · No-cost EMI available</span>
                            </div>

                            {onMethodologyClick && (
                                <button
                                    type="button"
                                    onClick={onMethodologyClick}
                                    className="text-sm text-white/50 hover:text-[#C87533] transition-colors inline-flex items-center gap-1 min-h-[44px] py-2"
                                >
                                    <span>Self-reported results · Methodology & verification</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </motion.div>
                    </div>

                    {/* Right: Mock Trade Journal Card */}
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-[#3a4549] border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl">
                            {/* Card header */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider">Trade Journal</p>
                                    <p className="font-semibold text-white">This Week's Review</p>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0A8D7A]/[0.15] rounded-full border border-[#0A8D7A]/20">
                                    <div className="w-1.5 h-1.5 bg-[#0A8D7A] rounded-full animate-pulse" />
                                    <span className="text-xs text-[#0A8D7A] font-medium">System Active</span>
                                </div>
                            </div>

                            {/* Checklist steps */}
                            <div className="space-y-3">
                                {[
                                    { step: "Define invalidation + position size", done: true },
                                    { step: "Scan 3-5 setups with checklist", done: true },
                                    { step: "Plan entries / exits with rules", done: true },
                                    { step: "Place alerts, manage by exception", done: true },
                                    { step: "Weekly journal review", done: false, active: true },
                                ].map((item) => (
                                    <div key={item.step} className={`flex items-center gap-3 p-2.5 rounded-lg ${item.active ? 'bg-[#C87533]/[0.08] border border-[#C87533]/20' : ''}`}>
                                        <CheckCircle className={`w-4 h-4 shrink-0 ${item.done ? 'text-[#0A8D7A]' : 'text-[#C87533]'}`} />
                                        <span className={`text-sm ${item.active ? 'text-[#C87533] font-medium' : item.done ? 'text-white/60' : 'text-white/40'}`}>{item.step}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats footer */}
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-[#0A8D7A] font-bold text-lg">{CRYPTO_STATS.winRate}</div>
                                    <div className="text-[10px] text-white/40 uppercase">Win rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#C87533] font-bold text-lg">{CRYPTO_STATS.avgRR}</div>
                                    <div className="text-[10px] text-white/40 uppercase">Avg R:R</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-bold text-lg">{CRYPTO_STATS.dailyCommitment}</div>
                                    <div className="text-[10px] text-white/40 uppercase">Daily</div>
                                </div>
                            </div>

                            <p className="text-[10px] text-white/30 text-center">Sample journal data. Individual results vary.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionReimagined;
