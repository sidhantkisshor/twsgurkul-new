// Only italic is used on the Home page (headline accents + testimonial blocks).
// The 400-roman weight was being imported but never rendered, costing ~14KB of font payload.
import '@fontsource/instrument-serif/400-italic.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { initWebVitals } from './utils/webVitals';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

initWebVitals();
