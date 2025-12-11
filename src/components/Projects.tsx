
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Wrench, Database, Smartphone, Cpu, BookOpen, Leaf, Landmark, Car, Sun } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:animate-fade-in">
            <h2 className="text-4xl sm:text-5xl  font-bold mb-4">
              Featured Project
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground  max-w-2xl mx-auto">
              Innovative solutions powered by AI and Machine Learning
            </p>
          </div>

          {/* Featured Project Card */}
          <SpotlightCard className="overflow-hidden bg-card/50 sm:backdrop-blur-sm border-border/50 transition-all duration-300 sm:animate-fade-in-up group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Visual */}
              <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/20 p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                {/* Project icon/illustration */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center sm:animate-float">
                    <Wrench className="w-16 h-16 text-primary" />
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 ">
                    Work In Progress
                  </Badge>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/10 sm:blur-2xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/5 sm:blur-3xl" />
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className=" font-bold text-3xl mb-4 sm:group-hover:text-primary transition-colors">
                  Vanar Rakshak
                  <span className="block text-xl text-muted-foreground font-normal mt-2">
                    The Monkey Protector
                  </span>
                </h3>

                <p className="text-muted-foreground  mb-6 leading-relaxed">
                  An innovative AI-powered project currently in development. Vanar Rakshak aims to
                  provide a modern solution for human-wildlife conflict management. This project
                  leverages a custom-trained Machine Learning model using Python and TensorFlow to
                  detect and safely deter monkeys from agricultural areas, protecting crops while
                  ensuring animal welfare.
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-sm  font-semibold text-foreground mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "OpenCV", "Machine Learning", "Computer Vision"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary/5 border-primary/20 hover:bg-primary/10 "
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key features */}
                <div className="mb-6">
                  <p className="text-sm  font-semibold text-foreground mb-3">
                    Key Features:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground ">
                        Real-time monkey detection using custom ML model
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground ">
                        Humane deterrent system for wildlife management
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground ">
                        Integration with IoT sensors for automated response
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button
                    variant="default"
                    className="bg-primary sm:hover:bg-primary/90 "
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/30 sm:hover:bg-primary/10 "
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo (Coming Soon)
                  </Button>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Group Projects & Contributions */}
          <div className="mt-12">
            <h3 className="text-2xl  font-bold mb-6">Group Projects & Contributions</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Saaflo App</h4>
                    <p className="text-sm text-muted-foreground mb-2">Finalist — Innovative solution for waste management and sustainability</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Flutter</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Firebase</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">IoT</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Biosynth</h4>
                    <p className="text-sm text-muted-foreground mb-2">Finalist — Biotechnology meets synthetic biology for sustainable solutions</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Django</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Machine Learning</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">SAI Academy</h4>
                    <p className="text-sm text-muted-foreground mb-2">Comprehensive learning management system for modern education</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Next.js</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">PostgreSQL</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Node.js</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Personal & Featured Projects */}
          <div className="mt-10">
            <h3 className="text-2xl  font-bold mb-6">Personal & Featured Projects</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Vidya Saathi AI</h4>
                    <p className="text-sm text-muted-foreground mb-2">My AI Learning Companion - Revolutionizing education with personalized assistance</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI/ML</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Education</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://vidya-saathi-ai-learning-companion.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Kisan Mind AI</h4>
                    <p className="text-sm text-muted-foreground mb-2">Agri Doctor - Empowering farmers with AI-driven crop diagnosis and advice</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AgriTech</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://kisan-mind-ai-agri-doctor.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Yojna Setu AI</h4>
                    <p className="text-sm text-muted-foreground mb-2">Bridging the gap between citizens and government schemes with AI</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">GovTech</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://yojna-setu-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Safiya Drive</h4>
                    <p className="text-sm text-muted-foreground mb-2">Premium transportation and travel services platform</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Travel</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Web App</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://safiya-drive-welcome.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Daily Radiance</h4>
                    <p className="text-sm text-muted-foreground mb-2">Your daily dose of wellness, positivity, and lifestyle inspiration</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Lifestyle</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Wellness</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://daily-radiance-project.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Aether</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cloud-native platform for seamless deployment and scaling</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Docker</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Node.js</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">The Sentinel AI</h4>
                    <p className="text-sm text-muted-foreground mb-2">Advanced security monitoring and threat detection system</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI/ML</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Python</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">TensorFlow</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Heart Health Planner</h4>
                    <p className="text-sm text-muted-foreground mb-2">Your personalized health guide made with love. Get customized nutrition plans based on your unique profile.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Health Tech</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://heart-health-planner.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">The Safe Heart Protocol</h4>
                    <p className="text-sm text-muted-foreground mb-2">A guide for parents and teens on navigating relationships safely in the modern world</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Web App</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Education</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://safe-heart-protocol.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Bharat AI One - My Book & Project</h4>
                    <p className="text-sm text-muted-foreground mb-2">India Ultimate ChatBot - States & PM, Places & Food, Fruits & Colors, Current Time</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">AI ChatBot</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">India</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://bharat-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Bharat Law & Rules</h4>
                    <p className="text-sm text-muted-foreground mb-2">Comprehensive legal information platform for Indian laws and regulations</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Legal Tech</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">India</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://bharat-law-rules.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-semibold text-lg">Tic Tac Gold</h4>
                    <p className="text-sm text-muted-foreground mb-2">Modern twist on the classic tic-tac-toe game with enhanced features</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">React</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Game</Badge>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">Interactive</Badge>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href="https://tic-tac-gold-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
