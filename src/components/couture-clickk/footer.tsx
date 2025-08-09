
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
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
    <svg
      width="200"
      height="60"
      viewBox="0 0 258 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-auto"
    >
      <path
        d="M106.828 68.9953C122.924 64.9124 135.98 52.8804 141.516 38.3188C142.923 34.4696 143.511 30.3423 143.28 26.2307C142.712 16.2941 137.953 7.37191 130.344 1.70659C128.423 0.121591 126.13 -0.372559 123.822 0.245891C112.592 3.93119 104.936 14.074 103.529 25.6881C102.585 33.7258 105.074 41.8384 109.919 47.795C110.238 48.1883 110.569 48.5721 110.893 48.9634C111.025 49.1235 111.161 49.2801 111.291 49.442C100.864 54.4923 91.2483 58.0772 80.9507 62.7758C70.613 67.4921 60.7981 70.9999 50.1171 70.9999C36.8164 70.9999 24.3157 66.8643 14.8018 59.8652C5.28789 52.866 0 43.6231 0 33.3752C0 23.1273 5.28789 13.8844 14.8018 6.88525C24.3157 -0.113892 36.8164 -4.24941 50.1171 -4.24941C61.4328 -4.24941 72.015 -1.53779 80.6872 3.65016C82.0163 4.29336 83.1613 5.38171 83.899 6.74542C84.6367 8.10912 84.9317 9.66442 84.7381 11.201C84.1873 15.6593 81.4283 19.6675 77.4235 22.0945C75.0531 23.5517 72.3274 24.1169 69.658 23.6826C65.3353 23.0039 61.5908 20.3248 59.5442 16.518C57.9715 13.5658 58.5594 9.98098 60.9855 7.62174C61.3578 7.26034 61.7618 6.93294 62.1915 6.63464C58.5461 5.37894 54.4842 4.75049 50.1171 4.75049C39.4361 4.75049 29.8732 8.35304 23.5132 14.512C17.1532 20.671 13.7933 29.626 13.7933 39.021C13.7933 48.416 17.1532 57.3709 23.5132 63.5299C29.8732 69.6889 39.4361 73.2915 50.1171 73.2915C60.8381 73.2915 70.4795 69.9143 79.9934 64.2141L80.9507 62.7758C81.8845 61.328 82.3565 59.6455 82.2885 57.9478C81.8239 46.9477 87.0519 36.6669 95.8913 29.9881C99.7393 27.0863 104.28 25.2933 109.116 24.8703C115.823 24.284 122.399 26.6083 127.135 31.096C130.641 34.4234 132.887 38.8028 133.438 43.5134C134.025 48.5173 132.74 53.512 129.876 57.5657L129.278 58.384C128.892 58.9482 128.435 59.4674 127.915 59.9298C127.764 60.0719 127.605 60.2052 127.452 60.3413C127.108 60.627 126.744 60.8878 126.387 61.1594C126.111 61.3619 125.829 61.5543 125.541 61.7495C120.339 65.5034 113.882 67.7554 106.828 68.9953Z"
        fill="url(#paint0_linear_1_2_footer)"
      />
      <path
        d="M98.6792 1.83984L97.2314 3.2876C96.9639 3.55508 96.7597 3.87944 96.6348 4.23828L88.2422 27.8174H106.696L108.144 26.3696C108.411 26.1021 108.616 25.7778 108.74 25.4189L117.133 1.83984H98.6792Z"
        fill="url(#paint1_linear_1_2_footer)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2_footer"
          x1="71.6441"
          y1="-4.24941"
          x2="71.6441"
          y2="73.2915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#A47C34" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2_footer"
          x1="102.688"
          y1="1.83984"
          x2="102.688"
          y2="27.8174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#A47C34" />
        </linearGradient>
      </defs>
      <text
        x="150"
        y="30"
        fontFamily="Lato, sans-serif"
        fontSize="20"
        fill="#333"
        fontWeight="bold"
      >
        COUTURE CLICK
      </text>
      <text
        x="150"
        y="50"
        fontFamily="Lato, sans-serif"
        fontSize="10"
        fill="#666"
      >
        RESHAPING ALTERATIONS AT HOME
      </text>
    </svg>
  );

export function Footer() {
  return (
    <footer className={`bg-background border-t ${fontSans.variable} ${fontSerif.variable}`}>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="md:col-span-1">
             <Link href="/">
                <Logo />
             </Link>
            <p className="text-neutral-300 mt-4 font-sans text-sm">
              Couture Clickk is your premier destination for high-end fashion alterations, blending traditional craftsmanship with modern convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-[#C09A6C]">Quick Links</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="#about" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">About Us</Link></li>
              <li><Link href="#services" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">Services</Link></li>
              <li><Link href="#how-it-works" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">How We Work</Link></li>
              <li><Link href="#collection" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">Collection</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-[#C09A6C]">Support</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="#contact" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">Contact Us</Link></li>
              <li><Link href="#" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">FAQ</Link></li>
              <li><Link href="#" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="#" className="text-purple-200/80 hover:text-amber-300 transition-colors font-medium">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-[#C09A6C]">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-purple-200/80 hover:text-amber-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-purple-200/80 hover:text-amber-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-purple-200/80 hover:text-amber-300 transition-colors" />
              </Link>
               <Link href="#" aria-label="Youtube">
                <Youtube className="h-6 w-6 text-purple-200/80 hover:text-amber-300 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-purple-200/80 hover:text-amber-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
  <div className="mt-12 border-t pt-8 text-center text-sm text-neutral-400 font-sans">
          <p>&copy; {new Date().getFullYear()} Couture Clickk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
