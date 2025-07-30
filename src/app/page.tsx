import { About } from '@/components/couture-clickk/about';
import { AnimateWrapper } from '@/components/couture-clickk/animate-wrapper';
import { FeaturedCollection } from '@/components/couture-clickk/featured-collection';
import { Footer } from '@/components/couture-clickk/footer';
import { Hero } from '@/components/couture-clickk/hero';
import { InstagramGallery } from '@/components/couture-clickk/instagram-gallery';
import { Subscribe } from '@/components/couture-clickk/subscribe';
import { Testimonials } from '@/components/couture-clickk/testimonials';
import { WhyChooseUs } from '@/components/couture-clickk/why-choose-us';

export default function CoutureClickkLandingPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <AnimateWrapper>
          <About />
        </AnimateWrapper>
        <AnimateWrapper>
          <FeaturedCollection />
        </AnimateWrapper>
        <AnimateWrapper>
          <WhyChooseUs />
        </AnimateWrapper>
        <Testimonials />
        <AnimateWrapper>
          <InstagramGallery />
        </AnimateWrapper>
        <AnimateWrapper>
          <Subscribe />
        </AnimateWrapper>
      </main>
      <Footer />
    </div>
  );
}
