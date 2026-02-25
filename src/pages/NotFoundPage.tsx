import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo
      title="Page Not Found | TWS GurukulX"
      description="The page you're looking for doesn't exist. Head back to TWS GurukulX to explore trading programs."
      noIndex
    />
    <div className="min-h-[70vh] bg-deep-slate text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-burnt-amber/20 mb-4 font-sans">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">Page not found</h1>
        <p className="text-soft-sand/70 mb-8 font-sans leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-burnt-amber hover:bg-burnt-amber/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors font-sans"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-soft-sand/20 text-soft-sand/60 hover:text-white hover:border-soft-sand/40 px-6 py-3 rounded-lg font-semibold transition-colors font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
