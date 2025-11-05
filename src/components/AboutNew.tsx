import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Palette, Database, Layout, Figma } from "lucide-react";

const AboutNew = () => {
  const strengths = [
    { icon: Palette, label: "UI/UX Design", color: "from-blue-500 to-purple-500" },
    { icon: Code, label: "React.js & EJS", color: "from-cyan-500 to-blue-500" },
    { icon: Database, label: "Node.js & Express", color: "from-green-500 to-emerald-500" },
    { icon: Layout, label: "Responsive Design", color: "from-orange-500 to-red-500" },
    { icon: Figma, label: "Figma & Wireframing", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Meaningful Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Info Card */}
            <Card className="p-8 border-2 shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    IT Engineering Student at KKWIEER, Nashik
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm passionate about building meaningful, user-first designs with a balance of creativity and logic. 
                My approach combines technical expertise with design thinking to create interfaces that truly resonate with users.
              </p>
            </Card>

            {/* Strengths Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-medium transition-all duration-300 group cursor-pointer border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`mb-4 mx-auto w-14 h-14 rounded-full bg-gradient-to-br ${strength.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <strength.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-sm">{strength.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
