# Blogs System Architecture

This folder contains the complete blog system for the TWS Gurukul website. The structure follows the same modular pattern as other pages (Home, Footprint, Crypto).

## 📁 Folder Structure

```
src/pages/Blogs/
├── components/           # Shared blog components
│   └── BlogCard.tsx     # Reusable blog post card component
├── hooks/               # Custom hooks for blog functionality (future)
├── posts/               # Individual blog post components
│   └── AIAutomationZerodhaPortfolio.tsx
├── utils/               # Utilities and data management
│   └── blogData.ts     # Blog posts database and helper functions
├── BlogsPage.tsx        # Main blog listing page
├── BlogDetailPage.tsx   # Individual blog post display page
├── index.ts            # Module exports
└── README.md           # This documentation
```

## 🚀 Adding New Blog Posts

### 1. Create the Blog Post Component
Create a new file in `posts/` folder:
```tsx
// posts/YourNewBlogPost.tsx
import React from 'react';

const YourNewBlogPost: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Your blog content here */}
    </div>
  );
};

export default YourNewBlogPost;
```

### 2. Add Blog Metadata
Update `utils/blogData.ts` to include your new post:
```typescript
const blogPosts: BlogPost[] = [
  // ... existing posts
  {
    slug: 'your-new-blog-post',
    title: 'Your New Blog Post Title',
    excerpt: 'Brief description of your post...',
    date: '2025-01-15',
    readTime: '10 min',
    category: 'Trading Psychology',
    featured: false,
    author: 'TWS Gurukul',
    tags: ['Trading', 'Psychology', 'Strategy'],
  },
];
```

### 3. Update Blog Detail Router
Add your new post to `BlogDetailPage.tsx`:
```typescript
const renderBlogContent = () => {
  switch (slug) {
    case 'ai-automation-zerodha-portfolio':
      return <AIAutomationZerodhaPortfolio />;
    case 'your-new-blog-post':
      return <YourNewBlogPost />;
    default:
      return null;
  }
};
```

## 🎨 Design Guidelines

- Follow the existing dark theme (black/gray color scheme)
- Use consistent spacing and typography
- Include proper responsive design
- Use Lucide React icons for consistency
- Follow the same gradient and color patterns as other pages

## 🔧 Available Utilities

### Blog Data Functions
- `getAllBlogPosts()` - Get all posts sorted by date
- `getBlogPostBySlug(slug)` - Get specific post by slug
- `getFeaturedBlogPosts()` - Get featured posts only
- `getBlogPostsByCategory(category)` - Filter by category
- `getBlogPostsByTag(tag)` - Filter by tag
- `getAllCategories()` - Get all unique categories
- `getAllTags()` - Get all unique tags

### Components
- `BlogCard` - Reusable card for post previews
- `BlogsPage` - Main listing page with featured/regular sections
- `BlogDetailPage` - Individual post display with header/metadata

## 🛣️ Routing

- `/blog` - Main blog listing page
- `/blog/:slug` - Individual blog post pages

## 🔮 Future Enhancements

- Search functionality
- Category/tag filtering
- RSS feed generation
- Social sharing components
- Comments system
- Blog post series/pagination
- Author profiles
- Related posts suggestions 