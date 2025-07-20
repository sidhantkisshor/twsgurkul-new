import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Award, CheckCircle, Shield, Target, TrendingUp, Zap } from 'lucide-react';
import { curriculumModules, learningPath } from '../data';
import { LearningPhase } from '../types';

const phaseColorMap: { [key in LearningPhase['color']]: string } = {
    yellow: 'bg-yellow-500/20 text-yellow-400 border-slate-800',
    green: 'bg-green-500/20 text-green-400 border-slate-800',
    blue: 'bg-blue-500/20 text-blue-400 border-slate-800',
    purple: 'bg-purple-500/20 text-purple-400',
    pink: 'bg-pink-500/20 text-pink-400',
    indigo: 'bg-indigo-500/20 text-indigo-400',
};

const moduleIcons = [Shield, BarChart3, Target, Zap, Award, TrendingUp];

const CurriculumSection: React.FC = () => {
    const [showCurriculumDetails, setShowCurriculumDetails] = useState(false);

    return (
        <section id="curriculum" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                        Your <span className="text-yellow-400">30-Day Journey</span>
                        <br />
                        <span>from Novice to Pro</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300">
                        A step-by-step curriculum to <br /> build your skills and confidence.
                    </p>
                </motion.div>

                <div className="space-y-8 mb-12">
                    {learningPath.map((phase, index, arr) => (
                        <div key={phase.title} className="relative">
                            {index < arr.length - 1 && (
                                <div className="absolute left-8 top-16 h-[75%] w-0.5 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                            )}
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${phaseColorMap[phase.color]} rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4`}>
                                    <phase.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <div className="flex-1 bg-slate-800 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-yellow-400 mb-1">{phase.week}</h3>
                                    <h4 className="text-base font-semibold mb-2">{phase.title}</h4>
                                    <p className="text-sm text-slate-400">{phase.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-8">
                    <button
                        onClick={() => setShowCurriculumDetails(!showCurriculumDetails)}
                        className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center space-x-2 mx-auto"
                        aria-expanded={showCurriculumDetails}
                        aria-controls="detailed-curriculum"
                    >
                        <span>{showCurriculumDetails ? 'Hide' : 'View'} Detailed Curriculum</span>
                        <ArrowRight className={`w-5 h-5 transform transition-transform ${showCurriculumDetails ? 'rotate-90' : ''}`} />
                    </button>
                </div>

                {showCurriculumDetails && (
                    <div id="detailed-curriculum" className="space-y-4">
                        {curriculumModules.map((module, index) => {
                            const colors = ["blue", "yellow", "green", "purple", "pink", "indigo"];
                            const color = colors[index % colors.length];
                            const IconComponent = moduleIcons[index % moduleIcons.length];

                            return (
                                <motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={`bg-slate-800/50 rounded-xl p-4 sm:p-6 border-l-4 border-${color}-400`}>
                                        <div className="flex items-start space-x-4">
                                            <IconComponent className={`w-8 h-8 text-${color}-400 mt-1 flex-shrink-0`} />
                                            <div className="flex-1">
                                                <p className="text-xs text-slate-400 font-semibold">MODULE {index + 1}</p>
                                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{module.title}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3">
                                                    {module.items.map((item) => (
                                                        <div key={item} className="flex items-center space-x-2 text-xs sm:text-sm">
                                                            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                                                            <span className="text-slate-300">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CurriculumSection; 