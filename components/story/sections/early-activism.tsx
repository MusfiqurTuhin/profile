"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyData } from "@/lib/story-data";
import { Film, Newspaper, Play } from "lucide-react";
import Image from "next/image";

type Project = {
    title: string;
    role: string;
    org: string;
    year: string;
    type: "film" | "social";
    description?: string;
    links?: { label: string; url: string }[];
    images: string[];
};

const PROJECTS: Project[] = [
    // FILMS
    {
        title: "Lal Panjabi",
        role: "Main Character",
        org: "Tarunno Society",
        year: "2015 - 2016",
        type: "film",
        links: [
            { label: "Part 1", url: "https://www.youtube.com/embed/b_qxd4oF4i8" },
            { label: "Part 2", url: "https://www.youtube.com/embed/e3KDYGTg8GU" }
        ],
        images: [
            "/images/story/lal%20panjabi2.jpg",
            "/images/story/lal%20panjabi.jpg",
            "/images/story/lal%20panjabi%20.jpg",
            "/images/story/lal%20panjabi3.jpg",
            "/images/story/lal%20panjabi4.jpg"
        ]
    },
    {
        title: "71",
        role: "Main Character & Writer",
        org: "Swopnojatra Society",
        year: "2016 - 2017",
        type: "film",
        links: [
            { label: "Trailer", url: "https://www.youtube.com/embed/BQchVryN6UQ" },
            { label: "Full Movie", url: "https://www.youtube.com/embed/fLPT4Gzj77g" }
        ],
        images: [
            "/images/story/71%20_%202.jpg",
            "/images/story/71.jpg",
            "/images/story/swapnojatra.jpg",
            "/images/story/swapnojatra2.jpg"
        ]
    },
    // SOCIAL
    {
        title: "Hand For Help",
        role: "Member",
        org: "Social Organization",
        year: "2014 - 2016",
        type: "social",
        images: [
            "/images/story/hand%20for%20help.jpg",
            "/images/story/hand%20for%20help%202.jpg"
        ]
    },
    {
        title: "Odhivorsho Society",
        role: "Founder President",
        org: "Social Organization",
        year: "2015 - 2016",
        type: "social",
        images: [
            "/images/story/odhivorsho.jpg",
            "/images/story/odhivorsho2.jpg",
            "/images/story/odhibhorshooo.jpg"
        ]
    },
    {
        title: "NCTF",
        role: "Child Journalist",
        org: "National Children's Task Force",
        year: "2015 - 2017",
        type: "social",
        images: [
            "/images/story/nctfMusfiq1846.jpg",
            "/images/story/nctfMusfiq1847.jpg",
            "/images/story/nctfMusfiq1954.jpg",
            "/images/story/nctfMusfiq1955.jpg",
            "/images/story/nctfMusfiq1956.jpg"
        ]
    }
];

export default function EarlyActivism() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cinema-proj", {
                y: 30, opacity: 0, duration: 0.8, stagger: 0.2,
                scrollTrigger: { trigger: ".cinema-section", start: "top 70%" }
            });
            gsap.from(".archive-card", {
                x: 50, opacity: 0, duration: 0.6, stagger: 0.1,
                scrollTrigger: { trigger: ".paper-section", start: "top 80%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const films = PROJECTS.filter(p => p.type === "film");
    const socials = PROJECTS.filter(p => p.type === "social");

    return (
        <section id="early-activism" ref={sectionRef} className="w-full relative font-sans">

            {/* PART 1: THE DIRECTOR'S CUT (Cinema Mode) */}
            <div className="cinema-section bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                    <div className="flex items-center gap-3 mb-12 text-red-600 border-b border-white/10 pb-4">
                        <Film className="w-6 h-6 md:w-8 md:h-8" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">The Director's Cut</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-20">
                        {films.map((film, i) => (
                            <div key={i} className="cinema-proj flex flex-col gap-6">

                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-white/5 pb-2">
                                    <h3 className="text-4xl md:text-6xl font-black font-serif text-white tracking-tighter leading-none">{film.title}</h3>
                                    <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-zinc-500">
                                        <span className="text-red-600">{film.year}</span>
                                        <span>•</span>
                                        <span>{film.role}</span>
                                    </div>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

                                    {/* Left: LARGE POSTER (Restored Feature, Full Height Natural) */}
                                    <div className="lg:col-span-4 flex flex-col gap-4">
                                        <div className="relative w-full rounded-sm overflow-hidden border-2 border-white/10 shadow-2xl">
                                            {/* Natural Aspect Ratio Image */}
                                            <img
                                                src={film.images[0]}
                                                alt={film.title + " Poster"}
                                                className="w-full h-auto object-contain block hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="hidden lg:block text-zinc-600 font-serif italic text-sm leading-relaxed text-right">
                                            "{film.role} for {film.org}"
                                        </div>
                                    </div>

                                    {/* Right: Videos & Gallery */}
                                    <div className="lg:col-span-8 flex flex-col gap-8">

                                        {/* ALL VIDEOS EMBEDDED (Grid if > 1) */}
                                        {film.links && film.links.length > 0 && (
                                            <div className={`grid gap-4 ${film.links.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                                                {film.links.map((link, l) => (
                                                    <div key={l} className="flex flex-col gap-2">
                                                        <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.1)] bg-black border border-zinc-800">
                                                            <iframe
                                                                src={link.url}
                                                                title={link.label}
                                                                className="w-full h-full"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                                            <Play size={10} className="text-red-600" /> {link.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* TIGHT Gallery Grid (Reduced Gap) */}
                                        {film.images.length > 1 && (
                                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 bg-white/5 p-4 rounded-sm border border-white/5">
                                                {film.images.slice(1).map((img, imgI) => (
                                                    <div key={imgI} className="relative w-full rounded-sm overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                                                        {/* Original Ratio Thumbnails */}
                                                        <img
                                                            src={img}
                                                            alt="Scene"
                                                            className="w-full h-auto object-contain block"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PART 2: THE EARLY ARCHIVE (Horizontal Newspaper Mode) */}
            <div className="paper-section bg-[#F4F1EA] text-stone-900 py-12 border-t-8 border-stone-900 relative">
                <div className="container mx-auto px-4 md:px-6 max-w-full relative z-10">
                    <div className="flex items-center justify-between mb-8 border-b-4 border-stone-900 pb-2">
                        <div className="flex items-center gap-3">
                            <Newspaper className="w-6 h-6 md:w-8 md:h-8" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-stone-900">The Early Archive</h2>
                        </div>
                        <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-stone-500">2014 — 2017 • Press Clippings</span>
                    </div>

                    {/* HORIZONTAL NEWSPAPER LAYOUT */}
                    <div className="flex overflow-x-auto pb-8 gap-0 border-t border-b border-stone-300 bg-[#fdfbf7] no-scrollbar">
                        {socials.map((social, i) => (
                            <div key={i} className="archive-card shrink-0 w-[300px] md:w-[420px] border-r border-stone-300 p-6 flex flex-col gap-6 group hover:bg-white transition-colors">

                                {/* Newspaper Header */}
                                <div className="border-b-2 border-stone-800 pb-3">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-red-700">{social.org}</span>
                                        <span className="text-[10px] font-mono text-stone-500">{social.year}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-serif leading-none tracking-tight">{social.title}</h3>
                                    <p className="text-xs font-serif italic text-stone-500 mt-2">{social.role}</p>
                                </div>

                                {/* Images Stack - Dense & "Clipped" */}
                                <div className="flex flex-col gap-2 flex-grow overflow-y-auto max-h-[600px] no-scrollbar">
                                    {social.images.map((img, imgI) => (
                                        <div key={imgI} className="relative w-full border border-stone-200">
                                            {/* Original Aspect Ratio */}
                                            <img
                                                src={img}
                                                alt={social.title}
                                                className="w-full h-auto block grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-2 border-t border-stone-200 text-[10px] font-mono uppercase text-center text-stone-400">
                                    Fig. {i + 1} — Archival Evidence
                                </div>
                            </div>
                        ))}

                        {/* Filler Column for aesthetic finish */}
                        <div className="shrink-0 w-24 border-r border-stone-300 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-10"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
