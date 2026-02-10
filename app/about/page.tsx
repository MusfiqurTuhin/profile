"use client";

import { useMode } from "@/components/context/mode-context";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar"; // Assuming Navbar is used here or in layout
import Footer from "@/components/layout/footer";

export default function AboutPage() {
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
                        "text-4xl md:text-6xl font-black tracking-tighter uppercase",
                        isCorp ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white" : "text-[#1A1A1A]"
                    )}>
                        About Me
                    </h1>
                    <div className={cn(
                        "h-1 w-24 rounded-full",
                        isCorp ? "bg-cyan-500" : "bg-[#D60000]"
                    )} />
                </header>

                {/* Bridge Paragraph (The Core Request) */}
                <section className={cn(
                    "p-8 rounded-2xl border backdrop-blur-sm shadow-xl",
                    isCorp
                        ? "bg-white/5 border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                        : "bg-white border-black/5 shadow-sm"
                )}>
                    <h2 className={cn(
                        "text-sm font-mono uppercase tracking-widest mb-4",
                        isCorp ? "text-cyan-400" : "text-[#D60000]"
                    )}>
                        Identity & Aliases
                    </h2>
                    <p className={cn(
                        "text-lg md:text-xl leading-relaxed",
                        isCorp ? "text-zinc-300" : "text-zinc-700"
                    )}>
                        Hi, I am <span className="font-bold">Md. Musfiqur Rahman</span>, a Machine Learning Engineer and Data Scientist from Dhaka, Bangladesh.
                        In the tech community and online, I am widely known by my nickname <span className="font-bold">Tuhin</span> or as <span className="font-bold">Musfiqur Tuhin</span>.
                        Whether you know me from my research papers under <em>Md. Musfiqur Rahman</em> or my development portfolio as <em>Musfiqur Tuhin</em>, this is my central hub.
                    </p>
                </section>

                {/* Extended Bio */}
                <section className="space-y-6">
                    <h2 className={cn(
                        "text-2xl font-bold tracking-tight uppercase",
                        isCorp ? "text-white" : "text-[#1A1A1A]"
                    )}>
                        The Journey
                    </h2>
                    <div className={cn(
                        "space-y-4 text-base md:text-lg leading-relaxed",
                        isCorp ? "text-zinc-400" : "text-zinc-600"
                    )}>
                        <p>
                            My path has never been linear. From organizing grassroots movements in Bangladesh to publishing cutting-edge AI research, I operate at the intersection of <strong>Logic</strong> and <strong>Legacy</strong>.
                        </p>
                        <p>
                            As a researcher, I focus on Computer Vision and NLP, exploring how machines perceive and process the world. As an activist, I apply these rigorous analytical frameworks to solve real-world social problems.
                            I founded <strong>Muktanchol</strong> to foster cultural and intellectual growth, and I played a leadership role in the July Revolution, advocating for justice and reform.
                        </p>
                        <p>
                            Currently, I am working on building AI systems that are not just intelligent, but also ethical and impactful.
                        </p>
                    </div>
                </section>

            </div>

            {/* Footer is auto-included by layout.tsx? No, layout wraps children. 
                Wait, page.tsx had Footer explicitly. Let's check layout.tsx again. 
                Layout.tsx has Navbar but NOT Footer. page.tsx HAS Footer. 
                So I should include Footer here too. */}
            <div className="w-full max-w-7xl mt-20">
                <Footer />
            </div>
        </div>
    );
}
