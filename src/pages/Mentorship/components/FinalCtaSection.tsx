import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, ArrowRight } from 'lucide-react';
import { finalCtaData, urgencyData } from '../data';

const FinalCtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 23, seconds: 45 });

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

    return () => clearInterval(timer);
  }, []);

  const handleEnroll = () => {
    // Add payment integration here
    console.log('Enrolling in ETM Pro');
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="text-green-500" size={40} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              {finalCtaData.headline}
            </span>
          </h2>

          <div className="glass-effect rounded-2xl p-8 mb-8 border border-green-500/30">
            <p className="text-xl text-gray-300 mb-6">What you'll get:</p>
            
            <div className="space-y-4 mb-8">
              {finalCtaData.points.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              onClick={handleEnroll}
              className="group relative px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{finalCtaData.ctaText}</span>
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-6">
              <Clock size={20} />
              <span className="font-mono text-lg">
                Discount expires in: {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 mb-2">{finalCtaData.warning.text}</p>
              <div className="glass-effect rounded-lg p-4 bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 italic">"{finalCtaData.warning.testimonial}"</p>
                <p className="text-red-500 font-semibold mt-2">{finalCtaData.warning.author}</p>
              </div>
            </div>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span>✓ 90-Day Profit Promise</span>
            <span>✓ Daily Live Mentorship</span>
            <span>✓ WhatsApp Support</span>
            <span>✓ Risk-Free Trial</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;