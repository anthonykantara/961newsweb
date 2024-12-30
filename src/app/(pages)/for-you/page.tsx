"use client"

import { useEffect, useState } from 'react';
import AdPlacement from '@/components/Ads/AdPlacement';
import FeedList from '@/components/Feed/FeedList';
import { generateMockPosts } from '@/data/mockPosts';
import ForYouSidebar from '@/components/Feed/ForYouSidebar';
import AuthDialog from '@/components/Auth/AuthDialog';
import { useRouter } from 'next/navigation';

export default function ForYouPage() {
  const router = useRouter();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const isLoggedIn = true; // Replace with actual auth state

  // Redirect if the user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <AuthDialog
        isOpen={true}
        onClose={() => setShowAuthDialog(false)}
      />
    );
  }

  const posts = generateMockPosts(20);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <AdPlacement />
          </div>

          <div className="flex gap-8">
            <ForYouSidebar />
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-2xl text-center font-bold">For You</h1>
              </div>

              <FeedList posts={posts} />
              <div className="mt-16">
                <AdPlacement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}