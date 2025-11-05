import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// TODO: Update this path to your actual profile image
import profileImg from "@/assets/hero.png"; // NEW: Import profile image

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Designer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        {/* CHANGED: This is now a 2-column grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* NEW: Image Column */}
          <div className="flex justify-center md:order-2 animate-fade-in [animation-delay:100ms]">
            <img
              src={profileImg}
              alt="Abhishek Patole"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl border-4 border-primary/10"
            />
          </div>

          {/* CHANGED: Text Content Column */}
          <div className="space-y-8 text-center md:text-left md:order-1">
            
            {/* Badge */}
            <div className="inline-block animate-fade-in-up [animation-delay:200ms]">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up [animation-delay:300ms]">
              <span className="block mb-2">Abhishek Patole</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                UI/UX-Focused Full-Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:400ms]">
              Crafting interfaces that connect design, code, and human experience
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up [animation-delay:500ms]">
              I'm an engineering student passionate about intuitive digital experiences, blending user-centric design with clean, scalable code.
            </p>

            {/* CTA Buttons */}
            {/* CHANGED: Added md:justify-start for responsive alignment */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up [animation-delay:600ms]">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            {/* CHANGED: Added md:justify-start for responsive alignment */}
            <div className="flex gap-4 justify-center md:justify-start pt-8 animate-fade-in-up [animation-delay:700ms]">
              <a 
                href="https://github.com/Abhishek-patole" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-medium"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/abhishek-patole-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-medium"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:abhishekpatoles13@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-medium"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Unchanged) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;