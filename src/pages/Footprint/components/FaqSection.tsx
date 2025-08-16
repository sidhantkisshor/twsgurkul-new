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
      answer: "Haan. Public market data aur standard charting tools. Education only—no tips/signals."
    },
    {
      question: "Kitni jaldi results?",
      answer: "Checklist day-1 se apply hota hai. Consistency practice, risk rules aur market pe depend karti hai."
    },
    {
      question: "Crypto ke alawa kaam karega?",
      answer: "Concepts indices/FX par generalize hote hain; examples BTC/ETH footprints se."
    },
    {
      question: "Calls milenge?",
      answer: (
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5 pointer-events-none">
            <span className="text-white font-bold text-[10px]">TWS</span>
          </div>
          <span>Nahi. Process sikhate hain—planned entries with clear invalidation.</span>
        </div>
      )
    },
    {
      question: "EMI/refund?",
      answer: "EMI 3–24 months where supported. 30-day satisfaction guarantee on content quality."
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
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center gap-2"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-slate-300 text-sm sm:text-base">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
              <p className="text-base sm:text-lg text-white mb-3 sm:mb-4">
                Have more questions? Join our monthly live Q&A sessions in Footprint Mastery.
              </p>
              <a href="#pricing" className="cta-button-primary inline-block">
                Start Footprint Mastery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;