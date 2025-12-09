
import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [loadingStep, setLoadingStep] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [glitchText, setGlitchText] = useState('');
    const [showAccessGranted, setShowAccessGranted] = useState(false);
    const [exiting, setExiting] = useState(false);

    // Steps matching the narrative
    const steps = [
        { text: "INITIALIZING NEURAL LINK...", delay: 800 },
        { text: "DECRYPTING BIOS PROTECOLS...", delay: 1500 },
        { text: "LOADING HOLOGRAPHIC ASSETS...", delay: 2400 },
        { text: "SYNCHRONIZING CORE SUBSYSTEMS...", delay: 3200 },
        { text: "ESTABLISHING SECURE CONNECTION...", delay: 4000 }
    ];

    // Random character generator for Matrix effect
    const randomChar = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    useEffect(() => {
        let currentStepIndex = 0;

        const sequenceInterval = setInterval(() => {
            if (currentStepIndex < steps.length) {
                setDisplayText(steps[currentStepIndex].text);
                setLoadingStep(prev => prev + 1);
                currentStepIndex++;
            } else {
                clearInterval(sequenceInterval);
                // Final sequence
                setDisplayText("IDENTITY VERIFIED: ADMIN");
                setTimeout(() => {
                    setShowAccessGranted(true);
                    setTimeout(() => {
                        setExiting(true); // Trigger exit animation
                        setTimeout(onComplete, 800); // Wait for exit animation
                    }, 1500);
                }, 1000);
            }
        }, 800); // Slightly faster transitions for hype

        // Glitch effect loop
        const glitchInterval = setInterval(() => {
            let glitches = '';
            for (let i = 0; i < 10; i++) glitches += randomChar();
            setGlitchText(glitches);
        }, 50);

        return () => {
            clearInterval(sequenceInterval);
            clearInterval(glitchInterval);
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden perspective-1000 ${exiting ? 'animate-[cinematic-fade-out_0.8s_forwards]' : ''}`}>

            {/* Background - Cyber Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] animate-[pulse_4s_infinite]"></div>

            {/* Moving stars/particles */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(20)].map((_, i) => (
                    <div key={i}
                        className="absolute bg-white rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Container - HUD Style */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl p-8 border-y-2 border-cyan-900/50 bg-black/40 backdrop-blur-sm">

                {/* Top Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scanline opacity-50"></div>

                {/* Central Reactor / Spinner */}
                <div className="relative mb-12 group">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl animate-pulse group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                    {/* Center Emblem/Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-cyan-400 animate-hologram">
                            {showAccessGranted ? '✓' : Math.floor((loadingStep / steps.length) * 100)}%
                        </span>
                    </div>

                    {/* Spinner Rings */}
                    <div className="w-48 h-48 rounded-full border-4 border-cyan-900/30 border-t-cyan-500 animate-[spin_2s_linear_infinite] shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
                    <div className="absolute top-2 left-2 right-2 bottom-2 rounded-full border-2 border-purple-900/30 border-b-purple-500 animate-[spin_3s_linear_infinite_reverse]"></div>
                    <div className="absolute top-8 left-8 right-8 bottom-8 rounded-full border border-dashed border-cyan-500/50 animate-[spin_8s_linear_infinite]"></div>
                </div>

                {/* Text Area */}
                <div className="text-center space-y-4">
                    {showAccessGranted ? (
                        <div className="space-y-2 animate-[fade-in-up_0.5s_ease-out]">
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse">
                                WELCOME
                            </h1>
                            <p className="text-cyan-300 font-mono tracking-[0.5em] text-sm uppercase">Access Granted // Initiate Protocol 739</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center h-24">
                            <h2 className="text-xl md:text-2xl font-bold font-mono text-cyan-500 animate-glitch min-h-[32px]">
                                {displayText}
                            </h2>
                            <p className="mt-2 text-xs font-mono text-cyan-800 opacity-70">
                                {glitchText} - SYSTEM ID: {Math.random().toString(36).substring(7).toUpperCase()}
                            </p>

                            {/* Progress Bar */}
                            <div className="w-64 h-1 bg-gray-900 mt-6 rounded overflow-hidden relative">
                                <div
                                    className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                                    style={{ width: `${(loadingStep / steps.length) * 100}%`, transition: 'width 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Corner Decorators (HUD elements) */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-600"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-600"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-600"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-600"></div>

            </div>

            {/* Footer System Info */}
            <div className="absolute bottom-8 left-0 w-full flex justify-between px-12 text-[10px] text-cyan-900 font-mono uppercase">
                <span>Mem: {256 + loadingStep * 124}TB</span>
                <span>Secure :: {showAccessGranted ? 'LOCK' : 'OPEN'}</span>
                <span>V.2.0.45</span>
            </div>

        </div>
    );
};

export default Preloader;
