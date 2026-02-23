import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface QuizStickyBarProps {
  show: boolean;
  onClick: () => void;
}

const QuizStickyBar: React.FC<QuizStickyBarProps> = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-90 transform transition-transform duration-500 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-linear-to-r from-green-600 to-emerald-600 border-t border-green-400/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              <div>
                <p className="text-white font-semibold text-sm md:text-base">
                  Find your perfect trading path in 2 minutes
                </p>
                <p className="text-green-100 text-xs md:text-sm">
                  No email needed • Get instant personalized recommendation
                </p>
              </div>
            </div>
            
            <button
              onClick={onClick}
              className="flex items-center gap-2 bg-white text-green-600 px-4 md:px-6 py-2 rounded-full font-bold hover:bg-green-50 transition-all hover:scale-105 group"
            >
              <span className="hidden md:inline">Take the Quiz</span>
              <span className="md:hidden">Start</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStickyBar;