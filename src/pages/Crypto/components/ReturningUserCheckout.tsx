import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { cryptoTrackingEvents, isReturningUser } from '../utils/tracking';

const ReturningUserCheckout: React.FC = () => {
    const [showQuickCheckout, setShowQuickCheckout] = useState(false);

    useEffect(() => {
        // Check if returning user after a short delay
        const timer = setTimeout(() => {
            if (isReturningUser()) {
                cryptoTrackingEvents.returningUserDetected();
                setShowQuickCheckout(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleQuickCheckout = () => {
        cryptoTrackingEvents.returningUserQuickCheckoutClicked();
        cryptoTrackingEvents.checkoutStart('returning_user_quick', 19499);
        window.open('https://learn.tradingwithsidhant.com/web/checkout/68468c5a2f492ef9273b5025?purchaseNow=true', '_blank');
        setShowQuickCheckout(false);
    };

    return (
        <AnimatePresence>
            {showQuickCheckout && (
                <motion.div
                    className="fixed top-20 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -20, x: 20 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <div className="glass-effect bg-slate-900/95 backdrop-blur-lg rounded-xl p-5 border border-yellow-500/30 shadow-2xl">
                        <button
                            onClick={() => setShowQuickCheckout(false)}
                            className="absolute top-3 right-3 text-slate-400 hover:text-white text-2xl leading-none p-1"
                            aria-label="Close"
                        >
                            ×
                        </button>
                        
                        <div className="flex items-start gap-3">
                            <div className="shrink-0">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                </div>
                            </div>
                            
                            <div className="flex-1 space-y-3">
                                <h3 className="text-white font-semibold text-lg">Welcome back! Ready to start?</h3>
                                <p className="text-sm text-slate-300">
                                    Your seat is still available. Complete your enrollment today.
                                </p>
                                
                                <motion.button
                                    onClick={handleQuickCheckout}
                                    className="w-full mt-4 px-4 py-3 bg-linear-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-base inline-flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Complete enrollment
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                                
                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-xs text-slate-500">One-time payment</p>
                                    <p className="text-xs text-green-400">EMI available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReturningUserCheckout;