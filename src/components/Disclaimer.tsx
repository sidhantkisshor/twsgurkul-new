import React from 'react';
import { AlertCircle } from 'lucide-react';

interface DisclaimerProps {
  type?: 'inline' | 'tooltip' | 'footer';
  className?: string;
}

const SURVEY_TEXT = '*Based on 2024 student survey of 1,247 active participants who completed the full program';

export const Disclaimer: React.FC<DisclaimerProps> = ({ type = 'inline', className = '' }) => {
  if (type === 'inline') {
    return (
      <span className={`text-xs text-deep-slate/35 italic font-sans ${className}`}>
        {SURVEY_TEXT}
      </span>
    );
  }

  if (type === 'tooltip') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <AlertCircle className="w-3 h-3 text-soft-sand/55 shrink-0" />
        <span className="text-xs text-soft-sand/60 italic font-sans">
          {SURVEY_TEXT}
        </span>
      </div>
    );
  }

  // Footer type — professional footnote card
  return (
    <div className={`relative overflow-hidden rounded-xl border border-deep-slate/10 bg-[#2C3539] ${className}`}>
      {/* Warm accent line at top */}
      <div className="h-px bg-linear-to-r from-transparent via-burnt-amber/20 to-transparent" />

      <div className="px-5 py-4 flex gap-3">
        <div className="shrink-0 mt-0.5">
          <div className="w-6 h-6 rounded-full bg-burnt-amber/[0.08] flex items-center justify-center">
            <AlertCircle className="w-3.5 h-3.5 text-burnt-amber/50" />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-soft-sand/70 font-sans mb-1.5">
            Disclaimer
          </p>
          <p className="text-xs text-soft-sand/55 font-sans leading-[1.7]">
            Success rates and profit figures mentioned are {SURVEY_TEXT}.
            Individual results may vary based on market conditions, capital invested, and personal dedication.
            Trading involves risk and past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  );
};

// Success Rate Component with built-in disclaimer
export const SuccessRate: React.FC<{ rate?: string; showDisclaimer?: boolean }> = ({
  rate = '89%',
  showDisclaimer = true,
}) => (
  <span className="inline-flex items-center gap-0.5">
    <span className="font-bold text-wealth-teal">{rate}</span>
    {showDisclaimer && (
      <sup className="text-[10px] text-soft-sand/55 font-sans">*</sup>
    )}
  </span>
);

export default Disclaimer;
