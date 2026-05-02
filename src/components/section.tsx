interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  delayMs?: number;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  delayMs = 0,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="animate-enter scroll-mt-24"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <p className="text-soft text-xs font-medium uppercase tracking-[0.14em]">
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]"
      >
        {title}
      </h2>
      {intro ? (
        <p className="text-muted mt-3 max-w-2xl text-[1.05rem] leading-relaxed">
          {intro}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
