import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Programming",
      skills: ["JavaScript", "Python", "C/C++", "EJS"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Background Gradient Blobs */}
      <div className="absolute inset-0 blur-3xl opacity-20">
        <div className="bg-gradient-to-r from-blue-400 to-pink-400 w-[400px] h-[400px] rounded-full absolute -top-20 -left-20 animate-pulse" />
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-[350px] h-[350px] rounded-full absolute bottom-0 right-0 animate-pulse delay-300" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm tracking-wide border-primary/30">
              Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A diverse toolkit for crafting beautiful and performant digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 border border-muted/40 backdrop-blur-sm bg-background/70 hover:bg-background/90 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-xl drop-shadow">
                      {category.skills.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-wide">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-300 border border-muted/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
