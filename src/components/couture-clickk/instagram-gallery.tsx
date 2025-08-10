
import Image from 'next/image';
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

const galleryImages = [
  { src: '/social-1.png', alt: 'Lookbook image 1', aiHint: 'lookbook' },
  { src: '/social-2.png', alt: 'Lookbook image 2', aiHint: 'lookbook' },
  { src: '/social-3.png', alt: 'Lookbook image 3', aiHint: 'lookbook' },
  { src: '/social-4.png', alt: 'Lookbook image 4', aiHint: 'lookbook' },
  { src: '/social-5.png', alt: 'Lookbook image 5', aiHint: 'lookbook' },
  { src: '/social-6.png', alt: 'Lookbook image 6', aiHint: 'lookbook' },
  { src: '/social-7.png', alt: 'Lookbook image 7', aiHint: 'lookbook' },
  { src: '/social-8.png', alt: 'Lookbook image 8', aiHint: 'lookbook' },
  { src: '/about-images/about-img-1.jpg', alt: 'Atelier detail', aiHint: 'atelier detail' },
];
export function InstagramGallery() {
  return (
    <section
      id="gallery"
      className={`relative overflow-hidden py-28 md:py-40 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C09A6C] uppercase">Instagram Gallery</span>
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight font-medium text-neutral-100 mb-6">
            Social <span className="text-[#C09A6C]">Lookbook</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#C09A6C] to-transparent mx-auto" />
          <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Follow our journey on Instagram <span className="text-[#C09A6C] font-semibold">@Uvani</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden aspect-square relative group rounded-2xl bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-purple-900/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
