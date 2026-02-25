import React, { useState } from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    loadGTM?: () => void;
  }
}

const STORAGE_KEY = 'cookie_consent';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

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

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#2C3539] border-t border-soft-sand/10 px-4 py-3 sm:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-sm text-[#B8A99A] font-sans flex-1 leading-relaxed">
          We use cookies for analytics and to improve your experience.{' '}
          <Link to="/cookies" className="underline hover:text-white transition-colors">
            Cookie policy
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm text-[#B8A99A] hover:text-white border border-[#B8A99A]/20 hover:border-[#B8A99A]/40 rounded-lg font-sans transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm text-white bg-[#C87533] hover:bg-[#b5682d] rounded-lg font-sans font-semibold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
