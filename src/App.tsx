import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LiveUpdates from './pages/LiveUpdates';
import ForYouPage from './pages/ForYouPage';
import FollowingPage from './pages/FollowingPage';
import WeatherPage from './pages/WeatherPage';
import UpdatePage from './pages/UpdatePage';
import JournalistsPage from './pages/JournalistsPage';
import JournalistPage from './pages/JournalistPage';
import VideoPage from './pages/VideoPage';
import OutletsPage from './pages/OutletsPage';
import ArticlePage from './pages/ArticlePage';
import NewsMapPage from './pages/NewsMapPage';
import LebanonPage from './pages/Categories/LebanonPage';
import PoliticsPage from './pages/Categories/PoliticsPage';
import OutletPage from './pages/OutletPage';
import BusinessPage from './pages/Categories/BusinessPage';
import TechnologyPage from './pages/Categories/TechnologyPage';
import MiddleEastPage from './pages/Categories/MiddleEastPage';
import WorldNewsPage from './pages/Categories/WorldNewsPage';
import ExplainedPage from './pages/Categories/ExplainedPage';
import FactCheckPage from './pages/Categories/FactCheckPage';
import OpinionsPage from './pages/Categories/OpinionsPage';
import CollectionPage from './pages/CollectionPage';
import SportsPage from './pages/SportsPage';
import { FollowProvider } from './contexts/FollowContext';

function App() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      // Store current path when navigating
      const handleRouteChange = () => {
        localStorage.setItem('lastRoute', window.location.pathname);
      };

      window.addEventListener('popstate', handleRouteChange);
      
      // Check if we need to redirect on page load
      const lastRoute = localStorage.getItem('lastRoute');
      if (lastRoute && window.location.pathname === '/') {
        window.history.replaceState(null, '', lastRoute);
      }

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return (
    <StrictMode>
      <FollowProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-100">
            <Header />
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/live" element={<LiveUpdates />} />
              <Route path="/for-you" element={<ForYouPage />} />
              <Route path="/following" element={<FollowingPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/map" element={<NewsMapPage />} />
              <Route path="/updates/:id" element={<UpdatePage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/journalists" element={<JournalistsPage />} />
              <Route path="/journalist/:id" element={<JournalistPage />} />
              <Route path="/outlet/:id" element={<OutletPage />} />
              <Route path="/lebanon" element={<LebanonPage />} />
              <Route path="/politics" element={<PoliticsPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/middle-east" element={<MiddleEastPage />} />
              <Route path="/world" element={<WorldNewsPage />} />
              <Route path="/explained" element={<ExplainedPage />} />
              <Route path="/fact-check" element={<FactCheckPage />} />
              <Route path="/opinions" element={<OpinionsPage />} />
              <Route path="/outlets" element={<OutletsPage />} />
              <Route path="/collection/:id" element={<CollectionPage />} />
            </Routes>
          </div>
        </Router>
      </FollowProvider>
    </StrictMode>
  );
}

export default App;