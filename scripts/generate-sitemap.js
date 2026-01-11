import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Update this default to your production site URL or set SITE_URL env var
const SITE_URL = process.env.SITE_URL || 'https://example.com';
const API_URL = process.env.API_URL || 'http://localhost:5000/api';

const staticRoutes = [
  '/',
  '/about',
  '/videos',
  '/news',
  '/gallery',
  '/team',
  '/services',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

async function fetchDynamicUrls() {
  const urls = [];
  try {
    const res = await axios.get(`${API_URL}/episodes`);
    if (Array.isArray(res.data)) {
      res.data.forEach((ep) => {
        if (ep.slug) {
          urls.push(`/episodes/${ep.slug}`);
        } else if (ep._id) {
          urls.push(`/episodes/${ep._id}`);
        }
      });
    }
  } catch (err) {
    console.warn(
      '⚠️ Could not fetch episodes from API (skipping dynamic routes):',
      err.message
    );
  }
  return urls;
}

function buildSitemap(allRoutes) {
  const lastmod = new Date().toISOString();
  const urls = allRoutes
    .map((route) => {
      const loc = `${SITE_URL.replace(/\/$/, '')}${route}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

async function main() {
  const dynamicRoutes = await fetchDynamicUrls();
  const allRoutes = Array.from(
    new Set([...staticRoutes, ...dynamicRoutes])
  );

  const sitemapXml = buildSitemap(allRoutes);
  const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  fs.writeFileSync(outPath, sitemapXml, 'utf8');

  console.log(
    `✅ Sitemap written to ${outPath} (containing ${allRoutes.length} URLs)`
  );
}

main();
