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
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="bg-gradient-to-r from-blue-400 to-pink-400 w-[350px] h-[350px] rounded-full absolute -top-10 -left-20 animate-pulse" />
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-[400px] h-[400px] rounded-full absolute bottom-0 right-0 animate-pulse delay-300" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Building Meaningful Experiences
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Blending design thinking with development to create digital experiences that truly connect.
            </p>
          </div>

          {/* About Section Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Info Card */}
            <Card className="p-10 border border-muted/40 bg-background/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up rounded-2xl">
              <div className="flex items-start gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-primary/40 to-accent/30 shadow-inner">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Education</h3>
                  <p className="text-muted-foreground">
                    IT Engineering Student at KKWIEER, Nashik
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm passionate about crafting user-first digital experiences where design meets functionality. My focus lies in building intuitive, scalable solutions that merge creativity and logic seamlessly.
              </p>
            </Card>

            {/* Strengths Grid */}
            <div
              className="grid grid-cols-2 gap-5 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border border-muted/40 bg-background/60 backdrop-blur-sm rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group cursor-pointer"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div
                    className={`mb-4 mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${strength.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <strength.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">
                    {strength.label}
                  </p>
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
