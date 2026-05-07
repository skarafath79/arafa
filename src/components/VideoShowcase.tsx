import React from 'react';
import LogoLoop from './ui/LogoLoop';
import { motion } from 'framer-motion';

const videos = [
  { src: '/bharat ai.mp4', title: 'Bharat AI' },
  { src: '/dislpine.mp4', title: 'Discipline' },
  { src: '/law rules.mp4', title: 'Law Rules' },
  { src: '/taj website.mp4', title: 'Taj Website' },
  { src: '/vidya saathi.mp4', title: 'Vidya Saathi' },
  { src: '/ai crop.mp4', title: 'AI Crop' },
  { src: '/medial analyssi.mp4', title: 'Medical Analysis' },
  { src: '/game.mp4', title: 'Game' },
  { src: '/rack game .mp4', title: 'Rack Game' },
  { src: '/game rush.mp4', title: 'Game Rush' },
  { src: '/neon game.mp4', title: 'Neon Game' },
  { src: '/samrt al transalator.mp4', title: 'Smart AI Translator' },
];

const VideoShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            AI & Interactive Showcase
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A cinematic loop of my recent AI implementations, web experiences, and interactive developments.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Top Loop - Left Moving */}
        <div className="mb-12">
          <LogoLoop
            logos={videos.slice(0, 6).map(v => ({ src: v.src, title: v.title }))}
            speed={40}
            direction="left"
            logoHeight={200}
            gap={30}
            fadeOut
            scaleOnHover
            renderItem={(item) => (
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video w-[350px]">
                <video
                  src={(item as any).src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-medium text-lg">{(item as any).title}</span>
                </div>
              </div>
            )}
          />
        </div>

        {/* Bottom Loop - Right Moving */}
        <div className="mb-8">
          <LogoLoop
            logos={videos.slice(6).map(v => ({ src: v.src, title: v.title }))}
            speed={40}
            direction="right"
            logoHeight={200}
            gap={30}
            fadeOut
            scaleOnHover
            renderItem={(item) => (
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video w-[350px]">
                <video
                  src={(item as any).src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-medium text-lg">{(item as any).title}</span>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default VideoShowcase;
