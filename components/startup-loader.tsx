// components/startup-loader.tsx
"use client";

import { useEffect, useState } from "react";
import TetrisLoadingKeel from "@/components/TetrisLoadingKeel";

export default function StartupLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Auto dismiss after X ms OR dismiss once app has hydrated.
    const t = setTimeout(() => setShow(false), 1600); // tweak if you want longer
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <TetrisLoadingKeel size="lg" duration={1400} />
    </div>
  );
}
