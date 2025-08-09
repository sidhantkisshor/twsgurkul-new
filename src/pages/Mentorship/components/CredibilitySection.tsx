import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
import { credibilityData } from '../data';

const CredibilitySection: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
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
              Why 2,347 Students Trust Me
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Quick facts before you decide
          </p>
        </motion.div>

        {/* Compact Trust Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 h-full">
              <TrendingUp className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-white mb-2">Live Trading Daily</h3>
              <p className="text-gray-300 text-sm mb-2">₹50 Lakh real capital at 8 PM</p>
              <p className="text-green-400 font-bold">₹2.3 Cr profit (verified)</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 h-full">
              <Users className="text-blue-500 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-white mb-2">2,347 Active Students</h3>
              <p className="text-gray-300 text-sm mb-2">₹10.2 Cr collective profits</p>
              <p className="text-blue-400 font-bold">Join Saturday open house</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 h-full">
              <Award className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-white mb-2">Media Recognition</h3>
              <p className="text-gray-300 text-sm mb-2">ET, CNBC, Business Standard</p>
              <p className="text-yellow-400 font-bold">From ₹7.4L loss to mentor</p>
            </div>
          </motion.div>
        </div>

        {/* Authority Challenge */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-4">My ₹10 Lakh Challenge</h3>
            <p className="text-gray-300 mb-4">
              Find any other 'guru' who trades LIVE daily with real money. I'll pay you ₹10 Lakh.
            </p>
            <p className="text-yellow-400 font-semibold">
              7 months. Zero takers. What does that tell you?
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            {credibilityData.bottomLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;