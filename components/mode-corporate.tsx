import Hero from "@/components/sections/hero";
import dynamic from "next/dynamic";

const SectionLoader = () => (
    <div className="h-96 w-full flex items-center justify-center bg-zinc-900 text-zinc-500 font-mono text-xs animate-pulse">
        [ LOADING SYSTEM DATA... ]
    </div>
);

const ResearchLab = dynamic(() => import("@/components/sections/research-lab"), {
    loading: () => <SectionLoader />,
});

const SoftwareProjects = dynamic(() => import("@/components/sections/software-projects"), {
    loading: () => <SectionLoader />,
});

const Education = dynamic(() => import("@/components/sections/education"), {
    loading: () => <SectionLoader />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
    loading: () => <SectionLoader />,
});

export default function ModeCorporate() {
    return (
        <>
            <Hero />
            <ResearchLab />
            <SoftwareProjects />
            <Education />
            <Testimonials />
        </>
    );
}
