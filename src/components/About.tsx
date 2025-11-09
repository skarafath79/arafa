import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, GraduationCap, MapPin, Heart, Users, Briefcase, Sparkles, Globe, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

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
                A motivated and aspiring B.Tech CSE 3rd Year student with a strong academic foundation from Khammam, Telangana. 
                Co-Founder & AI/ML Lead at Sikshanext, passionate about building AI-powered solutions that empower students. 
                Combining academic excellence with innovation, technology, and a drive to create meaningful impact.
              </p>
            </Card>
          </div>

          {/* Professional Experience */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              Professional Experience
            </h3>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary/30">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h4 className="font-poppins font-bold text-2xl mb-2 text-primary">Co-Founder & AI/ML Lead</h4>
                      <p className="text-xl font-semibold text-foreground mb-1">Sikshanext</p>
                      <p className="text-muted-foreground font-inter">B.Tech CSE 3rd Year | Student Innovator</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                    As Co-Founder and AI/ML Lead at Sikshanext, I work on designing and developing AI-powered solutions 
                    that support students in their learning and career growth.
                  </p>

                  <div className="mb-6">
                    <h5 className="font-poppins font-semibold text-lg mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Responsibilities
                    </h5>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Leading the AI/ML initiatives within Sikshanext</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Building tools such as AI Roadmap Generator, AI Resume Builder, and AI Code Reviewer</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Researching and experimenting with machine learning models for real-world student use cases</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="font-inter text-foreground">Collaborating with the team to create a complete student ecosystem that helps peers learn, build, earn, and connect</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-poppins font-semibold text-lg mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Impact & Vision
                    </h5>
                    <p className="text-muted-foreground font-inter leading-relaxed ml-7">
                      This role allows me to combine my academic journey in B.Tech CSE (3rd year) with my passion for 
                      innovation, AI, and student empowerment. Building solutions that make a real difference in students' lives.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-5 h-5 text-primary" />
                      <h5 className="font-poppins font-semibold text-lg">Connect with Sikshanext</h5>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://sikshanext.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/sikshanextpvtltd//" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a 
                        href="https://www.instagram.com/siksha_next/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                      <a 
                        href="https://x.com/sikshanext" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Twitter className="w-4 h-4" />
                        X (Twitter)
                      </a>
                      <a 
                        href="https://www.youtube.com/channel/UCMQopVnZOfAW_wIWJ4gaYuQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Youtube className="w-4 h-4" />
                        YouTube
                      </a>
                      <a 
                        href="https://www.threads.com/@siksha_next" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium"
                      >
                        <Target className="w-4 h-4" />
                        Threads
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
