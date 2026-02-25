import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, animate, useAnimationFrame, wrap, PanInfo, useReducedMotion } from 'framer-motion';
import { Gift, UserCheck, ArrowRight } from 'lucide-react';
import { testimonials } from '../data';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
    onMethodologyClick?: () => void;
}

const parseProfit = (profit: string): number => {
    const numStr = profit.replace(/₹|,/g, '').toLowerCase();
    const isLakhs = numStr.includes('lakhs');
    const value = parseFloat(numStr.replace('lakhs', ''));
    if (isNaN(value)) return 0;
    return isLakhs ? value * 100000 : value;
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onMethodologyClick }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    const baseX = useMotionValue(0);
    const baseVelocity = -25;
    const moveFactor = useRef(1);
    const isDragging = useRef(false); // Ref to track drag state

    useEffect(() => {
        const updateDimensions = () => {
            if (scrollRef.current && testimonials.length > 0) {
                const oneSetWidth = scrollRef.current.scrollWidth / 2;
                setScrollWidth(oneSetWidth);

                if (testimonials.length > 2) {
                    const children = Array.from(scrollRef.current.children);
                    const card1Width = (children[0] as HTMLElement).offsetWidth;
                    const gap = parseFloat(window.getComputedStyle(scrollRef.current).gap) || 0;

                    const initialOffset = -(card1Width + gap);
                    baseX.set(initialOffset);
                }
            }
        };
        const timeoutId = setTimeout(updateDimensions, 100);
        window.addEventListener('resize', updateDimensions);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateDimensions);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testimonials.length]);

    useAnimationFrame((_, delta) => {
        if (prefersReducedMotion || !scrollWidth || moveFactor.current === 0) return;
        const moveBy = moveFactor.current * baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });
    
    const x = useTransform(baseX, (v) => 
        `${scrollWidth ? wrap(-scrollWidth, 0, v) : 0}px`
    );

    const handleDragStart = () => {
        isDragging.current = true;
        moveFactor.current = 0;
    };
    
    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        isDragging.current = false;
        // FIX 1: Switched to a 'decay' animation for more natural flick momentum.
        animate(baseX, baseX.get() + info.velocity.x, {
            type: "decay",
            velocity: info.velocity.x,
            timeConstant: 350, // Higher number = longer coast
            power: 0.8, // Lower number = more coast
            onComplete: () => {
                moveFactor.current = 1;
            }
        });
    };
    
    // FIX 2: Added pointer events to pause on any press/hold.
    const handlePointerDown = () => {
        moveFactor.current = 0; // Immediately stop on press
    };

    const handlePointerUp = () => {
        // If not dragging, resume scrolling. If dragging, onDragEnd will handle it.
        if (!isDragging.current) {
            moveFactor.current = 1;
        }
    };

    // Keyboard navigation: arrow keys nudge the carousel
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            baseX.set(baseX.get() + 320);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            baseX.set(baseX.get() - 320);
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            // Toggle pause/resume
            moveFactor.current = moveFactor.current === 0 ? 1 : 0;
        }
    };

    return (
        <section
            id="testimonials"
            className="crypto-section bg-[#FFF1E0] overflow-hidden relative"
            role="region"
            aria-label="Customer testimonials"
        >
            {/* Background */}
            <div className="crypto-container">
                <motion.div
                    className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl">
                        <span className="font-sans font-bold text-[#2C3539]">Student</span>{' '}
                        <span className="font-serif italic font-normal text-[#C87533]">Experiences</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#2C3539]/70 max-w-3xl mx-auto leading-relaxed">
                        Based on self-reported data. Individual results vary significantly.
                        {onMethodologyClick && (
                            <>
                                {' '}
                                <button
                                    onClick={onMethodologyClick}
                                    className="inline-flex items-center gap-1 text-[#2C3539]/70 hover:text-[#C87533] transition-colors group py-3 -my-3"
                                >
                                    <span className="group-hover:underline">Methodology & verification</span>
                                    <span>→</span>
                                </button>
                            </>
                        )}
                    </p>
                </motion.div>
                
                <div
                    className="relative cursor-grab active:cursor-grabbing"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Student testimonials — use arrow keys to scroll, Enter or Space to pause"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    <motion.div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-8"
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: -Infinity, right: Infinity }}
                        onHoverStart={() => moveFactor.current = 0.2}
                        onHoverEnd={() => moveFactor.current = 1}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                        dragElastic={0.02}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <TestimonialCard 
                                key={`${testimonial.name}-${index}`}
                                testimonial={testimonial} 
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Swipe affordance — mobile only */}
                <p className="sm:hidden text-center text-xs text-[#2C3539]/40 mt-4 mb-2 select-none">
                    ← swipe to see more →
                </p>

                <motion.div
                    className="text-center mt-6 sm:mt-10 px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => {
                            const el = document.getElementById('pricing');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center gap-2 bg-[#C87533] hover:bg-[#b5682d] text-white font-bold py-3 px-8 rounded-xl transition-all text-base"
                    >
                        Join 1,263+ students
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{
    testimonial: Testimonial;
}> = ({ testimonial }) => {
    const [profitVisible, setProfitVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const profitValue = useMemo(() => parseProfit(testimonial.profit), [testimonial.profit]);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayProfit = useTransform(rounded, (v) => `₹${new Intl.NumberFormat('en-IN').format(v)}`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !profitVisible) {
                        setProfitVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => observer.disconnect();
    }, [profitVisible]);

    useEffect(() => {
        if (profitVisible) {
            const animation = animate(count, profitValue, {
                duration: 2.5,
                ease: "easeOut",
            });
            return animation.stop;
        }
    }, [profitVisible, profitValue, count]);

    return (
        <motion.div
            ref={cardRef}
            className="bg-white rounded-2xl border border-[rgba(44,53,57,0.08)] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shrink-0 w-[85vw] sm:w-[80vw] md:w-[400px] shadow-lg relative select-none"
            whileHover={{ y: -8, borderColor: 'rgba(44,53,57,0.16)' }}
        >

            <div className="mb-4">
                <h4 className="font-sans font-bold text-[#2C3539] text-base">{testimonial.name}</h4>
                <p className="text-[#2C3539]/70 text-sm">{testimonial.role}</p>
                <p className="text-[#2C3539]/70 text-xs mt-0.5">{testimonial.location} · Age {testimonial.age}</p>
            </div>

            <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <blockquote className="text-[#2C3539] leading-relaxed text-lg">
                    <span className="text-[#C87533] text-3xl font-serif leading-none">"</span>
                    <span className="font-semibold italic mx-1">
                        {testimonial.quoteHeadline}
                    </span>
                    <span className="text-[#C87533] text-3xl font-serif leading-none">"</span>
                </blockquote>
                
                <p className="text-[#2C3539]/80 mt-2 leading-relaxed text-sm">
                    {testimonial.quoteBody}
                </p>
            </motion.div>

            <div className="space-y-3">
                <motion.div 
                    className="bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 rounded-xl p-3 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex items-center justify-between relative z-10">
                        <span className="text-[#2C3539]/80 text-sm">
                            Profit in {testimonial.time}
                        </span>
                        <motion.span 
                            className="font-bold text-[#0A8D7A] text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: profitVisible ? 1 : 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            {displayProfit}
                        </motion.span>
                    </div>
                    <motion.div 
                        className="absolute inset-0 bg-linear-to-r from-[#0A8D7A]/10 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                </motion.div>

                <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="p-2 bg-[#C87533]/10 rounded-lg border border-[#C87533]/20">
                        <Gift className="text-[#C87533] w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#2C3539] text-sm">
                        {testimonial.highlight}
                    </span>
                </motion.div>

                {testimonial.isVerified && (
                    <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="p-2 bg-[#0A8D7A]/10 rounded-lg border border-[#0A8D7A]/20">
                            <UserCheck className="text-[#0A8D7A] w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-[#076D5F] text-sm">
                                Verified Student
                            </span>
                            <span className="text-xs text-[#2C3539]/70">
                                {testimonial.verificationDate}
                            </span>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;