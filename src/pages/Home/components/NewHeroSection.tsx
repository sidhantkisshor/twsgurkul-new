import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Award, Star, Sparkles, ChevronRight, Play, CheckCircle, IndianRupee, Clock, Zap, Target, BookOpen, BarChart3, Crown } from 'lucide-react';

interface NewHeroSectionProps {
  onQuizOpen?: () => void;
}

const NewHeroSection: React.FC<NewHeroSectionProps> = ({ onQuizOpen }) => {
  // Animated counters
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleQuizClick = () => {
    if (onQuizOpen) {
      onQuizOpen();
    }
  };

  // Mini testimonials for social proof
  const testimonials = [
    { name: "Priya S.", profit: "+₹1.2L/month", time: "45 days", avatar: "👩" },
    { name: "Vikram R.", profit: "+₹5L/month", time: "60 days", avatar: "👨" },
    { name: "Arjun K.", profit: "+₹15L/month", time: "90 days", avatar: "👨‍💼" }
  ];

  // Program paths
  const paths = [
    {
      icon: BookOpen,
      name: "Crypto Mastery",
      level: "BEGINNER",
      promise: "₹0 → ₹1.2L/mo",
      duration: "45 days",
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/30"
    },
    {
      icon: BarChart3,
      name: "Footprint Trading",
      level: "INTERMEDIATE",
      promise: "₹1L → ₹5L/mo",
      duration: "60 days",
      color: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/30"
    },
    {
      icon: Crown,
      name: "Elite Mentorship",
      level: "ADVANCED",
      promise: "₹5L → ₹25L/mo",
      duration: "90 days",
      color: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/30"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute top-3/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500/10 rounded-full filter blur-[100px] animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Headline */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-white block mb-2">Your Complete Journey from</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block pb-2">
                Trading Beginner to Market Master
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're starting at zero or scaling to millions, TWS Gurukul has the 
              <span className="text-white font-semibold"> right program</span> for your current level and goals
            </p>
          </div>

          {/* 3 Program Paths */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 animate-fade-in animation-delay-200">
            {paths.map((path, index) => (
              <div 
                key={index}
                className={`relative group glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:${path.glow}`}
              >
                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${path.color} text-white`}>
                    {path.level}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${path.color} flex items-center justify-center mb-4`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{path.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">{path.promise}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">in {path.duration}</span>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">
                        {index === 0 ? '4,200+' : index === 1 ? '3,800+' : '2,847+'} enrolled
                      </span>
                    </div>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Floating Testimonial */}
          <div className="relative mb-12 animate-fade-in animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 rounded-2xl" />
            <div className="glass-effect rounded-2xl p-4 border border-green-500/20 max-w-md mx-auto">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">{testimonials[currentTestimonial].name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">Verified</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-400 font-bold">{testimonials[currentTestimonial].profit}</span>
                    <span className="text-gray-400">in just {testimonials[currentTestimonial].time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[0,1,2].map((dot) => (
                    <div 
                      key={dot} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        dot === currentTestimonial ? 'w-6 bg-green-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-slide-up animation-delay-600">
            <button
              onClick={handleQuizClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <Target className="w-6 h-6" />
              Find Your Perfect Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Takes 2 minutes • Get personalized recommendation
            </p>
          </div>

        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default NewHeroSection;