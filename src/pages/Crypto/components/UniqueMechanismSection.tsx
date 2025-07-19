import React from 'react';
import { motion } from 'framer-motion';
import { uniqueMechanismData } from '../data';

const UniqueMechanismSection: React.FC = () => {
  return (
    <section className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">
              Introducing <span className="text-gradient">{uniqueMechanismData.headline}</span>
            </h2>
            <p className="section-subtitle text-center">
              {uniqueMechanismData.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {uniqueMechanismData.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-yellow-500 mb-4">{feature.letter}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
              <p className="text-lg font-semibold text-green-400">
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