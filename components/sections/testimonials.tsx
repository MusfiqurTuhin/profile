"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReputationGlobe from "@/components/canvas/reputation-globe";

export default function Testimonials() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <section id="impact" ref={container} className="w-full py-24 px-4 md:px-8 bg-black relative z-10 overflow-hidden flex flex-col items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl w-full mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center md:text-left px-4">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Impact</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live_Link_Established
                        </span>
                        <span className="hidden md:inline text-zinc-800">|</span>
                        <span>Satellite_Feed_Active</span>
                    </div>
                </div>

                <ReputationGlobe />

                {/* Interaction Hint */}
                <div className="mt-8 text-center hidden md:block">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                        INTERACTIVE_GLOBAL_INTEL_SYSTEM // CLICK_ZONES_TO_DECRYPT
                    </p>
                </div>
            </div>
        </section>
    );
}
