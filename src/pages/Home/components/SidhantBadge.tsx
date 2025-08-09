import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

interface SidhantBadgeProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const SidhantBadge: React.FC<SidhantBadgeProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 glass-effect rounded-full px-3 py-1.5 border border-white/10 ${className}`}>
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          S
        </div>
        <div>
          <p className="text-white font-bold text-sm">Sidhant Kisshor</p>
          <p className="text-green-400 text-xs">TEDx Speaker</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-4 glass-effect rounded-2xl px-6 py-4 border border-white/10 ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/25">
        S
      </div>
      <div className="text-left">
        <p className="text-white font-bold text-lg mb-1">Sidhant Kisshor</p>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">TEDx Speaker</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">10,000+ Students</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Shield className="w-4 h-4 text-green-400" />
          <span className="text-xs text-green-400 font-medium">Verified Trading Mentor • ₹10 Cr+ Student Profits</span>
        </div>
      </div>
    </div>
  );
};

export default SidhantBadge;