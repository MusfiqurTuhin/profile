"use client";

import Footer from "@/components/layout/footer";
import { useMode } from "@/components/context/mode-context";
import dynamic from "next/dynamic";

// Lazy load mode containers
const ModeCorporate = dynamic(() => import("@/components/mode-corporate"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const ModeStory = dynamic(() => import("@/components/mode-story"), {
  loading: () => <div className="min-h-screen bg-stone-50" />,
});

export default function Home() {
  const { mode } = useMode();

  return (
    <div className="w-full relative bg-background">
      {/* Corp Mode Sections (Dark/Tech) */}
      {mode === "corporate" && <ModeCorporate />}

      {/* Story Mode Sections (Light/Activism) */}
      {mode === "story" && <ModeStory />}

      <Footer />
    </div>
  );
}
