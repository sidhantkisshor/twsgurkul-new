import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { problems } from '../data';

const ProblemSection: React.FC = () => {
    return (
        <section id="how-it-works" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <span className="text-xs sm:text-sm font-medium text-red-400">EXPOSED: The Crypto Scam Epidemic</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        The UGLY Truth: How Fake 'Gurus'
                        <span className="text-red-400"> STEAL ₹247 Crores Daily</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
                        <strong className="text-yellow-400">"Sir guarantee dete hain 100% profit"</strong> - Sound familiar? That's how they trap you. While you lose, they buy luxury cars with YOUR money.
                    </p>
                </motion.div>
                <div className="space-y-3 sm:space-y-4">
                    {problems.map((item, index) => (
                        <motion.div
                            key={item.problem}
                            className="glass-effect rounded-lg p-3 sm:p-4 border border-red-500/20 hover:border-red-500/30 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="text-xl sm:text-2xl">{item.emotion}</div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-red-400 mb-1 text-sm sm:text-base">{item.problem}</h3>
                                    <p className="text-xs sm:text-sm text-slate-400">{item.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-effect rounded-xl p-6 border border-green-500/20 inline-block">
                        <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                            <span className="text-green-400">FACT:</span> Every Day You Wait = ₹5,000+ Lost
                        </p>
                        <p className="text-base sm:text-lg text-slate-300">
                            While you're reading this, our students are making their <span className="text-yellow-400 font-bold">2nd trade of the day</span>
                        </p>
                        <p className="text-sm text-slate-400 mt-2">
                            (Average profit per trade: ₹2,500 - Do the math)
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection; 