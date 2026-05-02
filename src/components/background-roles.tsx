import type { BackgroundRole } from "@/content/portfolio";

function BackgroundRoleCard({
  role,
  nested = false,
}: {
  role: BackgroundRole;
  nested?: boolean;
}) {
  const locationLine =
    role.location != null && role.location.length > 0
      ? role.location
      : undefined;

  return (
    <article
      aria-labelledby={`bg-role-${role.id}-title`}
      className={
        nested
          ? "bg-surface border-border/80 rounded-2xl border p-5 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08),0_1px_0_0_rgba(15,23,42,0.04)] sm:p-6"
          : "bg-surface border-border rounded-2xl border p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] sm:p-8"
      }
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3
          id={`bg-role-${role.id}-title`}
          className="font-display text-foreground text-lg font-semibold tracking-tight"
        >
          {role.organization}
        </h3>
        <p className="text-soft text-xs font-medium tabular-nums">
          {role.period}
        </p>
      </div>
      <p className="text-soft mt-1 text-xs">
        {role.title}
        {locationLine != null ? <> · {locationLine}</> : null}
      </p>
      <p className="text-muted mt-4 leading-relaxed">{role.intro}</p>
      <ul className="text-muted mt-4 list-inside list-disc space-y-2 marker:text-accent">
        {role.highlights.map((item) => (
          <li key={item} className="ps-1 text-[0.95rem] leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
      {role.stack != null && role.stack.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {role.stack.map((tech) => (
            <li key={tech}>
              <span className="bg-accent-surface text-accent inline-block rounded-md px-2.5 py-1 text-xs font-medium">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function BackgroundRoles({
  roles,
  earlierRoles,
}: {
  roles: BackgroundRole[];
  earlierRoles: BackgroundRole[];
}) {
  return (
    <div className="flex flex-col gap-8">
      {roles.map((role) => (
        <BackgroundRoleCard key={role.id} role={role} />
      ))}

      <details className="border-accent-ring/35 group bg-accent-surface/55 rounded-2xl border outline-none shadow-[0_1px_3px_-1px_rgba(15,23,42,0.08)] open:shadow-[0_4px_18px_-6px_rgba(15,23,42,0.12)] transition-shadow duration-200 ease-out [&_summary::-webkit-details-marker]:hidden">
        <summary className="font-display hover:bg-white/35 flex cursor-pointer list-none items-start justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-200 ease-out sm:items-center sm:px-6 sm:py-5">
          <span className="min-w-0">
            <span className="text-foreground block text-sm font-semibold tracking-tight sm:text-base">
              More professional history
            </span>
            <span className="text-muted font-body mt-1 block text-sm leading-relaxed">
              Previous roles that I took between 2011–2016
            </span>
          </span>
          <span
            aria-hidden
            className="text-accent group-open:rotate-180 mt-0.5 shrink-0 text-xs font-semibold transition-transform duration-200 ease-out motion-reduce:transition-none sm:mt-0"
          >
            ▾
          </span>
        </summary>
        <div className="border-border/60 space-y-5 border-t px-4 py-5 sm:px-6 sm:py-6">
          {earlierRoles.map((role) => (
            <BackgroundRoleCard key={role.id} nested role={role} />
          ))}
        </div>
      </details>
    </div>
  );
}
