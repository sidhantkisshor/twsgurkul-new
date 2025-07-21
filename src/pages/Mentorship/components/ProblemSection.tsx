import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { problemData } from '../data';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="text-red-500" size={32} />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-500">{problemData.headline}</span>
            </h2>
            
            <p className="text-xl text-gray-300 italic">
              {problemData.subheadline}
            </p>
          </div>

          {/* Personal Story Box */}
          <motion.div 
            className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 mb-12 border border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-4">
              {problemData.storyBox.confession}
            </p>
            <p className="text-lg text-gray-400 mb-4">
              {problemData.storyBox.turning}
            </p>
            {problemData.storyBox.discovery && (
              <p className="text-lg text-yellow-400 font-semibold">
                💡 {problemData.storyBox.discovery}
              </p>
            )}
          </motion.div>

          <div className="space-y-6">
            {problemData.problems.map((problem, index) => (
              <motion.div 
                key={index}
                className="glass-effect rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{problem.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-400">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contrast Section */}
          <motion.div 
            className="mt-12 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">{problemData.contrast.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {problemData.contrast.points.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-bold text-yellow-400 mb-6">
              {problemData.ctaText}
            </p>
            <motion.div 
              className="inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-6xl">👇</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;