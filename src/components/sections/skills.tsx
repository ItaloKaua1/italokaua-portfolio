"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  MonitorSmartphone,
  Server,
  Workflow,
  Wrench,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories } from "@/data/skills";

const icons: Record<string, LucideIcon> = {
  backend: Server,
  frontend: MonitorSmartphone,
  cloud: Cloud,
  databases: Database,
  devops: Workflow,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="~/stack"
        title="Skills"
        description="Organizadas por onde cada tecnologia realmente atua, não por uma grade solta de ícones."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[category.id] ?? Server;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <Icon className="size-4" />
                </span>
                <h3 className="font-medium text-foreground">
                  {category.label}
                </h3>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.items.length > 0 ? (
                  category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="rounded-md border border-dashed border-border px-2 py-1 font-mono text-xs text-muted-foreground">
                    em atualização
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
