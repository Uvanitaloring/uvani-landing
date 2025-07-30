import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[500px] relative">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Behind the scenes at a couture workshop"
              data-ai-hint="fashion design studio"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              The Heart of <span className="text-primary">Couture</span>
            </h2>
            <p className="font-body text-muted-foreground">
              At Couture Clickk, we believe that true style is a form of self-expression. Born from a passion for timeless elegance and exceptional quality, our brand is dedicated to creating pieces that are not just worn, but cherished. Each garment is a testament to the art of haute couture, meticulously handcrafted by skilled artisans who share our vision of luxury.
            </p>
            <p className="font-body text-muted-foreground mt-4">
              We source the world's finest materials to ensure every piece feels as exquisite as it looks. Our designs are exclusive, created for the discerning individual who values sophistication, craftsmanship, and the allure of the unique. Welcome to a world where every detail matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
