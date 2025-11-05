import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/hero.png"; 

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with gradient overlay and subtle glow */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Designer workspace"
          className="w-full h-full object-cover scale-105 brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-pink-400/20 to-blue-400/10 rounded-full blur-3xl opacity-40 animate-pulse delay-300" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="flex justify-center md:order-2 animate-fade-in [animation-delay:100ms]">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-accent/30 blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
              <img
                src={profileImg}
                alt="Abhishek Patole"
                className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left md:order-1">
            {/* Availability Badge */}
            <div className="inline-block animate-fade-in-up [animation-delay:200ms]">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium tracking-wide backdrop-blur-sm border border-primary/20 shadow-sm">
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in-up [animation-delay:300ms]">
              <span className="block mb-2 text-foreground">Abhishek Patole</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:400ms] leading-relaxed">
              Crafting interfaces that connect design, code, and human experience.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:500ms] leading-relaxed">
              I'm an engineering student passionate about intuitive digital experiences, blending user-centric design with clean, scalable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up [animation-delay:600ms]">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-lg px-8 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="mailto:abhishekpatoles13@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up [animation-delay:700ms]">
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com/Abhishek-patole",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://linkedin.com/in/abhishek-patole-dev",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  href: "mailto:abhishekpatoles13@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-7 w-7 text-muted-foreground opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
