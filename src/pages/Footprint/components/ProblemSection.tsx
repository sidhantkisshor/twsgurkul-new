import React from 'react';
import { motion } from 'framer-motion';
import { comparisonData } from '../data';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            The <span className="text-cyan-400">TWS Difference</span>
          </h2>
          <p className="text-lg text-slate-300">
            See how Footprint Mastery transforms your trading approach
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-slate-800/40 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-red-400 mb-4 text-center">
                {comparisonData.regularTrading.title}
              </h4>
              <ul className="space-y-3">
                {comparisonData.regularTrading.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-4 text-center">
                {comparisonData.footprintTrading.title}
              </h4>
              <ul className="space-y-3">
                {comparisonData.footprintTrading.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-amber-400 font-medium italic">
            "Footprint se pehle samjho kaun absorb kar raha hai, phir enter karo."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;