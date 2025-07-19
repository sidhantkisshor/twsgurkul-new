import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Shield } from 'lucide-react';

const TransformationSection: React.FC = () => {
  const transformationSteps = [
    {
      week: 'Week 1-2',
      title: 'Foundation & Mindset',
      description: 'Learn market basics, risk management, and trader psychology',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      week: 'Week 3-4',
      title: 'Strategy Mastery',
      description: 'Master our proven ETM strategy with live examples',
      icon: Target,
      color: 'text-green-500'
    },
    {
      week: 'Week 5-8',
      title: 'Live Implementation',
      description: 'Trade alongside mentors, get real-time feedback',
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      week: 'Week 9-12',
      title: 'Consistent Profits',
      description: 'Achieve your first profitable month with ongoing support',
      icon: TrendingUp,
      color: 'text-emerald-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Your 90-Day Transformation Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            From complete beginner to confident profitable trader
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {transformationSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="hidden md:block flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${step.color}`}>
                  <step.icon size={32} />
                </div>
              </div>
              
              <div className="flex-grow">
                <motion.div 
                  className="glass-effect rounded-xl p-6 hover:border-green-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{step.week}</h3>
                    <ArrowRight className="text-gray-400" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-green-500 mb-1">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              </div>
              
              {index < transformationSteps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-green-500/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to start your transformation?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            Begin Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Add missing import
import { TrendingUp } from 'lucide-react';

export default TransformationSection;