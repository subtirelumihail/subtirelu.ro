import { BackgroundRoles } from "@/components/background-roles";
import { FeaturedRoleCard } from "@/components/featured-role-card";
import PortfolioHero from "@/components/hero";
import { Section } from "@/components/section";
import { SkillMatrix } from "@/components/skill-matrix";
import {
  backgroundRoles,
  earlierCareerRoles,
  education,
  featuredRoles,
  languages,
} from "@/content/portfolio";
import { person, siteUrl } from "@/lib/site-config";

function SiteFooter() {
  return (
    <footer
      className="animate-enter text-soft border-border mt-20 border-t pt-10 text-center text-sm lg:mt-28"
      style={{ animationDelay: "420ms" }}
    >
      <p>
        © {new Date().getFullYear()} {person.name}.{" "}
        <a
          href={siteUrl}
          className="text-accent hover:text-accent-hover underline-offset-4 transition-colors hover:underline"
        >
          {siteUrl.replace(/^https?:\/\//, "")}
        </a>
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main
      id="profile"
      className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
    >
      <PortfolioHero delayMs={0} />
      <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-24">
        <Section
          id="focus"
          eyebrow="Experience"
          title="Where most time goes now"
          intro="Freelance product work end to end — architecture, delivery, and polished frontend UX for client teams."
          delayMs={60}
        >
          <div className="flex flex-col gap-8">
            {featuredRoles.map((role) => (
              <FeaturedRoleCard key={role.id} role={role} />
            ))}
          </div>
        </Section>
        <Section
          id="background"
          eyebrow="Background"
          title="Earlier product and leadership roles"
          intro="Shorter stops that shaped how I think about systems, teams, and delivery."
          delayMs={140}
        >
          <BackgroundRoles
            roles={backgroundRoles}
            earlierRoles={earlierCareerRoles}
          />
        </Section>
        <Section id="skills" eyebrow="Stack" title="My skills" delayMs={220}>
          <SkillMatrix />
        </Section>
        <Section
          id="education"
          eyebrow="Education & languages"
          title="Formal study and working languages"
          delayMs={300}
        >
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="border-border bg-surface rounded-2xl border p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] sm:p-7">
              <h3 className="font-display text-soft text-xs font-semibold uppercase tracking-[0.12em]">
                Education
              </h3>
              <ul className="mt-5 space-y-6">
                {education.map((row) => (
                  <li key={row.school}>
                    <p className="font-display text-foreground text-base font-semibold leading-snug">
                      {row.school}
                    </p>
                    <ul className="text-muted mt-2 space-y-1.5 text-[0.95rem] leading-relaxed">
                      {row.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-border bg-surface rounded-2xl border p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] sm:p-7">
              <h3 className="font-display text-soft text-xs font-semibold uppercase tracking-[0.12em]">
                Languages
              </h3>
              <ul className="mt-5 divide-border divide-y border-t border-border">
                {languages.map((lang) => (
                  <li
                    key={lang.label}
                    className="flex flex-col gap-1 py-4 first:pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="font-display text-foreground text-base font-semibold">
                      {lang.label}
                    </span>
                    <span className="text-muted text-[0.95rem]">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
      <SiteFooter />
    </main>
  );
}
