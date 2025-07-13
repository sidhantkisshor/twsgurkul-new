import React from 'react';
import { motion } from 'framer-motion';
import { scrollToPricing } from '../utils/common';

const FinalCtaSection: React.FC = () => {

  const achievements = [
    "90% trading consistency",
    "2-5L monthly potential", 
    "Financial independence",
    "Confidence in every trade"
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Hundreds of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {" "}Profitable Traders?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            Your transformation starts the moment you click that button. 
            Stop watching from the sidelines and start building your trading empire.
          </p>
        </motion.div>

        {/* What You'll Achieve */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-green-400 font-semibold text-sm">
                ✓ {achievement}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl text-slate-300 italic mb-4">
            "The best time to plant a tree was 20 years ago. 
            The second best time is now."
          </blockquote>
          <p className="text-yellow-400 font-semibold">
            Your trading journey starts today.
          </p>
        </motion.div>

        {/* Large CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg px-12 py-6 text-xl sm:text-2xl shadow-lg shadow-green-500/25 w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start My Trading Journey Now
          </motion.button>
          
          <p className="text-slate-400 mt-6 text-sm">
            ⚡ Instant Access • 💰 30-Day Money Back Guarantee • 🔒 100% Secure Payment
          </p>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">
              🛡️ 100% Risk-Free Guarantee
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Try the program for 30 days. If you don't see improvement in your trading confidence 
              and understanding, we'll refund every penny. No questions asked. The risk is on us, 
              not you.
            </p>
          </div>
        </motion.div>

        {/* Social Proof Counter */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>1,247 traders already enrolled</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>23 joined in last 24 hours</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>4.9/5 average rating</span>
          </div>
        </motion.div>

        {/* Final Urgency */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 font-semibold">
            ⚠️ Don't let another trading day pass without a proven strategy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection; 