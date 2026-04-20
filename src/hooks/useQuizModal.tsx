import { useState, useEffect, useCallback } from 'react';
import {
  QUIZ_EXIT_INTENT_MOBILE_DELAY_MS,
  QUIZ_EXIT_INTENT_SCROLL_PCT,
  QUIZ_STICKY_BAR_HIDE_PCT,
} from '../constants';

// Safe sessionStorage wrapper — matches UnifiedQuiz's safeStorage pattern
function safeGet(key: string): string | null {
  try { return sessionStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, value: string) {
  try { sessionStorage.setItem(key, value); } catch { /* restricted env */ }
}

interface UseQuizModalOptions {
  enableExitIntent?: boolean;
  enableStickyBar?: boolean;
  stickyBarThreshold?: number;
}

export const useQuizModal = (options: UseQuizModalOptions = {}) => {
  const {
    enableExitIntent = true,
    enableStickyBar = true,
    stickyBarThreshold = 30
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string>('unknown');
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Open modal with source tracking
  const openQuiz = useCallback((triggerSource: string = 'button') => {
    // Check if already dismissed in this session
    const dismissed = safeGet('quizDismissed');
    if (dismissed && triggerSource === 'exit_intent') {
      return; // Don't show exit intent if already dismissed
    }

    setSource(triggerSource);
    setIsOpen(true);
    safeSet('quizOpened', 'true');
  }, []);

  // Close modal
  const closeQuiz = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global event listener — lets shared components (Navbar) open the quiz on pages
  // that own the modal state (e.g. HomePage) without prop-drilling or scroll-to-anchor hacks.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ source?: string }>).detail;
      openQuiz(detail?.source ?? 'event');
    };
    window.addEventListener('tws:open-quiz', handler);
    return () => window.removeEventListener('tws:open-quiz', handler);
  }, [openQuiz]);

  // Handle sticky bar visibility based on scroll — show midway, hide near footer
  useEffect(() => {
    if (!enableStickyBar) return;

    const HIDE_THRESHOLD = QUIZ_STICKY_BAR_HIDE_PCT; // hide near the bottom so footer/legal links are accessible
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const dismissed = safeGet('quizDismissed');

        if (dismissed) {
          setShowStickyBar(false);
        } else if (scrollPercentage >= stickyBarThreshold && scrollPercentage < HIDE_THRESHOLD) {
          setShowStickyBar(true);
        } else {
          setShowStickyBar(false);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableStickyBar, stickyBarThreshold]);

  // Handle exit intent — desktop mouseleave + mobile time-based
  useEffect(() => {
    if (!enableExitIntent) return;

    const isMobile = window.innerWidth < 768;

    // --- Mobile: time-based exit intent, gated behind meaningful scroll depth ---
    // Rationale: firing at 45s while a T2 reader is mid-way through "Is this for you?"
    // interrupts trust-building. Require both a longer dwell AND that they've engaged
    // past the first few sections before auto-opening.
    if (isMobile) {
      const timer = window.setTimeout(() => {
        const quizOpened = safeGet('quizOpened');
        const quizDismissed = safeGet('quizDismissed');
        const exitIntentShown = safeGet('exitIntentShown');
        const ctaClicked = safeGet('ctaClicked');
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

        if (
          !quizOpened && !quizDismissed && !exitIntentShown && !ctaClicked &&
          scrollPct >= QUIZ_EXIT_INTENT_SCROLL_PCT
        ) {
          safeSet('exitIntentShown', 'true');
          openQuiz('exit_intent_mobile');
        }
      }, QUIZ_EXIT_INTENT_MOBILE_DELAY_MS);

      return () => window.clearTimeout(timer);
    }

    // --- Desktop: mouseleave from top of viewport ---
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const quizOpened = safeGet('quizOpened');
        const quizDismissed = safeGet('quizDismissed');
        const exitIntentShown = safeGet('exitIntentShown');

        // Show only once per session, and only if quiz hasn't been opened/dismissed
        if (!quizOpened && !quizDismissed && !exitIntentShown) {
          safeSet('exitIntentShown', 'true');
          openQuiz('exit_intent');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [enableExitIntent, openQuiz]);

  return {
    isOpen,
    source,
    showStickyBar,
    openQuiz,
    closeQuiz
  };
};