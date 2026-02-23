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
    return (
      <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Read Full Article
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
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
  );
};

export default BlogCard; 