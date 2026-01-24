"use client";

import StoryLayout from "@/components/story/story-layout";
import StoryHero from "@/components/story/sections/hero";
import Foundation from "@/components/story/sections/foundation";
import TravelMapInteractive from "@/components/sections/travel-map-interactive";
import Lifeline from "@/components/story/sections/lifeline";
import Renaissance from "@/components/story/sections/renaissance";
import Ovizatri from "@/components/story/sections/ovizatri";
import Revolution from "@/components/story/sections/revolution";
import EarlyActivism from "@/components/story/sections/early-activism";

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
