import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Clock } from 'lucide-react';

const CostOfWaitingSection: React.FC = () => {
  const costs = [
    {
      icon: TrendingDown,
      title: "One bad trade",
      amount: "₹15,000 loss",
      description: "Guessed the entry, ignored the footprint, got stopped out"
    },
    {
      icon: Clock,
      title: "One month of inconsistent trading",
      amount: "₹20,000–₹50,000",
      description: "In missed opportunities and emotional exits"
    },
    {
      icon: AlertTriangle,
      title: "Six months of trial & error",
      amount: "₹1L–₹3L",
      description: "Learning the hard way what this course teaches systematically"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#2C3539]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-4">
            <span className="font-sans font-bold">The Cost of </span>
            <span className="font-serif italic font-normal text-[#E5484D]">NOT</span>
            <span className="font-sans font-bold"> Taking Action</span>
          </h2>
          <p className="text-[#B8A99A] text-lg">
            Before you think about the price, consider what staying where you are costs.
          </p>
        </motion.div>

        <div className="space-y-6 mb-10">
          {costs.map((cost, i) => (
            <motion.div
              key={i}
              className="bg-[#3A4449]/60 rounded-xl p-6 border border-[#E5484D]/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5484D]/10 border border-[#E5484D]/30 flex items-center justify-center shrink-0">
                  <cost.icon className="w-6 h-6 text-[#E5484D]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-white font-semibold">{cost.title}:</h3>
                    <span className="text-[#E5484D] font-bold text-lg">{cost.amount}</span>
                  </div>
                  <p className="text-[#B8A99A] text-sm">{cost.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-[#C87533]/10 to-[#0A8D7A]/10 rounded-xl p-8 border border-[#C87533]/30 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white text-xl sm:text-2xl font-bold mb-3">
            This entire system: <span className="text-[#0A8D7A]">₹32,999</span> one-time
          </p>
          <p className="text-[#B8A99A] text-base mb-4">
            If this doesn't show you a clear path to recover ₹33k in 6 months, don't enroll.
          </p>
          <p className="text-sm text-[#D0C5B4] italic">
            Most students report their first profitable trade using footprint analysis covers 30-40% of the course fee.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xs text-[#8A9199]">
            The question isn't "Can I afford this?" — it's "Can I afford to keep trading without it?"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CostOfWaitingSection;
