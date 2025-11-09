import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Database, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "C++"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Brain,
      title: "AI / Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Database,
      title: "Data Science",
      skills: ["Data Analysis", "Pandas", "NumPy"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cpu,
      title: "Core Competencies",
      skills: ["Machine Learning", "Problem Solving", "Algorithm Design"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              My Technical Toolkit
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              A comprehensive set of skills and technologies I use to build intelligent solutions
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group p-6 bg-card/50 sm:backdrop-blur-sm border-border/50 sm:hover:border-primary/50 transition-all duration-300 sm:hover:shadow-xl sm:hover:shadow-primary/10 sm:hover:-translate-y-1 sm:animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 sm:group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-poppins font-semibold text-lg mb-4 sm:group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground font-inter sm:group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* Additional skills badges + Frameworks/Databases/Tools */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground font-inter mb-4">Also familiar with:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {["Git", "Linux", "Matplotlib", "OpenCV", "Jupyter", "VS Code", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter text-foreground sm:hover:bg-primary/20 sm:hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-card/50 rounded-lg border-border/50">
                <h4 className="font-poppins font-semibold mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Django REST', 'Node.js', 'Flutter'].map((fw) => (
                    <Badge key={fw} className="bg-primary/5 border-primary/20">{fw}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-card/50 rounded-lg border-border/50">
                <h4 className="font-poppins font-semibold mb-2">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'Firebase'].map((db) => (
                    <Badge key={db} className="bg-primary/5 border-primary/20">{db}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-card/50 rounded-lg border-border/50">
                <h4 className="font-poppins font-semibold mb-2">Tools & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'GitHub Actions', 'Render', 'Vercel'].map((tool) => (
                    <Badge key={tool} className="bg-primary/5 border-primary/20">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
