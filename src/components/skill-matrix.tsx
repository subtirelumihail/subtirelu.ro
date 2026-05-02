"use client";

import { useMemo, useState } from "react";

import { skillGroups, spotlightSkills } from "@/content/portfolio";

const spotlightSkillSet = new Set<string>(spotlightSkills);

function SpotlightStarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

const skillPillClass =
  "inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-[background-color,box-shadow,border-color] duration-200 ease-out";

export function SkillMatrix() {
  const [query, setQuery] = useState("");

  const normalized = normalizeQuery(query);

  const filteredGroups = useMemo(() => {
    if (!normalized) return skillGroups;
    return skillGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.toLowerCase().includes(normalized) ||
            group.name.toLowerCase().includes(normalized),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [normalized]);

  return (
    <div className="space-y-6">
      <div className="max-w-xs">
        <label htmlFor="skill-search" className="sr-only">
          Search tools and domains
        </label>
        <input
          id="skill-search"
          type="search"
          inputMode="search"
          autoComplete="off"
          placeholder="Search skills…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-border text-foreground placeholder:text-soft focus:border-accent focus:ring-accent/20 font-display w-full rounded-xl border bg-surface px-3 py-2.5 text-sm shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-200 ease-out focus:ring-2"
        />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredGroups.map((group) => (
          <div key={group.name}>
            <h3 className="font-display text-soft text-xs font-semibold uppercase tracking-[0.12em]">
              {group.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const isSpotlight = spotlightSkillSet.has(item);
                return (
                  <li key={item}>
                    <span className={skillPillClass}>
                      {isSpotlight ? (
                        <SpotlightStarIcon className="size-3 shrink-0 text-amber-500" />
                      ) : null}
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      {normalized && filteredGroups.length === 0 ? (
        <p className="text-muted text-sm">No matching skills — try another term.</p>
      ) : null}
    </div>
  );
}
