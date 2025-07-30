"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const heroMessages = [
  {
    title: "Premium Stitching at Your Doorstep",
    subtitle: "Experience the blend of tradition and technology.",
  },
  {
    title: "Custom Designs, Just for You",
    subtitle: "Personalized fits tailored to your vibe.",
  },
  {
    title: "Style Meets Convenience",
    subtitle: "From measurements to delivery, we handle it all.",
  },
];


export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A high-fashion model wearing a couture outfit"
        data-ai-hint="luxury fashion model"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl">
        <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {heroMessages.map((message, index) => (
                    <CarouselItem key={index}>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
                                {message.title}
                            </h1>
                            <p className="font-body text-lg md:text-xl lg:text-2xl mt-4 italic">
                                {message.subtitle}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <Button size="lg" className="mt-8 text-lg px-8 py-6">
          Shop the Collection
        </Button>
      </div>
    </section>
  );
}
