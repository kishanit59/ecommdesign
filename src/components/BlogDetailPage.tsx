import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Tag, ArrowRight } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface BlogDetailPageProps {
  blog: Blog | null;
  onNavigate: (page: string, blog?: any) => void;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blog, onNavigate }) => {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <button
            onClick={() => onNavigate('blog')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      id: 10,
      title: 'Creating a Productive Morning Routine',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Productivity',
      readTime: '4 min read'
    },
    {
      id: 11,
      title: 'The Future of Sustainable Design',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design',
      readTime: '6 min read'
    },
    {
      id: 12,
      title: 'Mindful Technology Use in Daily Life',
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Wellness',
      readTime: '5 min read'
    }
  ];

  const fullContent = `
    <p>In today's fast-paced world, the concept of minimalist living has gained tremendous popularity. This comprehensive guide will walk you through the essential principles and practical steps to embrace a minimalist lifestyle that promotes clarity, peace, and intentional living.</p>

    <h2>Understanding Minimalism</h2>
    <p>Minimalism isn't about living with as few possessions as possible or adhering to a strict aesthetic. Instead, it's about being intentional with what you choose to keep in your life. It's about surrounding yourself with items that serve a purpose or bring you joy, while eliminating the excess that creates stress and distraction.</p>

    <h2>The Benefits of Minimalist Living</h2>
    <p>Adopting a minimalist approach to your living space can have profound effects on your mental well-being and daily productivity:</p>
    <ul>
      <li><strong>Reduced Stress:</strong> A clutter-free environment promotes mental clarity and reduces anxiety.</li>
      <li><strong>Increased Focus:</strong> With fewer distractions, you can concentrate better on what truly matters.</li>
      <li><strong>Financial Freedom:</strong> Buying less means spending less and saving more.</li>
      <li><strong>Environmental Impact:</strong> Consuming less reduces your carbon footprint.</li>
      <li><strong>Time Savings:</strong> Less stuff means less time spent cleaning and organizing.</li>
    </ul>

    <h2>Getting Started: The Decluttering Process</h2>
    <p>Begin your minimalist journey with these practical steps:</p>

    <h3>1. Start Small</h3>
    <p>Don't try to declutter your entire home in one weekend. Start with a single drawer, closet, or room. This approach prevents overwhelm and helps you build momentum.</p>

    <h3>2. The Three-Box Method</h3>
    <p>For each area you're decluttering, use three boxes labeled:</p>
    <ul>
      <li><strong>Keep:</strong> Items you use regularly and truly value</li>
      <li><strong>Donate:</strong> Items in good condition that others could use</li>
      <li><strong>Discard:</strong> Items that are broken, expired, or beyond repair</li>
    </ul>

    <h3>3. Ask the Right Questions</h3>
    <p>For each item, consider:</p>
    <ul>
      <li>Have I used this in the past year?</li>
      <li>Does this item serve a specific purpose?</li>
      <li>Does it bring me joy or add value to my life?</li>
      <li>Would I buy this again today?</li>
    </ul>

    <h2>Room-by-Room Guide</h2>

    <h3>Living Room</h3>
    <p>Focus on creating a space that promotes relaxation and connection. Keep only furniture that serves multiple purposes and decorative items that truly speak to you.</p>

    <h3>Bedroom</h3>
    <p>Your bedroom should be a sanctuary for rest. Remove work-related items, excess furniture, and anything that doesn't contribute to peaceful sleep.</p>

    <h3>Kitchen</h3>
    <p>Keep only appliances and tools you use regularly. Donate duplicate items and gadgets that serve only one specific purpose.</p>

    <h3>Closet</h3>
    <p>Build a capsule wardrobe with versatile pieces that mix and match well. Focus on quality over quantity.</p>

    <h2>Maintaining Your Minimalist Space</h2>
    <p>Once you've decluttered, maintaining your minimalist space requires ongoing mindfulness:</p>

    <h3>The One-In-One-Out Rule</h3>
    <p>For every new item you bring into your home, remove one item. This prevents accumulation and forces you to be intentional about new purchases.</p>

    <h3>Regular Reviews</h3>
    <p>Schedule monthly or quarterly reviews of your belongings. As your life changes, so will your needs.</p>

    <h3>Mindful Purchasing</h3>
    <p>Before buying anything new, wait 24-48 hours. Ask yourself if you really need it or if it's just an impulse purchase.</p>

    <h2>The Digital Minimalism Connection</h2>
    <p>Minimalism extends beyond physical possessions to digital spaces. Consider decluttering:</p>
    <ul>
      <li>Email subscriptions and newsletters</li>
      <li>Apps on your phone and computer</li>
      <li>Digital photos and files</li>
      <li>Social media accounts and connections</li>
    </ul>

    <h2>Common Challenges and Solutions</h2>

    <h3>Sentimental Items</h3>
    <p>It's natural to struggle with items that have emotional significance. Consider keeping a small memory box for truly special items, and take photos of items you want to remember but don't need to keep.</p>

    <h3>Family Resistance</h3>
    <p>If family members aren't on board, start with your own spaces and lead by example. Share the benefits you experience rather than pushing others to change.</p>

    <h3>Fear of Needing Something Later</h3>
    <p>Remember that most items can be replaced if truly needed. The peace and clarity gained from a clutter-free space often outweigh the small inconvenience of occasionally needing to repurchase something.</p>

    <h2>Conclusion</h2>
    <p>Minimalist living is a journey, not a destination. It's about creating a life filled with intention, purpose, and joy. By removing the excess, you make room for what truly matters – relationships, experiences, and personal growth.</p>

    <p>Start small, be patient with yourself, and remember that minimalism looks different for everyone. The goal isn't to live with as little as possible, but to live with intention and surround yourself only with things that add value to your life.</p>
  `;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center text-slate-600 space-x-6">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Social Share */}
          <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <span className="text-slate-600 font-medium">Share this article:</span>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: fullContent }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-6">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt={blog.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">About {blog.author}</h3>
                <p className="text-slate-600 mb-4">
                  {blog.author} is a lifestyle expert and writer passionate about helping people create more intentional, 
                  meaningful lives. With over 5 years of experience in minimalism and sustainable living, she shares 
                  practical tips and insights to inspire positive change.
                </p>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    View All Articles
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Follow Author
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
            <p className="text-slate-600 text-lg">Continue reading with these related posts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate('blog-detail', post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights and tips delivered to your inbox
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

export default BlogDetailPage;