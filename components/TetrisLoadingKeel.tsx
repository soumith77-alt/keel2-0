// components/tetris-loading-keel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Size = "sm" | "md" | "lg";

export default function TetrisLoadingKeel({
  size = "lg",
  duration = 2000, // ms to fully reveal
}: {
  size?: Size;
  duration?: number;
}) {
  // Simple pixel font for "KEEL" (1 = lit pixel)
  // Each letter is 7x9 with 2px space between
  const LETTERS = useMemo(() => {
    const K = [
      "1000001",
      "1000010",
      "1000100",
      "1001000",
      "1110000",
      "1001000",
      "1000100",
      "1000010",
      "1000001",
    ];
    const E = [
      "1111111",
      "1000000",
      "1000000",
      "1111110",
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1111111",
    ];
    const L = [
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1000000",
      "1111111",
    ];
    const space = Array(9).fill("00"); // 2px gap
    // Combine: K + space + E + space + E + space + L
    const rows: string[] = [];
    for (let r = 0; r < 9; r++) {
      rows.push(K[r] + space[r] + E[r] + space[r] + E[r] + space[r] + L[r]);
    }
    return rows;
  }, []);

  // grid dims
  const rows = LETTERS.length; // 9
  const cols = LETTERS[0].length; // 7 + 2 + 7 + 2 + 7 + 2 + 7 = 34

  // size map
  const cell = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }[size];

  // reveal animation: progressively turn on pixels in scan-order
  const totalPixels = useMemo(
    () => LETTERS.join("").split("").filter((c) => c === "1").length,
    [LETTERS]
  );
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const step = Math.max(1, Math.floor(totalPixels / Math.max(1, duration / 16)));
    const iv = setInterval(() => {
      setLit((n) => {
        const next = n + step;
        return next >= totalPixels ? totalPixels : next;
      });
    }, 16);
    return () => clearInterval(iv);
  }, [duration, totalPixels]);

  // Build a list of coordinates for all "1" pixels in a pleasant reveal order (diagonal)
  const coords = useMemo(() => {
    const c: Array<{ r: number; c: number }> = [];
    for (let s = 0; s < rows + cols; s++) {
      for (let r = 0; r < rows; r++) {
        const col = s - r;
        if (col >= 0 && col < cols) {
          if (LETTERS[r][col] === "1") c.push({ r, c: col });
        }
      }
    }
    return c;
  }, [LETTERS, rows, cols]);

  const litSet = useMemo(() => new Set(coords.slice(0, lit).map((p) => `${p.r}-${p.c}`)), [coords, lit]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="rounded-lg border border-white/15 p-2"
        aria-label="KEEL loading animation"
      >
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex">
            {Array.from({ length: cols }).map((__, c) => {
              const on = litSet.has(`${r}-${c}`);
              const isPixel = LETTERS[r][c] === "1";
              return (
                <div
                  key={`${r}-${c}`}
                  className={[
                    cell,
                    "border",
                    "transition-transform",
                    "duration-150",
                    isPixel ? "border-white/15" : "border-transparent",
                    on ? "bg-white scale-100" : "bg-white/0 scale-90",
                  ].join(" ")}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p className="text-sm text-white/70 tracking-wide">Loading…</p>
    </div>
  );
}
