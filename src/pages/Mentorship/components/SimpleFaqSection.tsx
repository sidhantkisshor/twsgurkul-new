import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SimpleFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "I work 9-6. How will I manage?",
      answer: "Sessions are 8-10:30 PM. Made for working Indians. Most students join after dinner."
    },
    {
      question: "I only have ₹10,000. Is it enough?",
      answer: "Yes. We teach position sizing and risk rules. Start small, learn the system, grow later."
    },
    {
      question: "Is crypto trading legal in India?",
      answer: "Yes. It's legal and regulated. You pay 30% tax on crypto profits and 1% TDS. We don't give tax advice but we teach you the rules."
    },
    {
      question: "Is this a signals group?",
      answer: "No. You learn WHY trades work so you can find them yourself. Signals make you dependent. We make you independent."
    },
    {
      question: "What if I miss sessions?",
      answer: "Replays are available within 1 hour. Weekly review catches you up. Most students miss 1-2 sessions per week and still do well."
    },
    {
      question: "Can I do this on my phone?",
      answer: "Yes. Most students trade on phone. You need a decent internet connection and any charting app."
    },
    {
      question: "Are sessions in Hindi or English?",
      answer: "Mix of both. Coaches explain in English + Hindi. WhatsApp group is bilingual. You'll understand everything."
    },
    {
      question: "How is this different from YouTube?",
      answer: "YouTube gives you theory from people who may not trade. We trade LIVE in front of you — same screen, real money, real time. Then we review YOUR trades weekly."
    },
    {
      question: "What if I lose money trading?",
      answer: "You will have losing trades — everyone does. We teach you to keep losses small (0.5-1% per trade) and let winners run. The skill is in the risk management, not in being right every time."
    },
    {
      question: "Can I get a refund?",
      answer: "ETM Max has a 30-day money-back guarantee. No questions, no forms. Just message us on WhatsApp."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-deep-slate mb-4">
              Got Questions? We've Got Answers.
            </h2>
            <p className="text-base text-deep-slate/70 font-normal">
              The 10 things everyone asks before joining.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-deep-slate/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-warm-white transition-colors"
                >
                  <span className="text-base sm:text-lg text-deep-slate font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-burnt-amber" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm sm:text-base text-deep-slate/70 font-normal leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFaqSection;