"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Users, Award, Heart, Play, Pause, Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function About() {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const images = [
    {
      src: '/about-images/about-img-1.jpg',
      title: 'Master Craftsmanship',
      subtitle: 'Traditional Zardozi Work'
    },
    {
      src: '/about-images/about-img-2.jpg',
      title: 'Royal Heritage',
      subtitle: 'Banarasi Silk Weaving'
    },
    {
      src: '/about-images/about-img-3.jpg',
      title: 'Artisan Excellence',
      subtitle: 'Hand Embroidery Details'
    },
    {
      src: '/about-images/about-img-4.jpg',
      title: 'Cultural Legacy',
      subtitle: 'Mirror & Gota Work'
    },
  ];

  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Centuries-old techniques passed down through generations",
      metric: "500+ Years"
    },
    {
      icon: Users,
      title: "Master Artisans",
      description: "Skilled craftsmen preserving traditional Indian textile arts",
      metric: "50+ Artisans"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest silks, organic cotton, and ethically sourced materials",
      metric: "100% Authentic"
    }
  ];

  // Infinite carousel logic
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      ref={ref}
      id="about" 
      className="relative py-24 md:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-20 items-center">
          
          {/* Royal Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* Main Carousel Container with Royal Frame */}
            <div className="relative">
              {/* Royal Border Frame */}
            <Card className="relative shadow-2xl border border-purple-900/40 bg-black/30 backdrop-blur-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                  {/* Main Image Display */}
                  <div className="relative h-[500px] overflow-hidden group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        {/* Royal Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/40 to-transparent z-10" />
                        
                        <Image
                          src={images[currentIndex].src}
                          alt={images[currentIndex].title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />

                        {/* Royal Image Info Overlay */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="absolute bottom-6 left-6 right-6 z-20"
                        >
                          <div className="bg-black/30 backdrop-blur-2xl rounded-2xl p-5 border border-purple-900/40 shadow-2xl">
                            <div className="flex items-center mb-2">
                              <Crown className="w-5 h-5 text-amber-400 mr-2 drop-shadow-lg" />
                              <h4 className="font-serif text-lg font-bold text-amber-100">
                                {images[currentIndex].title}
                              </h4>
                            </div>
                            <p className="text-sm text-purple-200">
                              {images[currentIndex].subtitle}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Royal Play/Pause Control */}
                    <motion.button
                      onClick={togglePlayPause}
                      className="absolute top-6 right-6 z-30 bg-white/10 dark:bg-purple-900/30 backdrop-blur-md hover:bg-white/20 dark:hover:bg-purple-800/40 rounded-full p-4 transition-all duration-300 group/btn border border-white/20 dark:border-purple-600/30 shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white dark:text-amber-300 group-hover/btn:text-amber-300 dark:group-hover/btn:text-amber-200 transition-colors" />
                      ) : (
                        <Play className="w-5 h-5 text-white dark:text-amber-300 group-hover/btn:text-amber-300 dark:group-hover/btn:text-amber-200 transition-colors" />
                      )}
                    </motion.button>
                  </div>

                  {/* Royal Thumbnail Strip */}
                  <div className="bg-black/20 backdrop-blur-xl p-6">
                    <div className="flex space-x-4 justify-center">
                      {images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`relative w-18 h-14 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                            currentIndex === index 
                              ? 'border-amber-400 scale-105 shadow-xl shadow-amber-400/30' 
                              : 'border-transparent hover:border-amber-400 hover:scale-102'
                          }`}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="72px"
                          />
                          {currentIndex === index && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute inset-0 bg-gradient-to-t from-amber-400/40 via-purple-700/20 to-transparent"
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                    
                    {/* Royal Progress Indicators */}
                    <div className="flex justify-center mt-4 space-x-3">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            currentIndex === index 
                              ? 'w-10 bg-gradient-to-r from-amber-400 via-purple-700 to-rose-700 shadow-lg shadow-amber-400/30' 
                              : 'w-3 bg-purple-900/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Royal Content Section */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* Royal Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-400 via-purple-700 to-rose-700 rounded-full p-3 mr-4 shadow-2xl shadow-amber-400/30">
                <Crown className="w-6 h-6 text-amber-100" />
              </div>
              <div>
                <span className="block text-xs font-bold text-amber-300 tracking-[0.3em] uppercase mb-2">
                  Heritage & Excellence
                </span>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-purple-700 to-rose-700 rounded-full shadow-lg" />
              </div>
            </div>
            </motion.div>

            {/* Royal Main Title */}
            <motion.h2 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-10 leading-[0.9] text-amber-100 drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-amber-100 mb-2">
                Where Legacy
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-purple-700 to-rose-700 bg-clip-text text-transparent">
                Meets Mastery
              </span>
            </motion.h2>
            
            {/* Royal Description */}
            <motion.div
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-xl text-amber-100/90 leading-relaxed font-medium">
                Our distinguished atelier represents the pinnacle of Indian textile artistry, 
                where ancestral techniques converge with contemporary sophistication to create 
                masterpieces that transcend time.
              </p>
              
              <p className="text-lg text-purple-200/90 leading-relaxed">
                From the legendary Banarasi silks to hand-woven organic cotton, our master 
                artisans employ revered methods—zardozi embroidery, gota work, and mirror 
                artistry—crafting heirlooms that celebrate India's unparalleled textile heritage.
              </p>
            </motion.div>

            {/* Royal Feature Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-[#2d183a] to-[#1a1026] rounded-2xl p-6 border border-purple-900/40 shadow-xl hover:shadow-2xl dark:shadow-purple-900/20 dark:hover:shadow-purple-800/30 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-amber-400/60">
                    <div className="bg-gradient-to-br from-amber-700/30 to-purple-900/30 rounded-xl p-4 mb-4 group-hover:from-amber-400/40 group-hover:to-purple-700/40 transition-all duration-300 w-fit shadow-lg">
                      <feature.icon className="w-7 h-7 text-amber-300" />
                    </div>
                    
                    <div className="text-2xl font-bold text-amber-300 mb-2">
                      {feature.metric}
                    </div>
                    
                    <h4 className="font-serif text-lg font-bold text-amber-100 mb-2">
                      {feature.title}
                    </h4>
                    
                    <p className="text-sm text-purple-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Ultra-Aesthetic Royal Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link href="#contact" className="inline-block group">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  {/* Royal Button Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-purple-700 to-rose-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <Button 
                    size="lg" 
                    className="relative w-full sm:w-auto px-12 py-5 text-lg font-bold bg-gradient-to-r from-amber-500 via-purple-700 to-rose-700 hover:from-amber-600 hover:via-purple-800 hover:to-rose-800 text-amber-100 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl border-2 border-purple-900/40 backdrop-blur-sm overflow-hidden group"
                  >
                    {/* Royal Button Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Crown className="mr-3 w-6 h-6 transition-transform group-hover:rotate-12 drop-shadow-lg text-amber-100" />
                    <span className="relative z-10">Discover Collection</span>
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 drop-shadow-lg text-amber-100" />
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Royal Outline Button Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-purple-700/30 to-rose-700/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="relative w-full sm:w-auto px-12 py-5 text-lg font-bold border-3 border-purple-900/40 text-amber-100 bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-purple-900/30 hover:to-rose-900/30 backdrop-blur-xl transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden group"
                >
                  {/* Royal Outline Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
                  
                  <Heart className="mr-3 w-6 h-6 transition-transform group-hover:scale-110 text-rose-400 drop-shadow-lg" />
                  <span className="relative z-10">Meet Our Masters</span>
                  <Star className="ml-3 w-5 h-5 transition-transform group-hover:rotate-180 text-amber-400" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Royal Bottom Accent */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center text-amber-100 bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 backdrop-blur-xl px-10 py-5 rounded-full border border-purple-900/40 shadow-xl">
            <Sparkles className="w-6 h-6 mr-4 text-amber-400" />
            <span className="text-base font-semibold tracking-wide">Handcrafted Excellence Since Generations</span>
            <Sparkles className="w-6 h-6 ml-4 text-purple-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
