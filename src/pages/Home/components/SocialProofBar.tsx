import React from 'react';

const metrics = [
  { value: '10,847+', label: 'Students Trained' },
  { value: '89%', label: 'Success Rate' },
  { value: '₹100 Cr+', label: 'Student Profits' },
];

const mediaLogos = ['ET', 'CNBC', 'Bloomberg', 'Moneycontrol'];

const SocialProofBar: React.FC = () => {
  return (
    <section className="bg-warm-white py-8 sm:py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-deep-slate font-sans">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-deep-slate/50 mt-1 font-sans">
                {metric.label}
              </div>
            </div>
          ))}

          {/* Featured In */}
          <div className="text-center col-span-2 sm:col-span-1">
            <div className="text-xs text-deep-slate/40 mb-2 font-sans uppercase tracking-wider">
              Featured in
            </div>
            <div className="flex items-center justify-center gap-3">
              {mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs sm:text-sm text-deep-slate/50 font-sans font-medium"
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

export default SocialProofBar;
