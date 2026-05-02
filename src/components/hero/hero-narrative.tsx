import { highlights, summaryPoints } from "@/content/portfolio";
import { person } from "@/lib/site-config";

export function HeroNarrative() {
  return (
    <div className="min-w-0 space-y-6 lg:col-span-7">
      <p className="text-muted whitespace-pre-line text-pretty text-[1.02rem] leading-relaxed lg:max-w-none xl:pe-4">
        {person.bio}
      </p>
      {summaryPoints.length > 0 ? (
        <ul className="text-muted list-inside list-disc space-y-2 text-sm leading-relaxed marker:text-accent lg:text-[0.95rem]">
          {summaryPoints.map((item) => (
            <li key={item} className="ps-1">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="text-soft flex flex-wrap gap-x-2 gap-y-2 text-xs lg:pt-1">
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
