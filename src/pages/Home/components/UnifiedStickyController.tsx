import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X, ChevronUp } from 'lucide-react';

type StickyMode = 'hidden' | 'quiz-prompt' | 'navigation' | 'mobile-quiz';

const UnifiedStickyController = () => {
  const [mode, setMode] = useState<StickyMode>('hidden');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isMobile = window.innerWidth < 768;
      
      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      
      // Get key elements
      const heroElement = document.getElementById('hero');
      const quizElement = document.getElementById('quiz');
      const journeyElement = document.getElementById('journey');
      const successElement = document.getElementById('success');
      
      // Check element positions
      const heroBottom = heroElement?.getBoundingClientRect().bottom || 0;
      const quizRect = quizElement?.getBoundingClientRect();
      const journeyBottom = journeyElement?.getBoundingClientRect().bottom || 0;
      const successTop = successElement?.getBoundingClientRect().top || documentHeight;
      
      // Quiz is in view
      if (quizRect && quizRect.top <= windowHeight && quizRect.bottom >= 0) {
        setMode('hidden');
        return;
      }
      
      // Mobile-specific logic
      if (isMobile) {
        // After hero, before journey
        if (heroBottom < 0 && journeyBottom > windowHeight * 0.8) {
          setMode('mobile-quiz');
        }
        // After journey, show prompt
        else if (journeyBottom < windowHeight * 0.5 && successTop > 100) {
          setMode('quiz-prompt');
        }
        else {
          setMode('hidden');
        }
      } 
      // Desktop logic
      else {
        // Show navigation after scrolling past hero
        if (heroBottom < -100) {
          // After journey, switch to quiz prompt
          if (journeyBottom < 100) {
            setMode('quiz-prompt');
          } else {
            setMode('navigation');
          }
        } else {
          setMode('hidden');
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDismissed]);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hidden state
  if (mode === 'hidden' || isDismissed) return null;

  // Mobile Quiz CTA (shows early on mobile)
  if (mode === 'mobile-quiz') {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-slide-up">
        <button
          onClick={scrollToQuiz}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-4 flex items-center justify-between shadow-2xl hover:shadow-green-500/25 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs opacity-90">Find Your Perfect Program</p>
              <p className="font-semibold">Take 30-Second Quiz</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/80 flex items-center justify-center"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      </div>
    );
  }

  // Quiz Prompt (shows after journey map)
  if (mode === 'quiz-prompt') {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        isExpanded ? 'translate-y-0' : 'translate-y-16 md:translate-y-0'
      }`}>
        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Desktop expanded view */}
        <div className="hidden md:block bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ready to find your path?</p>
                    <p className="text-gray-400 text-sm">Get personalized program recommendation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">✓ 30-second quiz</span>
                  <span className="text-gray-400">✓ No email required</span>
                  <span className="text-gray-400">✓ Instant results</span>
                </div>
              </div>
              <button
                onClick={scrollToQuiz}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2 group"
              >
                Take the Quiz
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile collapsed pill */}
        <div className="md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:shadow-green-500/25 transition-shadow duration-300 text-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span className="font-medium whitespace-nowrap">Find Program</span>
            <ChevronUp className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {isExpanded && (
            <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 pb-8">
              <div className="mb-4 text-center text-xs text-gray-400">Choose your path</div>
              <button
                onClick={scrollToQuiz}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full py-3 font-semibold"
              >
                Take 30-Second Quiz →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Navigation mode (desktop only, before journey map)
  if (mode === 'navigation') {
    return (
      <div className="fixed top-0 left-0 right-0 z-40 hidden md:block bg-black/90 backdrop-blur-xl border-b border-white/10 animate-slide-down">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button onClick={scrollToTop} className="text-white font-bold text-lg">
                TWS Gurukul
              </button>
              <nav className="flex items-center gap-6 text-sm">
                <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a>
                <a href="#journey" className="text-gray-400 hover:text-white transition-colors">Journey</a>
                <a href="#success" className="text-gray-400 hover:text-white transition-colors">Results</a>
              </nav>
            </div>
            <button
              onClick={scrollToQuiz}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
            >
              Take Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default UnifiedStickyController;