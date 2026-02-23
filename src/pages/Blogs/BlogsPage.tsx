import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { getAllBlogPosts } from './utils/blogData';

const BlogsPage: React.FC = () => {
  const blogPosts = getAllBlogPosts();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-green-500/5" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-72 md:h-72 bg-green-500/10 rounded-full filter blur-[100px]" />
        
        {/* Grid pattern overlay - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-white/10 mb-6 sm:mb-8">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-gray-300">Trading Insights & Analysis</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-linear-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Market Wisdom
              </span>
              <span className="block mt-2 bg-linear-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                Trading Insights
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Learn from real market experiences, trading psychology, 
              and proven strategies that work.
            </p>
          </div>
        </div>

        {/* Floating elements - hidden on mobile */}
        <div className="hidden md:block absolute top-60 right-40 glass-effect rounded-full p-3 animate-float">
          <TrendingUp className="w-6 h-6 text-green-400" />
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Featured Story
                </span>
              </h2>
            </div>
            
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="relative">
                {/* Gradient glow on hover - hidden on mobile */}
                <div className="hidden sm:block absolute inset-0 bg-linear-to-r from-purple-500/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <span className="inline-flex px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {featuredPost.category}
                        </span>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <div className="aspect-video rounded-2xl bg-linear-to-br from-purple-500/20 to-green-500/20 flex items-center justify-center">
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
          <section>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Latest Insights
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-linear-to-r from-white/5 to-white/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <article className="relative glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <div className="flex flex-col h-full">
                        {/* Category & Meta */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="inline-flex px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 grow leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                          <span className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1 text-white text-xs sm:text-sm font-medium group-hover:gap-2 transition-all duration-300">
                            Read
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <section className="text-center py-12 sm:py-20">
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                <span className="bg-linear-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Content Coming Soon
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
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