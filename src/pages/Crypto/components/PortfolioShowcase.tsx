import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Wallet } from 'lucide-react';

const PortfolioShowcase: React.FC = () => {
  const portfolioData = [
    { coin: 'BTC', allocation: 40, profit: '+127%', value: '₹4.2L' },
    { coin: 'ETH', allocation: 30, profit: '+89%', value: '₹3.1L' },
    { coin: 'SOL', allocation: 20, profit: '+234%', value: '₹2.1L' },
    { coin: 'Others', allocation: 10, profit: '+67%', value: '₹1.0L' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Bitcoin className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Sample Student Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Rahul's ₹50K Became <span className="text-yellow-400">₹10.4 Lakhs</span>
          </h2>
          <p className="text-lg text-slate-300">
            Started: Jan 2024 | Current: Oct 2024 | ROI: 1,980%
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Portfolio Breakdown */}
          <motion.div
            className="glass-effect rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-yellow-400" />
              Portfolio Breakdown
            </h3>
            <div className="space-y-4">
              {portfolioData.map((item, index) => (
                <div key={item.coin}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.coin}</span>
                    <span className="text-sm text-green-400">{item.profit}</span>
                  </div>
                  <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.allocation}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1 text-xs text-slate-400">
                    <span>{item.allocation}%</span>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            className="glass-effect rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Monthly Growth
            </h3>
            <div className="space-y-3">
              {['Jan', 'Mar', 'May', 'Jul', 'Sep'].map((month, index) => {
                const growth = [50000, 125000, 280000, 540000, 1040000][index];
                return (
                  <div key={month} className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 w-10">{month}</span>
                    <div className="flex-1 h-8 bg-slate-700 rounded flex items-center px-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(growth / 1040000) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                      />
                    </div>
                    <span className="text-sm font-medium w-20 text-right">
                      ₹{(growth / 100000).toFixed(1)}L
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-center text-sm text-slate-400">
                Average Monthly Return: <span className="text-green-400 font-bold">38.7%</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-yellow-400 font-semibold">
            "I just followed the system. 2 hours evening, that's it."
          </p>
          <p className="text-sm text-slate-400 mt-2">
            - Rahul, Wipro Engineer, Batch #42
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;