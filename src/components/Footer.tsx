import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Name and copyright */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-bold text-xl mb-2 text-foreground">
                Shaik Arafath
              </h3>
              <p className="text-sm text-muted-foreground font-inter">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Center - Made with love */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-inter">Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span className="text-sm font-inter">and code</span>
            </div>

            {/* Right side - Social links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:shaik.arafath@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
