import { Bookmark, Calendar, Car, Scissors } from 'lucide-react';

const steps = [
  {
    icon: Bookmark,
    step: 'Step 1',
    title: 'Book on our website',
    description:
      'Visit our website and fill out the booking form with your details and service requirements.',
  },
  {
    icon: Calendar,
    step: 'Step 2',
    title: 'Choose your time slots',
    description:
      'Select a convenient time for our team to visit you for measurements and consultation.',
  },
  {
    icon: Scissors,
    step: 'Step 3',
    title: 'Pickup & Tailoring',
    description:
      'Our experts will pick up your garments and perform alterations with precision and care.',
  },
  {
    icon: Car,
    step: 'Step 4',
    title: 'Delivery at door',
    description:
      'Receive your perfectly altered clothing delivered back to your doorstep, ready to wear.',
  },
];

export function HowWeWork() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            How We Work
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-2">
            A simple process for a perfect fit, every time.
          </p>
        </div>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2">
            <svg
              width="100%"
              height="2"
              className="overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M0 1 C200 -2, 200 4, 400 1 S600 -2, 800 1 S1000 -2, 1200 1"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8, 8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative px-4"
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary mb-6 relative z-10 bg-background">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-semibold mb-2">
                  <span className="text-primary mr-2">0{index + 1}</span>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
