import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">
              Final CTA Section - Testing
            </span>
          </h2>
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg">
            Test Button <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;