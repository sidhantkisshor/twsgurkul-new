import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';
import { cryptoTrackingEvents } from '../utils/tracking';

interface MethodologyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            cryptoTrackingEvents.methodologyModalOpened();
        }
    }, [isOpen]);
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    
                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="glass-effect bg-slate-900/95 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Info className="w-6 h-6 text-yellow-400" />
                                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                                        Methodology & Verification
                                    </h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <p className="text-slate-300">
                                        <strong className="text-white">₹27.2Cr</strong> is the sum of withdrawals self-reported by students who voluntarily shared bank screenshots.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <p className="text-slate-300">
                                        <strong className="text-white">73% reported win rate</strong> is from 1,847 student-recorded trades over 12 months; a "win" = above-breakeven after fees.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <p className="text-slate-300">
                                        Students reported capturing 5 of the last 7 major BTC moves using our systematic approach.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <p className="text-slate-300">
                                        We do not independently audit every claim; figures are directional.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <p className="text-slate-300">
                                        No profit guarantees. Education only. Results vary by effort, capital, and market conditions.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Footer */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-sm text-slate-500 text-center">
                                    All figures are for educational context only. Individual results will vary.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MethodologyModal;