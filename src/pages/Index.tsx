import Hero from "@/components/Hero";
import AboutNew from "@/components/AboutNew";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <AboutNew />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
