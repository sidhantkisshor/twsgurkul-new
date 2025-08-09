import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              TWS Gurukul - Elite Trading Mentorship
            </h3>
            <p className="text-gray-400">
              Transforming traders since 2020 | 2,347 profitable students and counting
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <Shield className="text-green-500 mx-auto mb-2" size={32} />
              <h4 className="font-semibold text-white mb-1">100% Secure</h4>
              <p className="text-sm text-gray-400">SSL encrypted payments</p>
            </div>
            <div className="text-center">
              <Award className="text-emerald-500 mx-auto mb-2" size={32} />
              <h4 className="font-semibold text-white mb-1">Proven Results</h4>
              <p className="text-sm text-gray-400">73% win rate</p>
            </div>
            <div className="text-center">
              <Lock className="text-blue-500 mx-auto mb-2" size={32} />
              <h4 className="font-semibold text-white mb-1">Privacy First</h4>
              <p className="text-sm text-gray-400">Your data is safe with us</p>
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>
                Disclaimer: Trading involves risk. Past performance is not indicative of future results.
              </p>
              <p>
                We comply with all RBI guidelines. No guaranteed returns. Educational purposes only.
              </p>
              <p className="pt-4">
                © 2024 TWS Gurukul. All rights reserved. | 
                <a href="/privacy" className="text-gray-400 hover:text-white ml-2">Privacy Policy</a> | 
                <a href="/terms" className="text-gray-400 hover:text-white ml-2">Terms of Service</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;