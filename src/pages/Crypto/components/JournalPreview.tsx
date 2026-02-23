import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { cryptoTrackingEvents } from '../utils/tracking';

const JournalPreview: React.FC = () => {
    const [isViewing, setIsViewing] = useState(false);
    const viewStartTime = useRef<number>(0);

    const handleViewJournal = () => {
        setIsViewing(true);
        viewStartTime.current = Date.now();
    };

    useEffect(() => {
        if (isViewing) {
            // Track after 3 seconds of viewing
            const timer = setTimeout(() => {
                const duration = Math.round((Date.now() - viewStartTime.current) / 1000);
                cryptoTrackingEvents.journalPreviewViewed(duration);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isViewing]);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF1E0]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FAF8F5] rounded-xl p-8 border border-[rgba(44,53,57,0.08)] shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-8 h-8 text-[#C87533]" />
                        <h3 className="text-2xl font-bold text-[#2C3539]">Trading Journal Preview</h3>
                    </div>

                    {!isViewing ? (
                        <div className="text-center space-y-4">
                            <p className="text-[#111111]/60">
                                See how our students track and improve their trades with our proven journal system
                            </p>
                            <motion.button
                                onClick={handleViewJournal}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C87533] text-white font-semibold rounded-lg hover:bg-[#b5682d] hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Sample Journal
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                        >
                            {/* Sample journal entries */}
                            <div className="bg-[#2C3539]/5 rounded-lg p-4 border border-[#0A8D7A]/20">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#111111]/60" />
                                        <span className="text-sm text-[#111111]/60">15 Nov 2024</span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-[#0A8D7A]/10 text-[#0A8D7A] border border-[#0A8D7A]/20 rounded-sm">WIN</span>
                                </div>
                                <h4 className="font-semibold text-[#2C3539] mb-1">BTC/USDT Long</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-[#111111]/60">Entry:</span>
                                        <span className="text-[#2C3539] ml-1">$65,432</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">Exit:</span>
                                        <span className="text-[#2C3539] ml-1">$67,890</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">P&L:</span>
                                        <span className="text-[#0A8D7A] ml-1">+3.76%</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-[rgba(44,53,57,0.08)]">
                                    <p className="text-sm text-[#111111]/60">
                                        <strong>Setup:</strong> Breakout from ascending triangle on 4H chart
                                    </p>
                                    <p className="text-sm text-[#111111]/60 mt-1">
                                        <strong>Lesson:</strong> Patience paid off waiting for confirmation
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#2C3539]/5 rounded-lg p-4 border border-[#E5484D]/20">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#111111]/60" />
                                        <span className="text-sm text-[#111111]/60">14 Nov 2024</span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-[#E5484D]/10 text-[#E5484D] border border-[#E5484D]/20 rounded-sm">LOSS</span>
                                </div>
                                <h4 className="font-semibold text-[#2C3539] mb-1">ETH/USDT Short</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-[#111111]/60">Entry:</span>
                                        <span className="text-[#2C3539] ml-1">$3,245</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">Exit:</span>
                                        <span className="text-[#2C3539] ml-1">$3,310</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">P&L:</span>
                                        <span className="text-[#E5484D] ml-1">-2.00%</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-[rgba(44,53,57,0.08)]">
                                    <p className="text-sm text-[#111111]/60">
                                        <strong>Setup:</strong> Resistance rejection at $3,300
                                    </p>
                                    <p className="text-sm text-[#111111]/60 mt-1">
                                        <strong>Lesson:</strong> Stop loss saved from bigger loss. Position sizing worked.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-[#C87533]/5 rounded-lg border border-[#C87533]/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-[#C87533]" />
                                    <span className="font-semibold text-[#C87533]">Monthly Stats</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-[#111111]/60">Win Rate:</span>
                                        <span className="text-[#2C3539] ml-2">68%</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">Avg Win/Loss:</span>
                                        <span className="text-[#0A8D7A] ml-2">2.3:1</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">Total Trades:</span>
                                        <span className="text-[#2C3539] ml-2">47</span>
                                    </div>
                                    <div>
                                        <span className="text-[#111111]/60">Net P&L:</span>
                                        <span className="text-[#0A8D7A] ml-2">+12.4%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <p className="text-sm text-[#111111]/60">
                                    Get your personalized trading journal template included with the course
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default JournalPreview;