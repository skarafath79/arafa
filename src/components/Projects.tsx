import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Wrench } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              Featured Project
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Innovative solutions powered by AI and Machine Learning
            </p>
          </div>

          {/* Featured Project Card */}
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Visual */}
              <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/20 p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                
                {/* Project icon/illustration */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center animate-float">
                    <Wrench className="w-16 h-16 text-primary" />
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 font-inter">
                    Work In Progress
                  </Badge>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-poppins font-bold text-3xl mb-4 group-hover:text-primary transition-colors">
                  Vanar Rakshak
                  <span className="block text-xl text-muted-foreground font-normal mt-2">
                    The Monkey Protector
                  </span>
                </h3>

                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  An innovative AI-powered project currently in development. Vanar Rakshak aims to 
                  provide a modern solution for human-wildlife conflict management. This project 
                  leverages a custom-trained Machine Learning model using Python and TensorFlow to 
                  detect and safely deter monkeys from agricultural areas, protecting crops while 
                  ensuring animal welfare.
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-sm font-inter font-semibold text-foreground mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "OpenCV", "Machine Learning", "Computer Vision"].map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="bg-primary/5 border-primary/20 hover:bg-primary/10 font-inter"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key features */}
                <div className="mb-6">
                  <p className="text-sm font-inter font-semibold text-foreground mb-3">
                    Key Features:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-inter">
                        Real-time monkey detection using custom ML model
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-inter">
                        Humane deterrent system for wildlife management
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-inter">
                        Integration with IoT sensors for automated response
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button 
                    variant="default"
                    className="bg-primary hover:bg-primary/90 font-inter"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 font-inter"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo (Coming Soon)
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* More projects coming soon */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground font-inter">
              More exciting projects coming soon! Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
