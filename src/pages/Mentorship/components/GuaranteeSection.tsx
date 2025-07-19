import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import { guaranteeData } from '../data';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-8 sm:p-12 border-2 border-green-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <motion.div 
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="text-green-500" size={40} />
                </motion.div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  {guaranteeData.title}
                </span>
              </h2>

              <p className="text-xl text-center text-gray-300 mb-8">
                {guaranteeData.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {guaranteeData.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-4 bg-green-500/10 rounded-lg border border-green-500/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-center text-green-400 font-semibold">
                  {guaranteeData.bottomText || 'This is not just a promise - it\'s our commitment to your success'}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;