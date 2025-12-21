const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Update this default to your production site URL or set SITE_URL env var
const SITE_URL = process.env.SITE_URL || 'https://example.com';
const API_URL = process.env.API_URL || 'http://localhost:5000/api';

const staticRoutes = [
  '/',
  '/about',
  '/episodes',
  '/news',
  '/gallery',
  '/team',
  '/services',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions'
];

async function fetchDynamicUrls() {
  const urls = [];
  try {
    // Try fetching episodes if backend is available
    const res = await axios.get(`${API_URL}/episodes`);
    if (Array.isArray(res.data)) {
      res.data.forEach((ep) => {
        // If your site has per-episode pages, add them here. Adjust path if needed.
        if (ep.slug) {
          urls.push(`/episodes/${ep.slug}`);
        } else if (ep._id) {
          urls.push(`/episodes/${ep._id}`);
        }
      });
    }
  } catch (err) {
    console.warn('Could not fetch episodes from API (skipping dynamic routes):', err.message);
  }
  return urls;
}

function buildSitemap(allRoutes) {
  const lastmod = new Date().toISOString();
  const urls = allRoutes
    .map((route) => {
      const loc = `${SITE_URL.replace(/\/$/, '')}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

(async function main() {
  const dynamic = await fetchDynamicUrls();
  const all = Array.from(new Set([...staticRoutes, ...dynamic]));
  const xml = buildSitemap(all);
  const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Sitemap written to ${outPath} (containing ${all.length} URLs).`);
})();
