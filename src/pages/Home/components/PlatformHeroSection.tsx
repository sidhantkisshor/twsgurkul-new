import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Award, ChevronDown, Star, BookOpen, Target } from 'lucide-react';

const PlatformHeroSection = () => {
  // Animated counters
  const [students, setStudents] = useState(0);
  const [profits, setProfits] = useState(0);
  const [programCount] = useState(3);
  
  useEffect(() => {
    // Animate student counter
    const studentTimer = setInterval(() => {
      setStudents(prev => {
        if (prev >= 10847) {
          clearInterval(studentTimer);
          return 10847;
        }
        return prev + 347;
      });
    }, 50);
    
    // Animate profit counter
    const profitTimer = setInterval(() => {
      setProfits(prev => {
        if (prev >= 10.2) {
          clearInterval(profitTimer);
          return 10.2;
        }
        return prev + 0.3;
      });
    }, 50);
    
    return () => {
      clearInterval(studentTimer);
      clearInterval(profitTimer);
    };
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    {
      name: 'Crypto Mastery',
      level: 'Beginner',
      color: 'from-blue-400 to-cyan-400',
      students: '4,200+'
    },
    {
      name: 'Footprint Trading',
      level: 'Intermediate',
      color: 'from-purple-400 to-pink-400',
      students: '3,800+'
    },
    {
      name: 'Elite Mentorship',
      level: 'Advanced',
      color: 'from-orange-400 to-red-400',
      students: '2,847+'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Platform Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">India's Most Comprehensive Trading Education Platform</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
            <span className="block text-white">
              Your Complete Journey from
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trading Beginner to Market Master
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Whether you're starting at zero or scaling to millions, TWS Gurukul has the 
            <span className="text-white font-semibold"> right program</span> for your current level and goals
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {students.toLocaleString()}+
              </div>
              <p className="text-sm text-gray-400 mt-1">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ₹{profits.toFixed(1)} Cr
              </div>
              <p className="text-sm text-gray-400 mt-1">Student Profits</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {programCount}
              </div>
              <p className="text-sm text-gray-400 mt-1">Specialized Programs</p>
            </div>
          </div>

          {/* Program Cards Preview */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {programs.map((program, index) => (
              <div key={index} className="glass-effect rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-white">{program.name}</h3>
                    <p className="text-xs text-gray-400">{program.level}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`} />
                </div>
                <div className="flex items-center gap-1 mt-3">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-300">{program.students} students</span>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="text-center">
            <button
              onClick={scrollToQuiz}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Target className="w-6 h-6" />
              Find Your Perfect Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Takes 2 minutes • Get personalized recommendation • No obligation
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">500+ Hours Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Live Daily Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Certified Programs</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHeroSection;