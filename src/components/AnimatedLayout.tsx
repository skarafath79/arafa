import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative z-10"
      >
        {children}
      </motion.div>
      
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default AnimatedLayout;
