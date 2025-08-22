import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Footer } from '@/components/couture-clickk/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Uvani - Premium Tailoring Service at Home in Patna | Online Tailors',
  description: 'Uvani offers premium tailoring service at home in Patna. Expert tailoring, alterations, and bespoke clothing delivered to your doorstep. Book online today.',
  keywords: 'tailoring service at home, tailoring, tailoring in Patna, online tailoring, uvani, tailors in Patna, bespoke tailoring, custom stitching, doorstep tailoring Patna, premium tailoring service, expert alterations, men\'s tailoring, women\'s tailoring, Shubham Choudhary',
  authors: [{ name: 'Mohit Kumar' }],
  creator: 'Uvani',
  publisher: 'Uvani',
  metadataBase: new URL('https://uvani.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Uvani - Premium Tailoring Service at Home',
    description: 'Experience premium tailoring at home in Patna with Uvani. Doorstep measurements, expert tailoring, and delivery.',
    url: 'https://uvani.in',
    siteName: 'Uvani',
    images: [
      {
        url: 'https://i.ibb.co/WvkYW6zV/UVANI-logo.png',
        width: 800,
        height: 600,
        alt: 'Uvani Premium Tailoring',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uvani - Premium Tailoring Service at Home',
    description: 'Experience premium tailoring at home in Patna with Uvani. Doorstep measurements, expert tailoring, and delivery.',
    images: ['https://i.ibb.co/WvkYW6zV/UVANI-logo.png'],
    creator: '@uvani',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-7G1EYR6GQ5',
  },
  category: 'fashion',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preload important images */}
        <link rel="preload" as="image" href="https://i.ibb.co/WvkYW6zV/UVANI-logo.png" />
        <link rel="preload" as="image" href="/about-images/about-img-1.jpg" />
        <link rel="preload" as="image" href="/logo/UVANI logo.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TailoringBusiness",
              "name": "Uvani Premium Tailoring Service",
              "description": "Premium tailoring services at your doorstep in Patna. Where fashion meets timeless elegance.",
              "url": "https://uvani.in",
              "telephone": "+91-9304860958",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.5941",
                "longitude": "85.1376"
              },
              "openingHours": "Mo-Su 09:00-21:00",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.5941",
                  "longitude": "85.1376"
                },
                "geoRadius": "20000"
              },
              "sameAs": [
                "https://www.instagram.com/__uvani__/",
                "https://www.facebook.com/profile.php?id=61578809716635",
                "https://x.com/_Uvani_"
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "font-sans antialiased relative min-h-screen overflow-x-hidden",
          inter.variable,
          cormorant.variable
        )}
      >
        <div className="relative z-10">
          {children}
          <Footer />
          <Toaster />
        </div>
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7G1EYR6GQ5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7G1EYR6GQ5');
            `,
          }}
        />
      </body>
    </html>
  );
}