import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Playfair_Display, Sora } from 'next/font/google';

// --- Font Setup ---
const fontSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const fontSans = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
  detail: '+91 96616 88834',
  href: 'tel:+919661688834'
  },
  {
    icon: Mail,
    title: 'Email',
  detail: 'uvanitaloring2025@gmail.com',
  href: 'mailto:uvanitaloring2025@gmail.com'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
  detail: '+91 96616 88834',
  href: 'https://wa.me/919661688834'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Patna, Bihar',
    href: 'https://maps.google.com/?q=Patna,Bihar'
  },
];

export function Contact() {
  return (
    <section
      id="contact"
  className={`relative overflow-hidden pt-8 pb-28 md:pt-10 md:pb-40 ${fontSans.variable} ${fontSerif.variable} bg-none`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-[size:100px_100px]" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px] animate-orb-move-1" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px] animate-orb-move-2" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px] animate-orb-move-3" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C09A6C] uppercase">Get in Touch</span>
            <span className="hidden sm:inline-block relative w-16 h-[2px]" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C09A6C] to-transparent opacity-80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-radial from-[#C09A6C99] to-transparent opacity-70" />
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium text-white mb-6">
            Let's <span className="text-[#C09A6C] relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#C09A6C] to-transparent"></span>
            </span>
          </h2>
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#C09A6C] via-[#9B6FD7] to-transparent mx-auto" />
          <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our services or want to discuss a project, our team is ready to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10">
            <h3 className="text-3xl font-serif font-semibold text-white">
              Contact <span className="text-[#C09A6C]">Information</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-8">
              {contactDetails.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-6 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#18141c] border border-[#C09A6C]/30 group-hover:border-[#C09A6C] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#C09A6C] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white font-sora mb-1">{item.title}</div>
                    <div className="text-[#C09A6C] font-sora text-base group-hover:text-white transition-colors">
                      {item.detail}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <Card className="p-10 bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-[#3A1D6A] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.3)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden flex flex-col justify-between max-h-[460px] min-h-[390px]">
            <h3 className="text-3xl font-serif font-semibold mb-8 text-center text-white">
              Send Us <span className="text-[#C09A6C]">Your Message</span>
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-[#0F081B]/60 border border-[#3A1D6A] text-white placeholder:text-purple-200/60 focus:ring-2 focus:ring-[#C09A6C]/40 focus:border-[#C09A6C] transition-all"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C09A6C] transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-[#0F081B]/60 border border-[#3A1D6A] text-white placeholder:text-purple-200/60 focus:ring-2 focus:ring-[#C09A6C]/40 focus:border-[#C09A6C] transition-all"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-[#0F081B]/60 border border-[#3A1D6A] text-white placeholder:text-purple-200/60 focus:ring-2 focus:ring-[#C09A6C]/40 focus:border-[#C09A6C] transition-all"
                  />
                </div>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Subject" 
                    className="bg-[#0F081B]/60 border border-[#3A1D6A] text-white placeholder:text-purple-200/60 focus:ring-2 focus:ring-[#C09A6C]/40 focus:border-[#C09A6C] transition-all"
                  />
                </div>
              </div>
              
              <div className="relative">
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-[#0F081B]/60 border border-[#3A1D6A] text-white placeholder:text-purple-200/60 focus:ring-2 focus:ring-[#C09A6C]/40 focus:border-[#C09A6C] transition-all"
                />
                <div className="absolute bottom-3 right-3 text-xs text-purple-200/50">Max. 500 characters</div>
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="h-12 group relative px-8 font-bold border-3 border-purple-900/40 text-white bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-purple-900/30 hover:to-rose-900/30 backdrop-blur-xl transition-all duration-500 rounded-2xl shadow-[0_0_40px_5px_rgba(168,85,247,0.18)] hover:shadow-[0_0_60px_10px_rgba(168,85,247,0.25)] overflow-hidden w-full"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
                <span className="relative z-10">Send Message</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}