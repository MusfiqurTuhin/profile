"use client";

import { useRef } from "react";
import { activismTimeline, storyGallery } from "@/lib/data";
import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function WarRoom() {
    const container = useRef<HTMLDivElement>(null);
    const { mode } = useMode();

    if (mode === "corporate") return null;

    return (
        <section ref={container} className="min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 bg-story-bg text-story-text relative z-10 overflow-hidden paper-texture">
            {/* Brutalist Header */}
            <div className="max-w-7xl mx-auto mb-20 md:mb-32">
                <div className="inline-block border-l-[12px] md:border-l-[20px] border-story-red pl-6 md:pl-10">
                    <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                        THE WAR<br />ROOM
                    </h2>
                    <div className="bg-story-red text-white py-2 px-6 inline-flex items-center gap-3">
                        <span className="text-xl md:text-3xl font-black tracking-widest uppercase">REVOLUTION & LEADERSHIP</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 max-w-7xl mx-auto">
                {/* Timeline Column */}
                <div className="lg:col-span-12 relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-story-text/10 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-20">
                        {activismTimeline.map((item, index) => (
                            <div key={index} className={cn(
                                "relative flex flex-col md:flex-row items-center",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}>
                                {/* Content Card */}
                                <div className={cn(
                                    "w-full md:w-[45%] brutalist-card p-6 md:p-10",
                                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                )}>
                                    <span className="text-story-red font-black text-2xl md:text-3xl mb-2 block">{item.year}</span>
                                    <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-story-red/80 font-mono text-sm uppercase tracking-widest mb-6 font-bold">{item.role}</p>
                                    <p className="text-lg md:text-xl leading-relaxed font-medium">{item.description}</p>
                                </div>

                                {/* Center Icon/Point */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-8 md:h-8 bg-story-red border-4 border-story-bg z-10 -translate-x-1/2 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section: July Revolution & Post July */}
            <div className="max-w-7xl mx-auto mt-32 md:mt-48">
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 md:mb-20 inline-block red-accent-line">
                    July Revolution & Aftermath
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {[...storyGallery.july, ...storyGallery.postJuly].map((media, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative overflow-hidden brutalist-card aspect-[4/5] md:aspect-square flex flex-col",
                                i === 0 ? "md:col-span-2 md:row-span-2 sm:aspect-[4/3] md:aspect-auto" : ""
                            )}
                        >
                            {media.type === "video" ? (
                                <video
                                    src={media.src}
                                    controls
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            ) : (
                                <Image
                                    src={media.src}
                                    alt={media.alt}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            )}

                            <div className="absolute inset-0 bg-story-text/5 flex items-center justify-center text-story-text/20 font-black text-4xl sm:text-6xl uppercase transform -rotate-12 select-none pointer-events-none">
                                EVIDENCE_{i + 1}
                            </div>

                            {/* Hover info overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-story-red/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-10 text-white pointer-events-none">
                                <h4 className="text-2xl md:text-3xl font-black uppercase">Field Snapshot</h4>
                                <p className="text-sm md:text-lg font-bold opacity-80">{media.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section: Social & Cultural */}
            <div className="max-w-7xl mx-auto mt-32 md:mt-48 pb-24">
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 md:mb-20 inline-block red-accent-line">
                    Social & Cultural Legacy
                </h3>

                <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...storyGallery.social, ...storyGallery.cultural].map((media, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden brutalist-card aspect-square flex flex-col"
                        >
                            {media.type === "video" ? (
                                <video
                                    src={media.src}
                                    controls
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            ) : (
                                <Image
                                    src={media.src}
                                    alt={media.alt}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-story-bg/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-story-red font-bold text-sm uppercase tracking-wider truncate">{media.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
