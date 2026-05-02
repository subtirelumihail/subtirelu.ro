import Image from "next/image";

import { person } from "@/lib/site-config";

import { ProfileIconLinks } from "./hero-profile-icon-links";

export function HeroIdentity() {
  return (
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
        <div
          id="hero-job-title-end"
          aria-hidden
          className="pointer-events-none h-px w-full shrink-0 opacity-0"
        />
        <p className="text-muted mx-auto mt-4 max-w-[42rem] text-wrap text-[1.05rem] leading-relaxed lg:text-pretty lg:mx-0 lg:max-w-[48rem]">
          {person.tagline}
        </p>
        <ProfileIconLinks navClassName="mt-5 flex flex-wrap justify-center gap-3 lg:mt-6 lg:justify-start" />
      </div>
    </div>
  );
}
