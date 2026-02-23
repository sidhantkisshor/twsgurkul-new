import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VerificationModal from './VerificationModal';

const WhyFootprintSection: React.FC = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const learningPoints = [
    { 
      letter: "F",
      title: "Module 1-2: Find Liquidity",
      description: "Identify high-volume nodes and stop clusters on the footprint chart"
    },
    { 
      letter: "A",
      title: "Module 3-4: Assess Absorption",
      description: "Distinguish between absorption (strength) and exhaustion (weakness) patterns"
    },
    { 
      letter: "S",
      title: "Module 5-6: Sync with Delta",
      description: "Use cumulative delta divergence to confirm or fade price moves"
    },
    { 
      letter: "T",
      title: "Module 7-8: Trade Execution",
      description: "Apply the 1-page entry checklist with pre-defined stops and targets"
    },
    { 
      letter: "+",
      title: "Module 9-10: Risk & Review",
      description: "Position sizing based on footprint strength and post-trade journaling"
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
            What You'll Learn in <span className="text-cyan-400">10 Modules</span>
          </h2>
          <p className="text-lg text-slate-300">
            Each module directly maps to the F.A.S.T. framework
          </p>
        </motion.div>

        <div className="space-y-4">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/60 backdrop-blur-xs rounded-xl p-4 border border-slate-700 flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-cyan-400">{point.letter}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">{point.title}</h3>
                <p className="text-sm text-slate-300">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructor Strip */}
        <motion.div
          className="mt-12 bg-slate-800/40 rounded-xl p-4 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-teal-600 flex items-center justify-center shrink-0 pointer-events-none">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-white mb-2">Sidhant, Instructor</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="text-cyan-400">•</span> Reading footprints since 2019
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-cyan-400">•</span> TWS Gurukul since 2023
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-cyan-400">•</span> 1,263+ students trained
                </span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <button
                onClick={() => setShowVerificationModal(true)}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline"
              >
                How TWS verifies student feedback →
              </button>
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
      
      {/* Verification Modal */}
      <VerificationModal 
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </section>
  );
};

export default WhyFootprintSection;