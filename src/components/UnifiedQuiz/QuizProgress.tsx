import React from 'react';

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ currentStep, totalSteps }) => {
  const baseProgress = 10;
  const stepProgress = (currentStep / totalSteps) * (100 - baseProgress);
  const percentage = Math.round(baseProgress + stepProgress);

  return (
    <div className="mb-8" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-valuetext={`Question ${Math.min(currentStep + 1, totalSteps)} of ${totalSteps}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-sans font-medium text-soft-sand/70 uppercase tracking-wider">
          Question {Math.min(currentStep + 1, totalSteps)} of {totalSteps}
        </span>
        <span className="text-[13px] font-sans font-medium text-burnt-amber/70">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-burnt-amber to-[#d4843f] rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
