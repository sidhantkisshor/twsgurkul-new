import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FootprintPage from './pages/Footprint/FootprintPage';
import CryptoPage from './pages/Crypto/CryptoPage';
import SuperStreamsPage from './pages/SuperStreams/SuperStreamsPage';
import Layout from './components/Layout';
import BlogsPage from './pages/Blogs/BlogsPage';
import BlogDetailPage from './pages/Blogs/BlogDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/footprint" element={<FootprintPage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/superstreams" element={<SuperStreamsPage />} />
        <Route path="/blog" element={<Layout><BlogsPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogDetailPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App; 