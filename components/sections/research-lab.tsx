"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { papers, awards } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import { Copy, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ResearchLab() {
    const container = useRef<HTMLDivElement>(null);

    // Animations removed
    useGSAP(() => {
        // No active animations currently
    }, { scope: container });

    return (
        <section ref={container} className="min-h-screen w-full py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-black via-zinc-950 to-black relative z-10">
            {/* Animated Matrix Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #00f0ff 2px, #00f0ff 4px)`,
                    animation: 'matrix-scroll 20s linear infinite',
                    backgroundSize: '100% 40px'
                }} />
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <SectionHeader
                    title="RESEARCH LABORATORY"
                    subtitle="Published works in Computer Vision, NLP, and Machine Learning. Peer-reviewed and indexed in IEEE Xplore, Springer Nature."
                />
            </div>

            {/* Sticky Stacking Cards */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-32 pb-12 md:pb-20">
                {/* Research Papers */}
                {papers.map((paper, index) => (
                    <PaperCard key={paper.id} paper={paper} index={index} />
                ))}

                {/* Achievement Cards */}
                {awards.map((award, index) => (
                    <div
                        key={`award-${index}`}
                        className="sticky top-24 w-full"
                        style={{ zIndex: papers.length + index + 1 }}
                    >
                        <div
                            className="group relative overflow-hidden rounded-2xl border bg-zinc-900/90 backdrop-blur-xl transition-all duration-500 h-fit md:h-[500px] border-amber-500/20 hover:border-amber-500/40"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-32 md:w-64 h-32 md:h-64 blur-[60px] md:blur-[100px] opacity-20 transition-opacity duration-500 rounded-full pointer-events-none bg-amber-600" />

                            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
                                {/* Top Meta */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    <span className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                        {award.year}
                                    </span>
                                    <span className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                        {award.event}
                                    </span>
                                </div>

                                {/* Champion Badge */}
                                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-lg md:text-xl font-black tracking-widest uppercase shadow-amber-500/50 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                                        {award.placement}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="max-w-4xl space-y-6">
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                        {award.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-white/50 font-light tracking-wide">
                                        {award.project}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function PaperCard({ paper, index }: { paper: typeof papers[0]; index: number }) {
    const [showCitation, setShowCitation] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (paper.citation) {
            navigator.clipboard.writeText(paper.citation);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div
            className="sticky top-16 md:top-24 w-full"
            style={{ zIndex: index + 1 }}
        >
            <div className={cn(
                "group relative overflow-hidden rounded-2xl border bg-zinc-900/90 backdrop-blur-xl transition-all duration-500 h-auto md:min-h-[500px]",
                paper.category === "Security"
                    ? "border-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                    : "border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            )}>
                {/* Corner Accent Lines */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Glow Effect */}
                <div className={cn(
                    "absolute -top-20 -right-20 w-32 md:w-64 h-32 md:h-64 blur-[60px] md:blur-[100px] opacity-20 transition-opacity duration-500 rounded-full pointer-events-none group-hover:opacity-40",
                    paper.category === "Security" ? "bg-red-600" : "bg-cyan-500"
                )} />

                <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8">
                    {/* Left: Meta & Actions */}
                    <div className="md:col-span-5 flex flex-col space-y-6">
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {paper.status === "Published" ? (
                                    <>
                                        <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/5 text-white/60">
                                            {paper.conference}
                                        </span>
                                        <span className={cn(
                                            "text-[10px] md:text-xs font-bold px-2 py-1 rounded-full",
                                            paper.publisher === "Springer Nature"
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                                        )}>
                                            {paper.publisher}
                                        </span>
                                        <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20">
                                            Published
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20">
                                            Accepted & Presented at {paper.conference}
                                        </span>
                                        <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                            Awaiting Publication at {paper.publisher}
                                        </span>
                                    </>
                                )}
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-bold leading-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300 mb-4">
                                    {paper.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-3">
                                    {paper.doi && (
                                        <a
                                            href={`https://doi.org/${paper.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 py-2.5 text-xs md:text-sm font-bold rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                                        >
                                            Read Paper
                                        </a>
                                    )}

                                    {/* Cite Button */}
                                    {paper.citation && (
                                        <button
                                            onClick={() => setShowCitation(!showCitation)}
                                            className="inline-flex items-center justify-center px-6 py-2.5 text-xs md:text-sm font-bold rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                        >
                                            {showCitation ? "Hide Citation" : "Cite"}
                                        </button>
                                    )}
                                </div>

                                {/* Citation Block */}
                                {showCitation && paper.citation && (
                                    <div className="mt-4 p-4 bg-black/50 rounded-xl border border-white/10 relative group animate-in slide-in-from-top-2 duration-200">
                                        <pre className="text-[10px] text-zinc-400 font-mono whitespace-pre-wrap break-all overflow-x-auto">
                                            {paper.citation}
                                        </pre>
                                        <button
                                            onClick={handleCopy}
                                            className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded-md text-white/50 hover:text-white transition-all"
                                            title="Copy BibTeX"
                                        >
                                            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                        </button>
                                    </div>
                                )}

                                {/* Dataset Section */}
                                {paper.datasetName && (
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 hover:bg-white/10 transition-colors mt-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-400">Dataset Available</span>
                                            </div>
                                            <a
                                                href={paper.datasetLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] md:text-xs font-bold text-white/50 hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                View Source
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <h4 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                                {paper.datasetName}
                                            </h4>
                                            {paper.datasetDescription && (
                                                <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
                                                    {paper.datasetDescription}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Abstract */}
                    <div className="md:col-span-7 flex flex-col">
                        <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-light">
                            {paper.abstract || paper.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
