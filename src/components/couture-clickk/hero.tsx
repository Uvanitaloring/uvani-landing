"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from 'lucide-react';

// --- Re-usable Animation Variants ---

// This container staggers the animation of its children.
const staggerContainer = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.08,
    },
  }),
};

// Each word will slide up and fade in.
const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
};

// --- Animated Text Component ---
// A dedicated component to handle the word-by-word animation.
const AnimatedText = ({ text, el: Wrapper = 'h1', className, delay = 0 }: { text: string; el?: keyof JSX.IntrinsicElements; className?: string; delay?: number }) => {
  const words = text.split(" ");
  
  return (
    <Wrapper className={className}>
      <motion.span
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        custom={delay} // Pass delay to staggerContainer
        aria-label={text}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariant}
            className="inline-block"
            style={{ paddingRight: '0.25em' }} // Adjust spacing between words
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};


const heroMessages = [
  {
    title: "Premium Stitching At Your Doorstep",
    subtitle: "Experience the blend of tradition and technology.",
  },
  {
    title: "Custom Designs Just For You",
    subtitle: "Personalized fits tailored to your unique vibe.",
  },
  {
    title: "Style Meets Ultimate Convenience",
    subtitle: "From measurements to delivery, we handle it all.",
  },
];


export function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0); // 0 or 1

  // Timer-based crossfade between two looping videos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => 1 - prev);
    }, 12000); // 12 seconds per video, adjust as needed
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Crossfading Background Videos */}
      {["/couture-background.mp4", "/hero-bg.mp4"].map((src, idx) => (
        <video
          key={src}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${activeVideo === idx ? 'opacity-100' : 'opacity-0'}`}
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      ))}
      
      {/* Aesthetic Overlay: A vignette effect to focus attention on the center */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Content - slightly higher */}
      <div className="relative z-20 p-4 flex flex-col items-center max-w-5xl mt-16 md:mt-28 lg:mt-32">
        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent>
            {heroMessages.map((message, index) => (
              <CarouselItem key={index}>
                {/* AnimatePresence and a unique key ensure the animation re-runs on slide change */}
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={current} // Change key to force re-render
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center space-y-4"
                    >
                      <AnimatedText 
                        text={message.title} 
                        el="h1" 
                        className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-shadow-md"
                      />
                      <AnimatedText 
                        text={message.subtitle} 
                        el="p" 
                        delay={0.5} // Delay the subtitle animation
                        className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl text-shadow"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Interactive Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            asChild
            size="lg"
            className="mt-12 group rounded-full text-base font-semibold px-8 py-6 bg-gradient-to-r from-[#D4AF37] to-[#A47C34] text-black hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 transform hover:scale-105"
          >
            <a href="#services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}