import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:shaik.arafath@example.com",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              I'm currently seeking new opportunities and am open to collaboration. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-inter font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-inter font-medium mb-2 block">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-inter font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-inter font-semibold"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
                <h3 className="font-poppins font-bold text-2xl mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className={`p-5 bg-gradient-to-br ${link.color} border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-x-1`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <link.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-inter font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </p>
                            <p className="text-sm text-muted-foreground font-inter">
                              Click to connect
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <p className="text-sm font-inter text-center text-muted-foreground italic">
                  "Open to opportunities in AI/ML, Data Science, and Software Development"
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
