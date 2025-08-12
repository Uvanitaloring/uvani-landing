// app/components/InstagramGallery.jsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Instagram, Heart, ArrowUpRight, ChevronRight } from 'lucide-react';

export const InstagramGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const galleryImages = [
    { src: '/social-1.png', alt: 'Evening gown collection', aiHint: 'runway', likes: 324, comments: 28 },
    { src: '/social-2.png', alt: 'Spring summer collection', aiHint: 'collection', likes: 512, comments: 42 },
    { src: '/social-3.png', alt: 'Bridal couture', aiHint: 'bridal', likes: 892, comments: 67 },
    { src: '/social-4.png', alt: 'Designer at work', aiHint: 'atelier', likes: 421, comments: 31 },
    { src: '/social-5.png', alt: 'Fabric selection', aiHint: 'textiles', likes: 287, comments: 19 },
    { src: '/social-6.png', alt: 'Fashion week', aiHint: 'event', likes: 745, comments: 58 },
    { src: '/social-7.png', alt: 'Detail craftsmanship', aiHint: 'embroidery', likes: 368, comments: 24 },
    { src: '/social-8.png', alt: 'Model portfolio', aiHint: 'portrait', likes: 567, comments: 36 },
    { src: '/about-images/about-img-1.jpg', alt: 'Atelier detail', aiHint: 'atelier detail', likes: 198, comments: 12 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (index) => {
    setActiveImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-none">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-[0.02] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(30deg,_#2a1a3a_1px,_transparent_1px),linear-gradient(-30deg,_#2a1a3a_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] z-0" />
      
      {/* Animated Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent rounded-full blur-[100px] animate-float" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent rounded-full blur-[120px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/20 via-transparent to-transparent rounded-full blur-[90px] animate-float animation-delay-4000" />
      
      {/* Floating Particles */}
      {useMemo(() => {
        const particles = Array.from({ length: 15 }).map((_, i) => {
          // Generate random values once per render
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const animationDelay = Math.random() * 5;
          const animationDuration = 3 + Math.random() * 7;
          const opacity = i % 3 === 0 ? 30 : i % 3 === 1 ? 20 : 10;
          return (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-[#C09A6C] opacity-${opacity} animate-pulse`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${animationDelay}s`,
                animationDuration: `${animationDuration}s`,
              }}
            />
          );
        });
        return particles;
      }, [])}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="relative w-20 h-[1px]">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-radial from-[#C09A6C] to-transparent" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-radial from-[#C09A6C] to-transparent" />
            </span>
            <span className="flex items-center gap-2 font-sans font-semibold tracking-[0.3em] text-[#C09A6C] uppercase text-sm">
              <Instagram className="w-5 h-5" />
              Instagram Gallery
            </span>
            <span className="relative w-20 h-[1px]">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-radial from-[#C09A6C] to-transparent" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-radial from-[#C09A6C] to-transparent" />
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight font-medium text-neutral-100 mb-6">
            Social <span className="text-[#C09A6C] italic">Lookbook</span>
          </h2>
          <div className="mt-6 h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#C09A6C]/80 to-transparent mx-auto" />
          <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Follow our journey on Instagram <span className="text-[#C09A6C] font-semibold">@Uvani</span> for exclusive behind-the-scenes content
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden aspect-square relative group rounded-xl bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/40 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(192,154,108,0.3)] backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-1 ${
                hoveredIndex === index ? 'scale-105 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-[#2a1a3a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.aiHint}
                  fill
                  className="object-cover w-full h-full transition-all duration-700 ease-[cubic-bezier(0.2,0.85,0.4,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Instagram className="w-6 h-6 text-white mb-2" />
                  <p className="text-white font-sans text-sm sm:text-base font-medium truncate">{image.alt}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center text-white text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      {image.likes}
                    </div>
                    <div className="flex items-center text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {image.comments}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C09A6C] rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          
          {/* Instagram CTA Tile */}
          <a 
            href="https://instagram.com/Uvani" 
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square relative group rounded-xl bg-gradient-to-br from-[#1e102d] to-[#0f081b] border border-purple-900/40 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(192,154,108,0.3)] backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-1 flex flex-col items-center justify-center p-6 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C09A6C]/10 via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#C09A6C] to-[#a37e55] p-3 rounded-full mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-neutral-100 mb-2">Join Our Community</h3>
              <p className="text-neutral-300 font-sans text-sm mb-4 max-w-[180px]">
                Follow @Uvani for exclusive content and updates
              </p>
              <span className="font-sans font-medium text-[#C09A6C] text-sm flex items-center gap-2 group-hover:underline">
                Follow Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </a>
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/__uvani__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-sans font-medium text-sm sm:text-base px-8 py-3 rounded-full bg-gradient-to-r from-[#1e102d] to-[#0f081b] border border-[#C09A6C]/40 text-[#C09A6C] hover:bg-gradient-to-r hover:from-[#C09A6C]/10 hover:to-[#a37e55]/10 hover:border-[#C09A6C]/70 transition-all duration-300 group shadow-[0_4px_20px_rgba(192,154,108,0.1)] hover:shadow-[0_6px_30px_rgba(192,154,108,0.2)]"
          >
            <span>View More on Instagram</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {activeImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col">
            <button 
              className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors z-10"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative w-full h-[80vh]">
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="bg-[#1A0B2E] p-4 mt-2 rounded-lg">
              <h3 className="font-serif text-xl text-white mb-2">{galleryImages[activeImage].alt}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-white text-sm">
                    <Heart className="w-4 h-4 mr-1" fill="#C09A6C" stroke="none" />
                    {galleryImages[activeImage].likes}
                  </div>
                  <div className="flex items-center text-white text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {galleryImages[activeImage].comments}
                  </div>
                </div>
                <a 
                  href="https://instagram.com/Uvani" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#C09A6C] text-sm hover:underline"
                >
                  View on Instagram
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        className={`fixed right-8 bottom-8 bg-gradient-to-br from-[#C09A6C] to-[#a37e55] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
};

export default InstagramGallery;