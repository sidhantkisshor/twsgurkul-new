import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | JSX.Element;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Do I need to be an experienced trader to understand this course?",
      answer: (
        <>
          We recommend having some trading experience before joining this program. Complete beginners should start with our{' '}
          <a href="https://tradingwithsidhant.com/programs/cohort24rec" className="text-amber-500 hover:text-amber-400 underline">
            45-day recorded beginner program
          </a>{' '}
          first.
        </>
      )
    },
    {
      question: "How is this different from other trading courses?",
      answer: "Most courses focus on basic technical analysis and indicators that the institutions already manipulate. This system teaches you to read the institutional footprints directly - seeing exactly where smart money is accumulating and where they plan to move the market."
    },
    {
      question: "Do I get lifetime access to the course?",
      answer: "Yes, you get lifetime access to all 10 modules plus any future updates we make to the course content."
    },
    {
      question: "How long will it take to see results?",
      answer: "Most students start seeing significant improvements in their trading within 4-6 weeks of consistent practice with the system. However, results vary based on individual dedication and market conditions."
    },
    {
      question: "What markets can I apply this system to?",
      answer: "The Footprint Mastery System works across all markets - stocks, forex, crypto, commodities, and futures. The institutional footprints we teach you to identify exist in every market where there are big players."
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
            <p className="text-lg text-slate-300 mb-6">
              Still have questions? Feel free to reach out.
            </p>
            <a href="mailto:support@tradingwithsidhant.com" className="text-amber-500 hover:underline">
              support@tradingwithsidhant.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;