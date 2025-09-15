import { About } from '@/components/couture-clickk/about';
import { AnimateWrapper } from '@/components/couture-clickk/animate-wrapper';
import { Contact } from '@/components/couture-clickk/contact';
import { Header } from '@/components/couture-clickk/header';
import { Hero } from '@/components/couture-clickk/hero';
import HowWeWork from '@/components/couture-clickk/how-we-work';
import { InstagramGallery } from '@/components/couture-clickk/instagram-gallery';
import { Services } from '@/components/couture-clickk/services';
import { Subscribe } from '@/components/couture-clickk/subscribe';
import { Testimonials } from '@/components/couture-clickk/testimonials';
import { WhyChooseUs } from '@/components/couture-clickk/why-choose-us';
import DownloadApp from '@/components/couture-clickk/download-app';

export default function CoutureClickkLandingPage() {
  return (
    <>
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
      {/* Download App section placed above the footer */}
      <AnimateWrapper>
        <DownloadApp
          title="Get the UVANI app"
          description="Download the Android APK directly to install the UVANI beta. iOS support is coming — sign up to be notified when it's available."
          downloadUrl="/downloads/uvani-latest.apk"
        />
      </AnimateWrapper>
    </>
  );
}
