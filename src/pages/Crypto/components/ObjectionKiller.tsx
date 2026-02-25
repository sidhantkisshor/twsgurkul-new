import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Target, Users } from 'lucide-react';

const ObjectionKiller: React.FC = () => {
  return (
    <section className="crypto-section bg-[#FAF8F5] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
            <span className="font-sans font-bold text-[#2C3539]">What This Course</span>{' '}
            <span className="font-serif italic font-normal text-[#C87533]">Will Not Do</span>
          </h2>
          <p className="text-base text-[#2C3539]/70 max-w-xl mx-auto">
            Honesty first. Here's what to expect and what not to.
          </p>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            className="bg-white rounded-xl border border-[rgba(44,53,57,0.08)] p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C87533]/[0.08] rounded-lg shrink-0 border border-[#C87533]/[0.15]">
                <Clock className="w-5 h-5 text-[#C87533]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2C3539] mb-2">"I've bought courses before and never finished them."</h3>
                <p className="text-[#2C3539]/70 text-sm leading-relaxed">
                  We know. Most people don't finish online courses because they're built as 40-hour video dumps. This program is different:
                </p>
                <ul className="mt-3 space-y-2 text-[#2C3539]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C87533] font-bold mt-0.5">→</span>
                    <span><strong className="text-[#2C3539]">12-week structured curriculum</strong> — each module is designed to be applied the same evening, not binged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C87533] font-bold mt-0.5">→</span>
                    <span><strong className="text-[#2C3539]">2-hour daily routine (7–9 PM)</strong> — scanning checklist + journal system keeps you accountable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C87533] font-bold mt-0.5">→</span>
                    <span><strong className="text-[#2C3539]">Monthly live Q&A</strong> — bring your doubts and trades for review with Sidhant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C87533] font-bold mt-0.5">→</span>
                    <span><strong className="text-[#2C3539]">Private community</strong> — moderated for accountability, not memes</span>
                  </li>
                </ul>
                <p className="text-[#2C3539]/70 text-sm leading-relaxed mt-3">
                  73% of our students report being active after 90 days because the format is daily practice, not one-time watching.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl border border-[rgba(44,53,57,0.08)] p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A8D7A]/[0.08] rounded-lg shrink-0 border border-[#0A8D7A]/[0.15]">
                <Target className="w-5 h-5 text-[#0A8D7A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2C3539] mb-2">"Will this work for a complete beginner / my specific situation?"</h3>
                <p className="text-[#2C3539]/70 text-sm leading-relaxed">
                  The program starts from zero. You don't need prior crypto experience. Our students include doctors, CAs, software engineers, government employees, and marketing managers across 15+ cities. The system is the same regardless of your background. What matters is: can you dedicate 2 hours in the evening and follow a checklist? If yes, the method applies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl border border-[rgba(44,53,57,0.08)] p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A8D7A]/[0.08] rounded-lg shrink-0 border border-[#0A8D7A]/[0.15]">
                <Shield className="w-5 h-5 text-[#0A8D7A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2C3539] mb-2">"What if it doesn't work for me?"</h3>
                <p className="text-[#2C3539]/70 text-sm leading-relaxed">
                  We have a published{' '}
                  <a href="/refunds" className="text-[#076D5F] underline inline-flex items-center min-h-[44px]">refund policy</a>
                  . Review it before enrolling. We want students who are committed, not trapped. The program also includes monthly live Q&A sessions for doubt-solving and trade reviews.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl border border-[rgba(44,53,57,0.08)] p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C87533]/[0.08] rounded-lg shrink-0 border border-[#C87533]/[0.15]">
                <Users className="w-5 h-5 text-[#C87533]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2C3539] mb-2">Show this to your family</h3>
                <p className="text-[#2C3539]/70 text-sm leading-relaxed">
                  We understand that ₹19,499 is a family decision for many. Here's the plain-language breakdown: It's a <strong className="text-[#2C3539]">one-time payment for a structured crypto education program</strong> with lifetime access. It teaches risk management first — how to protect capital, not gamble it. If the student implements even one risk management rule from the course, it can prevent losses that typically exceed the course cost. There are no hidden upsells. No-cost EMI at ₹1,625/month is available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Anti-scam block */}
        <motion.div
          className="mt-10 bg-[#2C3539]/5 rounded-xl border border-[rgba(44,53,57,0.08)] p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-[#2C3539] mb-4">What this course will NOT do for you</h3>
          <div className="space-y-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 text-sm text-[#2C3539]/70">
            <p className="border-l-2 border-[#2C3539]/20 pl-3 text-left">We will NOT guarantee profits. Trading involves real risk.</p>
            <p className="border-l-2 border-[#2C3539]/20 pl-3 text-left">We will NOT give you buy/sell signals or trade on your behalf.</p>
            <p className="border-l-2 border-[#2C3539]/20 pl-3 text-left">We will NOT make you rich overnight. This is skill-building, not gambling.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionKiller;
