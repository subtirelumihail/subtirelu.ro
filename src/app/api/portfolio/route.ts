import { NextResponse } from "next/server";

import {
  backgroundRoles,
  earlierCareerRoles,
  education,
  featuredRoles,
  highlights,
  languages,
  skillGroups,
  summaryPoints,
} from "@/content/portfolio";
import { person, resumePdfUrl, sameAs, siteUrl } from "@/lib/site-config";

/**
 * Machine-readable portfolio snapshot for crawlers, assistants, and MCP clients.
 */
export async function GET() {
  const body = {
    version: 1,
    profileUrl: siteUrl,
    resumePdfUrl,
    person: {
      name: person.name,
      sortableName: person.sortableName,
      jobTitle: person.jobTitle,
      tagline: person.tagline,
      bio: person.bio,
      email: person.email,
      phone: person.phoneDisplay,
      phoneE164: person.phoneE164,
      location: person.location,
      website: person.website,
      sameAs: [...sameAs],
    },
    summaryPoints: [...summaryPoints],
    highlights: [...highlights],
    featuredRoles,
    backgroundRoles: backgroundRoles.map(
      ({
        id,
        organization,
        title,
        period,
        intro,
        location,
        highlights: bullets,
        stack,
      }) => ({
        id,
        organization,
        title,
        period,
        intro,
        location,
        highlights: bullets,
        stack,
      }),
    ),
    earlierCareerRoles: earlierCareerRoles.map(
      ({
        id,
        organization,
        title,
        period,
        intro,
        location,
        highlights: bullets,
        stack,
      }) => ({
        id,
        organization,
        title,
        period,
        intro,
        location,
        highlights: bullets,
        stack,
      }),
    ),
    skillGroups: skillGroups.map((g) => ({ name: g.name, items: [...g.items] })),
    education: education.map((e) => ({ school: e.school, lines: [...e.lines] })),
    languages: languages.map((l) => ({ ...l })),
  };

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
