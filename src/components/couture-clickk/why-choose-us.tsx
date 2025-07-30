import { Gem, Award, Home } from 'lucide-react';

const benefits = [
  {
    icon: Gem,
    title: 'Handcrafted Quality',
    description: 'Every piece is meticulously crafted by master artisans using generations of expertise.',
  },
  {
    icon: Award,
    title: 'Exclusive Designs',
    description: 'Our limited-run collections ensure you own a unique piece of fashion history.',
  },
  {
    icon: Home,
    title: 'At-Home Convenience',
    description: 'We bring our expert tailoring services directly to your doorstep, saving you time and hassle.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Couture Clickk <span className="text-primary">Promise</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <benefit.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="font-body text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
