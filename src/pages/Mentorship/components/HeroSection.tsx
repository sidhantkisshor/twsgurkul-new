import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Clock, Eye } from 'lucide-react';
import { heroData, liveStatsData, urgencyData } from '../data';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
              FOR CRYPTO TRADERS ONLY
            </span>
            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/50">
              <p className="text-yellow-400 font-bold flex items-center gap-2">
                <Clock className="animate-pulse" size={16} />
                PRICE INCREASES IN: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </p>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {heroData.headline}
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {heroData.subheadline}
          </motion.p>

          {heroData.systemHighlight && (
            <motion.div 
              className="mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="glass-effect border border-green-500/30 rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{heroData.systemHighlight.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {heroData.systemHighlight.points.map((point, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {index === 0 ? '8 PM' : index === 1 ? '8' : '₹8K'}
                      </div>
                      <p className="text-sm text-gray-300">{point.split(':')[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center mb-4">
              <p className="text-yellow-400 font-semibold flex items-center justify-center gap-2">
                <Eye className="animate-pulse" size={16} />
                <span>{liveStatsData.viewingNow} people viewing this page</span>
                <span className="text-gray-400">•</span>
                <span>{urgencyData.lastHourJoined} joined in last hour</span>
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="group relative px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg sm:text-xl rounded-full hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
            >
              <span className="relative z-10">{heroData.ctaText}</span>
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <p className="text-sm text-gray-400 mt-3">{heroData.ctaSubtext}</p>
          </motion.div>

          <motion.div 
            className="glass-effect rounded-2xl p-4 sm:p-6 inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Users className="text-green-500" size={20} />
              <span className="text-sm sm:text-base">
                <span className="font-bold text-green-500">{heroData.trustBar.studentsToday}</span> students joined today
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-emerald-500" size={20} />
              <span className="text-sm sm:text-base">
                <span className="font-bold text-emerald-500">{heroData.trustBar.totalProfits}</span> total student profits this month
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-500" size={20} />
              <span className="text-sm sm:text-base">
                Next batch: <span className="font-bold text-yellow-500">{heroData.trustBar.nextBatch} days</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;