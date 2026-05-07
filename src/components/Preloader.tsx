
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [exiting, setExiting] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [showStartButton, setShowStartButton] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const fullText = "Creative Developer | AI Enthusiast | Designer";
    
    // Typing effect logic
    useEffect(() => {
        if (!isStarted) return;
        
        let index = 0;
        const timer = setInterval(() => {
            setDisplayText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, [isStarted]);

    // Progress bar logic
    useEffect(() => {
        if (!isStarted) return;

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setExiting(true);
                        setTimeout(onComplete, 1200); // Wait for exit animation
                    }, 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, 40); // Total ~4 seconds loading
        return () => clearInterval(interval);
    }, [isStarted, onComplete]);

    // AI Voice Welcome
    const speakWelcome = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance("Hey, welcome to Arafath’s portfolio website.");
            // Try to find a good male voice
            const voices = window.speechSynthesis.getVoices();
            const maleVoice = voices.find(voice => voice.name.includes('Male') || voice.name.includes('David') || voice.name.includes('Google US English'));
            if (maleVoice) utterance.voice = maleVoice;
            utterance.pitch = 0.9;
            utterance.rate = 0.95;
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleStart = () => {
        setIsStarted(true);
        setShowStartButton(false);
        speakWelcome();
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(e => console.log("Audio play blocked", e));
        }
    };

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden perspective-1000 ${exiting ? 'animate-cinematic-fade-out' : ''}`}>
            {/* Background Music */}
            <audio 
                ref={audioRef}
                src="https://cdn.pixabay.com/audio/2022/03/24/audio_3d1a84f5f5.mp3" // Cinematic soft track
                loop
            />

            {/* Particles / Floating Light Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full blur-[1px] animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            '--duration': `${10 + Math.random() * 20}s`,
                            '--delay': `${-Math.random() * 20}s`
                        } as any}
                    />
                ))}
            </div>

            {/* Glassmorphism Container */}
            <AnimatePresence>
                {showStartButton ? (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        onClick={handleStart}
                        className="relative z-10 px-8 py-4 glass-morphism rounded-full text-cyan-400 font-mono tracking-widest hover:text-white hover:border-cyan-400 transition-all duration-500 group shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    >
                        <span className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md group-hover:bg-cyan-400/20 transition-all"></span>
                        INITIALIZE CINEMATIC EXPERIENCE
                    </motion.button>
                ) : (
                    <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-6">
                        {/* 3D Rotating Logo/Icon */}
                        <div className="relative w-32 h-32 mb-12 animate-rotate-3d transform-style-3d">
                            <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-xl glass-morphism translate-z-10"></div>
                            <div className="absolute inset-0 border-2 border-purple-500/50 rounded-xl glass-morphism -translate-z-10 rotate-45"></div>
                            <div className="absolute inset-0 flex items-center justify-center translate-z-20">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg shadow-[0_0_30px_#06b6d4]"></div>
                            </div>
                        </div>

                        {/* Welcome Text */}
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tighter text-white"
                        >
                            <span className="text-glow-blue">Welcome to</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-purple uppercase">
                                Arafath Portfolio
                            </span>
                        </motion.h1>

                        {/* Typing Effect Subtitle */}
                        <div className="h-8 mb-12">
                            <p className="text-cyan-400/80 font-mono text-sm md:text-lg tracking-widest text-center">
                                {displayText}
                                <span className="animate-pulse ml-1">|</span>
                            </p>
                        </div>

                        {/* Progress Bar & Counter */}
                        <div className="w-full max-w-md">
                            <div className="flex justify-between mb-2 font-mono text-xs text-cyan-500/70 uppercase tracking-widest">
                                <span>System Loading...</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div 
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_15px_#06b6d4]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* Social Media Icons (Static or low-key in preloader) */}
            {!showStartButton && (
                <div className="absolute bottom-12 flex gap-6 animate-reveal">
                    {['github', 'linkedin', 'twitter'].map((social) => (
                        <div 
                            key={social}
                            className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-cyan-400/50 hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer border border-cyan-400/10 hover:border-cyan-400/50 shadow-lg"
                        >
                            <i className={`fab fa-${social}`}></i>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Preloader;
