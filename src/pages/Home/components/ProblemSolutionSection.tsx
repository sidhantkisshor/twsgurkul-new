import React from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, XCircle, Target } from 'lucide-react';

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Wrong Program = Lost Money",
      description: "Join advanced course as beginner = Confused & overwhelmed",
      stat: "₹73,000",
      statLabel: "Average loss"
    },
    {
      icon: TrendingDown,
      title: "Information Overload",
      description: "YouTube videos + Random courses = No clear strategy",
      stat: "97%",
      statLabel: "Fail rate"
    },
    {
      icon: AlertTriangle,
      title: "Time Mismatch",
      description: "Full-day programs when you only have evenings = Give up",
      stat: "30 days",
      statLabel: "Until quitting"
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Perfect Program Match",
      description: "Strategy matches your experience, capital & schedule",
      stat: "89%",
      statLabel: "Success rate"
    },
    {
      icon: TrendingUp,
      title: "Personalized Roadmap",
      description: "Step-by-step plan designed for YOUR specific goals",
      stat: "₹47K/mo",
      statLabel: "Avg profit by month 3"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Results",
      description: "Right program + Right mentor = Consistent profits",
      stat: "2,347",
      statLabel: "Success stories"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm text-red-400 font-medium">The Costly Mistake 97% Make</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">
              Choosing the Wrong Program
            </span>
            <span className="block mt-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Costs More Than Money
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Most traders randomly pick courses based on price or hype. 
            <br className="hidden sm:block" />
            <span className="text-yellow-400 font-semibold">That's why 97% fail within 90 days.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Problems Column */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              What Happens When You Choose WRONG
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-5 border border-red-500/20 hover:border-red-500/30 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10">
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{problem.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">{problem.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-red-400">{problem.stat}</span>
                        <span className="text-sm text-gray-500">{problem.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Impact */}
            <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-center">
                <span className="text-sm text-red-400">Total Impact:</span>
                <br />
                <span className="text-2xl font-bold text-white">₹73,000 lost + 6 months wasted</span>
              </p>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              What Happens With PERFECT Match
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-5 border border-green-500/20 hover:border-green-500/30 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10">
                      <solution.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{solution.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">{solution.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-green-400">{solution.stat}</span>
                        <span className="text-sm text-gray-500">{solution.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Benefit */}
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-center">
                <span className="text-sm text-green-400">Your Result:</span>
                <br />
                <span className="text-2xl font-bold text-white">₹47K/month profit + Lifetime skill</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            <span className="text-yellow-400 font-semibold">The difference?</span> 
            {' '}A personalized approach based on YOUR profile.
          </p>
          <a
            href="/quiz"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            <Target className="w-5 h-5" />
            Find My Perfect Trading Program
            <span className="text-sm opacity-80">(2-min quiz)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;