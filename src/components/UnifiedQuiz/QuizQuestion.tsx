import React from 'react';
import { Check } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from './types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedValue?: string;
  onSelect: (value: string) => void;
  animating: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedValue,
  onSelect,
  animating,
}) => {
  return (
    <div
      className={`transition-[opacity,transform] duration-300 ease-out ${
        animating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
      }`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-2 leading-tight">
        {question.text}
      </h2>
      <p className="text-sm text-soft-sand/60 font-sans mb-5 sm:mb-8 leading-relaxed">
        {question.subtext}
      </p>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`w-full min-h-[52px] text-left rounded-xl px-5 py-3.5 border
                transition-[background-color,border-color,box-shadow] duration-200 active:scale-[0.98]
                ${isSelected
                  ? 'bg-burnt-amber/[0.08] border-burnt-amber/40 shadow-[0_0_20px_rgba(200,117,51,0.08)]'
                  : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[15px] font-sans leading-snug transition-colors duration-200 ${
                  isSelected ? 'text-white font-medium' : 'text-soft-sand/70'
                }`}>
                  {option.label}
                </span>
                {isSelected && (
                  <Check className="w-4 h-4 text-burnt-amber shrink-0 ml-3" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
