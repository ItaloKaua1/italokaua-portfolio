"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="~/experience" title="Experiência" />

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experiences.map((exp, index) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />

            <div className="rounded-xl border border-border bg-card/50 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-foreground">
                  {exp.role ? `${exp.role} — ` : ""}
                  {exp.company}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period || "em atualização"}
                  {exp.location && ` · ${exp.location}`}
                </span>
              </div>

              {exp.summary && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {exp.summary}
                </p>
              )}

              {exp.highlights.length > 0 && (
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              {exp.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
