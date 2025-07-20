import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { comparisonData } from '../data';

const WhyCryptoSection: React.FC = () => {
    return (
        <section id="why-crypto" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        "My FD Gave 7% in 1 Year...
                        <span className="text-yellow-400"> My Crypto Gave 73% in 1 Month"</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300">
                        — Priya Sharma, 28, Bangalore (Started with just ₹25,000)
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {comparisonData.map((comparison, index) => (
                        <motion.div
                            key={comparison.title}
                            className={`glass-effect rounded-xl p-4 sm:p-6 border ${comparison.color === 'green' ? 'border-green-500/20 hover:border-green-500/30' : 'border-red-500/20 hover:border-red-500/30'} transition-all hover:transform hover:scale-[1.02]`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                                <comparison.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${comparison.color === 'green' ? 'text-green-400' : 'text-red-400'}`} />
                                <h3 className="text-lg sm:text-xl font-semibold">{comparison.title}</h3>
                            </div>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {comparison.points.map((point) => (
                                    <li key={point} className="flex items-start space-x-2">
                                        <span className={`mt-0.5 ${comparison.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>•</span>
                                        <span className="text-sm sm:text-base text-slate-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl p-4 sm:p-6 border border-blue-500/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-blue-400 mb-1 text-base">Important Disclaimer</p>
                            <p className="text-sm text-slate-300">
                                Crypto trading involves high risk. Past returns don't guarantee future results.
                                We teach risk management and safe trading practices. Never invest money you can't afford to lose.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyCryptoSection; 