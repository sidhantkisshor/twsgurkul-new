import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingComparison: React.FC = () => {
  const options = [
    {
      name: "1-on-1 Mentorship",
      cost: "₹1.5L–₹3L",
      duration: "3 months",
      whatYouGet: "Limited availability, 1-on-1 calls",
      value: "limited"
    },
    {
      name: "University Trading Course",
      cost: "₹2L–₹5L",
      duration: "1 year",
      whatYouGet: "Generic curriculum, no footprint focus",
      value: "limited"
    },
    {
      name: "Trial & Error (Your Time)",
      cost: "₹50k–₹2L in losses",
      duration: "6-12 months",
      whatYouGet: "Painful lessons, no structure",
      value: "limited"
    },
    {
      name: "Footprint Mastery",
      cost: "₹32,999",
      duration: "Lifetime access",
      whatYouGet: "Complete system, live Q&A, community",
      value: "best",
      highlight: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#1A2226]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#EDE6D8] mb-3">
            <span className="font-sans font-bold">Compare Your </span>
            <span className="font-serif italic font-normal text-[#C87533]">Options</span>
          </h3>
          <p className="text-[#B8A99A]">
            How does this stack up against your alternatives?
          </p>
        </motion.div>

        {/* Desktop: Table layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-4 gap-3 mb-3 text-xs font-semibold text-[#B8A99A] uppercase tracking-wider px-2">
            <div>Option</div>
            <div>Cost</div>
            <div>Duration</div>
            <div>What You Get</div>
          </div>
          <div className="space-y-3">
            {options.map((option, i) => (
              <motion.div
                key={i}
                className={`grid grid-cols-4 gap-3 rounded-lg p-4 border ${
                  option.highlight
                    ? 'bg-[#C87533]/10 border-[#C87533]/40 shadow-lg shadow-[#C87533]/10'
                    : 'bg-[#2C3539] border-[#3A4449]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center">
                  <div>
                    <p className={`font-semibold text-sm ${option.highlight ? 'text-white' : 'text-[#D0C5B4]'}`}>
                      {option.name}
                    </p>
                    {option.highlight && (
                      <span className="text-xs text-[#D4943F] font-medium">Recommended</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <p className={`text-sm font-bold ${option.highlight ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                    {option.cost}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className={`text-sm ${option.highlight ? 'text-white' : 'text-[#B8A99A]'}`}>
                    {option.duration}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className={`text-xs ${option.highlight ? 'text-[#EDE6D8]' : 'text-[#8A9199]'}`}>
                    {option.whatYouGet}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-3">
          {options.map((option, i) => (
            <motion.div
              key={i}
              className={`rounded-lg p-4 border ${
                option.highlight
                  ? 'bg-[#C87533]/10 border-[#C87533]/40 shadow-lg shadow-[#C87533]/10'
                  : 'bg-[#2C3539] border-[#3A4449]'
              }`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className={`font-semibold text-sm ${option.highlight ? 'text-white' : 'text-[#D0C5B4]'}`}>
                    {option.name}
                  </p>
                  {option.highlight && (
                    <span className="text-xs text-[#D4943F] font-medium">Recommended</span>
                  )}
                </div>
                <p className={`text-sm font-bold ${option.highlight ? 'text-[#0A8D7A]' : 'text-[#E5484D]'}`}>
                  {option.cost}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <p className={option.highlight ? 'text-white' : 'text-[#B8A99A]'}>
                  {option.duration}
                </p>
                <p className={`text-right ${option.highlight ? 'text-[#EDE6D8]' : 'text-[#8A9199]'}`}>
                  {option.whatYouGet}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 bg-[#3A4449]/60 rounded-lg p-5 border border-[#0A8D7A]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1 text-sm">The Smart Investment</p>
              <p className="text-[#B8A99A] text-xs leading-relaxed">
                One-time payment. Lifetime access. Complete system. Monthly live support. All for less than a single losing month costs most traders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparison;
