import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Users, TrendingUp, Clock, CheckCircle, Star, IndianRupee } from 'lucide-react';

const EnhancedHeroSection = () => {
  // Real-time enrollment counter
  const [enrolledToday, setEnrolledToday] = useState(47);
  const [totalStudents] = useState(10847);
  const [spotsLeft, setSpotsLeft] = useState(7);
  
  // Animated profit counter
  const [displayProfit, setDisplayProfit] = useState(0);
  const targetProfit = 200000; // ₹2L per month target
  
  // Live enrollment simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setEnrolledToday(prev => prev + Math.floor(Math.random() * 3));
      setSpotsLeft(prev => Math.max(3, prev - 1));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Animate profit counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetProfit / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetProfit) {
        setDisplayProfit(targetProfit);
        clearInterval(timer);
      } else {
        setDisplayProfit(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Trust Bar - Mobile responsive */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">
                <span className="font-bold text-green-400">{enrolledToday}</span> enrolled today
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">
                <span className="font-bold text-white">{totalStudents.toLocaleString()}</span> students
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">30-Day Guarantee</span>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="text-center">
            {/* Transformation Promise */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">
                Go From Losing 
                <span className="text-red-400"> ₹5K/Month</span>
              </span>
              <span className="block mt-2">
                To Earning 
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  {' '}₹{displayProfit.toLocaleString('en-IN')}/Month
                </span>
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-400">
                In Just 90 Days
              </span>
            </h1>

            {/* Subheadline with credibility */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join <span className="text-white font-semibold">Sidhant's proven system</span> that has helped
              <span className="text-green-400 font-bold"> 10,847+ traders</span> generate
              <span className="text-green-400 font-bold"> ₹10.2 Cr in profits</span>
            </p>

            {/* Urgency Banner */}
            {spotsLeft <= 7 && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8">
                <Clock className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-white font-semibold">
                  Only <span className="text-red-400">{spotsLeft} spots</span> left for this batch
                </span>
              </div>
            )}

            {/* Primary CTA */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => scrollToSection('solution')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <TrendingUp className="w-6 h-6" />
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-500">
                No credit card required • Takes 2 minutes • Instant results
              </p>
            </div>

            {/* Social Proof Ticker */}
            <div className="mt-12 py-6 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {/* Recent Success */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Latest Success</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <span className="text-sm">R</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">Rahul from Mumbai</p>
                      <p className="text-xs text-green-400">+₹47K this week</p>
                    </div>
                  </div>
                </div>
                
                {/* Live Students */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Live Now</p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-black" />
                      ))}
                    </div>
                    <span className="text-sm text-white font-semibold">2,384 students online</span>
                  </div>
                </div>
                
                {/* Next Batch */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Next Batch</p>
                  <p className="text-sm font-semibold text-white">Starts Monday</p>
                  <p className="text-xs text-yellow-400">Early bird discount active</p>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-60">
              <img src="/api/placeholder/100/30" alt="CNBC" className="h-6 grayscale hover:grayscale-0 transition-all" />
              <img src="/api/placeholder/100/30" alt="Economic Times" className="h-6 grayscale hover:grayscale-0 transition-all" />
              <img src="/api/placeholder/100/30" alt="Business Standard" className="h-6 grayscale hover:grayscale-0 transition-all" />
              <img src="/api/placeholder/100/30" alt="Mint" className="h-6 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;