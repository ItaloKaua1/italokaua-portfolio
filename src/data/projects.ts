import type { Project } from "@/types";

// TODO(italo): repo do BPMN-Ext-Bot pendente; Boxys é privado e ainda não
// lançado.
export const projects: Project[] = [
  {
    slug: "bpmn-ext-bot",
    name: "BPMN-Ext-Bot",
    description:
      "Projeto de Conclusão de Curso (TCC): assistente conversacional para extensão da linguagem BPMN 2.0. Arquitetura de RAG híbrido que combina recuperação semântica e dados tabulares, com o modelo Qwen 2.5 3B executado localmente via Ollama, roteamento de consultas e prompts com guardrails. Nota média de 88/100 em testes automatizados de acurácia.",
    image: "/bpmn-ext-bot-capa.png",
    stack: [
      "Python",
      "LlamaIndex",
      "Pandas",
      "RAG híbrido",
      "LLMs",
      "Qwen 2.5",
      "Ollama",
      "Vector Embeddings",
    ],
    links: {},
    status: "live",
  },
  {
    slug: "boxys",
    name: "Boxys",
    description:
      "Plataforma de campanhas prontas focada em gerar leads rápido para o mercado imobiliário e de vendas: ativação de anúncios, copy e landing pages em poucos minutos, com foco em conversão para lançamentos e bairros estratégicos.",
    image: "/boxys.png",
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
    links: {},
    status: "in-progress",
  },
  {
    slug: "maresia",
    name: "Maresia",
    description:
      "Sistema de gestão de altas hospitalares do PET-Saúde Digital/UFC, parte de uma API que integra prontuário hospitalar, prontuário da APS e a plataforma de regulação municipal. Permite visualizar, editar e encaminhar altas do AGHU por perfil de acesso (gerente, gestor, médico, admin), com verificação automática de novas altas, notificações ao médico responsável e trilha de auditoria completa. Mais de 90% de cobertura de testes auditada pelo SonarQube.",
    image: "/Maresia.png",
    stack: [
      "Java",
      "Spring Boot",
      "JUnit",
      "Mockito",
      "SonarQube",
      "GitLab CI",
      "PostgreSQL",
    ],
    links: {},
    status: "in-progress",
  },
];
