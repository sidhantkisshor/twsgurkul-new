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
          <div className="w-6 h-6 rounded-full bg-[#C87533] flex items-center justify-center shrink-0 mt-0.5 pointer-events-none">
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
    <section id="faq" className="section bg-[#3A4449] relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center text-[#EDE6D8] animate-on-scroll">
            Frequently Asked <span className="text-[#C87533]">Questions</span>
          </h2>

          <div className="mt-12">
            {faqs.map((faq, index) => (
              openIndex === index ? (
                <div
                  key={index}
                  className="border-b border-[#2C3539] py-4 border-l-2 border-l-[#0A8D7A] pl-4 animate-on-scroll"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-[#EDE6D8] font-medium">{faq.question}</h3>
                    <ChevronUp className="w-5 h-5 text-[#C87533]" />
                  </div>
                  <div className="mt-3 text-[#B8A99A] text-sm leading-relaxed">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="border-b border-[#2C3539] py-4 cursor-pointer animate-on-scroll"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#EDE6D8] font-medium">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-[#C87533] transition-transform" />
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <div className="bg-[#2C3539] border border-[#0A8D7A]/20 rounded-lg p-4 sm:p-6">
              <p className="text-base sm:text-lg text-[#EDE6D8] mb-3 sm:mb-4">
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
