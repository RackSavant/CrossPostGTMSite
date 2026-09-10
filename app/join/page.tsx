'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RoleSelectionModal } from '@/components/role-selection-modal';

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-6xl w-full">
          <RoleSelectionModal isOpen={true} onClose={() => window.location.href = '/'} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
