"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/site";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function Contact() {
  const email = socialLinks.find((s) => s.icon === "mail");

  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-6 py-24 md:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <SectionHeading
        eyebrow="~/contact"
        align="center"
        title="Vamos conversar?"
        description="Aberto a oportunidades como Backend ou Full Stack Developer. Se o seu time está resolvendo algo interessante, quero saber."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex flex-col items-center gap-6"
      >
        <Button
          // biome-ignore lint/a11y/useAnchorContent: text is Button's children, merged onto the anchor by base-ui's `render` prop
          render={<a href={email?.href ?? "#"} />}
          nativeButton={false}
          size="lg"
        >
          <Mail className="size-4" />
          Enviar um email
        </Button>

        <div className="flex gap-2">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Button
                key={social.href}
                render={
                  // biome-ignore lint/a11y/useAnchorContent: icon is Button's children, merged onto the anchor by base-ui's `render` prop
                  <a
                    href={social.href}
                    target={social.icon !== "mail" ? "_blank" : undefined}
                    rel={social.icon !== "mail" ? "noreferrer" : undefined}
                    aria-label={social.label}
                  />
                }
                nativeButton={false}
                variant="outline"
                size="icon"
              >
                <Icon className="size-4" />
              </Button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
