import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';

const HeroSection = () => {
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-white/10 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300">247 Students Made Profits Today</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              From ₹30K Salary to
            </span>
            <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              ₹3L+ Monthly Income
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Learn the exact system 10,847 Indians use to generate 
            consistent trading income. Start part-time, scale to freedom.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">89%</span>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Success Rate</p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">10,847+</span>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Active Traders</p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">₹10Cr+</span>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">Student Profits</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
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
              Take the 60-Second Profitability Quiz
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Trust Line */}
            <div className="mt-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">30-Day Money-Back Guarantee</span>
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
    </section>
  );
};

export default HeroSection;