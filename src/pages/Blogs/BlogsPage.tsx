import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { getAllBlogPosts } from './utils/blogData';
import Seo from '../../components/Seo';

const BlogsPage: React.FC = () => {
  const blogPosts = getAllBlogPosts();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-deep-slate">
      <Seo
        title="Blog & Trading Insights | TWS GurukulX"
        description="Learn from real market experiences, trading psychology, and proven strategies. Read the latest insights from TWS GurukulX."
        canonicalUrl="https://www.twsgurukul.com/blog"
        ogImage="https://www.twsgurukul.com/og-image.jpg"
      />
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-24 overflow-hidden overflow-x-clip">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-burnt-amber/5 via-transparent to-wealth-teal/5" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-burnt-amber/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-72 md:h-72 bg-wealth-teal/10 rounded-full filter blur-[100px]" />

        {/* Grid pattern overlay - hidden on mobile for performance */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#EDE6D808_1px,transparent_1px),linear-gradient(to_bottom,#EDE6D808_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge — purely decorative, not interactive, so no touch target needed */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-deep-slate/50 border border-soft-sand/10 mb-5 sm:mb-8">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-burnt-amber" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-soft-sand/60 font-medium">Trading Insights & Analysis</span>
            </div>

            {/* Main headline — tightened on mobile to avoid overflow */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.15]">
              <span className="block text-white">
                Market Wisdom
              </span>
              <span className="block mt-1 sm:mt-2 font-serif italic text-burnt-amber">
                Trading Insights
              </span>
            </h1>

            {/* Subheadline — larger base size for readability on mobile */}
            <p className="text-base sm:text-xl md:text-2xl text-soft-sand/70 max-w-3xl mx-auto leading-relaxed">
              Learn from real market experiences, trading psychology,
              and proven strategies that work.
            </p>
          </div>
        </div>

        {/* Floating elements - hidden on mobile for performance */}
        <div className="hidden md:block absolute top-60 right-40 bg-deep-slate/50 border border-soft-sand/10 rounded-full p-3 animate-float">
          <TrendingUp className="w-6 h-6 text-wealth-teal" aria-hidden="true" />
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-10 sm:mb-20" aria-label="Featured article">
            <div className="text-center mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <span className="font-sans font-bold">Featured</span>{' '}
                <span className="font-serif italic font-normal text-burnt-amber">Story</span>
              </h2>
            </div>

            {/*
              The entire card is the tap target on mobile.
              min-h guarantees the card is always tall enough to tap comfortably.
            */}
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block group"
              aria-label={`Read featured article: ${featuredPost.title}`}
            >
              <div className="relative">
                {/* Gradient glow on hover — GPU-composited, paint-safe */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-burnt-amber/20 to-wealth-teal/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

                <div className="relative bg-deep-slate/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-soft-sand/10 group-hover:border-soft-sand/20 transition-colors duration-300">
                  <div className="grid md:grid-cols-2 gap-5 sm:gap-8 items-center">
                    <div>
                      {/* Meta row — wrapped so it never overflows on narrow screens */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-burnt-amber/20 text-burnt-amber border border-burnt-amber/30">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs sm:text-sm text-soft-sand/60">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                          <time dateTime={featuredPost.date}>
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </span>
                        <span className="flex items-center gap-1 text-xs sm:text-sm text-soft-sand/60">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      {/* Title — responsive sizing with good line-height */}
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-snug group-hover:text-burnt-amber transition-colors duration-300">
                        {featuredPost.title}
                      </h3>

                      <p className="text-soft-sand/60 text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      {/* CTA row — visually decorative, tap target is the whole Link */}
                      <div className="inline-flex items-center gap-2 text-burnt-amber font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Decorative illustration — hidden on mobile to save space */}
                    <div className="hidden md:block" aria-hidden="true">
                      <div className="aspect-video rounded-2xl bg-gradient-to-br from-burnt-amber/20 to-wealth-teal/20 flex items-center justify-center">
                        <BookOpen className="w-24 h-24 text-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <section aria-label="Latest articles">
            <div className="text-center mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <span className="font-sans font-bold">Latest</span>{' '}
                <span className="font-serif italic font-normal text-burnt-amber">Insights</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {regularPosts.map((post, index) => (
                /*
                  The entire card is the Link — no nested interactive elements needed.
                  hover:-translate-y-1 uses transform (composited) instead of scale,
                  which avoids triggering layout reflow on sibling elements on mobile.
                */
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                  aria-label={`Read article: ${post.title}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <article className="relative bg-deep-slate/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 h-full border border-soft-sand/10 group-hover:border-soft-sand/20 transition-colors duration-300 group-hover:-translate-y-1 transform-gpu">
                    <div className="flex flex-col h-full">
                      {/* Category & Read time */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-wealth-teal/20 text-wealth-teal border border-wealth-teal/30">
                          {post.category}
                        </span>
                        <span className="text-xs text-soft-sand/60 flex items-center gap-1">
                          <Clock className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title — 16px minimum, controlled line-height */}
                      <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3 leading-snug group-hover:text-burnt-amber transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt — 14px minimum, relaxed line-height */}
                      <p className="text-sm sm:text-base text-soft-sand/70 mb-4 grow leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {post.excerpt}
                      </p>

                      {/* Footer meta */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-soft-sand/10">
                        <time
                          dateTime={post.date}
                          className="text-xs text-soft-sand/50"
                        >
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                        {/* Decorative indicator — card itself is the tap target */}
                        <span className="flex items-center gap-1 text-burnt-amber text-xs sm:text-sm font-semibold group-hover:gap-2 transition-all duration-300" aria-hidden="true">
                          Read
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <section className="text-center py-12 sm:py-20">
            <div className="bg-deep-slate/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-soft-sand/10 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-burnt-amber mx-auto mb-4 sm:mb-6" aria-hidden="true" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                <span className="font-sans font-bold">Content</span>{' '}
                <span className="font-serif italic font-normal text-burnt-amber">Coming Soon</span>
              </h2>
              <p className="text-soft-sand/70 text-base sm:text-lg leading-relaxed">
                We're preparing valuable trading insights and market analysis for you.
                Check back soon!
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
