import { Card } from "@/components/ui/card";
import { Heart, Users, GraduationCap, MapPin, Stethoscope, Award, Clock, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              About Our Doctor
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Doctor Profile */}
          <div className="mb-12 animate-fade-in-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed text-center max-w-4xl mx-auto">
                Dr. [Father's Name] is a dedicated and experienced medical practitioner serving the community of Khammam, Telangana for over 15 years. 
                With a passion for providing compassionate healthcare, he has built Taj Clinic as a trusted medical center where families receive 
                personalized care with modern medical practices and traditional healing wisdom.
              </p>
            </Card>
          </div>

          {/* Medical Experience */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Stethoscope className="w-8 h-8 text-primary" />
              Medical Experience
            </h3>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary/30">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h4 className="font-poppins font-bold text-2xl mb-2 text-primary">General Practitioner & Family Doctor</h4>
                      <p className="text-xl font-semibold text-foreground mb-1">Taj Clinic</p>
                      <p className="text-muted-foreground font-inter">MBBS | 15+ Years Experience</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                    Dedicated to providing comprehensive healthcare services to families in Khammam and surrounding areas. 
                    Specializing in preventive care, chronic disease management, and emergency medical services.
                  </p>

                  <div className="mb-6">
                    <h5 className="font-poppins font-semibold text-lg mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Medical Specialties
                    </h5>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">General Medicine & Family Healthcare</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Preventive Care & Health Screenings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Chronic Disease Management (Diabetes, Hypertension)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Emergency Medical Care & First Aid</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Child Healthcare & Immunizations</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-poppins font-semibold text-lg mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Our Mission
                    </h5>
                    <p className="text-muted-foreground font-inter leading-relaxed ml-7">
                      To provide accessible, affordable, and quality healthcare to every family in our community. 
                      We believe in treating not just the illness, but caring for the whole person with compassion and respect.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h5 className="font-poppins font-semibold text-lg">Clinic Hours</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
                        <span className="font-medium">Monday - Saturday: 9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
                        <span className="font-medium">Sunday: 10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20">
                        <span className="font-medium">Emergency: 24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Medical Education */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Medical Education
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">MBBS (Bachelor of Medicine, Bachelor of Surgery)</h4>
                    <p className="text-primary font-semibold mb-1">[Medical College Name], Telangana</p>
                    <p className="text-muted-foreground font-inter">Graduated: [Year]</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">Medical Registration</h4>
                    <p className="text-primary font-semibold mb-1">Telangana State Medical Council</p>
                    <p className="text-muted-foreground font-inter">Licensed Medical Practitioner</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">Continuing Medical Education</h4>
                    <p className="text-primary font-semibold mb-1">Regular CME Programs & Medical Conferences</p>
                    <p className="text-muted-foreground font-inter">Updated with Latest Medical Practices</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Medical Philosophy & Values */}
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Medical Philosophy
              </h3>
              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Patient-Centered Care</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-3">
                        Every patient is treated with dignity, respect, and compassion. We listen to your concerns and work together to find the best treatment plan.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Preventive Healthcare</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        Prevention is better than cure. We focus on health education, regular check-ups, and early detection to keep you and your family healthy.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Community Service</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        Committed to serving the community through health camps, awareness programs, and providing affordable healthcare to all economic backgrounds.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Clinic Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                Clinic Information
              </h3>
              
              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Location:</span> Khammam, Telangana
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Established:</span> [Year] - Serving Community for 15+ Years
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Languages:</span> Telugu, Hindi, English
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl">
                <h4 className="font-poppins font-bold text-2xl mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Why Choose Taj Clinic?
                </h4>
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  We are committed to providing the highest quality healthcare with a personal touch. 
                  Our clinic combines modern medical technology with compassionate care to ensure the best outcomes for our patients.
                </p>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-inter text-sm text-center italic text-muted-foreground">
                    "Your health is our priority, your trust is our foundation."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 mt-6">
                <h4 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Our Values
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Compassionate Care</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Medical Excellence</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Patient Trust</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Community Service</p>
                  </div>
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
