import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../../constants';

const WHATSAPP_SAMPLE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I'd%20like%20to%20request%20a%20free%20sample%20module%20from%20Footprint%20Mastery`;

const FreeSampleCTA: React.FC = () => {
  return (
    <section className="py-12 bg-[#2C3539]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="bg-gradient-to-br from-[#C87533]/10 to-[#0A8D7A]/10 rounded-xl p-8 border border-[#C87533]/30 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#0A8D7A]/20 border border-[#0A8D7A]/40 rounded-full">
            <Play className="w-4 h-4 text-[#2DBDA8]" />
            <span className="text-sm font-semibold text-[#2DBDA8]">Try Before You Buy</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="font-sans font-bold">Not Ready to Commit? </span>
            <span className="font-serif italic font-normal text-[#D4943F]">Start with a Sample</span>
          </h3>

          <p className="text-[#B8A99A] text-base mb-6 max-w-2xl mx-auto">
            We get it — ₹33k is a decision. Request a free sample module or our Footprint Reading Cheat Sheet to see if this teaching style works for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={WHATSAPP_SAMPLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wealth-teal/10 border-2 border-wealth-teal/30 text-wealth-teal font-semibold rounded-full hover:bg-wealth-teal/20 transition-all text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              Request Sample Module (Free)
            </motion.a>

            <motion.a
              href={WHATSAPP_SAMPLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8956A]/10 border border-[#B8956A]/30 text-[#D0C5B4] font-semibold rounded-full hover:bg-[#B8956A]/20 transition-all text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Free Cheat Sheet
            </motion.a>
          </div>

          <p className="text-xs text-[#8A9199] mt-6 italic">
            No credit card needed. WhatsApp us and we'll send it instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeSampleCTA;
