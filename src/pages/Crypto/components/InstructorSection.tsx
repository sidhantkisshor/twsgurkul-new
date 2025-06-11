import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { instructorFeatures } from '../data';
import { useSmoothScroll } from '../context/SmoothScrollContext';

const InstructorSection: React.FC = () => {
    const { handleSmoothScroll } = useSmoothScroll();

    return (
        <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <picture>
                        <source srcSet="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT.webp" type="image/webp" />
                        <img
                            src="https://twsgurukul.s3.ap-south-1.amazonaws.com/assets/images/Trading%20with%20Sidhant%20TedX%20Speaker%20IIT%20NIT_compressed.jpg"
                            alt="Sidhant Kisshor - TEDx Speaker and trading mentor"
                            className="rounded-xl shadow-2xl shadow-yellow-500/10"
                            loading="lazy"
                        />
                    </picture>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                        <p className="text-lg font-bold text-white">Sidhant Kisshor</p>
                        <p className="text-sm text-yellow-400">Trader, Mentor, TEDx Speaker</p>
                    </div>
                </motion.div>
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold">Meet Your Instructor</h2>
                    <p className="text-slate-300 sm:text-lg">I'm not a guru. I'm a trader who lost money just like you, found a system that works, and now I'm here to share it. No fluff, no false promises. Just a practical path to profitable trading.</p>
                    <div className="space-y-4">
                        {instructorFeatures.map((feature, index) => (
                             <div key={feature.title} className="flex items-start space-x-3">
                                <feature.icon className={`w-6 h-6 mt-1 flex-shrink-0 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-green-400' : 'text-red-400'}`} />
                                <div>
                                    <h4 className="font-semibold">{feature.title}</h4>
                                    <p className="text-sm text-slate-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={(e) => handleSmoothScroll(e, 'curriculum')} className="group flex items-center justify-center space-x-2 w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold rounded-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all">
                        <span>See My Exact Trading System</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default InstructorSection; 