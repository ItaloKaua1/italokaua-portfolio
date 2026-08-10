import type { Differential } from "@/types";

export const differentials: Differential[] = [
  {
    title: "Construção de SaaS",
    description:
      "Do modelo de dados ao billing: estruturo produtos SaaS pensando em multi-tenancy, permissões e crescimento desde o primeiro commit.",
    icon: "layers",
  },
  {
    title: "Integrações Google Cloud",
    description:
      "Serviços gerenciados, filas, storage e autenticação conectados de forma segura entre a aplicação e a nuvem.",
    icon: "cloud-cog",
  },
  {
    title: "CI/CD",
    description:
      "Pipelines que testam, buildam e publicam sem depender de deploy manual — entrega contínua como parte do fluxo, não uma etapa à parte.",
    icon: "git-branch",
  },
  {
    title: "Arquitetura Backend",
    description:
      "Decisões de arquitetura pensadas para o problema real: quando modularizar, quando manter simples e onde vale investir em escalabilidade.",
    icon: "network",
  },
  {
    title: "APIs REST",
    description:
      "Contratos claros, versionamento pensado e documentação que um time consegue consumir sem precisar me perguntar nada.",
    icon: "plug",
  },
  {
    title: "Segurança",
    description:
      "Autenticação, autorização e tratamento de dados sensíveis como parte do design — não como revisão de última hora.",
    icon: "shield-check",
  },
  {
    title: "RAG",
    description:
      "Aplicações de IA com contexto real: recuperação de informação combinada a modelos de linguagem para respostas úteis, não genéricas.",
    icon: "brain-circuit",
  },
];
