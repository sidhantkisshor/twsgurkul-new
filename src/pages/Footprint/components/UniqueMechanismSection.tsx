import React from 'react';
import { motion } from 'framer-motion';
import { uniqueMechanismData, comparisonData } from '../data';

const UniqueMechanismSection: React.FC = () => {
  return (
    <section id="mechanism" className="section bg-slate-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{uniqueMechanismData.headline}</span>
            </h2>
            <p className="section-subtitle text-center">
              {uniqueMechanismData.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {uniqueMechanismData.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-cyan-400">{feature.letter}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-slate-800/40 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-red-400">Regular Trading</span> vs <span className="text-green-400">Footprint Trading</span>
            </h3>
            
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
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-3">
              <p className="text-lg font-semibold text-amber-400">
                {uniqueMechanismData.proof}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanismSection;