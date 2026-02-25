import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Shield } from 'lucide-react';

const AntiScamSection: React.FC = () => {
  const willNot = [
    "Give you trade calls or signals",
    "Guarantee profits or specific returns",
    "Promise you'll become rich overnight",
    "Teach you a 'secret hack' that replaces practice",
    "Work if you don't put in the hours"
  ];

  const willDo = [
    "Teach you to read order flow using footprint charts",
    "Give you a rule-based entry/exit checklist",
    "Show you 40+ real trade examples with analysis",
    "Provide monthly live Q&A for questions",
    "Offer a 7-day refund if it's not for you"
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1A2226]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#E5484D]/10 border border-[#E5484D]/30 rounded-full">
            <Shield className="w-4 h-4 text-[#E5484D]" />
            <span className="text-sm font-semibold text-[#F87171]">Anti-Scam Transparency</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-4">
            <span className="font-sans font-bold">What This Course </span>
            <span className="font-serif italic font-normal text-[#E5484D]">Will NOT</span>
            <span className="font-sans font-bold"> Do</span>
          </h2>

          <p className="text-[#B8A99A] text-lg">
            You've seen too many scam courses. Let's be crystal clear about what this is — and isn't.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* What This Will NOT Do */}
          <motion.div
            className="bg-[#2C3539] rounded-xl p-6 border border-[#E5484D]/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-[#F87171] mb-5 flex items-center gap-2">
              <X className="w-5 h-5" /> This will NOT...
            </h3>
            <ul className="space-y-3">
              {willNot.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#D0C5B4]">
                  <X className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What This WILL Do */}
          <motion.div
            className="bg-[#2C3539] rounded-xl p-6 border border-[#0A8D7A]/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-[#2DBDA8] mb-5 flex items-center gap-2">
              <Check className="w-5 h-5" /> This WILL...
            </h3>
            <ul className="space-y-3">
              {willDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#EDE6D8]">
                  <Check className="w-4 h-4 text-[#2DBDA8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 bg-[#3A4449]/60 rounded-lg p-6 border border-[#B8956A]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-3">Why we're this transparent:</h4>
          <p className="text-[#B8A99A] text-sm leading-relaxed mb-4">
            The Indian trading education space has too many "gurus" selling dreams. We've been in this industry since 2017. We've seen students lose money to scam courses that promise guaranteed returns.
          </p>
          <p className="text-[#D0C5B4] text-sm leading-relaxed">
            <span className="font-semibold text-white">Footprint Mastery is education.</span> It teaches you a skill. How well you apply it depends on your practice, discipline, and risk management. If that sounds like too much work, this isn't for you — and we're okay with that.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-[#8A9199] italic">
            Industry completion rate for online courses: 15%. Our completion rate: 67%. The difference? Accountability through monthly live Q&A and WhatsApp community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AntiScamSection;
