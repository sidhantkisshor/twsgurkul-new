import React from 'react';
import { CheckCircle, TrendingUp, Award, Users } from 'lucide-react';

const TransformationSection: React.FC = () => {
  return (
    <section id="transformation" className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            The Shocking Truth: <span className="text-gradient">My $1.2M Screenshot</span>
          </h2>
          <p className="section-subtitle text-center animate-on-scroll">
            From -$127K (suicidal thoughts) to $1.2M profit in 14 months. Here's the PROOF:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <TrendingUp className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">$87K Average Monthly (Last 6 Months)</h3>
                  <p className="text-slate-300">
                    Yesterday: Made $12,847 on ETH pump (saw $5M buy order at $2,750). Today: Up $8,234 on BTC short. Every. Single. Day.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">873 Students Now Banking $10K+/Month</h3>
                  <p className="text-slate-300">
                    Sarah M: "Made $47K last month." David K: "Quit my job after hitting $156K." Michael T: "Wife cried when I showed her $89K profit."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <Award className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Banned From 3 Trading Forums</h3>
                  <p className="text-slate-300">
                    Why? Because I exposed how exchanges manipulate prices. Now Binance wants us shut down. Join before they succeed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <Users className="text-amber-500 mr-4 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">$47M+ Whale Orders Exposed Daily</h3>
                  <p className="text-slate-300">
                    Right now: $3.7M BTC buy wall at $41,250. In 4 hours, it pumps to $43K. My students profit $10K-50K. Others buy the top.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <p className="text-xl font-bold mb-6 text-yellow-400">The Difference? I stopped being whale food and became the predator.</p>
            <p className="text-2xl text-red-400 font-bold">You have 2 choices right now:</p>
            <p className="text-lg text-white mt-4">
              1. Keep losing to whales (97% do this)<br/>
              2. See their orders and profit WITH them (only 873 spots)
            </p>
            
            <div className="mt-8">
              <a href="#pricing" className="cta-button-primary inline-block">
                Show Me The $3.7M Order NOW →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;