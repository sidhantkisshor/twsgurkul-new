import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LazyMotion, MotionConfig } from 'framer-motion';
import Layout from './components/Layout';

// Motion features load asynchronously once the page is idle, keeping the
// initial JS budget small. The target is a tiny module that re-exports only
// domMax so Vite tree-shakes it into a dedicated chunk. Per motion.dev.
const loadMotionFeatures = () => import('./utils/motionFeatures').then((m) => m.default);
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
// Blog lives at blogs.twsgurukulx.com. Internal /blog routes redirect there.
// BlogsPage + BlogDetailPage components remain in the repo for reference / possible future reinstatement.
const ExternalBlogRedirect = lazy(() => import('./pages/Blogs/ExternalBlogRedirect'));
const QuizLandingPage = lazy(() => 
  import('./pages/Quiz').then(module => ({ 
    default: module.QuizLandingPage 
  }))
);
const PropScannerPage = lazy(() => import('./pages/PropScanner/PropScannerPage'));
const HitpointLiveInvitePage = lazy(() => import('./pages/HitpointLiveInvite/HitpointLiveInvitePage'));
const TermsPage = lazy(() => import('./pages/Legal/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/Legal/PrivacyPage'));
const DisclaimerPage = lazy(() => import('./pages/Legal/DisclaimerPage'));
const RefundPage = lazy(() => import('./pages/Legal/RefundPage'));
const CookiePage = lazy(() => import('./pages/Legal/CookiePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
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
              <Route path="/blog" element={<ExternalBlogRedirect />} />
              <Route path="/blog/:slug" element={<ExternalBlogRedirect />} />
              <Route path="/quiz" element={<QuizLandingPage />} />
              <Route path="/results-and-claims" element={<ResultsAndClaims />} />
              <Route path="/prop-firm-safety-checker" element={<PropScannerPage />} />
              <Route path="/hitpoint-live-invite" element={<HitpointLiveInvitePage />} />
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
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;