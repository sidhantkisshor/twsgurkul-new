import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FootprintPage from './pages/Footprint/FootprintPage';
import CryptoPage from './pages/Crypto/CryptoPage';
import Layout from './components/Layout';
import BlogsPage from './pages/Blogs/BlogsPage';
import BlogDetailPage from './pages/Blogs/BlogDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/footprint" element={<FootprintPage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App; 