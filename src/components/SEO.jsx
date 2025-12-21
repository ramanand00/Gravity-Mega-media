import { Helmet } from 'react-helmet-async';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example.com';

const SEO = ({ title, description, image = '/social-image.svg', path = '/', lang = 'en' }) => {
  const url = `${SITE_URL.replace(/\/$/, '')}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_URL,
    "name": title || 'Gravity Mega Media',
    "publisher": {
      "@type": "Organization",
      "name": "Gravity Mega Media",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL.replace(/\/$/, '')}${image}` }
    }
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL.replace(/\/$/, '')}${image}`} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL.replace(/\/$/, '')}${image}`} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
