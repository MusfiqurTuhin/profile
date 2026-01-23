"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import LifeMeter from "@/components/story/life-meter";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface StoryLayoutProps {
    children: React.ReactNode;
}

export default function StoryLayout({ children }: StoryLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const redThreadRef = useRef<HTMLDivElement>(null);
    const [gameState, setGameState] = useState<{ age: string | number; year: string | number; visible: boolean }>({
        age: "22-24",
        year: "2024-2026",
        visible: false // Hidden initially (Hero)
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- GLOBAL: THE RED THREAD ---
            if (redThreadRef.current) {
                gsap.to(redThreadRef.current, {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0,
                    },
                });
            }

            // --- SECTION TRIGGERS ---
            // These IDs must match the section components' IDs

            // Revolution (Age 22-24 range)
            ScrollTrigger.create({
                trigger: "#revolution",
                start: "top 75%",
                onEnter: () => setGameState({ age: "22-24", year: "2024-2026", visible: true }),
                // When going back up to Hero, hide it
                onLeaveBack: () => setGameState({ age: "22-24", year: "2024-2026", visible: false }),
            });

            // Renaissance (Age 18)
            ScrollTrigger.create({
                trigger: "#renaissance",
                start: "top center",
                onEnter: () => setGameState({ age: "18-22", year: "2020-2024", visible: true }),
                onLeaveBack: () => setGameState({ age: "22-24", year: "2024-2026", visible: true }), // Back to Revolution
            });

            // Ovizatri (Age 14)
            ScrollTrigger.create({
                trigger: "#ovizatri",
                start: "top center",
                onEnter: () => setGameState({ age: "14-18", year: "2016-2020", visible: true }),
                onLeaveBack: () => setGameState({ age: "18-22", year: "2020-2024", visible: true }), // Back to Renaissance
            });

            // Early Activism (Age 14-17)
            ScrollTrigger.create({
                trigger: "#early-activism",
                start: "top center",
                onEnter: () => setGameState({ age: "14-17", year: "2014-2017", visible: true }),
                onLeaveBack: () => setGameState({ age: "14-18", year: "2016-2020", visible: true }), // Back to Ovizatri
            });

            // Lifeline (Age 17+)
            ScrollTrigger.create({
                trigger: "#lifeline",
                start: "top center",
                onEnter: () => setGameState({ age: 17, year: 2017, visible: true }),
                onLeaveBack: () => setGameState({ age: "14-17", year: "2014-2017", visible: true }), // Back to Early Activism
            });

            // Foundation (Age 13)
            ScrollTrigger.create({
                trigger: "#foundation",
                start: "top center",
                onEnter: () => setGameState({ age: 13, year: 2013, visible: true }),
                onLeaveBack: () => setGameState({ age: 15, year: 2016, visible: true }), // Back to Cinema
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <ReactLenis root>
            <main
                ref={containerRef}
                className="bg-[#F5F5F7] text-[#1A1A1A] relative min-h-screen font-sans selection:bg-story-red selection:text-white"
            >
                {/* HUD */}
                <LifeMeter age={gameState.age} year={gameState.year} visible={gameState.visible} />

                {/* THE RED THREAD */}
                <div className="fixed top-0 left-6 md:left-12 bottom-0 w-[1px] md:w-[2px] bg-black/5 z-40 h-full pointer-events-none">
                    <div
                        ref={redThreadRef}
                        className="w-full bg-story-red shadow-[0_0_10px_rgba(220,38,38,0.5)] h-0 mx-auto"
                    />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                    {children}
                </div>

                {/* NOISE OVERLAY (Optional for 'Lab' feel) */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-[9999] bg-noise" />
            </main>
        </ReactLenis>
    );
}
