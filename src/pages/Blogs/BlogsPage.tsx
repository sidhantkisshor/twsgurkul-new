import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getAllBlogPosts } from './utils/blogData';

const BlogsPage: React.FC = () => {
  const blogPosts = getAllBlogPosts();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-blue-400 font-semibold">TWS Gurukul Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trading Insights & Market Wisdom
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deep dives into trading psychology, market analysis, and cutting-edge strategies that transform beginners into market masters.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-blue-400">Featured Article</h2>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </section>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8 text-blue-400">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <section className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-400 mb-2">More Articles Coming Soon</h2>
              <p className="text-gray-500">
                We're working on exciting new content. Stay tuned for insights that will transform your trading journey.
              </p>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage; 