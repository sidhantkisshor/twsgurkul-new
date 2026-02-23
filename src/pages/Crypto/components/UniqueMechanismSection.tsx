import React from 'react';
import { motion } from 'framer-motion';
import { uniqueMechanismData } from '../data';

const UniqueMechanismSection: React.FC = () => {
  return (
    <section id="routine" className="section bg-[#FFF1E0] relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center text-[#2C3539]">
              Introducing <span className="text-[#2C3539]">{uniqueMechanismData.headline}</span>
            </h2>
            <p className="section-subtitle text-center text-[#111111]/70">
              {uniqueMechanismData.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {uniqueMechanismData.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-[#FAF8F5] border border-[rgba(44,53,57,0.08)] rounded-xl shadow-sm p-6 hover:border-[rgba(200,117,51,0.3)] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-[#C87533] mb-4">{feature.letter}</div>
                <h3 className="text-xl font-bold text-[#2C3539] mb-2">{feature.title}</h3>
                <p className="text-[#111111]/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default UniqueMechanismSection;