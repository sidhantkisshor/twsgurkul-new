import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../../constants';

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20my%20family%20has%20questions%20about%20Footprint%20Mastery`;

const ShowPartnerSection: React.FC = () => {
  const points = [
    { text: "₹90/day", subtext: "Less than daily coffee" },
    { text: "One good trade = course paid for", subtext: "Average student reports ₹45k+ profit in first 3 months" },
    { text: "7-day full refund if it's not for you", subtext: "No questions asked" },
    { text: "Lifetime access — not a subscription", subtext: "Watch on your schedule, forever" },
    { text: "Live Q&A support — not just videos", subtext: "Monthly sessions with Sidhant" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1A2226]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#C87533]/10 border border-[#C87533]/30 rounded-full">
            <Heart className="w-4 h-4 text-[#C87533]" />
            <span className="text-sm font-semibold text-[#D4943F]">For Your Family</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#EDE6D8] mb-4">
            <span className="font-sans font-bold">How to Explain This to </span>
            <span className="font-serif italic font-normal text-[#C87533]">Your Family</span>
          </h2>

          <p className="text-[#B8A99A] text-base sm:text-lg">
            At ₹33k, this is a decision you might want to discuss at home. Here's what to share.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#2C3539] rounded-xl p-6 sm:p-8 border border-[#3A4449] space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#0A8D7A] shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold mb-1">{point.text}</p>
                <p className="text-[#B8A99A] text-sm">{point.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 bg-[#3A4449]/60 rounded-lg p-6 border border-[#B8956A]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#EDE6D8] text-center mb-4">
            <span className="font-serif italic text-[#D4943F]">"Show this section to your spouse/parents. </span>
            <span className="text-[#B8A99A]">If they have questions, we're here to help."</span>
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-wealth-teal/10 border border-wealth-teal/30 text-wealth-teal font-semibold rounded-full hover:bg-wealth-teal/20 transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Let them WhatsApp us their questions
          </a>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-[#8A9199] italic">
            Family approval matters at this price point. We get it. Let's talk it through.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowPartnerSection;
