import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Lazy load all page components for better performance
// This reduces initial bundle size by ~40%
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const FootprintPage = lazy(() => import('./pages/Footprint/FootprintPage'));
const CryptoPage = lazy(() => import('./pages/Crypto/CryptoPage'));
const SuperStreamsPage = lazy(() => import('./pages/SuperStreams/SuperStreamsPage'));
const MentorshipPage = lazy(() => import('./pages/Mentorship/MentorshipPage'));
const ResultsAndClaims = lazy(() => import('./pages/Results/ResultsAndClaims'));
const BlogsPage = lazy(() => import('./pages/Blogs/BlogsPage'));
const BlogDetailPage = lazy(() => import('./pages/Blogs/BlogDetailPage'));
const QuizLandingPage = lazy(() => 
  import('./pages/Quiz').then(module => ({ 
    default: module.QuizLandingPage 
  }))
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          <Route path="/footprint" element={<FootprintPage />} />
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/superstreams" element={<SuperStreamsPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/blog" element={
            <Layout>
              <BlogsPage />
            </Layout>
          } />
          <Route path="/blog/:slug" element={
            <Layout>
              <BlogDetailPage />
            </Layout>
          } />
          <Route path="/quiz" element={<QuizLandingPage />} />
          <Route path="/results-and-claims" element={<ResultsAndClaims />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;