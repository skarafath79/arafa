import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  // Tech icons for floating animation
  const techIcons = [
    { icon: <Code2 className="w-8 h-8 text-primary/30" />, delay: 0 },
    { icon: <Sparkles className="w-8 h-8 text-accent/30" />, delay: 0.5 },
    { icon: <Zap className="w-8 h-8 text-primary/30" />, delay: 1 },
    { icon: <Cpu className="w-8 h-8 text-accent/30" />, delay: 1.5 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated tech icons floating in background */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern with parallax */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"
        style={{
          backgroundPosition: `${scrollY * 0.1}px ${scrollY * 0.1}px`
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline with gradient and hover effect */}
          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-poppins font-black mb-8 leading-tight"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
              textShadow: isHovered 
                ? '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)'
                : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Shaik Arafath
            </span>
          </motion.h1>

          {/* Badge with subtle animation */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/30 mb-8 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <span className="text-base font-inter text-foreground font-medium">AI & Machine Learning Engineer | Co-Founder at SikshaNext</span>
          </motion.div>

          {/* Sub-headline with staggered animation */}
          <motion.h2 
            className="text-xl sm:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            B.Tech CSE student and Co-Founder of Sikshanext, crafting intelligent AI/ML solutions. 
            <motion.span 
              className="block mt-2 text-foreground/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering students through innovative technology from Khammam, Telangana.
            </motion.span>
          </motion.h2>

          {/* Social Links - Prominent */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.a 
              href="mailto:skarafath79@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Send email to Shaik Arafath"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">skarafath79@gmail.com</span>
            </motion.a>
            <motion.a 
              href="https://github.com/skarafath79"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Visit Shaik Arafath's GitHub profile"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">GitHub</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/shaik-arafath-5b0124354"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-card border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              aria-label="Visit Shaik Arafath's LinkedIn profile"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-inter font-medium">LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* CTA Buttons with enhanced hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden font-poppins font-bold text-base px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 text-primary-foreground"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden font-poppins font-bold text-base px-10 py-7 border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Emergency contact badge */}
          <motion.a
            href="tel:+919063059586"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm hover:bg-primary/20 transition-colors cursor-pointer"
            animate={{ 
              boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.7)', '0 0 0 10px rgba(168, 85, 247, 0)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span>📞 Contact: +91 9063059586</span>
          </motion.a>

          {/* Scroll indicator */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <div className="scroll-indicator"></div>
            <p className="text-xs text-muted-foreground mt-4">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;