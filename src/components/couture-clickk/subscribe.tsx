import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Subscribe() {
  return (
    <section id="subscribe" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Join The Elite</h2>
        <p className="font-body text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, private sales, and a world of luxury.
        </p>
        <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email for VIP access"
            className="flex-grow bg-background/10 border-border text-background placeholder:text-muted-foreground h-12 text-base focus:border-primary focus:ring-primary"
          />
          <Button type="submit" size="lg" className="h-12">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
