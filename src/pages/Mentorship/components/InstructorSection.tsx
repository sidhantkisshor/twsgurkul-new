import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mic2, Award, ExternalLink } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'IIT Bombay & Madras', detail: 'Guest Faculty' },
  { icon: Mic2, label: 'TEDx Speaker', detail: 'Market Psychology' },
  { icon: Award, label: '12+ Years', detail: 'Full-Time Trader' },
];

const InstructorSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-soft-sand/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <picture>
                <source srcSet="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT.webp" type="image/webp" />
                <img
                  src="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT_compressed.jpg"
                  alt="Sidhant Kisshor - TEDx Speaker and IIT Guest Faculty"
                  className="rounded-2xl border-2 border-burnt-amber/30 shadow-2xl w-full"
                  loading="lazy"
                />
              </picture>
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <p className="text-lg font-bold text-deep-slate">Sidhant Kisshor</p>
                <p className="text-sm text-deep-slate/70 mb-2">TEDx Speaker · IIT & NIT Guest Faculty</p>
                <div className="flex items-center gap-1">
                  <a href="https://www.linkedin.com/in/tradingwithsidhant/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 min-h-[44px] px-2 text-xs text-wealth-teal hover:underline">
                    <ExternalLink className="w-3 h-3" />LinkedIn
                  </a>
                  <a href="https://www.youtube.com/@TradingWithSidhant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 min-h-[44px] px-2 text-xs text-wealth-teal hover:underline">
                    <ExternalLink className="w-3 h-3" />YouTube
                  </a>
                  <a href="https://x.com/sidhantkisshor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 min-h-[44px] px-2 text-xs text-wealth-teal hover:underline">
                    <ExternalLink className="w-3 h-3" />X
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-burnt-amber mb-4 font-medium">
                  The System Behind the Program
                </p>
                <h2 className="text-3xl sm:text-4xl font-sans font-bold text-deep-slate mb-4">
                  Built on <span className="font-serif italic font-normal text-burnt-amber">Sidhant's</span> principles
                </h2>
                <p className="text-base text-deep-slate/70 leading-relaxed">
                  IIT Bombay and IIT Madras guest faculty. TEDx speaker. Trading since 2017.
                  His system powers the entire mentorship — delivered nightly by certified pro coaches trained in his methodology.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-deep-slate/50 font-serif italic leading-relaxed border-l-2 border-burnt-amber/40 pl-4">
                "I don't sell hope. I teach a system. Follow the system, and the money follows you."
              </blockquote>

              {/* Credentials */}
              <div className="grid grid-cols-3 gap-3">
                {credentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.label}
                      className="text-center py-4 px-2 rounded-xl bg-white/70 border border-deep-slate/10"
                    >
                      <Icon className="w-5 h-5 text-burnt-amber mx-auto mb-2" />
                      <p className="text-sm font-semibold text-deep-slate leading-tight">{cred.label}</p>
                      <p className="text-xs text-deep-slate/50 mt-0.5">{cred.detail}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
