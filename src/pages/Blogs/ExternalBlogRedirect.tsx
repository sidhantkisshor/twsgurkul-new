import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EXTERNAL_BLOG = 'https://blogs.twsgurukulx.com';

/*
  Client-side redirect for /blog and /blog/:slug → blogs.twsgurukulx.com.
  The blog was consolidated to its own subdomain, but saved bookmarks / old
  inbound links to /blog/* would otherwise 404 through the SPA fallback.

  For a proper 301 (preferred by Google's duplicate consolidation doc), add
  redirect rules in the Amplify Console → App settings → Rewrites and redirects:
    source: /blog           target: https://blogs.twsgurukulx.com       status: 301
    source: /blog/<*>       target: https://blogs.twsgurukulx.com/<*>   status: 301
  This client-side redirect is a safety net for when the server 301 isn't set up.
*/
export default function ExternalBlogRedirect() {
  const { slug } = useParams<{ slug?: string }>();
  useEffect(() => {
    const target = slug ? `${EXTERNAL_BLOG}/${slug}` : EXTERNAL_BLOG;
    window.location.replace(target);
  }, [slug]);
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-soft-sand/70 font-sans">
      <p>Redirecting to blog…</p>
    </div>
  );
}
