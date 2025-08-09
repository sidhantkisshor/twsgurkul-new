import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const problems = [
    {
      title: "Lost in noise",
      subtitle: "10,000 conflicting strategies",
      description: "Every YouTube guru promises wealth. Most deliver confusion.",
      stat: "97%",
      statLabel: "fail within 90 days"
    },
    {
      title: "Time wasted",
      subtitle: "Months of trial and error",
      description: "Learning alone means costly mistakes and missed opportunities.",
      stat: "₹2.3L",
      statLabel: "average beginner loss"
    },
    {
      title: "Wrong approach",
      subtitle: "Following retail strategies",
      description: "While you chase patterns, professionals follow different rules.",
      stat: "89%",
      statLabel: "lose to institutions"
    }
  ];

  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-gray-50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
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
              Most traders fail not because markets are hard, 
              but because they're playing the wrong game.
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
                  <div className={`bg-white rounded-2xl p-8 h-full transition-all duration-300 cursor-pointer
                    ${activeIndex === index ? 'shadow-xl' : 'shadow-sm hover:shadow-md'}`}
                  >
                    {/* Number indicator */}
                    <div className="text-6xl font-light text-gray-200 mb-4">
                      0{index + 1}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-normal text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {problem.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {problem.description}
                    </p>
                    
                    {/* Stat */}
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-3xl font-light text-gray-900">{problem.stat}</p>
                      <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The solution teaser - subtle and intriguing */}
          <motion.div 
            className="mt-32 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-sm">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  There's a different way.
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  What if instead of competing with millions of retail traders, 
                  you could see what the professionals see?
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 text-gray-900 hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-light">Discover the method</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Visual element - minimalist chart */}
          <motion.div
            className="mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64">
              {/* Simple line chart visualization */}
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Retail trader path - downward */}
                <motion.path
                  d="M 50 50 Q 200 80 350 120 T 650 180"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                {/* Professional path - upward */}
                <motion.path
                  d="M 50 150 Q 200 120 350 80 T 650 20"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </svg>
              
              {/* Labels */}
              <div className="absolute top-0 left-0 text-xs text-gray-500">
                Retail traders
              </div>
              <div className="absolute bottom-0 left-0 text-xs text-gray-500">
                Our students
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;