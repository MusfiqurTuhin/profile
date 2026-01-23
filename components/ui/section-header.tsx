"use client";

import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
    const [glitchTitle, setGlitchTitle] = useState(title);

    useEffect(() => {
        const interval = setInterval(() => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
            let iterations = 0;

            const glitchInterval = setInterval(() => {
                setGlitchTitle(
                    title.split("").map((letter, index) => {
                        if (index < iterations) return title[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("")
                );

                if (iterations >= title.length) clearInterval(glitchInterval);
                iterations += 1 / 3;
            }, 30);
        }, 8000 + Math.random() * 5000); // Random interval between 8-13s

        return () => clearInterval(interval);
    }, [title]);

    return (
        <div className={`mb-20 ${className}`}>
            <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                <span className="text-cyan-500/60 font-mono text-xs tracking-widest uppercase">
                    SYSTEM_MODULE: {title.replace(/\s/g, "_")}
                </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
                {glitchTitle}
            </h2>

            {subtitle && (
                <p className="text-zinc-500 max-w-2xl text-lg border-l-2 border-cyan-500/20 pl-4 ml-1">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
