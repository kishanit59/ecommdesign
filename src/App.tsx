import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CollectionPage from './components/CollectionPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CartDrawer from './components/CartDrawer';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
  size?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Leather Bag',
      price: 199,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      quantity: 1,
      variant: 'Black',
      size: 'Medium'
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      price: 89,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      quantity: 2,
      variant: 'Silver'
    }
  ]);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    if (page === 'product' && data) {
      setSelectedProduct(data);
    }
    if (page === 'blog-detail' && data) {
      setSelectedBlog(data);
    }
  };

  const addToCart = (product: any, quantity: number = 1, variant?: string, size?: string) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.variant === variant && item.size === size
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === existingItem.id && item.variant === variant && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        variant,
        size
      };
      setCartItems([...cartItems, newItem]);
    }
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (id: number, variant: string | undefined, size: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, variant, size);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id && item.variant === variant && item.size === size
        ? { ...item, quantity }
        : item
    ));
  };

  const removeFromCart = (id: number, variant?: string, size?: string) => {
    setCartItems(cartItems.filter(item =>
      !(item.id === id && item.variant === variant && item.size === size)
    ));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onAddToCart={addToCart} />;
      case 'product':
        return <ProductPage product={selectedProduct} onNavigate={handleNavigate} onAddToCart={addToCart} />;
      case 'collection':
        return <CollectionPage onNavigate={handleNavigate} onAddToCart={addToCart} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-detail':
        return <BlogDetailPage blog={selectedBlog} onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage 
          cartItems={cartItems} 
          onNavigate={handleNavigate} 
          onUpdateQuantity={updateCartItemQuantity}
          onRemoveItem={removeFromCart}
        />;
      default:
        return <HomePage onNavigate={handleNavigate} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={handleNavigate} 
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={getTotalItems()}
      />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <BackToTop />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
        onViewCart={() => {
          setIsCartOpen(false);
          handleNavigate('cart');
        }}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;