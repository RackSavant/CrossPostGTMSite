'use client';

import { Store, Camera, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RoleSelectionModal({ isOpen, onClose }: RoleSelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Join RackSavant</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-8">Choose how you'd like to participate in our luxury resale network</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* B2B Store Owner */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Store Owner</h3>
              <p className="text-sm text-gray-600 mb-4">
                Launch your own branded luxury resale store with AI-powered features
              </p>
              <ul className="text-xs space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Custom branded storefront</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Access shared inventory network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Earn 15% commission per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Virtual try-on & AI authentication</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-none hover:bg-gray-800 transition-colors">
                Start Your Store
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">$49-99/month</p>
            </div>

            {/* Image Contributor */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Photo Contributor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Photograph luxury items and earn when they sell
              </p>
              <ul className="text-xs space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Take photos via mobile app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>No store management required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Earn 5-10% per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Passive income from your closet</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-none hover:bg-gray-800 transition-colors">
                Become a Contributor
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">Free to join</p>
            </div>

            {/* High-Volume Buyer */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Wholesale Buyer</h3>
              <p className="text-sm text-gray-600 mb-4">
                Access bulk inventory and contributor network
              </p>
              <ul className="text-xs space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Bulk purchasing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Priority access to new inventory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Connect with contributors directly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Volume discounts available</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-none hover:bg-gray-800 transition-colors">
                Apply for Access
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">By application</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Just want to shop? <Link href="/shop" className="underline hover:text-black">Browse our collection</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className}>{children}</a>;
}
