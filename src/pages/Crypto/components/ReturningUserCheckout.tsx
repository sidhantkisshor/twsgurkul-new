import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, X } from 'lucide-react';
import { cryptoTrackingEvents, isReturningUser } from '../utils/tracking';
import { CRYPTO_PRICE } from '../data';
import { getCheckoutUrl } from '../../../constants';

const AUTO_DISMISS_MS = 10_000;
const INITIAL_DELAY_MS = 8_000;

interface ReturningUserCheckoutProps {
    onVisibilityChange?: (visible: boolean) => void;
}

const ReturningUserCheckout: React.FC<ReturningUserCheckoutProps> = ({ onVisibilityChange }) => {
    const [showQuickCheckout, setShowQuickCheckout] = useState(false);

    // Notify parent when visibility changes (for popup stacking prevention)
    useEffect(() => {
        onVisibilityChange?.(showQuickCheckout);
    }, [showQuickCheckout, onVisibilityChange]);

    const dismiss = useCallback(() => setShowQuickCheckout(false), []);

    // Show popup after delay for returning users
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isReturningUser()) {
                cryptoTrackingEvents.returningUserDetected();
                setShowQuickCheckout(true);
            }
        }, INITIAL_DELAY_MS);

        return () => clearTimeout(timer);
    }, []);

    // Auto-dismiss after 10 seconds if user doesn't interact
    useEffect(() => {
        if (!showQuickCheckout) return;

        const autoDismiss = setTimeout(dismiss, AUTO_DISMISS_MS);
        return () => clearTimeout(autoDismiss);
    }, [showQuickCheckout, dismiss]);

    const handleQuickCheckout = () => {
        cryptoTrackingEvents.returningUserQuickCheckoutClicked();
        cryptoTrackingEvents.checkoutStart('returning_user_quick', CRYPTO_PRICE);
        window.open(getCheckoutUrl('crypto', 'returning_user'), '_blank', 'noopener');
        setShowQuickCheckout(false);
    };

    return (
        <AnimatePresence>
            {showQuickCheckout && (
                <>
                    {/* Mobile: slim bottom toast bar */}
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 60 }}
                        transition={{ duration: 0.35, type: 'spring', bounce: 0.2 }}
                    >
                        <div className="bg-[#FAF8F5] shadow-[0_-2px_12px_rgba(0,0,0,0.1)] border-t border-[rgba(44,53,57,0.08)] px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#C87533]/10 rounded-full flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-[#C87533]" />
                                </div>

                                <p className="text-sm font-semibold text-[#2C3539] flex-1 min-w-0 truncate">
                                    Welcome back!
                                </p>

                                <motion.button
                                    onClick={handleQuickCheckout}
                                    className="shrink-0 px-4 py-2.5 min-h-[44px] bg-[#9A5A1A] text-white hover:bg-[#7A4815] font-semibold rounded-lg text-sm inline-flex items-center gap-1.5"
                                    whileTap={{ scale: 0.96 }}
                                >
                                    Complete enrollment
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </motion.button>

                                <button
                                    onClick={dismiss}
                                    className="shrink-0 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#2C3539]/60 hover:text-[#2C3539]"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop: compact top-right card */}
                    <motion.div
                        className="hidden md:block fixed bottom-6 right-6 z-50 w-[340px]"
                        initial={{ opacity: 0, y: 20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 20, x: 20 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        <div className="bg-[#FAF8F5] shadow-lg rounded-xl p-4 border border-[rgba(44,53,57,0.08)] relative">
                            <button
                                onClick={dismiss}
                                className="absolute top-2.5 right-2.5 text-[#2C3539]/60 hover:text-[#2C3539] p-0.5"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="flex items-start gap-3">
                                <div className="shrink-0">
                                    <div className="w-9 h-9 bg-[#C87533]/10 rounded-full flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-[#C87533]" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-2">
                                    <h3 className="text-[#2C3539] font-semibold text-base pr-4">Welcome back! Ready to start?</h3>
                                    <p className="text-sm text-[#2C3539]/80 leading-snug">
                                        Your seat is still available. Complete your enrollment today.
                                    </p>

                                    <motion.button
                                        onClick={handleQuickCheckout}
                                        className="w-full mt-2 px-3 py-2.5 bg-[#9A5A1A] text-white hover:bg-[#7A4815] font-semibold rounded-lg hover:shadow-lg transition-all text-sm inline-flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Complete enrollment
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>

                                    <div className="flex items-center justify-between pt-1">
                                        <p className="text-xs text-[#2C3539]/70">One-time payment</p>
                                        <p className="text-xs text-[#0A8D7A]">EMI available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ReturningUserCheckout;