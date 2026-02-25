import React, { useEffect, useState, useCallback } from 'react';

const toastEntries = [
  { name: 'Rohit', city: 'Bangalore', program: 'Crypto Mastery', profession: 'Software Engineer', time: '4 min ago' },
  { name: 'Dr. Sneha', city: 'Pune', program: 'Footprint Trading', profession: 'MBBS', time: '12 min ago' },
  { name: 'Aakash', city: 'Hyderabad', program: 'Crypto Mastery', profession: 'TCS', time: '8 min ago' },
  { name: 'Meera', city: 'Mumbai', program: 'Elite Mentorship', profession: 'CA', time: '2 min ago' },
  { name: 'Vikram', city: 'Delhi', program: 'Footprint Trading', profession: 'Infosys', time: '18 min ago' },
  { name: 'Priya', city: 'Chennai', program: 'Crypto Mastery', profession: 'Data Analyst', time: '6 min ago' },
  { name: 'Arjun', city: 'Jaipur', program: 'Elite Mentorship', profession: 'Business Owner', time: '15 min ago' },
  { name: 'Kavita', city: 'Kolkata', program: 'Crypto Mastery', profession: 'Teacher', time: '9 min ago' },
  { name: 'Sanjay', city: 'Ahmedabad', program: 'Footprint Trading', profession: 'Govt Employee', time: '3 min ago' },
  { name: 'Neha', city: 'Noida', program: 'Crypto Mastery', profession: 'HR Manager', time: '11 min ago' },
  { name: 'Rajesh', city: 'Lucknow', program: 'Elite Mentorship', profession: 'Pharmacist', time: '7 min ago' },
  { name: 'Ananya', city: 'Chandigarh', program: 'Footprint Trading', profession: 'Architect', time: '14 min ago' },
  { name: 'Deepak', city: 'Indore', program: 'Crypto Mastery', profession: 'Bank Manager', time: '5 min ago' },
  { name: 'Ritu', city: 'Nagpur', program: 'Crypto Mastery', profession: 'Freelancer', time: '10 min ago' },
  { name: 'Karan', city: 'Gurgaon', program: 'Elite Mentorship', profession: 'Wipro', time: '1 min ago' },
];

interface SocialProofToastProps {
  paused?: boolean;
}

const SocialProofToast: React.FC<SocialProofToastProps> = ({ paused = false }) => {
  const [currentEntry, setCurrentEntry] = useState<typeof toastEntries[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);

  const showNextToast = useCallback(() => {
    if (showCount >= 5) return;
    const randomIndex = Math.floor(Math.random() * toastEntries.length);
    setCurrentEntry(toastEntries[randomIndex]);
    setVisible(true);
    setShowCount(prev => prev + 1);

    // Hide after 4 seconds
    setTimeout(() => setVisible(false), 4000);
  }, [showCount]);

  useEffect(() => {
    if (paused || showCount >= 5) return;

    // First toast after 8 seconds, subsequent toasts at random 15-25s intervals
    const delay = showCount === 0 ? 8000 : 15000 + Math.random() * 10000;
    const timer = setTimeout(showNextToast, delay);
    return () => clearTimeout(timer);
  }, [paused, showCount, showNextToast]);

  if (!currentEntry) return null;

  return (
    <>
      {/* Desktop: bottom-left */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-6 z-80 hidden md:block transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-deep-slate/[0.08] rounded-xl px-4 py-3 shadow-[0_8px_30px_-10px_rgba(44,53,57,0.15)] max-w-[300px]">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-wealth-teal mt-1.5 shrink-0 animate-pulse" />
            <div>
              <p className="text-[13px] text-deep-slate/70 font-sans leading-snug">
                <span className="font-semibold text-deep-slate">{currentEntry.name}</span>
                {' '}from {currentEntry.city} joined{' '}
                <span className="font-semibold text-burnt-amber">{currentEntry.program}</span>
              </p>
              <p className="text-[11px] text-deep-slate/35 font-sans mt-0.5">
                {currentEntry.profession} &middot; {currentEntry.time}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: top of screen (avoid sticky bar conflict) */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-20 left-4 right-4 z-80 md:hidden transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-deep-slate/[0.08] rounded-xl px-4 py-3 shadow-[0_8px_30px_-10px_rgba(44,53,57,0.15)]">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-wealth-teal mt-1.5 shrink-0 animate-pulse" />
            <div>
              <p className="text-[13px] text-deep-slate/70 font-sans leading-snug">
                <span className="font-semibold text-deep-slate">{currentEntry.name}</span>
                {' '}({currentEntry.city}) joined{' '}
                <span className="font-semibold text-burnt-amber">{currentEntry.program}</span>
              </p>
              <p className="text-[11px] text-deep-slate/35 font-sans mt-0.5">
                {currentEntry.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProofToast;
