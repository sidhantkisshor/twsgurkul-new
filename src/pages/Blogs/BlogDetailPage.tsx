import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPostBySlug } from './utils/blogData';

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
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <button className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {blogPost.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              {blogPost.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {blogPost.title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      {blogContent}
    </div>
  );
};

export default BlogDetailPage; 