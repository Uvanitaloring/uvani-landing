import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Footer } from '@/components/couture-clickk/footer';

export const metadata: Metadata = {
  title: 'Couture Clickk',
  description: 'Where fashion meets timeless elegance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative min-h-screen bg-gradient-to-br from-[#1a1026] via-[#2d183a] to-[#1a1026] overflow-x-hidden">
        {/* Global Royal Dark Patterned Background */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute inset-0 bg-[url('/royal-damask.svg')] bg-repeat bg-center" />
          </div>
          <div className="absolute top-24 right-24 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-purple-700/20 to-rose-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-24 left-24 w-80 h-80 bg-gradient-to-br from-purple-700/15 via-blue-900/10 to-amber-700/15 rounded-full blur-3xl" />
          <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-purple-700/20 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10">
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
