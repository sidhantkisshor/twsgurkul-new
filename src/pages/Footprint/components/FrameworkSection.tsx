import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
    <section id="framework" className="bg-[#2C3539] relative overflow-hidden py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] text-center mb-4">
              The <span className="text-[#C87533]">F.A.S.T.</span> Framework
            </h2>
            <p className="text-[#B8A99A] text-lg text-center">
              A systematic approach to order flow analysis that removes guesswork
            </p>
            <p className="text-[#EDE6D8]/80 text-base mt-4">
              10 recorded modules that directly map to each framework component
            </p>
          </motion.div>

          {/* F.A.S.T. Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {modules.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#3A4449]/80 backdrop-blur-sm rounded-xl p-6 border border-[#C87533]/10 hover:border-[#C87533]/40 transition-all group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[#C87533] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{item.letter}</span>
                </div>
                <h3 className="text-[#EDE6D8] font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#B8A99A] text-sm leading-relaxed mb-2">{item.description}</p>
                <p className="text-[#B8A99A]/70 text-xs italic">{item.modules}</p>
              </motion.div>
            ))}
          </div>

          {/* Bonus Modules */}
          <motion.div
            className="mt-8 bg-[#3A4449]/50 rounded-xl p-6 border border-[#B8956A]/20 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#B8956A] font-semibold mb-3">Bonus Modules</h4>
            <h3 className="text-[#EDE6D8] font-semibold text-lg mb-2">Module 9-10: Risk Management & Review Loop</h3>
            <p className="text-[#B8A99A] text-sm mb-3">
              Position sizing based on footprint strength and post-trade journaling system
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#B8A99A]">
              <li className="flex items-center gap-2">
                <span className="text-[#B8956A]">&#10003;</span> Advanced position sizing calculator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8956A]">&#10003;</span> Trade journal templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8956A]">&#10003;</span> Performance tracking metrics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8956A]">&#10003;</span> Weekly review framework
              </li>
            </ul>
          </motion.div>

          {/* Instructor Credibility Bar */}
          <motion.div
            className="mt-8 flex items-center gap-4 p-4 bg-[#3A4449]/40 rounded-lg mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-[#B8956A]/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-[#B8956A]" />
            </div>
            <div>
              <p className="text-[#EDE6D8] text-sm font-medium">Taught by Sidhant</p>
              <p className="text-[#B8A99A] text-xs">Professional trader & educator</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setShowVerificationModal(true)}
                className="text-xs text-[#0A8D7A] hover:text-[#076B5E] transition-colors underline underline-offset-2"
              >
                How TWS verifies student feedback &rarr;
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
            <div className="inline-block bg-[#C87533]/10 border border-[#C87533]/30 rounded-lg px-6 py-3 mb-6">
              <p className="text-lg font-semibold text-[#C87533]">
                {uniqueMechanismData.proof}
              </p>
            </div>

            <div>
              <motion.button
                onClick={handlePaymentPopup}
                className="px-8 py-4 font-semibold rounded-lg text-lg bg-[#C87533] text-white hover:bg-[#A85E28] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning F.A.S.T. Framework
              </motion.button>
            </div>
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
