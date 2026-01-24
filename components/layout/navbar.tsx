"use client";

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
        { label: "Revolution", id: "revolution" },
        { label: "Renaissance", id: "renaissance" },
        { label: "Sparks", id: "early-activism" },
        { label: "Ovizatri", id: "ovizatri" },
        { label: "Lifeline", id: "lifeline" },
        { label: "Foundation", id: "foundation" },
    ];

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={cn(
            "absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center transition-colors duration-300 backdrop-blur-md border-b-[0.5px]",
            mode === "corporate"
                ? "bg-black/50 text-white border-white/10"
                : "bg-stone-50/60 text-stone-900 border-black/5"
        )}>
            <div className="pointer-events-auto">
                <h1 className="text-xl font-bold tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Musfiqur Tuhin
                </h1>
                <p className="text-xs opacity-70">
                    {mode === "corporate" ? "AI & Machine Learning" : "The Living Archive"}
                </p>
            </div>

            {/* Center Toggle */}
            <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className={cn("text-xs transition-opacity", mode === "story" ? "opacity-50" : "opacity-100 font-bold")}>
                        Brain
                    </span>
                    <button
                        onClick={toggleMode}
                        className="w-12 h-6 bg-white/20 rounded-full relative p-1 transition-colors hover:bg-white/30"
                        aria-label="Toggle Mode"
                    >
                        <div
                            className={cn(
                                "w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                mode === "story" ? "translate-x-6 bg-amber-400" : "translate-x-0 bg-sky-400"
                            )}
                        />
                    </button>
                    <span className={cn("text-xs transition-opacity", mode === "corporate" ? "opacity-50" : "opacity-100 font-bold")}>
                        Heart
                    </span>
                </div>

                {/* Interaction Hint */}
                <div className="absolute -bottom-8 animate-bounce whitespace-nowrap">
                    <div className="bg-story-red/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-4 border-transparent border-b-story-red/90" />
                        TAP TO SWITCH OR SCROLL DOWN
                    </div>
                </div>
            </div>

            {/* Right Navigation */}
            <div className="pointer-events-auto hidden md:flex items-center gap-6">
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
        </nav>
    );
}
