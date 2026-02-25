import React from 'react';
import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const testimonials = [
  {
    name: "Vikram",
    city: "Hyderabad",
    text: "First month after the course, I made ₹18k on a single Nifty trade using absorption levels. That one trade paid for more than half the course fee. No tips — just reading the footprint.",
    time: "9:17 AM",
    resultTag: "₹18k from one absorption-based trade"
  },
  {
    name: "Sneha",
    city: "Mumbai",
    text: "I was losing ₹15-20k every month on random breakout entries. After learning delta confirmation, I stopped chasing. Last 3 months: net positive every single month.",
    time: "1:48 PM",
    resultTag: "3 consecutive green months"
  },
  {
    name: "Deepak",
    city: "Delhi",
    text: "The 1-page checklist changed everything. Before every trade I check: footprint signal, delta alignment, invalidation level. If any is missing, I don't enter. My win rate went from ~40% to ~65%.",
    time: "7:05 PM",
    resultTag: "Win rate: 40% → 65%"
  }
];

const WhatsAppProofSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#1A2226]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-3">
            <span className="font-sans font-bold">What Students Are </span>
            <span className="font-serif italic font-normal text-[#C87533]">Saying</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden border border-[#3A4449]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* WhatsApp-style header bar */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/30 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium leading-tight truncate">{t.name}</p>
                    <p className="text-white/60 text-xs leading-tight">{t.city}</p>
                  </div>
                </div>
                <span className="text-white/40 text-xs font-medium shrink-0">WhatsApp</span>
              </div>

              {/* Chat area */}
              <div className="bg-[#0B141A] p-4">
                {/* Chat bubble */}
                <div className="bg-[#DCF8C6] rounded-lg rounded-tl-none px-3.5 py-2.5 max-w-full">
                  <p className="text-[#303030] text-sm leading-relaxed">{t.text}</p>
                  <div className="flex items-center justify-end gap-1.5 mt-1.5">
                    <span className="text-[#667781] text-xs">{t.time}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                  </div>
                </div>

                {/* Result tag */}
                <div className="mt-3">
                  <span className="inline-block max-w-full px-3 py-1.5 bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 rounded-full text-xs text-[#2DBDA8] font-medium break-words">
                    {t.resultTag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#B8A99A] text-xs mt-6 italic">
          These are real student messages. Names used with permission.
        </p>

        {/* CTA after proof */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handlePaymentPopup}
            className="text-[#D4943F] hover:text-[#C87533] font-semibold text-sm transition-colors py-3 px-4 min-h-[44px]"
          >
            I want results like these → See pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppProofSection;
