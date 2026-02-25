import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  // Strip trailing slashes to avoid duplicate routes (e.g. /crypto/ → /crypto)
  useEffect(() => {
    if (pathname !== '/' && pathname.endsWith('/')) {
      navigate(pathname.slice(0, -1) + search + hash, { replace: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash, navigate]);

  return null;
};

export default ScrollToTop;