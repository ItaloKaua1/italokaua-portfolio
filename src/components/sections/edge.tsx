"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  FlaskConical,
  GitBranch,
  Layers,
  Network,
  Plug,
  ShieldCheck,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { differentials } from "@/data/differentials";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  "flask-conical": FlaskConical,
  "git-branch": GitBranch,
  network: Network,
  plug: Plug,
  "shield-check": ShieldCheck,
  "brain-circuit": BrainCircuit,
};

export function Edge() {
  return (
    <section id="edge" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="~/edge"
        title="Diferenciais"
        description="Onde costumo agregar mais valor além de escrever código."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => {
          const Icon = icons[item.icon] ?? Layers;
          const isLast = index === differentials.length - 1;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-card/50",
                isLast &&
                  "sm:col-span-2 lg:flex-row lg:items-center lg:gap-5 lg:col-span-3",
              )}
            >
              <Icon
                className={cn(
                  "size-5 shrink-0 text-primary",
                  isLast && "lg:size-6",
                )}
              />
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground lg:mt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
