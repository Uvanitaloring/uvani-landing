
"use client";

import { Gem, Award, Home, UserCheck } from 'lucide-react';
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

const benefits = [
  {
    icon: Gem,
    title: 'Handcrafted Quality',
    description: 'Every piece is meticulously crafted by master artisans using generations of expertise.',
  },
  {
    icon: Award,
    title: 'Exclusive Designs',
    description: 'Our limited-run collections ensure you own a unique piece of fashion history.',
  },
  {
    icon: Home,
    title: 'At-Home Convenience',
    description: 'We bring our expert tailoring services directly to your doorstep, saving you time and hassle.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Fit',
    description: 'We go beyond alterations to ensure your garment complements your unique style and physique perfectly.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="benefits"
      className={`relative overflow-hidden py-20 sm:py-28 md:py-40 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
  <div className="absolute -top-32 -right-32 hidden sm:block w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
  <div className="absolute -bottom-40 -left-40 hidden sm:block w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
  <div className="absolute top-1/2 left-1/4 hidden sm:block w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

  <div className="container mx-auto px-4 sm:px-6 max-w-full sm:max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C09A6C] uppercase">Why Choose Us</span>
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium text-neutral-100 mb-4 sm:mb-6">
            The Uvani <span className="text-[#C09A6C]">Promise</span>
          </h2>
          <div className="mt-5 sm:mt-6 h-px w-20 sm:w-24 bg-gradient-to-r from-[#C09A6C] to-transparent mx-auto" />
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Experience the difference of true luxury, convenience, and craftsmanship with every stitch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center p-6 sm:p-8 bg-gradient-to-b from-[#1e102d]/90 to-[#0f081b]/90 border border-[#C09A6C]/10 shadow-lg hover:shadow-xl shadow-[#1e102d]/20 hover:shadow-[#6d28d9]/30 backdrop-blur-sm transition-all duration-300 rounded-xl overflow-hidden relative"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-500/10 to-purple-900/20 mb-4 sm:mb-6 group-hover:bg-gradient-to-br group-hover:from-amber-500/20 group-hover:to-purple-900/30 transition-all duration-500">
                <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#F4E8D8] mb-2">{benefit.title}</h3>
              <p className="text-neutral-300 font-sans text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
