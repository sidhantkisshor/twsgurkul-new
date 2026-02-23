import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const RiskReversalSection: React.FC = () => {
  return (
    <section id="guarantee" className="bg-warm-white py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Shield className="mx-auto mb-6 text-wealth-teal" size={48} />

        <h2 className="text-4xl sm:text-5xl font-semibold text-deep-slate mb-6">
          Don&apos;t like it? Full refund. 30 days.
        </h2>

        <p className="text-lg text-deep-slate/70 mb-6">
          Try ETM Max for 30 days. Attend the sessions. Follow the system. If
          you don&apos;t see the value — full refund. No forms. No arguments.
          Just WhatsApp us.
        </p>

        <p className="text-base text-deep-slate/50 italic">
          Why we can offer this: 83% of students complete all 90 days. We
          don&apos;t need to lock anyone in.
        </p>
      </motion.div>
    </section>
  );
};

export default RiskReversalSection;
