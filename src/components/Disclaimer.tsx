import React from 'react';
import { Info } from 'lucide-react';

interface DisclaimerProps {
  type?: 'inline' | 'tooltip' | 'footer';
  className?: string;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ type = 'inline', className = '' }) => {
  const disclaimerText = "*Based on 2024 student survey of 1,247 active participants who completed the full program";
  
  if (type === 'inline') {
    return (
      <span className={`text-xs text-gray-500 italic ${className}`}>
        {disclaimerText}
      </span>
    );
  }
  
  if (type === 'tooltip') {
    return (
      <div className={`inline-flex items-center gap-1 ${className}`}>
        <Info className="w-3 h-3 text-gray-500" />
        <span className="text-xs text-gray-500 italic">
          {disclaimerText}
        </span>
      </div>
    );
  }
  
  // Footer type - more prominent
  return (
    <div className={`bg-gray-900/50 border border-gray-800 rounded-lg p-3 mt-4 ${className}`}>
      <div className="flex items-start gap-2">
        <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-gray-400">
          <span className="font-semibold">Disclaimer:</span> Success rates and profit figures mentioned are {disclaimerText}. 
          Individual results may vary based on market conditions, capital invested, and personal dedication. 
          Trading involves risk and past performance does not guarantee future results.
        </p>
      </div>
    </div>
  );
};

// Success Rate Component with built-in disclaimer
export const SuccessRate: React.FC<{ rate?: string; showDisclaimer?: boolean }> = ({ 
  rate = "89%", 
  showDisclaimer = true 
}) => {
  return (
    <div className="inline-flex items-center gap-1">
      <span className="font-bold text-green-400">{rate}</span>
      {showDisclaimer && (
        <sup className="text-xs text-gray-500">*</sup>
      )}
    </div>
  );
};

export default Disclaimer;