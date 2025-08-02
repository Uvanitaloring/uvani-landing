"use client";

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimateWrapper } from './animate-wrapper';

const testimonials = [
  {
    name: 'Isabella Dubois',
    rating: 5,
    quote: "The attention to detail is simply breathtaking. My gown from Couture Clickk was the star of the evening. Truly a masterpiece of design and craftsmanship.",
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
];

export function Testimonials() {
  return (
    <AnimateWrapper>
      <section id="testimonials" className="relative overflow-hidden py-28 md:py-40 bg-gradient-to-br from-[#0e0718] via-[#1c0e29] to-[#0e0718]">
        {/* Elegant Patterned Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
        </div>

        {/* Refined Gradient Orbs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <span className="mx-4 font-medium text-amber-400 tracking-wider">TESTIMONIALS</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Words of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Elegance</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed mt-2">
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden">
                      <CardContent className="p-8 flex flex-col items-center text-center">
                        <div className="flex items-center mb-4">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-amber-300 fill-amber-300 drop-shadow" />
                            ))}
                        </div>
                        <p className="font-body text-purple-200/80 italic text-lg">"{testimonial.quote}"</p>
                        <p className="font-headline text-lg font-semibold mt-6 text-white">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!absolute !-left-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#1e102d]/80 to-[#23143a]/80 border-2 border-purple-900/40 shadow-[0_0_30px_5px_rgba(168,85,247,0.12)] hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.22)] backdrop-blur-xl transition-all duration-300 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 focus:ring-2 focus:ring-amber-400/40 z-20" />
            <CarouselNext className="!absolute !-right-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#1e102d]/80 to-[#23143a]/80 border-2 border-purple-900/40 shadow-[0_0_30px_5px_rgba(168,85,247,0.12)] hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.22)] backdrop-blur-xl transition-all duration-300 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 focus:ring-2 focus:ring-amber-400/40 z-20" />
          </Carousel>
        </div>
      </section>
    </AnimateWrapper>
  );
}
