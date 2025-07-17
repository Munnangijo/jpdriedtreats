import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "JP Dried Treats - Premium manufacturer and exporter of dehydrated vegetable and fruit powders from India. High-quality organic, non-GMO products for food processing, nutraceutical, and hospitality industries globally.",
  keywords = "Dehydrated vegetable powder, banana powder, carrot powder, tomato powder, beetroot powder, chili powder, onion powder, leafy vegetable powder, organic food powders, export-quality dehydrated vegetables, food processing ingredients, nutraceutical powders, natural seasonings, spray-dried powders, freeze-dried vegetables",
  image = "/images/jp-dried-treats-social.jpg"
}) => {
  const siteName = "JP Dried Treats";
  const siteUrl = "https://www.jpdriedtreats.com"; // Replace with actual URL when live
  
  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;