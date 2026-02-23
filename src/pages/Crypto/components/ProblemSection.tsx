import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { problems } from '../data';

const ProblemSection: React.FC = () => {
    return (
        <section id="how-it-works" className="crypto-section">
            <div className="crypto-container">
                <motion.div
                    className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 bg-[#C87533]/10 border border-[#C87533]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#C87533]" />
                        <span className="crypto-micro crypto-caps text-[#C87533]">Common Crypto Trading Challenges</span>
                    </div>
                    <h2 className="crypto-h2">
                        Why Most Traders Struggle
                        <span className="text-[#C87533]"> Without Proper Education</span>
                    </h2>
                    <p className="crypto-body text-[#111111]/70 max-w-2xl mx-auto px-4">
                        <strong className="text-[#C87533]">"Guaranteed profits"</strong> - These false promises are everywhere. Learn to trade systematically instead.
                    </p>
                </motion.div>
                <div className="space-y-3 sm:space-y-4">
                    {problems.map((item, index) => (
                        <motion.div
                            key={item.problem}
                            className="bg-[#FAF8F5] border border-[rgba(44,53,57,0.08)] rounded-xl p-3 sm:p-4 hover:border-l-4 hover:border-l-[#C87533] transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="text-xl sm:text-2xl">{item.emotion}</div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#E5484D] mb-1 text-sm sm:text-base">{item.problem}</h3>
                                    <p className="text-xs sm:text-sm text-[#111111]/60">{item.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection; 