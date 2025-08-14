import React, { useState } from 'react';
import { Brain, TrendingUp, Users, CheckCircle, Lock, Unlock, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

const SolutionPreviewSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: '01',
      title: 'Psychology Rewiring',
      subtitle: 'Days 1-30',
      description: 'Break your losing patterns with our neuroscience-based trading psychology module',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      results: ['Stop revenge trading', 'Control FOMO', 'Build discipline'],
      stat: '73% reduction in emotional trades'
    },
    {
      number: '02', 
      title: 'Footprint Mastery',
      subtitle: 'Days 31-60',
      description: 'See what institutions are doing with our proprietary order flow analysis',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      results: ['Spot whale moves', 'Read order flow', 'Time entries perfectly'],
      stat: '89% win rate on signals'
    },
    {
      number: '03',
      title: 'Live Implementation',
      subtitle: 'Days 61-90',
      description: 'Trade alongside Sidhant in real-time with your capital and our guidance',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      results: ['Copy live trades', 'Get instant feedback', 'Scale profits'],
      stat: '₹2L average monthly profit'
    }
  ];

  const uniqueMechanism = [
    { label: 'Live Trading', detail: 'Not recordings, actual live markets' },
    { label: 'Small Batches', detail: 'Max 25 students per batch' },
    { label: 'Lifetime Access', detail: 'Community support forever' },
    { label: 'Multi-Market', detail: 'Crypto, Stocks, Forex, Commodities' }
  ];

  return (
    <section id="solution" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[150px]" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">The TWS Method™</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                90-Day Transformation
              </span>
              <span className="text-white"> Path</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The only program that combines <span className="text-white">psychology</span>, 
              <span className="text-white"> institutional strategies</span>, and 
              <span className="text-white"> live mentorship</span> into a proven system
            </p>
          </div>

          {/* 3-Step Framework */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative group transition-all duration-500 ${
                  hoveredStep === index ? 'scale-105' : hoveredStep !== null ? 'scale-95 opacity-60' : ''
                }`}
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/30 h-full">
                  {/* Step Number */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  
                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {step.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stat */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-bold text-green-400">{step.stat}</p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Why This Works */}
          <div className="glass-effect rounded-3xl p-8 border border-white/20 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why TWS Method Works When Others Fail
                </h3>
                <p className="text-gray-400 mb-6">
                  Most courses give you strategies and leave you alone. We rebuild your trading mind first, 
                  then show you institutional secrets, then trade WITH you until you're profitable.
                </p>
                
                <div className="space-y-3">
                  {uniqueMechanism.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-white">{item.label}:</span>
                        <span className="text-gray-400 ml-2">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                {/* Speed to Results */}
                <div className="glass-effect rounded-2xl p-6 border border-green-500/30 bg-gradient-to-br from-green-950/30 to-emerald-950/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-green-400" />
                    <h4 className="text-xl font-bold text-white">Speed to Profit</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Week 1</span>
                      <span className="text-white font-semibold">First winning trade</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Week 2-4</span>
                      <span className="text-white font-semibold">Break even on fees</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Month 2</span>
                      <span className="text-white font-semibold">₹50K+ profit</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Month 3</span>
                      <span className="text-green-400 font-bold">₹2L+ monthly</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500">*Based on average student performance with ₹50K capital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6">
              Ready to see how <span className="text-white font-semibold">2,847 students</span> achieved these results?
            </p>
            <button
              onClick={() => {
                document.getElementById('success')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
            >
              See Real Student Results
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPreviewSection;