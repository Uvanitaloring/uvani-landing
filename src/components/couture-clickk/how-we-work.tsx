import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Scissors, Truck } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    step: 'Step 1',
    title: 'Book an Appointment',
    description: 'Schedule a convenient time for our tailors to visit you at home for measurements and consultation.',
  },
  {
    icon: Scissors,
    step: 'Step 2',
    title: 'Expert Alterations',
    description: 'Our skilled artisans meticulously alter your garments to your exact specifications with the finest craftsmanship.',
  },
  {
    icon: Truck,
    step: 'Step 3',
    title: 'Seamless Delivery',
    description: 'Receive your perfectly altered clothing delivered back to your doorstep, ready to wear and impress.',
  },
];

export function HowWeWork() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">How We Work</h2>
          <p className="font-body text-lg text-muted-foreground mt-2">
            A simple process for a perfect fit, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out -z-10" />
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
               <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary mb-6 relative z-10 bg-background">
                <step.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="font-body text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
