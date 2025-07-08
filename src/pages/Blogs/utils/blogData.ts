export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  author?: string;
  tags?: string[];
}

// Blog posts database
const blogPosts: BlogPost[] = [
  {
    slug: 'ai-automation-zerodha-portfolio',
    title: 'How to Automate Your Zerodha Investment Portfolio with Free AI Tools',
    excerpt: 'Discover how to transform your Zerodha account into an AI-powered investment machine that thinks, analyzes, and executes like a pro trader.',
    date: '2025-01-01',
    readTime: '15 min',
    category: 'AI Trading',
    featured: true,
    author: 'TWS Gurukul',
    tags: ['AI', 'Automation', 'Zerodha', 'Portfolio Management', 'Trading'],
  },
];

// Get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Get featured blog posts
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Get blog posts by tag
export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags?.includes(tag));
};

// Get all categories
export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
};

// Get all tags
export const getAllTags = (): string[] => {
  const tags = blogPosts.flatMap(post => post.tags || []);
  return [...new Set(tags)];
}; 