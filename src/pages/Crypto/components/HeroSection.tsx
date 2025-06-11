import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Play, ShieldCheck, Star } from 'lucide-react';
import { heroData } from '../data';
import { useSmoothScroll } from '../context/SmoothScrollContext';

interface HeroSectionProps {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    setShowConsultationForm: (show: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isPlaying, setIsPlaying, setShowConsultationForm }) => {
    const { handleSmoothScroll } = useSmoothScroll();
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }, []);

    const { headline, description, enrollmentStats, features, stats, video, badges, cta } = heroData;

    return (
        <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        className="space-y-5 sm:space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="space-y-4 sm:space-y-4">
                            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                                <span className="text-white">{headline.line1}</span><br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                    {headline.line2}
                                </span><br />
                                <span className="text-white">{headline.line3}</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                                {description.part1} <strong className="text-green-400">{description.highlight1}</strong> {description.part2}
                                <span className="text-yellow-400"> {description.highlight2}</span>{description.part3}
                            </p>
                            <div className="flex items-center space-x-3 sm:space-x-4 text-sm">

                                {/* Overlapping Avatars */}
                                <div className="flex -space-x-2">
                                    {/* Placeholder avatars - can be made dynamic later */}
                                    <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 filter blur-[1px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/48.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 filter blur-[1px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/12.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 filter blur-[1px] bg-cover bg-center" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/15.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 filter blur-[1px] bg-cover bg-center" style={{ backgroundImage: 'url(https://xsgames.co/randomusers/assets/avatars/male/65.jpg)' }}></div>
                                    <div aria-label="student avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 filter blur-[1px] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pravatar.cc/400?img=59)' }}></div>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-400">
                                    <span className="text-white font-semibold">{enrollmentStats.count} {enrollmentStats.text}</span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {features.map((feature) => (
                                <div key={feature.text} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-slate-700/50 flex items-center space-x-3">
                                    <feature.icon className={`w-5 h-5 text-${feature.color}-400 flex-shrink-0`} />
                                    <div>
                                        <p className="text-xs sm:text-sm font-medium">{feature.text}</p>
                                        <p className="text-xs text-slate-400">{feature.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <motion.button
                                onClick={(e) => handleSmoothScroll(e, 'get-started')}
                                className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg shadow-green-500/25 text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                    <span>{cta.primary}</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                            <button
                                onClick={() => setShowConsultationForm(true)}
                                className="px-4 sm:px-10 py-3 bg-slate-800/50 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 font-semibold rounded-lg hover:bg-slate-800 transition-all text-sm sm:text-base"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                                {cta.secondary}
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {stats.map((stat, index) => (
                                <div key={stat.label} className="text-center bg-slate-800/30 rounded-lg p-2 sm:p-3">
                                    {index === 1 ? (
                                        <div className="flex justify-center items-center">
                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                            <span className="text-xl sm:text-2xl font-bold ml-1">{stat.value}</span>
                                        </div>
                                    ) : (
                                        <p className={`text-xl sm:text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
                                    )}
                                    <p className="text-xs text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div
                            className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-yellow-400 transition-colors cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            {!isPlaying ? (
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <img
                                        src={video.thumbnail}
                                        alt="Crypto Market Mastery Video Thumbnail"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/1280x720/1e293b/9ca3af?text=Watch+Success+Story";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <div className="text-center px-4">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 ml-1" />
                                            </div>
                                            <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{video.title}</p>
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
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        poster="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/images/-crypto-market-mastery-tws.jpeg"
    >
        <source src="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/videos/hero-background-cmm-sidhant-1080.webm" type="video/webm" />
        <source src="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/videos/hero-background-cmm-sidhant-1080.mp4" type="video/mp4" />
        <source src="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/videos/hero-background-720p-cmm-sidhant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
                            )}
                        </div>
                        <motion.div
                            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {badges.top}
                        </motion.div>
                        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-700">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                <span className="text-xs sm:text-sm whitespace-nowrap">{badges.bottom}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection; 