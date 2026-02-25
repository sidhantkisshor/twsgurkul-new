import React, { useState, useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { UnifiedQuizProps, ProfileField, QuizAnswers } from './types';
import { questions, calculateResult, getResultBullets, getRandomInsight, testimonials } from './data';
import { sanitizeInput } from '../../utils/security';
import { sendAiSensyCampaign } from '../../utils/aisensy';
import { AISENSY_CAMPAIGNS } from '../../constants';
import QuizProgress from './QuizProgress';
import ProfileCard from './ProfileCard';
import QuizQuestion from './QuizQuestion';
import MicroInsight from './MicroInsight';
import LeadCapture from './LeadCapture';
import QuizResult from './QuizResult';
import { useFocusTrap } from '../../hooks/useFocusTrap';

type QuizPhase = 'questions' | 'lead_capture' | 'calculating' | 'result';

// Safe sessionStorage wrapper for Safari private browsing / restricted iframes
function safeStorage(method: 'get', key: string): string | null;
function safeStorage(method: 'set', key: string, value: string): void;
function safeStorage(method: 'remove', key: string): void;
function safeStorage(method: 'get' | 'set' | 'remove', key: string, value?: string) {
  try {
    if (method === 'get') return sessionStorage.getItem(key);
    if (method === 'set' && value !== undefined) sessionStorage.setItem(key, value);
    if (method === 'remove') sessionStorage.removeItem(key);
  } catch { /* silently fail in restricted environments */ }
  return null;
}

// Analytics helper — stable, no component state dependency
function fireEvent(event: string, data: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

// Retry a fetch up to `retries` times with exponential backoff.
// Never throws — failures are swallowed to protect UX.
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 2,
  baseDelayMs = 500
): Promise<void> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return;
    } catch {
      // network error, retry
    }
    if (attempt < retries) {
      await new Promise(r => setTimeout(r, baseDelayMs * Math.pow(2, attempt)));
    }
  }
}

// Restore saved quiz progress from sessionStorage
function getRestoredProgress(): { step: number; answers: QuizAnswers } {
  const saved = safeStorage('get', 'quizProgress');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        step: typeof parsed.step === 'number' ? parsed.step : 0,
        answers: parsed.answers || {},
      };
    } catch { /* ignore */ }
  }
  return { step: 0, answers: {} };
}

const UnifiedQuiz: React.FC<UnifiedQuizProps> = ({ mode, isOpen, onClose, source }) => {
  const [currentStep, setCurrentStep] = useState(() => getRestoredProgress().step);
  const [answers, setAnswers] = useState<QuizAnswers>(() => getRestoredProgress().answers);
  const [phase, setPhase] = useState<QuizPhase>('questions');
  const [insightText, setInsightText] = useState('');
  const [animating, setAnimating] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const timersRef = useRef<number[]>([]);
  const focusTrapRef = useFocusTrap(mode === 'modal' && !!isOpen);

  // Clear all pending timers on unmount
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Build profile fields from answers
  const profileFields: ProfileField[] = questions.map((q) => ({
    id: q.id,
    value: answers[q.id as keyof QuizAnswers]
      ? q.options.find(o => o.value === answers[q.id as keyof QuizAnswers])?.profileLabel
      : undefined,
  }));

  // Save progress
  useEffect(() => {
    if (phase === 'questions' && Object.keys(answers).length > 0) {
      safeStorage('set', 'quizProgress', JSON.stringify({ step: currentStep, answers }));
    }
  }, [currentStep, answers, phase]);

  // Fire open event — once per mount for standalone, on open for modal
  const hasOpenedRef = useRef(false);
  useEffect(() => {
    if (mode === 'modal' && isOpen && !hasOpenedRef.current) {
      hasOpenedRef.current = true;
      fireEvent('quiz_open', { source: source || 'unknown', mode });
    } else if (mode === 'standalone' && !hasOpenedRef.current) {
      hasOpenedRef.current = true;
      fireEvent('quiz_open', { source: source || 'quiz_page', mode });
    }
  }, [isOpen, mode, source]);

  const handleClose = useCallback(() => {
    if (phase === 'questions' && currentStep > 0) {
      setShowExitConfirm(true);
      return;
    }
    fireEvent('quiz_close', { step: currentStep, phase, reason: 'direct' });
    safeStorage('set', 'quizDismissed', 'true');
    onClose?.();
  }, [phase, currentStep, onClose]);

  const confirmClose = useCallback(() => {
    setShowExitConfirm(false);
    fireEvent('quiz_close', { step: currentStep, phase, reason: 'confirmed' });
    safeStorage('set', 'quizDismissed', 'true');
    onClose?.();
  }, [currentStep, phase, onClose]);

  // Escape key handler for modal
  useEffect(() => {
    if (mode !== 'modal' || !isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mode, isOpen, handleClose]);

  // Body scroll lock for modal (iOS-safe: position fixed approach)
  useEffect(() => {
    if (mode !== 'modal' || !isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [mode, isOpen]);

  const handleAnswer = useCallback((value: string) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const question = questions[currentStep];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    // Fire analytics
    fireEvent('quiz_answer', { question_id: question.id, answer_value: value, step: currentStep });

    // Show micro-insight
    const insight = getRandomInsight(question.id, value);
    setInsightText(insight);

    // Auto-advance after delay
    const t1 = window.setTimeout(() => {
      setAnimating(true);
      const t2 = window.setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(prev => prev + 1);
          setInsightText('');
        } else {
          // Last question — go to lead capture
          setPhase('lead_capture');
        }
        setAnimating(false);
        isTransitioning.current = false;
      }, 300);
      timersRef.current.push(t2);
    }, 800);
    timersRef.current.push(t1);
  }, [currentStep, answers]);

  const handleBack = useCallback(() => {
    if (isTransitioning.current) return;

    // Allow going back from lead_capture to last question
    if (phase === 'lead_capture') {
      setPhase('questions');
      fireEvent('quiz_back', { from: 'lead_capture', step: currentStep });
      return;
    }

    if (currentStep > 0) {
      isTransitioning.current = true;
      setAnimating(true);
      fireEvent('quiz_back', { step: currentStep });
      const t = window.setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setInsightText('');
        setAnimating(false);
        isTransitioning.current = false;
      }, 200);
      timersRef.current.push(t);
    }
  }, [currentStep, phase]);

  const handleLeadSubmit = useCallback((name: string, phone: string) => {
    const safeName = sanitizeInput(name);
    // Fire analytics
    const result = calculateResult(answers as Record<string, string>);

    // Compute actual score for analytics
    const experienceScore = questions[0].options.find(o => o.value === answers.experience)?.score ?? 0;
    const capitalScore = questions[1].options.find(o => o.value === answers.capital)?.score ?? 0;
    const timeScore = questions[2].options.find(o => o.value === answers.time)?.score ?? 0;
    const totalScore = experienceScore + capitalScore + timeScore;

    fireEvent('quiz_lead_submit', {
      name: safeName,
      phone_last4: phone.slice(-4),
      program: result.programId,
    });

    // Save lead to sessionStorage
    safeStorage('set', 'quizLead', JSON.stringify({
      name: safeName,
      phone_last4: phone.slice(-4),
      program: result.programId,
      answers,
    }));

    // Send lead to webhook (fire-and-forget, never block the UI)
    // Set VITE_QUIZ_WEBHOOK_URL in .env to enable
    const WEBHOOK_URL = import.meta.env.VITE_QUIZ_WEBHOOK_URL || '';
    if (WEBHOOK_URL) {
      fetchWithRetry(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: safeName,
          phone,
          program: result.programId,
          score: totalScore,
          answers,
          source: source || 'unknown',
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
        }),
      }); // silently fail after retries — don't break quiz UX
    }

    // Trigger AiSensy WhatsApp campaign (fire-and-forget)
    const campaignName = AISENSY_CAMPAIGNS[result.programId as keyof typeof AISENSY_CAMPAIGNS];
    if (campaignName) {
      sendAiSensyCampaign({
        campaignName,
        destination: phone,
        userName: safeName,
        source: source || 'quiz',
        templateParams: [safeName],
        tags: [result.programId, 'quiz_lead'],
      });
    }

    // Show calculating animation
    setPhase('calculating');
    const t = window.setTimeout(() => {
      setPhase('result');
      fireEvent('quiz_result_view', {
        program: result.programId,
        score: totalScore,
        fear: answers.fear,
        goal: answers.goal,
      });
    }, 3000);
    timersRef.current.push(t);
  }, [answers, source]);

  // Calculate result data for results screen
  const result = calculateResult(answers as Record<string, string>);
  const bullets = getResultBullets(answers.fear || 'loss', answers.goal || 'side_income', answers.time || 'evening');
  const testimonial = testimonials[result.programId] || testimonials.cmm;

  // Render content based on phase
  const renderContent = () => {
    switch (phase) {
      case 'questions':
        return (
          <>
            <QuizProgress currentStep={currentStep} totalSteps={questions.length} />
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Question area */}
              <div className="flex-1 min-w-0">
                <QuizQuestion
                  question={questions[currentStep]}
                  selectedValue={answers[questions[currentStep].id as keyof QuizAnswers]}
                  onSelect={handleAnswer}
                  animating={animating}
                />
                <MicroInsight text={insightText} />

                {/* Back button — 44px touch target */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    aria-label="Go to previous question"
                    className="mt-4 inline-flex items-center gap-1.5 min-h-[44px] px-2 -ml-2 text-[14px] text-soft-sand/70 font-sans hover:text-soft-sand/80 transition-colors duration-200 active:opacity-70"
                  >
                    <span aria-hidden="true">&#8592;</span>
                    Back
                  </button>
                )}
              </div>

              {/* Profile card — desktop sidebar only */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-8">
                  <ProfileCard fields={profileFields} />
                </div>
              </div>
            </div>

            {/* Mobile: compact progress dots instead of full profile card */}
            <div className="lg:hidden mt-4 flex items-center gap-2">
              {profileFields.map((field) => (
                <div
                  key={field.id}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                    field.value ? 'bg-burnt-amber/60' : 'bg-white/[0.08]'
                  }`}
                />
              ))}
            </div>
          </>
        );

      case 'lead_capture':
        return (
          <>
            <LeadCapture
              profileFields={profileFields}
              onSubmit={handleLeadSubmit}
            />
            <button
              onClick={handleBack}
              aria-label="Go to previous question"
              className="mt-4 mx-auto flex items-center gap-1.5 min-h-[44px] px-2 text-[14px] text-soft-sand/60 font-sans hover:text-soft-sand/70 transition-colors duration-200 active:opacity-70"
            >
              <span aria-hidden="true">&#8592;</span>
              Edit answers
            </button>
          </>
        );

      case 'calculating':
        return (
          <div className="flex flex-col items-center justify-center py-10 min-h-[200px] animate-[fadeIn_0.3s_ease-out]">
            <div className="w-14 h-14 rounded-full border-2 border-burnt-amber/20 border-t-burnt-amber mb-5 animate-spin" />
            <h2 className="text-lg font-bold text-white font-sans mb-2 text-center">
              Analyzing your profile...
            </h2>
            <p className="text-sm text-soft-sand/60 font-sans text-center max-w-[240px] leading-relaxed">
              Matching your level, capital, and goals to the right program
            </p>
          </div>
        );

      case 'result':
        return (
          <QuizResult
            result={result}
            bullets={bullets}
            testimonial={testimonial}
            onNavigate={() => {
              safeStorage('set', 'quizCompleted', 'true');
              safeStorage('set', 'quizDismissed', 'true');
              safeStorage('remove', 'quizProgress');
              onClose?.();
            }}
          />
        );
    }
  };

  // Exit confirmation overlay
  const renderExitConfirm = () => {
    if (!showExitConfirm) return null;
    return (
      <div className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center px-4 py-6" role="dialog" aria-modal="true" aria-label="Confirm exit">
        <div className="bg-deep-slate border border-white/[0.08] rounded-2xl px-5 py-6 w-full max-w-sm text-center">
          <p className="text-white font-sans font-bold mb-2">
            You&apos;re {Math.round(((currentStep + 1) / questions.length) * 100)}% done - traders who complete the quiz are 3x more likely to become profitable
          </p>
          <p className="text-sm text-soft-sand/60 font-sans mb-6">
            Just {questions.length - currentStep - 1} more question{questions.length - currentStep - 1 !== 1 ? 's' : ''}. Takes 30 seconds.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setShowExitConfirm(false)}
              className="flex-1 bg-burnt-amber text-white font-bold font-sans py-3.5 rounded-xl text-sm min-h-[48px] transition-colors duration-200 active:opacity-85"
            >
              Resume
            </button>
            <button
              onClick={confirmClose}
              className="flex-1 bg-white/[0.05] border border-white/[0.08] text-soft-sand/60 font-sans py-3.5 rounded-xl text-sm min-h-[48px] transition-colors duration-200 hover:bg-white/[0.08] active:opacity-70"
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === MODAL MODE ===
  if (mode === 'modal') {
    if (!isOpen) return null;

    return (
      <div ref={focusTrapRef} className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-label="Trading quiz">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal shell — close button in sticky header, content scrolls independently */}
        <div className="quiz-scope relative z-10 w-full sm:max-w-2xl lg:max-w-3xl sm:mx-4 md:mx-auto flex flex-col max-h-[90svh] sm:max-h-[85svh] bg-deep-slate sm:rounded-2xl sm:border sm:border-white/[0.06] animate-[slideUp_0.3s_ease-out]">

          {/* Sticky header — close button never scrolls away */}
          <div className="relative shrink-0 flex items-center justify-end px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-1 sm:pt-3">
            <button
              onClick={handleClose}
              aria-label="Close quiz"
              className="relative w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center text-soft-sand/60 hover:text-white hover:bg-white/[0.1] transition-colors duration-200 active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable content */}
          <div
            ref={containerRef}
            className="overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-8"
          >
            {renderContent()}
          </div>

          {renderExitConfirm()}
        </div>
      </div>
    );
  }

  // === STANDALONE MODE ===
  return (
    <div ref={containerRef} className="quiz-scope max-w-2xl lg:max-w-3xl mx-auto px-4 py-12">
      {renderContent()}
      {renderExitConfirm()}
    </div>
  );
};

export default UnifiedQuiz;
