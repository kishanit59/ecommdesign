import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface ImageHotspotProps {
  onNavigate: (page: string, product?: any) => void;
}

const ImageHotspot: React.FC<ImageHotspotProps> = ({ onNavigate }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: 25,
      y: 30,
      product: {
        id: 101,
        name: 'Designer Sunglasses',
        price: 129,
        image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    },
    {
      id: 2,
      x: 60,
      y: 45,
      product: {
        id: 102,
        name: 'Leather Handbag',
        price: 199,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    },
    {
      id: 3,
      x: 75,
      y: 70,
      product: {
        id: 103,
        name: 'Premium Watch',
        price: 299,
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop the Look</h2>
          <p className="text-slate-600 text-lg">Click on the hotspots to discover featured products</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Shop the look"
            className="w-full h-96 md:h-[600px] object-cover rounded-lg shadow-lg"
          />
          
          {/* Hotspots */}
          {hotspots.map((hotspot) => (
            <div key={hotspot.id} className="absolute">
              <button
                className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-blue-600 flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              >
                <Plus className="h-4 w-4 text-blue-600" />
              </button>
              
              {/* Product Popup */}
              {activeHotspot === hotspot.id && (
                <div
                  className="absolute bg-white rounded-lg shadow-xl p-4 w-64 z-10 border"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    transform: 'translate(-50%, -120%)'
                  }}
                >
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <img
                    src={hotspot.product.image}
                    alt={hotspot.product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  
                  <h3 className="font-semibold text-slate-900 mb-2">{hotspot.product.name}</h3>
                  <p className="text-lg font-bold text-blue-600 mb-3">${hotspot.product.price}</p>
                  
                  <button
                    onClick={() => onNavigate('product', hotspot.product)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Product
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageHotspot;