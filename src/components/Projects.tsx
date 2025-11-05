import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Complete redesign of an online shopping platform focusing on improved user flow and conversion optimization. Increased conversion rate by 45%.",
      image: project1,
      tags: ["UI Design", "UX Research", "Prototyping"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Food Delivery Mobile App",
      description: "Designed a modern, intuitive mobile app for food delivery service with focus on quick ordering and real-time tracking features.",
      image: project2,
      tags: ["Mobile Design", "User Testing", "Figma"],
      color: "from-pink-500 to-orange-500"
    },
    {
      title: "SaaS Dashboard Analytics",
      description: "Created a comprehensive analytics dashboard for a SaaS platform with advanced data visualization and user-friendly interface.",
      image: project3,
      tags: ["Dashboard", "Data Viz", "Design System"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing design thinking and problem-solving skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:shadow-strong transition-all duration-500 animate-fade-in-up border-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="default"
                        className="bg-gradient-primary hover:opacity-90"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Case Study
                      </Button>
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
