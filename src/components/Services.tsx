import { Card } from "@/components/ui/card";
import { Stethoscope, Heart, Shield, Users, Baby, Eye, Activity, Pill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services for patients of all ages. From routine check-ups to managing chronic conditions, we provide personalized medical care with a focus on prevention and wellness.",
      features: [
        "Routine Health Check-ups",
        "Chronic Disease Management",
        "Preventive Care",
        "Health Screenings"
      ]
    },
    {
      icon: Heart,
      title: "Cardiology Care",
      description: "Specialized cardiovascular health services including blood pressure monitoring, heart disease prevention, and management of cardiac conditions to keep your heart healthy.",
      features: [
        "Blood Pressure Monitoring",
        "ECG Services",
        "Heart Disease Prevention",
        "Cardiac Risk Assessment"
      ]
    },
    {
      icon: Activity,
      title: "Diabetes Management",
      description: "Comprehensive diabetes care including blood sugar monitoring, dietary counseling, medication management, and lifestyle guidance to help you live well with diabetes.",
      features: [
        "Blood Sugar Monitoring",
        "Dietary Counseling",
        "Medication Management",
        "Lifestyle Guidance"
      ]
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Specialized healthcare services for infants, children, and adolescents including vaccinations, growth monitoring, and treatment of childhood illnesses.",
      features: [
        "Child Vaccinations",
        "Growth Monitoring",
        "Pediatric Consultations",
        "Childhood Illness Treatment"
      ]
    },
    {
      icon: Shield,
      title: "Emergency Care",
      description: "24/7 emergency medical services for urgent health conditions. Our clinic is equipped to handle medical emergencies and provide immediate care when you need it most.",
      features: [
        "24/7 Emergency Services",
        "First Aid Treatment",
        "Urgent Care",
        "Medical Emergency Response"
      ]
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "On-site pharmacy with a wide range of medications and medical supplies. We ensure you get the right medications with proper guidance on usage and dosage.",
      features: [
        "Prescription Medications",
        "Over-the-counter Drugs",
        "Medical Supplies",
        "Medication Counseling"
      ]
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              Our Medical Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Comprehensive healthcare services for you and your family
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  <p className="text-sm font-inter font-semibold text-foreground mb-3">
                    Key Capabilities:
                  </p>
                  {service.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground font-inter group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
