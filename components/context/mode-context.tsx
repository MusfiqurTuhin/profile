"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Mode = "corporate" | "story";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("story");

  // Optional: Persist to localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as Mode;
    if (savedMode) {
      setModeState(savedMode);
    }
  }, []);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem("portfolio-mode", newMode);
    
    // Update body class for styling hooks if needed
    document.body.classList.remove("mode-corporate", "mode-story");
    document.body.classList.add(`mode-${newMode}`);
  };

  const toggleMode = () => {
    setMode(mode === "corporate" ? "story" : "corporate");
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
