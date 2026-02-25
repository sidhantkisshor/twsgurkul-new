import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Play } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../../constants';

const WHATSAPP_WORKSHOP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20attend%20the%20free%20Footprint%20Workshop`;

const FreeWorkshopCTA: React.FC = () => {
  return (
    <section className="py-12 bg-[#0B1221] border-y border-[#0A8D7A]/20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 rounded-full text-xs text-[#0A8D7A] mb-4">
            <Play className="w-3 h-3" /> Free Workshop
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDE6D8] mb-3">
            <span className="font-sans font-bold">Try it first, </span>
            <span className="font-serif italic font-normal text-[#C87533]">then decide.</span>
          </h2>
          <p className="text-[#B8A99A] mb-6 max-w-xl mx-auto">
            In this free 45-min workshop, we'll do a live footprint chart breakdown using the F.A.S.T. framework.
            See exactly what you'll learn, then decide if you want to enroll.
          </p>

          <motion.a
            href={WHATSAPP_WORKSHOP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-wealth-teal hover:bg-[#097A6A] text-white font-bold rounded-full transition-colors text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Register for Free Workshop - WhatsApp
          </motion.a>

          <p className="text-[#B8A99A] text-xs mt-3">
            No payment needed. We'll send the date and link on WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeWorkshopCTA;
