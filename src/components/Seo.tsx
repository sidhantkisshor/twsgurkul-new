import React from 'react';

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, ogTitle, ogDescription }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
    </>
  );
};

export default Seo; 