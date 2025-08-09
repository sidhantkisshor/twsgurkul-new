import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const WhyFootprintSection: React.FC = () => {
  const beforeAfterData = [
    { 
      title: "Before: Trading Without Order Flow", 
      icon: XCircle, 
      color: "red", 
      points: [
        "Chased breakouts after they already moved",
        "Late exits, giving back most profits",
        "No objective invalidation levels",
        "Volatile P&L swings day to day"
      ] 
    },
    { 
      title: "After: Adopting a Footprint Process", 
      icon: CheckCircle, 
      color: "green", 
      points: [
        "Wait for absorption/delta confirmation",
        "Pre-defined stops and exit targets",
        "Fewer impulse entries, more patience",
        "More consistent execution overall"
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
            Why Learn <span className="text-cyan-400">Footprint Trading</span>?
          </h2>
          <p className="text-lg text-slate-300">
            Transform your trading approach from reactive to systematic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterData.map((item, index) => (
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
                <div className={`w-12 h-12 ${item.color === 'red' ? 'bg-red-500/20' : 'bg-green-500/20'} rounded-full flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${item.color === 'red' ? 'text-red-400' : 'text-green-400'}`} />
                </div>
                <h3 className={`text-xl font-bold ${item.color === 'red' ? 'text-red-400' : 'text-green-400'}`}>
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <span className={`${item.color === 'red' ? 'text-red-500' : 'text-green-500'} mt-1`}>
                      {item.color === 'red' ? '✗' : '✓'}
                    </span>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Transition Arrow */}
        <motion.div
          className="flex justify-center my-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Transform your approach</span>
            <ArrowRight className="w-6 h-6 text-cyan-400" />
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              The Footprint Advantage
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Objective</div>
                <p className="text-sm text-slate-400">
                  Trade based on actual order flow data, not opinions or predictions
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">Systematic</div>
                <p className="text-sm text-slate-400">
                  Follow a repeatable process for entries, exits, and risk management
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">Consistent</div>
                <p className="text-sm text-slate-400">
                  Build trading discipline through clear rules and regular review
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs text-slate-500 italic">
            Results vary. Education only — not investment advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFootprintSection;