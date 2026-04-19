#!/usr/bin/env node
/*
  Build-time sitemap generator. Emits dist/sitemap.xml.

  Why not hand-maintain public/sitemap.xml?
  - Forgets new pages
  - lastmod drifts out of sync with real content changes
  - Blog was split to blogs.twsgurukulx.com — static sitemap kept listing dead URLs

  Google's own guidance (developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap):
  - Ignores <priority> and <changefreq>
  - Uses <lastmod> if "consistently and verifiably accurate"
  → We emit only <loc> + <lastmod>, and lastmod comes from file mtime of the
    page's source .tsx file (changes when the page is actually edited).

  Blog URLs are NOT included. Blog lives at blogs.twsgurukulx.com, which has
  its own sitemap. Including twsgurukulx.com/blog/* here would duplicate them.
*/

import { writeFileSync, statSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const BASE = 'https://www.twsgurukulx.com';

/**
 * Map of route path → source file whose mtime represents the "last modified" for the page.
 * Pick a file that changes when the page content changes (usually the page component).
 */
const routes = [
  { path: '/', source: 'src/pages/Home/HomePage.tsx' },
  { path: '/mentorship', source: 'src/pages/Mentorship/MentorshipPage.tsx' },
  { path: '/footprint', source: 'src/pages/Footprint/FootprintPage.tsx' },
  { path: '/crypto', source: 'src/pages/Crypto/CryptoPage.tsx' },
  { path: '/prop-firm-safety-checker', source: 'src/pages/PropScanner/PropScannerPage.tsx' },
  { path: '/quiz', source: 'src/pages/Quiz/QuizLandingPage.tsx' },
  { path: '/results-and-claims', source: 'src/pages/Results/ResultsAndClaims.tsx' },
  { path: '/terms', source: 'src/pages/Legal/TermsPage.tsx' },
  { path: '/privacy', source: 'src/pages/Legal/PrivacyPage.tsx' },
  { path: '/disclaimer', source: 'src/pages/Legal/DisclaimerPage.tsx' },
  { path: '/refunds', source: 'src/pages/Legal/RefundPage.tsx' },
  { path: '/cookies', source: 'src/pages/Legal/CookiePage.tsx' },
];

const isoDate = (d) => d.toISOString().slice(0, 10);

const buildSitemapXml = () => {
  const urls = routes.map(({ path, source }) => {
    const sourcePath = resolve(repoRoot, source);
    const mtime = statSync(sourcePath).mtime;
    return `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${isoDate(mtime)}</lastmod>\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
};

export const generateSitemap = (outDir = resolve(repoRoot, 'dist')) => {
  const xml = buildSitemapXml();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf8');
  return xml;
};

// CLI entry: `node scripts/generate-sitemap.mjs [outDir]`
// Compare file paths (handles URL-encoded spaces, etc.) — the simple string
// equality against `file://${argv[1]}` fails when the repo path has spaces.
const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  const out = process.argv[2] ? resolve(process.argv[2]) : resolve(repoRoot, 'dist');
  generateSitemap(out);
  console.log(`Wrote ${out}/sitemap.xml with ${routes.length} URLs.`);
}
