import React, { useState, useEffect } from 'react';
import { Target, Clock, IndianRupee, TrendingUp, Sparkles, CheckCircle, ArrowRight, Star, Play, Volume2 } from 'lucide-react';
import { useIntersectionAnimation, useCounterAnimation } from '../../../utils/animations';

const WhyQuizSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [captionLanguage, setCaptionLanguage] = useState<'hindi' | 'english'>('english');
  const [sectionRef, isVisible] = useIntersectionAnimation();
  
  const stats = [
    { value: "89%", label: "Success Rate", color: "text-green-400" },
    { value: "2 min", label: "To Complete", color: "text-blue-400" },
    { value: "₹15K", label: "In Bonuses", color: "text-purple-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const matchingPoints = [
    {
      icon: Clock,
      title: "Matches Your Schedule",
      subtitle: "Job/Family? No Problem",
      description: "Morning trader? Evening learner? Get strategies that fit YOUR daily routine",
      gradient: "from-blue-500 to-cyan-500",
      examples: ["9-to-6 job friendly", "Weekend batches", "Recorded sessions"]
    },
    {
      icon: IndianRupee,
      title: "Optimizes Your Capital",
      subtitle: "₹10K or ₹10L",
      description: "Different capital needs different strategies. We match you perfectly",
      gradient: "from-green-500 to-emerald-500",
      examples: ["Small account strategies", "Scale-up roadmap", "Risk management"]
    },
    {
      icon: TrendingUp,
      title: "Matches Your Experience",
      subtitle: "Beginner to Advanced",
      description: "Skip the confusion. Start exactly where you should",
      gradient: "from-purple-500 to-pink-500",
      examples: ["Zero to hero path", "Fill knowledge gaps", "Advanced techniques"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-green-500/5 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[120px]" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header with Animation */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">The Smart Shortcut</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                89% of TWS Quiz-Takers
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Become Profitable
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Because we match you with the <span className="text-white font-semibold">exact path</span> that fits your life
            </p>
          </div>

          {/* Animated Stats Bar */}
          <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-effect rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      currentStat === index ? 'scale-110' : 'scale-100 opacity-70'
                    }`}
                  >
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* No Spam Microcopy */}
            <p className="text-xs text-gray-500 mt-3">
              ✓ No spam • ✓ No sales calls before results • ✓ 100% free
            </p>
          </div>

          {/* Blurred Quiz Screenshots Strip */}
          <div className="mb-8 overflow-hidden">
            <div className="flex items-center justify-center gap-4">
              {/* Quiz Step Screenshots - Blurred for curiosity */}
              <div className="flex gap-4 opacity-60">
                <div className="relative">
                  <div className="w-32 h-20 sm:w-40 sm:h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 filter blur-sm">
                    <div className="p-2">
                      <div className="h-1 bg-green-400/30 rounded mb-2"></div>
                      <div className="h-2 bg-gray-700 rounded mb-1"></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Step 1</p>
                </div>
                
                <div className="relative">
                  <div className="w-32 h-20 sm:w-40 sm:h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 filter blur-sm">
                    <div className="p-2">
                      <div className="h-1 bg-green-400/50 rounded mb-2"></div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-8 bg-gray-700 rounded"></div>
                        <div className="h-8 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Step 3</p>
                </div>
                
                <div className="relative">
                  <div className="w-32 h-20 sm:w-40 sm:h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 filter blur-sm">
                    <div className="p-2">
                      <div className="h-1 bg-green-400 rounded mb-2"></div>
                      <div className="h-8 bg-green-600/30 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-400/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Results</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              👆 Actual quiz interface (5 simple questions)
            </p>
          </div>

          {/* Video Explainer */}
          <div className="mb-12 sm:mb-16">
            <div className="max-w-2xl mx-auto">
              <div 
                className="relative glass-effect rounded-2xl overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 cursor-pointer group"
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => setIsVideoHovered(false)}
                onClick={() => {
                  // Video play functionality would go here
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'quiz_explainer_video_click');
                  }
                }}
              >
                <div className="aspect-video relative">
                  {/* Video Thumbnail Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-emerald-900/50 to-green-900/50" />
                  
                  {/* Sidhant Avatar */}
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-xl">👨‍🏫</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Sidhant Explains</p>
                      <p className="text-xs text-gray-300">15 seconds • No fluff</p>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center transition-all duration-300 ${
                      isVideoHovered ? 'scale-110 bg-white/30' : 'scale-100'
                    }`}>
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-lg font-bold text-white mb-2">
                      "Why This Quiz is FREE & How It Works"
                    </h4>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Volume2 className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Hindi + English</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">15 sec</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 text-white text-xs font-semibold">
                    0:15
                  </div>
                </div>
              </div>
              
              {/* Language Toggle */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <p className="text-sm text-gray-400">Captions:</p>
                <div className="flex bg-gray-800 rounded-full p-1">
                  <button
                    onClick={() => setCaptionLanguage('hindi')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      captionLanguage === 'hindi' 
                        ? 'bg-green-500 text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => setCaptionLanguage('english')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      captionLanguage === 'english' 
                        ? 'bg-green-500 text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-400 mt-3">
                <span className="text-green-400">📺 12,384 views</span> • 
                <span className="ml-2">98% found this helpful</span>
              </p>
            </div>
          </div>

          {/* Matching Points Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {matchingPoints.map((point, index) => (
              <div 
                key={index}
                className="group relative glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <point.icon className="w-full h-full text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {point.title}
                </h3>
                <p className="text-sm font-semibold bg-gradient-to-r ${point.gradient} bg-clip-text text-transparent mb-3">
                  {point.subtitle}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {point.description}
                </p>
                
                {/* Examples */}
                <div className="space-y-2">
                  {point.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Micro-Proof Success Story */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 relative">
                {/* Verification Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <CheckCircle className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-blue-400">Result verified on 28 Dec</span>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  {/* Avatar and Rating */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-3">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="flex-1">
                    {/* Professional Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800 border border-gray-700 text-xs">
                        <span className="text-gray-400">💼</span>
                        <span className="text-gray-300">IT Professional, Delhi</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800 border border-gray-700 text-xs">
                        <span className="text-gray-400">🌙</span>
                        <span className="text-gray-300">Evening Learner</span>
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-green-400 text-4xl leading-none">"</span>
                      <div>
                        <p className="text-gray-300 mb-3">
                          <span className="text-white font-semibold">Quiz showed me CMM was perfect for my ₹50K capital.</span> Started 
                          with paper trading for 2 weeks as suggested. First real month? 
                          <span className="text-green-400 font-bold"> ₹58,420 profit.</span> No confusion, no wasted time. 
                          Just the right path from day 1.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-white font-semibold">Ankit Sharma</span>
                          <span className="text-gray-500">•</span>
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                            CMM Graduate
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-xs text-gray-500">ROI: 116% in Month 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-center">
                    <div>
                      <p className="text-xs text-gray-500">Day 1</p>
                      <p className="text-sm font-semibold text-white">Took Quiz</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Day 2</p>
                      <p className="text-sm font-semibold text-blue-400">Joined CMM</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Week 3-4</p>
                      <p className="text-sm font-semibold text-yellow-400">Paper Trading</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Month 2</p>
                      <p className="text-sm font-semibold text-green-400">₹58K Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'why_quiz_cta_click');
                }
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/30 hover:scale-105"
            >
              <Target className="w-6 h-6" />
              Get Your Personalized Trading Path
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="mt-4 text-sm text-gray-400">
              Takes only 2 minutes • No email required to start
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyQuizSection;