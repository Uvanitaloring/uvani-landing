"use client";

import { Playfair_Display, Sora } from 'next/font/google';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimateWrapper } from './animate-wrapper'; // Assuming this is your animation wrapper

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

const testimonials = [
  {
    name: 'Isabella Dubois',
    rating: 5,
    quote: "The attention to detail is simply breathtaking. My gown from Uvani was the star of the evening. Truly a masterpiece of design and craftsmanship.",
  },
  {
    name: 'Alexander Sterling',
    rating: 5,
    quote: "Exceptional service and unparalleled quality. The custom suit I ordered exceeded all my expectations. It's rare to find such dedication to perfection.",
  },
  {
    name: 'Chloé Laurent',
    rating: 5,
    quote: "From the moment I unboxed my handbag, I knew it was special. The quality of the leather, the flawless stitching... it's wearable art. I feel incredibly chic.",
  },
  // Add more testimonials for a better loop effect
  {
    name: 'Kenji Tanaka',
    rating: 5,
    quote: "The fabric feels incredible and the fit is immaculate. This is what true luxury feels like. I will be returning for future events.",
  },
];

export function Testimonials() {
  return (
    <AnimateWrapper>
      <section
        id="testimonials"
        className={`relative overflow-hidden py-20 sm:py-28 md:py-40 bg-none ${fontSans.variable} ${fontSerif.variable}`}
      >
        {/* Elegant Patterned Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
        </div>

        {/* IMPROVEMENT: Refined Gradient Orb sizes and positions for mobile */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px] sm:-top-32 sm:-right-32" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

  <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block mb-3 sm:mb-4 text-xs font-sans font-semibold tracking-wider text-[#C09A6C] uppercase">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium text-neutral-100 mb-4 sm:mb-6">
              Words of <span className="text-[#C09A6C]">Elegance</span>
            </h2>
            <div className="mt-5 sm:mt-6 h-px w-20 sm:w-24 bg-gradient-to-r from-[#C09A6C] to-transparent mx-auto" />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
              What our discerning clients say about us.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-purple-600/50 hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden group">
                      <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow">
                        <div className="flex items-center mb-4 sm:mb-5">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 fill-amber-300 drop-shadow-md" />
                            ))}
                        </div>
                        <p className="text-neutral-300 font-sans italic text-base sm:text-lg leading-relaxed">"{testimonial.quote}"</p>
                        <p className="text-base sm:text-lg font-serif font-semibold mt-5 sm:mt-6 text-[#F4E8D8]">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* --- IMPROVEMENT: Responsive Carousel Controls --- */}
            {/* On mobile, they are inside the carousel. On md screens and up, they move outside. */}
            <CarouselPrevious 
              className="absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 md:w-12 md:h-12 md:-left-16 text-amber-300 hover:text-white rounded-full bg-[#1e102d]/70 hover:bg-[#1e102d] border-2 border-purple-900/40 hover:border-amber-400 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/20 z-20" 
            />
            <CarouselNext 
              className="absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 md:w-12 md:h-12 md:-right-16 text-amber-300 hover:text-white rounded-full bg-[#1e102d]/70 hover:bg-[#1e102d] border-2 border-purple-900/40 hover:border-amber-400 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/20 z-20" 
            />

          </Carousel>
        </div>
      </section>
    </AnimateWrapper>
  );
}