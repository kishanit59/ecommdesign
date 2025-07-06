import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, Filter, Tag } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string, blog?: any) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Minimalist Living: How to Declutter Your Space',
      excerpt: 'Discover the secrets to creating a serene, organized living space that promotes peace and productivity. Learn practical tips for decluttering and maintaining a minimalist lifestyle.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emma Wilson',
      date: '2024-01-15',
      category: 'Lifestyle',
      readTime: '5 min read',
      tags: ['minimalism', 'home', 'organization', 'lifestyle']
    },
    {
      id: 2,
      title: 'Tech Trends 2024: What to Expect in Consumer Electronics',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest technology trends shaping the future. From AI integration to sustainable tech solutions.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Chen',
      date: '2024-01-12',
      category: 'Technology',
      readTime: '8 min read',
      tags: ['technology', 'trends', 'electronics', 'innovation']
    },
    {
      id: 3,
      title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
      excerpt: 'Learn how to make conscious fashion choices that benefit both your style and the environment. Discover sustainable brands and timeless pieces.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sophie Martinez',
      date: '2024-01-10',
      category: 'Fashion',
      readTime: '6 min read',
      tags: ['fashion', 'sustainability', 'eco-friendly', 'wardrobe']
    },
    {
      id: 4,
      title: 'Home Office Setup: Creating the Perfect Workspace',
      excerpt: 'Transform your home office into a productivity powerhouse with our expert tips on ergonomics, lighting, and organization.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Michael Roberts',
      date: '2024-01-08',
      category: 'Productivity',
      readTime: '7 min read',
      tags: ['home office', 'productivity', 'workspace', 'ergonomics']
    },
    {
      id: 5,
      title: 'The Psychology of Color in Interior Design',
      excerpt: 'Explore how different colors affect mood and productivity in your living spaces. Learn to choose the perfect palette for every room.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      category: 'Design',
      readTime: '5 min read',
      tags: ['interior design', 'color psychology', 'home decor', 'mood']
    },
    {
      id: 6,
      title: 'Fitness Tech: Gadgets That Will Transform Your Workout',
      excerpt: 'Discover the latest fitness technology that can help you achieve your health goals faster and more efficiently than ever before.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'James Wilson',
      date: '2024-01-03',
      category: 'Health',
      readTime: '6 min read',
      tags: ['fitness', 'technology', 'health', 'gadgets']
    },
    {
      id: 7,
      title: 'Digital Detox: Finding Balance in a Connected World',
      excerpt: 'Learn practical strategies for reducing screen time and creating healthier relationships with technology in your daily life.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Kim',
      date: '2024-01-01',
      category: 'Wellness',
      readTime: '4 min read',
      tags: ['digital detox', 'wellness', 'mindfulness', 'balance']
    },
    {
      id: 8,
      title: 'Smart Home Automation: A Beginner\'s Guide',
      excerpt: 'Step into the future with smart home technology. Learn how to automate your home for convenience, security, and energy efficiency.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Alex Johnson',
      date: '2023-12-28',
      category: 'Technology',
      readTime: '9 min read',
      tags: ['smart home', 'automation', 'IoT', 'technology']
    },
    {
      id: 9,
      title: 'The Art of Gift Giving: Thoughtful Presents for Every Occasion',
      excerpt: 'Master the art of thoughtful gift-giving with our guide to finding the perfect present for any occasion and recipient.',
      content: 'Full blog content here...',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rachel Green',
      date: '2023-12-25',
      category: 'Lifestyle',
      readTime: '5 min read',
      tags: ['gifts', 'occasions', 'thoughtful', 'presents']
    }
  ];

  const categories = ['All', 'Technology', 'Lifestyle', 'Fashion', 'Design', 'Health', 'Productivity', 'Wellness'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Insights, trends, and stories to inspire your lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Article</h2>
          </div>
          <div
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500"
            onClick={() => onNavigate('blog-detail', featuredPost)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-3">
                    {featuredPost.category}
                  </span>
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Article
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                  onClick={() => onNavigate('blog-detail', post)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search terms or filters</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-md border border-gray-300 text-slate-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-slate-600 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-md border border-gray-300 text-slate-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and never miss our latest articles
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-r-lg transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;