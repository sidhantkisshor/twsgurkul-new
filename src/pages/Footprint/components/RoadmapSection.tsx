import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BarChart3, Trophy, Video, Users, FileText } from 'lucide-react';

const weeks = [
  {
    phase: "Foundation",
    weeks: "Week 1-2",
    icon: BookOpen,
    modules: "Modules 1-4 (Find + Assess)",
    milestone: "Read your first footprint chart",
    step: "01"
  },
  {
    phase: "Application",
    weeks: "Week 3-4",
    icon: BarChart3,
    modules: "Modules 5-6 (Sync)",
    milestone: "Take your first F.A.S.T. trade on paper",
    step: "02"
  },
  {
    phase: "Mastery",
    weeks: "Week 5-6",
    icon: Trophy,
    modules: "Modules 7-10 (Trade + Review)",
    milestone: "Journal, review, and refine your edge",
    step: "03"
  }
];

const accountability = [
  { icon: Video, text: "Monthly live Q&A session" },
  { icon: Users, text: "Private community for questions" },
  { icon: FileText, text: "Trade journal templates included" }
];

const RoadmapSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#2C3539]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-3">
            <span className="font-sans font-bold">Your 6-Week </span>
            <span className="font-serif italic font-normal text-[#C87533]">Roadmap</span>
          </h2>
          <p className="text-[#B8A99A]">Self-paced doesn't mean alone. Here's your path.</p>
        </motion.div>

        {/* Timeline cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {weeks.map((w, i) => (
            <motion.div
              key={i}
              className="relative bg-[#3A4449]/80 rounded-xl p-6 border border-[#C87533]/10 hover:border-[#C87533]/40 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Step number — pushed further right on mobile to clear the icon */}
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#C87533]/15 font-bold text-4xl sm:text-5xl font-mono select-none leading-none">
                {w.step}
              </span>

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C87533] to-[#A85E28] flex items-center justify-center mb-4 shadow-lg shadow-[#C87533]/20">
                  <w.icon className="w-5 h-5 text-white" />
                </div>

                <p className="text-xs text-[#D4943F] font-semibold uppercase tracking-wider mb-1">{w.weeks}</p>
                <h3 className="font-sans text-[#EDE6D8] font-bold text-xl mb-2">{w.phase}</h3>
                <p className="text-[#B8A99A] text-sm leading-relaxed mb-3">{w.modules}</p>

                <div className="pt-3 border-t border-[#C87533]/10">
                  <p className="text-[#2DBDA8] text-sm font-medium">{w.milestone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accountability strip */}
        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-3 sm:gap-6 bg-[#3A4449]/50 rounded-xl px-5 py-4 border border-[#B8956A]/10 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {accountability.map((a, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-[#B8A99A]">
              <a.icon className="w-4 h-4 text-[#B8956A] shrink-0" />
              <span>{a.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-[#B8A99A] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Most students finish in 4-6 weeks at 1 hour/day. But there's no deadline — lifetime access means you go at your pace.
        </motion.p>
      </div>
    </section>
  );
};

export default RoadmapSection;
