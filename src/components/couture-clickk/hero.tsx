'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';

// -------------------- Design constants --------------------
const easeOutSoft = [0.22, 1, 0.36, 1] as const;

// Cinematic overlay colors
const overlayTop = 'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0))';
const overlayVignette = 'radial-gradient(120% 70% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.6) 100%)';

// -------------------- Variants --------------------
const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { delayChildren: delay, staggerChildren: 0.08 },
  }),
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeOutSoft },
  },
  exit: { opacity: 0, y: -12, filter: 'blur(6px)', transition: { duration: 0.35 } },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 16, stiffness: 140 },
  },
};

// Subtle glow underline reveal
const underlineVariant: Variants = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: easeOutSoft, delay: 0.15 } },
};

// CTA micro-interactions
const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutSoft, delay: 0.2 } },
};

// -------------------- Animated text --------------------
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
      >
        {words.map((w, i) => (
          <motion.span key={i} variants={wordVariant} className="inline-block pr-[0.25em]">
            {w}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

// -------------------- Data --------------------
const heroMessages = [
  { title: 'Premium Stitching At Your Doorstep', subtitle: 'Experience the blend of tradition and technology.' },
  { title: 'Custom Designs Just For You', subtitle: 'Personalized fits tailored to your unique vibe.' },
  { title: 'Style Meets Ultimate Convenience', subtitle: 'From measurements to delivery, we handle it all.' },
];

// -------------------- Hero --------------------
export function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  // Crossfade between background videos
  useEffect(() => {
    const id = setInterval(() => setActiveVideo((p) => 1 - p), 12000);
    return () => clearInterval(id);
  }, []);

  // Carousel state sync
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative min-h-[92vh] h-[92vh] sm:h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background videos with refined crossfade and slight scale for kinetic feel */}
      {['/couture-background.mp4', '/hero-bg.mp4'].map((src, idx) => (
        <motion.video
          key={src}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{
            opacity: activeVideo === idx ? 1 : 0,
            scale: activeVideo === idx ? 1 : 1.04,
          }}
          transition={{ duration: 1.2, ease: easeOutSoft }}
        />
      ))}

      {/* Dual overlays: cinematic top gradient + vignette for focus */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ backgroundImage: `${overlayTop}, ${overlayVignette}` }}
      />
      {/* Subtle grain for luxury texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%271%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/%3E%3C/svg%3E")',
        }}
      />

      {/* Watermark crest/logo parallax for brand presence */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-[7] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ delay: 0.8, duration: 1.2, ease: easeOutSoft }}
      >
        <motion.div
          className="w-[60vw] sm:w-[56vw] max-w-[780px] h-[60vw] sm:h-[56vw] max-h-[780px] rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(212,175,55,0.15), rgba(212,175,55,0.05) 40%, transparent 70%)',
          }}
          initial={{ scale: 1.08, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: easeOutSoft }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 p-4 flex flex-col items-center w-full mt-12 sm:mt-14 md:mt-24 lg:mt-28 overflow-visible">
        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          // @ts-ignore: plugin ref
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent>
            {heroMessages.map((m, idx) => (
              <CarouselItem key={idx} className="px-0">
                <AnimatePresence mode="wait">
                  {current === idx && (
                    <motion.div
                      key={current}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      variants={lineVariant}
                      className="flex flex-col items-center justify-center gap-3 sm:gap-4"
                    >
                      {/* Title block: line entrance + word choreography */}
                      <motion.div variants={containerStagger} custom={0}>
                        <AnimatedText
                          text={m.title}
                          el="h1"
                          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white/95 drop-shadow-[0_1px_14px_rgba(0,0,0,0.35)] text-balance text-center break-words w-full px-2 overflow-visible"
                        />
                        <motion.span
                          variants={underlineVariant}
                          className="block mx-auto mt-3 sm:mt-4 h-[2px] w-[140px] sm:w-[160px] md:w-[220px] bg-gradient-to-r from-[#F1E4B3] via-[#D4AF37] to-[#A47C34] rounded-full"
                        />
                      </motion.div>

                      {/* Subtitle with softened tone */}
                      <motion.div variants={containerStagger} custom={0.2}>
                        <AnimatedText
                          text={m.subtitle}
                          el="p"
                          delay={0.3}
                          className="font-sans text-sm sm:text-base md:text-xl text-gray-200/90 max-w-md sm:max-w-2xl leading-relaxed"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* CTA with luxury gleam and tactile hover */}
        <motion.div variants={ctaVariant} initial="hidden" animate="show">
          <Button
            asChild
            size="lg"
            className="relative mt-10 sm:mt-12 group rounded-full text-sm sm:text-base font-semibold px-6 py-5 sm:px-8 sm:py-6 text-neutral-900 transition-all duration-300"
          >
            <a href="https://uvani-webapp.netlify.app/signup/" target="_blank" rel="noopener noreferrer">
              <span
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background:
                    'linear-gradient(90deg, #D4AF37 0%, #C8A13A 35%, #A47C34 100%)',
                }}
              />
              <span
                className="absolute inset-0 rounded-full -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.35), transparent 40%)',
                }}
              />
              <span className="relative inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Button>
          {/* CTA shadow aura */}
          <div
            aria-hidden
            className="mx-auto mt-3 h-6 w-32 sm:w-40 rounded-full blur-2xl opacity-50"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.35), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient veil to improve lower-contrast content */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-40 z-[8]"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))',
        }}
      />
    </section>
  );
}
