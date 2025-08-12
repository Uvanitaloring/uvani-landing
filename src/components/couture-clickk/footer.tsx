import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Playfair_Display, Sora } from 'next/font/google';

// --- Font Setup ---
const fontSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const fontSans = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const Logo = () => (
  <Image
    src="/logo/UVANI logo.png"
    alt="UVANI Logo"
    width={160}
    height={70}
    className="h-16 sm:h-20 w-auto object-contain"
    priority
  />
);

export function Footer() {
  return (
    <footer className={`bg-[#08081f] border-t border-[#1E1E1E] ${fontSans.variable} ${fontSerif.variable}`}>
  <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          {/* Logo and About */}
          <div className="md:col-span-4 text-center md:text-left">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-[#A0A0A0] mt-4 sm:mt-6 font-sans text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              UVANI redefines luxury fashion alterations with unparalleled craftsmanship and contemporary 
              convenience. Our master tailors transform garments into perfect fits while preserving 
              their original elegance.
            </p>
          </div>

          {/* Support Links */}
          <div className="md:col-span-3 md:col-start-6 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-serif font-semibold mb-4 sm:mb-6 text-[#C09A6C] tracking-wide">SUPPORT</h3>
            <ul className="space-y-2 sm:space-y-3 font-sans">
              <li>
                <Link href="#contact" className="text-[#E0E0E0] hover:text-[#C09A6C] transition-colors duration-300 text-sm font-medium flex items-center justify-center md:justify-start">
                  <span className="border-b border-transparent hover:border-[#C09A6C] pb-1">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#E0E0E0] hover:text-[#C09A6C] transition-colors duration-300 text-sm font-medium flex items-center justify-center md:justify-start">
                  <span className="border-b border-transparent hover:border-[#C09A6C] pb-1">FAQ</span>
                </Link>
              </li>
              <li>
                <a
                  href="/docs/Privacy%20Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E0E0] hover:text-[#C09A6C] transition-colors duration-300 text-sm font-medium flex items-center justify-center md:justify-start"
                >
                  <span className="border-b border-transparent hover:border-[#C09A6C] pb-1">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="/docs/Terms%20of%20Use.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E0E0] hover:text-[#C09A6C] transition-colors duration-300 text-sm font-medium flex items-center justify-center md:justify-start"
                >
                  <span className="border-b border-transparent hover:border-[#C09A6C] pb-1">Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3 md:col-start-9 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-serif font-semibold mb-4 sm:mb-6 text-[#C09A6C] tracking-wide">CONNECT</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 justify-center md:justify-start">
              <Link 
                href="https://www.instagram.com/__uvani__/" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#08081f] hover:bg-[#C09A6C] p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0E0] group-hover:text-[#0F0F0F]" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61578809716635" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#08081f] hover:bg-[#C09A6C] p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0E0] group-hover:text-[#0F0F0F]" />
              </Link>
              <Link 
                href="https://x.com/_Uvani_" 
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#08081f] hover:bg-[#C09A6C] p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0E0] group-hover:text-[#0F0F0F]" />
              </Link>
              <Link 
                href="https://www.youtube.com/@Uvani-j7m" 
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#08081f] hover:bg-[#C09A6C] p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0E0] group-hover:text-[#0F0F0F]" />
              </Link>
            </div>
            
            {/* Newsletter Signup (Optional) */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm font-sans font-medium text-[#E0E0E0] mb-2 sm:mb-3">JOIN OUR NEWSLETTER</h4>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#08081f] text-[#E0E0E0] text-sm px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#C09A6C] rounded-l-md sm:rounded-l-none sm:rounded-tl-md sm:rounded-bl-md"
                />
                <button className="bg-[#C09A6C] hover:bg-[#A8845A] text-[#0F0F0F] px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-r-md sm:rounded-r-none sm:rounded-tr-md sm:rounded-br-md mt-2 sm:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#1E1E1E] text-center">
          <p className="text-xs text-[#6A6A6A] font-sans tracking-wide">
            &copy; {new Date().getFullYear()} UVANI. All rights reserved. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}