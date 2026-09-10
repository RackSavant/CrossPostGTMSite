'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ValuePropSection } from '@/components/value-prop-section';
import { FeaturedProducts } from '@/components/featured-products';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { RoleSelectionModal } from '@/components/role-selection-modal';
import { useState } from 'react';

export default function Home() {
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ValuePropSection />
        <FeaturedProducts />
        <FeaturesSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Join the RackSavant Network
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you want to sell, contribute, or buy in bulk - there's a place for you
            </p>
            <button
              onClick={() => setIsRoleModalOpen(true)}
              className="bg-white text-black px-8 py-3 rounded-none hover:bg-gray-100 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
      
      <RoleSelectionModal 
        isOpen={isRoleModalOpen} 
        onClose={() => setIsRoleModalOpen(false)} 
      />
    </div>
  );
}
