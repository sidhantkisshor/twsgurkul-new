import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Star } from 'lucide-react';
import { heroData, trustBadges } from '../data';

interface HeroSectionProps {
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleSmoothScroll, isPlaying, setIsPlaying }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }, []);

    const { headline, description, enrollmentStats, features, stats, video, badges, cta } = heroData;

    return (
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5" />
            <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/10 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full filter blur-[100px]" />
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <motion.div
                        className="space-y-5 sm:space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] sm:leading-tight">
                                <span className="text-white">{headline.line1}</span><br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                    {headline.line2}
                                </span><br />
                                <span className="text-white">{headline.line3}</span>
                            </h1>
                            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                                {description.part1} <strong className="text-green-400">{description.highlight1}</strong> {description.part2}
                                <span className="text-yellow-400"> {description.highlight2}</span>{description.part3}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">

                                {/* Overlapping Avatars */}
                                <div className="flex -space-x-3">
                                    {/* Placeholder avatars - can be made dynamic later */}
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/48.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/12.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/15.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://xsgames.co/randomusers/assets/avatars/male/65.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-900 filter blur-[0.5px] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pravatar.cc/400?img=59)' }}></div>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-400">
                                    <span className="text-white font-semibold">{enrollmentStats.count}</span>
                                    <span className="hidden xs:inline"> {enrollmentStats.text}</span>
                                    <span className="xs:hidden"> enrolled</span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                            {features.map((feature) => (
                                <div key={feature.text} className="glass-effect rounded-lg p-2.5 sm:p-3 border border-white/10 flex items-center space-x-2 sm:space-x-3 hover:border-white/20 transition-all">
                                    <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-400 flex-shrink-0`} />
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium truncate">{feature.text}</p>
                                        <p className="text-xs text-slate-400 truncate">{feature.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="hidden sm:flex flex-row gap-2 sm:gap-3">
                            <motion.button
                                onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                                className="group relative flex-1 sm:flex-initial px-3 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-yellow-500/25 text-xs sm:text-base lg:text-lg transition-all whitespace-nowrap"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center space-x-1 sm:space-x-2">
                                    <span>{cta.primary}</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                            <motion.button
                                onClick={(e) => handleSmoothScroll(e, 'get-started')}
                                className="group relative flex-1 sm:flex-initial px-3 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-green-500/25 text-xs sm:text-base lg:text-lg transition-all whitespace-nowrap"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center space-x-1 sm:space-x-2">
                                    <span>{cta.secondary}</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {stats.map((stat, index) => (
                                <div key={stat.label} className="text-center glass-effect rounded-lg p-2 sm:p-3 border border-white/10">
                                    {index === 1 ? (
                                        <div className="flex justify-center items-center">
                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                            <span className="text-xl sm:text-2xl font-bold ml-1">{stat.value}</span>
                                        </div>
                                    ) : (
                                        <p className={`text-base xs:text-xl sm:text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
                                    )}
                                    <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mt-6 sm:mt-8 lg:mt-0 order-first lg:order-last"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div
                            className="aspect-video glass-effect rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-yellow-400/50 transition-all cursor-pointer shadow-2xl"
                            onClick={() => setIsPlaying(true)}
                        >
                            {!isPlaying ? (
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <img
                                        src="https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg"
                                        alt="Crypto Market Mastery Video Thumbnail"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = video.thumbnail;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <div className="text-center px-4">
                                            <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 hover:scale-110 transition-transform">
                                                <Play className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-yellow-400 ml-0.5 xs:ml-1" />
                                            </div>
                                            <p className="text-base sm:text-lg font-medium mb-1">{video.title}</p>
                                            <p className="text-xs sm:text-sm text-slate-400">{video.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        autoPlay
        loop
        playsInline
        preload="metadata"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
                      poster="https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg"
            >
              <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-cmm-sidhant-1080.webm" type="video/webm" />
              <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-cmm-sidhant-1080.mp4" type="video/mp4" />
              <source src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/hero-background-720p-cmm-sidhant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
                            )}
                        </div>
                        <motion.div
                            className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full font-bold text-[10px] xs:text-xs sm:text-sm shadow-lg"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {badges.top}
                        </motion.div>
                        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 glass-effect px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full border border-white/10">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                <span className="text-xs sm:text-sm whitespace-nowrap">{badges.bottom}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Mobile Trust Badges */}
                <motion.div 
                    className="sm:hidden mt-8 glass-effect rounded-xl border border-white/10 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col gap-3">
                        {trustBadges.slice(0, 3).map((badge) => (
                            <div key={badge.text} className="flex items-center justify-center space-x-2 text-sm">
                                <badge.icon className={`w-5 h-5 text-${badge.color}-400 flex-shrink-0`} />
                                <span className="text-slate-300">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection; 