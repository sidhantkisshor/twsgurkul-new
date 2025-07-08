import React from 'react';
import { CheckCircle, TrendingUp, Award, Users } from 'lucide-react';

const TransformationSection: React.FC = () => {
  return (
    <section id="transformation" className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Where I Am Today <span className="text-gradient">(2025)</span>
          </h2>
          <p className="section-subtitle text-center animate-on-scroll">
            From crying at 2 AM to achieving financial freedom and helping others do the same
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <TrendingUp className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">6+ Years of Consistent Profits</h3>
                  <p className="text-slate-300">
                    No more blown accounts. Trading with confidence and consistency using the footprint mastery system.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">90% Student Success Rate</h3>
                  <p className="text-slate-300">
                    Industry-best success rate. No more guesswork, no more blown accounts - just consistent results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <Award className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">TEDx Speaker</h3>
                  <p className="text-slate-300">
                    Presented at IIT Madras & IIT Bombay, sharing the institutional footprint methodology with thousands.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <Users className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">$10M+ Student Profits</h3>
                  <p className="text-slate-300">
                    Real money, real results across all markets. Multiple students have left corporate jobs for full-time trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <p className="text-xl font-bold mb-6">But sabse important: No more 2 AM crying sessions. No more self-doubt.</p>
            <p className="text-2xl text-gradient font-bold">Financial freedom achieved.</p>
            <p className="text-lg text-slate-300 mt-4 italic">What if your story could be the same?</p>
            
            <div className="mt-8">
              <a href="#pricing" className="cta-button-primary inline-block">
                I Want This Transformation Too →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;