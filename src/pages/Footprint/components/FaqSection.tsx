import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | JSX.Element;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Is this legal?",
      answer: "Yes. We use public market data and standard charting tools. Education only, no tips or signals."
    },
    {
      question: "How fast will I see results?",
      answer: "You can apply the checklist from day 1. Consistency depends on practice, risk rules, and market conditions."
    },
    {
      question: "Does it work beyond crypto?",
      answer: "The concepts generalize to indices and FX. Examples use BTC/ETH footprints."
    },
    {
      question: "Will I get trade calls?",
      answer: (
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[#C87533] flex items-center justify-center shrink-0 mt-0.5 pointer-events-none">
            <span className="text-white font-bold text-[10px]">TWS</span>
          </div>
          <span>No. We teach the process: planned entries with clear invalidation levels.</span>
        </div>
      )
    },
    {
      question: "EMI and refund options?",
      answer: "EMI available for 3–24 months where supported. Refunds available within 7 days of purchase if less than 20% of content has been accessed. See our refund policy for full details."
    },
    {
      question: "I'm a complete beginner. Will I understand this?",
      answer: "Yes. Module 1 covers the basics from scratch. No prior footprint experience needed, just basic charting knowledge."
    },
    {
      question: "I don't have much time. How long does it take?",
      answer: "1 hour/day is enough. Modules are self-paced. Watch when you want, practice on weekends. Most students finish in 4-6 weeks."
    },
    {
      question: "Does it work for Indian markets?",
      answer: "The concepts are universal. Examples use BTC/ETH, but footprint reading applies to indices, forex, and commodities as well."
    },
    {
      question: "I've bought courses before and never finished. Why will this be different?",
      answer: "Industry completion rate for online courses is ~15%. Ours is 67%. The difference: monthly live Q&A sessions where Fahad reviews real charts, an active WhatsApp community that keeps you accountable, and a structured 10-module path (not 200 random videos). Most students finish in 4-6 weeks doing just 1 hour/day."
    },
    {
      question: "What if I don't like it?",
      answer: "Refunds are available within 7 days of purchase if less than 20% of the content has been accessed. Email support@tradingwithsidhant.com with your order ID. See our refund policy for full terms."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : "No. We teach the process: planned entries with clear invalidation levels."
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#2C3539] relative">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#EDE6D8] mb-4 animate-on-scroll">
            <span className="font-sans font-bold">Frequently Asked </span>
            <span className="font-serif italic font-normal text-[#C87533]">Questions</span>
          </h2>

          <div className="mt-8 sm:mt-12">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-[#2C3539] py-4 ${openIndex === index ? 'border-l-2 border-l-[#0A8D7A] pl-4' : ''}`}>
                <h3 className="m-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-panel-${index}`}
                    className="w-full flex items-center justify-between cursor-pointer text-left min-h-[52px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C87533] rounded-sm"
                  >
                    <span className="text-[#EDE6D8] font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#C87533] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#C87533] shrink-0 ml-4 transition-transform" />
                    )}
                  </button>
                </h3>
                {openIndex === index && (
                  <div id={`faq-panel-${index}`} role="region" className="mt-3 text-[#B8A99A] text-sm leading-relaxed">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <div className="bg-[#2C3539] border border-[#C87533]/25 border-t-2 border-t-[#C87533] rounded-lg p-4 sm:p-6">
              <p className="text-base sm:text-lg text-[#EDE6D8] mb-3 sm:mb-4">
                Ready to start reading order flow?
              </p>
              <a href="#pricing" className="inline-block bg-[#C87533] hover:bg-[#A85E28] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#C87533]/20 cursor-pointer">
                See pricing → ₹90/day
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
