import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop when mouse leaves from top
      if (e.clientY <= 0 && !exitIntentShown && window.innerWidth > 768) {
        setShowExitPopup(true);
        setExitIntentShown(true);
      }
    };

    // Mobile exit intent - triggered after 60 seconds
    const mobileExitTimer = setTimeout(() => {
      if (window.innerWidth <= 768 && !exitIntentShown) {
        setShowExitPopup(true);
        setExitIntentShown(true);
      }
    }, 60000);

    // Back button press detection for mobile
    const handlePopState = () => {
      if (!exitIntentShown && window.innerWidth <= 768) {
        setShowExitPopup(true);
        setExitIntentShown(true);
        // Push state again to keep user on page
        window.history.pushState(null, '', window.location.href);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);
    
    // Push initial state for back button detection
    if (window.innerWidth <= 768) {
      window.history.pushState(null, '', window.location.href);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(mobileExitTimer);
    };
  }, [exitIntentShown]);

  return { showExitPopup, setShowExitPopup };
}; 