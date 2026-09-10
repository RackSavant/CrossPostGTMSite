'use client';

import { Camera, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function ValuePropSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Point & Click Simplicity
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Auto-inventorize your closet or others' closets and sell on our platform.<br />
              <span className="text-white font-semibold">We do the rest. Watch money grow in your account.</span>
            </p>
          </div>
          <div className="relative">
            <img
              src="/point-click-demo.jpg"
              alt="Mobile app photographing Keith Haring t-shirt in thrift store"
              className="rounded-lg shadow-2xl w-full"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop';
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">1. Snap Photos</h3>
            <p className="text-gray-300">
              Use our mobile app to photograph items in seconds. AI handles authentication and pricing.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">2. Auto-List</h3>
            <p className="text-gray-300">
              Items automatically appear across our network of stores. No manual work required.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">3. Get Paid</h3>
            <p className="text-gray-300">
              Money hits your account automatically when items sell. Track earnings in real-time.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/join"
            className="inline-block bg-white text-black px-12 py-5 text-xl font-bold rounded-none hover:bg-gray-100 transition-colors"
          >
            Start Earning Today
          </Link>
          <p className="text-sm text-gray-400 mt-4">Free to join • No upfront costs • Earn 5-75% per sale</p>
        </div>
      </div>
    </section>
  );
}
