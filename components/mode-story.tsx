import StoryLayout from "@/components/story/story-layout";
import StoryHero from "@/components/story/sections/hero";
import dynamic from "next/dynamic";

const SectionLoader = () => (
    <div className="h-96 w-full flex items-center justify-center bg-stone-50 text-stone-400 font-mono text-xs animate-pulse">
        [ LOADING ARCHIVE DATA... ]
    </div>
);

const Revolution = dynamic(() => import("@/components/story/sections/revolution"), {
    loading: () => <SectionLoader />,
});

const Renaissance = dynamic(() => import("@/components/story/sections/renaissance"), {
    loading: () => <SectionLoader />,
});

const Ovizatri = dynamic(() => import("@/components/story/sections/ovizatri"), {
    loading: () => <SectionLoader />,
});

const EarlyActivism = dynamic(() => import("@/components/story/sections/early-activism"), {
    loading: () => <SectionLoader />,
});

const Lifeline = dynamic(() => import("@/components/story/sections/lifeline"), {
    loading: () => <SectionLoader />,
});

const Foundation = dynamic(() => import("@/components/story/sections/foundation"), {
    loading: () => <SectionLoader />,
});

const TravelMapInteractive = dynamic(() => import("@/components/sections/travel-map-interactive"), {
    loading: () => <SectionLoader />,
    ssr: false // Map needs client-side only
});

export default function ModeStory() {
    return (
        <StoryLayout>
            <StoryHero />
            <Revolution />
            <Renaissance />
            <Ovizatri />
            <EarlyActivism />
            <Lifeline />
            <Foundation />
            <TravelMapInteractive />
        </StoryLayout>
    );
}
