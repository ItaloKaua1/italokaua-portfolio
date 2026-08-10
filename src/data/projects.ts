import type { Project } from "@/types";

// TODO(italo): repo do BPMN-Ext-Bot pendente; Boxys é privado e ainda não
// lançado.
export const projects: Project[] = [
  {
    slug: "bpmn-ext-bot",
    name: "BPMN-Ext-Bot",
    description:
      "Assistente conversacional baseado em Retrieval-Augmented Generation (RAG) para apoiar a criação e reutilização de extensões BPMN, permitindo consultas inteligentes sobre processos, artefatos e catálogo de extensões.",
    image: "/bpmn-ext-bot-capa.png",
    stack: ["Python", "Ollama", "LLMs", "RAG", "Pandas"],
    links: {},
    status: "in-progress",
  },
  {
    slug: "boxys",
    name: "Boxys",
    description:
      "Plataforma de campanhas prontas focada em gerar leads rápido para o mercado imobiliário e de vendas: ativação de anúncios, copy e landing pages em poucos minutos, com foco em conversão para lançamentos e bairros estratégicos.",
    image: "/boxys.png",
    stack: [
      "React",
      "Vue.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Google Cloud",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
      "DigitalOcean",
      "Git",
      "OAuth",
      "REST APIs",
      "Python",
    ],
    links: {},
    status: "in-progress",
  },
  {
    slug: "maresia",
    name: "Maresia",
    description:
      "Sistema de gestão de altas hospitalares do PET-Saúde Digital/UFC, parte de uma API que integra prontuário hospitalar, prontuário da APS e a plataforma de regulação municipal. Permite visualizar, editar e encaminhar altas do AGHU por perfil de acesso (gerente, gestor, médico, admin), com verificação automática de novas altas, notificações ao médico responsável e trilha de auditoria completa.",
    image: "/Maresia.png",
    stack: ["Java", "Spring Boot", "JUnit", "Mockito", "PostgreSQL"],
    links: {},
    status: "in-progress",
  },
];
