import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface QuizWelcomeBannerProps {
  programId: string;
  variant?: 'dark' | 'light';
}

const QuizWelcomeBanner: React.FC<QuizWelcomeBannerProps> = ({ programId, variant = 'dark' }) => {
  const [leadData] = useState<{ name?: string; program?: string } | null>(() => {
    try {
      const quizCompleted = sessionStorage.getItem('quizCompleted');
      const raw = sessionStorage.getItem('quizLead');
      if (quizCompleted && raw) {
        const parsed = JSON.parse(raw);
        if (parsed.program === programId) return parsed;
      }
    } catch { /* ignore */ }
    return null;
  });
  const [dismissed, setDismissed] = useState(false);

  if (!leadData || dismissed) return null;

  const isDark = variant === 'dark';

  return (
    <div className={`rounded-xl px-5 py-4 mb-6 flex items-start gap-3 animate-[fadeIn_0.5s_ease-out] ${
      isDark
        ? 'bg-wealth-teal/10 border border-wealth-teal/20'
        : 'bg-[#0A8D7A]/[0.06] border border-[#0A8D7A]/15'
    }`}>
      <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-wealth-teal' : 'text-[#0A8D7A]'}`} />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-bold font-sans ${isDark ? 'text-white' : 'text-deep-slate'}`}>
          {leadData.name ? `Welcome back, ${leadData.name.split(' ')[0]}!` : 'Welcome back!'}
        </p>
        <p className={`text-xs font-sans mt-0.5 ${isDark ? 'text-soft-sand/70' : 'text-deep-slate/60'}`}>
          Based on your quiz, this is your recommended program. Scroll down to pricing to get started.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
          isDark
            ? 'bg-white/[0.05] text-soft-sand/50 hover:text-white'
            : 'bg-black/[0.05] text-deep-slate/30 hover:text-deep-slate'
        }`}
        aria-label="Dismiss"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

export default QuizWelcomeBanner;
