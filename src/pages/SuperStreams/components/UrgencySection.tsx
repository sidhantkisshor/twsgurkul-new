import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToPricing } from '../utils/common';

const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a countdown for 24 hours from now
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const urgencyPoints = [
    {
      icon: "⏰",
      title: "Limited Time Offer",
      description: "Current pricing valid only for next 24 hours"
    },
    {
      icon: "📈",
      title: "Market Opportunities Won't Wait",
      description: "Every day delayed = money left on the table"
    },
    {
      icon: "🔥",
      title: "Prices May Increase",
      description: "Without notice as we add more value to the program"
    },
    {
      icon: "💰",
      title: "Cost of Inaction",
      description: "One bad trade can cost more than this entire course"
    }
  ];


  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't Wait - Market Opportunities Won't
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Time is your most valuable asset in trading. Start building your profitable future today.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
            🚨 Limited Time Special Pricing Ends In:
          </h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((time, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/20 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {String(time.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-800 font-semibold">
                  {time.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {urgencyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cost of Delay Calculation */}
        <motion.div
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            ⚠️ Calculate Your Cost of Delay
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">₹10,000</div>
              <div className="text-white font-semibold mb-1">Average Loss</div>
              <div className="text-slate-400 text-sm">Per bad trade without strategy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">30 Days</div>
              <div className="text-white font-semibold mb-1">Delayed Start</div>
              <div className="text-slate-400 text-sm">Potential missed opportunities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">₹3,00,000</div>
              <div className="text-white font-semibold mb-1">Opportunity Cost</div>
              <div className="text-slate-400 text-sm">What others are earning monthly</div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof Ticker */}
        <motion.div
          className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-semibold">Live Updates:</span>
            <span className="text-slate-300">Rajesh from Pune just enrolled (2 min ago)</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">247 students enrolled this week</span>
          </div>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl shadow-lg shadow-green-500/25 hover:scale-1.02 transition-transform w-full sm:w-auto"
          >
            Secure My Spot Now - Don't Miss Out!
          </button>
          
          <p className="text-slate-400 mt-4 text-sm">
            ✅ Instant Access • ✅ 30-Day Money Back Guarantee • ✅ Secure Payment
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection; 