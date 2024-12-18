import React from 'react';
import AdPlacement from '../components/Ads/AdPlacement';
import FeedList from '../components/Feed/FeedList';
import { generateMockPosts } from '../data/mockPosts';
import ForYouSidebar from '../components/Feed/ForYouSidebar';
import { Navigate } from 'react-router-dom';
import AuthDialog from '../components/Auth/AuthDialog';

export default function ForYouPage() {
  const [showAuthDialog, setShowAuthDialog] = React.useState(false);
  const isLoggedIn = false; // Replace with actual auth state

  if (!isLoggedIn) {
    return (
      <>
        <Navigate to="/" />
        <AuthDialog
          isOpen={true}
          onClose={() => setShowAuthDialog(false)}
        />
      </>
    );
  }

  const posts = generateMockPosts(20);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-6">
          <AdPlacement />
        </div>

        <div className="flex gap-8">
          <ForYouSidebar />
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">For You</h1>
            </div>

            <FeedList posts={posts} />
            <div className="mt-16">
              <AdPlacement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}