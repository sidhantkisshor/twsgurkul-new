import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const forYouIf = [
  "You\u2019re a salaried professional or freelancer who trades on the side \u2014 and keeps losing",
  "You\u2019ve blown \u20B950k\u20132L on random tips, Telegram channels, or YouTube strategies that never worked",
  "You make money sometimes but give it all back because you have no exit rules",
  "You stare at charts for hours but still take emotional, revenge trades",
  "You\u2019ve bought a course before and didn\u2019t finish \u2014 or finished but couldn\u2019t apply it",
];

const notForYou = [
  "You want \u201Cguaranteed returns\u201D or a get-rich-quick scheme",
  "You\u2019re not willing to put in 1\u20132 hours daily for 30\u201390 days",
  "You want someone to trade for you instead of learning a skill",
];

const TargetingSection: React.FC = () => {
  const [ref, visible] = useIntersectionAnimation(0.1);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 bg-white overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-deep-slate mb-4">
            <span className="font-sans font-bold">Is this </span>
            <span className="font-serif italic font-normal text-burnt-amber">for you?</span>
          </h2>
          <p className="text-base text-deep-slate/45 font-sans max-w-md mx-auto">
            Be honest with yourself. If 3 or more hit home, you&apos;re in the right place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* This is for you if… */}
          <div
            className="transition-all duration-700 ease-out delay-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-wealth-teal/10 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-wealth-teal" />
              </div>
              <h3 className="text-lg font-bold text-deep-slate font-sans">
                This is for you if&hellip;
              </h3>
            </div>
            <ul className="space-y-4">
              {forYouIf.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wealth-teal/60 shrink-0" />
                  <span className="text-[15px] text-deep-slate/65 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who should NOT join */}
          <div
            className="transition-all duration-700 ease-out delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-deep-slate font-sans">
                This is NOT for you if&hellip;
              </h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(12px)',
                    transitionDelay: `${300 + i * 80}ms`,
                  }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 shrink-0" />
                  <span className="text-[15px] text-deep-slate/65 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mirror story — relatable student voice */}
            <div
              className="mt-8 bg-deep-slate/[0.03] border border-deep-slate/[0.06] rounded-xl px-5 py-4 transition-all duration-700 ease-out delay-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <p className="text-[13px] text-deep-slate/50 font-sans italic leading-relaxed">
                &ldquo;I was exactly here — salaried job in Pune, lost ₹1.5L on Telegram tips, almost quit trading forever. Joined Crypto Mastery as a last try. Made ₹87,000 in month 2.&rdquo;
              </p>
              <p className="text-[13px] text-deep-slate/70 font-sans font-semibold mt-2">
                — Rahul K., Software Engineer, Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TargetingSection);
