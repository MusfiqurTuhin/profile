"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { storyData } from "@/lib/story-data";

export default function Lifeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "lifeline");

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating bubbles animation
            gsap.to(".blood-bubble", {
                y: -50,
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 2,
                    from: "random"
                }
            });

            // Red liquid rise effect
            gsap.fromTo(".liquid-bg",
                { height: "10%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    if (!data) return null;

    return (
        <section id="lifeline" ref={sectionRef} className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-24">

            {/* Liquid Background */}
            <div className="liquid-bg absolute bottom-0 left-0 right-0 bg-[#FFF5F5] z-0 opacity-50 transition-all" />

            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Stats */}
                <div className="text-story-charcoal">
                    <span className="text-story-red font-mono text-sm tracking-widest uppercase mb-4 block">03. THE LIFELINE</span>
                    <h2 className="text-6xl md:text-9xl font-black leading-none mb-8 text-story-red">
                        {data.stats?.[0]?.value}<br />
                        <span className="text-4xl md:text-6xl text-story-charcoal tracking-tight">BAGS MANAGED</span>
                    </h2>
                    <div className="h-1 w-24 bg-story-red mb-8" />
                    <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-80 max-w-lg">
                        {data.description}
                    </p>
                </div>

                {/* Bubbles Container */}
                <div className="relative h-[600px] w-full">
                    {data.media.slice(0, 5).map((media, i) => (
                        <div
                            key={i}
                            className="blood-bubble absolute rounded-full overflow-hidden border-4 border-white shadow-xl"
                            style={{
                                width: Math.random() * 100 + 150 + 'px',
                                height: Math.random() * 100 + 150 + 'px',
                                top: Math.random() * 60 + '%',
                                left: Math.random() * 60 + '%',
                            }}
                        >
                            <Image
                                src={media.src}
                                alt={media.alt}
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>
                    ))}

                    {/* Eye Donor Card - Special */}
                    {data.media.find(m => m.alt.includes("Eye")) && (
                        <div className="blood-bubble absolute bottom-0 right-10 w-64 h-64 md:w-80 md:h-80 bg-black rounded-full overflow-hidden border-4 border-story-red z-20 shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center p-4">
                                <h4 className="text-white font-black text-2xl uppercase leading-none">POSTHUMOUS<br />PLEDGE</h4>
                            </div>
                            <Image
                                src={data.media.find(m => m.alt.includes("Eye"))!.src}
                                alt="Eye Donor"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
