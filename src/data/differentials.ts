import type { Differential } from "@/types";

export const differentials: Differential[] = [
  {
    title: "Construção de SaaS",
    description:
      "Atuação de ponta a ponta em plataforma SaaS: backend, frontend, banco de dados, integrações e infraestrutura no mesmo produto.",
    icon: "layers",
  },
  {
    title: "Arquitetura Backend & APIs",
    description:
      "Organização dos serviços, modelagem de dados e contratos de API claros — em Java/Spring Boot ou Supabase Edge Functions.",
    icon: "network",
  },
  {
    title: "Testes & Qualidade",
    description:
      "Mais de 90% de cobertura com JUnit e Mockito, auditada pelo SonarQube e integrada ao pipeline de CI.",
    icon: "flask-conical",
  },
  {
    title: "Integrações Externas",
    description:
      "Google Ads API, YouTube Data API e serviços do Google Cloud adaptados às regras de negócio da plataforma.",
    icon: "plug",
  },
  {
    title: "CI/CD",
    description:
      "Ambientes conteinerizados com Docker e deploys automatizados com GitHub Actions e GitLab CI.",
    icon: "git-branch",
  },
  {
    title: "Segurança",
    description:
      "OAuth, controle de acesso, auditoria e Row Level Security no PostgreSQL tratados como parte do design.",
    icon: "shield-check",
  },
  {
    title: "RAG & LLMs",
    description:
      "RAG híbrido combinando recuperação semântica e dados tabulares, com LLM local via Ollama e guardrails — avaliado em 88/100 em testes automatizados de acurácia.",
    icon: "brain-circuit",
  },
];
