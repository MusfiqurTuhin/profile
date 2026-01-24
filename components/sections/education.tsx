"use client";

import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { education, experience } from "@/lib/data";
import SectionHeader from "@/components/ui/section-header";
import { BookOpen, Briefcase, Rocket, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceEducation() {
    const container = useRef<HTMLDivElement>(null);
    const timelineLine = useRef<HTMLDivElement>(null);

    // Combine and sort data chronologically
    const combinedData = useMemo(() => {
        const edu = education.map(item => ({ ...item, type: 'education' as const }));
        const exp = experience.map(item => ({ ...item, type: 'experience' as const }));
        return [...edu, ...exp].sort((a, b) => b.sortDate - a.sortDate);
    }, []);

    useGSAP(() => {
        // Line growth animation
        gsap.fromTo(timelineLine.current,
            { height: 0 },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            }
        );

        // Nodes animation
        const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
        nodes.forEach((node) => {
            gsap.fromTo(node,
                {
                    x: node.classList.contains("left-node") ? -30 : 30,
                    opacity: 0,
                    scale: 0.95
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: node,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: container });

    return (
        <section id="education" ref={container} className="w-full py-24 px-4 md:px-6 lg:px-12 bg-black relative z-10 overflow-hidden">
            {/* Background HUD elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="EXPERIENCE & EDUCATION"
                    subtitle="A unified chronological journey of theoretical mastery and professional impact."
                    className="text-center"
                />

                <div className="relative mt-20">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block">
                        <div ref={timelineLine} className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] origin-top" />
                    </div>

                    {/* Section Titles - Much bigger as requested */}
                    {/* Section Titles - Responsive */}
                    <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-24 px-4 lg:px-12 gap-8 md:gap-0">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4 text-cyan-400">
                                <BookOpen size={32} className="stroke-[1.5] md:w-10 md:h-10" />
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">The Learning</h3>
                            </div>
                            <span className="text-zinc-600 font-mono text-[10px] md:text-xs tracking-[0.3em] ml-12 md:ml-14 uppercase">Academic_Foundation</span>
                        </div>

                        {/* Mobile Divider */}
                        <div className="w-full h-px bg-zinc-800 md:hidden" />

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="flex items-center gap-4 text-purple-400">
                                {/* Icon moved to right on desktop, left on mobile for consistency? Or keep split? Keeping split for symmetry */}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic order-2 md:order-1">The Doing</h3>
                                <Briefcase size={32} className="stroke-[1.5] md:w-10 md:h-10 order-1 md:order-2" />
                            </div>
                            <span className="text-zinc-600 font-mono text-[10px] md:text-xs tracking-[0.3em] ml-12 md:mr-14 uppercase">Execution_Layer</span>
                        </div>
                    </div>

                    {/* Chronological Unified Timeline */}
                    <div className="space-y-12 md:space-y-0 relative">
                        {combinedData.map((item, idx) => {
                            const isEdu = item.type === 'education';
                            const eduItem = item as typeof education[0];
                            const expItem = item as typeof experience[0];

                            return (
                                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-24 mb-12 md:mb-24">
                                    {/* Left Side (Education Slot) */}
                                    <div className={!isEdu ? 'hidden md:block' : ''}>
                                        {isEdu && (
                                            <div className="timeline-node left-node relative group">
                                                {/* Desktop Connector Dot */}
                                                <div className="absolute -right-[13px] md:-right-[53px] top-8 w-4 h-4 rounded-full bg-zinc-900 border-2 border-cyan-500 z-20 hidden md:block group-hover:scale-125 transition-transform" />

                                                <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-zinc-900/60">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                                                            <GraduationCap size={24} />
                                                        </div>
                                                        <span className="text-sm font-mono text-cyan-400 tracking-tighter font-bold">{eduItem.year}</span>
                                                    </div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{eduItem.degree}</h4>
                                                    <p className="text-zinc-400 text-sm md:text-base mb-1">{eduItem.institution}</p>
                                                    {eduItem.major && <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mt-4">MOD_FOCUS: {eduItem.major}</p>}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Side (Experience Slot) */}
                                    <div className={isEdu ? 'hidden md:block' : ''}>
                                        {!isEdu && (
                                            <div className="timeline-node right-node relative group">
                                                {/* Desktop Connector Dot */}
                                                <div className="absolute -left-[13px] md:-left-[53px] top-8 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 z-20 hidden md:block group-hover:scale-125 transition-transform" />

                                                <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group-hover:bg-zinc-900/60">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                                                            <Briefcase size={24} />
                                                        </div>
                                                        <span className="text-sm font-mono text-purple-400 tracking-tighter font-bold">{expItem.duration}</span>
                                                    </div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{expItem.role}</h4>
                                                    <p className="text-zinc-200 font-semibold mb-3">{expItem.company}</p>
                                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{expItem.description}</p>

                                                    {expItem.link && (
                                                        <a href={expItem.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-white transition-colors bg-white/5 py-2 px-4 rounded-lg border border-white/5">
                                                            EXEC_PROBE <Rocket size={12} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
