import { useState, useEffect, useCallback } from 'react';

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
    const dismissed = sessionStorage.getItem('quizDismissed');
    if (dismissed && triggerSource === 'exit_intent') {
      return; // Don't show exit intent if already dismissed
    }

    setSource(triggerSource);
    setIsOpen(true);
    sessionStorage.setItem('quizOpened', 'true');
  }, []);

  // Close modal
  const closeQuiz = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle sticky bar visibility based on scroll
  useEffect(() => {
    if (!enableStickyBar) return;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= stickyBarThreshold && !sessionStorage.getItem('quizDismissed')) {
        setShowStickyBar(true);
      } else if (scrollPercentage < stickyBarThreshold) {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableStickyBar, stickyBarThreshold]);

  // Handle exit intent (desktop only)
  useEffect(() => {
    if (!enableExitIntent) return;
    
    // Only on desktop
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top
      if (e.clientY <= 0) {
        const quizOpened = sessionStorage.getItem('quizOpened');
        const quizDismissed = sessionStorage.getItem('quizDismissed');
        const exitIntentShown = sessionStorage.getItem('exitIntentShown');
        
        // Show only once per session, and only if quiz hasn't been opened/dismissed
        if (!quizOpened && !quizDismissed && !exitIntentShown) {
          sessionStorage.setItem('exitIntentShown', 'true');
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