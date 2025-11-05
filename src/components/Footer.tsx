import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Your Name
              </h3>
              <p className="text-secondary-foreground/80">
                UI/UX Designer & Creative Developer crafting beautiful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/20 text-center">
            <p className="text-secondary-foreground/80 flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by Your Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
