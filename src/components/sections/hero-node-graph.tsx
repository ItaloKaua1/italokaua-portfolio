"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Ambient node graph — a quiet nod to distributed systems / service topology.
 * Canvas-driven so there's no hand-authored path data to maintain.
 */
export function HeroNodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationId: number;

    const isDark = () => document.documentElement.classList.contains("dark");

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 14000);
      nodes = Array.from({ length: Math.max(10, Math.min(28, count)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 1.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const lineColor = dark
        ? "rgba(232, 163, 61, OPACITY)"
        : "rgba(185, 121, 15, OPACITY)";
      const nodeColor = dark
        ? "rgba(242, 239, 234, 0.55)"
        : "rgba(24, 22, 15, 0.4)";
      const activeNodeColor = dark ? "#e8a33d" : "#b9790f";

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.5;
            ctx.strokeStyle = lineColor.replace("OPACITY", opacity.toFixed(3));
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = i % 5 === 0;
        ctx.beginPath();
        ctx.fillStyle = pulse ? activeNodeColor : nodeColor;
        ctx.arc(n.x, n.y, pulse ? n.r + 1 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(loop);
      }
    };

    resize();
    loop();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      if (prefersReducedMotion) draw();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
