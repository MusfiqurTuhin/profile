"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import CyberGrid from "@/components/canvas/cyber-grid";
import { useMode } from "@/components/context/mode-context";
import { ArrowDown, Cpu, Activity, ShieldCheck, Terminal } from "lucide-react";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { mode } = useMode();
    const [glitchText, setGlitchText] = useState("MUSFIQUR TUHIN");

    // Glitch Effect
    useEffect(() => {
        const interval = setInterval(() => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
            const original = "MUSFIQUR TUHIN";
            let iterations = 0;

            const glitchInterval = setInterval(() => {
                setGlitchText(
                    original.split("").map((letter, index) => {
                        if (index < iterations) return original[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("")
                );

                if (iterations >= original.length) clearInterval(glitchInterval);
                iterations += 1 / 3;
            }, 30);

        }, 5000); // Run every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Reveal Animation
        tl.from(".hero-line", {
            scaleX: 0,
            duration: 1,
            ease: "power4.out"
        })
            .from(".glitch-title", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                skewX: -10
            })
            .from(".data-stream", {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.5
            }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className={`relative h-screen w-full flex flex-col items-center justify-center overflow-hidden ${mode === "story" ? "bg-stone-50" : "bg-[#030305]"}`}>
            {/* 3D Background - Corp Mode Only */}
            {mode === "corporate" && <CyberGrid />}

            {/* Story Mode: Warm Gradient Background */}
            {mode === "story" && (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-red-50 to-amber-50 opacity-60" />
            )}

            {/* Vignette Overlay */}
            <div className={`absolute inset-0 z-0 pointer-events-none ${mode === "story" ? "bg-radial-gradient from-transparent to-stone-100/90" : "bg-radial-gradient from-transparent to-[#030305]/90"}`} />

            {/* Horizontal Scanline - Corp Mode Only */}
            {mode === "corporate" && (
                <div className="absolute w-full h-1 bg-cyan-500/20 top-0 animate-scanline z-0 blur-sm pointer-events-none" />
            )}

            {/* Content Overlay */}
            <div className="z-10 w-full max-w-7xl px-4 relative">

                {/* Top HUD */}
                <div className={`absolute top-[-15vh] md:top-[-20vh] left-0 right-0 px-4 md:px-0 flex justify-between text-[8px] md:text-xs font-mono uppercase tracking-widest data-stream ${mode === "story" ? "text-stone-500/60" : "text-cyan-500/40"}`}>
                    <div className="flex gap-2 md:gap-4">
                        {mode === "story" && (
                            <span className="flex items-center gap-1 md:gap-2">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse bg-red-600" />
                                VOICE ACTIVE
                            </span>
                        )}
                        <span className="hidden sm:inline">{mode === "story" ? "BANGLADESH" : "DHAKA"}</span>
                    </div>
                    <div className="hidden md:block">{mode === "story" ? "JULY_SPIRIT" : "SECURE_V4.2"}</div>
                </div>

                <div className="relative mb-8 group flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10" />
                        <Image
                            src="/images/story/Md Musfiqur Rahman.jpg"
                            alt="System Architect"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                <div className="relative text-center md:text-left mix-blend-screen">
                    <div className={`w-24 h-1 hero-line mb-6 hidden md:block ${mode === "story" ? "bg-red-600" : "bg-cyan-500"}`} />

                    <h1 className={`glitch-title text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mb-4 ${mode === "story"
                        ? "text-stone-900"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                        }`}>
                        {glitchText}
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl inline-flex flex-col gap-1 text-left min-w-[200px] hover:border-cyan-500/50 transition-colors data-stream group">
                            <span className="text-[10px] uppercase text-zinc-500 font-mono tracking-wider group-hover:text-cyan-400">Current Role</span>
                            <span className="text-sm font-bold text-white flex items-center gap-2">
                                <Cpu size={14} className="text-cyan-500 animate-spin bg-cyan-500/10 rounded p-0.5" style={{ animationDuration: '3s' }} />
                                ML Engineer
                            </span>
                        </div>

                        <div className="h-px w-12 bg-white/10 hidden md:block" />

                        <p className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-light tracking-widest uppercase data-stream ${mode === "story" ? "text-stone-700" : "text-zinc-400"
                            }`}>
                            <span className={mode === "story" ? "text-red-600 font-bold" : "text-cyan-400 font-bold"}>&lt;</span>
                            {mode === "corporate" ? " Architecting Intelligence " : " Voice of Revolution "}
                            <span className={mode === "story" ? "text-red-600 font-bold" : "text-cyan-400 font-bold"}>/&gt;</span>
                        </p>
                    </div>
                </div>

                {/* Vertical Data Decor - Removed as requested */}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 z-10 opacity-50 flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-mono animate-pulse">Initialize</span>
                <ArrowDown size={20} className="text-cyan-500 animate-bounce" />
            </div>
        </section>
    );
}
