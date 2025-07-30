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
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Let's <span className="text-primary">Connect</span></h2>
            <p className="font-body text-lg text-muted-foreground mt-2">Reach out to us anytime – we're ready to help!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((item, index) => (
              <Card key={index} className="p-6 flex items-start gap-4 bg-background/50 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-xl">
            <h3 className="font-headline text-3xl font-bold mb-6 text-center text-primary">Send Us Your Details</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="text" placeholder="Address" />
              </div>
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
