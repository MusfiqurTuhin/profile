"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { books, badges } from "@/lib/data";
import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TheStudio() {
    const container = useRef<HTMLDivElement>(null);
    const scrollContainer = useRef<HTMLDivElement>(null);
    const { mode } = useMode();

    useGSAP(() => {
        if (mode === "corporate") return;

        // Horizontal Scroll for Books
        const sections = gsap.utils.toArray(".book-card");
        if (sections.length > 0 && scrollContainer.current) {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: scrollContainer.current,
                    pin: true,
                    scrub: 1,
                    end: "+=3000",
                    invalidateOnRefresh: true,
                }
            });
        }
    }, { scope: container, dependencies: [mode] });

    if (mode === "corporate") return null;

    return (
        <section ref={container} className="relative w-full bg-[#f4f1ea] text-[#2c2c2c] paper-texture">
            {/* Horizontal Scroll Section */}
            <div ref={scrollContainer} className="min-h-screen w-full flex flex-col justify-center overflow-hidden py-24">
                <div className="absolute top-12 left-6 md:left-24 z-20">
                    <h2 className="text-5xl md:text-8xl font-serif italic text-story-red mb-2 drop-shadow-sm">The Studio</h2>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-story-text/30" />
                        <p className="font-serif text-xl md:text-2xl opacity-70 italic tracking-wide">Literature & Logic</p>
                    </div>
                </div>

                <div className="flex gap-12 md:gap-24 pl-6 md:pl-24 items-center w-[max-content] pt-32 pb-12">
                    {books.map((book, i) => (
                        <div
                            key={i}
                            className={cn(
                                "book-card w-[280px] h-[420px] md:w-[450px] md:h-[650px] flex-shrink-0 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] p-6 md:p-12 flex flex-col justify-between transition-all duration-700 hover:rotate-1 hover:scale-[1.02]",
                                book.color === "bg-red-900" || book.color === "bg-red-800" ? "bg-[#7c2d12] text-white" :
                                    book.color === "bg-amber-900" || book.color === "bg-amber-800" ? "bg-[#92400e] text-white" :
                                        book.color === "bg-stone-900" || book.color === "bg-stone-800" ? "bg-[#1c1917] text-white" : "bg-white"
                            )}
                        >
                            <div className="border-[0.5px] border-white/20 h-full p-6 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-serif italic opacity-40">M</div>

                                <h3 className="font-serif text-3xl md:text-6xl mb-6 leading-tight italic">{book.title}</h3>
                                <div className="h-px w-20 bg-white/20 mb-6" />
                                <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold font-mono opacity-60 leading-loose">{book.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Final Card: Philosophy */}
                    <div className="book-card w-[280px] h-[420px] md:w-[450px] md:h-[650px] flex-shrink-0 bg-white p-8 md:p-14 flex flex-col justify-center border border-stone-200">
                        <Quote className="text-story-red/20 mb-8" size={60} />
                        <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-stone-800">
                            &quot;Art is the only way to escape without leaving home.&quot;
                        </p>
                        <div className="mt-8 pt-8 border-t border-stone-100">
                            <p className="font-serif text-lg opacity-60">— Musfiqur Tuhin</p>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-[40vw]" />
                </div>
            </div>

            {/* Hall of Badges (Social Era) */}
            <div className="py-24 md:py-48 px-6 md:px-12 bg-white flex flex-col items-center text-center relative z-10">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#f4f1ea] to-white" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-story-red font-black tracking-widest uppercase text-sm mb-6 block">Legacy & Leadership</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none text-story-text">
                        THE SOCIAL ERA
                    </h2>
                    <p className="font-serif italic text-2xl md:text-3xl text-stone-400 mb-16">2013 — 2020: Youth Leadership & Community Building</p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {badges.map((badge, i) => (
                            <div key={i} className="group relative">
                                <div className="px-6 md:px-10 py-3 md:py-5 rounded-full border-2 border-stone-900 border-dashed text-stone-900 hover:bg-stone-900 hover:text-white hover:border-solid transition-all duration-300 font-bold tracking-tight text-sm md:text-lg cursor-default">
                                    {badge.name}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-story-red text-white text-[10px] md:text-xs px-3 py-1.5 rounded-sm transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none uppercase tracking-widest font-black">
                                    {badge.role}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
