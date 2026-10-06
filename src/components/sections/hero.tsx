"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import { resumeUrl, siteConfig, socialLinks } from "@/config/site";

import { HeroNodeGraph } from "./hero-node-graph";
import { HeroTerminal } from "./hero-terminal";

const githubHref = socialLinks.find((s) => s.icon === "github")?.href ?? "#";
const linkedinHref =
  socialLinks.find((s) => s.icon === "linkedin")?.href ?? "#";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:gap-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="w-fit rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            $ open-to-work
          </span>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="font-mono text-base text-primary sm:text-lg">
            {siteConfig.role}
          </p>

          <p className="max-w-lg text-balance text-base text-muted-foreground sm:text-lg">
            Construo APIs, regras de negócio e produtos full stack de ponta a
            ponta — de Java, Spring Boot e PostgreSQL a React, Docker e CI/CD —
            com o mesmo cuidado que um bom engenheiro dá para o que não aparece
            na tela.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              // biome-ignore lint/a11y/useAnchorContent: text is Button's children, merged onto the anchor by base-ui's `render` prop
              render={<a href={resumeUrl} download />}
              nativeButton={false}
              size="lg"
            >
              <Download className="size-4" />
              Download CV
            </Button>
            <Button
              // biome-ignore lint/a11y/useAnchorContent: text is Button's children, merged onto the anchor by base-ui's `render` prop
              render={<a href={githubHref} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            <Button
              render={
                // biome-ignore lint/a11y/useAnchorContent: text is Button's children, merged onto the anchor by base-ui's `render` prop
                <a href={linkedinHref} target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
            <Button
              // biome-ignore lint/a11y/useAnchorContent: text is Button's children, merged onto the anchor by base-ui's `render` prop
              render={<a href="#contact" />}
              nativeButton={false}
              variant="ghost"
              size="lg"
            >
              Contato
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </motion.div>

        <div className="relative hidden aspect-square items-center justify-center md:flex">
          <HeroNodeGraph />
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
