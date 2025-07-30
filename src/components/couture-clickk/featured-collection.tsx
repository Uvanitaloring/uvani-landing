import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    name: 'The Empress Gown',
    description: 'A floor-length silk gown with intricate hand-sewn beading.',
    price: '$2,450',
    image: 'https://placehold.co/400x500.png',
    aiHint: 'couture dress'
  },
  {
    name: 'Stiletto Royale',
    description: 'Elegant leather heels with a signature gold-plated accent.',
    price: '$890',
    image: 'https://placehold.co/400x500.png',
    aiHint: 'designer shoes'
  },
  {
    name: 'The Monarch Clutch',
    description: 'A statement clutch crafted from exotic leathers and precious metals.',
    price: '$1,200',
    image: 'https://placehold.co/400x500.png',
    aiHint: 'luxury handbag'
  },
];

export function FeaturedCollection() {
  return (
    <section id="collection" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Featured Collection</h2>
          <p className="font-body text-lg text-muted-foreground mt-2">Discover our most coveted pieces of the season.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.name} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
              <CardHeader className="p-0">
                <div className="relative w-full h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                <CardDescription className="font-body mt-2 h-12">{product.description}</CardDescription>
                <p className="font-headline text-xl text-primary mt-4">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-secondary text-secondary-foreground hover:bg-secondary hover:text-black">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
