import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import VerificationModal from './VerificationModal';
import { handlePaymentPopup } from '../utils/payment';

const CDN = 'https://d2j3cl693ttatt.cloudfront.net';

// Real screenshots — ordered by impact (numbers first, per audit rules)
const proofScreenshots = [
  {
    src: `${CDN}/assets/images/footprint/whatsapp-1to16-rr.webp`,
    alt: "WhatsApp: Student shares 1:16 risk-reward trade using footprint chart analysis",
    tag: "1:16 R:R trade"
  },
  {
    src: `${CDN}/assets/images/footprint/whatsapp-cmm-fmp.webp`,
    alt: "WhatsApp: Student says CMM and FMP works everywhere, shorted Nifty at the top in intraday",
    tag: "Nifty short at top"
  },
  {
    src: `${CDN}/assets/images/footprint/whatsapp-2010-trade.webp`,
    alt: "WhatsApp group: Student shares +2010% Gold trade, community reacts with excitement",
    tag: "+2010% Gold trade"
  },
  {
    src: `${CDN}/assets/images/footprint/sidhant-recovery.webp`,
    alt: "Discord: Student recovered ₹20k loss, made over ₹100k, credits psychology lessons",
    tag: "₹20k loss → ₹1L+ profit"
  },
];

const moreScreenshots = [
  {
    src: `${CDN}/assets/images/footprint/discord-course-review.webp`,
    alt: "Discord: Student praises course clarity, found edge with Cohort 2.0 and crypto course confluences",
    tag: "Course review"
  },
  {
    src: `${CDN}/assets/images/footprint/whatsapp-fahad-review.webp`,
    alt: "WhatsApp: Student praises Fahad's mentorship for boosting confidence and trading skills",
    tag: "Mentorship feedback"
  },
];

const TestimonialsSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  return (
    <section id="testimonials" className="bg-[#2C3539] relative pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#EDE6D8] animate-on-scroll">
          <span className="font-sans font-bold">Student </span>
          <span className="font-serif italic font-normal text-[#C87533]">Results</span>
        </h2>
        <p className="text-center text-[#B8A99A] animate-on-scroll mb-8 mt-4">
          Unedited screenshots from our WhatsApp group and Discord
        </p>

        {/* Primary proof wall — real screenshots, masonry-style */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4 mb-6">
          {proofScreenshots.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden border border-[#3A4449] bg-[#0B141A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div className="px-3 py-2 bg-[#1A2226] border-t border-[#3A4449]/50">
                <span className="text-xs font-medium text-[#2DBDA8]">{img.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable — more screenshots */}
        {!showMore && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#0A8D7A]/40 rounded-lg text-sm text-[#2DBDA8] hover:bg-[#0A8D7A]/10 transition-colors"
            >
              See More Proof
              <ChevronDown size={16} />
            </button>
          </div>
        )}

        {showMore && (
          <>
            <div className="columns-1 sm:columns-2 gap-4 space-y-4 mb-6">
              {moreScreenshots.map((img, i) => (
                <motion.div
                  key={i}
                  className="break-inside-avoid rounded-xl overflow-hidden border border-[#3A4449] bg-[#0B141A]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="px-3 py-2 bg-[#1A2226] border-t border-[#3A4449]/50">
                    <span className="text-xs font-medium text-[#2DBDA8]">{img.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mb-8">
              <button
                onClick={() => setShowMore(false)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C3539] border border-[#C87533]/10 rounded-lg text-sm text-[#2DBDA8] hover:text-[#1A9E8A] transition-colors"
              >
                Show Less
                <ChevronUp size={16} />
              </button>
            </div>
          </>
        )}

        <p className="text-center text-[#B8A99A] text-xs mb-6 italic">
          Results vary. These are individual experiences, not guarantees. Education only, not investment advice.
        </p>

        {/* Verification + CTA */}
        <div className="text-center">
          <p className="text-[#B8A99A] text-xs italic mb-6">
            <button
              onClick={() => setShowVerificationModal(true)}
              className="text-[#2DBDA8] hover:text-[#1A9E8A] underline"
            >
              How TWS verifies student feedback →
            </button>
          </p>
          <button
            onClick={handlePaymentPopup}
            className="inline-block bg-[#C87533] hover:bg-[#A85E28] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#C87533]/20"
          >
            Start reading order flow →
          </button>
        </div>
      </div>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </section>
  );
};

export default TestimonialsSection;
