import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../utils/blogData';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    /*
      Featured variant: the CTA button is the primary tap target.
      Card background is decorative only — not wrapped in a Link
      to avoid nested interactive elements.
      Button meets 44px height via py-3 + text line-height.
    */
    return (
      <div className="bg-gradient-to-r from-deep-slate to-deep-slate/80 rounded-xl p-6 sm:p-8 border border-soft-sand/10 hover:border-burnt-amber/50 transition-colors duration-300">
        {/* Meta row — wraps on narrow screens */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
          <span className="bg-burnt-amber text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-soft-sand/60 text-xs sm:text-sm">
            <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </span>
          <span className="flex items-center gap-1.5 text-soft-sand/60 text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold mb-3 sm:mb-4 text-white leading-snug">
          {post.title}
        </h3>
        <p className="text-soft-sand/70 mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
          {post.excerpt}
        </p>

        {/*
          CTA button: min-h-[44px] ensures the tap target is always accessible.
          py-3 + font line-height already gives ~44px; explicit min-h is a safety net.
        */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 bg-burnt-amber hover:bg-burnt-amber/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] text-sm sm:text-base"
        >
          Read Full Article
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  /*
    Regular variant: the entire card is wrapped in a Link so the full card area
    is tappable on mobile (no tiny "Read More" link required as the sole target).
    hover:-translate-y-1 uses GPU-composited transform to avoid layout reflow
    on adjacent cards (safer than scale-105 which can shift sibling elements).
  */
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block"
      aria-label={`Read article: ${post.title}`}
    >
      <article className="bg-deep-slate/50 rounded-xl p-5 sm:p-6 border border-soft-sand/10 group-hover:border-burnt-amber/40 transition-colors duration-300 group-hover:-translate-y-1 transform-gpu h-full flex flex-col">
        {/* Category + read time */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="bg-soft-sand/10 text-soft-sand/60 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-soft-sand/50 text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        {/* Title — 16px minimum on mobile, snug line-height for readability */}
        <h3 className="text-base sm:text-xl font-sans font-bold mb-2 sm:mb-3 text-white leading-snug group-hover:text-burnt-amber transition-colors duration-300 grow">
          {post.title}
        </h3>

        {/* Excerpt — truncated on mobile to keep cards scannable */}
        <p className="text-soft-sand/70 mb-4 text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-soft-sand/10 mt-auto">
          <time dateTime={post.date} className="text-soft-sand/50 text-xs">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
          {/* Purely decorative — entire Link is the tap target */}
          <span className="flex items-center gap-1 text-burnt-amber font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300" aria-hidden="true">
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
