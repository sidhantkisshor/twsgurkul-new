import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FootprintPage from './pages/Footprint/FootprintPage';
import CryptoPage from './pages/Crypto/CryptoPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/footprint" element={<FootprintPage />} />
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>
    </Router>
  );
}

export default App; 