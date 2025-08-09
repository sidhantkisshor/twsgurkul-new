import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyMobileCTAProps {
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ handleSmoothScroll }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterInView, setIsFooterInView] = useState(false);

    useEffect(() => {
        // Show after a short delay when page loads
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        // Check if footer CTA is in view
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.target.id === 'final-cta' || entry.target.id === 'get-started') {
                    setIsFooterInView(entry.isIntersecting);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
        });

        // Observe footer CTA sections
        const finalCta = document.getElementById('final-cta');
        const getStarted = document.getElementById('get-started');
        
        if (finalCta) observer.observe(finalCta);
        if (getStarted) observer.observe(getStarted);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    // Only show on mobile and when footer CTA is not in view
    const shouldShow = isVisible && !isFooterInView;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent backdrop-blur-lg border-t border-white/10 px-4 py-3"
                >
                    <div className="flex gap-2">
                        {/* Secondary Button */}
                        <button
                            onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                            className="flex-1 py-3 px-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium rounded-full text-sm border border-white/10 transition-all"
                        >
                            See Results
                        </button>
                        
                        {/* Primary Button */}
                        <button
                            onClick={(e) => handleSmoothScroll(e, 'get-started')}
                            className="flex-1 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full text-sm shadow-lg shadow-green-500/25 transition-all"
                        >
                            Start Learning — ₹19,499
                        </button>
                    </div>
                    
                    {/* Optional: Trust indicator */}
                    <div className="mt-2 text-center">
                        <p className="text-xs text-slate-400">
                            🔒 Secure checkout • 30-day satisfaction guarantee
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyMobileCTA;