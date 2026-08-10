"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { GithubIcon } from "@/components/shared/brand-icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-primary/40"
    >
      <div
        className={
          project.image
            ? "relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-[#f0ede6]"
            : "relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-muted to-background"
        }
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Logo ${project.name}`}
            fill
            className="object-contain p-10"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:24px_24px]"
            />
            <span className="relative font-mono text-sm text-muted-foreground">
              {project.name}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-medium text-foreground">{project.name}</h3>

        <p className="flex-1 text-sm text-muted-foreground">
          {project.description || "Descrição em atualização."}
        </p>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {(project.links.repo || project.links.live) && (
          <div className="mt-1 flex gap-4 pt-2">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                Código
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                Ver projeto
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
