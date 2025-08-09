import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | JSX.Element;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Kya yeh legal hai?",
      answer: "Haan. Hum exchange public APIs aur standard charting use karte hain. Yeh education hai, signals nahi. Results vary."
    },
    {
      question: "Aap share kyu kar rahe ho?",
      answer: "Community aur support ke liye. Aapko recorded modules + monthly live Q&A milta hai."
    },
    {
      question: "Agar profit na ho toh?",
      answer: "30-day satisfaction guarantee on content quality. Performance guarantees nahi."
    },
    {
      question: "Kitni jaldi result milega?",
      answer: "Tools turant samajh aate hain; outcomes practice, risk rules, aur market pe depend karte hain."
    },
    {
      question: "Crypto ke alawa forex pe bhi?",
      answer: "Concepts generalize; examples zyadatar BTC/ETH footprints hain."
    },
    {
      question: "EMI available hai?",
      answer: "Haan, 3–24 months (no-cost EMI where available)."
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
            Frequently Asked <span className="text-gradient">Questions</span>
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
                    <ChevronUp className="text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-cyan-400 flex-shrink-0" />
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
            <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
              <p className="text-lg text-white mb-4">
                Have more questions? Join our monthly live Q&A sessions where we discuss footprint trading in detail.
              </p>
              <a href="#pricing" className="cta-button-primary inline-block">
                Start Learning — ₹34,997
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;