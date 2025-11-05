import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Brain, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top Performer",
      event: "Tech Pragyan Hackathon 2025",
      color: "from-yellow-500 to-orange-500",
      badge: "🥇"
    },
    {
      icon: Brain,
      title: "Finalist",
      event: "Telekinesis Quiz 2024",
      color: "from-purple-500 to-pink-500",
      badge: "🧠"
    },
    {
      icon: Code,
      title: "Participant",
      event: "Smart India Hackathon 2024",
      color: "from-blue-500 to-cyan-500",
      badge: "💻"
    }
  ];

  return (
    <section className="py-24 bg-gradient-bg">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Achievements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recognition & Milestones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating success in competitive tech events and hackathons
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-strong transition-all duration-300 group border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4 animate-scale-in" style={{ animationDelay: `${index * 150 + 100}ms` }}>
                  {achievement.badge}
                </div>
                <div className={`mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {achievement.event}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
