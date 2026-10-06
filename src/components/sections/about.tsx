"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";

const focusAreas = [
  "Java & Spring Boot",
  "React & TypeScript",
  "APIs REST",
  "PostgreSQL",
  "Docker & CI/CD",
  "Testes & Qualidade",
  "Segurança",
  "RAG & LLMs",
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-center px-6 py-24 md:px-8"
    >
      <SectionHeading eyebrow="~/about" title="Sobre" />

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 text-balance text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Sou formado em Engenharia de Software pela{" "}
            <span className="text-foreground">
              Universidade Federal do Ceará (UFC)
            </span>{" "}
            e construí minha carreira desenvolvendo aplicações full stack — mas
            foi no backend que encontrei o que mais gosto de resolver: desenho
            de APIs, regras de negócio, modelagem de dados e a arquitetura que
            sustenta um produto quando ele precisa crescer.
          </p>
          <p>
            Na Boxys, atuei na evolução de uma plataforma SaaS, indo de APIs,
            integrações com serviços como Google Ads API e YouTube Data API e
            regras de acesso no PostgreSQL até interfaces em React, Docker e
            deploy via CI/CD. No PET Saúde Digital, desenvolvi APIs em Java e
            Spring Boot para sistemas de saúde, com foco em segurança, auditoria
            e mais de 90% de cobertura de testes auditada pelo SonarQube.
          </p>
          <p>
            No TCC, explorei IA aplicada: um assistente com RAG híbrido e LLM
            local — sempre com o mesmo critério de entender o problema antes de
            escrever a primeira linha de código.
          </p>
          <p>
            Gosto de times pequenos, decisões técnicas bem justificadas e do
            tipo de código que alguém consegue entender seis meses depois sem
            precisar me perguntar nada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Formação
            </p>
            <p className="mt-2 text-foreground">
              Bacharelado em Engenharia de Software
            </p>
            <p className="text-sm text-muted-foreground">
              Universidade Federal do Ceará (UFC) · 2022 — 2026
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card/50 p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Certificação
              </p>
              <p className="mt-2 text-foreground">Cloud Foundations</p>
              <p className="text-sm text-muted-foreground">AWS Academy · 20h</p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Idiomas
              </p>
              <p className="mt-2 text-foreground">Português — nativo</p>
              <p className="text-sm text-muted-foreground">
                Inglês — intermediário
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Áreas de foco
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
