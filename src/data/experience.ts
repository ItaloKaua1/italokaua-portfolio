import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Boxys",
    role: "Desenvolvedor Full Stack",
    period: "Junho/2025 — Atual",
    summary:
      "Plataforma SaaS voltada para campanhas de marketing destinadas ao mercado imobiliário.",
    highlights: [
      "Backend construído sobre Supabase (Edge Functions e políticas RLS no PostgreSQL) para os módulos internos da plataforma (CMS, métricas, treinamentos e notificações)",
      "Desenvolvimento de interfaces e módulos administrativos utilizando React e Node.js",
      "Implementação de CMS, Landing Pages, sistema de métricas, sistema de treinamentos e notificações",
      "Integração e adaptação da Google Ads API, YouTube Data API e outros serviços do Google Cloud ao contexto da plataforma",
      "Estrutura complementar em Python para acelerar a criação e subida de campanhas pelo painel administrativo",
      "Configuração de infraestrutura utilizando Docker, GitHub Actions, Nginx, Cloudflare e DigitalOcean",
      "Implementação de autenticação OAuth",
      "Participação em code reviews, pull requests e fluxo Git Flow",
    ],
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Supabase",
      "Google Cloud",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
      "DigitalOcean",
      "OAuth",
    ],
  },
  {
    company: "PET Saúde Digital",
    role: "Desenvolvedor Backend",
    period: "Agosto/2025 — Agosto/2026",
    summary:
      "Sistemas da área da saúde com foco em segurança, auditoria e controle de acesso.",
    highlights: [
      "Desenvolvimento de APIs utilizando Java e Spring Boot",
      "Implementação de serviços de auditoria para acessos e operações sensíveis",
      "Desenvolvimento de mecanismos de autorização e controle de acesso no backend",
      "Escrita de testes unitários garantindo confiabilidade e segurança do sistema",
    ],
    stack: ["Java", "Spring Boot", "JUnit", "Mockito", "PostgreSQL"],
  },
  {
    company: "NPI",
    role: "Estagiário de Desenvolvimento Backend",
    period: "Julho/2025 — Janeiro/2026",
    summary:
      "Sistema institucional de gerenciamento de bolsas da Universidade Federal do Ceará.",
    highlights: [
      "Desenvolvimento de APIs e regras de negócio",
      "Manutenção e evolução do sistema",
      "Desenvolvimento utilizando Java e Spring Boot",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL"],
  },
];
