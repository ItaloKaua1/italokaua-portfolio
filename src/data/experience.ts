import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Boxys",
    role: "Engenheiro de Software Backend / Full Stack",
    period: "Jun/2025 — Set/2026",
    location: "Remoto",
    summary:
      "Plataforma SaaS de campanhas de marketing para o mercado imobiliário — atuação em backend, frontend, banco de dados, integrações e infraestrutura.",
    highlights: [
      "Estruturação da arquitetura backend da plataforma, definindo a organização dos serviços, a modelagem de dados e os contratos de API com Supabase Edge Functions e PostgreSQL",
      "Desenvolvimento e manutenção de integrações com serviços externos, incluindo Google Ads API e YouTube Data API",
      "Desenvolvimento de interfaces e funcionalidades frontend com React e TypeScript, integradas aos serviços backend da plataforma",
      "Configuração e gerenciamento de ambientes conteinerizados com Docker e automação de deploys com GitHub Actions (CI/CD)",
      "Modelagem e implementação de estruturas de dados e regras de acesso com PostgreSQL e Row Level Security (RLS)",
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase Edge Functions",
      "PostgreSQL",
      "RLS",
      "Google Ads API",
      "YouTube Data API",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
      "DigitalOcean",
      "OAuth",
    ],
  },
  {
    company: "PET Saúde Digital / UFC",
    role: "Desenvolvedor Bolsista — Backend Java",
    period: "Ago/2025 — Ago/2026",
    location: "Remoto",
    summary:
      "APIs REST para sistemas do setor de saúde, incluindo o Maresia, com foco em segurança, auditoria e controle de acesso.",
    highlights: [
      "Desenvolvimento, manutenção e evolução de APIs REST com Java e Spring Boot",
      "Implementação de regras de negócio, sistemas de auditoria e fluxos de autenticação e controle de acesso",
      "Testes unitários e de integração com JUnit e Mockito, com mais de 90% de cobertura de código auditada pelo SonarQube",
      "Recuperação da cobertura de testes durante as sprints, incluindo testes para módulos desenvolvidos por outros integrantes da equipe",
      "Investigação de partes do sistema fora do escopo direto para entender comportamentos existentes e identificar defeitos antes de chegarem à produção",
      "Integração dos testes e da análise de qualidade ao pipeline de CI com GitLab CI",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "JUnit",
      "Mockito",
      "SonarQube",
      "GitLab CI",
      "PostgreSQL",
    ],
  },
  {
    company: "NPI / UFC",
    role: "Estagiário Full Stack",
    period: "Jul/2025 — Jan/2026",
    location: "Quixadá, CE",
    summary:
      "Sistema institucional de gerenciamento de bolsas da Universidade Federal do Ceará.",
    highlights: [
      "Desenvolvimento de endpoints e evolução de APIs REST com Java e Spring",
      "Refatoração de código legado e implementação de novas regras de negócio",
      "Modelagem de tabelas e desenvolvimento de consultas com PostgreSQL",
      "Desenvolvimento de telas e funcionalidades CRUD com Vue.js, integradas às APIs REST do projeto",
    ],
    stack: ["Java", "Spring", "PostgreSQL", "Vue.js"],
  },
];
