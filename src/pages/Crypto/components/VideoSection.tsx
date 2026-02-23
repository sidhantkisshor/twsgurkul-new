import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { heroData } from '../data';

const VideoSection: React.FC = () => {
    const [showLightbox, setShowLightbox] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }, []);

    useEffect(() => {
        // Prevent body scroll when lightbox is open
        if (showLightbox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showLightbox]);

    const { video } = heroData;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {video.title}
                    </h2>
                    <p className="text-lg text-slate-300">
                        {video.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="aspect-video glass-effect rounded-2xl border border-white/10 overflow-hidden hover:border-yellow-400/50 transition-all cursor-pointer shadow-2xl relative group"
                        onClick={() => setShowLightbox(true)}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="w-full h-full relative flex items-center justify-center">
                            <img
                                src={video.thumbnail}
                                alt="Trade Review Video"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <div className="text-center px-4">
                                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Play className="w-10 h-10 text-yellow-400 ml-1" />
                                    </div>
                                    <p className="text-sm text-slate-400 mb-3">Click to watch</p>
                                    
                                    {/* Hover bullets */}
                                    <AnimatePresence>
                                        {isHovering && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex items-center justify-center gap-2 text-xs text-yellow-400 font-medium"
                                            >
                                                <span>Setup logic</span>
                                                <span className="text-slate-500">·</span>
                                                <span>Risk sizing</span>
                                                <span className="text-slate-500">·</span>
                                                <span>Exit plan</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {showLightbox && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowLightbox(false)}
                        >
                            <motion.div
                                className="relative w-full max-w-5xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setShowLightbox(false)}
                                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                                    aria-label="Close video"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                
                                {/* Video container */}
                                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full"
                                        controls
                                        autoPlay
                                        playsInline
                                        preload="none"
                                        poster={video.thumbnail}
                                    >
                                        <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-cmm-sidhant-1080.webm" type="video/webm" />
                                        <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-cmm-sidhant-1080.mp4" type="video/mp4" />
                                        <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-720p-cmm-sidhant.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                
                                {/* Video title in lightbox */}
                                <div className="mt-4 text-center">
                                    <p className="text-white text-lg font-semibold">{video.title}</p>
                                    <p className="text-slate-400 text-sm mt-1">{video.subtitle}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default VideoSection;