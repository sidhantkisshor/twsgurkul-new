import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

const StickyMobileQuizCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isQuizInView, setIsQuizInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show immediately after scrolling past hero (10% of viewport)
      // But hide after journey map to avoid conflict with StickyQuizPrompt
      const journeyMapElement = document.getElementById('journey');
      if (journeyMapElement) {
        const rect = journeyMapElement.getBoundingClientRect();
        if (rect.bottom < windowHeight * 0.8) {
          // Hide when journey map is passed
          setIsVisible(false);
          return;
        }
      }
      
      if (scrollY > windowHeight * 0.1 && !isDismissed) {
        setIsVisible(true);
      }
      
      // Check if quiz is in viewport
      const quizElement = document.getElementById('quiz');
      if (quizElement) {
        const rect = quizElement.getBoundingClientRect();
        const inView = rect.top <= windowHeight && rect.bottom >= 0;
        setIsQuizInView(inView);
        
        // Hide only if quiz is fully visible
        if (inView && rect.top >= 0 && rect.top <= 100) {
          setIsVisible(false);
        }
      }
      
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleClick = () => {
    // Track click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_quiz_cta_click', {
        event_category: 'engagement',
        event_label: 'mobile_sticky_cta'
      });
    }
    
    // Smooth scroll to quiz
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  // Only show on mobile/tablet devices
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null;
  }

  return (
    <>
      {/* Sticky CTA Bar - Enhanced for thumb zone */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        transform transition-all duration-300 ease-out
        ${isVisible && !isQuizInView ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="relative">
          {/* Progress indicator */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-black/20">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${Math.min(scrollProgress, 65)}%` }}
            />
          </div>
          
          {/* Main CTA Container - Bigger touch target */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-green-500/30 backdrop-blur-xl">
            <div className="relative p-4">
              {/* Dismiss button - Bigger touch target */}
              <button
                onClick={handleDismiss}
                className="absolute top-1 right-1 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
              
              {/* Content */}
              <div className="flex items-center gap-3 pr-8">
                {/* Simplified for mobile - single big button */}
                <button
                  onClick={handleClick}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full py-4 flex items-center justify-center gap-3 font-bold text-base shadow-xl active:scale-95 transition-transform"
                  style={{ minHeight: '56px' }} // Ensure thumb-friendly
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Take Free Quiz</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">2 min</span>
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> No payment
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> ₹15K bonus
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Instant results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Pulse Indicator (shows when CTA is hidden) */}
      {!isVisible && !isDismissed && scrollProgress < 20 && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default StickyMobileQuizCTA;