import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | JSX.Element;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Is this legal? It sounds too good to be true...",
      answer: (
        <>
          100% legal but exchanges HATE it. We use publicly available order book data that whales can't hide. Binance already removed 2 similar services. That's why we're limiting to 50 people - once they shut us down, it's over. <span className="text-red-400 font-bold">Join now or lose this forever.</span>
        </>
      )
    },
    {
      question: "Why are you sharing this if it makes so much money?",
      answer: "I already made $1.2M. Now I want revenge on the system that almost destroyed me. Every trader who joins means one less victim for whale manipulation. Plus, Binance is forcing us to shut down soon - might as well help 50 people escape the matrix first."
    },
    {
      question: "What if I don't make money?",
      answer: "Impossible. 873 students, 94.7% win rate. If you somehow fail (you won't), you get DOUBLE your money back. That's a $994 refund on your $497 investment. I'm that confident because I KNOW this works."
    },
    {
      question: "How fast will I see whale orders?",
      answer: "INSTANTLY. The moment you activate your account, you'll see live $100K+ orders on BTC/ETH. Most students make their first $1K profit within 24 hours. Sarah M. made $8,400 on her FIRST trade using our whale detection system."
    },
    {
      question: "Does this work on crypto AND forex?",
      answer: "YES. Works best on BTC, ETH, EUR/USD, GBP/USD - anywhere whales manipulate. Yesterday: $3.7M BTC order spotted at $41,250 (pumped to $43K). Today: €50M EUR buy wall building. My students are PRINTING money 24/7."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-slate-950 relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Your Doubts <span className="text-gradient">(I Had Them Too)</span>
          </h2>
          
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden animate-on-scroll"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-amber-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-amber-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-slate-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="text-xl font-bold text-red-400 mb-3">
                🚨 FINAL WARNING: Only 7 Spots Left
              </p>
              <p className="text-lg text-white mb-4">
                Once we hit 50 members, we MUST close registration. Binance's legal team is already pressuring us.
              </p>
              <a href="#pricing" className="cta-button-primary inline-block">
                Secure My Spot Before It's Gone Forever →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;