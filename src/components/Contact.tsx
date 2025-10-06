import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appointmentType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Appointment Request Sent!",
      description: "Thank you for contacting Taj Clinic. We'll get back to you soon to confirm your appointment.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", appointmentType: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      info: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      info: "Khammam, Telangana",
      href: "#",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Clock,
      label: "Clinic Hours",
      info: "9 AM - 8 PM Daily",
      href: "#",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Mail,
      label: "Email Us",
      info: "tajclinic@example.com",
      href: "mailto:tajclinic@example.com",
      color: "from-red-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              Contact Taj Clinic
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Book your appointment or get in touch with us. We're here to provide 
              quality healthcare services for you and your family.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Appointment Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
              <h3 className="text-2xl font-poppins font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Book Appointment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-inter font-medium mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-inter font-medium mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-inter font-medium mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter"
                  />
                </div>

                <div>
                  <Label htmlFor="appointmentType" className="font-inter font-medium mb-2 block">
                    Appointment Type
                  </Label>
                  <select
                    id="appointmentType"
                    value={formData.appointmentType}
                    onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                    className="w-full px-3 py-2 bg-background/50 border border-border focus:border-primary rounded-md font-inter"
                  >
                    <option value="">Select appointment type</option>
                    <option value="general">General Consultation</option>
                    <option value="checkup">Health Check-up</option>
                    <option value="emergency">Emergency</option>
                    <option value="followup">Follow-up Visit</option>
                    <option value="vaccination">Vaccination</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-inter font-medium mb-2 block">
                    Message / Symptoms *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your symptoms or reason for visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary font-inter min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-inter font-semibold"
                  size="lg"
                >
                  Book Appointment
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
                <h3 className="font-poppins font-bold text-2xl mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="group block"
                    >
                      <Card className={`p-5 bg-gradient-to-br ${contact.color} border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-x-1`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <contact.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-inter font-semibold text-foreground group-hover:text-primary transition-colors">
                              {contact.label}
                            </p>
                            <p className="text-sm text-muted-foreground font-inter">
                              {contact.info}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <h4 className="font-poppins font-semibold text-lg mb-3 text-center">
                  Emergency Services
                </h4>
                <p className="text-sm font-inter text-center text-muted-foreground mb-2">
                  For medical emergencies, call us immediately
                </p>
                <p className="text-lg font-bold text-center text-red-600">
                  📞 +91 98765 43210
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <p className="text-sm font-inter text-center text-muted-foreground italic">
                  "Your health is our priority, your trust is our foundation."
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
