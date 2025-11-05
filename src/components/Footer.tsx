import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden border-t border-muted/40">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-pulse" />
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-tr from-purple-400/40 to-blue-400/40 rounded-full animate-pulse delay-300" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            
            {/* Brand Section */}
            <div className="animate-fade-in-up [animation-delay:100ms]">
              <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Abhishek Patole
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                UI/UX-focused full-stack developer crafting seamless and meaningful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up [animation-delay:200ms]">
              <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up [animation-delay:300ms]">
              <h4 className="font-semibold text-lg mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://github.com/Abhishek-patole",
                    icon: Github,
                  },
                  {
                    href: "https://linkedin.com/in/abhishek-patole-dev",
                    icon: Linkedin,
                  },
                  {
                    href: "mailto:abhishekpatoles13@gmail.com",
                    icon: Mail,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 border border-muted/40 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground shadow-sm hover:shadow-lg transition-all duration-500"
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider + Bottom Text */}
          <div className="pt-8 border-t border-muted/40 text-center animate-fade-in-up [animation-delay:400ms]">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-base">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />{" "}
              by <span className="font-medium text-foreground">Abhishek Patole</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
