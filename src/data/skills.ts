import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    description: "APIs, regras de negócio e a espinha dorsal dos sistemas.",
    items: ["Java", "Spring Boot", "Python", "Node.js", "REST APIs", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces que entregam a experiência ao usuário final.",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Infraestrutura, deploy e serviços gerenciados.",
    items: ["Google Cloud", "Cloudflare", "DigitalOcean"],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Modelagem e persistência de dados.",
    items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "Firebase"],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "CI/CD, observabilidade e automação de entrega.",
    items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Git Flow"],
  },
  {
    id: "tools",
    label: "Ferramentas",
    description: "O ferramental do dia a dia.",
    items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Figma"],
  },
];
