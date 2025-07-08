import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
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
            <span className="text-xs sm:text-sm text-gray-300">The Career Transformation Platform</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4">
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              From Salary to
            </span>
            <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Financial Freedom
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Master high-income skills in Trading, Crypto & AI. 
            Replace your 9-5 with automated income streams. 
            Join 5000+ Indians building wealth on their terms.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">87%</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Success Rate</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">5000+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Active Traders</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">3+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Years of Excellence</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link 
              to="/superstreams"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/blog"
              className="glass-effect hover:bg-white/10 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              Explore Free Resources
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 sm:mt-16 px-4">
            <div className="text-xs sm:text-sm text-gray-400 mb-3">Trusted by traders from</div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <span className="text-gray-300 font-medium text-sm sm:text-base">NSE</span>
              <span className="text-gray-300 font-medium text-sm sm:text-base">BSE</span>
              <span className="text-gray-300 font-medium text-sm sm:text-base">MCX</span>
              <span className="text-gray-300 font-medium text-sm sm:text-base">NASDAQ</span>
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