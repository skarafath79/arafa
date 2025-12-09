
import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Globe, Terminal } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Invert logic for natural feel
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}    >

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        {/* Grid lines similar to preloader but subtler */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div
        ref={containerRef}
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 perspective-1000"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative transition-transform duration-200 ease-out transform-style-3d"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Main Content Floating Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-style-3d relative group overflow-hidden">

            {/* SPOTLIGHT GLOW EFFECT */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
              }}
            />
            {/* Intense border spotlight */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
                maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px',
                borderRadius: 'inherit'
              }}
            />

            {/* Holographic Border Effect (Base) */}
            <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center transform-style-3d relative z-20">

              {/* Text Content */}
              <div className="space-y-8 transform translate-z-20">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md transform translate-z-30 shadow-lg relative group/badge overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      System Online
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white transform translate-z-40 drop-shadow-xl relative">
                    Hi, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                      Shaik Arafath
                    </span>
                  </h1>

                  <div className="text-xl md:text-2xl text-muted-foreground font-light transform translate-z-30 h-10">
                    <span className="text-cyan-400 font-mono">&lt;AI Engineer /&gt;</span> & <span className="text-purple-400 font-mono">&lt;Co-Founder /&gt;</span>
                  </div>

                  <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed transform translate-z-20 border-l-2 border-primary/30 pl-4">
                    Architecting intelligent solutions at the intersection of AI and Web Technologies.
                    Building <span className="text-white font-medium">SikshaNext</span> to empower the next generation of learners.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 transform translate-z-50 pt-4">
                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] transform hover:scale-105 hover:translate-z-10 transition-all duration-300 rounded-xl group/btn"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center">View Projects <ArrowRight className="ml-2 w-4 h-4" /></span>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transform hover:scale-105 hover:translate-z-10 transition-all duration-300 rounded-xl group/btn"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    <span className="relative">Contact Me</span>
                  </Button>
                </div>

                <div className="flex gap-6 transform translate-z-40 pt-8 border-t border-white/5">
                  {[
                    { icon: Github, href: "https://github.com/skarafath79" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/shaik-arafath-5b0124354" },
                    { icon: Globe, href: "https://sikshanext.in" },
                    { icon: Mail, href: "mailto:skarafath79@gmail.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors transform hover:translate-y-[-5px] hover:scale-110 duration-300"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* 3D Visual Element / Avatar Area */}
              <div className="relative transform-style-3d group-hover:scale-105 transition-transform duration-500 block mt-12 lg:mt-0">
                {/* Floating Elements Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse transform translate-z-[-20px]"></div>

                {/* Main 3D Card for Image/Graphic */}
                <div className="relative w-full aspect-square max-w-md mx-auto transform-style-3d">
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] transform translate-z-10"></div>
                  <div className="absolute inset-4 border border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite_reverse] transform translate-z-20"></div>
                  <div className="absolute inset-12 border border-dotted border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite] transform translate-z-30"></div>

                  {/* Central 3D Object (Profile or Icon) */}
                  <div className="absolute inset-20 bg-gradient-to-br from-gray-900 to-black rounded-full border border-white/10 shadow-2xl flex items-center justify-center transform translate-z-50 overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Shaik Arafath"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        // If image fails, show 3D icon
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex-col');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <Cpu className="w-16 h-16 text-cyan-400 absolute bottom-1/4 animate-bounce hidden peer-empty:block" />
                  </div>

                  {/* Floating Tech Cards */}
                  <div className="absolute -top-4 -right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 transform translate-z-60 animate-float shadow-xl">
                    <Terminal className="w-6 h-6 text-green-400 mb-2" />
                    <div className="h-1 w-12 bg-green-400/50 rounded-full"></div>
                    <div className="h-1 w-8 bg-green-400/30 rounded-full mt-1"></div>
                  </div>

                  <div className="absolute bottom-8 -left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 transform translate-z-70 animate-float delay-1000 shadow-xl">
                    <Globe className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-xs font-mono text-blue-200">World Wide</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
