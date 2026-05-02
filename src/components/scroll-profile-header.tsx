"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { QuickContactActions } from "@/components/quick-contact-actions";
import { person } from "@/lib/site-config";

/** Matches Tailwind `max-md` (< 768px). */
const MOBILE_LAYOUT_MEDIA_QUERY = "(max-width: 767px)";

const JOB_TITLE_SENTINEL_ID = "hero-job-title-end";
const RESUME_DOWNLOAD_SENTINEL_ID = "hero-resume-download-end";

export function ScrollProfileHeader() {
  const [pastJobTitle, setPastJobTitle] = useState(false);
  const [pastResumeDownload, setPastResumeDownload] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_LAYOUT_MEDIA_QUERY);
    queueMicrotask(() => {
      setIsMobileLayout(mq.matches);
    });

    function handleMqChange() {
      setIsMobileLayout(mq.matches);
    }

    mq.addEventListener("change", handleMqChange);

    const titleEl = document.getElementById(JOB_TITLE_SENTINEL_ID);
    const resumeEl = document.getElementById(RESUME_DOWNLOAD_SENTINEL_ID);
    if (!titleEl || !resumeEl) {
      mq.removeEventListener("change", handleMqChange);
      return;
    }

    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        setPastJobTitle(
          !entry.isIntersecting && entry.boundingClientRect.top < 0,
        );
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    const observerResume = new IntersectionObserver(
      ([entry]) => {
        setPastResumeDownload(
          !entry.isIntersecting && entry.boundingClientRect.top < 0,
        );
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    observerTitle.observe(titleEl);
    observerResume.observe(resumeEl);

    return () => {
      mq.removeEventListener("change", handleMqChange);
      observerTitle.disconnect();
      observerResume.disconnect();
    };
  }, []);

  const showStickyHeader =
    isMobileLayout === null
      ? false
      : isMobileLayout
        ? pastJobTitle
        : pastResumeDownload;

  return (
    <div
      role="region"
      aria-label="Profile summary and quick contact"
      aria-hidden={!showStickyHeader}
      className={
        "border-border supports-[backdrop-filter]:bg-background/80 fixed inset-x-0 top-0 z-40 border-b bg-background/95 backdrop-blur-sm " +
        "transition-[opacity,transform] duration-300 ease-[var(--ease-out)] motion-reduce:transition-none " +
        (showStickyHeader
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0")
      }
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top, 0px))",
        paddingBottom: "0.625rem",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 md:gap-4 sm:px-10 lg:px-14">
        <div className="border-border bg-accent-surface size-11 shrink-0 overflow-hidden rounded-xl shadow-[0_1px_0_0_var(--border)] ring-1 ring-black/[0.04] md:size-12">
          <Image
            src="/profile.png"
            alt=""
            width={96}
            height={96}
            sizes="(max-width: 768px) 44px, 48px"
            className="size-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="font-display text-foreground truncate text-sm font-semibold leading-tight tracking-tight md:text-base">
            {person.name}
          </p>
          <p className="text-muted mt-0.5 truncate text-xs font-medium leading-snug md:text-sm">
            {person.jobTitle}
          </p>
        </div>
        <QuickContactActions variant="header" className="hidden md:flex" />
      </div>
    </div>
  );
}
