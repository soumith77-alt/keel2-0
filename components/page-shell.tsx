"use client";

import { WavyBackground } from "@/components/wavy-background";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <WavyBackground
      // let the page still scroll, not locked to 1 screen
      containerClassName="min-h-screen"
      // make content a bit wider
      className="w-full"
      // optional: make background dark so waves look nice
      backgroundFill="black"
      waveOpacity={0.35}
    >
      {children}
    </WavyBackground>
  );
}
