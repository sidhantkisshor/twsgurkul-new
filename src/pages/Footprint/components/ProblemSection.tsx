import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    { 
      problem: "Following Chart Patterns Blindly", 
      impact: "Trapped in false breakouts every week", 
      emotion: "😤" 
    },
    { 
      problem: "Can't See Who's Actually Buying/Selling", 
      impact: "Enter when smart money is exiting", 
      emotion: "😰" 
    },
    { 
      problem: "Using Outdated Indicators", 
      impact: "Always late to the party", 
      emotion: "😔" 
    },
    { 
      problem: "No Clue About Order Flow", 
      impact: "Missing 20-30 point moves daily", 
      emotion: "😡" 
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
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-xs sm:text-sm font-medium text-red-400">The Painful Truth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why You're Always on the
            <span className="text-red-400"> Wrong Side</span> of Big Moves
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
            <strong className="text-yellow-400">"Market makers ka game samjho"</strong> - They show you one thing while doing another. You need X-ray vision to see through their tricks.
          </p>
        </motion.div>
        
        <div className="space-y-3 sm:space-y-4">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-red-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-xl sm:text-2xl">{item.emotion}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-red-400 mb-1 text-sm sm:text-base">{item.problem}</h3>
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
            <span className="text-green-400">The Solution?</span> See what they don't want you to see.
          </p>
          <p className="text-lg text-slate-300 italic">
            <span className="text-yellow-400 font-bold">"Footprint mein sab dikhta hai - kaun buy kar raha hai, kaun sell"</span>
            <span className="block text-sm mt-1">(Everything is visible in footprints - who's buying, who's selling)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;