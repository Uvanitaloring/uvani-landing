
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Footer } from '@/components/couture-clickk/footer';


export const metadata: Metadata = {
  title: 'Couture Clickk',
  description: 'Where fashion meets timeless elegance.',
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
      </body>
    </html>
  );
}