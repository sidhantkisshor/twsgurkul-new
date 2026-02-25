import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Play } from 'lucide-react';

const screenshots = [
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/etm/etm-6090.webp',
    alt: 'ETM WhatsApp group — student Yakub sharing +6090% Gold long trade on BingX from live session',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-16-trade.webp',
    alt: 'Student sharing a 1:16 risk-reward trade result from live session',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/etm/etm-nig.webp',
    alt: 'Student Pradeep showing chart levels working perfectly — "Levels working like magic again, building confidence"',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-trade-ss.webp',
    alt: 'Trade screenshot shared by a student in the community',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-tareef.webp',
    alt: 'Student praising the mentorship program in community chat',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-ig-post.webp',
    alt: 'Student posting about their trading progress on Instagram',
  },
  {
    src: 'https://d2j3cl693ttatt.cloudfront.net/assets/images/proof-discord.webp',
    alt: 'Community discussion in the Discord trading room',
  },
];

const RawProofSection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="py-16 lg:py-24 bg-deep-slate">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-4 py-2 mb-4">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm font-semibold text-[#25D366]">From our community</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-3">
                Straight From <span className="font-serif italic font-normal text-burnt-amber">WhatsApp & Discord</span>
              </h2>
              <p className="text-base text-soft-sand/60 max-w-xl mx-auto">
                Unedited screenshots from our private community. Tap to enlarge.
              </p>
            </motion.div>

            {/* Video Testimonial */}
            <motion.div
              className="mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                {!showVideo ? (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative w-full aspect-video bg-deep-slate flex items-center justify-center group"
                    aria-label="Play video testimonial from Abhilasha"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                    <div className="flex flex-col items-center gap-3 z-10">
                      <div className="w-16 h-16 rounded-full bg-burnt-amber flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-7 h-7 text-white ml-1" />
                      </div>
                      <p className="text-white font-medium text-sm">Watch Abhilasha's story</p>
                    </div>
                  </button>
                ) : (
                  <video
                    src="https://d2j3cl693ttatt.cloudfront.net/assets/videos/testimonial-abhilasha-etm.mp4"
                    controls
                    autoPlay
                    playsInline
                    className="w-full aspect-video"
                    preload="none"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <p className="text-center text-xs text-soft-sand/40 mt-2">
                Real student, real story. Shared with permission.
              </p>
            </motion.div>

            {/* Screenshot grid */}
            <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
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

            <p className="text-center text-xs text-soft-sand/40 mt-6">
              Self-reported results. Individual outcomes vary. Trading involves risk.
            </p>
          </div>
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
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
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
