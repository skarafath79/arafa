import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Star, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{ y: Math.random() * 100, x: Math.random() * 100 }}
            animate={{
              y: [Math.random() * 100, Math.random() * 100 - 100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      
      {/* Left 3D Robot */}
      <motion.div
        className="absolute top-1/2 left-20 transform -translate-y-1/2"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: [0, 360],
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 100, damping: 10 },
          y: { type: "spring", stiffness: 100, damping: 10 }
        }}
      >
        {/* Robot head */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl border-2 border-cyan-400/50"
          animate={{
            boxShadow: ['0 0 20px rgba(6, 182, 212, 0.3)', '0 0 40px rgba(6, 182, 212, 0.6)', '0 0 20px rgba(6, 182, 212, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          {/* Robot eyes */}
          <div className="flex justify-center gap-4 pt-6">
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 10px rgba(239, 68, 68, 0.8)', '0 0 20px rgba(239, 68, 68, 1)', '0 0 10px rgba(239, 68, 68, 0.8)']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 10px rgba(239, 68, 68, 0.8)', '0 0 20px rgba(239, 68, 68, 1)', '0 0 10px rgba(239, 68, 68, 0.8)']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3
              }}
            />
          </div>
          
          {/* Robot mouth */}
          <motion.div
            className="w-16 h-3 bg-black/80 mx-auto mt-4 rounded border border-cyan-400/30"
            animate={{
              background: ['rgba(0,0,0,0.8)', 'rgba(6, 182, 212, 0.2)', 'rgba(0,0,0,0.8)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Robot antenna */}
        <motion.div
          className="w-1 h-6 bg-gradient-to-t from-gray-600 to-cyan-400 -top-6 left-1/2 transform -translate-x-1/2"
          animate={{
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full -top-1 -left-0.5 absolute"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </motion.div>

      {/* Right 3D Robot */}
      <motion.div
        className="absolute top-1/2 right-20 transform -translate-y-1/2"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: [0, -360],
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 100, damping: 10 },
          y: { type: "spring", stiffness: 100, damping: 10 }
        }}
      >
        {/* Robot head */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl border-2 border-cyan-400/50"
          animate={{
            boxShadow: ['0 0 20px rgba(6, 182, 212, 0.3)', '0 0 40px rgba(6, 182, 212, 0.6)', '0 0 20px rgba(6, 182, 212, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          {/* Robot eyes */}
          <div className="flex justify-center gap-4 pt-6">
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 10px rgba(239, 68, 68, 0.8)', '0 0 20px rgba(239, 68, 68, 1)', '0 0 10px rgba(239, 68, 68, 0.8)']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 10px rgba(239, 68, 68, 0.8)', '0 0 20px rgba(239, 68, 68, 1)', '0 0 10px rgba(239, 68, 68, 0.8)']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3
              }}
            />
          </div>
          
          {/* Robot mouth */}
          <motion.div
            className="w-16 h-3 bg-black/80 mx-auto mt-4 rounded border border-cyan-400/30"
            animate={{
              background: ['rgba(0,0,0,0.8)', 'rgba(6, 182, 212, 0.2)', 'rgba(0,0,0,0.8)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Robot antenna */}
        <motion.div
          className="w-1 h-6 bg-gradient-to-t from-gray-600 to-cyan-400 -top-6 left-1/2 transform -translate-x-1/2"
          animate={{
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full -top-1 -left-0.5 absolute"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Profile Image */}
          <motion.div 
            className="relative mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Spotlight effect */}
            <div className="absolute inset-0 rounded-full spotlight-overlay" />
            
            {/* Image container with glow */}
            <div className="relative image-container">
              <motion.img
                src="/profile.png"
                alt="Shaik Arafath"
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white/20 animated-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          {/* Name with typewriter effect */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-black mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="typewriter inline-block">
              Shaik Arafath
            </span>
          </motion.h1>

          {/* Role description */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 float-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Briefcase className="w-4 h-4 text-purple-300" />
            <span className="text-white/90 font-medium">AI & Machine Learning Engineer</span>
          </motion.div>

          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 float-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Award className="w-4 h-4 text-blue-300" />
            <span className="text-white/90 font-medium">Co-Founder at SikshaNext</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Passionate about building innovative AI/ML solutions and empowering students through technology.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href="mailto:skarafath79@gmail.com"
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/skarafath79"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shaik-arafath-5b0124354"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Contact info - More Visible */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Email</p>
                  <p className="font-semibold">skarafath79@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="text-xs text-white/60">Mobile</p>
                  <p className="font-semibold">+91 9063059586</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;