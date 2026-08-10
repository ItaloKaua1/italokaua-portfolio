"use client";

import { motion } from "framer-motion";

type Line = {
  prompt?: string;
  text: string;
  tone?: "default" | "muted" | "success";
  delay: number;
};

const lines: Line[] = [
  { prompt: "$", text: "whoami", delay: 0.1 },
  { text: "italo — backend & full-stack engineer", tone: "muted", delay: 0.35 },
  { prompt: "$", text: "status --services", delay: 0.7 },
  { text: "api        ● operational", tone: "success", delay: 0.95 },
  { text: "database   ● operational", tone: "success", delay: 1.1 },
  { text: "queue      ● operational", tone: "success", delay: 1.25 },
  { prompt: "$", text: "deploy --env production", delay: 1.6 },
  { text: "✓ build completed in 8.2s", tone: "muted", delay: 1.9 },
  { text: "✓ shipped to production", tone: "success", delay: 2.05 },
];

export function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 6, rotateY: -6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="relative w-full max-w-md rounded-xl border border-border bg-card/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="size-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          ~/italo
        </span>
      </div>

      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={`${line.text}-${i}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: line.delay }}
            className={
              line.tone === "success"
                ? "text-primary"
                : line.tone === "muted"
                  ? "text-muted-foreground"
                  : "text-foreground"
            }
          >
            {line.prompt && (
              <span className="mr-2 text-primary">{line.prompt}</span>
            )}
            {line.text}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: 2.3,
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-primary"
        />
      </div>
    </motion.div>
  );
}
