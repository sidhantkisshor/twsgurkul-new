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
    <section id="framework" className="bg-[#1A2226] relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
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
              <span className="font-sans font-bold">The </span>
              <span className="font-serif italic font-normal text-[#C87533]">F.A.S.T.</span>
              <span className="font-sans font-bold"> Framework</span>
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
                className="relative bg-[#3A4449]/80 backdrop-blur-sm rounded-xl p-6 border border-[#C87533]/10 hover:border-[#C87533]/40 transition-all group hover:shadow-lg hover:shadow-[#C87533]/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-[#C87533]/15 font-bold text-5xl font-mono select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C87533] to-[#A85E28] flex items-center justify-center mb-4 shadow-lg shadow-[#C87533]/20 group-hover:shadow-[#C87533]/40 transition-shadow">
                    <span className="text-white font-bold text-xl">{item.letter}</span>
                  </div>
                  <h3 className="font-sans text-[#EDE6D8] font-bold text-xl mb-2 group-hover:text-[#C87533] transition-colors">{item.title}</h3>
                  <p className="text-[#B8A99A] text-sm leading-relaxed mb-3">{item.description}</p>
                  <p className="text-[#8A9199] text-xs leading-relaxed">{item.modules}</p>
                </div>
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
            <h3 className="font-sans text-[#EDE6D8] font-semibold text-lg mb-2">Module 9-10: Risk Management & Review Loop</h3>
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
            className="mt-8 bg-[#3A4449]/40 rounded-xl p-5 sm:p-6 border border-[#B8956A]/15 mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Sidhant — System Creator */}
              <div className="flex items-start gap-3 flex-1">
                <img
                  src="/sidhant-casino-chips.png"
                  alt="Sidhant Kisshor"
                  className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                />
                <div>
                  <p className="text-[#EDE6D8] text-sm font-medium">System by Sidhant Kisshor</p>
                  <p className="text-[#B8A99A] text-xs">Professional trader & educator · Trading since 2017</p>
                </div>
              </div>

              <div className="hidden sm:block w-px bg-[#B8956A]/20" />

              {/* Fahad — Course Mentor */}
              <div className="flex items-start gap-3 flex-1">
                <a href="https://www.linkedin.com/in/fahad-siddiqui-964b34234/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img
                    src="https://d2j3cl693ttatt.cloudfront.net/assets/images/fahad-siddiqui.jpeg"
                    alt="Fahad Siddiqui"
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                </a>
                <div>
                  <p className="text-[#EDE6D8] text-sm font-medium">
                    Taught by{' '}
                    <a href="https://www.linkedin.com/in/fahad-siddiqui-964b34234/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C87533] transition-colors underline underline-offset-2">Fahad Siddiqui</a>
                  </p>
                  <p className="text-[#B8A99A] text-xs">Crypto & DeFi trader · MBA · TWS Mentor since 2024</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#B8956A]/10 text-right">
              <button
                onClick={() => setShowVerificationModal(true)}
                className="text-xs text-[#2DBDA8] hover:text-[#1A9E8A] transition-colors underline underline-offset-2"
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
              <p className="text-lg font-semibold text-[#D4943F]">
                {uniqueMechanismData.proof}
              </p>
            </div>

            <div>
              <motion.button
                onClick={handlePaymentPopup}
                className="w-full sm:w-auto px-8 py-4 font-semibold rounded-full text-lg bg-[#C87533] text-white hover:bg-[#A85E28] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start the F.A.S.T. framework →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
      {/* Gradient bleed into next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#2C3539] pointer-events-none" />
    </section>
  );
};

export default FrameworkSection;
