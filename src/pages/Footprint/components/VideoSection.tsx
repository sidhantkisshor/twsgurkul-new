import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEO_ID = 'rPUQ_qtqH_M';
const START_SECONDS = 22;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-[#2C3539]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-[#D4943F] uppercase tracking-wider mb-3">
            See the teaching style
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDE6D8] mb-2">
            <span className="font-sans font-bold">Watch a </span>
            <span className="font-serif italic font-normal text-[#C87533]">Sample Lesson</span>
          </h2>
          <p className="text-sm text-[#B8A99A]">
            Judge for yourself before spending a rupee.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-xl overflow-hidden border border-[#3A4449] shadow-2xl shadow-black/30"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* 16:9 aspect ratio container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=${START_SECONDS}&autoplay=1&rel=0&modestbranding=1&color=white`}
                title="Footprint Mastery — Sample Lesson"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <button
                onClick={handlePlay}
                className="absolute inset-0 w-full h-full group cursor-pointer"
                aria-label="Play sample lesson video"
              >
                {/* Thumbnail */}
                <img
                  src={THUMBNAIL_URL}
                  alt="Footprint chart analysis lesson preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#0B1221]/40 group-hover:bg-[#0B1221]/30 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C87533] flex items-center justify-center shadow-xl shadow-[#C87533]/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1221]/90 to-transparent pt-10 pb-4 px-4">
                  <p className="text-white text-sm font-medium">
                    Footprint Chart Analysis — Live Breakdown
                  </p>
                  <p className="text-[#B8A99A] text-xs mt-1">
                    by Fahad Siddiqui · Footprint Mastery Mentor
                  </p>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        <p className="text-center text-[#B8A99A] text-xs mt-4 italic">
          This is a sample from our YouTube channel. The full course goes much deeper.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
