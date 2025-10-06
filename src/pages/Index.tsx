import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <ThemeToggle />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
