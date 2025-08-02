import { Gem, Award, Home, UserCheck } from 'lucide-react';

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
  {
    icon: UserCheck,
    title: 'Personalized Fit',
    description: 'We go beyond alterations to ensure your garment complements your unique style and physique perfectly.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="benefits" className="relative overflow-hidden py-28 md:py-40 bg-gradient-to-br from-[#0e0718] via-[#1c0e29] to-[#0e0718]">
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 font-medium text-amber-400 tracking-wider">WHY CHOOSE US</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            The Couture Clickk <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Promise</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of true luxury, convenience, and craftsmanship with every stitch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center p-8 bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/10 to-purple-900/20 mb-6 group-hover:bg-gradient-to-br group-hover:from-amber-500/20 group-hover:to-purple-900/30 transition-all duration-500">
                <benefit.icon className="w-10 h-10 text-amber-300 group-hover:text-amber-200 transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="font-body text-purple-200/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
