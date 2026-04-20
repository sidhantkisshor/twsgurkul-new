import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    loadGTM?: () => void;
  }
}

const STORAGE_KEY = 'cookie_consent';

/*
  Native <dialog>-based cookie banner (non-modal via .show(), not .showModal()).
  The browser handles the dialog role, focus return to trigger on close, and
  accessible naming via aria-labelledby. Using .show() (non-modal) instead of
  .showModal() keeps the page interactive behind the banner — a modal banner
  would hijack Tab order and inert the rest of the page, which is the wrong
  UX for a dismissible cookie toast.

  <dialog> is Baseline widely available since March 2022 (MDN).
*/
const CookieConsent: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (visible) {
      if (!dialog.open) dialog.show();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [visible]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch { /* ignore */ }
    window.loadGTM?.();
    setVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'rejected');
    } catch { /* ignore */ }
    setVisible(false);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cookie-consent-title"
      // Reset native <dialog> defaults (margin:auto, border, padding, positioning)
      // so Tailwind layout classes behave as expected.
      className={
        'fixed inset-x-0 bottom-0 top-auto left-0 right-0 z-[9999] ' +
        'w-full max-w-none m-0 p-0 border-0 bg-transparent text-inherit ' +
        'open:block ' +
        'backdrop:bg-transparent'
      }
    >
      {/*
        Compact horizontal layout on every breakpoint. Previous layout stacked text above
        buttons on mobile, eating ~120px of the first-render viewport and covering the
        hero CTA. Single-row with shortened copy keeps footprint to ~56px on mobile.
      */}
      <div className="bg-[#2C3539] border-t border-soft-sand/10 px-3 sm:px-4 py-2 sm:py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="max-w-5xl mx-auto flex items-center gap-3 sm:gap-6">
          <p id="cookie-consent-title" className="text-[12px] sm:text-sm text-[#B8A99A] font-sans flex-1 leading-snug">
            <span className="hidden sm:inline">We use cookies for analytics and to improve your experience. </span>
            <span className="sm:hidden">Cookies for analytics. </span>
            <Link to="/cookies" className="underline hover:text-white transition-colors whitespace-nowrap">
              Policy
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleReject}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-sm text-[#B8A99A] hover:text-white border border-[#B8A99A]/20 hover:border-[#B8A99A]/40 rounded-lg font-sans transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-amber"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-sm text-white bg-[#C87533] hover:bg-[#b5682d] rounded-lg font-sans font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CookieConsent;
