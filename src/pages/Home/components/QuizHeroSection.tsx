import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuizHeroSection = () => {
  const [liveCount, setLiveCount] = useState(247);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.7) {
        setLiveCount(prev => prev + 1);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Opportunity Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white font-bold">
            🎯 {liveCount} traders found their perfect program today! Average result: Profitable in 67 days
          </span>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Pre-headline - Success */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">
                Join 10,000+ profitable traders who found their path
              </span>
            </div>

            {/* Main headline - Opportunity */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">
                Which TWS Gurukul Program
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Will Make YOU Profitable?
              </span>
              <span className="block mt-2 text-white text-2xl sm:text-3xl md:text-4xl font-normal">
                Find Your Perfect Match in 2 Minutes
              </span>
            </h1>

            {/* Subheadline - Value */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get Sidhant's personalized roadmap + <span className="text-yellow-400 font-bold">₹15,000 in bonuses</span>
              <br className="hidden sm:block" />
              based on YOUR experience, schedule, and goals
            </p>

            {/* Authority */}
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-5 py-3 border border-white/10 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Designed by Sidhant Kisshor</p>
                <p className="text-green-400 text-sm">TEDx Speaker • ₹10 Cr+ Student Profits</p>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2 min</div>
                <p className="text-sm text-gray-400">to complete</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">₹15,000</div>
                <p className="text-sm text-gray-400">in bonuses</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">89%</div>
                <p className="text-sm text-gray-400">accuracy</p>
              </div>
            </div>

            {/* Primary CTA */}
            <Link 
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-5 text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 animate-pulse hover:animate-none"
            >
              <Brain className="w-6 h-6" />
              Yes, Match Me With My Perfect Program
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Risk Reversal */}
            <p className="mt-4 text-sm text-gray-400">
              100% Free • No Credit Card • Your Results in 2 Minutes
            </p>

            {/* Social Proof */}
            <div className="mt-12 space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">LIVE UPDATE:</span>
                <span className="text-gray-300">Priya from Delhi just saved ₹50,000 by switching to the right program</span>
              </div>
              
              <div className="text-xs text-gray-500">
                Based on data from 10,000+ Indian traders • Updated daily by Sidhant's team
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizHeroSection;