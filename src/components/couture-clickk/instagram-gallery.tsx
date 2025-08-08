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
    <section id="gallery" className="relative overflow-hidden py-28 md:py-40">
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 font-medium text-amber-400 tracking-wider">INSTAGRAM GALLERY</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Lookbook</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed mt-2">
            Follow our journey on Instagram <span className="text-amber-300 font-semibold">@CoutureClickk</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden aspect-square relative group rounded-2xl bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-purple-900/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
