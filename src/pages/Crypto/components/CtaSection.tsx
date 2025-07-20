import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, CreditCard, ShieldCheck, AlertCircle } from 'lucide-react';
import { benefits, pricing, urgencyData, guarantees } from '../data';

const CtaSection: React.FC = () => {
    return (
        <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5" />
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 px-3 py-1.5 rounded-full mb-4 animate-pulse">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span className="text-xs sm:text-sm font-medium text-red-400">URGENT: Price Increases Tomorrow</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        <span className="text-red-400">WARNING:</span> Only 47 Spots Left at <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">₹19,499</span>
                    </h2>
                    <p className="text-lg text-slate-300">
                    Tomorrow it's ₹24,999. While you think, 3 more spots just got taken. Don't be the one who pays ₹5,500 extra.
                    </p>
                    
                    {/* Bonus Timer */}
                    <motion.div 
                        className="mt-6 inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-6 py-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <p className="text-sm font-semibold text-yellow-400">
                            🎁 {urgencyData.bonusDeadline}: FREE {urgencyData.bonusDescription} (Worth {urgencyData.bonusValue})
                        </p>
                    </motion.div>
                </motion.div>

                {/* Value Stack First */}
                <motion.div 
                    className="glass-effect rounded-2xl p-8 border border-white/10 mb-8 hover:border-white/20 transition-all"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        What 1,263 Indians Got (You're Getting The Same):
                    </h3>

                    <div className="space-y-3 mb-8">
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={benefit.item}
                                className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/5 hover:border-white/10 transition-all"
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
                        <div className="relative glass-effect rounded-xl p-8 border border-green-500/20 text-center hover:border-green-500/30 transition-all">
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
                            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Yes, I Want Financial Freedom →
                        </motion.button>
                        
                    </div>

                    {/* Payment Methods */}
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-2 sm:space-y-0 sm:space-x-6">
                        <p className="text-sm text-slate-400">100% Secure Payments:</p>
                        <img 
                            src="https://d2j3cl693ttatt.cloudfront.net/assets/images/payment-sprite.svg" 
                            alt="Payment methods accepted" 
                            className="h-6"
                            style={{ filter: 'brightness(1.3) saturate(1.2) contrast(0.5)' }}
                        />
                    </div>

                    {/* Urgency Section */}
                    <motion.div 
                        className="mt-8 glass-effect rounded-xl p-4 text-center border border-red-500/20 hover:border-red-500/30 transition-all"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                            <p className="text-sm text-red-400 font-semibold">Limited Time Offer Ending Soon</p>
                        </div>
                        <p className="font-semibold text-white">Price increases to {urgencyData.priceIncrease.newPrice} on {urgencyData.priceIncrease.date}</p>
                        <p className="text-xs text-slate-400 mt-1">Only {urgencyData.seatsLeft} seats remaining at this price</p>
                    </motion.div>

                    {/* Guarantee Section */}
                    <motion.div 
                        className="mt-8 glass-effect rounded-xl p-6 border border-green-500/20 hover:border-green-500/30 transition-all"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-green-400" />
                            <h4 className="text-lg font-semibold text-green-400">100% Risk-Free Guarantee</h4>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">
                            <strong className="text-white">{guarantees.moneyBack.period} Money-Back Guarantee:</strong> {guarantees.moneyBack.condition}
                        </p>
                        <p className="text-sm text-slate-300">
                            <strong className="text-white">{guarantees.results.claim}</strong> ({guarantees.results.verified})
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;

