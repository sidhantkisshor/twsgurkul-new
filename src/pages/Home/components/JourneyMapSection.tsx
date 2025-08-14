import React, { useState } from 'react';
import { MapPin, BookOpen, TrendingUp, ChevronRight, Target, Trophy, Star, ArrowRight, Lock, Info } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const JourneyMapSection = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [quizIndicator, setQuizIndicator] = useState(1);
  const [sectionRef, isVisible] = useIntersectionAnimation();

  const stages = [
    {
      id: 1,
      name: "Your First Profitable Month",
      subtitle: "Start with CMM Foundation",
      duration: "8 weeks",
      price: "Take quiz for pricing",
      level: "Beginner",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-950/20 to-cyan-950/10",
      features: [
        "Market basics & fundamentals",
        "Risk-free paper trading"
      ],
      outcomes: [
        "Start earning in 30 days",
        "2-3 hours daily commitment",
        "Average: ₹25K-40K/month"
      ],
      bestFor: "Complete beginners, working professionals, small capital"
    },
    {
      id: 2,
      name: "Scale to ₹1L+ Monthly",
      subtitle: "Master the Footprint",
      duration: "12 weeks",
      price: "Take quiz for pricing",
      level: "Intermediate",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-950/20 to-pink-950/10",
      features: [
        "Institutional order flow",
        "Advanced price action"
      ],
      outcomes: [
        "Scale to full-time trading",
        "4-6 hours daily",
        "Average: ₹80K-1.5L/month"
      ],
      bestFor: "6+ months experience, larger capital, serious traders"
    },
    {
      id: 3,
      name: "Become a Full-Time Pro",
      subtitle: "Elite Trading Mastery",
      duration: "6 months",
      price: "Application only",
      level: "Advanced",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-950/20 to-orange-950/10",
      features: [
        "Live trading with Sidhant",
        "Personal portfolio review"
      ],
      isLocked: true,
      acceptanceRate: "18-25%",
      outcomes: [
        "Professional trader status",
        "Full-time trading",
        "Average: ₹2L-5L/month"
      ],
      bestFor: "Profitable traders, ₹5L+ capital, scaling to pro"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Animation */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Your Personalized Trading Journey</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Clear Path from
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Confusion to Consistency
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Three proven stages. One clear journey. 
              <span className="text-white font-semibold"> You start exactly where the quiz puts you.</span>
            </p>
          </div>

          {/* Journey Visualization */}
          <div className="mb-16">
            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform -translate-y-1/2 rounded-full" />
                
                {/* Stages */}
                <div className="grid grid-cols-3 gap-8 relative">
                  {stages.map((stage, index) => (
                    <div 
                      key={stage.id}
                      className="relative"
                      onMouseEnter={() => setActiveStage(stage.id)}
                      onMouseLeave={() => setActiveStage(null)}
                    >
                      {/* Connection Arrow with Text */}
                      {index < stages.length - 1 && (
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 flex items-center">
                          <span className="text-xs text-gray-500 mr-1">
                            {index === 0 ? 'graduate' : 'scale'}
                          </span>
                          <ChevronRight className="w-8 h-8 text-white/20" />
                        </div>
                      )}
                      
                      {/* Stage Card */}
                      <div className={`
                        relative glass-effect rounded-2xl p-6 border transition-all duration-500
                        ${activeStage === stage.id 
                          ? 'border-white/30 scale-105 shadow-2xl' 
                          : 'border-white/10 hover:border-white/20'
                        }
                        bg-gradient-to-br ${stage.bgColor}
                      `}>
                        {/* Stage Number */}
                        <div className={`
                          absolute -top-4 left-1/2 transform -translate-x-1/2 
                          w-12 h-12 rounded-full flex items-center justify-center
                          bg-gradient-to-br ${stage.color} shadow-lg
                        `}>
                          <span className="text-white font-bold text-lg">{stage.id}</span>
                        </div>
                        
                        {/* Icon with Lock for ETM */}
                        <div className="relative">
                          <div className={`
                            w-16 h-16 rounded-xl mx-auto mb-4 mt-4
                            bg-gradient-to-br ${stage.color} 
                            flex items-center justify-center
                          `}>
                            <stage.icon className="w-8 h-8 text-white" />
                          </div>
                          {(stage as any).isLocked && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                              <Lock className="w-3 h-3 text-black" />
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-2 text-center">
                          {stage.name}
                        </h3>
                        <p className="text-sm text-gray-400 text-center mb-2">
                          {stage.subtitle}
                        </p>
                        {(stage as any).acceptanceRate && (
                          <p className="text-xs text-yellow-400 text-center mb-2">
                            Acceptance ≈ {(stage as any).acceptanceRate}
                          </p>
                        )}
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Duration</p>
                            <p className="text-sm font-semibold text-white">{stage.duration}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Level</p>
                            <p className="text-sm font-semibold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent">
                              {stage.level}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Investment</p>
                            <p className="text-sm font-semibold text-green-400 text-xs">{stage.price}</p>
                          </div>
                        </div>
                        
                        {/* Features - Max 2 */}
                        <div className="space-y-2 mb-4">
                          {stage.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-gradient-to-r ${stage.color} mt-2 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Expanded Content on Hover */}
                        {activeStage === stage.id && (
                          <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-gray-400 mb-2">Expected Outcomes:</p>
                              {stage.outcomes.map((outcome, idx) => (
                                <div key={idx} className="flex items-start gap-2 mb-1">
                                  <Star className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300">{outcome}</span>
                                </div>
                              ))}
                            </div>
                            <div className="p-3 rounded-lg bg-white/5">
                              <p className="text-xs text-gray-400">
                                <span className="font-semibold text-white">Best for:</span> {stage.bestFor}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
              <div className="space-y-6">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="relative">
                    {/* Connector Line */}
                    {index < stages.length - 1 && (
                      <div className="absolute top-full left-1/2 w-0.5 h-6 bg-gradient-to-b ${stage.color} transform -translate-x-1/2" />
                    )}
                    
                    {/* Stage Card */}
                    <div className={`
                      glass-effect rounded-2xl p-6 border border-white/10
                      bg-gradient-to-br ${stage.bgColor}
                    `}>
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`
                          w-12 h-12 rounded-xl flex-shrink-0
                          bg-gradient-to-br ${stage.color} 
                          flex items-center justify-center
                        `}>
                          <span className="text-white font-bold">{stage.id}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {stage.name}
                          </h3>
                          <p className="text-xs text-gray-400">
                            {stage.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      {/* Info Grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-white/10">
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="text-sm font-semibold text-white">{stage.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Level</p>
                          <p className="text-sm font-semibold text-white">{stage.level}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Price</p>
                          <p className="text-xs font-semibold text-green-400">{stage.price}</p>
                        </div>
                      </div>
                      
                      {/* Features - Max 2 on mobile */}
                      <div className="space-y-2">
                        {stage.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-gradient-to-r ${stage.color} mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz Placement Indicator */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">The Quiz Places You Perfectly</h3>
                      <p className="text-sm text-gray-400">No guesswork. Start at your ideal level.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuizIndicator(num)}
                        className={`
                          w-10 h-10 rounded-lg font-bold transition-all
                          ${quizIndicator === num 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white scale-110' 
                            : 'bg-white/10 text-gray-400 hover:bg-white/20'
                          }
                        `}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA with Scholarship Note */}
          <div className="text-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'journey_map_cta_click');
                }
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Target className="w-5 h-5" />
              Find Your Perfect Starting Point
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-gray-400">
              2-minute quiz • Get personalized recommendation • ₹15K in bonuses
            </p>
            
            {/* Scholarship Footnote */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Info className="w-4 h-4 text-blue-400" />
              <p className="text-xs text-blue-300">
                Pricing depends on level & batch • <span className="text-blue-400 font-semibold">Scholarships available</span> for deserving candidates
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyMapSection;