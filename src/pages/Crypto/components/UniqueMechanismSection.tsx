import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Filter, Layers, Crosshair, TrendingUp } from 'lucide-react';
import { uniqueMechanismData } from '../data';

const stepIcons = [Eye, Filter, Layers, Crosshair, TrendingUp];

const deliverables = [
  { label: "Pro Trading Checklist", note: "Bonus", description: "Your pre-trade decision filter — so emotion never makes the call" },
  { label: "Top 5 Trading Tools Guide", note: "Bonus", description: "The exact setup used for professional-grade market reading" },
  { label: "23 structured chapters across 5 sections", note: "", description: "Built in a specific sequence so each lesson compounds the last" },
  { label: "Real case studies", note: "", description: "Level management breakdowns using actual market shifts, not textbook examples" },
  { label: "SuperPattern + Structure Failure deep-dives", note: "", description: "The two strategies that work in every market condition" },
];

const UniqueMechanismSection: React.FC = () => {
  return (
    <section id="routine" className="crypto-section bg-[#2C3539] relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0A8D7A]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#C87533]/10 border border-[#C87533]/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#C87533] uppercase tracking-wider">The System</span>
          </div>
          <p className="text-lg sm:text-xl text-white/60 mb-2 font-sans">
            Most traders lose not because they lack knowledge.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white/80 mb-8 font-sans">
            They lose because they never built a system.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            <span className="font-serif italic font-normal text-[#C87533]">{uniqueMechanismData.headline} </span>
            <span className="font-sans font-bold text-white">is the complete execution framework for the trader who's done winging it.</span>
          </h2>
        </motion.div>

        {/* Steps label */}
        <motion.p
          className="text-center text-xs font-bold text-white/30 uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The 5-Step Framework Inside
        </motion.p>

        {/* Step cards — 2 columns on md, 1 on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {uniqueMechanismData.features.slice(0, 3).map((feature, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={index}
                className="group bg-[#232b2f] border border-white/[0.08] rounded-xl p-6 hover:border-[#C87533]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C87533]/10 border border-[#C87533]/[0.25] flex items-center justify-center shrink-0 group-hover:bg-[#C87533]/[0.15] transition-colors">
                    <Icon className="w-5 h-5 text-[#C87533]" />
                  </div>
                  <span className="text-xs font-bold text-white/30 uppercase tracking-wider">Step {feature.letter}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {uniqueMechanismData.features.slice(3).map((feature, i) => {
            const index = i + 3;
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={index}
                className="group bg-[#232b2f] border border-white/[0.08] rounded-xl p-6 hover:border-[#C87533]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C87533]/10 border border-[#C87533]/[0.25] flex items-center justify-center shrink-0 group-hover:bg-[#C87533]/[0.15] transition-colors">
                    <Icon className="w-5 h-5 text-[#C87533]" />
                  </div>
                  <span className="text-xs font-bold text-white/30 uppercase tracking-wider">Step {feature.letter}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverables */}
        <motion.div
          className="mt-14 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xs sm:text-sm font-bold text-white/40 uppercase tracking-wider mb-2">What you get when you join</h3>
          <p className="text-center text-sm text-white/40 mb-8">Not just content. A complete operating system for trading crypto profitably.</p>
          <div className="flex flex-col gap-3">
            {deliverables.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-[#232b2f] border border-white/[0.08] rounded-xl px-5 py-4">
                <div className="w-1.5 h-1.5 bg-[#C87533] rounded-full shrink-0 mt-[7px]" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                    {item.note && (
                      <span className="text-xs font-bold bg-[#C87533]/15 text-[#C87533] border border-[#C87533]/25 rounded-full px-2 py-0.5 uppercase tracking-wide">{item.note}</span>
                    )}
                  </div>
                  <p className="text-xs text-white/45 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing + CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm mb-1">The market doesn't reward the most educated trader.</p>
          <p className="text-white font-semibold text-base mb-8">It rewards the most systematic one.</p>
          <button
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 bg-[#C87533] hover:bg-[#b5682d] text-white font-semibold py-3 px-8 rounded-xl transition-all text-base shadow-lg shadow-[#C87533]/20"
          >
            See What's Inside
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default UniqueMechanismSection;
