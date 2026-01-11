SEO assets added to the project

Files added/changed:
- `src/components/SEO.jsx` — a reusable SEO component using react-helmet-async
- `scripts/generate-sitemap.js` — generates `public/sitemap.xml` (run with `node scripts/generate-sitemap.js`)
- `public/robots.txt` — allows crawling and points to sitemap
- `public/manifest.json` — basic web app manifest
- `public/social-image.svg` — default social preview image
- `index.html` — default meta, OG, twitter, canonical, and manifest links added
- `src/main.jsx` — wrapped with `HelmetProvider`
- `package.json` — added `react-helmet-async` dependency and `generate-sitemap` + `prebuild` scripts

Next steps and notes:
1. Update `SITE_URL`:
   - Set the real site URL as an environment variable when generating the sitemap or in your hosting environment.
   - Example (locally): `SITE_URL=https://yourdomain.com node scripts/generate-sitemap.js`
   - You can also set `VITE_SITE_URL` in a `.env` file so the frontend uses it for canonical/OG URLs.

2. Add more per-page metadata:
   - The `SEO` component is reusable—import it into other pages and pass `title`, `description`, `image`, and `path`.
   - I added it to `Home`, `Videos`, and `News` as examples. Add to other pages (About, Team, Gallery, Contact, Services, Privacy/Terms) for best coverage.

3. Content & SEO strategy:
   - Technical SEO (meta tags, sitemap, robots) is only part of ranking. Improve page content, structured data, backlinks, site speed, and mobile UX.
   - Use Google Search Console and submit your sitemap after deployment.

4. Sitemap dynamic content:
   - The generator attempts to fetch Videos from your API; make sure the backend is reachable or update `API_URL` env var.

5. Limitations:
   - No tool can guarantee "top" ranking: ranking depends on competition, content quality, backlinks, and ongoing SEO work.

If you want, I can:
- Add the `SEO` component to all remaining pages now.
- Expand structured data (BreadcrumbList, Organization with social links).
- Configure automatic sitemap generation in CI or the deployment pipeline.

Would you like me to proceed with applying the `SEO` component to all pages and expand the structured data? 
