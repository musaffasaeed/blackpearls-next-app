"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
  description = "Leading MEP contractor in Saudi Arabia delivering integrated civil and MEP construction solutions. Specializing in HVAC, electrical, fire safety, plumbing systems for residential, commercial, and government projects.",
  keywords = [
    "MEP contractor Saudi Arabia",
    "civil construction Riyadh",
    "HVAC systems installation",
    "electrical contractor",
    "fire safety systems",
    "plumbing solutions",
    "construction company Saudi",
    "building contractor",
    "MEP engineering",
    "commercial construction",
    "residential construction",
    "government projects",
  ],
  image = "/images/hero-background.jpg",
  url = "https://blackpearls.sa",
  type = "website",
}: SEOProps) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Black Pearls Contracting" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Black Pearls Contracting" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@blackpearls_sa" />
      <meta property="twitter:creator" content="@blackpearls_sa" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="geo.position" content="24.7136;46.6753" />
      <meta name="ICBM" content="24.7136, 46.6753" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Riyadh, Saudi Arabia" />
      <meta name="business:contact_data:locality" content="Riyadh" />
      <meta name="business:contact_data:region" content="Riyadh Province" />
      <meta name="business:contact_data:postal_code" content="12345" />
      <meta name="business:contact_data:country_name" content="Saudi Arabia" />

      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Black Pearls" />

      {/* Performance */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />

      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  );
};
