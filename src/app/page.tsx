"use client";

import { useEffect, useState } from 'react';
import { About } from '@/components/couture-clickk/about';
import { AnimateWrapper } from '@/components/couture-clickk/animate-wrapper';
import { Contact } from '@/components/couture-clickk/contact';
import { Header } from '@/components/couture-clickk/header';
import { Hero } from '@/components/couture-clickk/hero';
import HowWeWork from '@/components/couture-clickk/how-we-work';
import { InstagramGallery } from '@/components/couture-clickk/instagram-gallery';
import LoadingScreen from '@/components/couture-clickk/loading-screen';
import { Services } from '@/components/couture-clickk/services';
import { Subscribe } from '@/components/couture-clickk/subscribe';
import { Testimonials } from '@/components/couture-clickk/testimonials';
import { WhyChooseUs } from '@/components/couture-clickk/why-choose-us';
import { cn } from '@/lib/utils';

export default function CoutureClickkLandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const heavyAssets = ['/couture-background.mp4', '/hero-bg.mp4'];

    const loadVideo = (src: string) =>
      new Promise<void>((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.muted = true;
        const finalize = () => {
          video.removeEventListener('canplaythrough', finalize);
          video.removeEventListener('loadeddata', finalize);
          video.removeEventListener('error', finalize);
          resolve();
        };
        video.addEventListener('canplaythrough', finalize, { once: true });
        video.addEventListener('loadeddata', finalize, { once: true });
        video.addEventListener('error', finalize, { once: true });
        try {
          video.load();
        } catch (error) {
          resolve();
        }
      });

    Promise.all(heavyAssets.map(loadVideo)).finally(() => {
      if (!isMounted) return;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const releaseDelay = prefersReducedMotion ? 200 : 650;
      const timeoutId = window.setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      }, releaseDelay);

      controller.signal.addEventListener('abort', () => window.clearTimeout(timeoutId), { once: true });
    });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={cn(
          'transition-opacity duration-[900ms] ease-[cubic-bezier(0.35,0,0.25,1)]',
          isLoading ? 'pointer-events-none opacity-0' : 'opacity-100'
        )}
      >
        <Header />
        <Hero />
        <AnimateWrapper>
          <About />
        </AnimateWrapper>
        <AnimateWrapper>
          <Services />
        </AnimateWrapper>
        <AnimateWrapper>
          <HowWeWork />
        </AnimateWrapper>
        <AnimateWrapper>
          <WhyChooseUs />
        </AnimateWrapper>
        <Testimonials />
        <AnimateWrapper>
          <InstagramGallery />
        </AnimateWrapper>
        <AnimateWrapper>
          <Contact />
        </AnimateWrapper>
        <AnimateWrapper>
          <Subscribe />
        </AnimateWrapper>
        {/* Download App section removed per request (user will re-add later) */}
      </div>
    </>
  );
}
