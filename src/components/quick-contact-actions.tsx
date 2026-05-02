import { LinkedInLogo, PhoneIcon } from "@/components/hero/hero-icons";
import { person, resumePdfPath } from "@/lib/site-config";

const iconWrapClass =
  "border-border bg-surface text-foreground hover:bg-background focus-visible:ring-accent inline-flex size-11 shrink-0 items-center justify-center rounded-full border shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.12)] active:scale-[0.98] motion-reduce:transform-none";

const resumeDockClass =
  "font-display bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full px-3 py-2.5 text-center text-[11px] font-semibold leading-snug shadow-[0_1px_0_0_rgba(15,23,42,0.08)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_6px_20px_-8px_var(--accent)] active:scale-[0.99] motion-reduce:transform-none sm:text-xs";

const resumeHeaderClass =
  "font-display bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-xs font-semibold leading-snug shadow-[0_1px_0_0_rgba(15,23,42,0.08)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_6px_20px_-8px_var(--accent)] active:scale-[0.99] motion-reduce:transform-none sm:px-5 sm:text-sm";

interface QuickContactActionsProps {
  variant: "dock" | "header";
  className?: string;
}

export function QuickContactActions({
  variant,
  className = "",
}: QuickContactActionsProps) {
  const resumeClass = variant === "dock" ? resumeDockClass : resumeHeaderClass;

  return (
    <div
      className={
        "flex items-center gap-2 " +
        (variant === "dock" ? "min-w-0 " : "shrink-0 ") +
        className
      }
    >
      <a
        href={person.linkedin}
        rel="me noopener noreferrer"
        className={iconWrapClass}
        aria-label="LinkedIn profile"
        title={person.linkedin}
      >
        <LinkedInLogo className="size-5" />
      </a>

      <a href={resumePdfPath} download className={resumeClass}>
        Download résumé (PDF)
      </a>

      <a
        href={`tel:${person.phoneE164}`}
        className={iconWrapClass}
        aria-label={`Call ${person.phoneDisplay}`}
        title={`Call ${person.phoneDisplay}`}
      >
        <PhoneIcon className="size-5" />
      </a>
    </div>
  );
}
