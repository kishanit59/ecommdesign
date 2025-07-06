import React, { useState } from 'react';
import { Filter, Grid, List, Star, ChevronDown } from 'lucide-react';

interface CollectionPageProps {
  onNavigate: (page: string, product?: any) => void;
  onAddToCart: (product: any, quantity?: number, variant?: string, size?: string) => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ onNavigate, onAddToCart }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: '',
    color: [],
    size: []
  });
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Premium Leather Bag',
      price: 199,
      originalPrice: 259,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 127,
      category: 'Bags',
      colors: ['black', 'brown', 'tan']
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      price: 89,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89,
      category: 'Watches',
      colors: ['black', 'silver', 'gold']
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 149,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      category: 'Electronics',
      colors: ['black', 'white', 'blue']
    },
    {
      id: 4,
      name: 'Smart Fitness Tracker',
      price: 79,
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 156,
      category: 'Electronics',
      colors: ['black', 'white', 'red']
    },
    {
      id: 5,
      name: 'Eco-Friendly Water Bottle',
      price: 29,
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 92,
      category: 'Lifestyle',
      colors: ['blue', 'green', 'pink']
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 45,
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      reviews: 78,
      category: 'Electronics',
      colors: ['silver', 'black']
    }
  ];

  const categories = ['All', 'Electronics', 'Bags', 'Watches', 'Lifestyle'];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' }
  ];
  const colors = ['black', 'white', 'blue', 'red', 'green', 'brown', 'silver', 'gold'];

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev].includes(value)
        ? prev[filterType as keyof typeof prev].filter((item: string) => item !== value)
        : [...prev[filterType as keyof typeof prev], value]
    }));
  };

  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(product.category)) {
      return false;
    }
    
    // Price filter
    if (selectedFilters.price) {
      const [min, max] = selectedFilters.price.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) {
        return false;
      }
      if (!max && product.price < min) {
        return false;
      }
    }
    
    // Color filter
    if (selectedFilters.color.length > 0) {
      const hasMatchingColor = selectedFilters.color.some(color => 
        product.colors.includes(color)
      );
      if (!hasMatchingColor) {
        return false;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-a-z':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Shop All Products</h1>
              <p className="text-slate-600 mt-1">{sortedProducts.length} products found</p>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-slate-600"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>
              
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => handleFilterChange('category', category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-slate-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.value} className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={selectedFilters.price === range.value}
                          onChange={() => setSelectedFilters(prev => ({ ...prev, price: range.value }))}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-slate-600">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Color Filter */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Color</h4>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleFilterChange('color', color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedFilters.color.includes(color)
                            ? 'border-slate-800 ring-2 ring-blue-500'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], price: '', color: [], size: [] })}
                  className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => onNavigate('product', product)}
                      />
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-slate-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-48 h-48 object-cover"
                      onClick={() => onNavigate('product', product)}
                    />
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 ml-2">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-gray-300 text-slate-600 hover:bg-gray-50">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-md ${
                      page === 1
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-slate-600 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 rounded-md border border-gray-300 text-slate-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;