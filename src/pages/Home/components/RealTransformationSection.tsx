import React, { useState } from 'react';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealTransformationSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const stories = [
    {
      name: "Amit",
      age: 28,
      location: "Mumbai",
      job: "Software Engineer",
      story: {
        before: "I was coding till 2 AM, then losing money till 4 AM. YouTube pe har strategy try ki. Options, futures, crypto... sab mein loss.",
        turning: "Quiz showed I needed evening-only strategies with my IT job schedule.",
        after: "Now I trade only 7-9 PM. Simple system. ₹35K profit last month while keeping my job.",
        time: "3 months ago"
      },
      program: "Crypto Evening System"
    },
    {
      name: "Priya",
      age: 32,
      location: "Delhi",
      job: "Marketing Manager", 
      story: {
        before: "Husband said 'trading is gambling'. I had only ₹40K savings. Scared to lose it.",
        turning: "Quiz matched me with low-capital strategies. No big risks.",
        after: "Started with ₹40K. Now at ₹1.8L. Husband asks ME for trading tips!",
        time: "5 months ago"
      },
      program: "Footprint Mastery"
    },
    {
      name: "Rajesh",
      age: 45,
      location: "Bangalore",
      job: "Business Owner",
      story: {
        before: "Business was slow. Needed extra income. But every course felt like rocket science.",
        turning: "Quiz found I needed simple, part-time strategies. Not complex charts.",
        after: "15 minutes daily. Making more than my business some months. Planning to go full-time.",
        time: "8 months ago"
      },
      program: "Elite Mentorship"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Real people. </span>
              <span className="text-green-400">Real stories.</span>
            </h2>
            <p className="text-xl text-gray-400">
              (Scroll their WhatsApp if you want proof)
            </p>
          </div>

          {/* Story Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === index 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'glass-effect border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {story.name}, {story.age} ({story.location})
              </button>
            ))}
          </div>

          {/* Active Story */}
          <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-white/10 mb-10">
            <div className="space-y-6">
              {/* Before */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">{stories[activeTab].story.time}</span>
                </div>
                <p className="text-gray-400 mb-2 font-medium">BEFORE:</p>
                <p className="text-white text-lg">"{stories[activeTab].story.before}"</p>
              </div>

              {/* Turning Point */}
              <div className="border-l-2 border-green-500/50 pl-4">
                <p className="text-green-400 mb-2 font-medium">THE QUIZ RESULT:</p>
                <p className="text-gray-300">{stories[activeTab].story.turning}</p>
                <p className="text-sm text-gray-500 mt-1">→ Matched with {stories[activeTab].program}</p>
              </div>

              {/* After */}
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                <p className="text-green-400 mb-2 font-medium">TODAY:</p>
                <p className="text-white text-lg">{stories[activeTab].story.after}</p>
              </div>
            </div>

            {/* Job Badge */}
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500">
              <span className="px-3 py-1 bg-white/5 rounded-full">
                {stories[activeTab].job}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10,847</div>
              <p className="text-sm text-gray-500">Success stories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">67 days</div>
              <p className="text-sm text-gray-500">Avg to profit</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">89%</div>
              <p className="text-sm text-gray-500">Success rate</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl text-white mb-6">
              Your story could be next.
              <br />
              <span className="text-gray-400 text-lg">It all starts with knowing your path.</span>
            </p>
            
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <TrendingUp className="w-5 h-5" />
              Start My Success Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealTransformationSection;