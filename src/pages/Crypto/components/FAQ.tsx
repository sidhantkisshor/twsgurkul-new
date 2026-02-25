import { useState } from "react";
import { Eye, ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data";
import JsonLd, { buildFaqSchema } from "../../../components/StructuredData";

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <JsonLd data={buildFaqSchema(faqs)} />
            <section id="faq" className="crypto-section px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
                <div className="max-w-4xl mx-auto">
                    {/* FAQ */}
                    <div className="space-y-4">
                        <h3 className="text-3xl text-center mb-12">
                            <span className="font-sans font-bold text-[#2C3539]">Frequently Asked</span>{' '}
                            <span className="font-serif italic font-normal text-[#C87533]">Questions</span>
                        </h3>
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-white border border-[rgba(44,53,57,0.08)] border-l-4 border-l-transparent hover:border-l-[#0A8D7A] rounded-xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-panel-${index}`}
                                    className="w-full p-6 text-left flex items-center justify-between transition-all duration-200"
                                >
                                    <div className="flex items-start flex-1">
                                        <Eye className="w-5 h-5 text-[#0A8D7A] mr-3 shrink-0 mt-1" />
                                        <span className="font-semibold text-[#2C3539] text-lg leading-relaxed">
                                            {faq.q}
                                        </span>
                                    </div>
                                    <div className="ml-4 shrink-0">
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-[#0A8D7A] transition-transform duration-200" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-[#0A8D7A] transition-transform duration-200" />
                                        )}
                                    </div>
                                </button>
                                
                                <div
                                    id={`faq-panel-${index}`}
                                    role="region"
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        openIndex === index
                                            ? 'max-h-[800px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <div className="ml-0 sm:ml-8 pr-0 sm:pr-9">
                                            <div className="w-full border-t border-[#C87533]/20 mb-4"></div>
                                            <p className="text-[#2C3539]/80 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ; 