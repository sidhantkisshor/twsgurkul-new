import React from 'react';
import { BookOpen, Award, BarChart4, Layers, Target, Check } from 'lucide-react';

const CourseSection: React.FC = () => {
  return (
    <section id="course" className="section bg-slate-950 relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Introducing: <span className="text-gradient">Footprint Chart Mastery</span>
          </h2>
          <p className="section-subtitle text-center animate-on-scroll">
            World's Only Complete Footprint Trading System
          </p>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12 border border-slate-700 shadow-xl animate-on-scroll">
            <p className="text-lg font-bold mb-6 text-white">
              Everything you've seen so far is just the beginning. Here's your complete roadmap to mastering whale tracking...
            </p>
            <p className="text-lg font-bold mb-6 text-white">
              Stop losing money to smart money manipulation. Start reading their footprints and trading alongside them.
            </p>
            
            <p className="text-xl font-bold mb-6 text-amber-500">
              10 comprehensive modules that take you from retail trader mindset to institutional thinking:
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-800 animate-on-scroll">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                  <BookOpen className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Foundation Modules (1-2):</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Real footprint reading beyond basic volume</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Smart money vs retail money identification</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Market maker psychology decoded</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-800 animate-on-scroll">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                  <Layers className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Advanced Pattern Recognition (3-4):</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Absorption zones mapping techniques</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Manipulation spot identification system</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Institutional accumulation patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-800 animate-on-scroll">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                  <Target className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Strategy Implementation (5-6):</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>SFP (Smart Money Reversal) strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>FRVP (Fair Value Gap) exploitation</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Entry/exit timing perfection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-800 animate-on-scroll">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                  <BarChart4 className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Volume Profile Mastery (7-8):</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Session volume profiling secrets</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Market DNA mapping methodology</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>High-probability zone identification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-800 animate-on-scroll">
              <div className="flex items-start">
                <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Advanced System Integration (9-10):</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>TPO analysis integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Complete trading system framework</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Risk management for consistent profits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <p className="text-lg text-slate-300 mb-4">
              This isn't just another course. This is your complete transformation blueprint.
            </p>
            
            <a href="#pricing" className="cta-button-primary inline-block">
              Secure My Footprint Mastery Access Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;