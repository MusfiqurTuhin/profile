"use client";

import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import { Frame, BookOpen } from "lucide-react"; // Icons for Corporate/Story

export default function Navbar() {
    const { mode, toggleMode } = useMode();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
            <div className="pointer-events-auto">
                <h1 className="text-xl font-bold tracking-tighter uppercase">
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
        </nav>
    );
}
