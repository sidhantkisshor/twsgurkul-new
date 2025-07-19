import React from 'react';
import { motion } from 'framer-motion';
import { uniqueMechanismData } from '../data';

const UniqueMechanismSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {uniqueMechanismData.headline}
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            {uniqueMechanismData.subheadline}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {uniqueMechanismData.features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:scale-105 transition-transform">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                  {feature.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-xl p-6 inline-block border-2 border-yellow-500/50">
            <p className="text-lg font-semibold text-yellow-400">
              {uniqueMechanismData.proof}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueMechanismSection;