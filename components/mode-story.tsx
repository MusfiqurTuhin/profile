import StoryLayout from "@/components/story/story-layout";
import StoryHero from "@/components/story/sections/hero";
import Revolution from "@/components/story/sections/revolution";
import Renaissance from "@/components/story/sections/renaissance";
import Ovizatri from "@/components/story/sections/ovizatri";
import EarlyActivism from "@/components/story/sections/early-activism";
import Lifeline from "@/components/story/sections/lifeline";
import Foundation from "@/components/story/sections/foundation";
import dynamic from "next/dynamic";

const SectionLoader = () => (
    <div className="h-96 w-full flex items-center justify-center bg-stone-50 text-stone-400 font-mono text-xs animate-pulse">
        [ LOADING ARCHIVE MAP... ]
    </div>
);

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
