
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

export function Subscribe() {
  return (
    <section
      id="subscribe"
  className={`relative overflow-hidden pt-8 pb-24 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
          </span>
          <span className="text-xs font-sans font-semibold tracking-widest text-[#C09A6C] uppercase">Newsletter</span>
          <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-100 mb-4">
          Join The <span className="text-[#C09A6C]">Elite</span>
        </h2>
        <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, private sales, and a world of luxury.
        </p>
        <form className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email for VIP access"
            className="flex-grow bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 text-white placeholder:text-purple-200/60 h-12 text-base focus:ring-amber-400/40 backdrop-blur-xl rounded-xl"
          />
          <Button type="submit" size="lg" className="h-12 group relative px-8 font-bold border-3 border-purple-900/40 text-white bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-purple-900/30 hover:to-rose-900/30 backdrop-blur-xl transition-all duration-500 rounded-2xl shadow-[0_0_40px_5px_rgba(168,85,247,0.18)] hover:shadow-[0_0_60px_10px_rgba(168,85,247,0.25)] overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
            <span className="relative z-10">Subscribe</span>
          </Button>
        </form>
      </div>
    </section>
  );
}
