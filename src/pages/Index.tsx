import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MiniApps from "@/components/MiniApps";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedLayout from "@/components/AnimatedLayout";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <AnimatedLayout>
      <SEO />
      <ThemeToggle />
      <main role="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <MiniApps />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </AnimatedLayout>
  );
};

export default Index;
