"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code2, Terminal, Cpu, Play } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftwareProjects() {
    const container = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        gsap.fromTo(cards,
            {
                y: 50,
                opacity: 0,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: container });

    return (
        <section id="software" ref={container} className="min-h-screen w-full py-24 px-4 md:px-8 bg-black relative z-10 overflow-hidden">
            {/* HUD Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            {/* Background Texture - More subtle grid */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 md:mb-24 relative">
                <SectionHeader
                    title="SOFTWARE SYSTEMS"
                    subtitle="Bento-modular architecture of deployed prototypes, engineering solutions, and AI-driven products."
                />
            </div>

            {/* Bento Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-6 auto-rows-auto md:auto-rows-[340px]">
                {projects.map((project, index) => {
                    // Custom Bento Spanning Logic
                    const isViolenceTracker = project.title === "Violence Tracker";
                    const isBlogGen = project.title === "MM Blog Generator";
                    const isCarousel = project.title === "Carousel Meta";

                    const gridSpan = isViolenceTracker
                        ? "md:col-span-4 md:row-span-2 lg:col-span-3 lg:row-span-2"
                        : isBlogGen
                            ? "md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1"
                            : "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1";

                    return (
                        <motion.div
                            key={index}
                            layout
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={cn(
                                "project-card group relative rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden flex flex-col transition-all duration-500",
                                gridSpan,
                                "min-h-[320px] md:min-h-0", // Mobile min-height
                                hoveredIndex === index ? "z-30 ring-2 ring-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]" : "z-10"
                            )}
                        >
                            {/* Inner Content - Relative on mobile, Absolute on Desktop */}
                            <div className="relative md:absolute inset-0 p-6 md:p-8 flex flex-col h-full bg-zinc-900/40 backdrop-blur-sm z-10">
                                {/* Top Row: Icon & Links */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className={cn(
                                        "p-3 rounded-2xl flex items-center justify-center transition-all duration-300",
                                        isViolenceTracker ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-white/5 text-zinc-400 group-hover:text-white"
                                    )}>
                                        {isViolenceTracker ? <Cpu size={24} /> :
                                            isBlogGen ? <Terminal size={24} /> :
                                                <Code2 size={24} />
                                        }
                                    </div>

                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/10 transition-all">
                                                <Github size={14} />
                                            </a>
                                        )}
                                        {project.link && project.link !== "#" && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/10 transition-all">
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1">
                                    <h3 className={cn(
                                        "font-bold text-white mb-2 leading-tight transition-all duration-300",
                                        isViolenceTracker ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-xl"
                                    )}>
                                        {project.title}
                                    </h3>
                                    <p className={cn(
                                        "text-zinc-400 font-light leading-relaxed transition-all duration-300",
                                        "text-sm md:text-sm lg:text-base",
                                        isViolenceTracker ? "line-clamp-none md:line-clamp-4" : "line-clamp-none md:line-clamp-3"
                                    )}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Footer */}
                                <div className="mt-6 md:mt-4 flex flex-wrap gap-1.5">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* "Video Preview" / Visual Background Overlay - Only show on Desktop Hover or nice touch on mobile? */}
                            <AnimatePresence>
                                {(hoveredIndex === index) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="absolute inset-0 z-0 pointer-events-none hidden md:block" // Hidden on mobile to avoid click/hover confusion
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent z-[1]" />
                                        <div className="absolute inset-0 bg-black/40 z-[2]" />

                                        {/* Animated HUD Elements on Hover */}
                                        <div className="absolute top-4 right-4 flex items-center gap-2 text-cyan-400/60 font-mono text-[10px] z-[3]">
                                            <span className="animate-pulse flex h-2 w-2 rounded-full bg-cyan-500" />
                                            REC_SIMULATION
                                        </div>

                                        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-[3]">
                                            <Play size={80} className="text-white" />
                                        </div>

                                        {/* Abstract background blobs for visual interest */}
                                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Border Glow for feature item */}
                            {isViolenceTracker && (
                                <div className="absolute inset-0 ring-1 ring-inset ring-cyan-500/20 pointer-events-none z-20" />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
