"use client";

import { useState } from "react";
import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import { Frame, BookOpen } from "lucide-react"; // Icons for Corporate/Story

export default function Navbar() {
    const { mode, toggleMode } = useMode();

    const corpLinks = [
        { label: "Research", id: "research" },
        { label: "Software", id: "software" },
        { label: "Education", id: "education" },
        { label: "Impact", id: "impact" },
    ];

    const storyLinks = [
        { label: "24Y — 22Y", id: "revolution" },
        { label: "22Y — 18Y", id: "renaissance" },
        { label: "18Y — 14Y", id: "ovizatri" },
        { label: "15Y — 12Y", id: "early-activism" },
        { label: "24Y — 15Y", id: "lifeline" },
        { label: "16Y — 11Y", id: "foundation" },
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 p-4 lg:p-6 flex justify-between items-center transition-colors duration-300 backdrop-blur-md border-b-[0.5px]",
            mode === "corporate"
                ? "bg-black/50 text-white border-white/10"
                : "bg-stone-50/60 text-stone-900 border-black/5"
        )}>
            {/* Left: Brand */}
            <div className="pointer-events-auto z-50 relative flex items-center justify-start">
                <h1 className="text-lg md:text-xl font-bold tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Musfiqur Tuhin
                </h1>
                {/* Subtitle removed as requested */}
            </div>

            {/* Right Side: Toggle + Menu */}
            <div className="pointer-events-auto z-50 flex items-center gap-3 lg:gap-6">

                {/* Toggle: Relative on Mobile/Tablet (Right), Absolute Center on Desktop */}
                <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center justify-center gap-2">
                    <div className={cn(
                        "flex items-center gap-1.5 px-1 py-1 md:gap-2 md:px-3 md:py-2 rounded-full border backdrop-blur-md transition-colors duration-300",
                        mode === "corporate" ? "bg-zinc-900/50 border-white/10" : "bg-white/50 border-black/5"
                    )}>
                        <span
                            onClick={() => mode !== "corporate" && toggleMode()}
                            className={cn(
                                "text-[9px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full transition-all duration-300 font-bold cursor-pointer select-none",
                                mode === "corporate"
                                    ? "bg-white text-black shadow-sm"
                                    : "text-stone-500 hover:text-black"
                            )}
                        >
                            Logic
                        </span>

                        <button
                            onClick={toggleMode}
                            className="w-8 h-4 lg:w-12 lg:h-6 bg-white/10 rounded-full relative p-0.5 lg:p-1 transition-colors hover:bg-white/20 border border-white/10"
                            aria-label="Toggle Mode"
                        >
                            <div
                                className={cn(
                                    "w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-white shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                    mode === "story" ? "translate-x-4 lg:translate-x-6 bg-red-500" : "translate-x-0 bg-sky-400"
                                )}
                            />
                        </button>

                        <span
                            onClick={() => mode !== "story" && toggleMode()}
                            className={cn(
                                "text-[9px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full transition-all duration-300 font-bold cursor-pointer select-none",
                                mode === "story"
                                    ? "bg-black text-white shadow-sm"
                                    : "text-zinc-500 hover:text-white"
                            )}
                        >
                            Legacy
                        </span>
                    </div>

                    {/* Interaction Hint - Restored */}
                    <div className="absolute -bottom-8 animate-bounce whitespace-nowrap block">
                        {/* Visible on mobile as requested */}
                        <div className="bg-story-red/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-4 border-transparent border-b-story-red/90" />
                            TAP TO SWITCH OR SCROLL DOWN
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {(mode === "corporate" ? corpLinks : storyLinks).map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className={cn(
                                "text-xs uppercase tracking-widest transition-colors hover:scale-105 active:scale-95",
                                mode === "corporate"
                                    ? "font-mono text-zinc-400 hover:text-cyan-400"
                                    : "font-sans font-bold text-zinc-600 hover:text-red-600"
                            )}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile/Tablet Hamburger */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <div className={cn("w-6 h-0.5 mb-1.5 transition-all bg-current", mobileMenuOpen && "rotate-45 translate-y-2")} />
                    <div className={cn("w-6 h-0.5 mb-1.5 transition-all bg-current", mobileMenuOpen && "opacity-0")} />
                    <div className={cn("w-6 h-0.5 transition-all bg-current", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden",
                mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                {(mode === "corporate" ? corpLinks : storyLinks).map((link) => (
                    <button
                        key={link.id}
                        onClick={() => handleScroll(link.id)}
                        className={cn(
                            "text-2xl uppercase tracking-widest font-bold",
                            mode === "corporate" ? "text-white" : "text-stone-200"
                        )}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
