import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import ErrorBoundary from './components/ErrorBoundary';
import CookieConsent from './components/CookieConsent';

// Lazy load all page components for better performance
// This reduces initial bundle size by ~40%
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const FootprintPage = lazy(() => import('./pages/Footprint/FootprintPage'));
const CryptoPage = lazy(() => import('./pages/Crypto/CryptoPage'));
const MentorshipPage = lazy(() => import('./pages/Mentorship/MentorshipPage'));
const ResultsAndClaims = lazy(() => import('./pages/Results/ResultsAndClaims'));
const BlogsPage = lazy(() => import('./pages/Blogs/BlogsPage'));
const BlogDetailPage = lazy(() => import('./pages/Blogs/BlogDetailPage'));
const QuizLandingPage = lazy(() => 
  import('./pages/Quiz').then(module => ({ 
    default: module.QuizLandingPage 
  }))
);
const PropScannerPage = lazy(() => import('./pages/PropScanner/PropScannerPage'));
const TermsPage = lazy(() => import('./pages/Legal/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/Legal/PrivacyPage'));
const DisclaimerPage = lazy(() => import('./pages/Legal/DisclaimerPage'));
const RefundPage = lazy(() => import('./pages/Legal/RefundPage'));
const CookiePage = lazy(() => import('./pages/Legal/CookiePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />
            <Route path="/footprint" element={<FootprintPage />} />
            <Route path="/crypto" element={<CryptoPage />} />
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
            <Route path="/prop-firm-safety-checker" element={<PropScannerPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/refunds" element={<RefundPage />} />
            <Route path="/cookies" element={<CookiePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </ErrorBoundary>
    </Router>
  );
}

export default App;