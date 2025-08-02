import Image from 'next/image';

const galleryImages = [
  { src: 'https://placehold.co/400x400.png', alt: 'Model in a dramatic black dress', aiHint: 'fashion model dramatic' },
  { src: 'https://placehold.co/400x400.png', alt: 'Close-up of a luxury watch on a wrist', aiHint: 'luxury watch' },
  { src: 'https://placehold.co/400x400.png', alt: 'Woman walking in a vibrant city street wearing a couture coat', aiHint: 'street style' },
  { src: 'https://placehold.co/400x400.png', alt: 'A pair of designer sunglasses on a marble table', aiHint: 'designer sunglasses' },
  { src: 'https://placehold.co/400x400.png', alt: 'Detailed shot of fabric texture and embroidery', aiHint: 'fabric texture' },
  { src: 'https://placehold.co/400x400.png', alt: 'Man in a tailored suit looking out a window', aiHint: 'man tailored suit' },
];

export function InstagramGallery() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Social <span className="text-primary">Lookbook</span></h2>
          <p className="font-body text-lg text-muted-foreground mt-2">Follow our journey on Instagram @CoutureClickk</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden aspect-square relative group rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
