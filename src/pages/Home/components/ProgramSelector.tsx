import React from 'react';
import { Bitcoin, Eye, Radio, Clock, Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramSelector = () => {
  const programs = [
    {
      id: 'crypto',
      name: 'Crypto Market Mastery',
      icon: Bitcoin,
      tagline: 'The 7-9PM Profit Window™',
      price: '₹19,499',
      originalPrice: '₹1,70,000',
      duration: 'Lifetime Access',
      level: 'Beginner Friendly',
      levelColor: 'text-green-400',
      bestFor: 'Working professionals wanting evening income',
      features: [
        'Trade only 7-9 PM daily',
        'Start with just ₹10,000',
        '73% win rate system',
        '24/7 VIP community'
      ],
      results: '₹5,000 daily profit target',
      students: '1,263+ success stories',
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-600/10',
      href: '/crypto',
      popular: false
    },
    {
      id: 'footprint',
      name: 'Footprint Mastery System',
      icon: Eye,
      tagline: 'See What Whales See',
      price: '₹34,997',
      originalPrice: '₹2,05,000',
      duration: 'Lifetime Access',
      level: 'Intermediate',
      levelColor: 'text-blue-400',
      bestFor: 'Traders seeking institutional edge',
      features: [
        'Track $100K+ whale orders',
        '94.7% win rate method',
        'Live order flow analysis',
        'Personal whale alert bot'
      ],
      results: '₹50-100K/month potential',
      students: '873 profitable traders',
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/10 to-purple-600/10',
      href: '/footprint',
      popular: true
    },
    {
      id: 'elite',
      name: 'ETM MAX Elite Room',
      icon: Radio,
      tagline: 'LIVE 8PM Trading Sessions',
      price: '₹19,999',
      originalPrice: '₹49,999',
      duration: '3 Months LIVE',
      level: 'Advanced',
      levelColor: 'text-purple-400',
      bestFor: 'Mastery graduates ready for live trading',
      features: [
        'Trade LIVE with mentor',
        'Copy exact positions',
        'Max 30 members only',
        'Direct hotline access'
      ],
      results: '₹8K-50K daily progression',
      students: 'Limited to 50 per batch',
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      href: '/mentorship',
      popular: false,
      prerequisite: 'Requires Crypto/Footprint completion'
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Radio className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Choose Your Path</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Prefer to Browse? </span>
              <span className="text-green-400">Compare All Programs</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not ready for the quiz? No problem. Explore all three programs below.
              <br />
              <span className="text-gray-400 text-lg">Each designed by Sidhant for specific goals and experience levels.</span>
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="group relative">
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`glass-effect rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] bg-gradient-to-br ${program.bgGradient}`}>
                  
                  <div className="relative z-10">
                    {/* Icon & Name */}
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${program.color} mb-4`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                      <p className="text-gray-400">{program.tagline}</p>
                      <div className={`inline-flex items-center gap-2 mt-2 text-sm font-medium ${program.levelColor}`}>
                        <div className="w-2 h-2 bg-current rounded-full" />
                        {program.level}
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-sm text-gray-500 mb-1">Perfect for:</p>
                      <p className="text-white font-medium">{program.bestFor}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Results & Students */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{program.results}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{program.students}</span>
                      </div>
                    </div>

                    {/* Price & Duration */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-white">{program.price}</span>
                        <span className="text-lg text-gray-500 line-through">{program.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>

                    {/* Prerequisite Note */}
                    {program.prerequisite && (
                      <div className="mb-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                        <p className="text-xs text-yellow-400">{program.prerequisite}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      to={program.href}
                      className={`w-full bg-gradient-to-r ${program.color} text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg group`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              <span className="text-white font-semibold">Still confused? Let us help you choose.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300"
              >
                <span>Take the 2-Min Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 glass-effect hover:bg-white/10 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <span>Or Call Us Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSelector;