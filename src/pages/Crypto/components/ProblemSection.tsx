import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Radio, BookOpen, ShieldOff, Users } from 'lucide-react';

const problems = [
  {
    icon: Radio,
    problem: "Following Unverified 'Tips'",
    impact: "No systematic approach to trading decisions — just reacting to strangers on Telegram.",
  },
  {
    icon: BookOpen,
    problem: "Learning from Random Sources",
    impact: "Conflicting strategies from 10 different YouTubers. Confused approach, no consistency.",
  },
  {
    icon: ShieldOff,
    problem: "No Risk Management System",
    impact: "Unpredictable results and constant stress. One bad trade can wipe out a month of gains.",
  },
  {
    icon: Users,
    problem: "Trading Alone Without Feedback",
    impact: "No one to review your trades, catch your mistakes, or keep you accountable.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="how-it-works" className="crypto-section bg-[#FAF8F5] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#C87533]/[0.08] border border-[#C87533]/20 px-4 py-2 rounded-full">
            <AlertTriangle className="w-4 h-4 text-[#C87533]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87533]">Sound Familiar?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            <span className="font-sans font-bold text-[#2C3539]">Why most crypto traders lose money without</span>{' '}
            <span className="font-serif italic font-normal text-[#C87533]">a system</span>
          </h2>
          <p className="text-base text-[#2C3539]/70 max-w-2xl mx-auto">
            <strong className="text-[#C87533]">"Guaranteed profits"</strong> — these false promises are everywhere. Here's what's actually going wrong.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              className="group bg-white rounded-xl border border-[rgba(44,53,57,0.08)] p-6 hover:border-[#C87533]/30 transition-all shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#C87533]/[0.08] border border-[#C87533]/[0.15] flex items-center justify-center mb-4 group-hover:bg-[#C87533]/[0.12] transition-colors">
                <item.icon className="w-5 h-5 text-[#C87533]" />
              </div>
              <h3 className="font-bold text-[#2C3539] mb-2 text-base">{item.problem}</h3>
              <p className="text-sm text-[#2C3539]/60 leading-relaxed">{item.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
