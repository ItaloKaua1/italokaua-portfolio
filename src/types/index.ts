export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type NavItem = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  image?: string;
  links: {
    repo?: string;
    live?: string;
  };
  status: "live" | "in-progress" | "coming-soon";
};

export type Differential = {
  title: string;
  description: string;
  icon: string;
};
