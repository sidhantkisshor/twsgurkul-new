import React, { useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';
import { useFocusTrap } from '../../../hooks/useFocusTrap';
import { CDN_BASE } from '../../../constants';

const proofItems = [
  {
    src: `${CDN_BASE}/assets/images/footprint/footprint-sidhant-god.webp`,
    alt: 'Student recovered ₹20k loss and made over ₹1L. Discord message thanking Sidhant',
    label: 'Recovered ₹20k loss → Made ₹1L+',
    platform: 'Discord',
    program: 'Footprint',
  },
  {
    src: `${CDN_BASE}/assets/images/cmm/cmm-big-trade.webp`,
    alt: 'Crypto Mastery student showing account up 8% in 3 weeks with multiple profitable trades',
    label: 'Account up 8% in 3 weeks',
    platform: 'WhatsApp',
    program: 'Crypto',
  },
  {
    src: `${CDN_BASE}/assets/images/cmm/cmm-57-up.webp`,
    alt: 'Student showing +57% ROE on Delta Exchange after completing only 40% of Crypto Mastery course',
    label: '+57% ROE, only 40% through the course',
    platform: 'Telegram',
    program: 'Crypto',
  },
  {
    src: `${CDN_BASE}/assets/images/cmm/cmm-daily-accuracy.webp`,
    alt: 'Working professional with limited time achieving 65-70% accuracy with the system',
    label: '65–70% accuracy with a full-time job',
    platform: 'Discord',
    program: 'Crypto',
  },
  {
    src: `${CDN_BASE}/assets/images/proof-discord.webp`,
    alt: 'Student completed course in 3 days and found their trading edge. Discord community message',
    label: 'Found his edge in 3 days of study',
    platform: 'Discord',
    program: 'Crypto',
  },
  {
    src: `${CDN_BASE}/assets/images/proof-16-trade.webp`,
    alt: 'Student sharing 1:16 risk-reward trade with detailed chart analysis on WhatsApp',
    label: '1:16 risk-reward trade, real chart',
    platform: 'WhatsApp',
    program: 'Footprint',
  },
];

const RawProofWall: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.05);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const closeExpanded = useCallback(() => setExpanded(null), []);
  const dialogRef = useFocusTrap(expanded !== null, closeExpanded);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a2024] via-deep-slate to-[#1a2024]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-burnt-amber/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-10 sm:mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <span className="font-sans font-bold">What students </span>
            <span className="font-serif italic font-normal text-burnt-amber">are sharing</span>
          </h2>
          <p className="text-base text-soft-sand/70 font-sans max-w-md mx-auto">
            Real student stories. No paid actors. No filters.
          </p>
        </div>

        {/* Featured video testimonial — single video because it's the only one we have rights to
            on the home page. Lazy-loaded via poster frame + click-to-play to keep the page light. */}
        <div
          className="mb-8 sm:mb-10 max-w-2xl mx-auto transition-all duration-700 ease-out motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms',
          }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
            {!showVideo ? (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="relative w-full aspect-video bg-deep-slate flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-bright"
                aria-label="Play video testimonial from Abhilasha, Elite Mentorship student"
              >
                <img
                  src={`${CDN_BASE}/assets/images/etm/etm-video-poster-abhilasha.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-burnt-amber flex items-center justify-center group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-transform shadow-[0_0_40px_rgba(200,117,51,0.4)]">
                    <Play className="w-7 h-7 text-white ml-1" aria-hidden="true" />
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base font-sans">
                    Watch Abhilasha&apos;s story
                  </p>
                  <p className="text-soft-sand/70 text-[12px] font-sans">
                    Elite Mentorship · 2:14
                  </p>
                </div>
              </button>
            ) : (
              <video
                src={`${CDN_BASE}/assets/videos/testimonial-abhilasha-etm.mp4`}
                controls
                autoPlay
                playsInline
                preload="none"
                className="w-full aspect-video"
              >
                Your browser does not support embedded video.
              </video>
            )}
          </div>
          <p className="text-center text-[12px] text-soft-sand/60 mt-3 font-sans">
            Real student. Shared with permission. Self-reported. Not typical. Past performance not indicative of future results.
          </p>
        </div>

        {/* Proof grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {proofItems.map((item, i) => (
            <button
              key={i}
              type="button"
              className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-burnt-amber/20 hover:bg-white/[0.04] text-left"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: `${150 + i * 100}ms`,
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              aria-label={`View proof: ${item.label}`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Gradient overlay at bottom for label legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent pointer-events-none" />

                {/* Platform badge */}
                <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 text-white/70 font-sans backdrop-blur-sm">
                  {item.platform}
                </span>

                {/* Program badge */}
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-burnt-amber/20 text-burnt-amber/90 font-sans backdrop-blur-sm">
                  {item.program}
                </span>
              </div>

              {/* Label */}
              <div className="px-3 py-3">
                <p className="text-[13px] sm:text-sm text-soft-sand/80 font-sans font-medium leading-snug">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded overlay */}
        {expanded !== null && (
          <div
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={closeExpanded}
            role="dialog"
            aria-modal="true"
            aria-label={`Proof screenshot: ${proofItems[expanded].label}`}
          >
            <div className="relative max-w-lg w-full max-h-[85vh] overflow-auto rounded-2xl animate-scale-in">
              <img
                src={proofItems[expanded].src}
                alt={proofItems[expanded].alt}
                width={800}
                height={1000}
                decoding="async"
                className="w-full h-auto rounded-2xl"
              />
              <button
                type="button"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center text-xl font-sans backdrop-blur-sm hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-bright"
                onClick={(e) => { e.stopPropagation(); closeExpanded(); }}
                aria-label="Close screenshot preview"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Bottom note — lifted from /35 to /60 so it actually reads on Android in daylight */}
        <p
          className="text-center text-[13px] text-soft-sand/60 font-sans mt-8 transition-all duration-700 ease-out delay-700 motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          Self-reported &middot; Not typical &middot; Past performance not indicative of future results &middot; All screenshots unedited
        </p>
      </div>
    </section>
  );
};

export default React.memo(RawProofWall);
