import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { instructorFeatures } from '../data';

const InstructorSectionSimplified: React.FC = () => {
    const scrollToPricing = () => {
        const element = document.getElementById('pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="about" className="crypto-section bg-[#2C3539] px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <picture>
                        <source srcSet="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT.webp" type="image/webp" />
                        <img
                            src="https://d2j3cl693ttatt.cloudfront.net/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT_compressed.jpg"
                            alt="Sidhant Kisshor - TEDx Speaker, IIT/NIT Guest Faculty"
                            width={400}
                            height={500}
                            className="rounded-xl border border-white/10 shadow-2xl"
                            loading="lazy"
                        />
                    </picture>
                    <div className="absolute bottom-4 left-4 right-4 bg-[#232b2f]/90 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                        <p className="text-base font-bold text-white">Sidhant Kisshor</p>
                        <p className="text-sm text-white/50 mb-2">TEDx Speaker · IIT & NIT Guest Faculty</p>
                        <div className="flex items-center gap-1">
                            <a href="https://www.linkedin.com/in/tradingwithsidhant/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-[#C87533] hover:underline py-3 px-3 min-h-[44px] min-w-[44px]">
                                <ExternalLink className="w-3 h-3" />LinkedIn
                            </a>
                            <a href="https://www.youtube.com/@TradingWithSidhant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-[#C87533] hover:underline py-3 px-3 min-h-[44px] min-w-[44px]">
                                <ExternalLink className="w-3 h-3" />YouTube
                            </a>
                            <a href="https://x.com/sidhantkisshor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-[#C87533] hover:underline py-3 px-3 min-h-[44px] min-w-[44px]">
                                <ExternalLink className="w-3 h-3" />X
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-2xl sm:text-3xl mb-4">
                            <span className="font-sans font-bold text-white">Built on Sidhant's principles — TEDx speaker, IIT/NIT guest faculty, trading since</span>{' '}
                            <span className="font-serif italic font-normal text-[#C87533]">2017</span>
                        </h2>
                        <p className="text-base text-white/60">
                            A recorded system based on his methodology — process, risk management, and daily practice over hype. Monthly live Q&A included.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {instructorFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="p-3 rounded-lg bg-[#0A8D7A]/10 border border-[#0A8D7A]/20 shrink-0">
                                    <feature.icon className="w-5 h-5 text-[#0A8D7A]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-white/50">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        onClick={scrollToPricing}
                        className="group relative px-6 py-3 border border-[#C87533]/40 text-[#C87533] hover:bg-[#C87533]/[0.08] font-semibold rounded-full transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>What's inside the program</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default InstructorSectionSimplified;
