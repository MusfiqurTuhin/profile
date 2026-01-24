"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const portraitRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on mouse move
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(portraitRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.to(textRef.current, {
                    x: -x * 1.5,
                    y: -y * 1.5,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E5] z-0" />

            {/* Glass Rings (CSS 3D) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-40">
                <div className="w-[600px] h-[600px] rounded-full border-[1px] border-black/10 absolute animate-spin-slow" style={{ animationDuration: '30s' }} />
                <div className="w-[500px] h-[500px] rounded-full border-[1px] border-story-red/20 absolute animate-reverse-spin" style={{ animationDuration: '25s' }} />
                <div className="w-[700px] h-[700px] rounded-full border-[1px] border-black/5 absolute animate-spin-slow" style={{ animationDuration: '40s' }} />
            </div>

            <div className="z-10 relative flex flex-col items-center text-center">
                {/* PORTRAIT */}
                <div ref={portraitRef} className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
                    {/* Blur removed for clarity */}
                    {/* Using the confirmed portrait path */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl">
                        <Image
                            src="/images/story/70977299.jpeg"
                            alt="Musfiqur Rahman"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Pulse Ring */}
                    <div className="absolute -inset-4 rounded-full border border-story-red/30 animate-ping opacity-20 z-0" />
                </div>

                {/* TEXT */}
                <div ref={textRef} className="relative z-30 mix-blend-difference text-story-charcoal">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
                        ENGINEER.<br />
                        <span className="text-story-red">ACTIVIST.</span><br />
                        ARTIST.
                    </h1>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-12 bg-story-red" />
                        <p className="font-mono text-sm md:text-base tracking-[0.3em] font-bold text-story-red">BORN 2002</p>
                        <div className="h-[1px] w-12 bg-story-red" />
                    </div>
                </div>
            </div>
        </section>
    );
}
