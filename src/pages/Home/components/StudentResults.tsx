import React from 'react';
import { Star, TrendingUp, Calendar } from 'lucide-react';
import LiveResultsTicker from './LiveResultsTicker';

const StudentResults = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      program: 'Crypto Mastery',
      profit: '₹2.4 Lakhs',
      duration: '4 months',
      review: 'Started with just ₹25K. The evening sessions fit perfectly with my IT job. Now making consistent ₹15-20K weekly.',
      rating: 5,
      verified: true
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      program: 'Footprint System',
      profit: '₹5.7 Lakhs',
      duration: '6 months',
      review: 'The whale tracking system is incredible! I can see exactly what big players are doing. Quit my job last month.',
      rating: 5,
      verified: true
    },
    {
      name: 'Amit Patel',
      location: 'Delhi',
      program: 'Elite Mentorship',
      profit: '₹12.3 Lakhs',
      duration: '3 months',
      review: 'Live trading with Sidhant changed everything. Copying his exact trades, I made back my fees in week 1!',
      rating: 5,
      verified: true
    },
    {
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      program: 'Crypto Mastery',
      profit: '₹1.8 Lakhs',
      duration: '3 months',
      review: 'As a housewife, the flexibility is perfect. Trade 2 hours daily and already recovered my investment.',
      rating: 5,
      verified: true
    },
    {
      name: 'Vikram Singh',
      location: 'Pune',
      program: 'Footprint System',
      profit: '₹7.2 Lakhs',
      duration: '8 months',
      review: 'Professional trader for 2 years but was stuck. Footprint analysis took me to the next level. ₹1L+ months now!',
      rating: 5,
      verified: true
    },
    {
      name: 'Anita Gupta',
      location: 'Chennai',
      program: 'Elite Mentorship',
      profit: '₹9.6 Lakhs',
      duration: '2 months',
      review: 'The personal attention in Elite room is unmatched. Direct hotline saved me from huge losses multiple times.',
      rating: 5,
      verified: true
    }
  ];

  const stats = [
    { label: 'Total Student Profits', value: '₹10.2 Cr+', color: 'text-green-400' },
    { label: 'Average ROI', value: '387%', color: 'text-yellow-400' },
    { label: 'Success Stories', value: '10,847+', color: 'text-blue-400' },
    { label: 'Profit/Loss Ratio', value: '89:11', color: 'text-purple-400' }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Real Results</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">10,847+ Success Stories </span>
              <span className="text-green-400">and Counting</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day, our students share their wins. Here are just a few from this month.
              <br />
              <span className="text-gray-400 text-lg">All results are verified and documented.</span>
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-xl p-4 text-center border border-white/10">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Verified</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Program Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium mb-3">
                  {testimonial.program}
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm mb-4 italic">
                  "{testimonial.review}"
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{testimonial.profit}</span>
                    </div>
                    <p className="text-xs text-gray-500">Total Profit</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{testimonial.duration}</span>
                    </div>
                    <p className="text-xs text-gray-500">Time Period</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Results Ticker */}
          <LiveResultsTicker />


        </div>
      </div>
    </section>
  );
};

export default StudentResults;