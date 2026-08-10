import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { navItems, siteConfig, socialLinks } from "@/config/site";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="space-y-2">
            <a
              href="#top"
              className="font-mono text-sm font-medium tracking-tight text-foreground"
            >
              ítalo<span className="text-primary">.</span>dev
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.role}. Construindo sistemas backend, integrações e
              produtos com atenção aos detalhes.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm md:flex md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-1">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.icon !== "mail" ? "_blank" : undefined}
                  rel={social.icon !== "mail" ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground font-tabular md:flex-row md:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono">Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
