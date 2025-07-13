import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollToPricing } from '../utils/common';

const ProblemSection: React.FC = () => {
  const [checkedProblems, setCheckedProblems] = useState<boolean[]>([false, false, false, false]);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      title: "Missing Market Insights",
      description: "Trading blind without real-time expert analysis",
      icon: "👁️"
    },
    {
      title: "No Community Support", 
      description: "Feeling isolated and making decisions alone",
      icon: "🤝"
    },
    {
      title: "Delayed Information",
      description: "Getting market news and signals too late",
      icon: "⏰"
    },
    {
      title: "Learning in Isolation",
      description: "Missing out on collective trading wisdom",
      icon: "🎓"
    }
  ];

  const handleProblemCheck = (index: number) => {
    const newChecked = [...checkedProblems];
    newChecked[index] = !newChecked[index];
    setCheckedProblems(newChecked);
    
    // Show solution nudge if any problems are checked
    setShowSolution(newChecked.some(checked => checked));
  };


  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Most Traders Struggle
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Trading alone is like sailing without a compass. SuperStreams changes that.
          </p>
        </motion.div>

        {/* Interactive Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`relative glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border transition-all cursor-pointer ${
                checkedProblems[index] 
                  ? 'border-red-500/50 bg-red-500/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProblemCheck(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                {/* Micro-Commitment Checkbox with Larger Touch Target */}
                <label className="flex items-center justify-center space-x-3 cursor-pointer group py-2 px-4 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={checkedProblems[index]}
                    onChange={() => handleProblemCheck(index)}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500 focus:ring-offset-0"
                  />
                  <span className="text-red-400 text-sm sm:text-sm font-medium group-hover:text-red-300">
                    This sounds like me
                  </span>
                </label>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-Commitment Follow-up */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showSolution ? 1 : 0, 
            height: showSolution ? 'auto' : 0 
          }}
          transition={{ duration: 0.5 }}
        >
          {showSolution && (
            <div className="glass-effect border border-yellow-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                I can help you solve this! 👇
              </h3>
              <p className="text-slate-300 mb-4">
                You've identified your trading challenges. Now let me show you exactly how SuperStreams solves them.
              </p>
              <button
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Show Me The Solution →
              </button>
            </div>
          )}
        </motion.div>

        {/* Emotional Hook with Authority Transfer */}
        <motion.div
          className="text-center glass-effect rounded-2xl sm:rounded-3xl border border-white/20 p-8 sm:p-12 md:p-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Here's what changes everything...
            </span>
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-semibold mb-4">
            Live Expert Guidance + Community Power = Trading Success
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join a community where expert traders share real-time insights and proven strategies daily
          </p>

          {/* Social Proof Integration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="glass-effect rounded-xl border border-white/10 p-4">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-400">Successful Traders</div>
            </div>
            <div className="glass-effect rounded-xl border border-white/10 p-4">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">₹50L+</div>
              <div className="text-xs sm:text-sm text-gray-400">Total Profits Made</div>
            </div>
            <div className="glass-effect rounded-xl border border-white/10 p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Live Support</div>
            </div>
          </div>

          {/* Credibility-Based CTA */}
          <motion.button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn My Proven Method
          </motion.button>

          {/* Social Proof Nudge */}
          <div className="mt-4">
            <button
              onClick={scrollToPricing}
              className="text-green-400 hover:text-green-300 underline text-sm font-medium transition-colors"
            >
              Join 500+ successful students →
            </button>
          </div>
        </motion.div>

        {/* Consistency Principle Activation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl border border-white/10 p-6 sm:p-8 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-white mb-3">
              Ready to stop struggling alone?
            </h4>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              You've already identified what's holding you back. Take the next step and join traders who are winning together.
            </p>
            
            {/* Progress Bar Visual */}
            <div className="bg-gray-800/50 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(checkedProblems.filter(Boolean).length / problems.length) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-xs text-gray-400">
              You've identified {checkedProblems.filter(Boolean).length} out of {problems.length} common trading problems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 