"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Users, Award } from 'lucide-react';

// Animation variants for staggered fade-in effect
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // A smoother, more premium ease
    },
  },
};

const features = [
  { icon: Crown, title: "Generational Craft" },
  { icon: Users, title: "Master Artisans" },
  { icon: Award, title: "Unrivaled Quality" },
];

export function About() {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32"
    >
      <motion.div 
        className="container mx-auto px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 1. A single, powerful image with a subtle pan/zoom effect */}
          <motion.div
            className="relative h-[550px] sm:h-[650px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/about-images/about-img-1.jpg" // Choose your most compelling image
                alt="Intricate traditional embroidery on silk fabric"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle gradient to enhance text readability if placed on top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </motion.div>

          {/* 2. Refined, concise typography and content */}
          <div className="flex flex-col">
            <motion.h2 
              className="font-serif text-5xl md:text-6xl font-medium leading-tight text-[#E6E6E6]"
              variants={itemVariants}
            >
              Weaving a Legacy of Timeless Elegance.
            </motion.h2>

            <motion.p 
              className="mt-6 text-lg text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Our atelier is a sanctuary of heritage, where master artisans dedicate their lives to preserving the world's most revered textile traditions. Each piece is a testament to unparalleled skill and a celebration of enduring beauty.
            </motion.p>
            
            {/* 3. Simplified, elegant feature list */}
            <motion.div 
              className="mt-10 space-y-6"
              variants={itemVariants}
            >
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-full p-2.5">
                    {/* A more subtle, sophisticated gold color */}
                    <feature.icon className="w-5 h-5 text-[#BFA181]" />
                  </div>
                  <span className="ml-4 text-base font-medium text-gray-300">{feature.title}</span>
                </div>
              ))}
            </motion.div>

            {/* 4. A single, clean, and confident Call to Action */}
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <Link href="#contact" passHref>
                <Button 
                  size="lg"
                  className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-xl font-bold text-base transition-all duration-300 border-0
                    bg-gradient-to-r from-[#D4AF37] via-[#A47C34] to-[#6B3F1D] text-[#23143a]
                    shadow-[0_8px_32px_0_rgba(212,175,55,0.18),0_2px_8px_0_rgba(164,124,52,0.12)]
                    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-white/40 before:to-transparent before:opacity-80 before:pointer-events-none
                    after:content-[''] after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-yellow-200/30 after:to-[#D4AF37]/10 after:opacity-60 after:pointer-events-none
                    hover:scale-105 active:scale-95 hover:shadow-[0_12px_36px_0_rgba(212,175,55,0.28),0_4px_16px_0_rgba(164,124,52,0.18)]"
                >
                  <span className="relative z-10">Explore Our Craft</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 z-10 text-[#A47C34]" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}