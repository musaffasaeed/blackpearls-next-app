import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
  description:
    "Integrated civil and MEP construction for residential, commercial and government projects. Structural integrity, smart building systems, and full lifecycle delivery.",
  authors: [{ name: "Black Pearls Contracting" }],
  openGraph: {
    title: "Black Pearls Contracting — Civil & MEP Construction Solutions, Saudi Arabia",
    description:
      "Integrated civil and MEP construction for residential, commercial and government projects in Saudi Arabia.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "Black Pearls Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
