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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-2xl p-8 border border-yellow-500/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-8 h-8 text-yellow-400" />
                        <h3 className="text-2xl font-bold text-white">Trading Journal Preview</h3>
                    </div>

                    {!isViewing ? (
                        <div className="text-center space-y-4">
                            <p className="text-slate-300">
                                See how our students track and improve their trades with our proven journal system
                            </p>
                            <motion.button
                                onClick={handleViewJournal}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
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
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm text-slate-400">15 Nov 2024</span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">WIN</span>
                                </div>
                                <h4 className="font-semibold text-white mb-1">BTC/USDT Long</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-slate-500">Entry:</span>
                                        <span className="text-white ml-1">$65,432</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Exit:</span>
                                        <span className="text-white ml-1">$67,890</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">P&L:</span>
                                        <span className="text-green-400 ml-1">+3.76%</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-slate-700">
                                    <p className="text-sm text-slate-300">
                                        <strong>Setup:</strong> Breakout from ascending triangle on 4H chart
                                    </p>
                                    <p className="text-sm text-slate-300 mt-1">
                                        <strong>Lesson:</strong> Patience paid off waiting for confirmation
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/20">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm text-slate-400">14 Nov 2024</span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">LOSS</span>
                                </div>
                                <h4 className="font-semibold text-white mb-1">ETH/USDT Short</h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-slate-500">Entry:</span>
                                        <span className="text-white ml-1">$3,245</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Exit:</span>
                                        <span className="text-white ml-1">$3,310</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">P&L:</span>
                                        <span className="text-red-400 ml-1">-2.00%</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-slate-700">
                                    <p className="text-sm text-slate-300">
                                        <strong>Setup:</strong> Resistance rejection at $3,300
                                    </p>
                                    <p className="text-sm text-slate-300 mt-1">
                                        <strong>Lesson:</strong> Stop loss saved from bigger loss. Position sizing worked.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                                    <span className="font-semibold text-yellow-400">Monthly Stats</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-slate-400">Win Rate:</span>
                                        <span className="text-white ml-2">68%</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400">Avg Win/Loss:</span>
                                        <span className="text-green-400 ml-2">2.3:1</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400">Total Trades:</span>
                                        <span className="text-white ml-2">47</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400">Net P&L:</span>
                                        <span className="text-green-400 ml-2">+12.4%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <p className="text-sm text-slate-400">
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