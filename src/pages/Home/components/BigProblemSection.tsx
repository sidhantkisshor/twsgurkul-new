import React, { useState } from 'react';
import { AlertCircle, TrendingDown, Clock, IndianRupee, XCircle, ChevronRight, Target, Users } from 'lucide-react';

interface BigProblemSectionProps {
  onQuizOpen?: () => void;
}

const BigProblemSection: React.FC<BigProblemSectionProps> = ({ onQuizOpen }) => {
  const [activeFailure, setActiveFailure] = useState<number | null>(null);

  // Other students with similar stories
  const otherStudents = [
    { name: "Priya", location: "Delhi", age: 26, loss: "₹65,000", emoji: "👩‍💻" },
    { name: "Amit", location: "Mumbai", age: 31, loss: "₹88,000", emoji: "👨‍🎓" }
  ];

  const failurePaths = [
    {
      id: 1,
      icon: TrendingDown,
      title: "Wrong Level",
      cost: "₹35,000",
      time: "3 months",
      problem: "Joined advanced Footprint course as a complete beginner",
      result: "Confused, overwhelmed, gave up after 2 weeks",
      solution: "Stage 1 Foundation First",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      icon: IndianRupee,
      title: "Wrong Capital Strategy",
      cost: "₹25,000",
      time: "2 months",
      problem: "Learned futures trading with only ₹50K capital",
      result: "Account blown in first month, couldn't recover",
      solution: "Capital-Matched Strategies",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      icon: Clock,
      title: "Wrong Time Fit",
      cost: "₹13,000",
      time: "1 month",
      problem: "Full-day live sessions while working 9-to-6 job",
      result: "Missed 80% of sessions, no recordings available",
      solution: "Weekend/Recorded Batches",
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-red-950/5 to-black" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-red-500/10 rounded-full filter blur-[120px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-64 bg-orange-500/10 rounded-full filter blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">The Costly Mistake 97% Make</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                The ₹73,000 Lesson Most Traders
              </span>
              <br />
              <span className="bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Learn Too Late
              </span>
            </h2>
          </div>

          {/* Raj's Story Card */}
          <div className="mb-12 sm:mb-16">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-linear-to-br from-red-950/20 to-orange-950/10">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Story Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Meet Raj from Bangalore</h3>
                      <p className="text-gray-400">Software Engineer, Age 28, Trading Experience: 6 months</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      <span className="text-white font-semibold">"I thought more courses = better results."</span> 
                      <span className="text-red-400"> Big mistake.</span>
                    </p>
                    
                    {/* Timeline with 4 dots */}
                    <div className="my-6 p-4 bg-white/5 rounded-xl">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1 text-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                            <p className="text-xs text-yellow-400">YouTube</p>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-1"></div>
                            <p className="text-xs text-orange-400">Wrong Course</p>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-1"></div>
                            <p className="text-xs text-red-400">Wrong Timing</p>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="w-3 h-3 bg-red-600 rounded-full mx-auto mb-1 animate-pulse"></div>
                            <p className="text-xs text-red-500">Account Wiped</p>
                          </div>
                        </div>
                        <div className="absolute top-1.5 left-6 right-6 h-0.5 bg-linear-to-r from-yellow-500 via-orange-500 to-red-600"></div>
                      </div>
                    </div>
                    
                    <p>
                      Started with YouTube videos. Got confused. Bought a ₹15,000 "Advanced Options" course. 
                      <span className="text-orange-400 font-medium"> Too complex for a beginner.</span> Quit after 2 weeks.
                    </p>
                    
                    <p>
                      Then tried a ₹25,000 "Futures Mastery" program. Problem? 
                      <span className="text-orange-400 font-medium"> Only had ₹50K capital.</span> Account wiped in month 1.
                    </p>
                    
                    <p>
                      Finally, joined ₹33,000 live mentorship. The catch? 
                      <span className="text-orange-400 font-medium"> Sessions at 9 AM while I'm in office.</span> Missed 80% of content.
                    </p>
                    
                    <div className="mt-6 p-4 bg-red-950/30 rounded-xl border border-red-500/20">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Total Investment</p>
                          <p className="text-2xl font-bold text-red-400">₹73,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Time Wasted</p>
                          <p className="text-2xl font-bold text-orange-400">6 Months</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Current P&L</p>
                          <p className="text-2xl font-bold text-red-500">-₹1,23,000</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* The Key Insight */}
                    <div className="mt-6 p-4 bg-green-950/20 rounded-xl border border-green-500/20">
                      <p className="text-lg font-semibold text-white mb-2">
                        💡 The Truth?
                      </p>
                      <p className="text-gray-300">
                        <span className="text-green-400 font-semibold">It's not about more knowledge.</span> It's about the 
                        <span className="text-white font-semibold"> right sequence</span> for YOUR situation. 
                        Right level + Right capital strategy + Right time fit = Success.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Timeline */}
                <div className="lg:w-80">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Raj's Journey</h4>
                  <div className="space-y-3">
                    {failurePaths.map((path, index) => (
                      <div 
                        key={path.id}
                        className="relative"
                        onMouseEnter={() => setActiveFailure(path.id)}
                        onMouseLeave={() => setActiveFailure(null)}
                      >
                        <div className={`
                          p-4 rounded-xl border transition-all duration-300 cursor-pointer
                          ${activeFailure === path.id 
                            ? 'border-red-500/40 bg-linear-to-r ' + path.color + ' bg-opacity-10' 
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                          }
                        `}>
                          <div className="flex items-start gap-3">
                            <div className={`
                              w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                              bg-linear-to-br ${path.color}
                            `}>
                              <path.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-white mb-1">{path.title}</h5>
                              <p className="text-xs text-gray-400 mb-2">{path.problem}</p>
                              <div className="flex items-center gap-3 text-xs">
                                <span className="text-red-400 font-semibold">{path.cost}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-orange-400">{path.time}</span>
                              </div>
                              {/* Always visible solution hint */}
                              <p className="text-[10px] text-green-400/70 mt-2">→ {path.solution}</p>
                            </div>
                          </div>
                          
                          {/* Expanded details on hover */}
                          {activeFailure === path.id && (
                            <div className="mt-3 pt-3 border-t border-white/10">
                              <p className="text-xs text-gray-300 mb-2">
                                <span className="text-red-400 font-semibold">Result:</span> {path.result}
                              </p>
                              <p className="text-xs bg-green-500/10 border border-green-500/30 rounded-sm px-2 py-1">
                                <span className="text-green-400 font-semibold">Our Fix:</span> {path.solution}
                              </p>
                            </div>
                          )}
                        </div>
                        
                        {/* Connector line */}
                        {index < failurePaths.length - 1 && (
                          <div className="absolute left-5 top-full w-0.5 h-3 bg-linear-to-b from-red-500/40 to-transparent" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Others With Similar Stories - With Contrast */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-orange-400" />
              Raj Isn't Alone
            </h3>
            
            {/* Running count banner */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <p className="text-sm">
                  <span className="text-orange-400 font-bold">2,847 traders</span>
                  <span className="text-gray-400"> reported similar stories before finding TWS</span>
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Loss stories */}
              {otherStudents.map((student, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 border border-orange-500/20 bg-linear-to-br from-orange-950/20 to-red-950/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center shrink-0">
                      <span className="text-2xl">{student.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{student.name}, {student.age}</h4>
                      <p className="text-sm text-gray-400 mb-2">{student.location}</p>
                      <p className="text-sm text-gray-300">
                        Same story. Wrong courses, wrong timing, wrong level.
                      </p>
                      <p className="text-lg font-bold text-red-400 mt-2">Lost {student.loss}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* SUCCESS STORY - Emotional flip */}
              <div className="glass-effect rounded-xl p-6 border-2 border-green-500/30 bg-linear-to-br from-green-950/30 to-emerald-950/20 relative overflow-hidden">
                {/* Success badge */}
                <div className="absolute -top-2 -right-2 bg-linear-to-r from-green-500 to-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  After TWS ✨
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center shrink-0">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Arjun, 29</h4>
                    <p className="text-sm text-gray-400 mb-2">Hyderabad • Same background as Raj</p>
                    <p className="text-sm text-green-300 mb-2">
                      Found right sequence. Started with basics. Matched strategy to capital.
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">3 months later:</p>
                      <p className="text-lg font-bold text-green-400">+₹1.2L profit</p>
                      <p className="text-xs text-emerald-400">Consistency: 89% win rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The difference maker */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400">
                The only difference? <span className="text-white font-semibold">Arjun took the quiz first.</span>
              </p>
            </div>
          </div>

          {/* Solution CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                if (onQuizOpen) {
                  onQuizOpen();
                } else {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-2 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              <Target className="w-5 h-5" />
              Find Your Perfect Sequence
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-gray-400">
              Stop the trial-and-error. Get your exact roadmap now.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BigProblemSection;