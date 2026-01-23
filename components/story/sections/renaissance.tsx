"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { storyData } from "@/lib/story-data";

export default function Renaissance() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const data = storyData.find(s => s.id === "renaissance");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-in", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%"
                }
            });

            // Dual Marquee Animation
            const track1 = document.querySelector(".marquee-track-1");
            const track2 = document.querySelector(".marquee-track-2");

            if (track1) {
                gsap.to(track1, {
                    x: "-50%",
                    duration: 80,
                    ease: "none",
                    repeat: -1
                });
            }

            if (track2) {
                gsap.set(track2, { x: "-50%" }); // Start from middle
                gsap.to(track2, {
                    x: "0%", // Move right
                    duration: 80,
                    ease: "none",
                    repeat: -1
                });
            }

            // Stats Counter Animation
            gsap.from(".counter", {
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 1 },
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".counter",
                    start: "top 80%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    if (!data) return null;

    // 1. Extract the feature video
    const featureVideo = data.media.find(m => m.type === "video");

    // 2. Filter images only for the scroll
    const images = data.media.filter(m => m.type === "image");

    // Split images into two rows
    const midPoint = Math.ceil(images.length / 2);
    const row1Media = images.slice(0, midPoint);
    const row2Media = images.slice(midPoint);

    return (
        <section id="renaissance" ref={sectionRef} className="min-h-screen w-full relative bg-stone-50 text-stone-900 py-24 font-serif overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Header Profile Section */}
                <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
                    {/* Hero Image */}
                    <div className="w-48 md:w-64 shrink-0 fade-in">
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/story/profile.jpg"
                                alt="Muktanchol Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Intro Content - Minimal */}
                    <div className="w-full text-center md:text-left fade-in">
                        <h2 className="text-3xl md:text-5xl font-black mb-2 leading-tight font-sans text-story-red uppercase tracking-wide">
                            Muktanchol Sahitya Charcha Kendro
                        </h2>
                        <p className="text-xl font-mono text-stone-500 mb-8 border-b border-stone-200 pb-4 inline-block">
                            Founder & Lead Organizer | 2020–2024
                        </p>

                        <div className="prose prose-lg prose-stone text-stone-700 max-w-none">
                            <p className="font-medium text-xl leading-relaxed">
                                "A grassroots literary movement reclaiming literature for critical thinking, social responsibility, and inclusive cultural expression."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid - Minimal */}
                <div className="grid grid-cols-3 gap-6 mb-12 fade-in border-y border-stone-200 py-8">
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-story-red font-sans counter">3</span>
                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">National Festivals</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-story-red font-sans counter">7</span>
                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Literary Magazines</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-story-red font-sans"><span className="counter">100</span>+</span>
                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Public Programs</span>
                    </div>
                </div>

                {/* Feature Video (Outside Scroll) */}
                {featureVideo && (
                    <div className="w-full mb-20 fade-in">
                        <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-2xl border-4 border-white bg-black">
                            <video
                                src={featureVideo.src}
                                className="w-full h-full object-contain"
                                loop playsInline controls
                                onMouseEnter={e => e.currentTarget.play()}
                                onMouseLeave={e => e.currentTarget.pause()}
                            />
                            {/* Overlay Label */}
                            <div className="absolute top-4 left-4 pointer-events-none bg-black/60 text-white px-3 py-1 rounded-sm text-xs font-mono tracking-widest uppercase backdrop-blur-md border border-white/20">
                                Archive Footage
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Use full width for infinite scrolling gallery */}
            <div className="w-full pb-12">
                <div className="relative w-full overflow-hidden flex flex-col gap-8">
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Left Scroll */}
                    <div className="marquee-track-1 flex gap-4 w-max hover:pause-animation">
                        {[...row1Media, ...row1Media, ...row1Media].map((media, i) => (
                            <div
                                key={`r1-${i}`}
                                className="relative h-48 md:h-64 bg-stone-200 overflow-hidden rounded-sm shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer shadow-md border border-stone-200"
                            >
                                {/* Use img tag to allow natural width based on height */}
                                <img
                                    src={media.src}
                                    alt={media.alt}
                                    className="h-full w-auto"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="marquee-track-2 flex gap-4 w-max hover:pause-animation">
                        {[...row2Media, ...row2Media, ...row2Media].map((media, i) => (
                            <div
                                key={`r2-${i}`}
                                className="relative h-48 md:h-64 bg-stone-200 overflow-hidden rounded-sm shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer shadow-md border border-stone-200"
                            >
                                <img
                                    src={media.src}
                                    alt={media.alt}
                                    className="h-full w-auto"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
