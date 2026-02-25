import { useState, useEffect, useRef } from 'react';

/**
 * Desktop-only exit intent hook.
 * @param suppress When true, exit intent will not fire (e.g. another popup is active).
 */
export const useExitIntent = (suppress = false) => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  // useRef so the flag never re-triggers the effect
  const exitIntentShown = useRef(
    !!sessionStorage.getItem('crypto_exit_shown')
  );
  const suppressRef = useRef(suppress);
  useEffect(() => { suppressRef.current = suppress; });

  useEffect(() => {
    // Desktop only: fires when cursor moves toward closing the tab
    // Mobile exit-intent is unreliable and prohibited per popup framework
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !exitIntentShown.current &&
        !suppressRef.current &&
        window.innerWidth > 768
      ) {
        exitIntentShown.current = true;
        sessionStorage.setItem('crypto_exit_shown', 'true');
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // stable — exitIntentShown and suppressRef are refs

  return { showExitPopup, setShowExitPopup };
};
