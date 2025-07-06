import React, { useState } from 'react';
import { Plus, Minus, X, ShoppingBag, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { CartItem } from '../App';

interface CartPageProps {
  cartItems: CartItem[];
  onNavigate: (page: string) => void;
  onUpdateQuantity: (id: number, variant: string | undefined, size: string | undefined, quantity: number) => void;
  onRemoveItem: (id: number, variant?: string, size?: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onNavigate,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + shipping + tax;

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE20') {
      setDiscount(subtotal * 0.2);
      setAppliedPromo('SAVE20');
    } else if (promoCode.toUpperCase() === 'FREESHIP') {
      setDiscount(shipping);
      setAppliedPromo('FREESHIP');
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setDiscount(0);
    setAppliedPromo('');
    setPromoCode('');
  };

  const recommendedProducts = [
    {
      id: 101,
      name: 'Wireless Charger',
      price: 39,
      image: 'https://images.pexels.com/photos/163143/samsung-mobile-phone-smartphone-galaxy-163143.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8
    },
    {
      id: 102,
      name: 'Phone Stand',
      price: 25,
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6
    },
    {
      id: 103,
      name: 'Cable Organizer',
      price: 15,
      image: 'https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('collection')}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </button>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-3" />
              Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
            <button
              onClick={() => onNavigate('collection')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-slate-900">Cart Items</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.variant}-${item.size}`}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                          <div className="text-sm text-slate-600 space-y-1">
                            {item.variant && <p>Color: <span className="font-medium">{item.variant}</span></p>}
                            {item.size && <p>Size: <span className="font-medium">{item.size}</span></p>}
                          </div>
                          <p className="text-xl font-bold text-blue-600 mt-2">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.variant, item.size, item.quantity - 1)}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.variant, item.size, item.quantity + 1)}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-slate-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              onClick={() => onRemoveItem(item.id, item.variant, item.size)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center mt-1"
                            >
                              <X className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Products */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">You might also like</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => onNavigate('product', product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-slate-900 mb-1">{product.name}</h4>
                      <p className="text-blue-600 font-bold">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Promo Code</h3>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div>
                      <p className="font-semibold text-green-800">{appliedPromo}</p>
                      <p className="text-sm text-green-600">-${discount.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-2">Try: SAVE20 or FREESHIP</p>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedPromo})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-slate-900">Total</span>
                      <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Notice */}
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    {shipping === 0 ? (
                      <span className="flex items-center">
                        <Truck className="h-4 w-4 mr-2" />
                        You qualify for free shipping!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Truck className="h-4 w-4 mr-2" />
                        Add ${(75 - subtotal).toFixed(2)} more for free shipping
                      </span>
                    )}
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg mt-6">
                  Proceed to Checkout
                </button>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Why shop with us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-slate-600">Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-600">Free shipping over $75</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-slate-600">30-day returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;