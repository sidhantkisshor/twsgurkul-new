import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const problems = [
    {
      kicker: "NOISE",
      title: "Lost in noise",
      description: "10,000 conflicting strategies. Every video promises wealth. Most deliver confusion.",
      stat: "97%",
      statLabel: "quit within 90 days"
    },
    {
      kicker: "TIME",
      title: "Time wasted",
      description: "Months of trial and error. Learning alone means costly mistakes and missed opportunities.",
      stat: "₹2.3L",
      statLabel: "Average beginner loss"
    },
    {
      kicker: "WRONG GAME",
      title: "Wrong approach",
      description: "Retail chases patterns. Professionals follow flows, risk caps, and reviews.",
      stat: "89%",
      statLabel: "lose to institutions"
    }
  ];

  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-gray-50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-white to-gray-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - minimal and centered */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              The uncomfortable truth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Most traders fail not because markets are hard, but because they are playing the wrong game.
            </p>
          </motion.div>

          {/* Problem cards - clean and minimal */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`bg-white rounded-2xl p-8 h-full transition-all duration-300 cursor-pointer relative
                    ${activeIndex === index ? 'shadow-xl' : 'shadow-xs hover:shadow-md'}`}
                  >
                    {/* Kicker */}
                    <div className="text-xs font-medium tracking-wider text-gray-400 mb-4">
                      {problem.kicker}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-normal text-gray-900 mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {problem.description}
                    </p>
                    
                    {/* Stat with info icon */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-3xl font-light text-gray-900">{problem.stat}</p>
                          <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
                        </div>
                        <div className="relative">
                          <button
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(null)}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowTooltip(showTooltip === index ? null : index);
                            }}
                          >
                            <Info size={14} />
                          </button>
                          {showTooltip === index && (
                            <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-10">
                              <div className="relative">
                                Indicative; internal survey of new members, last 12 months
                                <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bridge banner */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
                <p className="text-lg sm:text-xl font-light leading-relaxed">
                  There is a better way. Instead of competing with millions of retail traders, see what the professionals are doing at 8 PM.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;