import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <Link href="/" className="font-headline text-2xl font-bold text-primary">
              Couture Clickk
            </Link>
            <p className="text-muted-foreground mt-2 font-body">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <nav className="flex gap-6 font-body text-foreground">
            <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex gap-5">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
