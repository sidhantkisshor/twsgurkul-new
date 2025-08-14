import React, { useState } from 'react';
import { User, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';
import VerificationModal from './VerificationModal';

const TestimonialsSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const mainTestimonials = [
    {
      name: "Arjun M.",
      duration: "6 months with program",
      text: "The footprint charts helped me understand when big players are absorbing vs. distributing. I stopped chasing breakouts and started waiting for clear delta confirmation.",
      artifact: "📊", // Placeholder for blurred footprint chart
      caption: "Now waits for delta confirmation before entries"
    },
    {
      name: "Priya S.",
      duration: "3 months with program",
      text: "Learning to spot liquidity zones changed everything. I used to get stopped out constantly. Now I understand where stops cluster and avoid those trap areas.",
      artifact: "📈", // Placeholder for liquidity zone screenshot
      caption: "Identifies liquidity zones to avoid stop hunts"
    },
    {
      name: "Rahul K.",
      duration: "8 months with program",
      text: "The review process using trade journals has been crucial. Footprint reading takes practice - don't expect instant results. But once it clicks, you'll never trade the same way.",
      artifact: "📝", // Placeholder for journal page
      caption: "Maintains detailed trade journal with footprint notes"
    }
  ];

  const additionalTestimonials = [
    {
      name: "Karthik R.",
      duration: "4 months with program",
      text: "Risk management module was eye-opening. I used to size positions randomly. Now I use footprint data to gauge conviction and size accordingly."
    },
    {
      name: "Anita P.",
      duration: "5 months with program",
      text: "The monthly Q&A sessions are invaluable. Getting real-time chart analysis helps connect theory to practice."
    }
  ];

  return (
    <section id="testimonials" className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Student <span className="text-gradient">Results</span>
          </h2>
          <p className="section-subtitle text-center animate-on-scroll mb-8">
            What students report (varies with practice and market conditions)
          </p>
          
          {/* Main 3 Testimonials with Artifacts */}
          <div className="space-y-6 mb-8">
            {mainTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/60 rounded-xl p-4 sm:p-6 border border-slate-700 animate-on-scroll">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-700 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">{testimonial.name}</h4>
                        <span className="text-xs sm:text-sm text-slate-400">{testimonial.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 italic mb-3">"{testimonial.text}"</p>
                    <p className="text-xs sm:text-sm text-cyan-400 flex items-center gap-2">
                      <CheckCircle size={14} />
                      {testimonial.caption}
                    </p>
                  </div>
                  <div className="md:w-32 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 opacity-50">
                      <span className="text-3xl">{testimonial.artifact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && (
            <div className="text-center mb-8">
              <button
                onClick={() => setShowMore(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-cyan-500/50 transition-colors"
              >
                See More Reviews
                <ChevronDown size={16} />
              </button>
            </div>
          )}

          {/* Additional Testimonials */}
          {showMore && (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {additionalTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mr-3 flex-shrink-0">
                        <User size={16} className="text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                        <span className="text-xs text-slate-400">{testimonial.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
              <div className="text-center mb-8">
                <button
                  onClick={() => setShowMore(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-cyan-500/50 transition-colors"
                >
                  Show Less
                  <ChevronUp size={16} />
                </button>
              </div>
            </>
          )}
          
          {/* Disclaimer and Methodology Link */}
          <div className="text-center mb-8">
            <p className="text-xs text-slate-500 mb-2">
              Results vary. Education only — not investment advice.
            </p>
            <p className="text-xs text-slate-500">
              <button
                onClick={() => setShowVerificationModal(true)}
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                How TWS verifies student feedback →
              </button>
            </p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <button onClick={handlePaymentPopup} className="cta-button-primary inline-block">
              Start Footprint Mastery
            </button>
          </div>
        </div>
      </div>
      
      {/* Verification Modal */}
      <VerificationModal 
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </section>
  );
};

export default TestimonialsSection;