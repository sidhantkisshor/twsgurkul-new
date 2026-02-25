import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const YOUTUBE_ID = '-8zKBbBCfbs';

const VideoSection: React.FC = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLightbox]);

  // Escape key handler for lightbox
  useEffect(() => {
    if (!showLightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowLightbox(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [showLightbox]);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-warm-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-deep-slate mb-4">
              See the <span className="font-serif italic font-normal text-burnt-amber">system</span> in action
            </h2>
            <p className="text-lg text-deep-slate/70 font-normal">
              Watch a real session walkthrough. No cuts, no editing.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              className="aspect-video w-full border border-deep-slate/10 rounded-2xl shadow-lg overflow-hidden hover:border-burnt-amber/30 transition-all cursor-pointer relative group text-left"
              onClick={() => setShowLightbox(true)}
              aria-label="Play live session walkthrough video"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Live trading session walkthrough"
                width={896}
                height={504}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep-slate/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-burnt-amber/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-burnt-amber ml-1" />
                  </div>
                  <p className="text-sm text-white/90">Watch how a session works</p>
                </div>
              </div>
            </button>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {showLightbox && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                role="dialog"
                aria-modal="true"
                aria-label="Video player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowLightbox(false)}
              >
                <motion.div
                  className="relative w-full max-w-5xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowLightbox(false)}
                    className="absolute -top-12 right-0 z-10 bg-black/60 rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                      title="Elite Trading Mentorship - Live Session Walkthrough"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
