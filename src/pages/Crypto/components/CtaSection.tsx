import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, CreditCard, } from 'lucide-react';
import { benefits, pricing } from '../data';

const CtaSection: React.FC = () => {
    return (
        <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 px-3 py-1.5 rounded-full mb-4">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-xs sm:text-sm font-medium text-green-400">Limited Time Offer</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">1,047 Indians</span> Building Wealth
                    </h2>
                    <p className="text-lg text-slate-300">
                    You're one decision away from a completely different life. Start building your second income source today.
                    </p>
                </motion.div>

                {/* Value Stack First */}
                <motion.div 
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Here's Everything You Get Today:
                    </h3>

                    <div className="space-y-3 mb-8">
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={benefit.item}
                                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>{benefit.item}</span>
                                </div>
                                <span className="text-sm text-slate-400">{benefit.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-lg text-slate-400">Total Value</p>
                        <p className="text-4xl font-bold line-through text-slate-500">{pricing.totalValue}</p>
                    </div>

                    {/* Price Reveal */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl blur-xl"></div>
                        <div className="relative bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-8 border border-green-500/20 text-center">
                            <p className="text-sm text-green-400 font-semibold mb-2">Today's Investment</p>
                            <p className="text-4xl font-bold text-white mb-2">{pricing.currentPrice}</p>
                            <p className="text-green-400 font-semibold">You Save {pricing.savings}</p>
                            
                            <div className="mt-6 bg-slate-800/50 rounded-lg p-4">
                                <div className="flex items-baseline justify-center space-x-2">
                                    <p className="text-6xl font-bold text-yellow-400">{pricing.dailyCost}</p>
                                    <p className="text-sm text-slate-400">per day</p>
                                </div>
                                <p className="text-sm italic text-slate-400 mt-1">Less than your daily Swiggy order</p>
                            </div>
                        </div>
                    </div>

                    {/* EMI Option */}
                    <motion.div 
                        className="mt-6 bg-blue-500/10 rounded-xl p-6 border border-blue-500/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-400 font-semibold text-lg">No-Cost EMI Available</p>
                                <p className="text-2xl font-bold">{pricing.emiAmount} × {pricing.emiMonths} months</p>
                                <p className="text-sm text-slate-400">No hidden charges • 0% interest</p>
                            </div>
                            <CreditCard className="w-12 h-12 text-blue-400" />
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <div className="space-y-4 mt-8">
                        <motion.button 
                            onClick={() => window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank')}
                            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Yes, I Want Financial Freedom →
                        </motion.button>
                        
                    </div>

                    {/* Payment Methods */}
                    <div className="flex justify-center items-center mt-8 space-x-6">
                        <p className="text-sm text-slate-400">100% Secure Payments:</p>
                        <object type="image/svg+xml" data="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/images/payment-sprite.svg" className="h-6">
                            <img src="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/images/payment-sprite.svg" alt="Payment methods accepted" />
                        </object>
                    </div>

                    {/* Student Counter */}
                    <motion.div 
                        className="mt-8 bg-yellow-500/10 rounded-xl p-4 text-center border border-yellow-500/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-yellow-400 mb-2">🔥 High Demand Alert</p>
                        <p className="font-semibold">Only 23 seats left in current batch</p>
                        <p className="text-xs text-slate-400 mt-1">Next batch price: {pricing.nextBatchPrice}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;

