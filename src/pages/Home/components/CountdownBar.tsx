import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const CountdownBar: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Get next Monday at 10:00 AM IST
  const getNextMonday = () => {
    const now = new Date();
    const monday = new Date();
    
    // Get next Monday
    const daysUntilMonday = (8 - now.getDay()) % 7 || 7;
    monday.setDate(now.getDate() + daysUntilMonday);
    
    // Set time to 10:00 AM
    monday.setHours(10, 0, 0, 0);
    
    // If the calculated date is in the past (it's Monday after 10 AM), add 7 days
    if (monday <= now) {
      monday.setDate(monday.getDate() + 7);
    }
    
    return monday;
  };

  useEffect(() => {
    // Fire analytics event on mount
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (event: string, eventName: string) => void }).gtag) {
      (window as unknown as { gtag: (event: string, eventName: string) => void }).gtag('event', 'urgency_timer_view');
    }

    // Try to get date from environment variable or use next Monday
    const envDate = import.meta.env.VITE_NEXT_BATCH_DATE;
    
    if (envDate) {
      const parsedDate = new Date(envDate);
      if (parsedDate > new Date()) {
        setTargetDate(parsedDate);
      } else {
        // If env date has passed, roll to next Monday
        setTargetDate(getNextMonday());
      }
    } else {
      // No env date, use next Monday
      setTargetDate(getNextMonday());
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Timer expired, roll to next Monday
        const nextTarget = getNextMonday();
        setTargetDate(nextTarget);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-IN', options);
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border-y border-white/10 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left: Message */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <div className="absolute inset-0 w-5 h-5 text-yellow-400 animate-ping opacity-75">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm sm:text-base">
              <span className="text-white font-medium">Next batch starts on </span>
              <span className="text-yellow-400 font-bold">{formatDate(targetDate)}</span>
              <span className="text-white font-medium">. Enroll before timer hits zero.</span>
            </div>
          </div>

          {/* Right: Countdown */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-yellow-400 hidden sm:block" />
            <div className="flex gap-3">
              {/* Days */}
              {timeLeft.days > 0 && (
                <div className="text-center">
                  <div className="bg-black/50 rounded-lg px-3 py-2 min-w-[50px] border border-yellow-500/30">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Days</div>
                </div>
              )}
              
              {/* Hours */}
              <div className="text-center">
                <div className="bg-black/50 rounded-lg px-3 py-2 min-w-[50px] border border-yellow-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Hours</div>
              </div>

              {/* Minutes */}
              <div className="text-center">
                <div className="bg-black/50 rounded-lg px-3 py-2 min-w-[50px] border border-yellow-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Mins</div>
              </div>

              {/* Seconds */}
              <div className="text-center">
                <div className="bg-black/50 rounded-lg px-3 py-2 min-w-[50px] border border-yellow-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-red-400 animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1 bg-black/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transition-all duration-1000"
            style={{ 
              width: `${Math.max(5, 100 - (timeLeft.days * 4 + timeLeft.hours * 2))}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;