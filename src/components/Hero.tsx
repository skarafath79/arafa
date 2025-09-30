import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 inline-block">
            <div className="relative w-40 h-40 mx-auto">
              <img 
                src={profilePhoto} 
                alt="Shaik Arafath - AI & Machine Learning Engineer" 
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter text-primary">AI & Machine Learning Engineer</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
            Shaik Arafath
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Building Intelligent Solutions
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground font-inter max-w-3xl mx-auto mb-10 leading-relaxed">
            A driven 3rd-year Computer Science student with a passion for Artificial Intelligence 
            and Machine Learning, eager to contribute innovative solutions in the tech industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group font-poppins font-semibold text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="font-poppins font-semibold text-base px-8 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground font-inter">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground font-inter">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground font-inter">IEEE Hackathons</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
