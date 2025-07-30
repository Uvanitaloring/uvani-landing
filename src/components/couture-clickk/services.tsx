import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shirt, Ruler, Scissors, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Shirt,
    title: 'Doorstep Tailoring',
    description:
      'Professional tailoring services brought directly to your home for ultimate convenience.',
  },
  {
    icon: Ruler,
    title: 'Measurement at Home',
    description:
      'Accurate measurements taken at your doorstep by our skilled tailors.',
  },
  {
    icon: Scissors,
    title: 'Adjustment and Alteration',
    description:
      'Precise adjustments and alterations to ensure your garments fit perfectly.',
  },
  {
    icon: ShoppingBag,
    title: 'Bulk Orders',
    description:
      'Custom uniforms and outfits in large quantities with quality, fitting, and doorstep delivery — all at the best price.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-2">
            Perfecting your fit with precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="font-headline text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="#contact">
            <Button size="lg">
              Get In Touch <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
