import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I'm a complete beginner with zero trading experience?",
      answer: "Perfect! This program is designed for beginners. We start from absolute basics and gradually build up your knowledge. Many of our most successful students started with zero experience. You'll get step-by-step guidance, and our community is very supportive of newcomers."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "Just 30-60 minutes daily is enough. This includes watching the live market analysis (15-20 mins) and implementing the strategies. Trading isn't about spending all day in front of charts - it's about making smart, calculated decisions in short timeframes."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the content or don't see value in the first 30 days, we'll refund your money, no questions asked. We're confident in our program's effectiveness."
    },
    {
      question: "How do I access the content after enrollment?",
      answer: "Within 5 minutes of successful payment, you'll receive access credentials via email and WhatsApp. You'll get login details for our private learning platform where all videos, live sessions, and community discussions happen."
    },
    {
      question: "What makes this different from free YouTube content?",
      answer: "While YouTube has general information, our program offers personalized guidance, live market analysis, real-time doubt solving, and a structured learning path. You get direct access to me and a community of serious traders, not just random information."
    },
    {
      question: "Do I need a large capital to start trading?",
      answer: "No! You can start with as little as ₹10,000-₹25,000. We focus on capital preservation and gradual growth. Our strategies work across all capital sizes. We'll teach you proper position sizing based on your account size."
    },
    {
      question: "Will this work for options, stocks, or crypto?",
      answer: "Our core principles work across all markets - stocks, options, crypto, and forex. While the live analysis focuses primarily on Indian stock markets, the psychology and risk management principles are universal."
    },
    {
      question: "Is there ongoing support after the course ends?",
      answer: "Yes! Depending on your plan, you get extended community access. Plus, all students get lifetime access to course updates. The learning doesn't stop when your plan expires - the foundation will serve you forever."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Got questions? We've got answers. Still have doubts? Message us directly.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Drop us a message and we'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">📱</span>
                WhatsApp Us
              </a>
              <a
                href="mailto:support@twsgurukul.com"
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">✉️</span>
                Email Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection; 