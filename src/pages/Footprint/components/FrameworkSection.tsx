import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { uniqueMechanismData } from '../data';
import { handlePaymentPopup } from '../utils/payment';
import VerificationModal from './VerificationModal';

const FrameworkSection: React.FC = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  
  const modules = [
    { 
      letter: "F",
      title: "Find",
      description: "Liquidity zones and likely stop clusters",
      modules: "Module 1-2: Identify high-volume nodes and stop clusters on the footprint chart"
    },
    { 
      letter: "A",
      title: "Assess",
      description: "Absorption vs exhaustion on the footprint",
      modules: "Module 3-4: Distinguish between absorption (strength) and exhaustion (weakness) patterns"
    },
    { 
      letter: "S",
      title: "Sync",
      description: "Price action with cumulative delta alignment",
      modules: "Module 5-6: Use cumulative delta divergence to confirm or fade price moves"
    },
    { 
      letter: "T",
      title: "Trade",
      description: "Pre-defined entry, invalidation and position size",
      modules: "Module 7-8: Apply the 1-page entry checklist with pre-defined stops and targets"
    }
  ];

  return (
    <section id="framework" className="section bg-slate-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">
              The <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">F.A.S.T. Framework</span>
            </h2>
            <p className="section-subtitle text-center">
              A systematic approach to order flow analysis that removes guesswork
            </p>
            <p className="text-lg text-slate-300 mt-4">
              10 recorded modules that directly map to each framework component
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {modules.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-900/80 backdrop-blur-xs rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all relative overflow-hidden group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-linear-to-br from-cyan-500/30 to-teal-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-cyan-400">{item.letter}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-cyan-400 mb-2">{item.description}</p>
                    <p className="text-xs text-slate-400 italic">{item.modules}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bonus Modules */}
          <motion.div 
            className="bg-linear-to-r from-amber-900/20 to-orange-900/20 rounded-xl p-6 border border-amber-500/30 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-amber-400">+</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Module 9-10: Risk Management & Review Loop</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Position sizing based on footprint strength and post-trade journaling system
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Advanced position sizing calculator
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Trade journal templates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Performance tracking metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Weekly review framework
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Instructor Credibility */}
          <motion.div 
            className="bg-slate-900/60 rounded-xl p-6 border border-slate-700 mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TWS</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Taught by Pro TWS Coaches</p>
                  <p className="text-sm text-slate-400">Experts in order flow and footprint analysis</p>
                  <p className="text-xs text-cyan-400 mt-1">1,263+ students trained in systematic trading</p>
                </div>
              </div>
              <button
                onClick={() => setShowVerificationModal(true)}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2"
              >
                How TWS verifies student feedback →
              </button>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-3 mb-6">
              <p className="text-lg font-semibold text-amber-400">
                {uniqueMechanismData.proof}
              </p>
            </div>
            
            <motion.button
              onClick={handlePaymentPopup}
              className="px-8 py-4 font-semibold rounded-lg text-lg bg-slate-800 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning F.A.S.T. Framework
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <VerificationModal 
        isOpen={showVerificationModal} 
        onClose={() => setShowVerificationModal(false)} 
      />
    </section>
  );
};

export default FrameworkSection;