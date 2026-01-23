"use client";

import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, ExternalLink } from "lucide-react";
import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";

export default function Footer() {
    const { mode } = useMode();
    const isCorp = mode === "corporate";

    return (
        <footer className={cn(
            "w-full py-20 px-8 relative z-10 transition-colors duration-300",
            isCorp ? "bg-zinc-950 border-t border-white/5" : "bg-story-bg border-t-2 border-story-text/10 paper-texture"
        )}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand */}
                <div className="max-w-md">
                    <h2 className={cn(
                        "text-4xl font-black tracking-tighter uppercase mb-6",
                        isCorp ? "text-white" : "text-story-text"
                    )}>
                        {isCorp ? "Let's Connect" : "Join The Cause"}
                    </h2>
                    <p className={cn(
                        "mb-8 leading-relaxed",
                        isCorp ? "text-zinc-500" : "text-story-text/70"
                    )}>
                        {isCorp
                            ? "Open for collaborations in AI research, engineering projects, and software architecture."
                            : "Voice for the voiceless. Collaborating on social initiatives, activism, and cultural narrative building."
                        }
                    </p>
                    <a
                        href={`mailto:${socialLinks.email.replace('mailto:', '')}`}
                        className={cn(
                            "font-mono text-lg hover:underline underline-offset-4 font-bold",
                            isCorp ? "text-cyan-400 decoration-cyan-400/30" : "text-story-red decoration-story-red/30"
                        )}
                    >
                        {socialLinks.email.replace('mailto:', '')}
                    </a>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                    <div className="flex flex-col gap-4">
                        <span className={cn("text-xs font-mono uppercase tracking-widest mb-2", isCorp ? "text-zinc-600" : "text-story-text/40")}>Professional</span>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className={cn("text-xs font-mono uppercase tracking-widest mb-2", isCorp ? "text-zinc-600" : "text-story-text/40")}>Story</span>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Facebook className="w-4 h-4" /> Facebook
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Instagram className="w-4 h-4" /> Instagram
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className={cn("text-xs font-mono uppercase tracking-widest mb-2", isCorp ? "text-zinc-600" : "text-story-text/40")}>Channel</span>
                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Youtube className="w-4 h-4" /> YouTube
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 transition-colors", isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4")}>
                            <Twitter className="w-4 h-4" /> Twitter
                        </a>
                    </div>
                </div>
            </div>

            <div className={cn(
                "max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs",
                isCorp ? "border-white/5 text-zinc-600" : "border-story-text/10 text-story-text/40"
            )}>
                <span>© 2026 Md. Musfiqur Rahman. All rights reserved.</span>
                <span className="font-mono">{isCorp ? "System Status: Operational • Dhaka, Bangladesh" : "Voice Active • Dhaka, Bangladesh"}</span>
            </div>
        </footer>
    );
}
