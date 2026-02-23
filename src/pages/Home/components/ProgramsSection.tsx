import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    level: 'Beginner',
    name: 'Crypto Mastery',
    tagline: 'Go from zero to consistent crypto profits',
    metric: '₹0 → ₹1.2L/mo',
    duration: '45 days',
    students: '4,200+',
    route: '/crypto',
    borderHover: 'hover:border-burnt-amber/30',
  },
  {
    level: 'Intermediate',
    name: 'Footprint Trading',
    tagline: 'Decode institutional order flow',
    metric: '₹1L → ₹5L/mo',
    duration: '60 days',
    students: '3,800+',
    route: '/footprint',
    borderHover: 'hover:border-burnt-amber/30',
  },
  {
    level: 'Advanced',
    name: 'Elite Mentorship',
    tagline: 'Live trading with Sidhant, daily',
    metric: '₹5L → ₹25L/mo',
    duration: '90 days',
    students: '2,847+',
    route: '/mentorship',
    borderHover: 'hover:border-burnt-amber/30',
  },
];

interface ProgramsSectionProps {
  onQuizOpen: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onQuizOpen }) => {
  return (
    <section className="py-24 sm:py-32 px-4 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-deep-slate mb-4">
            Choose your trading path
          </h2>
          <p className="text-base text-deep-slate/60 font-sans max-w-lg mx-auto">
            Every program is designed for a specific stage of your journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {programs.map((program) => (
            <Link
              key={program.name}
              to={program.route}
              className={`group block rounded-2xl border border-deep-slate/10 ${program.borderHover} bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 no-underline`}
            >
              {/* Level */}
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-deep-slate/50 border border-deep-slate/15 rounded-full px-3 py-1 mb-4 font-sans">
                {program.level}
              </span>

              {/* Name */}
              <h3 className="text-xl sm:text-[22px] font-bold text-deep-slate mb-2 font-sans">
                {program.name}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-deep-slate/60 mb-6 font-sans">
                {program.tagline}
              </p>

              {/* Key metric */}
              <div className="text-lg font-bold text-wealth-teal mb-4 font-sans">
                {program.metric}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-[13px] text-deep-slate/40 mb-6 font-sans">
                <span>{program.duration}</span>
                <span>{program.students} students</span>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-medium text-burnt-amber font-sans group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="text-center">
          <p className="text-sm text-deep-slate/50 mb-4 font-sans">
            Not sure which program fits you?
          </p>
          <button
            onClick={onQuizOpen}
            className="group inline-flex items-center gap-2 text-burnt-amber font-medium font-sans text-sm border border-burnt-amber/30 rounded-full px-6 py-3 transition-all duration-300 hover:border-burnt-amber/60 hover:bg-burnt-amber/5"
          >
            Take the 30-Second Quiz
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
