import React from 'react';
import { Bitcoin, Eye, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramsShowcase = () => {
  const programs = [
    {
      id: 'crypto',
      name: 'Crypto Evening Profits',
      icon: Bitcoin,
      tagline: 'Perfect for 9-5 professionals',
      price: '₹24,999',
      duration: '30 days',
      bestFor: 'Beginners with evening availability',
      features: [
        'Trade only 7-9 PM daily',
        'Start with just ₹25,000',
        'Simple 3-indicator system',
        'WhatsApp support group'
      ],
      results: '₹15-30K/month average',
      color: 'from-orange-500 to-red-600',
      href: '/crypto'
    },
    {
      id: 'footprint',
      name: 'Footprint Mastery',
      icon: Eye,
      tagline: 'See what big money is doing',
      price: '₹49,999',
      duration: '60 days',
      bestFor: 'Intermediate traders seeking edge',
      features: [
        'Institutional order flow',
        'Advanced chart reading',
        'Live market analysis',
        'Personal mentorship'
      ],
      results: '₹50-100K/month potential',
      color: 'from-blue-500 to-purple-600',
      href: '/footprint'
    },
    {
      id: 'elite',
      name: 'Elite Mentorship',
      icon: Radio,
      tagline: 'Complete transformation',
      price: '₹99,999',
      duration: '90 days',
      bestFor: 'Serious traders ready to go pro',
      features: [
        'All strategies included',
        'Daily live sessions',
        'Direct access to Sidhant',
        '90-day profit guarantee'
      ],
      results: 'Replace your salary',
      color: 'from-green-500 to-emerald-600',
      href: '/mentorship'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Radio className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Our Programs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Three Paths to </span>
              <span className="text-green-400">Trading Success</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each designed for specific needs. Quiz helps you choose.
              <br />
              <span className="text-gray-400 text-lg">Or explore all options below:</span>
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="group relative">
                {/* Card */}
                <div className="glass-effect rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Icon & Name */}
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${program.color} mb-4`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                      <p className="text-gray-400">{program.tagline}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-sm text-gray-500 mb-1">Best for:</p>
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

                    {/* Results */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">Expected results:</p>
                      <p className="text-lg font-semibold text-white">{program.results}</p>
                    </div>

                    {/* Price & Duration */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-2xl font-bold text-white">{program.price}</p>
                        <p className="text-sm text-gray-500">One-time</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-white">{program.duration}</p>
                        <p className="text-sm text-gray-500">Duration</p>
                      </div>
                    </div>

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

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-400">
              <span className="text-white font-semibold">Not sure which one?</span> 
              {' '}The quiz at the top will recommend the best match for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;