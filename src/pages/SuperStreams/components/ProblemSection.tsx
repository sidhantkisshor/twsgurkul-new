import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Most Traders Struggle
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Trading alone is like sailing without a compass. SuperStreams changes that.
          </p>
        </motion.div>

        {/* Interactive Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all cursor-pointer ${
                checkedProblems[index] 
                  ? 'border-red-500/50 bg-red-500/10' 
                  : 'border-slate-700/50 hover:border-red-500/30'
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {problem.description}
                </p>
                
                {/* Micro-Commitment Checkbox */}
                <label className="flex items-center justify-center space-x-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={checkedProblems[index]}
                    onChange={() => handleProblemCheck(index)}
                    className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500"
                  />
                  <span className="text-red-400 text-sm font-medium group-hover:text-red-300">
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
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                I can help you solve this! 👇
              </h3>
              <p className="text-slate-300 mb-4">
                You've identified your trading challenges. Now let me show you exactly how SuperStreams solves them.
              </p>
              <button
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:scale-1.02 transition-transform"
              >
                Show Me The Solution →
              </button>
            </div>
          )}
        </motion.div>

        {/* Emotional Hook with Authority Transfer */}
        <motion.div
          className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Here's what changes everything...
          </h3>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold mb-4">
            Live Expert Guidance + Community Power = Trading Success
          </p>
          <p className="text-lg text-slate-300 mb-6">
            Join a community where expert traders share real-time insights and proven strategies daily
          </p>

          {/* Social Proof Integration */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">500+</div>
              <div className="text-sm text-slate-300">Successful Traders</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">₹50L+</div>
              <div className="text-sm text-slate-300">Total Profits Made</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-slate-300">Live Support</div>
            </div>
          </div>

          {/* Credibility-Based CTA */}
          <motion.button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg px-8 py-3 shadow-lg hover:scale-1.02 transition-transform"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn My Proven Method
          </motion.button>

          {/* Social Proof Nudge */}
          <div className="mt-4">
            <button
              onClick={scrollToPricing}
              className="text-blue-400 hover:text-blue-300 underline text-sm font-medium transition-colors"
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
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-white mb-3">
              Ready to stop struggling alone?
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              You've already identified what's holding you back. Take the next step and join traders who are winning together.
            </p>
            
            {/* Progress Bar Visual */}
            <div className="bg-slate-700 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(checkedProblems.filter(Boolean).length / problems.length) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-xs text-slate-400">
              You've identified {checkedProblems.filter(Boolean).length} out of {problems.length} common trading problems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 