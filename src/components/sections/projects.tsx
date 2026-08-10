"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="~/projects"
        title="Projetos"
        description="Uma amostra do que venho construindo — mais chegando."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: projects.length * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-6 text-center"
        >
          <Sparkles className="size-5 text-primary" />
          <p className="font-medium text-foreground">Coming Soon</p>
          <p className="text-sm text-muted-foreground">
            Mais um projeto a caminho.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
