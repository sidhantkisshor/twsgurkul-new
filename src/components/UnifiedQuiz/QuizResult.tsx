import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Share2, MessageCircle, Link2 } from 'lucide-react';
import type { ProgramResult, ResultTestimonial } from './types';

interface QuizResultProps {
  result: ProgramResult;
  bullets: string[];
  testimonial: ResultTestimonial;
  onNavigate?: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  result,
  bullets,
  testimonial,
  onNavigate,
}) => {
  const navigate = useNavigate();
  const [linkCopied, setLinkCopied] = React.useState(false);
  const copyTimerRef = React.useRef<number | null>(null);
  React.useEffect(() => () => { if (copyTimerRef.current) clearTimeout(copyTimerRef.current); }, []);

  const shareText = `I matched with ${result.program} on TWS GurukulX's trading quiz! Find your perfect trading program too:`;
  const shareUrl = 'https://www.twsgurukul.com/quiz';

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'quiz_share', platform: 'whatsapp', program: result.programId });
    }
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'quiz_share', platform: 'twitter', program: result.programId });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      copyTimerRef.current = window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // clipboard API unavailable — do not show success
    }
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'quiz_share', platform: 'copy_link', program: result.programId });
    }
  };

  const handleCTA = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'quiz_result_cta',
        program: result.programId,
      });
    }
    onNavigate?.();
    navigate(result.route);
  };

  return (
    <div className="animate-[fadeIn_0.6s_ease-out]">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-wealth-teal/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-wealth-teal" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-1">
          Your Perfect Match
        </h2>
      </div>

      <div className="bg-white/[0.04] backdrop-blur-sm border border-burnt-amber/20 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-burnt-amber bg-burnt-amber/10 px-2.5 py-0.5 rounded-full font-sans">
            Stage {result.stage}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white font-sans mb-1">
          {result.program}
        </h3>
        <p className="text-sm text-soft-sand/70 font-sans mb-4">
          {result.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-sans text-soft-sand/60">
          <span className="text-wealth-teal font-bold text-[15px] sm:text-base">{result.metric}</span>
          <span className="hidden xs:inline">&middot;</span>
          <span>{result.duration}</span>
          <span className="hidden xs:inline">&middot;</span>
          <span>{result.students} students</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-[11px] font-sans font-bold text-soft-sand/60 uppercase tracking-[0.15em] mb-3">
          Why This Is Your Match
        </h4>
        <div className="space-y-2.5">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-wealth-teal shrink-0 mt-0.5" />
              <p className="text-[14px] text-soft-sand/60 font-sans leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4 mb-8">
        <p className="text-[13px] text-soft-sand/70 font-sans italic leading-relaxed mb-2">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-burnt-amber/20 flex items-center justify-center text-[10px] text-burnt-amber/70 font-bold">
            {testimonial.name[0]}
          </div>
          <span className="text-[12px] text-soft-sand/60 font-sans">
            {testimonial.name}, {testimonial.location} ({testimonial.profession})
          </span>
          <span className="text-[12px] text-wealth-teal font-bold font-sans ml-auto">
            {testimonial.profit}
          </span>
        </div>
      </div>

      <button
        onClick={handleCTA}
        className="w-full group relative flex items-center justify-center gap-2 bg-burnt-amber text-white rounded-xl px-6 py-4 min-h-[52px] text-[15px] font-bold font-sans transition-[background-color,opacity] duration-200 active:opacity-85 overflow-hidden mb-4"
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10 flex items-center gap-2">
          Start My {result.duration} Plan
          <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
        </span>
      </button>

      {/* Share your result */}
      <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 mb-4">
        <div className="flex items-center gap-2 text-[12px] text-soft-sand/60 font-sans">
          <Share2 className="w-3.5 h-3.5" />
          Share your result
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleShareWhatsApp}
            className="w-11 h-11 rounded-full bg-wealth-teal/10 flex items-center justify-center text-wealth-teal hover:bg-wealth-teal/20 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={handleShareTwitter}
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center text-soft-sand/60 hover:bg-white/[0.1] hover:text-white transition-colors"
            aria-label="Share on Twitter"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button
            onClick={handleCopyLink}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${linkCopied ? 'bg-wealth-teal/20 text-wealth-teal' : 'bg-white/[0.05] text-soft-sand/60 hover:bg-white/[0.1] hover:text-white'}`}
            aria-label="Copy link"
          >
            {linkCopied ? <CheckCircle className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2 bg-red-500/[0.04] border border-red-500/[0.08] rounded-lg px-4 py-3">
        <AlertTriangle className="w-4 h-4 text-red-400/50 shrink-0 mt-0.5" />
        <p className="text-[12px] text-red-400/40 font-sans leading-relaxed">
          Without a system, traders with your profile lose ₹73,000 in the first 3 months. Don&apos;t be that statistic.
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
