import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, ChevronDown, Star, Shield, Zap } from 'lucide-react';

const MobileOptimizedHero = () => {
  const [liveCount, setLiveCount] = useState(2847);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 27 });
  
  useEffect(() => {
    // Update only every 10 seconds on mobile for performance
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
      setTimeLeft(prev => {
        let { hours, minutes } = prev;
        if (minutes > 0) minutes--;
        else if (hours > 0) { hours--; minutes = 59; }
        return { hours, minutes };
      });
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-black">
      {/* Mobile-optimized background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-black" />
      
      {/* Trust badges bar - Mobile */}
      <div className="relative z-10 bg-black/50 border-b border-white/10 py-2 px-4 md:hidden">
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-400">5.0 Rated</span>
          </div>
        </div>
      </div>
      
      {/* Main content - Mobile First */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-4 pt-8">
        
        {/* Top Section */}
        <div>
          {/* Live counter - Subtle */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">{liveCount.toLocaleString()} active traders</span>
          </div>
          
          {/* Main Headline - Mobile Optimized */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Stop Losing Money.
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Start Trading Profitably.
            </span>
          </h1>
          
          {/* Subheadline - Concise */}
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            89% of our students become profitable in 30 days.
            <br />
            <span className="text-white font-semibold">Take the quiz to see how.</span>
          </p>
          
          {/* Social Proof - Above fold on mobile */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-xs text-gray-400">Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">89%</p>
              <p className="text-xs text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">₹10Cr</p>
              <p className="text-xs text-gray-400">Profits Made</p>
            </div>
          </div>
          
          {/* Featured In - Compact */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-2">Featured in:</p>
            <div className="flex flex-wrap gap-3">
              {['Economic Times', 'CNBC', 'MoneyControl'].map((media) => (
                <span key={media} className="text-xs text-gray-400 font-medium">{media}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section - CTA in thumb zone */}
        <div className="space-y-4">
          {/* Urgency Banner */}
          <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Next batch closes in:</p>
                <p className="text-lg font-bold text-red-400">
                  {timeLeft.hours}h {timeLeft.minutes}m
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Only</p>
                <p className="text-lg font-bold text-red-400">23 spots</p>
                <p className="text-xs text-gray-400">left</p>
              </div>
            </div>
          </div>
          
          {/* Primary CTA - Big and in thumb zone */}
          <button
            onClick={scrollToQuiz}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full py-4 text-lg font-bold shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Take Free Quiz → Get ₹15K Bonus
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-active:opacity-100 transition-opacity" />
          </button>
          
          {/* Trust text */}
          <p className="text-center text-xs text-gray-400">
            ✓ 2-minute quiz • ✓ No payment required • ✓ Instant results
          </p>
          
          {/* Scroll indicator - Desktop only */}
          <div className="hidden md:flex justify-center mt-8">
            <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Sticky Mobile CTA - Always visible */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/95 backdrop-blur-xl border-t border-green-500/20 md:hidden z-50">
        <button
          onClick={scrollToQuiz}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full py-3.5 text-base font-bold flex items-center justify-center gap-2"
        >
          <span>Start Quiz</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">2 min</span>
        </button>
      </div>
    </section>
  );
};

export default MobileOptimizedHero;