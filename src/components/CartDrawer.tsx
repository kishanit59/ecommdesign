import React from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../App';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, variant: string | undefined, size: string | undefined, quantity: number) => void;
  onRemoveItem: (id: number, variant?: string, size?: string) => void;
  onViewCart: () => void;
  totalPrice: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onViewCart,
  totalPrice
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Shopping Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Your cart is empty</h3>
                <p className="text-slate-600 mb-6">Add some products to get started!</p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}-${item.size}`}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 truncate">{item.name}</h3>
                      <div className="text-sm text-slate-600 space-y-1">
                        {item.variant && <p>Color: {item.variant}</p>}
                        {item.size && <p>Size: {item.size}</p>}
                        <p className="font-bold text-blue-600">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => onRemoveItem(item.id, item.variant, item.size)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.size, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.size, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-white">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-slate-900">Subtotal:</span>
                <span className="text-2xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>

              {/* Shipping Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-green-800">
                  {totalPrice >= 75 ? (
                    <span className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      You qualify for free shipping!
                    </span>
                  ) : (
                    <span>
                      Add ${(75 - totalPrice).toFixed(2)} more for free shipping
                    </span>
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onViewCart}
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <span>View Cart</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold">
                  Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-slate-600 hover:text-slate-800 py-2 font-medium transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Security Badge */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 flex items-center justify-center space-x-1">
                  <span>🔒</span>
                  <span>Secure checkout with SSL encryption</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;