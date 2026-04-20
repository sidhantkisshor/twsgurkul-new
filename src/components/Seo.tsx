import React from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  /** When set alongside ogType="product", emits product:price:amount/currency OG meta (Meta 2025+). */
  productPriceAmount?: string | number;
  productPriceCurrency?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  productPriceAmount,
  productPriceCurrency,
  noIndex = false,
  jsonLd,
}) => {
  const isProduct = ogType === 'product';
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {isProduct && productPriceAmount !== undefined && (
        <meta property="product:price:amount" content={String(productPriceAmount)} />
      )}
      {isProduct && productPriceCurrency && (
        <meta property="product:price:currency" content={productPriceCurrency} />
      )}
      {isProduct && productPriceAmount !== undefined && (
        <meta property="og:price:amount" content={String(productPriceAmount)} />
      )}
      {isProduct && productPriceCurrency && (
        <meta property="og:price:currency" content={productPriceCurrency} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:url" content={canonicalUrl} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

export default Seo;
