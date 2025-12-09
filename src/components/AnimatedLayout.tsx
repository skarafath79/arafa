import { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const controls = useAnimation();
  const [showDecor, setShowDecor] = useState(false);

  useEffect(() => {
    // Start animations when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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

    return () => {
      mq.removeEventListener('change', update);
      reduceMotion.removeEventListener('change', update);
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background (desktop only) */}
      {showDecor && <ParticleBackground />}

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative z-10"
      >
        {children}
      </motion.div>

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
