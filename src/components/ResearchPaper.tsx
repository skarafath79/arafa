
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award } from 'lucide-react';

const ResearchPaper = () => {
  return (
    <section id="research" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
            <span className="text-glow-blue">Research &</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-purple uppercase">
              Publications
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Paper Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 md:p-12 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <FileText className="text-cyan-400 w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              Edge-AI for Real-Time Sign Language Recognition
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              This research focuses on optimizing deep learning models for edge devices to facilitate real-time sign language translation with minimal latency. It explores the intersection of computer vision and accessibility.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono flex items-center gap-2">
                    <Award className="w-4 h-4" /> PUBLISHED 2025
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-purple-400 text-xs font-mono">
                    DEEP LEARNING
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono">
                    EDGE COMPUTING
                </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Arafath_Paper.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <FileText className="w-5 h-5" /> READ PAPER
              </a>
              <a 
                href="https://edge-ai-for-real-time-sign-language.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 glass-morphism text-white font-bold rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
              >
                <ExternalLink className="w-5 h-5" /> PROJECT LIVE
              </a>
            </div>
          </motion.div>

          {/* Visual Preview / Abstract Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video md:aspect-square bg-white/5 backdrop-blur-md">
                <iframe 
                    src="/Arafath_Paper.pdf#toolbar=0" 
                    className="w-full h-full border-none opacity-80"
                    title="Research Paper Preview"
                />
                {/* Overlay to make it looks like a preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPaper;
