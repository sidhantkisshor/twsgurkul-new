import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimpleFinalCTA = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Simple Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">One last thing...</span>
            </h2>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-white font-medium">Listen bhai,</span> I've trained 10,000+ traders. 
                    Seen every mistake. Every success story.
                  </p>
                  <p>
                    The difference? <span className="text-yellow-400">The ones who succeed found their perfect match early.</span> 
                    The ones who failed? Kept jumping between strategies.
                  </p>
                  <p>
                    This quiz isn't magic. It's just data from thousands like you. 
                    <span className="text-green-400 font-medium">2 minutes to save months of confusion.</span>
                  </p>
                  <p className="text-white font-medium">
                    Your choice. But why guess when you can know?
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    - Sidhant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div>
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-5 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/25"
            >
              Okay, Show Me My Path
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">
              Takes 2 minutes • No spam, promise
            </p>
          </div>

          {/* WhatsApp Style Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Questions? WhatsApp us at +91 99999 99999
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleFinalCTA;