import { useState, useEffect, useRef } from 'react';

export const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const exitIntentShown = useRef(
    !!sessionStorage.getItem('mentorship_exit_shown')
  );

  useEffect(() => {
    if (exitIntentShown.current) return;

    // Desktop only: fires when cursor moves toward closing the tab
    // Mobile exit-intent is unreliable and prohibited per popup framework
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown.current && window.innerWidth > 768) {
        exitIntentShown.current = true;
        sessionStorage.setItem('mentorship_exit_shown', 'true');
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []); // stable — exitIntentShown is a ref

  return { showExitIntent, setShowExitIntent };
};
