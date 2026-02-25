import React from 'react';
import type { ProfileField } from './types';

interface ProfileCardProps {
  fields: ProfileField[];
}

const fieldLabels: Record<string, string> = {
  experience: 'Experience',
  capital: 'Capital',
  time: 'Time',
  fear: 'Mindset',
  goal: 'Goal',
};

const ProfileCard: React.FC<ProfileCardProps> = ({ fields }) => {
  const filledCount = fields.filter(f => f.value).length;
  const total = fields.length;
  const percentage = Math.round(10 + (filledCount / total) * 90);

  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5">
      <h3 className="text-[11px] font-sans font-bold text-soft-sand/70 uppercase tracking-[0.2em] mb-4">
        Your Trading Profile
      </h3>

      <div className="space-y-3">
        {fields.map((field) => (
          <div
            key={field.id}
            className="flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full shrink-0 transition-[background-color,transform] duration-500 ${
              field.value
                ? 'bg-burnt-amber scale-110'
                : 'border border-soft-sand/20'
            }`} />

            <span className="text-[12px] font-sans text-soft-sand/50 w-20 shrink-0">
              {fieldLabels[field.id] || field.id}
            </span>

            {field.value ? (
              <span className="text-[13px] font-sans font-medium text-soft-sand/80 animate-[fadeIn_0.3s_ease-out]">
                {field.value}
              </span>
            ) : (
              <div className="h-px w-20 bg-soft-sand/10" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.04]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-sans text-soft-sand/50">Profile</span>
          <span className="text-[10px] font-sans text-burnt-amber/50">{percentage}%</span>
        </div>
        <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full bg-burnt-amber/40 rounded-full transition-[width] duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
