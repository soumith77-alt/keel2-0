"use client";

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export function WavyStrip({
  height = 240,
  blur = 10,
  waveOpacity = 0.5,
}: {
  height?: number;
  blur?: number;
  waveOpacity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const noise = createNoise3D();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
      ctx.filter = `blur(${blur}px)`;
    };

    setSize();
    window.addEventListener("resize", setSize);

    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
    let nt = 0;
    let animationId: number;

    const drawWave = (n: number) => {
      nt += 0.002;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.strokeStyle = colors[i % colors.length];
        for (let x = 0; x < canvas.width; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 80;
          ctx.lineTo(x, y + canvas.height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.globalAlpha = waveOpacity;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setSize);
    };
  }, [height, blur, waveOpacity]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      style={isSafari ? { filter: `blur(${blur}px)` } : {}}
    />
  );
}
