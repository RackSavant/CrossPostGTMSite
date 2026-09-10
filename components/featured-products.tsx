'use client';

import { Heart, Eye } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Chanel Classic Flap',
    brand: 'Chanel',
    price: 4500,
    originalPrice: 7200,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
    condition: 'Excellent',
    authenticated: true,
    contributor: 'Sarah M.',
  },
  {
    id: 2,
    name: 'Hermès Birkin 30',
    brand: 'Hermès',
    price: 12000,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=500&fit=crop',
    condition: 'Like New',
    authenticated: true,
    contributor: 'RackSavant',
  },
  {
    id: 3,
    name: 'Louis Vuitton Neverfull',
    brand: 'Louis Vuitton',
    price: 1200,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop',
    condition: 'Very Good',
    authenticated: true,
    contributor: 'Emma K.',
  },
  {
    id: 4,
    name: 'Gucci Marmont Bag',
    brand: 'Gucci',
    price: 1800,
    originalPrice: 2890,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
    condition: 'Excellent',
    authenticated: true,
    contributor: 'Lisa R.',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-light mb-2">Featured Collection</h2>
            <p className="text-gray-600">Authenticated luxury, curated for you</p>
          </div>
          <a href="/shop" className="text-sm underline hover:text-gray-600">View All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-gray-100 mb-3 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Authenticated Badge */}
                {product.authenticated && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                    ✓ Authenticated
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
                <h3 className="font-medium text-sm group-hover:underline">{product.name}</h3>
                <p className="text-xs text-gray-600">Condition: {product.condition}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">by {product.contributor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
