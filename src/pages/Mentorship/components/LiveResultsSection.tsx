import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Target } from 'lucide-react';
import { liveResultsData } from '../data';

const LiveResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                <Activity className="animate-pulse" size={24} />
                {liveResultsData.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">LIVE</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {liveResultsData.results.map((result, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    result.status === 'profit' 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="font-semibold text-white">{result.name}</div>
                    <div className="text-sm text-gray-400">{result.duration}</div>
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold ${
                    result.status === 'profit' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {result.profit}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center justify-around text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="text-green-500" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-green-500">{liveResultsData.stats.winRate}</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Target className="text-emerald-500" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-emerald-500">{liveResultsData.stats.riskReward}</div>
                  <div className="text-sm text-gray-400">Avg Risk-Reward</div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300">
              These are <span className="text-green-500 font-bold">REAL students</span> with{' '}
              <span className="text-green-500 font-bold">REAL results</span> from the past 7 days
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveResultsSection;