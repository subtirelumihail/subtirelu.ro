import { person, resumePdfPath } from "@/lib/site-config";

export function HeroContactAside() {
  return (
    <aside
      aria-label="Contact and résumé"
      className="flex flex-col gap-6 border-border lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:border-l lg:pl-10 xl:pl-12"
    >
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] lg:p-6">
        <h2 className="font-display text-soft mb-4 text-xs font-semibold uppercase tracking-[0.12em]">
          Contact
        </h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-soft text-xs font-medium uppercase tracking-wide">
              Email
            </dt>
            <dd className="mt-1">
              <a
                className="text-accent hover:text-accent-hover break-all underline-offset-4 transition-colors duration-200 ease-out hover:underline"
                href={`mailto:${person.email}`}
              >
                {person.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-soft text-xs font-medium uppercase tracking-wide">
              Phone
            </dt>
            <dd className="mt-1">
              <a
                className="text-accent hover:text-accent-hover underline-offset-4 transition-colors duration-200 ease-out hover:underline"
                href={`tel:${person.phoneE164}`}
              >
                {person.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-soft text-xs font-medium uppercase tracking-wide">
              Location
            </dt>
            <dd className="text-muted mt-1">{person.location}</dd>
          </div>
        </dl>
      </div>

      <a
        href={resumePdfPath}
        download
        className="font-display bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 text-sm font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.08)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_6px_20px_-8px_var(--accent)] active:scale-[0.99] motion-reduce:transform-none"
      >
        Download résumé (PDF)
      </a>
    </aside>
  );
}
