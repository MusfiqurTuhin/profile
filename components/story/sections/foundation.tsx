"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import Image from "next/image";
import { storyData } from "@/lib/story-data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

export default function Foundation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "foundation");

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Random scatter effect on enter
            const items = gsap.utils.toArray(".polaroid-item");

            items.forEach((item: any) => {
                // Random position within container bounds (approximate)
                const randomX = gsap.utils.random(-150, 150);
                const randomY = gsap.utils.random(-100, 100);
                const randomRotate = gsap.utils.random(-15, 15);

                gsap.fromTo(item,
                    { opacity: 0, scale: 0.8, x: 0, y: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        x: randomX,
                        y: randomY,
                        rotation: randomRotate,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Make draggable
                Draggable.create(item, {
                    type: "x,y",
                    inertia: true,
                    bounds: sectionRef.current,
                    zIndexBoost: false,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    if (!data) return null;

    // Take top 8 images to prevent overcrowding
    const displayMedia = data.media.slice(0, 8);

    return (
        <section id="foundation" ref={sectionRef} className="min-h-screen w-full py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#F5F5F7]">

            <div className="text-center mb-24 relative z-10 pointer-events-none">
                <span className="text-story-red font-mono text-sm tracking-widest uppercase mb-4 block">01. THE FOUNDATION</span>
                <h2 className="text-5xl md:text-7xl font-black text-story-charcoal leading-none tracking-tight">
                    DISCIPLINE &<br />DUTY
                </h2>
                <p className="mt-6 max-w-lg mx-auto text-xl bg-white/50 backdrop-blur-sm p-4 rounded-lg text-story-charcoal/80">
                    {data.description}
                </p>
            </div>

            <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">
                {/* Table Surface Area */}
                <div className="absolute inset-0 border-2 border-dashed border-black/5 rounded-3xl pointer-events-none" />

                {displayMedia.map((media, i) => (
                    <div
                        key={i}
                        className="polaroid-item absolute bg-white p-3 pb-8 shadow-xl cursor-grab active:cursor-grabbing w-48 md:w-64 transform transition-shadow hover:shadow-2xl hover:z-50"
                    >
                        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                            <Image
                                src={media.src}
                                alt={media.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="font-mono text-xs text-center mt-3 opacity-60 uppercase">{media.alt}</p>
                    </div>
                ))}
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-story-red/5 rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
        </section>
    );
}
