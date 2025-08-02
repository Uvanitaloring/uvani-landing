import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+91 7766906395',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'coutureclick25@gmail.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+91 7766906395',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Patna',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40 bg-gradient-to-br from-[#0e0718] via-[#1c0e29] to-[#0e0718]">
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 font-medium text-amber-400 tracking-wider">CONTACT US</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Connect</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed mt-2">
            Reach out to us anytime – we're ready to help!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((item, index) => (
              <Card key={index} className="p-6 flex items-start gap-4 bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/10 to-purple-900/20 text-amber-300 group-hover:text-amber-200 transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-white">{item.title}</h3>
                  <p className="font-body text-purple-200/80">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-10 bg-gradient-to-b from-[#1e102d]/70 to-[#0f081b]/70 border border-purple-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(113,0,255,0.25)] backdrop-blur-xl transition-all duration-500 rounded-2xl overflow-hidden">
            <h3 className="font-headline text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">Send Us Your Details</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Name" className="bg-background/60 border border-purple-900/30 text-white placeholder:text-purple-200/60 focus:ring-amber-400/40" />
                <Input type="email" placeholder="Email Address" className="bg-background/60 border border-purple-900/30 text-white placeholder:text-purple-200/60 focus:ring-amber-400/40" />
                <Input type="tel" placeholder="Phone Number" className="bg-background/60 border border-purple-900/30 text-white placeholder:text-purple-200/60 focus:ring-amber-400/40" />
                <Input type="text" placeholder="Address" className="bg-background/60 border border-purple-900/30 text-white placeholder:text-purple-200/60 focus:ring-amber-400/40" />
              </div>
              <Textarea placeholder="Your Message" rows={5} className="bg-background/60 border border-purple-900/30 text-white placeholder:text-purple-200/60 focus:ring-amber-400/40" />
              <Button type="submit" size="lg" className="w-full group relative px-12 py-5 text-lg font-bold border-3 border-purple-900/40 text-white bg-gradient-to-r from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-purple-900/30 hover:to-rose-900/30 backdrop-blur-xl transition-all duration-500 rounded-2xl shadow-[0_0_40px_5px_rgba(168,85,247,0.18)] hover:shadow-[0_0_60px_10px_rgba(168,85,247,0.25)] overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
                <span className="relative z-10">Submit</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
