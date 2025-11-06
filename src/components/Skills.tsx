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
    // UPDATED: Added light-mode gradient (white to slate-100) and dark-mode prefix
    <section className="py-24 bg-gradient-to-b from-white to-slate-100 dark:from-background dark:to-muted/30 relative overflow-hidden">
      {/* UPDATED: Reduced opacity in light mode, prefixed dark mode opacity */}
      <div className="absolute inset-0 blur-3xl opacity-10 dark:opacity-20">
        <div className="bg-gradient-to-r from-blue-400 to-pink-400 w-[400px] h-[400px] rounded-full absolute -top-20 -left-20 animate-pulse" />
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-[350px] h-[350px] rounded-full absolute bottom-0 right-0 animate-pulse delay-300" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            {/* UPDATED: Added light-mode border color, prefixed dark-mode border */}
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm tracking-wide border-slate-300 dark:border-primary/30">
              Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            {/* UPDATED: Added light-mode text color, prefixed dark-mode text color */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A diverse toolkit for crafting beautiful and performant digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                // UPDATED: Added light-mode styles (border, bg, hover) and prefixed dark-mode styles
                className="p-8 border border-slate-200 dark:border-muted/40 backdrop-blur-sm bg-white/80 dark:bg-background/70 hover:bg-white dark:hover:bg-background/90 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    {/* This text is on a solid bg, so it's fine */}
                    <span className="text-white font-bold text-xl drop-shadow">
                      {category.skills.length}
                    </span>
                  </div>
                  {/* This text color should be handled by default light/dark text, so it's fine */}
                  <h3 className="text-2xl font-semibold tracking-wide">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      // UPDATED: Added explicit light-mode text, bg, and border. Prefixed dark-mode styles.
                      className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-primary/10 hover:text-primary dark:text-inherit dark:bg-muted/50 border border-slate-200 dark:border-muted/30 transition-colors duration-300"
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