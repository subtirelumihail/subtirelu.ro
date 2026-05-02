import Image from "next/image";

import { highlights, summaryPoints } from "@/content/portfolio";
import { person, resumePdfPath } from "@/lib/site-config";

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** Waving hand — Phosphor “hand-waving-bold” (MIT), fills like GH/LI/gamepad. */
function HelloWaveIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="M184.63,23.14a12,12,0,0,1,15-8A72.34,72.34,0,0,1,228.4,32a12,12,0,0,1-16.58,17.35,48.31,48.31,0,0,0-19.2-11.2A12,12,0,0,1,184.63,23.14ZM232.85,167.8A92,92,0,0,1,64.31,190l-40-69.32A32,32,0,0,1,36,77a31.72,31.72,0,0,1,7.54-3.14A32,32,0,0,1,88.65,32.45a32,32,0,0,1,53,3.55l14.53,25.17A32,32,0,0,1,206.35,68l17.31,30A91.38,91.38,0,0,1,232.85,167.8Zm-30-57.81L185.57,80a8,8,0,0,0-13.86,8h0l6.68,11.57a12,12,0,0,1-3.18,15.59,28,28,0,0,0-6.41,38.1,12,12,0,1,1-19.86,13.46,52.05,52.05,0,0,1,3.9-63.4L120.9,48A8,8,0,0,0,107,56l24.25,42a12,12,0,1,1-20.78,12L79.33,56a8,8,0,0,0-13.85,8L99,122a12,12,0,0,1-20.78,12L58.93,100.67a8,8,0,1,0-13.85,8L85.1,178a68,68,0,0,0,117.78-68ZM50.46,198a12,12,0,1,0-20.78,12,132.79,132.79,0,0,0,20,26.38,12,12,0,1,0,17.17-16.76A109.2,109.2,0,0,1,50.46,198Z" />
    </svg>
  );
}

/** Game controller — matches filled GitHub/LinkedIn glyph weight. */
function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.29-.39 1.58-1l2.04-4.35C8.81 12.8 9.32 12.5 10 12.5h4c.68 0 1.19.3 1.44.85l2.04 4.35c.29.61.9 1 1.58 1h0c1.55 0 2.74-1.37 2.56-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1h-1v1h1v-1zm2 2h-1v1h1v-1z" />
    </svg>
  );
}

const profileLinks = [
  {
    label: "GitHub",
    hint: "Code and open work",
    href: person.github,
    rel: "me noopener noreferrer",
    icon: GitHubLogo,
  },
  {
    label: "LinkedIn",
    hint: "Experience and recommendations",
    href: person.linkedin,
    rel: "me noopener noreferrer",
    icon: LinkedInLogo,
  },
  {
    label: "AddIt",
    hint: "Number puzzle game",
    href: person.addItGame,
    rel: "noopener noreferrer",
    target: "_blank" as const,
    icon: GamepadIcon,
  },
  {
    label: "Hello",
    hint: "Hello animation on CodePen",
    href: person.helloCodepen,
    rel: "noopener noreferrer",
    target: "_blank" as const,
    icon: HelloWaveIcon,
  },
] as const;

/** Shared surface pill so GitHub/LI match (border + muted icon hover). */
const profileIconSurfaceClass =
  "border-border bg-surface text-foreground hover:bg-background";

function ProfileIconLinks({ navClassName }: { navClassName: string }) {
  return (
    <nav aria-label="External links" className={navClassName}>
      {profileLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            title={link.hint}
            rel={link.rel}
            {...("target" in link ? { target: link.target } : {})}
            className={`focus-visible:ring-accent inline-flex size-11 items-center justify-center rounded-full border shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.12)] active:scale-[0.98] motion-reduce:transform-none ${profileIconSurfaceClass}`}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </nav>
  );
}

export function PortfolioHero({ delayMs = 0 }: { delayMs?: number }) {
  return (
    <header
      className="animate-enter space-y-10 lg:space-y-14"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {/* Identity — aligned to same 12-col grid as body */}
      <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
        <div className="mx-auto w-40 shrink-0 sm:w-44 lg:col-span-3 lg:mx-0 lg:w-full lg:max-w-[13.5rem] xl:max-w-[14rem]">
          <div className="bg-accent-surface aspect-square overflow-hidden rounded-2xl shadow-[0_1px_0_0_var(--border)] ring-1 ring-black/[0.04]">
            <Image
              src="/profile.png"
              alt="Professional headshot of Mihail Gabriel Subtirelu, wearing a blue check shirt against a light background."
              width={440}
              height={440}
              priority
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 224px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="min-w-0 text-center lg:col-span-9 lg:pt-1 lg:text-left">
          <h1 className="font-display mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {person.name}
          </h1>
          <p className="text-accent font-display mt-2 text-lg font-medium">
            {person.jobTitle}
          </p>
          <p className="text-muted mx-auto mt-4 max-w-[42rem] text-pretty text-[1.05rem] leading-relaxed lg:mx-0 lg:max-w-[48rem]">
            {person.tagline}
          </p>
          <ProfileIconLinks navClassName="mt-5 flex flex-wrap justify-center gap-3 lg:mt-6 lg:justify-start" />
        </div>
      </div>

      {/* Narrative + actions — fills viewport width with balanced columns */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
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
      </div>
    </header>
  );
}
