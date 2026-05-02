import type { FeaturedRole } from "@/content/portfolio";

export function FeaturedRoleCard({ role }: { role: FeaturedRole }) {
  return (
    <article
      aria-labelledby={`role-${role.id}-title`}
      className="bg-surface border-border rounded-2xl border p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3
          id={`role-${role.id}-title`}
          className="font-display text-foreground text-lg font-semibold tracking-tight"
        >
          {role.organization}
        </h3>
        <p className="text-soft text-xs font-medium tabular-nums">
          {role.period}
        </p>
      </div>
      <p className="text-soft mt-1 text-xs">
        {role.title} · {role.locationNote}
      </p>
      <p className="text-muted mt-4 leading-relaxed">{role.intro}</p>
      <ul className="text-muted mt-4 list-inside list-disc space-y-2 marker:text-accent">
        {role.highlights.map((item) => (
          <li key={item} className="ps-1 text-[0.95rem] leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {role.stack.map((tech) => (
          <li key={tech}>
            <span className="bg-accent-surface text-accent inline-block rounded-md px-2.5 py-1 text-xs font-medium">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
