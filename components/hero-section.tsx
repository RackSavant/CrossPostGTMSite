'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop"
        alt="Fashion hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wider mb-4">Authenticated Luxury Resale</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Snap a Photo.<br />
            We List It Everywhere.<br />
            <span className="text-yellow-400">Earn Money Now.</span>
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Discover AI-powered virtual try-on with our SDK. Every piece enters inventory. Sell clothes faster!
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
    </section>
  );
}
