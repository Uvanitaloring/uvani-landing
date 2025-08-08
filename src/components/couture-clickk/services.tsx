"use client";
// src/components/ServicesEnhanced.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shirt, Ruler, Scissors, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Shirt,
    title: 'Doorstep Tailoring',
    description: 'Professional tailoring brought directly to your home for ultimate convenience.',
    href: '/services/doorstep-tailoring',
  },
  {
    icon: Ruler,
    title: 'Measurement at Home',
    description: 'Accurate measurements taken at your doorstep by our skilled tailors.',
    href: '/services/measurements',
  },
  {
    icon: Scissors,
    title: 'Alterations & Repairs',
    description: 'Precise adjustments and alterations to ensure your garments fit you perfectly.',
    href: '/services/alterations',
  },
  {
    icon: ShoppingBag,
    title: 'Bulk & Corporate Orders',
    description: 'High-volume custom uniforms and outfits with guaranteed quality and fitting.',
    href: '/services/bulk-orders',
  },
];

// Enhanced Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 md:py-40">
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 font-medium text-amber-400 tracking-wider">PREMIUM SERVICES</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Tailored Excellence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Delivered to You</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            Precision craftsmanship meets unparalleled convenience in our bespoke tailoring services, 
            designed for the modern individual who values perfection.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="group h-full flex flex-col bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="items-center text-center pt-10 pb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-500/10 to-purple-900/20 rounded-2xl mb-5 group-hover:bg-gradient-to-br group-hover:from-amber-500/20 group-hover:to-purple-900/30 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-amber-300 group-hover:text-amber-200 transition-colors duration-500" />
                  </div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-white tracking-normal">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col text-center px-6 pb-8">
                  <p className="font-sans text-purple-200/70 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.href} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group/button border border-purple-800/50 text-amber-100 bg-gradient-to-r from-[#1e102d]/50 via-[#150a25]/50 to-[#1e102d]/50 hover:from-[#2a1740]/70 hover:via-[#1d0f30]/70 hover:to-[#2a1740]/70 backdrop-blur-xl transition-all duration-500 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
                    >
                      <span className="relative z-10">Discover Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-500 text-amber-400" />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-purple-900/10 to-amber-500/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="#contact">
            <Button 
              size="lg"
              variant="outline"
              className="group relative w-full sm:w-auto px-12 py-5 text-lg font-bold border-3 border-purple-900/40 text-white bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-purple-900/30 hover:to-rose-900/30 backdrop-blur-xl transition-all duration-500 rounded-2xl shadow-[0_0_40px_5px_rgba(168,85,247,0.18)] hover:shadow-[0_0_60px_10px_rgba(168,85,247,0.25)] overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
              {/* Left Icon */}
              <svg className="mr-3 w-6 h-6 transition-transform group-hover:scale-110 text-rose-400 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/><path d="M12 8v4l2 2"/></svg>
              <span className="relative z-10">Book Now</span>
              {/* Right Icon */}
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:rotate-180 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l6.16-5.13a2 2 0 000-3.24L12 4.75"/></svg>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}