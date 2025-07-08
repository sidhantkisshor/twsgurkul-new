import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Bitcoin, Radio } from 'lucide-react';

const programs = [
  {
    id: 'footprint',
    title: 'Footprint Mastery',
    subtitle: 'Institutional Order Flow',
    description: 'Decode market movements by tracking smart money. Learn to read order flow, volume profiles, and institutional footprints.',
    icon: BarChart3,
    link: '/footprint',
    gradient: 'from-blue-500 to-purple-600',
    features: ['Live Market Analysis', 'Volume Profile Trading', 'Order Flow Patterns']
  },
  {
    id: 'crypto',
    title: 'Crypto Mastery',
    subtitle: 'Digital Asset Trading',
    description: 'Navigate the volatile crypto markets with confidence. Master technical analysis, DeFi strategies, and risk management.',
    icon: Bitcoin,
    link: '/crypto',
    gradient: 'from-orange-500 to-red-600',
    features: ['24/7 Market Strategies', 'Altcoin Analysis', 'DeFi Opportunities']
  },
  {
    id: 'superstreams',
    title: 'Super Streams',
    subtitle: 'Live Crypto Trading Streams',
    description: 'Join our live trading streams and make money in real-time. Watch, learn, and trade alongside our experts in private sessions.',
    icon: Radio,
    link: '/superstreams',
    gradient: 'from-green-500 to-emerald-600',
    features: ['Live Trading Signals', 'Real-time Analysis', 'Private Streams']
  }
];

const ProgramsShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Path to Mastery
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're starting fresh or leveling up, we have the perfect program 
            to accelerate your trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              to={program.link}
              className="group relative block"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative glass-effect rounded-3xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300 hover:transform hover:translate-y-[-4px]">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${program.gradient} mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{program.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all duration-300">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;