import React from 'react';
import { motion } from 'framer-motion';

const ProgramOverviewSection: React.FC = () => {
  const features = [
    {
      title: "Daily Live Market Analysis",
      description: "Join me every trading day for real-time market breakdown and trade setups",
      icon: "📈",
      highlight: "DSS - SAT 8PM IST"
    },
    {
      title: "Weekly Doubt Sessions", 
      description: "Clear all your trading doubts with dedicated Q&A sessions",
      icon: "❓",
      highlight: "Every Saturday"
    },
    {
      title: "Complete Video Library",
      description: "Access to 100+ hours of premium trading education content",
      icon: "📚",
      highlight: "Lifetime Access"
    },
    {
      title: "Exclusive Community Access",
      description: "Connect with like-minded traders and share market insights",
      icon: "👥",
      highlight: "24/7 Active"
    },
    {
      title: "Psychology Training",
      description: "Master the mental game of trading - the most crucial aspect",
      icon: "🧠",
      highlight: "Game Changer"
    },
    {
      title: "Risk Management Masterclass",
      description: "Learn to protect your capital with proven risk management techniques",
      icon: "🛡️",
      highlight: "Capital Protection"
    }
  ];

  const bonusCourses = [
    {
      title: "Technical Analysis Mastery",
      value: "₹2,999",
      description: "Complete guide to chart patterns and indicators"
    },
    {
      title: "Options Trading Strategies",
      value: "₹3,999", 
      description: "Advanced options strategies for consistent income"
    },
    {
      title: "Cryptocurrency Trading",
      value: "₹2,499",
      description: "Navigate the crypto markets like a pro"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            SuperStreams Program Features
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to become a consistently profitable trader
          </p>
        </motion.div>

        {/* Special Timing Highlight */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full font-bold">
            <span>🔴</span>
            <span>LIVE Sessions: DSS - SAT 8PM IST</span>
            <span>🔴</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                    <span className="text-green-400 text-xs font-semibold">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Courses Section */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            🎁 Exclusive Bonus Courses Included
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {bonusCourses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">
                    {course.title}
                  </h4>
                  <span className="text-green-400 font-bold text-sm">
                    {course.value}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Total Value */}
          <div className="text-center">
            <div className="text-slate-400 mb-2">Total Bonus Value:</div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              ₹9,497 Worth of Bonus Content FREE
            </div>
          </div>
        </motion.div>

        {/* What You'll Achieve Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            What You'll Achieve After This Program
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "90%+", label: "Trading Accuracy" },
              { metric: "2-5L", label: "Monthly Potential" }, 
              { metric: "30min", label: "Daily Time Needed" },
              { metric: "Lifetime", label: "Skill Validity" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-xl font-bold text-green-400 mb-1">
                  {achievement.metric}
                </div>
                <div className="text-slate-300 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection; 