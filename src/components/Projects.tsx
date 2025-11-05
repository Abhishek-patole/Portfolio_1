import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import c_mastermind from "@/assets/c_mastermind.png"
import bike_pooling from "@/assets/bike_pooling.png"

import project_chat_app from "@/assets/project_chat_app.png";


const Projects = () => {
  const projects = [
   
    {
      title: "Fullstack Chat App",
      description: "Minimal responsive chat interface with real-time messaging capabilities. Built complete fullstack solution with focus on clean, intuitive user experience.",
      image: project_chat_app,
      tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      color: "from-cyan-500 to-blue-500",
      role: "Fullstack Developer",
      // CHANGED: Add your URLs here
      liveUrl: "https://fullstack-chat-app-2owu.onrender.com",
      githubUrl: "#"
    },
     {
      title: "RideOn – AI Bike Pooling Platform",
      description: "Smart ride-matching UI with intuitive flow for riders & passengers. Contributed to backend architecture and design implementation for seamless user experience.",
      image: bike_pooling,
      tags: ["React.js", "Node.js", "MongoDB", "Scikit-Learn", "UI/UX Design"],
      color: "from-blue-500 to-purple-500",
      role: "Backend + Design Contributor",
      // CHANGED: Add your URLs here
      liveUrl: "https://bike-pooling-project.vercel.app/", // e.g., "https://rideon.vercel.app"
      githubUrl: "#" // e.g., "https://github.com/your-username/rideon"
    },
    {
      title: "C Mastermind",
      description: "Gamified learning flow for C programming with interactive challenges. Designed engaging UX flow and built robust backend for seamless learning experience.",
      image: c_mastermind,
      tags: ["Node.js", "EJS", "MongoDB", "UX Design"],
      color: "from-green-500 to-emerald-500",
      role: "Backend + UX Contributor",
      // CHANGED: Add your URLs here
      liveUrl: "https://github.com/Abhishek-patole/C-MasterMind",
      githubUrl: "https://github.com/Abhishek-patole/C-MasterMind"
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
                      <Badge variant="secondary" className="mb-4">{project.role}</Badge>
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
                      {/* CHANGED: Wrapped Button in <a> tag */}
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="default"
                          className="bg-gradient-primary hover:opacity-90"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                      </a>
                      {/* CHANGED: Wrapped Button in <a> tag */}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
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