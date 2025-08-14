import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Shield, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  // Live counter animation for today's wins
  const [liveWins, setLiveWins] = useState(2847650);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  
  // Micro proof data
  const microProofs = [
    { name: 'Raj', city: 'Mumbai', profit: '₹47K', avatar: '👨' },
    { name: 'Priya', city: 'Delhi', profit: '₹62K', avatar: '👩' },
    { name: 'Amit', city: 'Bangalore', profit: '₹35K', avatar: '👨' },
    { name: 'Sneha', city: 'Pune', profit: '₹58K', avatar: '👩' },
    { name: 'Vikram', city: 'Chennai', profit: '₹41K', avatar: '👨' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setIsUpdating(true);
        setTimeout(() => {
          // Simulate live updates with small increments
          setLiveWins(prev => prev + Math.floor(Math.random() * 5000) + 1000);
          setIsUpdating(false);
        }, 300);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatCurrency = (num: number) => {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)} L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
      
      {/* Grid pattern overlay - hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Live Badge with Counter - with pause on hover */}
          <div 
            ref={tickerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border mb-6 sm:mb-8 transition-all duration-300 cursor-pointer ${
              isUpdating && !isPaused
                ? 'border-green-400/40 bg-gradient-to-r from-green-500/20 to-green-400/10 scale-105' 
                : 'border-green-400/20 bg-gradient-to-r from-green-500/10 to-green-400/5'
            }`}>
            <div className={`w-2 h-2 bg-green-400 rounded-full ${isUpdating && !isPaused ? 'animate-ping' : 'animate-pulse'}`} />
            <span className="text-xs sm:text-sm font-medium">
              <span className="text-gray-300">Today's Wins: </span>
              <span className={`font-bold transition-all duration-300 ${
                isUpdating && !isPaused ? 'text-green-300 scale-110 inline-block' : 'text-green-400'
              }`}>
                {formatCurrency(liveWins)}
              </span>
              <span className="text-gray-300"> by TWS Students</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Your Shortcut from Trading Confusion
            </span>
            <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              to Consistent Profits
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            <span className="font-semibold text-white">Save 6 months</span> of trial-and-error. 
            <span className="text-red-400"> Avoid the ₹73K mistakes</span> others make. 
            <span className="text-green-400"> Get your exact roadmap in 2 minutes.</span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center mb-6">
            {/* Primary CTA - Quiz */}
            <button
              onClick={() => {
                // Fire analytics event
                if (typeof window !== 'undefined' && (window as unknown as { gtag?: (event: string, eventName: string) => void }).gtag) {
                  (window as unknown as { gtag: (event: string, eventName: string) => void }).gtag('event', 'lp_hero_quiz_click');
                }
                // Smooth scroll to quiz
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3 hover:scale-105"
            >
              Find My Perfect Trading Path
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* One-liner under button */}
            <p className="mt-3 text-xs sm:text-sm text-gray-400">
              No email needed • Instant plan • 2 minutes
            </p>
          </div>
          
          {/* Micro Proof Row */}
          <div className="flex flex-wrap items-center justify-center gap-1 mb-8">
            <div className="flex -space-x-2">
              {microProofs.map((proof, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs">
                  {proof.avatar}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1 text-xs text-gray-400 ml-2">
              {microProofs.slice(0, 3).map((proof, index) => (
                <span key={index} className="flex items-center">
                  <span className="text-white font-medium">{proof.name}</span>
                  <span className="mx-1">from</span>
                  <span className="text-gray-300">{proof.city}</span>
                  <span className="mx-1">made</span>
                  <span className="text-green-400 font-bold">{proof.profit}</span>
                  {index < 2 && <span className="mx-1 text-gray-600">•</span>}
                </span>
              ))}
              <span className="text-gray-500">this week</span>
            </div>
          </div>
          
          {/* Trust Tags - Removed secondary links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Money-Back Guarantee</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Featured in Economic Times</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>10,847 Success Stories</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating elements - hidden on mobile */}
      <div className="hidden md:block absolute top-40 left-20 glass-effect rounded-full p-3 animate-float">
        <TrendingUp className="w-6 h-6 text-green-400" />
      </div>
      <div className="hidden md:block absolute bottom-40 right-20 glass-effect rounded-full p-3 animate-float-delayed">
        <Shield className="w-6 h-6 text-purple-400" />
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black/95 to-transparent">
        <button
          onClick={() => {
            // Fire analytics event
            if (typeof window !== 'undefined' && (window as unknown as { gtag?: (event: string, eventName: string) => void }).gtag) {
              (window as unknown as { gtag: (event: string, eventName: string) => void }).gtag('event', 'lp_hero_mobile_sticky_quiz_click');
            }
            // Smooth scroll to quiz
            document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full py-4 text-base font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
        >
          Find My Perfect Trading Path
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;