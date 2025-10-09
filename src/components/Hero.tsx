import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          
          {/* Main headline with gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-poppins font-black mb-8 leading-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[gradient_8s_ease_infinite] bg-[length:200%_auto]">
              Shaik Arafath
            </span>
          </h1>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/30 mb-8 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-base font-inter text-foreground font-medium">AI & Machine Learning Engineer | Co-Founder at Bit Benders</span>
          </div>

          {/* Sub-headline */}
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            B.Tech CSE student and Co-Founder of Bit Benders, crafting intelligent AI/ML solutions. 
            <span className="block mt-2 text-foreground/80">Empowering students through innovative technology from Khammam, Telangana.</span>
          </h2>

          {/* Social Links - Prominent */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:skarafath79@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Send email to Shaik Arafath"
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">skarafath79@gmail.com</span>
            </a>
            <a 
              href="https://github.com/skarafath79"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Visit Shaik Arafath's GitHub profile"
            >
              <Github className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shaik-arafath-5b0124354"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Visit Shaik Arafath's LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">LinkedIn</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group font-poppins font-bold text-base px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 text-primary-foreground"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="font-poppins font-bold text-base px-10 py-7 border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-poppins font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-sm text-muted-foreground font-inter">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-poppins font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-sm text-muted-foreground font-inter">Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-poppins font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">3x</div>
              <div className="text-sm text-muted-foreground font-inter">IEEE Hackathons</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;