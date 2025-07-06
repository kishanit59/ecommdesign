import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Heart } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onCartClick: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onCartClick, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white text-center py-2 px-4">
        <p className="text-sm">Free shipping on orders over $75 | Use code: FREESHIP</p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => onNavigate('home')}
                className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                LUXE
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => onNavigate('home')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('collection')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-slate-700 hover:text-blue-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button 
                onClick={onCartClick}
                className="text-slate-700 hover:text-blue-600 transition-colors relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('collection');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => {
                  onNavigate('blog');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;