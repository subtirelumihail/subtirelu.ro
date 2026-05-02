import { getPersonJsonLd } from "@/lib/json-ld";

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getPersonJsonLd()),
      }}
    />
  );
}
