import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/#programs' },
    { label: 'Footprint Mastery', href: '/footprint' }
  ];

  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-4">
      <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#8A9199]" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {index < items.length - 1 ? (
              <>
                <a
                  href={item.href}
                  className="hover:text-[#C87533] transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </a>
                <meta itemProp="position" content={String(index + 1)} />
                <ChevronRight className="w-3 h-3 text-[#3A4449]" />
              </>
            ) : (
              <>
                <span className="text-[#D0C5B4] font-medium" itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
