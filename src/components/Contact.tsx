import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section className="py-24 bg-gradient-bg">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Let's chat and see how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-medium transition-all duration-300 animate-fade-in-up border-2 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => item.href !== "#" && window.open(item.href, '_self')}
              >
                <div className="mb-4 mx-auto w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{item.label}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-2 shadow-strong animate-scale-in">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you need a complete product redesign or help with a specific design challenge, 
                I'm here to help. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
