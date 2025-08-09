import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    { 
      problem: "Trading Without Order Flow Context", 
      impact: "Making decisions based on incomplete information", 
      icon: "📊" 
    },
    { 
      problem: "Chasing Price After It Moves", 
      impact: "Entering positions too late, missing optimal entries", 
      icon: "📈" 
    },
    { 
      problem: "No Clear Invalidation Levels", 
      impact: "Holding losing positions without objective stops", 
      icon: "⚠️" 
    },
    { 
      problem: "Following Price Action Alone", 
      impact: "Missing the volume story behind the moves", 
      icon: "📉" 
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-medium text-cyan-400">COMMON CHALLENGES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Most Traders Struggle
            <span className="text-cyan-400"> Without Footprint Analysis</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
            Understanding order flow helps you see beyond price movement and make more informed trading decisions.
          </p>
        </motion.div>
        
        <div className="space-y-3 sm:space-y-4">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-xl sm:text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.problem}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl font-semibold mb-2">
            <span className="text-cyan-400">The Solution?</span> Learn to read footprint charts.
          </p>
          <p className="text-lg text-slate-300">
            See order flow patterns that help you understand market structure and participant behavior.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;