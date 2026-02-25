import React, { useEffect, useState } from 'react';

interface MicroInsightProps {
  text: string;
}

const MicroInsight: React.FC<MicroInsightProps> = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) {
      setVisible(false); // eslint-disable-line react-hooks/set-state-in-effect -- reset before timers
      return;
    }
    setDisplayText(text);
    const showTimer = setTimeout(() => setVisible(true), 100);
    const hideTimer = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [text]);

  if (!displayText) return null;

  return (
    <div
      className={`mt-3 transition-[opacity,transform] duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-1 pointer-events-none'
      }`}
    >
      <p className="text-[13px] font-sans text-soft-sand/70 italic text-center leading-relaxed">
        &ldquo;{displayText}&rdquo;
      </p>
    </div>
  );
};

export default MicroInsight;
