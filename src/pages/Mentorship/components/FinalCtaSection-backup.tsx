import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, ArrowRight, AlertCircle, CheckCircle, X, TrendingUp, Users, Timer, Zap } from 'lucide-react';
import { finalCtaData, urgencyData, liveStatsData } from '../data';

const FinalCtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 11, seconds: 47 });
  const [seatsLeft, setSeatsLeft] = useState(3);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

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
        return prev;
      });
    }, 1000);

    const activityTimer = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % finalCtaData.liveActivity.activities.length);
    }, 3000);

    const phoneTimer = setTimeout(() => {
      setShowPhone(true);
    }, 47000);

    const seatTimer = setTimeout(() => {
      setSeatsLeft(2);
    }, 120000);

    return () => {
      clearInterval(timer);
      clearInterval(activityTimer);
      clearTimeout(phoneTimer);
      clearTimeout(seatTimer);
    };
  }, []);

  const handleEnroll = () => {
    window.location.href = '#pricing';
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-green-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Phone ring animation */}
      <AnimatePresence>
        {showPhone && (
          <motion.div
            className="fixed top-20 right-4 z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
              <Phone className="animate-pulse" size={24} />
              <div>
                <p className="font-bold">Your Future Calling!</p>
                <p className="text-sm">Answer now →</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Urgent Alert Banner */}
          <motion.div 
            className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8 animate-pulse"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-red-400 font-bold text-lg">{finalCtaData.urgentAlert.text}</p>
            <p className="text-white text-2xl font-bold mt-2">{finalCtaData.urgentAlert.seats}</p>
            <p className="text-yellow-400 mt-1">⏰ {finalCtaData.urgentAlert.timer}</p>
          </motion.div>

          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500/30 to-green-500/30 rounded-full mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Phone className="text-green-500 animate-pulse" size={40} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent animate-gradient">
              {finalCtaData.headline}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">{finalCtaData.subheadline}</p>

          {/* Final Choice Section */}
          <div className="glass-effect rounded-2xl p-8 mb-8 border-2 border-yellow-500/50 bg-gradient-to-br from-black to-yellow-900/10">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">{finalCtaData.finalChoice.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-red-400 font-semibold mb-2">❌ WITHOUT US:</p>
                <p className="text-gray-300">{finalCtaData.finalChoice.tomorrow.withoutUs}</p>
              </motion.div>
              
              <motion.div 
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-green-400 font-semibold mb-2">✅ WITH US:</p>
                <p className="text-gray-300">{finalCtaData.finalChoice.tomorrow.withUs}</p>
              </motion.div>
            </div>

            {/* Two Paths */}
            <div className="space-y-4 mb-8">
              {finalCtaData.points.map((point, index) => (
                <motion.div 
                  key={index}
                  className={`${index === 0 ? 'bg-red-500/5' : 'bg-green-500/5'} rounded-lg p-4 border ${index === 0 ? 'border-red-500/20' : 'border-green-500/20'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{point.icon}</span>
                    <div>
                      <p className="text-lg font-semibold text-white">{point.text}</p>
                      <p className="text-sm text-gray-400 mt-1">{point.stat}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Activity Ticker */}
            <div className="bg-black/50 rounded-lg p-4 mb-6 border border-gray-700">
              <p className="text-yellow-400 font-semibold mb-2">{finalCtaData.liveActivity.title}</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentActivity}
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {finalCtaData.liveActivity.activities[currentActivity]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Main CTA Button */}
            <motion.button 
              onClick={scrollToPricing}
              className="group relative w-full sm:w-auto px-8 sm:px-16 py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 20px rgba(34, 197, 94, 0.5)", "0 0 40px rgba(34, 197, 94, 0.8)", "0 0 20px rgba(34, 197, 94, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="animate-pulse" />
                {finalCtaData.ctaText}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
            <p className="text-sm text-gray-400 mb-6">{finalCtaData.ctaSubtext}</p>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-4 mb-8 border border-red-500/30">
              <p className="text-center text-yellow-400 font-bold mb-2">{finalCtaData.countdown.title}</p>
              <div className="flex items-center justify-center gap-2 text-white text-3xl font-mono font-bold mb-2">
                <Timer className="text-red-500 animate-pulse" size={32} />
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="animate-pulse">:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="animate-pulse">:</span>
                <span className="text-red-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <div className="text-center">
                <p className="text-green-400">NOW: {finalCtaData.countdown.current}</p>
                <p className="text-red-400">TOMORROW: {finalCtaData.countdown.tomorrow}</p>
                <p className="text-xs text-gray-400 mt-2">{finalCtaData.countdown.note}</p>
              </div>
            </div>

            {/* Last Chance - Excuses Destroyed */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-red-400">{finalCtaData.lastChance.title}</h4>
              {finalCtaData.lastChance.excuses.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 italic">"{item.excuse}"</p>
                      <p className="text-white mt-2">{item.reality}</p>
                      <p className="text-yellow-400 text-sm mt-1">{item.proof}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof Happening Now */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 mb-8 border border-blue-500/30">
              <p className="text-blue-400 font-bold mb-3">{finalCtaData.socialProof.title}</p>
              <div className="grid grid-cols-2 gap-2">
                {finalCtaData.socialProof.happenings.map((happening, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TrendingUp className="text-green-500" size={16} />
                    <span className="text-gray-300">{happening}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/30 mb-8">
              <h4 className="text-2xl font-bold text-green-400 mb-4">{finalCtaData.guarantee.title}</h4>
              <div className="space-y-2 mb-4">
                {finalCtaData.guarantee.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-white">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-green-400 font-semibold text-center">{finalCtaData.guarantee.bottomLine}</p>
            </div>

            {/* Scarcity Notice */}
            <div className="bg-yellow-500/10 rounded-lg p-4 mb-8 border border-yellow-500/30">
              <p className="text-yellow-400 mb-2">{finalCtaData.scarcity.genuine}</p>
              <p className="text-white font-semibold">{finalCtaData.scarcity.proof}</p>
              <p className="text-red-400 font-bold mt-2">{finalCtaData.scarcity.final}</p>
            </div>

            {/* Competitor Trap */}
            <div className="bg-red-900/20 rounded-lg p-6 mb-8 border border-red-500/30">
              <h4 className="text-xl font-bold text-red-400 mb-3">{finalCtaData.competitorTrap.title}</h4>
              <p className="text-gray-300">{finalCtaData.competitorTrap.message}</p>
            </div>

            {/* Final Trigger Question */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">{finalCtaData.finalTrigger.question}</h3>
              <p className="text-xl text-white mb-4">{finalCtaData.finalTrigger.challenge}</p>
              <p className="text-gray-400">{finalCtaData.finalTrigger.reality}</p>
            </div>

            {/* Final CTA Button */}
            <motion.button 
              onClick={scrollToPricing}
              className="w-full py-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-2xl rounded-full hover:shadow-2xl transition-all transform hover:scale-105 mb-8"
              animate={{ 
                background: ["linear-gradient(to right, #ef4444, #f97316, #eab308)", 
                            "linear-gradient(to right, #eab308, #f97316, #ef4444)",
                            "linear-gradient(to right, #ef4444, #f97316, #eab308)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CLAIM YOUR SEAT NOW - ONLY {seatsLeft} LEFT
            </motion.button>
          </div>

          {/* P.S. Section */}
          <motion.div 
            className="max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-gray-900 to-black rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-gray-400 mb-3">{finalCtaData.ps.title}</h4>
            <p className="text-gray-300 mb-3">{finalCtaData.ps.message}</p>
            <p className="text-green-400 font-semibold text-right">{finalCtaData.ps.signin}</p>
          </motion.div>

          {/* Live Stats Bar */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2">
              <Users className="text-green-500" size={16} />
              {liveStatsData.viewingNow} viewing now
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="text-yellow-500" size={16} />
              {urgencyData.enrollmentsToday} enrolled today
            </span>
            <span className="flex items-center gap-2">
              <AlertCircle className="text-red-500 animate-pulse" size={16} />
              Only {seatsLeft} seats left
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;