import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishekpatoles13@gmail.com",
      href: "mailto:abhishekpatoles13@gmail.com",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra",
      href: "#",
      color: "from-emerald-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-[300px] h-[300px] rounded-full absolute -top-20 left-10 animate-pulse" />
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-[400px] h-[400px] rounded-full absolute bottom-0 right-0 animate-pulse delay-200" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it.  
              Let's collaborate to turn your ideas into reality.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-background/70 border border-muted/40 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() =>
                  item.href !== "#" && window.open(item.href, "_self")
                }
              >
                <div
                  className={`mb-5 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-1 text-foreground">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-base group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-12 text-center bg-background/70 border border-muted/40 backdrop-blur-md rounded-3xl shadow-md hover:shadow-2xl transition-all duration-700 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Build Something Great
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Open to exciting opportunities in UI/UX design and full-stack development.  
                Let's connect and create meaningful digital experiences together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 rounded-2xl shadow-md"
                  onClick={() =>
                    window.location.href = "mailto:abhishekpatoles13@gmail.com"
                  }
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2 rounded-2xl hover:bg-primary/10 transition-colors"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/abhishek-patole-dev",
                      "_blank"
                    )
                  }
                >
                  Connect on LinkedIn
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
