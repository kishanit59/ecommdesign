import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 1234,
      comments: 56,
      caption: 'New leather collection just dropped! 🔥'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 987,
      comments: 43,
      caption: 'Minimalist design meets functionality ⌚'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 2156,
      comments: 89,
      caption: 'Sound quality that speaks for itself 🎧'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 1567,
      comments: 67,
      caption: 'Track your fitness goals in style 💪'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 892,
      comments: 34,
      caption: 'Sustainable living starts here 🌱'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      likes: 1345,
      comments: 78,
      caption: 'Workspace essentials for productivity 💻'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Follow Us on Instagram</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">
            Get inspired by our community and see how others style our products
          </p>
          <a
            href="https://instagram.com/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold"
          >
            <Instagram className="h-5 w-5 mr-2" />
            @luxe
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs px-2">{post.caption}</p>
                </div>
              </div>
              
              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">Share your LUXE moments with #LuxeLifestyle</p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;