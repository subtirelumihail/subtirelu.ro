import { person } from "@/lib/site-config";

import {
  GamepadIcon,
  GitHubLogo,
  HelloWaveIcon,
  LinkedInLogo,
} from "./hero-icons";

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

const profileIconSurfaceClass =
  "border-border bg-surface text-foreground hover:bg-background";

interface ProfileIconLinksProps {
  navClassName: string;
}

export function ProfileIconLinks({ navClassName }: ProfileIconLinksProps) {
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
