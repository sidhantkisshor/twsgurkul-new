import React from 'react';
import { motion } from 'framer-motion';
import { comparisonData } from '../data';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A2226]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EDE6D8]">
            <span className="font-sans font-bold">The </span>
            <span className="font-serif italic font-normal text-[#C87533]">TWS Difference</span>
          </h2>
          <p className="text-lg text-[#B8A99A]">
            See how <span className="text-[#C87533]">Footprint</span> Mastery transforms your trading approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before column */}
          <motion.div
            className="bg-[#2C3539]/50 border border-[#E5484D]/20 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-[#EDE6D8] mb-4 text-center">
              {comparisonData.regularTrading.title}
            </h4>
            <ul className="space-y-3">
              {comparisonData.regularTrading.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F87171] mt-1">✗</span>
                  <span className="text-[#B8A99A] leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After column */}
          <motion.div
            className="bg-[#2C3539]/50 border border-[#0A8D7A]/20 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-[#EDE6D8] mb-4 text-center">
              {comparisonData.footprintTrading.title}
            </h4>
            <ul className="space-y-3">
              {comparisonData.footprintTrading.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#2DBDA8] mt-1">✓</span>
                  <span className="text-[#B8A99A] leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-[#B8956A] font-medium italic">
            "Understand who's absorbing on the footprint first, then enter the trade."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
