import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated loading spinner */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-400 text-lg">
          Loading...
        </p>
        
        {/* Optional: Add brand name */}
        <p className="text-gray-600 text-sm mt-2">
          TWS GurukulX
        </p>
      </div>
    </div>
  );
};

export default PageLoader;