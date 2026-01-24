"use client";

import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, GraduationCap, Briefcase, Palette, MessageCircle, Phone, Send, MessageSquare } from "lucide-react";
import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";

export default function Footer() {
    const { mode } = useMode();
    const isCorp = mode === "corporate";

    const footerLinkStyle = cn(
        "flex items-center gap-2 transition-colors",
        isCorp ? "text-zinc-400 hover:text-white" : "text-story-text/70 hover:text-story-red font-bold underline decoration-story-text/10 underline-offset-4"
    );

    const footerHeaderStyle = cn("text-xs font-mono uppercase tracking-widest mb-2", isCorp ? "text-zinc-600" : "text-story-text/40");

    return (
        <footer className={cn(
            "w-full py-20 px-8 relative z-10 transition-colors duration-300",
            isCorp ? "bg-zinc-950 border-t border-white/5" : "bg-story-bg border-t-2 border-story-text/10 paper-texture"
        )}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">

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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 lg:gap-y-4 w-full lg:w-auto">

                    {/* Professional / Academic */}
                    <div className="flex flex-col gap-4">
                        <span className={footerHeaderStyle}>Research & Professional</span>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                        <a href={socialLinks.scholar} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <GraduationCap className="w-4 h-4" /> Google Scholar
                        </a>
                        <a href={socialLinks.fiverr} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Briefcase className="w-4 h-4" /> Fiverr
                        </a>
                        <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Palette className="w-4 h-4" /> Behance
                        </a>
                    </div>

                    {/* Social / Media */}
                    <div className="flex flex-col gap-4">
                        <span className={footerHeaderStyle}>Social & Community</span>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Facebook className="w-4 h-4" /> Facebook
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Instagram className="w-4 h-4" /> Instagram
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Twitter className="w-4 h-4" /> Twitter
                        </a>
                        <a href={socialLinks.quora} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <MessageCircle className="w-4 h-4" /> Quora
                        </a>
                    </div>

                    {/* Contact / Messaging */}
                    <div className="flex flex-col gap-4">
                        <span className={footerHeaderStyle}>Direct Connect</span>
                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Youtube className="w-4 h-4" /> YouTube
                        </a>
                        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Phone className="w-4 h-4" /> WhatsApp
                        </a>
                        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <Send className="w-4 h-4" /> Telegram
                        </a>
                        <a href={socialLinks.messenger} target="_blank" rel="noopener noreferrer" className={footerLinkStyle}>
                            <MessageSquare className="w-4 h-4" /> Messenger
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
