AdSense integration instructions

What I added:
- A Google AdSense script and meta tag in `index.html` (head):
  - <meta name="google-adsense-account" content="ca-pub-2037031298655823" />
  - <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2037031298655823" crossorigin="anonymous"></script>
- `public/ads.txt` with the line you provided.
- `src/components/AdSense.jsx` — small reusable React wrapper component to render ad slots safely.
- Example placeholder in `src/components/Footer.jsx` showing where to place an ad unit.

How to use the `AdSense` component:
1. Pick an ad slot ID from your AdSense account (it looks like a number like `1234567890`).
2. Import the component where you want to show an ad:

   import AdSense from '../components/AdSense';

3. Add it to your JSX with the slot id:

   <AdSense slot="1234567890" style={{ display: 'block', width: '100%', height: '90px' }} />

   - Use `data-ad-format` (controlled by `format` prop) and `data-full-width-responsive` (prop `responsive`) to control responsiveness.

Notes & warnings:
- AdSense requires your site to be approved and to follow Google policies.
- Do NOT load multiple client scripts with different `data-ad-client` values on the same domain.
- Some ad types (e.g., Auto ads) are controlled from the AdSense dashboard.
- Ad blockers or environments without the external script may cause the ad to not load; `AdSense.jsx` warns in console quietly if the push fails.

If you want, I can:
- Add a sample ad unit to a few pages (Home, News) with recommended responsive styles.
- Add server-side headers or meta tags required for specific ad formats.
- Help verify correct placement and load the site locally and confirm the script is present in the compiled output.
