import { siteUrl } from "@/lib/site-config";

export interface FooterSiteDisplay {
  href: string;
  label: string;
}

function stripPort(host: string): string {
  return host.split(":")[0]?.toLowerCase() ?? "";
}

function stripWww(host: string): string {
  return host.replace(/^www\./, "");
}

/**
 * Resolves footer link + label from the incoming request host (or `x-forwarded-host` on edge).
 * Falls back to `siteUrl` for localhost, previews, and unknown hosts.
 */
export function getFooterSiteFromForwardedHost(hostHeader: string | null): FooterSiteDisplay {
  const raw = stripPort((hostHeader ?? "").trim());
  const host = stripWww(raw);

  if (host === "subtirelu.ro" || host.endsWith(".subtirelu.ro")) {
    return { href: "https://subtirelu.ro", label: "subtirelu.ro" };
  }

  if (host === "subtirelu.info" || host.endsWith(".subtirelu.info")) {
    return { href: "https://subtirelu.info", label: "subtirelu.info" };
  }

  const fallbackHref = siteUrl;
  return {
    href: fallbackHref,
    label: fallbackHref.replace(/^https?:\/\//, ""),
  };
}
