import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Truck, CreditCard, RotateCcw, Play, Clock, MapPin, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import ImageHotspot from './ImageHotspot';
import BeforeAfterSlider from './BeforeAfterSlider';
import VideoSection from './VideoSection';
import InstagramFeed from './InstagramFeed';
import CountdownTimer from './CountdownTimer';

interface HomePageProps {
  onNavigate: (page: string, product?: any) => void;
  onAddToCart: (product: any, quantity?: number, variant?: string, size?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('new');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Premium Quality, Modern Design',
      subtitle: 'Discover our curated collection of premium products designed for the modern lifestyle',
      cta: 'Shop Now',
      overlay: 'from-slate-900/70 to-slate-700/50'
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Innovation Meets Style',
      subtitle: 'Experience the perfect blend of cutting-edge technology and timeless design',
      cta: 'Explore Collection',
      overlay: 'from-blue-900/70 to-purple-700/50'
    },
    {
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Crafted for Excellence',
      subtitle: 'Every product is meticulously designed and tested to exceed your expectations',
      cta: 'Learn More',
      overlay: 'from-emerald-900/70 to-teal-700/50'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Leather Bag',
      price: 199,
      originalPrice: 259,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 127,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      price: 89,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89,
      badge: 'Limited Edition'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 149,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      badge: 'New Arrival'
    }
  ];

  const productCollections = {
    new: [
      {
        id: 4,
        name: 'Smart Fitness Tracker',
        price: 79,
        image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6
      },
      {
        id: 5,
        name: 'Eco-Friendly Water Bottle',
        price: 29,
        image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8
      },
      {
        id: 6,
        name: 'Laptop Stand',
        price: 45,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.5
      }
    ],
    bestsellers: [
      {
        id: 7,
        name: 'Bluetooth Speaker',
        price: 69,
        image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9
      },
      {
        id: 8,
        name: 'Phone Case',
        price: 19,
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7
      },
      {
        id: 9,
        name: 'Desk Organizer',
        price: 35,
        image: 'https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6
      }
    ],
    trending: [
      {
        id: 10,
        name: 'LED Ring Light',
        price: 55,
        image: 'https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8
      },
      {
        id: 11,
        name: 'Portable Charger',
        price: 25,
        image: 'https://images.pexels.com/photos/163143/samsung-mobile-phone-smartphone-galaxy-163143.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.5
      },
      {
        id: 12,
        name: 'Webcam',
        price: 89,
        image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7
      }
    ]
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Amazing quality and fast shipping! The leather bag exceeded my expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Michael Chen',
      text: 'Great customer service and top-notch products. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emma Davis',
      text: 'Love the minimalist design and quality. Will definitely shop again.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Minimalist Living: How to Declutter Your Space',
      excerpt: 'Discover the secrets to creating a serene, organized living space that promotes peace and productivity.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emma Wilson',
      date: '2024-01-15',
      category: 'Lifestyle',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Tech Trends 2024: What to Expect in Consumer Electronics',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest technology trends shaping the future.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'David Chen',
      date: '2024-01-12',
      category: 'Technology',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
      excerpt: 'Learn how to make conscious fashion choices that benefit both your style and the environment.',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sophie Martinez',
      date: '2024-01-10',
      category: 'Fashion',
      readTime: '6 min read'
    }
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Enhanced Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentHeroSlide ? 'translate-x-0' : 
              index < currentHeroSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="text-center px-4 max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => onNavigate('collection')}
                  className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-delay-2"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Hero Navigation */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Sparkles className="h-8 w-8" />, number: '50K+', label: 'Happy Customers', color: 'text-blue-600' },
                { icon: <Zap className="h-8 w-8" />, number: '1000+', label: 'Premium Products', color: 'text-purple-600' },
                { icon: <TrendingUp className="h-8 w-8" />, number: '25+', label: 'Countries Served', color: 'text-green-600' },
                { icon: <Star className="h-8 w-8" />, number: '4.9', label: 'Average Rating', color: 'text-yellow-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <CountdownTimer />

      {/* Enhanced Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Handpicked selections that represent the pinnacle of design and functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    onClick={() => onNavigate('product', product)}
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 ml-2">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                      <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Image Hotspot Section */}
      <ImageHotspot onNavigate={onNavigate} />

      {/* Before/After Slider */}
      <BeforeAfterSlider />

      {/* Enhanced Product Collections with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Collections</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover products curated for every lifestyle and preference
            </p>
          </div>
          
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-2xl">
              {[
                { key: 'new', label: 'New Arrivals', icon: <Sparkles className="h-4 w-4" /> },
                { key: 'bestsellers', label: 'Best Sellers', icon: <TrendingUp className="h-4 w-4" /> },
                { key: 'trending', label: 'Trending Now', icon: <Zap className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCollections[activeTab as keyof typeof productCollections].map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => onNavigate('product', product)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
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
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => onNavigate('blog')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl mb-8">Get 30% off on all electronics. Use code: TECH30</p>
          <button
            onClick={() => onNavigate('collection')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Shop Electronics
          </button>
        </div>
      </section>

      {/* Enhanced Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-slate-600">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-blue-600/80 to-purple-600/80' },
              { name: 'Fashion', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-pink-600/80 to-rose-600/80' },
              { name: 'Home & Garden', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-green-600/80 to-emerald-600/80' },
              { name: 'Sports', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-orange-600/80 to-red-600/80' }
            ].map((category) => (
              <div
                key={category.name}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                onClick={() => onNavigate('collection')}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600">Real feedback from real customers</p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-100"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </button>
              
              <div className="max-w-3xl mx-auto text-center px-16">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-blue-100">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xl mb-6 italic leading-relaxed">"{testimonials[currentSlide].text}"</p>
                  <p className="text-slate-900 font-bold text-lg">{testimonials[currentSlide].name}</p>
                </div>
              </div>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-100"
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Badges */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Truck className="h-10 w-10" />, title: 'Free Shipping', desc: 'On orders over $75', color: 'text-blue-600' },
              { icon: <Shield className="h-10 w-10" />, title: 'Secure Payment', desc: '100% protected', color: 'text-green-600' },
              { icon: <RotateCcw className="h-10 w-10" />, title: 'Easy Returns', desc: '30-day returns', color: 'text-purple-600' },
              { icon: <CreditCard className="h-10 w-10" />, title: 'Best Prices', desc: 'Price match guarantee', color: 'text-orange-600' }
            ].map((badge) => (
              <div key={badge.title} className="text-center group">
                <div className={`flex items-center justify-center mb-4 ${badge.color} group-hover:scale-110 transition-transform duration-300`}>
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{badge.title}</h3>
                <p className="text-slate-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;