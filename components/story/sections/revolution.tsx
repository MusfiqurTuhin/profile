"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SmartVideo from "@/components/smart-video";
import { storyData, StoryMedia } from "@/lib/story-data";
import { Play, X, Maximize2 } from "lucide-react";
import { createPortal } from "react-dom";

export default function Revolution() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "revolution");
    const [lightboxMedia, setLightboxMedia] = useState<StoryMedia | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Text Cards Animation
            gsap.from(".revo-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".cards-container",
                    start: "top 75%"
                }
            });

            // 2. Horizontal Scroll Logic (Director's Cut Style)
            if (scrollContainerRef.current) {
                gsap.to(scrollContainerRef.current, {
                    x: () => {
                        const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
                        const windowWidth = sectionRef.current?.offsetWidth || window.innerWidth;
                        return -(scrollWidth - windowWidth);
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".horizontal-wrapper",
                        pin: true,
                        scrub: 1,
                        end: () => {
                            const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
                            const windowWidth = sectionRef.current?.offsetWidth || window.innerWidth;
                            return `+=${scrollWidth - windowWidth}`;
                        },
                        invalidateOnRefresh: true,
                    }
                });
            }

            // 3. Fade in items
            gsap.from(".reel-item", {
                y: 50,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".horizontal-wrapper",
                    start: "top 80%"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [data]);

    // Handle dynamic resizing (images loading)
    useEffect(() => {
        if (!scrollContainerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        });

        resizeObserver.observe(scrollContainerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    if (!data) return null;

    return (
        <section id="revolution" ref={sectionRef} className="min-h-screen w-full relative bg-[#0a0a0a] text-white py-24 font-sans overflow-hidden">

            {/* Background Noise & Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container mx-auto px-6 relative z-10 mb-24">
                {/* Header */}
                <div className="border-l-4 border-story-red pl-6 md:pl-10 mb-16">
                    <span className="text-story-red font-mono text-sm tracking-widest uppercase mb-4 block">
                        AGE 22-24 • YEAR 2024-2026
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        REFORM &<br />
                        <span className="text-transparent stroke-text-white">UPRISING</span>
                    </h2>
                </div>

                {/* 1. Manifesto Cards */}
                <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
                    {data.stats?.map((stat, i) => {
                        const CardContent = () => (
                            <>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-zinc-100">
                                    {stat.label}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {stat.value}
                                </p>
                            </>
                        );

                        const cardClasses = "revo-card bg-zinc-900/50 border border-white/10 p-8 rounded-sm hover:border-story-red/50 transition-colors group block h-full";

                        return stat.link ? (
                            <a
                                key={i}
                                href={stat.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cardClasses}
                            >
                                <CardContent />
                            </a>
                        ) : (
                            <div key={i} className={cardClasses}>
                                <CardContent />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 2. THE REEL (Horizontal Scrolling Track) */}
            <div className="horizontal-wrapper relative w-full h-screen flex flex-col justify-center bg-zinc-950/50 border-y border-white/10">

                <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
                    <span className="w-2 h-2 bg-story-red rounded-full animate-pulse" />
                    <h3 className="text-xl font-mono uppercase tracking-widest text-zinc-400">
                        July ARCHIVE
                    </h3>
                </div>

                {/* THE TRACK */}
                <div ref={scrollContainerRef} className="flex gap-4 px-8 items-center h-[60vh] w-max group/track">
                    {data.media.map((media, i) => (
                        <div
                            key={i}
                            className={`
                                reel-item relative h-full shrink-0 bg-zinc-900 border border-white/10 cursor-pointer 
                                transition-all duration-500 ease-out shadow-lg
                                
                                /* DEFAULT STATE: Grayscale */
                                grayscale brightness-75 scale-100 z-0
                                
                                /* PEER DIMMING (Track Hover) */
                                group-hover/track:grayscale group-hover/track:brightness-50 group-hover/track:scale-95
                                
                                /* ACTIVE HOVER */
                                hover:!grayscale-0 hover:!brightness-100 hover:!scale-105 hover:!z-50 hover:border-story-red hover:shadow-[0_0_50px_rgba(220,38,38,0.4)]
                            `}
                            onClick={() => setLightboxMedia(media)}
                        >
                            {/* Media Source - Constrained by Height, Width Flows Naturally */}
                            {media.type === "video" ? (
                                <SmartVideo
                                    src={media.src}
                                    // poster (Optional): Add real thumbnail URL here when available
                                    className="h-full w-auto aspect-[9/16] bg-black"
                                />
                            ) : (
                                /* Image: Optimized with Next.js Image */
                                <Image
                                    src={media.src}
                                    alt={media.alt}
                                    width={800}
                                    height={600}
                                    className="h-full w-auto object-contain block"
                                    sizes="(max-width: 768px) 80vw, 400px"
                                    quality={80}
                                    loading="lazy"
                                    onLoad={() => ScrollTrigger.refresh()}
                                />
                            )}

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full hover:translate-y-0 transition-transform duration-300 flex items-center justify-end pointer-events-none">
                                {media.type === 'video' && <Play size={16} className="text-white fill-white" />}
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[20vw] h-full flex items-center justify-center border-l border-white/10 ml-8 text-zinc-600 font-mono tracking-widest text-sm uppercase writing-vertical">
                        End of Archive
                    </div>
                </div>
            </div>

            {/* 3. LIGHTBOX PORTAL */}
            {lightboxMedia && createPortal(
                <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <button
                        onClick={() => setLightboxMedia(null)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 group"
                    >
                        <X size={24} className="text-white group-hover:text-story-red transition-colors" />
                    </button>

                    <div className="relative w-full max-w-7xl max-h-[90vh] aspect-video flex items-center justify-center">
                        {lightboxMedia.type === "video" ? (
                            <video
                                src={lightboxMedia.src}
                                autoPlay controls
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
                            />
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    src={lightboxMedia.src}
                                    alt={lightboxMedia.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </div>

                    <div className="absolute bottom-8 left-8 text-white z-50 bg-black/50 p-4 rounded backdrop-blur-md border border-white/5">
                        <span className="text-story-red font-mono text-xs uppercase tracking-widest block mb-1">ARCHIVE RECORD</span>
                        <h3 className="text-xl font-bold">{lightboxMedia.alt}</h3>
                    </div>
                </div>,
                document.body
            )}

            <style jsx>{`
                .writing-vertical {
                    writing-mode: vertical-rl;
                }
                .stroke-text-white {
                    -webkit-text-stroke: 1px white;
                }
            `}</style>
        </section>
    );
}
