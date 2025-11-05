import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "5+ Years Experience",
      description: "Designing digital products for startups and enterprises"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Staying updated with latest design trends and technologies"
    },
    {
      icon: Award,
      title: "Award-Winning Work",
      description: "Recognized for excellence in UI/UX design"
    }
  ];

  return (
    <section className="py-24 bg-gradient-bg">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About Creating
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Exceptional Experiences
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a UI/UX designer and creative developer dedicated to crafting intuitive, 
              visually stunning digital experiences. My approach combines user research, 
              creative design, and technical expertise to deliver solutions that users love.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in-up border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "UI Design", "UX Research", "Prototyping", "Wireframing",
                "Figma", "Adobe XD", "Sketch", "InVision",
                "User Testing", "Design Systems", "Responsive Design",
                "HTML/CSS", "JavaScript", "React", "Tailwind CSS",
                "Motion Design", "Interaction Design"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
