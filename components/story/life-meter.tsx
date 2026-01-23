"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface LifeMeterProps {
    age: string | number;
    year: string | number;
    visible: boolean;
}

export default function LifeMeter({ age, year, visible }: LifeMeterProps) {
    const ageRef = useRef<HTMLHeadingElement>(null);
    const yearRef = useRef<HTMLParagraphElement>(null);

    // Simple flip animation when numbers change
    useEffect(() => {
        if (ageRef.current) {
            gsap.fromTo(ageRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
        }
    }, [age]);

    useEffect(() => {
        if (yearRef.current) {
            gsap.fromTo(yearRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [year]);

    return (
        <div
            className={`fixed top-8 right-8 z-[100] text-right pointer-events-none transition-all duration-500 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
        >
            <div className="flex flex-col items-end bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                <div className="flex items-baseline gap-2 text-story-red">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">Age</span>
                    <h2 ref={ageRef} className="text-4xl md:text-5xl font-black tracking-tighter leading-none font-mono">
                        {age}
                    </h2>
                </div>
                <div className="flex items-center gap-2 mt-1 text-story-red">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Year</span>
                    <p ref={yearRef} className="text-sm md:text-base font-mono font-bold opacity-80">
                        {year}
                    </p>
                </div>
            </div>

            {/* Decorative lines - Positioned relative to fixed container but pushed out */}
            <div className="w-1 h-8 bg-story-red absolute top-0 -right-4 hidden md:block" />
            <div className="w-8 h-1 bg-story-red absolute top-0 -right-4 hidden md:block" />
        </div>
    );
}
