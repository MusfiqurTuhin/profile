"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyData } from "@/lib/story-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Ovizatri() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "ovizatri");

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Text Fade In
            gsap.from(".ov-fade", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%"
                }
            });

            // Vertical Marquee Animation (Seamless Loop)
            if (marqueeRef.current) {
                // Ensure starting position is 0
                gsap.set(marqueeRef.current, { yPercent: 0 });

                // Animate to -33.33% (exactly one full set height out of 3 sets)
                const totalDuration = 20; // Adjusted duration for 3 sets

                gsap.to(marqueeRef.current, {
                    yPercent: -33.333333,
                    duration: totalDuration,
                    ease: "none",
                    repeat: -1
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, [data]);

    if (!data) return null;

    return (
        <section id="ovizatri" ref={sectionRef} className="min-h-screen w-full relative bg-[#f4f1ea] text-stone-900 py-24 font-serif overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row gap-16 items-start">

                {/* Content Side (Sticky) */}
                <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit ov-fade z-20">
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-story-red font-bold tracking-widest uppercase mb-4 hover:underline"
                    >
                        Ovizatri.club <ArrowUpRight size={16} />
                    </a>

                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-bengali leading-tight text-story-red/90">
                        অভিযাত্রী
                    </h2>
                    <h3 className="text-xl font-bold font-sans uppercase tracking-wide mb-8 text-story-red/60">
                        Founder & General Secretary | 2016–2020
                    </h3>

                    <blockquote className="text-2xl font-bengali italic mb-8 pl-6 border-l-4 border-story-red/30 text-stone-600">
                        “মানবতার কল্যাণে আমরা”
                    </blockquote>

                    <div className="prose prose-lg prose-stone text-stone-700 mb-12">
                        <p>
                            I founded and served as the General Secretary of <strong>অভিযাত্রী (Ovizatri)</strong>, a district-wide voluntary and social service organization based in Habiganj.
                        </p>
                        <p>
                            Between 2016 and 2020, I led the organization’s expansion into a large grassroots network, building sustainable local structures and mobilizing young people for community-centered social work.
                        </p>
                    </div>

                    {/* Stats */}
                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
                        {data.stats?.map((stat, i) => (
                            <div key={i} className="bg-white/50 p-4 rounded-sm border border-stone-200">
                                <span className="block text-xl xl:text-2xl font-bold text-story-red font-sans break-words leading-tight mb-1">{stat.value}</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Side - Single Column Vertical Marquee */}
                <div className="w-full md:w-2/3 h-[100vh] overflow-hidden relative flex justify-center items-start">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f4f1ea] to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f4f1ea] to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div ref={marqueeRef} className="w-full max-w-lg">
                        {/* We render 3 sets to ensure we have enough height for smooth looping on large screens */}
                        {[1, 2, 3].map((setIndex) => (
                            <div key={`set-${setIndex}`} className="flex flex-col gap-8 pb-8">
                                {data.media.map((media, i) => (
                                    <div
                                        key={`set-${setIndex}-img-${i}`}
                                        className="relative w-full bg-stone-200 overflow-hidden rounded-sm shadow-md border border-white shrink-0"
                                    >
                                        <Image
                                            src={media.src}
                                            alt={media.alt}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto block"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            loading="eager" // Keep eager as it is above/near fold or critical marquee
                                            onLoad={() => ScrollTrigger.refresh()}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;700&display=swap');
                .font-bengali {
                    font-family: 'Noto Serif Bengali', serif;
                }
            `}</style>
        </section>
    );
}
