import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';
import { getCheckoutUrl } from '../../../constants';
import { cryptoTrackingEvents } from '../utils/tracking';
import { CRYPTO_PRICE } from '../data';

const FinalCtaSection: React.FC = () => {
    const handleEnroll = () => {
        cryptoTrackingEvents.checkoutStart('final_cta', CRYPTO_PRICE);
        window.open(getCheckoutUrl('crypto', 'final_cta'), '_blank', 'noopener');
    };

    return (
        <section id="final-cta" className="crypto-section bg-[#2C3539] relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Amber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C87533]/[0.06] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-10"
                >
                    {/* Heading */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
                            <span className="font-sans font-bold text-white">Ready to start your crypto</span>{' '}
                            <span className="font-serif italic font-normal text-[#C87533]">journey?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
                            Join 1,263+ professionals learning systematic trading — with instant access to all modules.
                        </p>
                    </div>

                    {/* Comparison */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 grid md:grid-cols-2 gap-6 text-left">
                        <div>
                            <h3 className="font-bold text-[#E5484D] mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#E5484D] rounded-full" />
                                Without this program
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Continue trading without a system",
                                    "Follow random tips and signals",
                                    "No risk rules, no stop-loss discipline",
                                    "Miss the next monthly Q&A session",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                                        <span className="text-[#E5484D] mt-0.5">×</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0A8D7A] mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#0A8D7A] rounded-full" />
                                With this program
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Rule-based 2-hour evening system",
                                    "Risk management before every trade",
                                    "Identify pump & dump schemes",
                                    "Monthly live Q&A + trade reviews",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                                        <span className="text-[#0A8D7A] mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Payment methods */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {["UPI", "Cards", "Netbanking", "No-cost EMI"].map((label) => (
                            <span key={label} className="px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-sm text-white/60 font-medium">
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-white/50">
                            <Shield className="w-4 h-4 text-[#0A8D7A]" />
                            Secure Payment
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/50">
                            <TrendingUp className="w-4 h-4 text-[#0A8D7A]" />
                            Proven Results
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/50">
                            <Clock className="w-4 h-4 text-[#C87533]" />
                            Instant Access
                        </div>
                    </div>

                    {/* Main CTA */}
                    <div className="space-y-3">
                        <motion.button
                            onClick={handleEnroll}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C87533] hover:bg-[#b5682d] text-white font-bold py-5 px-8 sm:px-12 rounded-2xl text-lg sm:text-xl transition-all shadow-xl shadow-[#C87533]/20"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Start my crypto journey today
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                        </motion.button>
                        <p className="text-xs text-white/40">
                            Takes under 2 minutes · ₹19,499 + 18% GST · Instant access
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
