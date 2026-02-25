import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart3, Crown } from 'lucide-react';
import { useIntersectionAnimation } from '../../../utils/animations';

const programs = [
  {
    icon: BookOpen,
    level: 'Beginner',
    name: 'Crypto Mastery',
    tagline: 'Start earning from crypto in 45 days -even with zero experience',
    metric: '₹0 → ₹1.2L/mo',
    duration: '45 days',
    students: '4,200+',
    route: '/crypto',
    accent: '#3b82f6', // blue
    testimonial: '"I made ₹87,000 in my first month after the course." -Rahul, Pune',
  },
  {
    icon: BarChart3,
    level: 'Intermediate',
    name: 'Footprint Trading',
    tagline: 'See where big money is moving -and trade before the crowd',
    metric: '₹1L → ₹5L/mo',
    duration: '60 days',
    students: '3,800+',
    route: '/footprint',
    accent: '#8b5cf6', // purple
    testimonial: '"Footprint changed how I see charts. My win rate jumped to 73%." -Priya, Mumbai',
  },
  {
    icon: Crown,
    level: 'Advanced',
    name: 'Elite Mentorship',
    tagline: 'Trade live with pro coaches every day. Your P&L will never be the same',
    metric: '₹5L → ₹25L/mo',
    duration: '90 days',
    students: '2,847+',
    route: '/mentorship',
    accent: '#C87533', // burnt amber
    testimonial: '"Best investment I ever made. Earning ₹8L/month consistently now." -Vikram, Delhi',
  },
];

interface ProgramsSectionProps {
  onQuizOpen: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onQuizOpen }) => {
  const [ref, visible] = useIntersectionAnimation(0.15);

  return (
    <section ref={ref} className="relative py-12 sm:py-20 lg:py-24 px-4 bg-warm-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2C3539 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-deep-slate mb-5">
            <span className="font-sans font-bold">Pick your </span>
            <span className="font-serif italic font-normal text-burnt-amber">profit level</span>
          </h2>
          <p className="text-base sm:text-lg text-deep-slate/50 font-sans max-w-lg mx-auto leading-relaxed">
            Three programs. Three income levels. Pick where you want to be in 30 days.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7 mb-14">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.name}
                to={program.route}
                className="group block rounded-2xl bg-white border border-deep-slate/[0.06] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(44,53,57,0.12)] no-underline"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${200 + i * 120}ms`,
                }}
              >
                {/* Top row: icon + level */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${program.accent}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: program.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full font-sans"
                    style={{
                      color: program.accent,
                      backgroundColor: `${program.accent}10`,
                    }}
                  >
                    {program.level}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[22px] font-bold text-deep-slate mb-2 font-sans leading-tight">
                  {program.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-deep-slate/50 mb-6 font-sans leading-relaxed">
                  {program.tagline}
                </p>

                {/* Key metric -highlighted */}
                <div className="bg-warm-white rounded-xl px-4 py-3 mb-5 border border-deep-slate/[0.04]">
                  <div className="text-[11px] text-deep-slate/35 uppercase tracking-wider font-sans mb-1">
                    Earning potential
                  </div>
                  <div className="text-xl font-bold font-sans" style={{ color: program.accent }}>
                    {program.metric}
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between text-[13px] text-deep-slate/35 mb-4 font-sans">
                  <span>{program.duration}</span>
                  <span>{program.students} students</span>
                </div>

                {/* Micro testimonial */}
                <div className="bg-deep-slate/[0.02] rounded-lg px-3 py-2.5 mb-5 border border-deep-slate/[0.04]">
                  <p className="text-[13px] text-deep-slate/45 font-sans leading-relaxed italic">
                    {program.testimonial}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold font-sans group-hover:gap-3 transition-all duration-300"
                  style={{ color: program.accent }}
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quiz CTA */}
        <div
          className="text-center transition-all duration-700 ease-out delay-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <p className="text-sm text-deep-slate/40 mb-4 font-sans">
            Not sure which program will make you profitable?
          </p>
          <button
            onClick={onQuizOpen}
            className="group inline-flex items-center gap-2.5 text-burnt-amber font-semibold font-sans text-sm border-2 border-burnt-amber/25 rounded-full px-7 py-3 transition-all duration-300 hover:border-burnt-amber/50 hover:bg-burnt-amber/[0.04] hover:shadow-[0_0_30px_rgba(200,117,51,0.08)]"
          >
            Which Program Will Make Me Profitable?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProgramsSection);
