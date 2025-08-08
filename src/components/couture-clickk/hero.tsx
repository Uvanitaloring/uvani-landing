'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Sparkles, Crown, Star } from 'lucide-react';

// -------------------- Design constants --------------------
const easeOutSoft = [0.22, 1, 0.36, 1] as const;
const easeInOutCubic = [0.645, 0.045, 0.355, 1] as const;
const easeHero = [0.4, 0, 0.2, 1] as const;

// Enhanced cinematic overlays
const overlayTop = 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0))';
const overlayVignette = 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.75) 100%)';
const luxuryGlow = 'radial-gradient(circle at 50% 20%, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 30%, transparent 60%)';

// -------------------- Enhanced Variants --------------------
const containerStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.14,
      duration: 1.1,
      ease: easeHero,
    },
  }),
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: easeHero },
  },
  exit: {
    opacity: 0,
    y: -24,
    filter: 'blur(8px)',
    transition: { duration: 0.6, ease: easeInOutCubic },
  },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: 60 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 110,
      mass: 0.9,
      duration: 0.7,
    },
  },
};

const underlineVariant: Variants = {
  hidden: { opacity: 0, scaleX: 0.7, originX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.1,
      ease: easeHero,
      delay: 0.4,
    },
  },
};

const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easeHero,
      delay: 0.7,
    },
  },
};

const floatingElementVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.6,
      ease: easeHero,
      delay: 1.4,
    },
  },
};

// -------------------- Animated Components --------------------
function AnimatedText({
  text,
  el: Wrapper = 'h1',
  className,
  delay = 0,
}: {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerStagger}
        initial="hidden"
        animate="show"
        custom={delay}
        aria-label={text}
        className="inline-block"
        style={{ perspective: 1000 }}
      >
        {words.map((word, i) => (
          <motion.span 
            key={i} 
            variants={wordVariant} 
            className="inline-block pr-[0.25em] origin-bottom"
            style={{ transformOrigin: '50% 100%' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

function FloatingIcon({ 
  icon: Icon, 
  className, 
  delay = 0 
}: { 
  icon: any; 
  className?: string; 
  delay?: number; 
}) {
  return (
    <motion.div
      variants={floatingElementVariant}
      initial="hidden"
      animate="show"
      custom={delay}
      className={`absolute ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <Icon className="w-6 h-6 text-[#D4AF37]/40" />
    </motion.div>
  );
}

// -------------------- Enhanced Data --------------------
const heroMessages = [
  { 
    title: 'Couture Craftsmanship Redefined', 
    subtitle: 'Where timeless elegance meets modern precision in every stitch.',
    accent: 'Premium'
  },
  { 
    title: 'Bespoke Excellence Delivered', 
    subtitle: 'Handcrafted perfection tailored exclusively for the discerning individual.',
    accent: 'Luxury'
  },
  { 
    title: 'Artisanal Mastery At Home', 
    subtitle: 'Experience the pinnacle of sartorial artistry from the comfort of your space.',
    accent: 'Exclusive'
  },
];

// -------------------- Enhanced Hero --------------------
export function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(Autoplay({ delay: 7000, stopOnInteraction: false }));
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Enhanced crossfade with smoother transitions
  useEffect(() => {
    const id = setInterval(() => setActiveVideo((p) => 1 - p), 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Enhanced background videos */}
      {['/couture-background.mp4', '/hero-bg.mp4'].map((src, idx) => (
        <motion.video
          key={src}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: activeVideo === idx ? 1 : 0,
            scale: activeVideo === idx ? 1 : 1.05,
          }}
          transition={{ duration: 2, ease: easeOutSoft }}
          style={{ y }}
        />
      ))}

      {/* Enhanced overlay system */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ 
          backgroundImage: `${overlayTop}, ${overlayVignette}, ${luxuryGlow}` 
        }}
      />

      {/* Refined grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E")
          `,
        }}
      />

      {/* Floating decorative elements */}
      <FloatingIcon icon={Crown} className="top-1/4 left-[15%] hidden lg:block" delay={1.5} />
      <FloatingIcon icon={Sparkles} className="top-1/3 right-[20%] hidden lg:block" delay={2} />
      <FloatingIcon icon={Star} className="bottom-1/3 left-[10%] hidden lg:block" delay={2.5} />
      <FloatingIcon icon={Sparkles} className="bottom-1/4 right-[15%] hidden lg:block" delay={3} />

      {/* Enhanced watermark with parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-[7] flex items-center justify-center"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ delay: 1, duration: 2, ease: easeOutSoft }}
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
      >
        <motion.div
          className="w-[70vw] max-w-[900px] h-[70vw] max-h-[900px] rounded-full border border-[#D4AF37]/20"
          style={{
            background: `
              radial-gradient(closest-side, rgba(212,175,55,0.12), rgba(212,175,55,0.06) 30%, rgba(212,175,55,0.02) 60%, transparent 80%),
              conic-gradient(from 0deg, transparent, rgba(212,175,55,0.1), transparent, rgba(212,175,55,0.05), transparent)
            `,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Main content with enhanced spacing */}
      <div className="relative z-20 p-4 flex flex-col items-center w-full max-w-5xl mx-auto">
        
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/20 backdrop-blur-sm text-xs"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
            Est. Premium Atelier
          </span>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent>
            {heroMessages.map((message, idx) => (
              <CarouselItem key={idx} className="px-0">
                <AnimatePresence mode="wait" initial={false}>
                  {current === idx && (
                    <motion.div
                      key={current}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      variants={lineVariant}
                      className="flex flex-col items-center justify-center gap-8"
                      transition={{
                        duration: 1.1,
                        ease: easeHero,
                      }}
                    >
                      {/* Accent text */}
                      <motion.div
                        variants={containerStagger}
                        custom={0}
                        className="flex items-center gap-3"
                      >
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
                          {message.accent}
                        </span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                      </motion.div>

                      {/* Enhanced title */}
                      <motion.div variants={containerStagger} custom={0.1}>
                        <AnimatedText
                          text={message.title}
                          el="h1"
                          className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-tight text-balance max-w-3xl"
                        />
                        <motion.div
                          variants={underlineVariant}
                          className="flex justify-center mt-6"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-[2px] w-8 bg-[#D4AF37]/60" />
                            <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                            <div className="h-[2px] w-32 bg-gradient-to-r from-[#D4AF37] via-[#F1E4B3] to-[#D4AF37]" />
                            <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                            <div className="h-[2px] w-8 bg-[#D4AF37]/60" />
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Enhanced subtitle */}
                      <motion.div variants={containerStagger} custom={0.3}>
                        <AnimatedText
                          text={message.subtitle}
                          el="p"
                          delay={0.4}
                        className="font-light text-base md:text-lg lg:text-xl text-gray-100/90 max-w-2xl leading-normal tracking-wide"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Enhanced CTA */}
        <motion.div 
          variants={ctaVariant}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="relative flex flex-col items-center">
            {/* Glossy shadow */}
            <motion.div
              aria-hidden
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-10 w-56 rounded-full pointer-events-none z-0"
              style={{
                background:
                  'radial-gradient(60% 60% at 50% 60%, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.10) 60%, transparent 100%)',
                filter: 'blur(10px)',
                opacity: 0.85,
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Glossy button */}
            <Button
              asChild
              size="lg"
              className="group relative rounded-full text-base font-bold px-10 py-4 text-black transition-all duration-500 overflow-hidden shadow-xl shadow-[#D4AF37]/30 border-2 border-[#F1E4B3]/40 backdrop-blur-md"
              style={{
                boxShadow:
                  '0 4px 32px 0 rgba(212,175,55,0.18), 0 1.5px 0 0 #fff6 inset',
                background:
                  'linear-gradient(135deg, #F1E4B3 0%, #D4AF37 40%, #C8A13A 100%)',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="#services" className="relative block">
                {/* Glass reflection layer */}
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(255,255,255,0.38) 10%, rgba(255,255,255,0.12) 40%, transparent 80%)',
                    mixBlendMode: 'screen',
                  }}
                />
                {/* Animated shimmer */}
                <motion.span
                  className="absolute inset-0 rounded-full opacity-0"
                  style={{
                    background:
                      'linear-gradient(100deg, rgba(255,255,255,0.55) 0%, transparent 60%, rgba(255,255,255,0.25) 100%)',
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    x: { duration: 1.2, ease: 'easeInOut', repeat: isHovered ? Infinity : 0 },
                  }}
                />
                {/* Button text */}
                <span className="relative inline-flex items-center tracking-wide z-10">
                  Book your journey
                  <ArrowRight className="ml-3 h-6 w-6 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </a>
            </Button>
          </div>
          {/* Enhanced CTA glow (kept for extra glow) */}
          <motion.div
            aria-hidden
            className="h-6 w-36 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.4), transparent)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"
          />
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-[8]"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 30%, rgba(0,0,0,0))',
        }}
      />
    </section>
  );
}
