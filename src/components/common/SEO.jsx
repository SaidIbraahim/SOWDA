import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  image = '/favicon.png',
  type = 'website',
  structuredData = null,
  keywords = 'SOWDA, Somali Women Development Agency, women empowerment, NGO in Somalia, FGM prevention, humanitarian aid, community development',
  author = 'SOWDA',
  twitterHandle = '@sowdawomen'
}) => {
  const location = useLocation();
  const canonicalUrl = `https://sowdawomen.org${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://sowdawomen.org${image}`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "SOWDA - Somali Women Development Agency",
    "url": "https://sowdawomen.org",
    "logo": "https://sowdawomen.org/favicon.png",
    "image": "https://sowdawomen.org/favicon.png",
    "description": "Providing humanitarian assistance and resources to vulnerable communities across Somalia, with special focus on women and children. Sustainable Development.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Somalia"
    },
    "sameAs": [
      "https://twitter.com/sowdawomen",
      "https://www.facebook.com/sowdawomen"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="SOWDA - Somali Women Development Agency" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 