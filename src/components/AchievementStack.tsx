
import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { motion } from 'framer-motion';

const AchievementStack = () => {
  const items = [
    {
      title: "AI for a Sustainable 2025",
      image: "/al for a sustainable 2025.png",
      description: "Recognition for contributions to sustainable AI development."
    },
    {
      title: "Google Cloud APIs",
      image: "/apls on google cloud.png",
      description: "Certification in implementing Google Cloud APIs."
    },
    {
      title: "Care Top Team",
      image: "/care top team.png",
      description: "Leadership and teamwork recognition."
    },
    {
      title: "CodeStorm",
      image: "/codestorm.png",
      description: "Award winner at CodeStorm hackathon."
    },
    {
      title: "Farmers Fair & Agro Industrial Exhibition",
      image: "/farmers fair and ago industrial exhibrion.png",
      description: "Innovation in agricultural technology."
    },
    {
      title: "Gen AI NASSCOM",
      image: "/gen al nasscom.png",
      description: "NASSCOM certification in Generative AI."
    },
    {
      title: "Hack the Future",
      image: "/hack the future .png",
      description: "Top performer in Hack the Future competition."
    },
    {
      title: "Achievement Award",
      image: "/image.png",
      description: "Distinguished achievement in technology."
    },
    {
      title: "Lakshariha Hackathon 2026",
      image: "/lakshariha hackation 2026.png",
      description: "Winner of Lakshariha Hackathon 2026."
    },
    {
      title: "Artificial Intelligence Primer",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      pdf: "/Artificial Intelligence Primer Certification.pdf",
      description: "Foundational certification in Artificial Intelligence concepts."
    },
    {
      title: "Java Foundation",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      pdf: "/Java Foundation Certification.pdf",
      description: "Core Java programming and object-oriented principles."
    },
    {
      title: "Principles of Generative AI",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      pdf: "/Principles of Generative AI Certification.pdf",
      description: "Expertise in Generative AI models and applications."
    },
    {
      title: "Python Foundation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      pdf: "/Python Foundation Certification.pdf",
      description: "Mastery of Python programming basics and data structures."
    },
    {
      title: "Data Analytics using Power BI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      pdf: "/TechA Data Analytics using Power BI Foundation Certification.pdf",
      description: "Advanced data visualization and analytics using Power BI."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
            <span className="text-glow-blue">Recognitions &</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-purple uppercase">
              Certificates
            </span>
          </h2>
          <p className="text-cyan-400/60 font-mono text-sm uppercase tracking-widest">
            A visual stack of milestones and achievements
          </p>
        </motion.div>

        <div className="h-[95vh] w-full">
          <ScrollStack 
            itemDistance={200} 
            itemStackDistance={20} 
            baseScale={1} 
            itemScale={0}
            blurAmount={0}
            stackPosition="5%"
          >
            {items.map((item, index) => (
              <ScrollStackItem key={index}>
                <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-2xl">
                  {/* Floating Label */}
                  <div className="flex justify-between items-center px-2">
                    <span className="text-black font-black text-lg uppercase tracking-tighter">{item.title}</span>
                    {item.pdf && (
                        <a href={item.pdf} target="_blank" rel="noreferrer" className="text-purple-600 font-bold text-xs hover:underline">
                            OPEN ORIGINAL →
                        </a>
                    )}
                  </div>
                  
                  {/* FULL IMAGE CONTAINER */}
                  <div className="w-full h-[75vh] flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                    {item.pdf ? (
                        <iframe 
                            src={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                            className="w-full h-full border-none"
                            title={item.title}
                        />
                    ) : (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="max-w-full max-h-full object-contain shadow-sm"
                        />
                    )}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default AchievementStack;
