import { Phone, MapPin, Mail, Heart, Stethoscope } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Clinic info */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-bold text-xl mb-2 text-foreground flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                Taj Clinic
              </h3>
              <p className="text-sm text-muted-foreground font-inter mb-1">
                Your Trusted Village Doctor
              </p>
              <p className="text-sm text-muted-foreground font-inter">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Center - Made with love */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-inter">Serving with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span className="text-sm font-inter">and compassion</span>
            </div>

            {/* Right side - Contact links */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:tajclinic@example.com"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <div
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="Location"
                title="Khammam, Telangana"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
