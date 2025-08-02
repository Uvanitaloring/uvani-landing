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
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Words of <span className="text-primary">Elegance</span></h2>
            <p className="font-body text-lg text-muted-foreground mt-2">What our discerning clients say about us.</p>
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
                    <Card className="h-full flex flex-col justify-between shadow-lg">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="flex items-center mb-4">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                            ))}
                        </div>
                        <p className="font-body text-muted-foreground italic">"{testimonial.quote}"</p>
                        <p className="font-headline text-lg font-semibold mt-6">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </AnimateWrapper>
  );
}
