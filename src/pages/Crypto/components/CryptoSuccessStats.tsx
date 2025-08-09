import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Users, Clock, Award, Target } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  prefix?: string;
  suffix?: string;
}

const CryptoSuccessStats: React.FC = () => {
  const [btcCaptured, setBtcCaptured] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);

  useEffect(() => {
    // Animate BTC captured
    const btcInterval = setInterval(() => {
      setBtcCaptured(prev => {
        if (prev < 42) return prev + 1;
        clearInterval(btcInterval);
        return prev;
      });
    }, 50);

    // Animate profit percentage
    const profitInterval = setInterval(() => {
      setProfitPercentage(prev => {
        if (prev < 73) return prev + 1;
        clearInterval(profitInterval);
        return prev;
      });
    }, 30);

    return () => {
      clearInterval(btcInterval);
      clearInterval(profitInterval);
    };
  }, []);

  const stats: Stat[] = [
    {
      icon: Bitcoin,
      value: btcCaptured.toString(),
      label: 'Major BTC Moves Captured',
      color: 'yellow',
      suffix: '/50'
    },
    {
      icon: TrendingUp,
      value: profitPercentage.toString(),
      label: 'Reported Win Rate',
      color: 'green',
      suffix: '%'
    },
    {
      icon: Users,
      value: '1,263',
      label: 'Active Crypto Traders',
      color: 'blue',
      prefix: ''
    },
    {
      icon: Clock,
      value: '2-3',
      label: 'Hours Daily Needed',
      color: 'purple',
      suffix: ' hrs'
    },
    {
      icon: Award,
      value: '₹2.7',
      label: 'Reported Student Profits',
      color: 'orange',
      suffix: 'Cr+'
    },
    {
      icon: Target,
      value: '90',
      label: 'Reported Success Rate',
      color: 'pink',
      suffix: '%'
    }
  ];

  return (
    <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/90">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-effect border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Student Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-yellow-400">1,263 Indians</span> Trust Our System
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Based on self-reported student data. Results vary. As of Aug 2025. 
            <a href="/results-and-claims#methodology" className="underline text-yellow-300 ml-1">Methodology & verification →</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                 <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                   <div className={`w-12 h-12 rounded-full bg-${stat.color}-400/10 flex items-center justify-center`}>
                    <div className={`w-6 h-6 rounded-full bg-${stat.color}-400/20`}></div>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">
                  {stat.prefix}
                  <motion.span
                    key={stat.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-${stat.color}-400`}
                  >
                    {stat.value}
                  </motion.span>
                  {stat.suffix && <span className="text-xl text-slate-400">{stat.suffix}</span>}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-400 to-transparent rounded-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex flex-col items-center gap-4 glass-effect rounded-2xl p-6 border border-yellow-500/20">
            <div className="text-center">
              <p className="text-lg font-bold text-yellow-400 mb-2">
                🎯 Next Live Q&A: 18th AUG
              </p>
              <p className="text-sm text-slate-300 mb-1">
                Reported average first month: <span className="text-green-400 font-semibold">₹45,000*</span>
              </p>
              <p className="text-xs text-slate-400">
                *Based on sample of 847 self-reported results
              </p>
            </div>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#pricing'}
            >
              Start Learning — ₹19,499
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoSuccessStats;