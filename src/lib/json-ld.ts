import { education, featuredRoles, languages, skillGroups } from "@/content/portfolio";
import { person, resumePdfUrl, sameAs, siteUrl } from "@/lib/site-config";

export function getPersonJsonLd() {
  const flatSkills = [
    ...skillGroups.flatMap((g) => g.items),
    ...skillGroups.map((g) => g.name),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    alternateName: person.sortableName,
    jobTitle: person.jobTitle,
    description: `${person.tagline} ${person.bio}`,
    url: siteUrl,
    image: `${siteUrl}/profile.png`,
    email: person.email,
    telephone: person.phoneE164,
    homeLocation: {
      "@type": "Place",
      name: person.location,
    },
    sameAs: [...sameAs],
    knowsAbout: flatSkills,
    knowsLanguage: languages.map((l) => `${l.label} (${l.level})`),
    worksFor: {
      "@type": "Organization",
      name: featuredRoles[0]?.organization ?? "Webtron Future Solutions",
    },
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school.replaceAll('"', ""),
    })),
    subjectOf: {
      "@type": "DigitalDocument",
      name: "Curriculum Vitae — Mihail Gabriel Subtirelu",
      encodingFormat: "application/pdf",
      url: resumePdfUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: `${person.name} — portfolio`,
    },
  };
}
