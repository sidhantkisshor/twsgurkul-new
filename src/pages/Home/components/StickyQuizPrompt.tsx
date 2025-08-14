import React, { useState, useEffect } from 'react';
import { Target, ArrowRight, Sparkles } from 'lucide-react';

const StickyQuizPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after scrolling past journey map section (roughly 200vh)
      const journeyMapElement = document.getElementById('journey');
      if (journeyMapElement) {
        const rect = journeyMapElement.getBoundingClientRect();
        // Show when journey map is scrolled past
        if (rect.bottom < windowHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      
      // Hide if quiz is in view
      const quizElement = document.getElementById('quiz');
      if (quizElement) {
        const quizRect = quizElement.getBoundingClientRect();
        if (quizRect.top <= windowHeight && quizRect.bottom >= 0) {
          setIsVisible(false);
        }
      }
      
      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Collapse on mobile after scrolling more
      if (window.innerWidth < 768 && scrollY > windowHeight * 3) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Track click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_quiz_prompt_click', {
        event_category: 'engagement',
        event_label: 'mid_page_sticky'
      });
    }
    
    // Smooth scroll to quiz
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't render on very large screens where sidebar navigation might be present
  if (typeof window !== 'undefined' && window.innerWidth > 1536) {
    return null;
  }

  return (
    <div className={`
      fixed top-20 left-0 right-0 z-40 transition-all duration-500 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
    `}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="glass-effect rounded-full border border-green-500/30 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl">
              <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-pulse">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">See which stage you belong in</p>
                    <p className="text-xs text-gray-400">2-minute personalized assessment</p>
                  </div>
                </div>
                
                <button
                  onClick={handleClick}
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Take Free Quiz
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Progress indicator */}
              <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
          
          {/* Mobile View - Collapsible */}
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className={`
                w-full glass-effect border border-green-500/30 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl
                transition-all duration-300 overflow-hidden
                ${isExpanded ? 'rounded-2xl' : 'rounded-full'}
              `}
              style={{ minHeight: '56px' }}
            >
              {isExpanded ? (
                // Expanded view
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-pulse">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-white">See your stage</p>
                        <p className="text-xs text-gray-400">Take quiz</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500 text-black rounded-full px-3 py-1.5">
                      <span className="text-xs font-bold">FREE</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ) : (
                // Collapsed pill view
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      {/* Progress dot */}
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <span className="text-sm font-semibold text-white">Find Your Stage</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </div>
              )}
              
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyQuizPrompt;