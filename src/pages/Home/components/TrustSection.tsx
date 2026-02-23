import React from 'react';

const credentials = ['TEDx Speaker', 'IIT Bombay', '10,000+ Students Trained'];
const mediaLogos = ['Economic Times', 'CNBC TV18', 'Bloomberg', 'Moneycontrol', 'Zee Business'];

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 px-4 bg-deep-slate">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Photo / Initials */}
          <div className="shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-brushed-gold/30 flex items-center justify-center" role="img" aria-label="Sidhant, Founder of TWS Gurukul">
              <span className="text-2xl sm:text-3xl font-bold text-white font-sans" aria-hidden="true">S</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-2 font-sans">
              Sidhant
            </h3>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 mb-4">
              {credentials.map((cred, i) => (
                <React.Fragment key={cred}>
                  <span className="text-sm text-soft-sand/70 font-sans">{cred}</span>
                  {i < credentials.length - 1 && (
                    <span className="text-brushed-gold/50">&middot;</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Media logos */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              {mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs text-soft-sand/40 font-sans font-medium"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
