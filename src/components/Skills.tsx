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
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Skills</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 border-2 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {category.skills.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium"
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
