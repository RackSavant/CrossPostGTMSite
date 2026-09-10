'use client';

import { Shield, Sparkles, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'AI Authentication',
    description: '95%+ accuracy in detecting authentic luxury items. Every piece verified before listing.',
  },
  {
    icon: Sparkles,
    title: 'Virtual Try-On',
    description: 'See how bags and accessories look on you before buying with AI-powered visualization.',
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Shop across multiple curated stores. Every sale supports independent sellers and contributors.',
  },
  {
    icon: TrendingUp,
    title: 'Fair Pricing',
    description: 'AI-powered pricing ensures fair value. Transparent payment splits benefit everyone.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why RackSavant</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We're reimagining luxury resale with technology that benefits buyers, sellers, and contributors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
