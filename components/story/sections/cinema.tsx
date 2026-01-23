"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { storyData } from "@/lib/story-data";
import { Play } from "lucide-react";

export default function Cinema() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "cinema");

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                const windowWidth = window.innerWidth;

                gsap.to(scrollContainerRef.current, {
                    x: () => -(scrollWidth - windowWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${scrollWidth}`,
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    if (!data) return null;

    return (
        <section id="cinema" ref={sectionRef} className="h-screen w-full bg-[#E5E5E7] overflow-hidden flex items-center relative">

            <div className="absolute top-12 left-12 z-20">
                <span className="text-story-red font-mono text-sm tracking-widest uppercase mb-4 block">02. THE CINEMA</span>
                <h2 className="text-4xl md:text-6xl font-black text-story-charcoal uppercase leading-none">
                    THE DIRECTOR&apos;S<br />CUT
                </h2>
            </div>

            {/* Horizontal Film Strip */}
            <div ref={scrollContainerRef} className="flex items-center gap-12 px-24 h-[70vh] w-[max-content]">

                {/* Intro Card */}
                <div className="w-[400px] shrink-0 border-l-4 border-story-red pl-8">
                    <p className="text-xl md:text-3xl font-medium leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Films */}
                {data.media.map((media, i) => (
                    <div key={i} className="relative h-full aspect-[2/3] md:aspect-[9/16] shrink-0 group bg-black shadow-2xl overflow-hidden rounded-sm border-y-[20px] border-black">
                        {/* Perforations */}
                        <div className="absolute left-2 top-0 bottom-0 w-4 flex flex-col justify-between py-2 z-20 pointer-events-none">
                            {[...Array(20)].map((_, j) => <div key={j} className="w-2 h-3 bg-white/20 rounded-sm" />)}
                        </div>
                        <div className="absolute right-2 top-0 bottom-0 w-4 flex flex-col justify-between py-2 z-20 pointer-events-none">
                            {[...Array(20)].map((_, j) => <div key={j} className="w-2 h-3 bg-white/20 rounded-sm" />)}
                        </div>

                        <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                        />

                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="fill-white text-white ml-1" size={32} />
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-8 z-20">
                            <h4 className="text-white font-black text-2xl uppercase tracking-wider">{media.alt}</h4>
                            <p className="text-white/60 font-mono text-xs">FILM REEL {i + 1}</p>
                        </div>
                    </div>
                ))}

                {/* Spacer */}
                <div className="w-[20vw]" />
            </div>

        </section>
    );
}
