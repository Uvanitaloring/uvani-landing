import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A high-fashion model wearing a couture outfit"
        data-ai-hint="luxury fashion model"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
          Elevate Your Style with <span className="text-primary">Couture Clickk</span>
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl mt-4 italic">
          Where fashion meets timeless elegance.
        </p>
        <Button size="lg" className="mt-8 text-lg px-8 py-6">
          Shop the Collection
        </Button>
      </div>
    </section>
  );
}
