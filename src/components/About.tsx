import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, GraduationCap, MapPin, Heart, Users } from "lucide-react";

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

          {/* Personal Profile */}
          <div className="mb-12 animate-fade-in-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed text-center max-w-4xl mx-auto">
                A motivated and aspiring B.Tech student with a strong academic foundation from Khammam, Telangana. 
                Passionate about exploration, adventure, and technology. A helpful and caring individual who is 
                always ready to support family and others in need.
              </p>
            </Card>
          </div>

          {/* Education Section */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">B.Tech (Bachelor of Technology)</h4>
                    <p className="text-primary font-semibold mb-1">Uttaranchal University, Dehradun, Uttarakhand</p>
                    <p className="text-muted-foreground font-inter">Expected Graduation: 2027</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">Intermediate (Arts and Science)</h4>
                    <p className="text-primary font-semibold mb-1">Krishnaveni Arts and Science College</p>
                    <p className="text-muted-foreground font-inter">Passed Out: 2022</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-xl mb-2">High School</h4>
                    <p className="text-primary font-semibold mb-1">Nirmal Hriday High School, Khammam, Telangana</p>
                    <p className="text-muted-foreground font-inter">Passed Out: 2020</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interests & Hobbies */}
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Interests & Hobbies
              </h3>
              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Travel & Exploration</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-3">
                        Keen interest in visiting new places and experiencing different cultures.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Ladakh', 'Kashmir', 'Goa', 'Agra', 'Delhi'].map((place) => (
                          <span key={place} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Riding</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        Passionate about riding horses, bikes, and cars. Love the thrill of adventure and the freedom of the open road.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xl mb-2">Social</h4>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        Enjoys spending time with children and helping people in need. Believe in making a positive impact in the community.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Personal Details & Family */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Personal Details
              </h3>
              
              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Nationality:</span> Indian
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Religion:</span> Muslim
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <p className="font-inter text-foreground">
                      <span className="font-semibold">Location:</span> Khammam, Telangana
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl">
                <h4 className="font-poppins font-bold text-2xl mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Family Background
                </h4>
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  Belong to a close-knit family of five members, including parents and two sisters. 
                  Family values and support have been instrumental in shaping my journey and aspirations.
                </p>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-inter text-sm text-center italic text-muted-foreground">
                    "Family is not an important thing. It's everything."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 mt-6">
                <h4 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-primary" />
                  Core Values
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Helpful & Caring</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Adventure Seeker</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Technology Enthusiast</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="font-inter text-foreground">Community Focused</p>
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
