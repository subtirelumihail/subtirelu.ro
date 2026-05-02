import { highlights, summaryPoints } from "@/content/portfolio";
import { person } from "@/lib/site-config";

export function HeroNarrative() {
  return (
    <div className="min-w-0 w-full space-y-6 text-center lg:col-span-7 lg:text-left">
      <div className="space-y-4">
        <h2
          id="about-me-heading"
          className="font-display text-soft text-xs font-semibold uppercase tracking-[0.12em]"
        >
          About me
        </h2>
        <p className="text-muted mx-auto max-w-[42rem] whitespace-pre-line text-wrap text-center text-[1.02rem] leading-relaxed lg:mx-0 lg:max-w-none lg:text-left lg:text-pretty xl:pe-4">
          {person.bio}
        </p>
      </div>
      {summaryPoints.length > 0 ? (
        <ul className="text-muted list-inside list-disc space-y-2 text-sm leading-relaxed marker:text-accent lg:text-[0.95rem]">
          {summaryPoints.map((item) => (
            <li key={item} className="ps-1">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="text-soft hidden flex-wrap gap-x-2 gap-y-2 text-xs sm:flex sm:justify-center lg:justify-start lg:pt-1">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full bg-accent-surface px-3 py-1.5 text-[0.7rem] font-medium leading-snug text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
