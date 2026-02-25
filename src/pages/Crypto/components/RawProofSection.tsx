import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const screenshots = [
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/cmm/cmm-big-trade.webp',
    alt: 'Student sharing multiple trade profits after completing CMM — account up 8% in 3 weeks',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/cmm/cmm-57-up.webp',
    alt: 'Student with +57% BTC short after completing only 40% of CMM course',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-16-trade.webp',
    alt: 'Student Ashish sharing a 1:16 risk-reward trade result with chart analysis',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/cmm/cmm-daily-accuracy.webp',
    alt: 'Working professional reporting 65-70% accuracy while trading part-time around his job',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-trade-ss.webp',
    alt: 'Student sharing a +2010% Gold trade with community celebrating',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-ig-post.webp',
    alt: 'Student confirming CMM methods work across crypto and equity markets',
  },
];

const RawProofSection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="crypto-section bg-[#2C3539] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#25D366]/[0.08] border border-[#25D366]/[0.20] rounded-full px-4 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-sm font-bold text-[#25D366]">From our community</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
              <span className="font-sans font-bold text-white">Straight From</span>{' '}
              <span className="font-serif italic font-normal text-[#C87533]">WhatsApp</span>
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto">
              Unedited screenshots from our private community. Tap to enlarge.
            </p>
          </motion.div>

          {/* Screenshot grid — masonry-style with 2 cols mobile, 3 cols desktop */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 sm:gap-4">
            {screenshots.map((shot, index) => (
              <motion.button
                key={index}
                className="mb-3 sm:mb-4 w-full rounded-xl overflow-hidden border border-white/[0.06] shadow-lg hover:shadow-xl transition-shadow cursor-zoom-in break-inside-avoid block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View screenshot ${index + 1}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </motion.button>
            ))}
          </div>

          <p className="text-center text-xs text-white/30 mt-6">
            Self-reported results. Individual outcomes vary. Trading involves risk.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RawProofSection;
