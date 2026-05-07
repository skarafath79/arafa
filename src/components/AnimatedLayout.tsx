import { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const controls = useAnimation();
  const [showDecor, setShowDecor] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Start animations when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    });

    // Only show heavy decorations on larger screens and when user hasn't requested reduced motion
    const mq = window.matchMedia('(min-width: 768px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setShowDecor(mq.matches && !reduceMotion.matches);
    };

    update();
    mq.addEventListener('change', update);
    reduceMotion.addEventListener('change', update);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mq.removeEventListener('change', update);
      reduceMotion.removeEventListener('change', update);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background (desktop only) */}
      {showDecor && <ParticleBackground />}

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 1.05 }}
        animate={controls}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Cursor Glow */}
      {showDecor && (
        <motion.div
          className="fixed top-0 left-0 w-80 h-80 bg-primary/20 rounded-full pointer-events-none blur-[100px] z-50 mix-blend-screen"
          animate={{
            x: mousePos.x - 160,
            y: mousePos.y - 160,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        />
      )}

      {/* Glow Effects (desktop only) */}
      {showDecor && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter sm:blur-3xl mix-blend-multiply sm:animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full filter sm:blur-3xl mix-blend-multiply sm:animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full filter sm:blur-3xl mix-blend-multiply sm:animate-blob animation-delay-4000" />
        </div>
      )}
    </div>
  );
};

export default AnimatedLayout;
