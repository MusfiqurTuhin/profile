"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import LifeMeter from "@/components/story/life-meter";
import { storyData } from "@/lib/story-data";
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

    const [gameState, setGameState] = useState<{ age: string | number; year: string | number; visible: boolean }>({
        age: "22-24",
        year: "2024-2026",
        visible: false // Hidden initially (Hero)
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- GLOBAL: THE RED THREAD ---
            // This section was removed as per instruction.

            // --- SECTION TRIGGERS ---
            // --- SECTION TRIGGERS ---
            try {
                if (!storyData || !Array.isArray(storyData)) {
                    console.error("Story data is missing or invalid");
                    return;
                }

                const getSectionData = (id: string) => storyData.find(s => s.id === id);

                const revolution = getSectionData("revolution");
                const renaissance = getSectionData("renaissance");
                const ovizatri = getSectionData("ovizatri");
                const earlyActivism = getSectionData("early-activism");
                const lifeline = getSectionData("lifeline");
                const foundation = getSectionData("foundation");

                // Revolution (Top)
                ScrollTrigger.create({
                    trigger: "#revolution",
                    start: "top 75%",
                    onEnter: () => setGameState({
                        age: revolution?.age || "22-24",
                        year: revolution?.yearRange || "2024-2026",
                        visible: true
                    }),
                    onLeaveBack: () => setGameState({
                        age: revolution?.age || "22-24",
                        year: revolution?.yearRange || "2024-2026",
                        visible: false
                    }),
                });

                // Renaissance
                ScrollTrigger.create({
                    trigger: "#renaissance",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: renaissance?.age || "18-22",
                        year: renaissance?.yearRange || "2020-2024",
                        visible: true
                    }),
                    onLeaveBack: () => setGameState({
                        age: revolution?.age || "22-24",
                        year: revolution?.yearRange || "2024-2026",
                        visible: true
                    }),
                });

                // Ovizatri (Club Section)
                ScrollTrigger.create({
                    trigger: "#ovizatri",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: ovizatri?.age || "14-18",
                        year: ovizatri?.yearRange || "2016-2020",
                        visible: true // Show age/year for Ovizatri club section
                    }),
                    onLeaveBack: () => setGameState({
                        age: renaissance?.age || "18-22",
                        year: renaissance?.yearRange || "2020-2024",
                        visible: true
                    }),
                });



                // Early Activism
                ScrollTrigger.create({
                    trigger: "#early-activism",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: earlyActivism?.age || "12-15",
                        year: earlyActivism?.yearRange || "2014-2017",
                        visible: true
                    }),
                    onLeaveBack: () => setGameState({
                        age: ovizatri?.age || "14-18",
                        year: ovizatri?.yearRange || "2016-2020",
                        visible: true
                    }),
                });

                // Lifeline
                ScrollTrigger.create({
                    trigger: "#lifeline",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: lifeline?.age || "15-24",
                        year: lifeline?.yearRange || "2017-2026",
                        visible: true
                    }),
                    onLeaveBack: () => setGameState({
                        age: earlyActivism?.age || "12-15",
                        year: earlyActivism?.yearRange || "2014-2017",
                        visible: true
                    }),
                });

                // Foundation
                ScrollTrigger.create({
                    trigger: "#foundation",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: foundation?.age || "11-13",
                        year: foundation?.yearRange || "2013-2015",
                        visible: true
                    }),
                    onLeaveBack: () => setGameState({
                        age: lifeline?.age || "15-24",
                        year: lifeline?.yearRange || "2017-2026",
                        visible: true
                    }),
                });

                // Travel Section - Hide Age/Year (comes after Foundation in page order)
                ScrollTrigger.create({
                    trigger: "#travel",
                    start: "top center",
                    onEnter: () => setGameState({
                        age: "",
                        year: "",
                        visible: false // Hide age/year for travel section
                    }),
                    onLeaveBack: () => setGameState({
                        age: foundation?.age || "11-13",
                        year: foundation?.yearRange || "2013-2015",
                        visible: true
                    }),
                });
            } catch (error) {
                console.error("Error initializing Story scroll triggers:", error);
            }

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
