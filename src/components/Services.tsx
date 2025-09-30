import { Card } from "@/components/ui/card";
import { BarChart3, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transforming complex datasets into clear, actionable insights. I utilize Python libraries like Pandas and Matplotlib to analyze, visualize, and interpret data to drive decision-making.",
      features: [
        "Statistical Analysis",
        "Data Visualization",
        "Pattern Recognition",
        "Predictive Modeling"
      ]
    },
    {
      icon: Code,
      title: "Python Development",
      description: "Building custom scripts and solutions to automate tasks and solve problems efficiently. From data processing to backend logic, I deliver clean and effective Python code.",
      features: [
        "Automation Scripts",
        "API Integration",
        "Backend Development",
        "Algorithm Implementation"
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
              What I Offer
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Professional services leveraging AI and development expertise
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
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
