import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Story cards */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">The Journey</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Hailing from Khammam, Telangana, I am a dedicated Computer Science and Engineering 
                      student at Uttaranchal University with a deep-rooted passion for technology.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">The Focus</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      My journey into the world of AI and Machine Learning is driven by a desire to solve 
                      complex problems. I am continuously honing my skills in frameworks like TensorFlow 
                      and Scikit-learn to turn data into actionable insights.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">The Goal</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      I am committed to lifelong learning and am actively seeking opportunities to apply 
                      my skills to real-world challenges. My goal is to contribute to cutting-edge AI 
                      projects that make a meaningful impact.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right side - Highlights */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl">
                <h3 className="font-poppins font-bold text-2xl mb-6">Quick Highlights</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">3rd Year</span> Computer Science Student
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <p className="font-inter text-foreground">
                      Specializing in <span className="font-semibold text-primary">AI & Machine Learning</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <p className="font-inter text-foreground">
                      Based in <span className="font-semibold">Khammam, Telangana</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }} />
                    <p className="font-inter text-foreground">
                      Studying at <span className="font-semibold">Uttaranchal University</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.8s" }} />
                    <p className="font-inter text-foreground">
                      Passionate about <span className="font-semibold text-primary">Solving Real Problems</span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-inter text-sm text-center italic text-muted-foreground">
                    "Transforming ideas into intelligent solutions through code and creativity"
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
