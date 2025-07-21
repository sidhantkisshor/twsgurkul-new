import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target, TrendingUp, AlertCircle } from 'lucide-react';
import { uniqueMechanismData, liveResultsData } from '../data';

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

        {/* Visual Flow Diagram */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            How The System Works
          </h3>
          <div className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-green-500/5 to-emerald-600/5">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full p-6 inline-block mb-4">
                  <Clock className="text-green-400" size={48} />
                </div>
                <h4 className="font-bold text-lg text-white mb-2">STEP 1: Join at 8 PM</h4>
                <p className="text-sm text-gray-400">Track whale wallets LIVE with me</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="text-green-400" size={32} />
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-full p-6 inline-block mb-4">
                  <Target className="text-emerald-400" size={48} />
                </div>
                <h4 className="font-bold text-lg text-white mb-2">STEP 2: Follow Whale Moves</h4>
                <p className="text-sm text-gray-400">See exactly what $10M+ wallets are buying</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="text-emerald-400" size={32} />
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500/20 rounded-full p-6 inline-block mb-4">
                  <TrendingUp className="text-yellow-400" size={48} />
                </div>
                <h4 className="font-bold text-lg text-white mb-2">STEP 3: Profit Before Sleep</h4>
                <p className="text-sm text-gray-400">Close trades by 11 PM with 5-15% gains</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full px-6 py-3">
                <p className="text-green-400 font-semibold">
                  Average Time to First Profit: <span className="text-white">72 Hours</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Results Preview */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/30">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-500 animate-pulse" size={24} />
              <h3 className="text-xl font-bold text-white">Last Night's Results (8 PM Session)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✅ Priya R. - ₹18,750 profit</p>
                <p className="text-sm text-gray-400">BNB entry at 8:15 PM, closed 9:47 PM</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✅ Rajesh M. - ₹47,300 profit</p>
                <p className="text-sm text-gray-400">BTC long at 8:23 PM (caught the pump)</p>
              </div>
            </div>
            <p className="text-center text-yellow-400 font-semibold mt-4">
              {liveResultsData.stats.liveTradersNow} trading live RIGHT NOW
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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