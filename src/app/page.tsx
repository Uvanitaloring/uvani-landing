import { About } from '@/components/couture-clickk/about';
import { AnimateWrapper } from '@/components/couture-clickk/animate-wrapper';
import { Header } from '@/components/couture-clickk/header';
import { Hero } from '@/components/couture-clickk/hero';
import { HowWeWork } from '@/components/couture-clickk/how-we-work';
import { InstagramGallery } from '@/components/couture-clickk/instagram-gallery';
import { Services } from '@/components/couture-clickk/services';
import { Subscribe } from '@/components/couture-clickk/subscribe';
import { Testimonials } from '@/components/couture-clickk/testimonials';
import { WhyChooseUs } from '@/components/couture-clickk/why-choose-us';

export default function CoutureClickkLandingPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow">
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
          <Subscribe />
        </AnimateWrapper>
      </main>
    </div>
  );
}
