import React, { useState } from 'react';
import QuickQuiz from './QuickQuiz';

/**
 * MobileStickyQuiz — fixed bottom bar removed to avoid conflicting
 * with FloatingCTA's mobile bar.  The QuickQuiz modal is kept and
 * can still be triggered programmatically if needed.
 */
const MobileStickyQuiz: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {/* Quiz Modal — still available, but no duplicate fixed bottom bar */}
      <QuickQuiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </>
  );
};

export default MobileStickyQuiz;