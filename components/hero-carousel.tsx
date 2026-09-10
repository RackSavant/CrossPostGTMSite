'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  { src: '/closet-1.jpg', alt: 'Woman photographing luxury coat in closet' },
  { src: '/closet-2.jpg', alt: 'Woman photographing designer outfit' },
  { src: '/closet-3.jpg', alt: 'Woman with designer handbag in luxury closet' },
  { src: '/closet-4.jpg', alt: 'Women shopping in luxury home closet' },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      
      {/* Carousel Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-contain bg-gray-900 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wider mb-4">Authenticated Luxury Resale</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sign Up.<br />
            Point & Click.<br />
            <span className="text-yellow-400">Start Selling Now!</span>
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Every piece enters inventory. Sell clothes faster!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/join"
              className="bg-yellow-400 text-black px-12 py-5 text-xl rounded-none hover:bg-yellow-300 transition-colors font-bold text-center shadow-lg"
            >
              Start Earning Today
            </Link>
            <Link
              href="/shop"
              className="border-2 border-white text-white px-8 py-4 rounded-none hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2 font-medium"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
