import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPostBySlug, getAllBlogPosts } from './utils/blogData';
import Seo from '../../components/Seo';
import JsonLd from '../../components/StructuredData';

// Import blog post components
import AIAutomationZerodhaPortfolio from './posts/AIAutomationZerodhaPortfolio';
import BitcoinTradingSessions from './posts/BitcoinTradingSessions';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    return (
      <Layout>
        <Seo
          title="Post Not Found | TWS GurukulX"
          description="The blog post you're looking for doesn't exist."
        />
        <div className="min-h-[70vh] bg-deep-slate text-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-8xl font-bold text-burnt-amber/20 mb-4 font-sans">404</p>
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-soft-sand/70 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-burnt-amber hover:bg-burnt-amber/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Render the appropriate component based on slug
  const renderBlogContent = () => {
    switch (slug) {
      case 'ai-automation-zerodha-portfolio':
        return <AIAutomationZerodhaPortfolio />;
      case 'bitcoin-trading-sessions':
        return <BitcoinTradingSessions />;
      default:
        return null;
    }
  };

  const blogContent = renderBlogContent();

  if (!blogContent) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-deep-slate text-white">
      <Seo
        title={`${blogPost.title} | TWS GurukulX`}
        description={blogPost.excerpt}
        ogTitle={blogPost.title}
        ogDescription={blogPost.excerpt}
        canonicalUrl={`https://www.twsgurukul.com/blog/${slug}`}
        ogImage="https://www.twsgurukul.com/og-image.jpg"
        ogType="article"
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogPost.title,
        "description": blogPost.excerpt,
        "datePublished": blogPost.date,
        "author": {
          "@type": "Organization",
          "name": blogPost.author || "TWS GurukulX",
          "url": "https://www.twsgurukul.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "TWS GurukulX",
          "url": "https://www.twsgurukul.com",
        },
        "mainEntityOfPage": `https://www.twsgurukul.com/blog/${slug}`,
      }} />

      {/* Article Header */}
      <header className="bg-deep-slate/80 border-b border-soft-sand/10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">

          {/* Top action bar — both buttons meet 44px touch target */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-burnt-amber hover:text-burnt-amber/80 transition-colors duration-300 min-h-[44px] pr-3 font-medium text-sm sm:text-base"
              aria-label="Back to blog listing"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              Back to Blog
            </Link>
            <button
              onClick={() => {
                const url = `https://www.twsgurukul.com/blog/${slug}`;
                if (navigator.share) {
                  navigator.share({ title: blogPost.title, text: blogPost.excerpt, url });
                } else {
                  navigator.clipboard.writeText(url).then(() => {}).catch(() => {});
                }
              }}
              className="inline-flex items-center gap-1.5 text-soft-sand/60 hover:text-white transition-colors duration-300 min-h-[44px] pl-3 font-medium text-sm sm:text-base"
              aria-label="Share this article"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              Share
            </button>
          </div>

          {/* Category + meta row — wraps gracefully on narrow screens */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <span className="bg-burnt-amber text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {blogPost.category}
            </span>
            <span className="flex items-center gap-1.5 text-soft-sand/60 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <time dateTime={blogPost.date}>
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </span>
            <span className="flex items-center gap-1.5 text-soft-sand/60 text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {blogPost.readTime}
            </span>
          </div>

          {/*
            Title: text-2xl on mobile (~24px) for readability, scales up on larger screens.
            leading-snug prevents line-height issues on multi-line titles at small sizes.
          */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white leading-snug">
            {blogPost.title}
          </h1>
        </div>
      </header>

      {/* Blog Content */}
      {blogContent}

      {/* Related Posts */}
      {(() => {
        const relatedPosts = getAllBlogPosts().filter(p => p.slug !== slug).slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <aside className="border-t border-soft-sand/10 bg-deep-slate" aria-label="Related articles">
            <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-5 sm:mb-6">Keep Reading</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map(post => (
                  /*
                    Each card is a full-width block Link.
                    p-5 + heading + body gives well over 88px total height,
                    satisfying the 44px minimum tap target height with plenty of margin.
                  */
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block bg-deep-slate border border-soft-sand/10 rounded-xl p-5 hover:border-burnt-amber/40 transition-colors duration-300"
                    aria-label={`Read related article: ${post.title}`}
                  >
                    <span className="text-xs font-semibold text-burnt-amber uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-white mt-2 mb-2 leading-snug group-hover:text-burnt-amber transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-soft-sand/60 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    {/* Decorative — the whole Link is the tap target */}
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-burnt-amber font-semibold" aria-hidden="true">
                      Read
                      <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        );
      })()}
    </div>
  );
};

export default BlogDetailPage;
