"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shirt, Ruler, Scissors, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, easeInOut } from 'framer-motion';
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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const services = [
  {
    icon: Shirt,
    title: 'Doorstep Tailoring',
    description: 'Professional tailoring brought directly to your home for ultimate convenience.',
    href: '/services/doorstep-tailoring',
    accentColor: 'from-[#C09A6C] to-[#D4B483]'
  },
  {
    icon: Ruler,
    title: 'Precision Measurements',
    description: 'Accurate measurements taken at your location by our skilled tailors.',
    href: '/services/measurements',
    accentColor: 'from-[#8A5A44] to-[#C09A6C]'
  },
  {
    icon: Scissors,
    title: 'Expert Alterations',
    description: 'Precise adjustments to ensure your garments fit you perfectly every time.',
    href: '/services/alterations',
    accentColor: 'from-[#6C4A36] to-[#8A5A44]'
  },
  {
    icon: ShoppingBag,
    title: 'Corporate Solutions',
    description: 'Custom uniform programs with guaranteed quality and consistent fitting.',
    href: '/services/bulk-orders',
    accentColor: 'from-[#4A3628] to-[#6C4A36]'
  },
];

export function Services() {
  return (
    <section
      id="services"
      className={`pt-16 pb-24 sm:pt-20 sm:pb-32 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      <motion.div
  className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          variants={fadeIn}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 sm:gap-4 mb-4"
            variants={itemVariants}
          >
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C09A6C] uppercase">Tailoring Excellence</span>
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium text-neutral-100"
            variants={itemVariants}
          >
            Bespoke Services <span className="text-[#C09A6C]">Crafted</span> for You
          </motion.h2>
          
          <motion.div 
            className="mt-5 sm:mt-6 h-px w-20 sm:w-24 bg-gradient-to-r from-[#C09A6C] to-transparent mx-auto"
            variants={itemVariants}
          />
          
          <motion.p 
            className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Our concierge tailoring services combine traditional craftsmanship with modern convenience, delivering exceptional results wherever you are.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <Card className="h-full flex flex-col bg-gradient-to-br from-[#1e102d]/90 to-[#23143a]/90 border border-[#C09A6C]/10 p-6 transition-all duration-300 hover:border-[#C09A6C]/30 hover:shadow-lg hover:shadow-[#C09A6C]/10">
                <div className="flex flex-col h-full">
                  {/* Icon and Heading Row */}
                  <div className="flex items-center mb-5 gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.accentColor} shadow-md flex-shrink-0`}>
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#F4E8D8]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-neutral-300 font-sans text-sm sm:text-base mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.href} className="mt-auto">
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="group px-0 text-sm text-[#C09A6C] hover:bg-transparent font-medium transition-all duration-300"
                    >
                      <span className="relative">
                        Discover Service
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C09A6C] transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          variants={fadeIn}
        >
          <motion.div 
            className="inline-flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-neutral-300 font-sans mb-6 max-w-2xl mx-auto text-base sm:text-lg">
              Ready to experience premium tailoring services tailored to your schedule?
            </p>
            <Link href="#contact" passHref>
              <Button 
                size="lg"
                className="group w-full sm:w-auto relative overflow-hidden px-8 sm:px-10 py-5 sm:py-6 bg-[#C09A6C] text-neutral-900 hover:bg-[#D4B483] hover:text-neutral-900
                rounded-lg font-sans font-semibold text-base tracking-wide
                transition-all duration-300 ease-out
                focus-visible:ring-2 focus-visible:ring-[#C09A6C]/50 focus-visible:ring-offset-2
                shadow-lg shadow-[#C09A6C]/20 hover:shadow-[#D4B483]/30"
              >
                <span className="relative z-10">Schedule Your Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#C09A6C] to-[#D4B483] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}