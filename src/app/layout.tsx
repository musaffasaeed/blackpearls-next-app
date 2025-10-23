import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
// import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
    template: "%s | Black Pearls Contracting",
  },
  description:
    "Leading MEP contractor in Saudi Arabia delivering integrated civil and MEP construction solutions. Specializing in HVAC, electrical, fire safety, plumbing systems for residential, commercial, and government projects. ISO certified with 15+ years experience.",
  keywords: [
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
  authors: [{ name: "Black Pearls Contracting", url: "https://blackpearls.sa" }],
  creator: "Black Pearls Contracting",
  publisher: "Black Pearls Contracting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blackpearls.sa"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackpearls.sa",
    siteName: "Black Pearls Contracting",
    title: "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
    description:
      "Leading MEP contractor in Saudi Arabia delivering integrated civil and MEP construction solutions. Specializing in HVAC, electrical, fire safety, plumbing systems.",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Black Pearls Contracting - Professional MEP Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blackpearls_sa",
    creator: "@blackpearls_sa",
    title: "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
    description:
      "Leading MEP contractor in Saudi Arabia delivering integrated civil and MEP construction solutions.",
    images: ["/images/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "construction",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en"; // Default locale for root layout

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Black Pearls Contracting",
    description:
      "Leading MEP contractor in Saudi Arabia delivering integrated civil and MEP construction solutions",
    url: "https://blackpearls.sa",
    logo: "https://blackpearls.sa/images/hero-background.jpg",
    image: "https://blackpearls.sa/images/hero-background.jpg",
    telephone: "+966507116423",
    email: "muhammadmusaffa@theblackpearlsa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mishrifah District, 6740",
      addressLocality: "Jeddah",
      postalCode: "23331",
      addressCountry: "SA",
    },
    sameAs: [
      "https://www.linkedin.com/company/blackpearls-contracting",
      "https://twitter.com/blackpearls_sa",
      "https://www.facebook.com/blackpearlscontracting",
    ],
    foundingDate: "2008",
    numberOfEmployees: "50+",
    serviceArea: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HVAC Solutions",
            description: "Energy-efficient climate control systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            description: "Complete electrical infrastructure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire Safety Solutions",
            description: "Comprehensive fire detection and suppression systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Solutions",
            description: "Advanced water supply and drainage systems",
          },
        },
      ],
    },
  };

  return (
    <html lang={locale} dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* <NextIntlClientProvider> */}
        <Providers>{children}</Providers>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
