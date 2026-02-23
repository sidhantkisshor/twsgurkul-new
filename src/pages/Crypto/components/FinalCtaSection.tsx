import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, TrendingUp, Bitcoin, Zap, CreditCard, Smartphone, Building } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
    
    return (
        <section id="final-cta" className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-800 via-slate-900 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-r from-yellow-500/5 to-orange-500/5 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Main heading */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Ready to Start Your
                            <span className="font-bold bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                                {' '}Crypto Journey?{' '}
                            </span>
                        </h2>
                        <p className="lg:text-lg sm:text-[10px] text-slate-300 mx-auto max-w-2xl">
                            Join our community learning systematic crypto trading. <br/>
                            <span className="text-yellow-400 font-semibold">Start today with instant access to all modules.</span>
                        </p>
                    </div>
                    
                    {/* Comparison cards */}
                    <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-12 border border-white/10 hover:border-white/20 transition-all">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Without action */}
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-bold text-slate-400 mb-4 text-lg sm:text-xl flex items-center">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                                    Without Proper Education
                                </h3>
                                <ul className="space-y-3 text-left">
                                    <li className="text-slate-400 flex items-start">
                                        <span className="text-slate-500 mr-2 text-lg">×</span>
                                        Continue trading without a system
                                    </li>
                                    <li className="text-slate-400 flex items-start">
                                        <span className="text-slate-500 mr-2 text-lg">×</span>
                                        Miss structured learning opportunities
                                    </li>
                                    <li className="text-slate-400 flex items-start">
                                        <span className="text-slate-500 mr-2 text-lg">×</span>
                                        Lack community support and guidance
                                    </li>
                                    <li className="text-slate-400 flex items-start">
                                        <span className="text-slate-500 mr-2 text-lg">×</span>
                                        Miss the next Live Q&A session
                                    </li>
                                </ul>
                            </motion.div>

                            {/* With action */}
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="font-bold text-green-400 mb-4 text-lg sm:text-xl flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                    With Our Program
                                </h3>
                                <ul className="space-y-3 text-left">
                                    <li className="text-slate-200 flex items-start">
                                        <span className="text-green-400 mr-2 text-lg">✓</span>
                                        Learn proven trading strategies
                                    </li>
                                    <li className="text-slate-200 flex items-start">
                                        <span className="text-green-400 mr-2 text-lg">✓</span>
                                        Get access to proven trading strategies
                                    </li>
                                    <li className="text-slate-200 flex items-start">
                                        <span className="text-green-400 mr-2 text-lg">✓</span>
                                        Learn to identify pump & dump schemes
                                    </li>
                                    <li className="text-slate-200 flex items-start">
                                        <span className="text-green-400 mr-2 text-lg">✓</span>
                                        Access to monthly Live Q&A sessions
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Program highlights */}
                    <motion.div 
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-linear-to-r from-green-500/10 to-yellow-500/10 rounded-xl p-6 border border-green-500/20">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <Bitcoin className="w-8 h-8 text-yellow-400 animate-pulse" />
                                <Zap className="w-6 h-6 text-green-400" />
                            </div>
                            <p className="text-xl sm:text-2xl font-bold mb-2">
                                <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                                    Start Your Learning Journey Today
                                </span>
                            </p>
                            <p className="text-slate-300 text-sm sm:text-base">
                                Get instant access to all modules and resources.<br/>
                                <span className="text-yellow-400 font-semibold">Start your transformation today.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Payment Options */}
                    <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="glass-effect rounded-xl p-6 border border-white/10 max-w-lg mx-auto">
                            <h3 className="text-lg font-bold text-white mb-4">Multiple payment options available</h3>
                            <div className="flex justify-center gap-4 mb-4">
                                <div className="flex items-center gap-2 text-sm text-slate-300">
                                    <Smartphone className="w-4 h-4 text-yellow-400" />
                                    <span>UPI</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-300">
                                    <CreditCard className="w-4 h-4 text-yellow-400" />
                                    <span>Cards</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-300">
                                    <Building className="w-4 h-4 text-yellow-400" />
                                    <span>Netbanking</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex items-center text-xs sm:text-sm text-slate-400">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400" />
                            Secure Payment
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-slate-400">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-400" />
                            Proven Results
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-slate-400">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400" />
                            Instant Access
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button 
                        onClick={() => window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank')}
                        className="group bg-linear-to-r from-green-500 via-green-600 to-green-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center space-x-3 border border-green-400/20 relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative">Start Learning Today</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>

                    <p className="text-xs text-slate-400 mt-3 text-center">
                        Takes under 2 minutes · UPI/cards/netbanking · No-cost EMI available
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCtaSection; 