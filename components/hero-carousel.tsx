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
    <section className="relative h-[700px] flex items-center overflow-hidden bg-gray-100">
      
      {/* Carousel Images - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-3/5 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Text Content - Left Side */}
      <div className="relative z-20 w-2/5 px-8 lg:px-16 py-12">
        <div className="max-w-lg">
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-700">Authenticated Resale</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Sign Up.<br />
            Point & Click.<br />
            <span className="text-yellow-400">Start Selling Now!</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Every piece enters inventory. Sell clothes faster!
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href="/join"
              className="bg-yellow-400 text-black px-10 py-4 text-lg rounded-none hover:bg-yellow-300 transition-colors font-bold text-center shadow-lg"
            >
              Start Earning Today
            </Link>
            <Link
              href="/shop"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-none hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center justify-center gap-2 font-medium"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
