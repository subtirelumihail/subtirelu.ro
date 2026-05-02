import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    host: new URL(siteUrl).host,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
