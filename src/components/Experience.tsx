import { Card } from "@/components/ui/card";
import { Users, Heart, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Users,
      title: "Team Management & Leadership",
      organization: "University Project Teams",
      period: "2022 - Present",
      description: "Led university project teams, focusing on efficient time management and collaborative problem-solving to ensure project milestones were met. Coordinated team efforts and delegated tasks effectively.",
      highlights: [
        "Successfully managed multiple project deliverables",
        "Improved team productivity through effective planning",
        "Mentored junior team members"
      ]
    },
    {
      icon: Heart,
      title: "Volunteer - IEEE Hackathon",
      organization: "IEEE Student Chapter",
      period: "3x Participant",
      description: "Actively contributed to the success of three IEEE hackathons, assisting with event coordination and technical support. Gained valuable exposure to a fast-paced, innovative environment.",
      highlights: [
        "Supported event logistics and participant coordination",
        "Provided technical assistance to hackathon teams",
        "Networked with industry professionals and peers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl  font-bold mb-4">
              Experience & Initiatives
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground  max-w-2xl mx-auto">
              Leadership roles and volunteer work that shaped my professional journey
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-primary border-4 border-background hidden lg:block" />
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className=" font-bold text-xl mb-1 text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary  font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm ">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground  mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground ">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* Connecting line for timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden lg:block" style={{ left: "calc(50% - 1px)" }} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
