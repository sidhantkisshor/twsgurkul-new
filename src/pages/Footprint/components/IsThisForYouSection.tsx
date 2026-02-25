import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Briefcase, TrendingUp, Clock } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const IsThisForYouSection: React.FC = () => {
  const forYou = [
    "You trade crypto/indices and want an edge",
    "You're tired of guessing entries and exits",
    "You can dedicate 1 hour/day to practice",
    "You want a rule-based system, not tips",
    "You're ready to invest in your trading education"
  ];

  const notForYou = [
    "You want guaranteed profits or signals",
    "You're looking for a get-rich-quick scheme",
    "You don't want to put in the practice hours",
    "You expect results without following the process"
  ];

  const personas = [
    {
      icon: Briefcase,
      title: "Salaried Professionals",
      subtitle: "₹60k–₹1.5L/month income",
      points: [
        "Trading between morning standup and lunch",
        "Lost ₹20k–₹50k trying YouTube tips",
        "Based in Bangalore/Pune/Hyderabad/Mumbai",
        "Want a system that fits a 9-to-6 schedule"
      ]
    },
    {
      icon: TrendingUp,
      title: "Full-Time Traders",
      subtitle: "₹50k–₹2L/month income goal",
      points: [
        "Trading 4-6 hours/day but struggling with consistency",
        "Tired of emotional entries and panic exits",
        "Want a professional edge, not more indicators",
        "Ready to treat trading like a business"
      ]
    },
    {
      icon: Clock,
      title: "Part-Time Traders",
      subtitle: "Students/Homemakers",
      points: [
        "1-2 hours/day available for practice",
        "Starting with ₹50k–₹2L capital",
        "Want clear rules, not guesswork",
        "Looking for location-independent income skill"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#2C3539]">

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-3">
            <span className="font-sans font-bold">Is This </span>
            <span className="font-serif italic font-normal text-[#C87533]">For You?</span>
          </h2>
          <p className="text-[#B8A99A]">Straight talk: this program isn't for everyone.</p>
        </motion.div>

        {/* Persona-specific paths */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-[#D4943F] mb-8">
            Find yourself in one of these groups?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona, i) => (
              <motion.div
                key={i}
                className="bg-[#3A4449]/60 rounded-xl p-6 border border-[#B8956A]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <persona.icon className="w-6 h-6 text-[#C87533]" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{persona.title}</h4>
                    <p className="text-xs text-[#B8A99A]">{persona.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {persona.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#D0C5B4]">
                      <div className="w-1 h-1 rounded-full bg-[#D4943F] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mirror testimonial — bridges targeting to proof */}
        <motion.div
          className="max-w-2xl mx-auto mb-12 bg-[#3A4449]/40 rounded-xl p-5 border border-[#C87533]/15"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#EDE6D8] italic leading-relaxed mb-3">
            "I'm a software engineer in Bangalore, trading between meetings. I'd lost ₹40k on random entries before I found this. The F.A.S.T. checklist gave me rules — I stopped guessing and started planning. First consistent green quarter in 2 years."
          </p>
          <p className="text-xs text-[#B8A99A]">
            — <span className="text-[#D4943F] font-medium">Arjun, Bangalore</span> · Software Engineer · 6 months with program
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For You */}
          <motion.div
            className="bg-[#3A4449]/60 rounded-xl p-6 border border-[#0A8D7A]/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-sans text-lg font-bold text-[#2DBDA8] mb-5 flex items-center gap-2">
              <Check className="w-5 h-5" /> This is for you if...
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#EDE6D8]">
                  <Check className="w-4 h-4 text-[#2DBDA8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            className="bg-[#3A4449]/60 rounded-xl p-6 border border-[#E5484D]/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-sans text-lg font-bold text-[#F87171] mb-5 flex items-center gap-2">
              <X className="w-5 h-5" /> This is NOT for you if...
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#EDE6D8]">
                  <X className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Micro CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#B8A99A] text-sm mb-3">If you checked 3+ in the green list, you're ready.</p>
          <button
            onClick={handlePaymentPopup}
            className="text-[#D4943F] hover:text-[#C87533] font-semibold text-sm transition-colors py-3 px-4 min-h-[44px]"
          >
            Yes, I'm ready → ₹90/day
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IsThisForYouSection;
