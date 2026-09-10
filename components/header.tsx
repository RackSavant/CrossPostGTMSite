'use client';

import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-tight">
            RackSavant
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-sm hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="/stores" className="text-sm hover:text-gray-600 transition-colors">
              Stores
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/sell" className="text-sm hover:text-gray-600 transition-colors">
              Sell
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-xs flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/shop" className="text-sm hover:text-gray-600">Shop</Link>
              <Link href="/stores" className="text-sm hover:text-gray-600">Stores</Link>
              <Link href="/about" className="text-sm hover:text-gray-600">About</Link>
              <Link href="/sell" className="text-sm hover:text-gray-600">Sell</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
