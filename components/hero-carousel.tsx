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
    <section className="relative h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      
      {/* 3-Panel Image Grid - Right Side (Wider) */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-center px-8">
        <div className="grid grid-cols-3 gap-6 w-full h-[600px]">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ${
                index === currentIndex ? 'scale-105 z-10' : 'scale-100 opacity-80'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Text Content - Left Side (45% width) */}
      <div className="relative z-20 w-[45%] pl-16 lg:pl-24 pr-8 py-12">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-600 font-semibold">Authenticated Resale</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
            <span className="text-yellow-400">RackSavant</span><br />
            Sign Up.<br />
            Point & Click.<br />
            Start Selling Now!
          </h1>
          <p className="text-xl mb-10 text-gray-700 max-w-xl">
            Every piece enters inventory. Sell clothes faster!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/join"
              className="bg-yellow-400 text-black px-12 py-4 text-lg rounded-sm hover:bg-yellow-300 transition-all hover:shadow-xl font-bold text-center"
            >
              Start Earning Today
            </Link>
            <Link
              href="/shop"
              className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-sm hover:bg-gray-900 hover:text-white transition-all inline-flex items-center justify-center gap-2 font-medium"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
