import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Clock, Eye } from 'lucide-react';
import { heroData, liveStatsData, urgencyData } from '../data';

const HeroSection: React.FC = () => {
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

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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