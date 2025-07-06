import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-8">Subscribe to our newsletter for exclusive offers and latest updates</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXE</h3>
            <p className="text-slate-300 mb-6">
              Your premium destination for modern, high-quality products. We're committed to excellence in everything we do.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">123 Fashion Street, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">hello@luxe.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Contact', page: 'contact' },
                { label: 'Size Guide', page: 'home' },
                { label: 'Shipping Info', page: 'home' },
                { label: 'Returns', page: 'home' },
                { label: 'FAQ', page: 'home' },
                { label: 'Blog', page: 'home' },
                { label: 'Careers', page: 'home' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {[
                'Track Your Order',
                'Return Policy',
                'Privacy Policy',
                'Terms of Service',
                'Warranty',
                'Gift Cards',
                'Student Discount',
                'Affiliate Program'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {[
                'Electronics',
                'Fashion',
                'Home & Garden',
                'Sports',
                'Books',
                'Beauty',
                'Toys & Games',
                'Automotive'
              ].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => onNavigate('collection')}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-slate-300">Follow us:</span>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
                  { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                  { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
                  { icon: <Youtube className="h-5 w-5" />, label: 'YouTube' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-300">We accept:</span>
              <div className="flex space-x-2">
                {['Visa', 'MasterCard', 'PayPal', 'Apple Pay'].map((payment) => (
                  <div
                    key={payment}
                    className="bg-slate-800 px-3 py-1 rounded text-xs text-slate-300"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 LUXE. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;