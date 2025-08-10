"use client";

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, easeInOut } from 'framer-motion';
import { ArrowRight, Crown, Users, Award } from 'lucide-react';
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

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 }
  }
};

// --- Features Data ---
const features = [
  { 
    icon: Crown, 
    title: "Generational Craft",
    description: "Centuries-old techniques passed through artisan families"
  },
  { 
    icon: Users, 
    title: "Master Artisans",
    description: "Each piece handcrafted by certified textile masters"
  },
  { 
    icon: Award, 
    title: "Unrivaled Quality",
    description: "Materials and craftsmanship of the highest caliber"
  },
];

export function About() {
  const autoplayRef = useRef(
    typeof window !== 'undefined'
      ? Autoplay({ delay: 4000, stopOnInteraction: false })
      : undefined
  );

  return (
    <section
      id="about"
  className={`py-16 sm:py-20 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      <motion.div
        className="container mx-auto px-6 lg:px-8 max-w-7xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Image Carousel */}
          <motion.div 
            className="relative h-[520px] lg:h-[640px] flex items-center" 
            variants={fadeIn}
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#C09A6C]/30 to-[#8A5A44]/30 blur-lg opacity-50"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Carousel
                opts={{ align: 'center', loop: true }}
                plugins={[autoplayRef.current]}
                className="w-full max-w-lg mx-auto"
              >
                <CarouselContent>
                  {[1,2,3,4].map((num) => (
                    <CarouselItem key={num} className="flex items-center justify-center">
                      <Card className="bg-gradient-to-br from-[#1e102d]/90 to-[#23143a]/90 border border-[#C09A6C]/20 shadow-2xl rounded-2xl overflow-hidden p-0 flex items-center justify-center h-[420px] w-[340px] lg:h-[540px] lg:w-[440px] relative group">
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#C09A6C]/10 via-transparent to-transparent" />
                        <Image
                          src={`/about-images/about-img-${num}.jpg`}
                          alt={`Uvani craftsmanship ${num}`}
                          fill
                          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 90vw, 440px"
                          priority={num === 1}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
                        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-lg font-serif text-[#F4E8D8] tracking-widest uppercase">
                          Uvani
                        </span>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants}>
              <span className="inline-block mb-3 text-xs font-sans font-medium tracking-widest text-[#C09A6C] uppercase">
                Artisan Heritage
              </span>
              
              <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] leading-tight font-medium text-neutral-100">
                Where Tradition Meets <span className="text-[#C09A6C]">Timeless</span> Elegance
              </h2>

              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C09A6C] to-transparent"></div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans"
            >
              Uvani represents the pinnacle of artisanal textile craftsmanship. Our atelier brings together master weavers from generations of tradition, creating pieces that embody both heritage and contemporary sophistication.
            </motion.p>
            
            {/* Features List */}
            <motion.div 
              className="mt-12 space-y-6"
              variants={sectionVariants}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.title} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-center p-2 rounded-lg bg-[#C09A6C]/10 border border-[#C09A6C]/20">
                    <feature.icon className="w-5 h-5 text-[#C09A6C]" strokeWidth={1.8}/>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-neutral-100 font-sans">{feature.title}</h3>
                    <p className="mt-1 text-neutral-400 font-sans text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="mt-14 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link href="#contact" passHref>
                <Button 
                  size="lg"
                  className="group inline-flex items-center justify-center px-8 py-5 bg-[#C09A6C] text-neutral-900 hover:bg-[#D4B483] hover:text-neutral-900
                  rounded-lg font-sans font-medium text-base tracking-wide
                  transition-all duration-300 ease-out
                  focus-visible:ring-2 focus-visible:ring-[#C09A6C]/50 focus-visible:ring-offset-2
                  shadow-lg shadow-[#C09A6C]/20 hover:shadow-[#D4B483]/30"
                >
                  Discover Our Collections
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#process" passHref>
                <Button 
                  variant="outline"
                  size="lg"
                  className="group inline-flex items-center justify-center px-8 py-5 bg-transparent text-neutral-200 border border-neutral-600 hover:border-neutral-400
                  rounded-lg font-sans font-medium text-base tracking-wide
                  transition-all duration-300 ease-out
                  hover:bg-neutral-800/30 hover:text-neutral-100
                  focus-visible:ring-2 focus-visible:ring-neutral-600/50 focus-visible:ring-offset-2"
                >
                  Our Craftsmanship
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}