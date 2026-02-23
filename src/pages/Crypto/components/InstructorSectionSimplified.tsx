import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { instructorFeatures } from '../data';

const InstructorSectionSimplified: React.FC = () => {
    const scrollToPricing = () => {
        const element = document.getElementById('pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
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
                            alt="Sidhant - TEDx Speaker and IIT/NIIT Trainer"
                            className="rounded-lg border-2 border-[#B8956A]/40 shadow-2xl"
                            loading="lazy"
                        />
                    </picture>
                    <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5] border border-[rgba(44,53,57,0.08)] rounded-xl p-4">
                        <p className="text-lg font-bold text-[#2C3539]">Sidhant Kisshor</p>
                        <p className="text-sm text-[#111111]/70">TEDx Speaker • IIT & NIT Guest Faculty</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            <span className="text-[#2C3539]">Meet Sidhant —</span>{' '}
                            <span className="text-[#C87533]">
                                TEDx speaker, IIT/NIT guest faculty, trading since 2017
                            </span>
                        </h2>
                        <p className="text-lg text-[#111111]/70">
                            Recorded program + monthly live Q&A. Process, risk, and practice over hype.
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
                                <div className={`p-3 rounded-lg ${feature.bgColor} shrink-0`}>
                                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#2C3539] mb-1">{feature.title}</h3>
                                    <p className="text-sm text-[#111111]/70">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.button
                        onClick={scrollToPricing}
                        className="group relative px-6 py-3 border-2 border-[#0A8D7A] text-[#0A8D7A] hover:underline font-semibold rounded-full transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>What I teach inside</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default InstructorSectionSimplified;