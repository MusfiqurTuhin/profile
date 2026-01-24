"use client";

import Hero from "@/components/sections/hero";
import ResearchLab from "@/components/sections/research-lab";
import SoftwareProjects from "@/components/sections/software-projects";
import Education from "@/components/sections/education";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/layout/footer";
import { useMode } from "@/components/context/mode-context";

// Story Mode Components
import StoryLayout from "@/components/story/story-layout";
import StoryHero from "@/components/story/sections/hero";
import Foundation from "@/components/story/sections/foundation";
import TravelMap from "@/components/sections/travel-map";
import Lifeline from "@/components/story/sections/lifeline";
import Renaissance from "@/components/story/sections/renaissance";
import Ovizatri from "@/components/story/sections/ovizatri";
import Revolution from "@/components/story/sections/revolution";
import EarlyActivism from "@/components/story/sections/early-activism";

export default function Home() {
  const { mode } = useMode();

  return (
    <div className="w-full relative bg-background">
      {/* Corp Mode Sections (Dark/Tech) */}
      {mode === "corporate" && (
        <>
          <Hero />
          <ResearchLab />
          <SoftwareProjects />
          <Education />
          <Testimonials />
        </>
      )}

      {/* Story Mode Sections (Light/Activism) */}
      {mode === "story" && (
        <StoryLayout>
          <StoryHero />
          <Revolution />
          <Renaissance />
          <Ovizatri />
          <EarlyActivism />
          <Lifeline />
          <Foundation />
          <TravelMap />
        </StoryLayout>
      )}

      <Footer />
    </div>
  );
}
