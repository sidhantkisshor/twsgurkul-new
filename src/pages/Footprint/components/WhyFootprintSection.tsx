import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';

const WhyFootprintSection: React.FC = () => {
  const comparisonData = [
    { 
      title: "What I Did For 3 Years (Lost Everything)", 
      icon: TrendingDown, 
      color: "red", 
      points: [
        "Followed crypto influencers (all scams)",
        "Used TA on manipulated markets",
        "Bought every pump, sold every dump",
        "Lost $127K total (wife almost left)"
      ] 
    },
    { 
      title: "What I Do Now (Banking $87K/Month)", 
      icon: TrendingUp, 
      color: "green", 
      points: [
        "See $1M+ orders 30 seconds early",
        "Know EXACTLY when whales accumulate",
        "Exit 1 minute before dumps",
        "94.7% win rate (verified trades)"
      ] 
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            PROOF: How I Went From <span className="text-red-400">-$127K to +$1.2M</span> in 14 Months
          </h2>
          <p className="text-lg text-slate-300">
            Ex-Goldman Sachs analyst reveals the ONE thing that changed everything...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.title}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border ${
                item.color === 'red' ? 'border-red-500/20' : 'border-green-500/20'
              }`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h3 className={`text-xl font-bold text-${item.color === 'red' ? 'red' : 'green'}-400`}>
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <span className={`text-${item.color}-500 mt-1`}>
                      {item.color === 'red' ? '✗' : '✓'}
                    </span>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-yellow-400 mb-3">
              🚨 My Insider Warning From Goldman Sachs Days:
            </p>
            <p className="text-lg text-white mb-2">
              "We used to laugh at retail traders using RSI and MACD. We'd dump $50M positions RIGHT when indicators said 'buy'."
            </p>
            <p className="text-sm text-slate-400 italic">
              - James Chen, Ex-Goldman Sachs Trader, Now Full-Time Crypto
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFootprintSection;