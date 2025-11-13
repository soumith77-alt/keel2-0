"use client";

import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Confetti, type ConfettiRef } from "@/components/confetti";

const CAL_SLUG = "soumith-reddy-9xbbzl/30min";

export function CalProvider({ children }: { children: React.ReactNode }) {
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();

      // ✅ init the UI with a real link + theme + css vars
      cal("ui", {
        calLink: CAL_SLUG,
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "--cal-brand": "#14b8a6",
          },
        },
      });

      // ✅ confetti on success
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          confettiRef.current?.fire({
            particleCount: 200,
            spread: 80,
            startVelocity: 40,
          });
        },
      });
    })();
  }, []);

  return (
    <>
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
      {children}
    </>
  );
}
