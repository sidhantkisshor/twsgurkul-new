import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';

const WhyFootprintSection: React.FC = () => {
  const comparisonData = [
    { 
      title: "Regular Technical Analysis", 
      icon: TrendingDown, 
      color: "red", 
      points: [
        "Lagging indicators (RSI, MACD)",
        "False breakouts trap you",
        "Can't see institutional orders",
        "React AFTER price moves"
      ] 
    },
    { 
      title: "Footprint Analysis", 
      icon: TrendingUp, 
      color: "green", 
      points: [
        "See orders BEFORE execution",
        "Spot absorption & distribution",
        "Track smart money real-time",
        "Enter WITH institutions"
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
            Why <span className="text-gradient">95% Traders Fail</span> Without Footprints
          </h2>
          <p className="text-lg text-slate-300">
            The market makers are playing chess while you're playing checkers
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
          <p className="text-xl font-semibold text-yellow-400 mb-2">
            "Jab tak aap volume dekh rahe ho, big players already position le chuke hote hain"
          </p>
          <p className="text-lg text-slate-300">
            (While you're looking at volume, big players have already taken positions)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFootprintSection;