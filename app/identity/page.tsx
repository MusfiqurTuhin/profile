"use client";

import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "@/components/layout/footer";

export default function IdentityPage() {
    const { mode } = useMode();
    const isCorp = mode === "corporate";

    return (
        <div className={cn(
            "min-h-screen w-full transition-colors duration-500 pt-24 pb-12 px-6 md:px-12 lg:px-24 flex flex-col items-center",
            isCorp ? "bg-[#030305] text-white" : "bg-[#F5F5F7] text-[#1A1A1A]"
        )}>

            <div className="max-w-3xl w-full space-y-12">

                {/* Header */}
                <header className="space-y-4 text-center md:text-left">
                    <h1 className={cn(
                        "text-3xl md:text-5xl font-black tracking-tighter uppercase",
                        isCorp ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white" : "text-[#1A1A1A]"
                    )}>
                        Identity & Aliases
                    </h1>
                    <div className={cn(
                        "h-1 w-24 rounded-full",
                        isCorp ? "bg-cyan-500" : "bg-[#D60000]"
                    )} />
                    <p className={cn(
                        "text-lg md:text-xl font-mono opacity-80",
                        isCorp ? "text-cyan-400" : "text-story-red"
                    )}>
                        The Canonical Record of Md. Musfiqur Rahman (Tuhin)
                    </p>
                </header>

                {/* Core Identity Statement */}
                <section className={cn(
                    "p-8 rounded-2xl border backdrop-blur-sm shadow-xl",
                    isCorp
                        ? "bg-white/5 border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                        : "bg-white border-black/5 shadow-sm"
                )}>
                    <p className={cn(
                        "text-lg leading-relaxed mb-6",
                        isCorp ? "text-zinc-300" : "text-zinc-700"
                    )}>
                        This page serves as the single source of truth for my digital identity. whether you are searching for my research, my designs, or my activism, all the names listed below refer to the same person: <strong>Me</strong>.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className={cn("text-sm font-bold uppercase tracking-widest mb-3", isCorp ? "text-white" : "text-black")}>Primary Legal & Academic Name</h3>
                            <p className="text-2xl md:text-3xl font-bold">Md. Musfiqur Rahman</p>
                        </div>

                        <div>
                            <h3 className={cn("text-sm font-bold uppercase tracking-widest mb-3", isCorp ? "text-white" : "text-black")}>Common Online & Professional Aliases</h3>
                            <ul className={cn("grid grid-cols-1 md:grid-cols-2 gap-2 text-lg", isCorp ? "text-zinc-400" : "text-zinc-600")}>
                                <li>Md. Musfiqur Rahman (Tuhin)</li>
                                <li>Musfiqur Tuhin</li>
                                <li>Tuhin Musfiqur</li>
                                <li>Musfiq Tuhin</li>
                                <li>M. Musfiqur Rahman</li>
                                <li>M. M. Rahman</li>
                                <li>Tuhin Rahman</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className={cn("text-sm font-bold uppercase tracking-widest mb-3", isCorp ? "text-white" : "text-black")}>Bengali Name Variations</h3>
                            <ul className={cn("grid grid-cols-1 md:grid-cols-2 gap-2 text-lg font-bengali", isCorp ? "text-zinc-400" : "text-zinc-600")}>
                                <li>মোঃ মুশফিকুর রহমান</li>
                                <li>মুশফিকুর রহমান তুহিন</li>
                                <li>মুশফিক তুহিন</li>
                                <li>মুসফিকুর রহমান</li>
                                <li>তুহিন</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Links */}
                <section>
                    <h2 className={cn(
                        "text-2xl font-bold tracking-tight uppercase mb-6",
                        isCorp ? "text-white" : "text-[#1A1A1A]"
                    )}>
                        Verified Profiles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { name: "Google Scholar", url: "https://scholar.google.com/citations?user=yLdzv6IAAAAJ&hl=en" },
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/mdmusfiqurrahmantuhin/" },
                            { name: "GitHub", url: "https://github.com/MusfiqurTuhin" },
                            { name: "Fiverr", url: "https://www.fiverr.com/musfiqur_" },
                            { name: "Behance", url: "https://www.behance.net/musfiqurtuhin" },
                            { name: "Facebook", url: "https://www.facebook.com/TuhinMusfiqur" },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-4 rounded-lg border transition-all hover:scale-[1.02]",
                                    isCorp
                                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50"
                                        : "bg-white border-black/5 hover:border-story-red/30 hover:shadow-md"
                                )}
                            >
                                <span className={cn("font-bold block", isCorp ? "text-cyan-400" : "text-story-red")}>{link.name}</span>
                                <span className={cn("text-xs opacity-60 truncate block", isCorp ? "text-zinc-400" : "text-zinc-500")}>{link.url}</span>
                            </a>
                        ))}
                    </div>
                </section>

                <div className="flex justify-center pt-8">
                    <Link href="/" className={cn(
                        "px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors",
                        isCorp ? "bg-white text-black hover:bg-cyan-400" : "bg-black text-white hover:bg-story-red"
                    )}>
                        Return Home
                    </Link>
                </div>

            </div>

            <div className="w-full max-w-7xl mt-20">
                <Footer />
            </div>
        </div>
    );
}
