import { headers } from "next/headers";

import { getFooterSiteFromForwardedHost } from "@/lib/footer-site";
import { person } from "@/lib/site-config";

function forwardedHost(headersList: Headers): string | null {
  const xForwarded = headersList.get("x-forwarded-host");
  if (xForwarded) {
    return xForwarded.split(",")[0]?.trim() ?? null;
  }
  return headersList.get("host");
}

export async function SiteFooter() {
  const headersList = await headers();
  const site = getFooterSiteFromForwardedHost(forwardedHost(headersList));
  const copyrightYear = new Date().getFullYear();

  return (
    <footer
      className="animate-enter text-soft border-border mt-20 border-t pt-10 text-center text-sm lg:mt-28"
      style={{ animationDelay: "420ms" }}
    >
      <p>
        © {copyrightYear} {person.name}.{" "}
        <a
          href={site.href}
          className="text-accent hover:text-accent-hover underline-offset-4 transition-colors hover:underline"
        >
          {site.label}
        </a>
      </p>
    </footer>
  );
}
