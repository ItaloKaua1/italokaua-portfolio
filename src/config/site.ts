import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Ítalo Kauã Vitor Fernandes",
  role: "Engenheiro de Software Backend & Full Stack",
  // TODO: confirm final domain before deploying
  url: "https://italokaua.dev",
  description:
    "Engenheiro de Software formado pela UFC, com experiência em desenvolvimento backend e full stack: Java, Spring Boot, APIs REST, PostgreSQL, React, TypeScript, Docker e CI/CD.",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Diferenciais", href: "#edge" },
  { label: "Contato", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ItaloKaua1", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/italokaua1",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:italo.kaua.11@gmail.com", icon: "mail" },
];

export const resumeUrl = "/cv-italo-kaua.pdf";
