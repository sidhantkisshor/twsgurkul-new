import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { credibilityData } from '../data';

const CredibilitySection: React.FC = () => {
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {credibilityData.headline}
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            {credibilityData.subheadline}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {credibilityData.credentials.map((credential, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-6 border border-blue-500/30"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{credential.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {credential.title}
                  </h3>
                  <p className="text-green-400 flex items-center gap-2">
                    <CheckCircle size={16} />
                    {credential.proof}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">As Featured In:</p>
          <div className="flex flex-wrap justify-center gap-8">
            {credibilityData.mediaLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-gray-500 font-semibold text-lg hover:text-white transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block glass-effect rounded-full px-8 py-4 border border-green-500/50">
            <p className="text-lg font-semibold text-green-400">
              💡 {credibilityData.bottomLine}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;