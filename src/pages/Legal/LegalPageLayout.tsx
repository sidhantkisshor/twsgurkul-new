import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { FileText } from 'lucide-react';

export interface LegalSection {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  applies?: string;
  sections: LegalSection[];
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  effectiveDate,
  applies,
  sections,
  children,
}) => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 96; // account for sticky navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Layout>
      <Seo
        title={`${title} | TWS GurukulX`}
        description={`${title} for TWS GurukulX trading education platform by Trading With Sidhant LLP.`}
        canonicalUrl={`https://www.twsgurukul.com/${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      {/* ── Hero header ── */}
      <div className="bg-deep-slate relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #C87533 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #0A8D7A 0%, transparent 40%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-burnt-amber/20 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 sm:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5">
            <FileText className="w-3.5 h-3.5 text-burnt-amber/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-burnt-amber/50">
              Legal · Trading With Sidhant LLP
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-sans font-bold leading-tight mb-5">
            {title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-sans text-soft-sand/60">
            <span>Effective: {effectiveDate}</span>
            {applies && (
              <>
                <span className="w-1 h-1 rounded-full bg-soft-sand/20 hidden sm:block" />
                <span>{applies}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div className="bg-warm-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 xl:gap-20">

            {/* Sticky sidebar — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-deep-slate/30 mb-4">
                  Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick(s.id)}
                      className="block w-full text-left text-[13px] font-sans text-deep-slate/45 hover:text-burnt-amber py-1.5 px-3 rounded-lg hover:bg-burnt-amber/5 transition-all duration-200 leading-snug"
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="min-w-0">
              <div className="legal-content space-y-0">
                {children}
              </div>
            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalPageLayout;

/* ── Section building blocks used by each legal page ── */

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, number, title, children }) => (
  <section id={id} className="scroll-mt-24 py-8 border-b border-deep-slate/[0.07] last:border-0">
    <div className="flex items-baseline gap-4 mb-5">
      <span className="shrink-0 w-8 h-8 rounded-full bg-burnt-amber/10 border border-burnt-amber/20 flex items-center justify-center text-[11px] font-bold text-burnt-amber font-sans">
        {number}
      </span>
      <h2 className="text-lg sm:text-xl font-bold text-deep-slate font-sans leading-snug">
        {title}
      </h2>
    </div>
    <div className="pl-12 space-y-3 text-[15px] leading-relaxed text-deep-slate/65 font-sans">
      {children}
    </div>
  </section>
);

export const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mt-5">
    <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-deep-slate/50 mb-2.5">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

export const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-2 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-burnt-amber/50" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const ContactCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2 p-5 rounded-xl bg-wealth-teal/5 border border-wealth-teal/15">
    <div className="space-y-1 text-deep-slate/70">{children}</div>
  </div>
);

export const WarningBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2 p-4 rounded-lg bg-burnt-amber/[0.06] border-l-2 border-burnt-amber/40 text-deep-slate/70">
    {children}
  </div>
);
