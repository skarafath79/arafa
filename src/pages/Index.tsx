import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MiniApps from "@/components/MiniApps";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <MiniApps />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
